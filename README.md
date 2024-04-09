# discord profile images getter

this is a pretty basic cloudflare worker that gets the images of a given discord user profile.

## usage

visit `https://discord-profile.mrtin.workers.dev/<image>/<user_id>/` where `<user_id>` is the id of the user you want to get the image from.
`<image>` can be either `avatar` or `banner` depending on the image you want to get.

## example

`https://discord-profile.mrtin.workers.dev/avatar/488061232461381643/` will return the avatar of me, martin! its so cool!

## setup

1. make yourself a cloudflare account (pitiful if you don't have one already)
2. clone this repo to your local machine, cd then `npm i`
3. make a discord bot and get the token (this is needed to get the user's profile info)
4. upload the token to your cloudflare account as a secret:
```bash
npx wrangler secret put DISCORD_TOKEN
```
5. `npm run deploy` (this might ask you to authenticate the wrangler cli with your cloudflare account if its the first time you're deploying)
6. profit! (just kidding this makes ZERO dollars lol)

## disclaimer

i made this in like 10 minutes so womp womp if it breaks

## license
whatever.

---

discord profile - a [MartinDEV](https://www.martin.blue) project (one day i'll have martindev.com... one day...)