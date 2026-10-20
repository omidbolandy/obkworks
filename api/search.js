import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(20, '1 m'),
});

export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || 'anonymous';
  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return res.status(429).json({ error: 'Too many requests' });
  }

  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: 'Missing query' });
  }

  try {
    const [neshanRes, geoapifyRes] = await Promise.all([
  fetch(
    `https://api.neshan.org/geocoding/v1?json=${encodeURIComponent(JSON.stringify({ address: q }))}`,
    { headers: { 'Api-Key': process.env.NESHAN_SEARCH_KEY, 'Content-Type': 'application/json' } }
  ),
  fetch(
    `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(q)}&limit=3&apiKey=${process.env.GEOAPIFY_KEY}`
  )
]);

const neshanData = await neshanRes.json();
const geoapifyData = await geoapifyRes.json();

const neshanResults = (neshanData.items || []).slice(0, 3).map(item => ({
  title: item.neighbourhood || item.city || item.province || '',
  address: [item.neighbourhood, item.city, item.province].filter(Boolean).join('، '),
  lat: item.location?.latitude,
  lng: item.location?.longitude,
}));

const geoapifyResults = (geoapifyData.features || []).map(item => ({
  title: item.properties.name || item.properties.city || '',
  address: [item.properties.name, item.properties.city, item.properties.country].filter(Boolean).join(', '),
  lat: item.properties.lat,
  lng: item.properties.lon,
}));

const results = [...neshanResults, ...geoapifyResults];

  res.status(200).json({ results, provider: 'neshan+geoapify' });

  } catch (err) {
    res.status(500).json({ error: 'Search failed', detail: err.message });
  }
}