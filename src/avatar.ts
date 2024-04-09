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
    }).then((res) => res.json()) as { avatar: string };
    const avatarHash = userData.avatar;
    const avatarUrl = `https://cdn.discordapp.com/avatars/${id}/${avatarHash}.png`;
    const res = await fetch(avatarUrl) as any;
    return new Response(res.body, {
        headers: {
            "content-type": res.headers.get("content-type") || "image/png",
        },
        status: res.status,
    });
}