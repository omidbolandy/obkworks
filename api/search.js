import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(20, '1 m'),
});

function normalizeNeshan(data) {
  if (!data.items) return [];
  return data.items.map(item => ({
    title: item.title,
    address: item.address,
    lat: item.location?.y,
    lng: item.location?.x,
  }));
}

function normalizeMaptiler(data) {
  if (!data.features) return [];
  return data.features.map(feature => ({
    title: feature.text,
    address: feature.place_name,
    lat: feature.center?.[1],
    lng: feature.center?.[0],
  }));
}

export default async function handler(req, res) {
  const ip = req.headers['x-forwarded-for'] || 'anonymous';
  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return res.status(429).json({ error: 'Too many requests' });
  }

  const country = req.headers['x-vercel-ip-country'] || 'UNKNOWN';
  const { q, lat, lng } = req.query;

  if (!q) {
    return res.status(400).json({ error: 'Missing query' });
  }

  try {
    let results;

    if (country === 'IR') {
      const centerLat = lat || '35.6892';
      const centerLng = lng || '51.3890';
      const response = await fetch(
        `https://api.neshan.org/v1/search?term=${encodeURIComponent(q)}&lat=${centerLat}&lng=${centerLng}`,
        { headers: { 'Api-Key': process.env.MAP_API_A } }
      );
      const data = await response.json();
      results = normalizeNeshan(data);
    } else {
      const response = await fetch(
        `https://api.maptiler.com/geocoding/${encodeURIComponent(q)}.json?key=${process.env.MAP_API}`
      );
      const data = await response.json();
      results = normalizeMaptiler(data);
    }

    res.status(200).json({ results, provider: country === 'IR' ? 'neshan' : 'maptiler' });
  } catch (err) {
    res.status(500).json({ error: 'Search failed' });
  }
}