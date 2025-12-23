---
layout: page
title: TATASk
description: Инновационная платформа для управления повседневными задачами и активностями.
img: assets/img/wizardTATASK.png
importance: 1
category: uni 
---

## `TATASk` - Ваш помощник в управлении повседневными задачами

> TATASk интегрирует передовые технологии для оптимизации управления повседневными задачами и активностями, предлагая функциональную платформу, которая повышает эффективность и стиль.

### `Основные возможности`

Используя сочетание технологий, таких как `React`, `Node.js`, `PostgreSQL` и `Docker`, `TATASk` обеспечивает надёжную функциональность и масштабируемость.

### `Макеты страниц`

#### Главная страница

<details>
    <div class="row justify-content-center">
        <div class="col-md-8">
            {% include figure.liquid path="assets/img/landing-page.jpg" title="Главная страница" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Панель управления
<details>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/navbar.jpg" title="Панель навигации" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="row justify-content-center">    
        <div class="col-sm-10">
            {% include figure.liquid path="assets/img/task-overview.jpg" title="Обзор задач" class="img-fluid rounded z-depth-1" %}
        </div>
        <div class="col-sm-10">
            {% include figure.liquid path="assets/img/activity-overview.jpg" title="Обзор активностей" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Управление задачами
<details>
    <div class="row justify-content-center">
        <div class="col-sm-8">
            {% include figure.liquid path="assets/img/task-popup.jpg" title="Окно создания задачи" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/task-filter.jpg" title="Фильтр задач по активности" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/task-example-1.jpg" title="Пример задачи 1" class="img-fluid rounded z-depth-1" %}
        </div>
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/task-example-3.jpg" title="Пример задачи 3" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>    
</details>

#### Управление активностями
<details>
    <div class="row justify-content-center">
        <div class="col-sm-8">
            {% include figure.liquid path="assets/img/add-activity-button.jpg" title="Кнопка добавления активности" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-sm-8">
            {% include figure.liquid path="assets/img/activity-popup.jpg" title="Окно создания активности" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="row">
        <div class="col-sm-14">
            {% include figure.liquid path="assets/img/activity-example.jpg" title="Пример активности" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Страница статистики
<details>
    <div class="row">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/statistics-chart-1.jpg" title="График статистики 1" class="img-fluid rounded z-depth-1" %}
        </div>
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/statistics-chart-2.jpg" title="График статистики 2" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Заключение и размышления`

Разработка `TATASK` стала путешествием в мир инноваций и обучения. Проект не только улучшил мои технические навыки, но и углубил понимание пользовательского подхода в дизайне.

Для дополнительных `подробностей` и `детального разбора` использованных технологий см. проектную `документацию`:

- **[TATASk_manager](https://github.com/martimolanes/TATASk_Manager/)**
- **[Настройка и использование базы данных](https://github.com/martimolanes/TATASk_Manager/blob/main/docs/database/database-usage.md)**
- **[Детали реализации сервера](https://github.com/martimolanes/TATASk_Manager/blob/main/docs/server/server-usage.md)**
- **[Подробности клиентского приложения](https://github.com/martimolanes/TATASk_Manager/blob/main/docs/client/application-usage.md)**

### `Участники проекта`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Загрузка участников...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/martimolanes/TATASk_Manager/contributors';
    const response = await fetch(url);
    const contributors = await response.json();

    const contributorsHtml = contributors.map(contributor =>
      `<div class="contributor" style="margin: 10px; text-align: center;">
        <img src="${contributor.avatar_url}" alt="${contributor.login}" style="width: 100px; height: 100px; border-radius: 50%; display: block; margin: auto;">
        <p><a href="${contributor.html_url}" target="_blank">${contributor.login}</a></p>
      </div>`
    ).join('');

    document.getElementById('contributors-list').innerHTML = contributorsHtml;
  }

  fetchContributors();
</script>
