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

- Featured projects live in `featuredProjects` inside `script.js`.
- Archive rows live in `archiveProjects` inside `script.js`.
- Homepage introduction, experience, education, skills, and leadership live in `index.html`.
- Visual styling lives in `styles.css`.
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
