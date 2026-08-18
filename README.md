# Amir Mousavi Portfolio

A responsive one-page CV and portfolio website built with Next.js, TypeScript,
Vinext/Vite, and CSS. It includes a connected career timeline, project case
studies, technical expertise, publications, teaching, contact links, and a
downloadable CV.

## Requirements

- Node.js 22.13 or newer
- npm 10 or newer

Check your installed versions:

```bash
node --version
npm --version
```

Download Node.js from <https://nodejs.org/> if it is not installed.

## Run locally

1. Extract the ZIP file.
2. Open a terminal inside the extracted `amir-mousavi-portfolio-source` folder.
3. Install the exact dependency versions:

```bash
npm ci
```

4. Start the local development server. Use the locally installed Vite through
   the package script:

```bash
npm run dev -- --host 0.0.0.0 --port 3000
```

5. Open <http://localhost:3000> in your browser.

Keep the terminal open while using the site. Press `Ctrl+C` in the terminal to
stop the server.

After the first installation, the shorter development command also works:

```bash
npm run dev
```

Vite will print the local address to open.

If `npx` asks permission to install Vite, cancel it and run `npm ci` first. The
project must use the dependency versions recorded in `package-lock.json`.

## Production check

Create and validate a production build with:

```bash
npm run build
```

The generated output is placed in `dist/`.

## Where to make changes

- `app/page.tsx` - all visible content, timeline entries, projects, skills,
  publications, links, and contact information
- `app/globals.css` - colors, typography, layout, responsive styles, and visual
  effects
- `app/layout.tsx` - browser title, description, keywords, and site metadata
- `public/amir-mousavi-cv.pdf` - the downloadable CV
- `public/favicon.svg` - browser icon

To update the CV, replace `public/amir-mousavi-cv.pdf` and keep the same
filename. To add a photograph or project screenshots, put the image files in
`public/` and reference them from `app/page.tsx`, for example:

```tsx
<img src="/project-screenshot.jpg" alt="DocuMind project interface" />
```

## Main technology

- Next.js and React
- TypeScript
- Vinext and Vite
- Tailwind CSS runtime plus custom CSS

No database, API key, or environment variable is required for the current
portfolio.
