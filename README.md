# Work Portfolio

A static portfolio website shell for showcasing projects, case studies, archived work, and contact links.

## Run locally

```bash
npm run dev
```

Then open:

```text
http://localhost:5173
```

## Edit content

- The text-only homepage and expandable project descriptions live in `index.html`.
- Homepage styling lives in `index.css`. It uses native HTML disclosures and works without JavaScript; one item opens at a time.
- The collapsed homepage is designed to fit one screen; expanded descriptions can scroll normally on smaller screens.
- Detailed project pages retain their media and demos. Base layouts live in `styles.css`, the simpler presentation in `minimal.css`, and interactions in `script.js`.
- Resume link points to `assets/Michael-Yang-Resume.pdf`.
- The downloadable resume is an unchanged copy of the supplied `Michael_Yang.pdf`.
- The current benchmark diagram is `assets/xaigid-benchmark-overview.svg`; the older PNG is retained as a historical asset and is not displayed.
- Project pages live in `projects/`:
  - `projects/research.html`
  - `projects/robotics.html`
  - `projects/aerospace.html`
- Robotics media and the counterbalance writeup live in `roboticsmedia/`.

This is intentionally dependency-free so it can be hosted on GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static web host.

## Content conventions

The September 2026 refresh uses the approved plan's LinkedIn titles, employer names, and dates, and the supplied resume's project details. Keep the founder role separate from the mortgage research role. ICLR 2027 and ICML 2027 submissions are planned work. The research page's existing arXiv link is a related 2025 preprint, not the COLM 2026 publication.
