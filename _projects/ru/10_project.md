---
layout: page
title: HaHaSaaS
description: Платформа SaaS для обмена шутками, доставляющая юмор по запросу.
img: assets/img/hahasaas.svg
importance: 2
category: uni 
---

## `HaHaSaaS` – Смех в облаке

> HaHaSaaS — это SaaS-платформа, предназначенная для мгновенной доставки шуток, с категоризацией и рейтингами для лучшего комедийного опыта.

### `Основные возможности`

HaHaSaaS создан с использованием `Golang` для бэкенда и `React` для фронтенда. Платформа позволяет пользователям просматривать шутки, оценивать их и даже добавлять свои собственные, обеспечивая нескончаемый поток юмора.

### `Интерфейсы страниц`

#### Главная страница

<details>
    <summary>Посмотреть главную страницу</summary>
    <div class="row justify-content-center">
        <div class="col-md-5">
            {% include figure.liquid path="assets/img/joke_interface.png" title="Главная страница" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Добавление шутки

<details>
    <summary>Помощь / Добавление шутки</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/joke_help.png" title="Добавление шутки" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Развертывание через Docker`

Для развертывания HaHaSaaS с помощью Docker выполните:

```sh
git clone https://github.com/andebugulin/hahasaas.git
cd hahasaas
docker-compose up -d
````

Это развернет бэкенд и фронтенд, а также базу данных PostgreSQL для беспроблемного запуска.

### `Документация API (скоро)`

В ближайшее время HaHaSaaS будет интегрирована с `DocBox` для документации API, что облегчит разработчикам изучение и использование доступных эндпоинтов.

### `Заключение и размышления`

Разработка HaHaSaaS была веселым и одновременно сложным опытом. Работа с `Golang`, `React` и `PostgreSQL` позволила мне улучшить навыки full-stack разработки и создать платформу, которая дарит радость пользователям.

Для подробностей смотрите репозиторий проекта:

* **[HaHaSaaS GitHub Repository](https://github.com/Andebugulin/hahasaas)**

### `Участники`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Загрузка участников...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/andebugulin/hahasaas/contributors';
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