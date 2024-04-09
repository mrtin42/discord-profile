import { BASE_URL } from "./constants";

export default async function sendAvatar(id: string, DISCORD_TOKEN: string): Promise<Response> {
    if (!id) {
        return new Response(JSON.stringify({
            message: "Missing ID",
        }), { status: 400, headers: { "content-type": "application/json" }});
    }
    const url = `${BASE_URL}${id}`;
    const userData = await fetch(url, {
        headers: {
            Authorization: `Bot ${DISCORD_TOKEN}`,
        },
    }).then((res) => res.json()) as { banner: string };
    const bannerHash = userData.banner;
    const bannerUrl = `https://cdn.discordapp.com/banners/${id}/${bannerHash}.png?size=4096`;
    const res = await fetch(bannerUrl) as any;
    return new Response(res.body, {
        headers: {
            "content-type": res.headers.get("content-type"),
        },
        status: res.status,
    });
}