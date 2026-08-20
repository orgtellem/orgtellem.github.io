# Документация продукта [Tellem](https://tellem.tech)

Публичная документация: https://orgtellem.github.io

## Структура
- `mkdocs.yml` — конфигурация сайта (MkDocs + Material)
- `docs/` — разделы документации
- `docs/media/` — скриншоты и картинки
- `requirements.txt` — зафиксированные версии MkDocs и плагинов

## CI/CD
- Автосборка и публикация в GitHub Pages на каждый push в `master` и вручную через Run workflow.
- Файл рабочего процесса: `.github/workflows/mkdocs-deploy.yml`
- Сборка строгая (`mkdocs build --strict`): битая внутренняя ссылка или картинка валит билд.

## Локальный запуск
1. Установите Python 3.12+
2. Установите зависимости: `pip install -r requirements.txt`
3. Запустите локально: `mkdocs serve`

## Правила
- Имена файлов картинок — латиница, kebab-case; alt-тексты — осмысленные, по-русски.
- Страницы не удаляем и не переименовываем без редиректа (`mkdocs-redirects`, блок `redirect_maps` в `mkdocs.yml`).
- Мультиязычность: сайт готов к добавлению языков через `mkdocs-static-i18n` — новый язык = locale в `plugins.i18n.languages` + файлы `page.en.md` рядом с исходными.
- Пути в интерфейсе CRM пишем полностью: «Раздел → Пункт» (например, «Настройки → Оплата»).
