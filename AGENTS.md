# Tellem documentation guidelines

This public repository contains Tellem user documentation for store owners working in the CRM and customers using the storefront app. It also hosts the platform's legal documents.

Pages live in `docs/`; navigation and redirects are configured in `mkdocs.yml`. The site uses MkDocs with the Material theme. See [README.md](README.md) for local setup and validation commands.

## Required project skills

Use the repository-local skills before global or plugin copies with the same name. These instructions apply to Claude Code, Codex, and OpenCode.

- Before writing or editing prose, read and apply [stop-slop](.agents/skills/stop-slop/SKILL.md).
- Before claiming work is complete or ready to commit, read and apply [verification-before-completion](.agents/skills/verification-before-completion/SKILL.md). Choose checks that cover the actual change and report their results and limits.

Read these files directly if the client does not automatically discover or load them. Claude Code uses the aliases in `.claude/skills`; Codex and OpenCode discover `.agents/skills` directly. Keep one canonical copy in `.agents/skills`.

Treat style advice as editorial guidance. Preserve prerequisites, conditions, warnings, uncertainty, necessary list items, interface labels, and legal meaning. Do not invent a human action to replace an accurate description of system behavior. Skills do not expand the task or authorize publication.

## Languages

- Keep `README.md` and agent instructions in English.
- Maintain every user-facing page in Russian and English. Add or update both versions in the same change, preserving the same meaning, steps, conditions, warnings, and cross-links.
- Russian is the default language: `page.md` is published at the existing root URL. Its English counterpart is `page.en.md`, published under `/en/`. This also applies to `index.md` and legal documents.
- Use the unsuffixed `.md` filename in internal links in both languages; the localization plugin selects the matching translation. Keep explicit anchor IDs consistent between translations.
- Translate navigation labels, headings, callout titles, image descriptions, and captions. Use interface labels for the relevant language; do not invent product behavior while translating. Shared screenshots may show the Russian interface; explain this briefly where needed.

## Content and style

- Be concise and specific. Use a formal, neutral, plain tone without jargon, marketing promises, or unnecessary introductions.
- Each page should help with one user task. Explain its purpose, then give the necessary actions and expected result. Avoid long explanations that make readers lose context.
- Do not repeat what is clear from the interface, tooltips, or field descriptions. Keep non-obvious conditions, limitations, and warnings that prevent mistakes.
- Leave out implementation details such as classes, APIs, databases, infrastructure, and developer or support diagnostics. Technical commands belong in repository maintenance instructions.
- Avoid specialist terms and abbreviations. When a term is necessary, explain it briefly on first use and link to further information.
- Match interface labels and official product names: Tellem, Telegram, VK, iiko. Use one name consistently for each action or concept.
- Describe confirmed current behavior. Check uncertain claims against the interface, source code, or an official source; do not present plans or assumptions as available features.
- Avoid information that quickly becomes outdated: current prices, plans, statistics, temporary statuses, and version lists. Link to the maintained source instead. Clearly label numerical examples as examples.

## Page structure and cross-links

- Give each fact one home per language. Link to it briefly from other pages instead of duplicating explanations.
- Connect sections with cross-links to prerequisites, the next step, and related tasks. Place each link where readers need it, preferably pointing to the relevant subsection, and use descriptive link text. Avoid long lists of links unrelated to the current task.
- For CRM instructions, give the navigation path, such as **Settings → Delivery**, followed by the necessary steps and non-obvious details.
- Keep customer actions separate from CRM setup. If owner guidance is needed on a customer page, use one linked `!!! info` callout titled “Для владельца” in Russian or “For store owners” in English.
- Use short paragraphs, lists for steps or enumeration, and tables for comparisons. Shorten repetition or split tasks when a page grows, preserving important conditions and warnings.
- Add a screenshot or GIF only when it helps readers understand or complete an action. Use demo data and meaningful alternative text.
- Use relative Markdown paths for internal links. Check links to sections and images as well as pages.

## Public content

- Treat everything in this repository as public, including agent instructions, examples, and images.
- Never add secrets, tokens, passwords, real personal data, customer exports, internal addresses, logs, or private infrastructure details. Check both text and images before adding them.
- Keep internal plans, discussions, bug reports, and operational instructions out of user documentation. Explain important limitations through their effect on the user and the available next action.

## Changes and validation

- Read related pages before editing. When a workflow changes, check both languages, the CRM and customer app sections, navigation, cross-links, and images. Preserve unrelated work.
- Keep published URLs stable. When moving or merging a page, add a redirect under `plugins.redirects.redirect_maps` in `mkdocs.yml` and update internal links. Account for links from CRM help and other entry points.
- Preserve the meaning of legal documents in `docs/legal/`. The current Russian version is `<document>/index.md`; its English translation is `<document>/index.en.md`. Update the revision date and translation when issuing a new revision; previous versions remain in Git history. Keep legacy `/legal/en/` URLs working through redirects.
- Run `python -m mkdocs build --strict` after changes. Also check changed links, anchors, images, and readability: a successful build does not verify factual accuracy or external website availability.
- A push to `master` triggers site publication. Do not push changes or start publication without an explicit user request.
