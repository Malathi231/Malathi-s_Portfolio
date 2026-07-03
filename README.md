# Malathi G — Portfolio

A modern, responsive, ATS-friendly single-page portfolio built with plain HTML, CSS, and JavaScript (no build step required).

## File structure

```
portfolio/
├── index.html          # All page content & structure
├── css/
│   └── style.css        # Design tokens, layout, animations, responsive rules
├── js/
│   └── script.js         # Theme toggle, nav, scroll reveal, form, scroll-to-top
├── assets/
│   └── Malathi_G_Resume.pdf   # Downloadable résumé (replace with your latest PDF)
└── README.md
```

## Before you deploy — fill these in

1. **LinkedIn & GitHub links** — in `index.html`, search for `<a href="#" class="icon-btn"` in the Contact section (`in` and `GH` buttons) and the project `GitHub` / `Demo` links, and replace `#` with your real URLs.
2. **Project links** — each project card has placeholder `GitHub`/`Demo` links (`href="#"`). Point these at your actual repos and deployed demos.
3. **Résumé file** — swap `assets/Malathi_G_Resume.pdf` for your latest exported PDF (keep the same filename, or update the `href` in the two "Download Résumé" buttons and the nav "Resume" button).
4. **Contact form** — the form is front-end only (it shows a confirmation message but doesn't send email). Wire it to a real backend, or the fastest options with zero server code:
   - [Formspree](https://formspree.io) — add `action="https://formspree.io/f/yourFormId"` and `method="POST"` to the `<form>` tag.
   - [EmailJS](https://www.emailjs.com) — send straight from JS using their SDK.

## Run locally

No build tools needed — just open `index.html` in a browser, or serve it locally:

```bash
# Python
python3 -m http.server 8000

# Node (if you have npx)
npx serve .
```

Then visit `http://localhost:8000`.

## Deployment

### Vercel
1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: **Other** (static site) — no build command needed, output directory is the repo root.
4. Deploy.

### Netlify
1. Push to GitHub (or drag-and-drop the folder at [app.netlify.com/drop](https://app.netlify.com/drop)).
2. If using Git: **New site from Git** → select the repo → leave build command empty, publish directory `.`.
3. Deploy.

### GitHub Pages
1. Push this folder to a repo (e.g. `malathi-portfolio`).
2. Repo **Settings → Pages** → Source: `Deploy from a branch` → Branch: `main` / root.
3. Your site will be live at `https://<username>.github.io/malathi-portfolio/`.

## What's implemented

- **Sticky, responsive navbar** with mobile hamburger menu
- **Dark/light mode toggle** (defaults to system preference, no external storage used)
- **Hero** with animated typing effect and clear CTAs
- **Skills** with animated proficiency bars, grouped by category, plus soft-skill chips
- **Projects** as cards with problem statement, tech stack pills, and GitHub/demo links
- **Experience & Training**, **Education**, and **Certifications** as clean timelines/cards
- **Contact section** with a working-style form (needs a backend/service — see above) and direct email/phone links
- **Scroll-reveal animations** and a **scroll-to-top** button
- **Accessibility**: skip-to-content link, semantic landmarks, visible focus states, `aria-*` attributes, `prefers-reduced-motion` support
- **SEO**: descriptive `<title>`, meta description/keywords, Open Graph & Twitter tags, semantic heading structure
- **Performance**: no framework/build step, minimal external requests (Google Fonts only), small CSS/JS footprint

## ATS-friendliness notes

This is a *visual* portfolio site, not the document an ATS parses — always submit your résumé PDF (in `assets/`) directly to job applications, since ATS systems parse the PDF/DOCX, not a live website. Keep that résumé's wording consistent with this site so a recruiter who checks both sees the same story.

## Suggested enhancements

- Add real screenshots/GIFs to each project card once you deploy the projects
- Add a blog or "notes" section if you want to demonstrate writing/communication skills
- Swap placeholder skill percentages for ones you're confident defending in an interview
- Add Google Analytics or Plausible for visitor insights
- Add a `sitemap.xml` and `robots.txt` if you want stronger SEO once the domain is live
- Consider a custom domain (e.g. `malathig.dev`) via Vercel/Netlify's domain settingsv