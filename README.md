# [Tellem](https://tellem.tech) documentation

Public documentation for store owners and customers: [Russian](https://orgtellem.github.io/) · [English](https://orgtellem.github.io/en/).

See [AGENTS.md](AGENTS.md) for writing, translation, and public repository guidelines. [CLAUDE.md](CLAUDE.md) imports the same instructions for Claude. Keep these repository instructions in English; maintain user documentation in both Russian and English.

## Structure

- [mkdocs.yml](mkdocs.yml) — MkDocs and Material settings, languages, navigation, and redirects.
- [docs/](docs/) — Russian pages (`page.md`) and English translations (`page.en.md`); `docs/media/` contains shared images and GIFs.
- [docs/legal/](docs/legal/) — current legal documents and their translations. Legacy `/legal/en/` URLs redirect to the corresponding `/en/legal/` pages.
- [requirements.txt](requirements.txt) — site dependencies and allowed versions.

Russian pages keep their existing URLs; English pages are served under `/en/`. The language switcher opens the corresponding page. Update both translations together, using unsuffixed `.md` paths in internal links so the site keeps readers in their chosen language.

## Local development

Use Python 3.12, matching CI, and an activated virtual environment.

```sh
python -m pip install -r requirements.txt
python -m mkdocs serve
```

Open the local address printed in the terminal. Use `/en/` for the English version.

Validate both languages before submitting changes:

```sh
python -m mkdocs build --strict
```

Check external links and the text's accuracy against the interface separately. Some shared screenshots show the Russian interface.

CI also checks that every page has a translation. Link preview cards are enabled in CI and disabled in local builds by default.

## Publication

The [deployment workflow](.github/workflows/mkdocs-deploy.yml) runs on pushes to `master` or manually through **Run workflow** in GitHub Actions. After a successful strict build, it deploys both languages to GitHub Pages.

Pushing to `master` also publishes legal documents. Make sure all changes are ready for public access before pushing.
