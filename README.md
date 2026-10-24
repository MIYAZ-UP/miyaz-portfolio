# MIYAZ U P — Portfolio

Personal portfolio for [MIYAZ U P](https://github.com/MIYAZ-UP), Flutter app developer and publisher of Android apps under [MZ LOOP](https://play.google.com/store/apps/developer?id=MZ+LOOP).

Features the Cashew Co and Mouzy websites, alongside MIFY, NEET BRILLIANT Classes and EDU REPEATER JEE, plus GitHub, LinkedIn, X, Instagram and Google Play links. Public GitHub repositories can be added when available; no repository URLs are invented.

## Development

Run npm install, then npm run dev. Run npm run build to produce the static site in dist/.

Built with Astro, Tailwind CSS, GSAP and Lenis. Content is maintained in src/data/portfolio.ts; the portrait is public/miyaz.webp.

## Deployment

Set the miyazup environment variable to the actual public website URL before building to enable canonical URLs and the sitemap. No hosting domain is assumed.

Cloudflare static assets are configured in wrangler.toml. After building, deploy with npx wrangler deploy when ready.

No email address or resume was supplied, so contact links open LinkedIn and the navigation links to published apps.
