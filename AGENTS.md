# Repository Guidelines

## Project Structure & Module Organization

This is a VitePress-powered documentation site for Codex CLI usage guides and best practices.

```
.
├── docs/                        # VitePress source content
│   ├── .vitepress/
│   │   ├── config.ts            # Site configuration (nav, sidebar, theme)
│   │   ├── dist/                # Build output (generated)
│   │   ├── public/              # Static assets (favicon, images)
│   │   └── theme/               # Custom theme overrides
│   ├── guide/                   # Getting started guides
│   ├── skills/                  # Skill documentation
│   ├── plugins/                 # Plugin documentation
│   ├── mcp/                     # MCP service documentation
│   ├── best-practices/          # Best practice articles
│   └── index.md                 # Homepage
├── .github/workflows/           # CI/CD pipelines
├── package.json                 # Dependencies and scripts
└── AGENTS.md                    # This file
```

Content is written in Chinese (zh-CN) using Markdown. Each content directory maps to a top-level navigation section.

## Build, Test, and Development Commands

| Command | Description |
|---|---|
| `npm install` | Install project dependencies |
| `npm run dev` | Start VitePress dev server with hot reload |
| `npm run build` | Build static site to `docs/.vitepress/dist` |
| `npm run preview` | Preview the production build locally |

## Coding Style & Naming Conventions

- **Language:** All content is written in Simplified Chinese (`lang: 'zh-CN'`).
- **File naming:** Use kebab-case for Markdown files (e.g., `basic-usage.md`, `mcp-system.md`).
- **Directory structure:** Each section has its own directory with an `index.md` as the landing page.
- **Frontmatter:** Pages may use YAML frontmatter for VitePress-specific metadata.
- **Links:** Use relative paths for internal links; absolute URLs for external resources.

## Testing Guidelines

- Run `npm run build` before submitting changes to verify the site compiles without errors.
- Check for broken internal links — VitePress reports these during build.
- Preview with `npm run preview` to visually verify rendering.

## Commit & Pull Request Guidelines

- Commit messages should be concise and descriptive, in English or Chinese.
- Group related changes into logical commits (e.g., one commit per new section or feature).
- Pull requests should include:
  - A clear description of what was added or changed.
  - Verification that `npm run build` succeeds.
  - Screenshots for visual changes (if applicable).

## Deployment

The site deploys automatically to GitHub Pages via `.github/workflows/deploy-pages.yml` on every push to `main`. No manual deployment steps are required.
