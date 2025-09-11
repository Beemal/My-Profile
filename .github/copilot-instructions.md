Project: Bimal Parajuli's Profile (AI specialist single-page portfolio)

Purpose
- Help AI coding agents become productive editing, testing, and extending this personal portfolio site.
- Focus on delivering safe, targeted changes: SEO improvements, accessible markup, Angular component edits, and small content updates.

Quick architecture (big picture)
- Angular 12+ single-page app. Root is `src/index.html` and `src/main.ts` bootstraps `AppModule`.
- Component tree:
  - `app-root` (`src/app/app.component.*`) composes `app-header`, `app-body`, `app-footer`.
  - `src/app/body/` contains page sections: `masthead`, `about`, `portfolio`, `contact`, with some nested components (e.g., portfolio `modal`).
- Static assets under `src/assets/` (images, resume PDFs, third-party CSS/JS) are referenced by components with relative paths.
- No server-side rendering: SEO must use on-page meta tags, JSON-LD structured data, and correct headings/alt attributes.

Build / dev / test commands (what I found)
- Standard Angular CLI project. Use these from project root:
  - Install: `npm ci` or `npm install`
  - Dev server: `npm start` (maps to `ng serve` in package.json)
  - Build production: `npm run build` (or `ng build --prod`)
  - Unit tests: `npm test` (karma/jasmine configured)
- If you need to run a quick static verification of index.html changes, build and inspect `dist/` or serve locally with a static server after `npm run build`.

Project-specific conventions & patterns
- Content-first SPA: copy and metadata live in templates inside `src/app/*` and `src/index.html` for global meta tags.
- Paths to assets often use relative segments like `./../../assets/...` from component templates. When changing references, prefer absolute `/assets/...` for consistency in built site.
- H1 usage: `masthead.component.html` contains the main H1; do not add additional H1 elements across the page.
- Accessibility: images should include descriptive `alt` attributes and anchor links should include `rel="noopener noreferrer"` for external targets.
- SEO: Because the app is client-rendered, on-page meta tags in `src/index.html` and JSON-LD are used for discoverability. Keep these in sync with component content (headings/summary paragraphs).

Integration points / external deps
- Third-party JS under `src/third-party/js/` (e.g., `fa.js`, `smtp.js`) and `src/assets/js/smtp.js` are used for icons and contact form email sending. Be careful modifying SMTP code — it may rely on client-side SMTP (insecure for production).
- Certificates/ssl are present at `ssl/` but the repo appears intended for static hosting; update canonical URL in `index.html` when deploying to production domain.

Files to reference when editing
- `src/index.html` — global meta tags, title, structured data
- `src/app/body/masthead/masthead.component.html` — H1, hero copy, avatar image
- `src/app/body/about/about.component.html` — About copy, expertise list and resume link
- `src/assets/` — images and resume PDFs used in social cards and structured data
- `package.json`, `angular.json` — scripts and build configuration

Examples & patterns (concrete)
- Add descriptive alt for avatar (good):
  - `img src="/assets/pics/bimal-profile-pic.jpeg" alt="Bimal Parajuli — AI Solutions Architect and Senior Software Engineer"`.
- JSON-LD Person snippet example (place in `index.html`):
  - Use `application/ld+json` with `@type: Person`, `name`, `jobTitle`, `image`, `sameAs` links (LinkedIn/GitHub).
- Social preview meta tags: include `og:title`, `og:description`, `og:image`, `twitter:card`.

EDITS AI AGENT SHOULD MAKE (short actionable checklist)
- Update `src/index.html` with a descriptive title, meta description, keywords, canonical URL, OpenGraph/Twitter tags and a JSON-LD Person block.
- Ensure `masthead.component.html` avatar `img` has a meaningful `alt` string and the main heading remains the single H1.
- Improve copy in `about.component.html` to include role keywords used across meta tags.
- Change relative asset links in templates to root-absolute `/assets/...` when safe.
- Add `rel="noopener noreferrer"` and descriptive `aria-label` to external links (resume download).

Testing & verification
- After changes, run `npm run build` and inspect `dist/` files for expected meta tags.
- Use the Google Rich Results Test and Google Mobile-Friendly Test on deployed URL. For local verification, build and serve `dist/` on `http://localhost:8080` using `npx http-server ./dist -p 8080`.

Limitations & cautions
- This is a client-rendered SPA. Search engines execute JS, but server-side rendering (Angular Universal) is more robust for top rankings. Recommend SSR if SEO remains critical.
- Do not hardcode personal profile links or credentials. Replace `hhttps://www.bimalparajuli.com.np/` and social URLs with real production links before publishing.

If anything above is missing or you want the agent to implement a full SSR migration plan, tell me which direction to take next.
