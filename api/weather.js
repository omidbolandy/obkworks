export default async function handler(req, res) {
    const city = (req.query.city || "").trim();

    if (!city) {
        return res.status(400).json({ error: "City parameter is required." });
    }

    if (city.length > 80 || /[\u0000-\u001F\u007F]/.test(city)) {
        return res.status(400).json({ error: "Invalid city parameter." });
    }

    const lang = req.query.lang === "fa" ? "fa" : "en";
    const apiKey = process.env.OPENWEATHER_API_KEY;

    if (!apiKey) {
        return res.status(503).json({ error: "Weather service is unavailable." });
    }

    const apiUrl =
        `https://api.openweathermap.org/data/2.5/weather` +
        `?q=${encodeURIComponent(city)}` +
        `&appid=${apiKey}` +
        `&units=metric` +
        `&lang=${lang}`;

    try {
        const response = await fetch(apiUrl, { signal: AbortSignal.timeout(8000) });
        const data = await response.json();

        res.setHeader("Cache-Control", "public, max-age=300");
        return res.status(response.status).json(data);
    } catch {
        return res.status(500).json({ error: "Unable to fetch weather data." });
    }
}