# Документация продукта [Tell'em](https://tellem.tech).

## Структура
- mkdocs.yml — конфигурация сайта
- docs/ — разделы документации

## CI/CD
- Автосборка и публикация в GitHub Pages на каждый push в ветки main/master и вручную через Run workflow.
- Файл рабочего процесса: .github/workflows/mkdocs-deploy.yml
- Публикуется артефакт, собранный командой `mkdocs build` (папка `site`).

## Локальный запуск
1. Установите Python 3.x
2. Установите зависимости: `pip install mkdocs mkdocs-material mkdocs-static-i18n mkdocs-minify-plugin`
3. Запустите локально: `mkdocs serve`