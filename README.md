# Zatsepina Daria — EAE Portfolio

Static portfolio website for an architecture early-admission application. Hosted on GitHub Pages.

The site is one page: a hero, a stack of projects (image + writeup), an about section, and contact details. Built with plain HTML, CSS, and a tiny bit of JavaScript — no build step, no framework.

## File layout

```
.
├── index.html              Page markup — hero, projects, about, contact, footer
├── styles.css              All styling — design tokens, layout, responsive
├── script.js               Tiny: header gets a hairline border once you scroll
├── assets/
│   ├── images/             Your architecture photographs (see assets/images/README.md)
│   └── favicon.svg         Monogram favicon
├── .nojekyll               Tells GitHub Pages to serve the /assets/ folder directly
└── README.md               You are here
```

## Editing content

### Add or change a project

1. Drop a photograph into `assets/images/` (see [assets/images/README.md](assets/images/README.md) for naming and size tips).
2. In `index.html`, find the project you want to edit. Each one is an `<article class="project">` block.
3. Update:
   - The project number (`01`, `02`, …)
   - The title
   - The `<dl class="project__meta">` block (location, year, typology)
   - The `<img src="…">` path and `alt` text
   - The writeup paragraph(s)
4. To **add** a new project, copy the entire `<article class="project">…</article>` block and paste a new one below it. Update the number, paths, and text. Alternating `project--image-left` and `project--image-right` keeps the layout rhythmic.

### Update the about statement

Edit the `<p>` inside the `<section class="about">` block in `index.html`.

### Update contact details

Replace `hello@example.com` inside the `<section class="contact">` block with your real address.

## Local preview

Just open `index.html` in a browser. No build step.

```
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

## Deploying to GitHub Pages

1. Commit and push to the `main` branch.
2. On GitHub: **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Branch: `main` · Folder: `/ (root)`.
5. Save. The site goes live at:

   ```
   https://<your-github-username>.github.io/zatsepina-website/
   ```

The included `.nojekyll` file ensures the `assets/` folder is served as-is (without Jekyll processing).

### Custom domain (optional)

If you own a domain (for example `zatsepina.org`):

1. Create a `CNAME` file at the repo root containing the domain on a single line.
2. Configure your DNS provider to point an `ALIAS`/`ANAME` (or `A` records) at GitHub Pages' IP addresses. See [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for the current IPs and steps.

## Design

- **Palette**: cool white background (`#FAFAFA`), charcoal text (`#111`), navy accent (`#1B2A4E`), thin hairlines (`#E5E5E5`).
- **Type**: Fraunces (editorial serif) for headings, Inter for body — both from Google Fonts.
- **Layout**: 12-column grid on desktop, single column on tablet and mobile.
- **No frameworks**, no build step. Edit the files, commit, push.

## Accessibility

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`, `<figure>`, `<footer>`).
- Skip-to-content link for keyboard users.
- Visible focus rings.
- Every image requires descriptive `alt` text — keep this up to date when you swap photos.
