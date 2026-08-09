export async function onRequestGet(context) {
    const url = new URL(context.request.url);

    const city = url.searchParams.get("city");

    if (!city) {
        return new Response(
            JSON.stringify({ error: "City parameter is required." }),
            {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }

    const lang = url.searchParams.get("lang") || "en";

    const apiKey = context.env.OPENWEATHER_API_KEY;

    const apiUrl =
        `https://api.openweathermap.org/data/2.5/weather` +
        `?q=${encodeURIComponent(city)}` +
        `&appid=${apiKey}` +
        `&units=metric` +
        `&lang=${lang}`;

    try {
        const response = await fetch(apiUrl);

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "public, max-age=300",
            },
        });
    } catch {
        return new Response(
            JSON.stringify({
                error: "Unable to fetch weather data.",
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
}