---
layout: page
title: Planirium Bot
description: Удобный Telegram-бот для эффективного ежедневного планирования и управления задачами.
img: assets/img/PlaniriumBot.png
importance: 1
category: productivity
---

## `Planirium Bot` - Ваш помощник в ежедневном планировании

> Planirium Bot упрощает повседневное планирование, предлагая функциональную платформу, которая повышает эффективность и делает управление расписанием лёгким и приятным.

### `Основные возможности`

Planirium Bot написан на `Python` и использует библиотеку `aiogram` для бесшовного взаимодействия с Telegram. Он предоставляет широкий набор функций, которые помогают пользователям оставаться организованными и продуктивными. А ещё он добавляет немного обаяния в ваш день, даря игривые комплименты для мотивации!

### `Макеты страниц`

#### Главное меню

<details>
    <summary>Посмотреть главное меню</summary>
    <div class="row justify-content-center">
        <div class="col-md-5">
            {% include figure.liquid path="assets/img/menu.jpg" title="Главное меню" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Просмотр задач

<details>
    <summary>Открыть список задач</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/tasks.jpg" title="Просмотр задач" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Рабочий режим

<details>
    <summary>Изучить рабочий режим</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/working.jpg" title="Рабочий режим" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Управление шаблонами

<details>
    <summary>Управлять своими шаблонами</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/template.jpg" title="Управление шаблонами" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Заключение и размышления`

Разработка Planirium Bot стала ценным опытом. Она позволила мне глубже изучить Telegram Bot API и библиотеку aiogram, улучшив мои навыки Python-разработки и проектирования пользовательского опыта. А добавление весёлых и воодушевляющих сообщений сделало процесс ещё более приятным!

Для дополнительных подробностей и детального разбора проекта см. документацию:

- **[GitHub-репозиторий Planirium Bot](https://github.com/Andebugulin/telegram_bot)**

### `Особенность: Ежедневные комплименты`

Одна из уникальных функций Planirium Bot — умение добавлять радости в вашу рутину. Независимо от того, работаете ли вы или закрываете задачи, бот поддержит вас милыми комплиментами вроде: «Ты случайно не котик? Потому что ты просто мурр-великолепен!» или «Ты точно волшебник, ведь когда я смотрю на тебя, все остальные исчезают!»

Planirium Bot здесь, чтобы вы улыбались, оставаясь организованными. Удачного планирования!

### `Участники проекта`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Загрузка участников...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/Andebugulin/telegram_bot/contributors';
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
