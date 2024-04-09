import sendAvatar from "./avatar";
import sendBanner from "./banner";

export interface Env {
	DISCORD_TOKEN: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const p = new URL(request.url).pathname;
		if (p === "/") {
			return new Response(JSON.stringify({ message: "Hello, world!" }), {
				headers: { "content-type": "application/json" },
				status: 200,
			});
		} else {
			const [func, id]: string[] = p.replace(/^\//, "").split("/");
			switch (func) {
				case "avatar": return sendAvatar(id, env.DISCORD_TOKEN);
				case "banner": return sendBanner(id, env.DISCORD_TOKEN);
				default: return new Response("Not found", { status: 404 });
			}
		}
	},
};
