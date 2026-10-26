# [Tellem](https://tellem.tech) documentation

Public documentation for store owners and customers: [Russian](https://orgtellem.github.io/) · [English](https://orgtellem.github.io/en/).

See [AGENTS.md](AGENTS.md) for writing, translation, and public repository guidelines. [CLAUDE.md](CLAUDE.md) imports the same instructions for Claude. Keep these repository instructions in English; maintain user documentation in both Russian and English.

## Structure

- [mkdocs.yml](mkdocs.yml) — MkDocs and Material settings, languages, navigation, and redirects.
- [docs/](docs/) — Russian pages (`page.md`) and English translations (`page.en.md`); `docs/media/` contains shared images and GIFs.
- [docs/legal/](docs/legal/) — current legal documents and their translations. Legacy `/legal/en/` URLs redirect to the corresponding `/en/legal/` pages.
- [requirements.txt](requirements.txt) — site dependencies and allowed versions.

Russian pages keep their existing URLs; English pages are served under `/en/`. The language switcher opens the corresponding page. Update both translations together, using unsuffixed `.md` paths in internal links so the site keeps readers in their chosen language.

## Agent environment

[Claude Code](https://code.claude.com/docs/en/skills), [Codex](https://developers.openai.com/codex/skills/), and [OpenCode](https://opencode.ai/docs/skills/) share [AGENTS.md](AGENTS.md) and the versioned skills in [.agents/skills/](.agents/skills/). No global skill installation or environment synchronization is required.

Start a new agent session after pulling changes to these instructions or skills.

- `stop-slop` supports concise editing without changing the documented meaning.
- `verification-before-completion` requires evidence before reporting that work is ready.

[CLAUDE.md](CLAUDE.md) imports the shared rules; `.claude/skills/` contains relative aliases to the canonical skill directories. Codex and OpenCode use `.agents/skills` directly. Agents must follow the skill routing in AGENTS.md even when automatic discovery is unavailable.

Keep the [upstream revisions and license notices](.agents/skills/SOURCES.md) with the skills. After adding or updating a skill, update its Claude alias and run the checks below. CI checks skill metadata, local references, licenses, and alias targets; it cannot prove that a model followed prose instructions.

## Local development

Use Python 3.12, matching CI, and an activated virtual environment. Browser event tests also require Node.js 18 or newer.

```sh
python -m pip install -r requirements.txt
python -m mkdocs serve
```

Open the local address printed in the terminal. Use `/en/` for the English version.

Validate both languages before submitting changes:

```sh
python -m unittest discover -s tests -v
python -m mkdocs build --strict
```

Check external links and the text's accuracy against the interface separately. Some shared screenshots show the Russian interface.

CI also checks that every page has a translation. Link preview cards are enabled in CI and disabled in local builds by default.

## Site features

Section landing pages give readers a task overview before the detailed instructions. Keep their links and navigation entries in both languages. Material's `navigation.indexes` attaches these pages to their sections.

Use content tabs for alternative instructions, such as installation on different devices. Tabs with the same label share the reader's selection across pages. Keep prerequisites and warnings that apply to every option outside the tabs.

```md
=== "iPhone / iPad"

    Instructions for Safari.

=== "Android"

    Instructions for a supported browser.
```

The search dialog can copy a link to the current query. Use page metadata `search: {boost: 2}` to raise a useful task page in results, or a value below `1` to lower it. Test real queries before changing rankings.

Unlinked content images open in GLightbox, with their alternative text as the caption. Keep meaningful alternative text and test Enter, Escape, focus return, and touch navigation. Images already linked to another destination keep that link.

The feedback link below instructions opens a GitHub issue form with the page title and canonical URL. It requires a GitHub account; the header also links to support on Telegram. Legal documents and the home page do not show the feedback link.

The privacy plugin downloads external assets, including Google Fonts, during the build so the published site can serve them locally. The first build requires network access; subsequent builds reuse `.cache/`. Check the browser's network requests after changes to fonts or external media.

Material uses instant navigation. Initialize page-specific JavaScript through `document$.subscribe(...)` and remove old event handlers before rebinding. Test direct loads, internal navigation, browser Back, the language switcher, and returning to the home page.

The language selector keeps the page path and fragment, with a full reload when switching language so navigation labels follow the selected locale. It uses the project's `/` and `/en/` URL contract and shared sitemap; translation links in the sitemap also identify matching pages to search engines.

Material 9.8 receives critical maintenance through [May 5, 2027](https://squidfunk.github.io/mkdocs-material/). Keep content and customizations portable, and evaluate successor compatibility separately before changing the generator.

The current project does not build unchanged with Zensical: its [plugin compatibility list](https://zensical.org/docs/compatibility/mkdocs/plugins/) does not include `mkdocs-static-i18n`, and Git revision dates remain planned. A migration must preserve both language URLs, contextual language links, page dates, and legal redirects before replacing the existing publication command.

## Product screenshots and GIFs

Tellem team members can use [Content Workshop](https://github.com/orgtellem/tellem-content-workshop) to create product screenshots, GIFs and short videos for documentation and Telegram. A coding agent captures the real interface and prepares the material; you can edit its text in a local browser. The workshop repository requires team access. Its README covers setup and use.

Update both language pages together, with matching actions and captions. Keep screenshots truthful; identify shared Russian UI in the English instructions. An English GIF can use `.en.gif` with translated explanations and the same recording. Check the built image URLs and contents: the localization plugin publishes `home-screen-editor.en.gif` as `/en/media/crm/home-screen-editor.gif`, while the Russian file uses `/media/crm/home-screen-editor.gif`. Shared home-page CSS loads from `/css/home.css` in both languages, so its relative logo URLs resolve under `/media/`.

## Home page and header maintenance

Keep home-page layout in [home.css](docs/css/home.css), scoped to `.tellem-home` or `body:has(.tellem-home)`. Keep the shared neutral header in [extra.css](docs/css/extra.css). The [header override](overrides/partials/header.html) adds localized support and website links to Material 9.7.7's native header. Both links open new tabs with `rel="noopener"`; their accessible names announce this. Compare the override with the upstream partial when upgrading Material; preserve its search, navigation, language and theme controls. Check icon-only links at narrow widths and both color schemes. After deployment, follow the top-level tabs to `getting-started/registration/` and `modules/crm/orders/` in both languages and check their headers.

The header and mobile menu share [partials/logo.html](overrides/partials/logo.html): [logo-light.svg](docs/media/logo-light.svg) for the light theme and [logo.svg](docs/media/logo.svg) for the dark theme. Keep their paths and blue accent in sync; only the letter color differs. The `#only-light` and `#only-dark` image fragments control theme visibility in [extra.css](docs/css/extra.css). Both headers use the same surface and text colors.

[home.js](docs/js/home.js) opens the existing search and restores focus on close. Search uses Material's index; test it with real keyboard typing because its query observer listens to `keyup`, which a value-setting helper such as `fill()` does not emit.

The first link in each topic card is its primary destination. CSS extends that link across the card and keeps secondary links above it. Check blank-area clicks, secondary destinations and keyboard focus when editing card links.

The logo plays once for four seconds and holds its final state. Keep its light/dark backgrounds aligned with the page (`#fff` / `#1e2129`) and retain the static SVG alternatives for `prefers-reduced-motion`. The renderer reads the accent from `--tellem-brand` in [extra.css](docs/css/extra.css); rebuild both GIFs and SVG fallbacks after changing that color. Rebuild from the original paths in [logo.svg](docs/media/logo.svg) with [render-wordmark.mjs](scripts/render-wordmark.mjs):

```sh
node scripts/render-wordmark.mjs --workshop ../tellem-content-workshop --output site/wordmark-rebuild
```

Use Node.js 24 or newer, `ffmpeg` and `ffprobe` on `PATH`, and a Content Workshop checkout with its Playwright dependency and Chromium installed. The script groups paths into six letters (`[0]`, `[1]`, `[2]`, `[3,4]`, `[5]`, `[6]`); paths 7 and 8 form the accent. It uses a 190 ms letter stagger, 660 ms fall and settle, 15 fps and a stable final hold from 2.02 seconds. It checks geometry, motion, duration, one-shot playback and the static fallback. The output directory is required; inspect the rebuilt assets before replacing the published files.

After changing the home page or media, run the validation commands above and check both languages at desktop and mobile widths. Check the real search results, keyboard focus, themed logo and reduced-motion fallback. A strict build does not establish those browser behaviours.

## Publication

The [deployment workflow](.github/workflows/mkdocs-deploy.yml) runs on pushes to `master` or manually through **Run workflow** in GitHub Actions. After a successful strict build, it deploys both languages to GitHub Pages.

Pushing to `master` also publishes legal documents. Make sure all changes are ready for public access before pushing.
