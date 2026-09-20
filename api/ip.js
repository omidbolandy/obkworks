export const config = {
  runtime: 'edge',
  
};

export default async function handler(req) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    req.headers.get('x-real-ip') ||
    '1.1.1.1';
    console.log('IP detected:', ip)
    console.log('Token exists:', !!process.env.IPINFO_TOKEN)

  const normalize = (source, data) => {
    if (source === 'ipinfo') {
      const [lat, lng] = (data.loc || '0,0').split(',');
      return {
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country,
        isp: data.org,
        timezone: data.timezone,
        lat: parseFloat(lat),
        lng: parseFloat(lng),
        source: 'ipinfo',
      };
    }
    if (source === 'ipwho') {
      return {
        ip: data.ip,
        city: data.city,
        region: data.region,
        country: data.country,
        isp: data.connection?.isp,
        timezone: data.timezone?.id,
        lat: data.latitude,
        lng: data.longitude,
        source: 'ipwho',
      };
    }
  };

  // ipinfo.io
  try {
    const res = await fetch(
      `https://ipinfo.io/${ip}?token=${process.env.IPINFO_TOKEN}`
      
    );
    if (res.status === 429) throw new Error('rate_limit');
    if (!res.ok) throw new Error('ipinfo_error');
    const data = await res.json();
    return new Response(JSON.stringify(normalize('ipinfo', data)), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    // fallback to ipwho.is
    try {
      const res = await fetch(`https://ipwho.is/${ip}`);
      if (!res.ok) throw new Error('ipwho_error');
      const data = await res.json();
      return new Response(JSON.stringify(normalize('ipwho', data)), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch {
      return new Response(
        JSON.stringify({ error: 'هر دو سرویس در دسترس نیستند' }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }
  
}
