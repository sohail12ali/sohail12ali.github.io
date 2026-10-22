# Mission Control: personal site of Sohail Ali

A dark, console-style portfolio. Built with Astro, Tailwind 4 and MDX.

## Run

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # static site → dist/
npm run audit:names  # fails if an employer/client name leaks into dist/
```

## Edit content (no code needed)

| What | Where |
|---|---|
| Name, headline, links, email | `src/data/site.ts` → `profile` |
| Mission log (career) | `src/data/site.ts` → `missions` |
| Skill bays | `src/data/site.ts` → `modules` |
| Pipeline stages | `src/data/site.ts` → `pipeline` |
| Systems (case studies) | `src/content/systems/*.mdx` |
| Notes | `src/content/notes/*.mdx` |

A system's frontmatter sets its callsign, tagline, status (`live`, `design`, `private` or `classified`), telemetry gauges and stack chips.

**House rule:** describe what was built, never where it was built. CI runs `audit:names` before every deploy. To change the banned list, edit `scripts/audit-names.mjs`.

## Deploy

Pushing to `main` deploys to GitHub Pages through `.github/workflows/deploy.yml`. Two settings matter:

- **Repo name.** The repo must be named `sohail12ali.github.io` to be served at the root URL.
- **Pages source.** In *Settings → Pages*, set the source to **GitHub Actions**.

**If a push doesn't deploy.** On 2026-10-21/22, the first three pushes to `main` never started this workflow, even though the workflow file was valid. Then they began working without any config change. Check with `gh run list --branch main --event push`. Start a missed deploy by hand with `gh workflow run deploy.yml --ref main`.

The canonical site lives at `https://sohailali.pages.dev` (Cloudflare Pages, project `sohailali`). Redeploy it with:

```bash
npm run build && npx wrangler pages deploy dist --project-name=sohailali --branch=main
```

For a custom domain, update `site` in `astro.config.mjs` and add `public/CNAME`.
