export async function onRequestGet(context) {
    const url = new URL(context.request.url);

    const city = (url.searchParams.get("city") || "").trim();

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

    if (city.length > 80 || /[\u0000-\u001F\u007F]/.test(city)) {
        return new Response(
            JSON.stringify({ error: "Invalid city parameter." }),
            {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-store",
                },
            }
        );
    }

    const requestedLang = url.searchParams.get("lang");
    const lang = requestedLang === "fa" ? "fa" : "en";

    const apiKey = context.env.OPENWEATHER_API_KEY;

    if (!apiKey) {
        return new Response(
            JSON.stringify({ error: "Weather service is unavailable." }),
            {
                status: 503,
                headers: {
                    "Content-Type": "application/json",
                    "Cache-Control": "no-store",
                },
            }
        );
    }

    const apiUrl =
        `https://api.openweathermap.org/data/2.5/weather` +
        `?q=${encodeURIComponent(city)}` +
        `&appid=${apiKey}` +
        `&units=metric` +
        `&lang=${lang}`;

    try {
        const response = await fetch(apiUrl, {
            signal: AbortSignal.timeout(8000),
        });

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "public, max-age=300",
            },
            status: response.status,
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