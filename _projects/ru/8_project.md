---
layout: page
title: ArchBlocker
description: Мощный блокировщик сайтов с ретро-интерфейсом терминала для управления цифровыми отвлечениями.
img: assets/img/ArchBlocker.png
importance: 1
category: productivity
---

## `ArchWebBlocker` - Ваш хранитель цифрового благополучия

> ArchWebBlocker объединяет возможности блокировки сайтов на уровне системы с ностальгическим терминальным интерфейсом, помогая вам оставаться сосредоточенным, когда это особенно важно.

### `Основные возможности`

Созданный с использованием `Python` для бэкенда и `React` для фронтенда, ArchWebBlocker предлагает уникальный подход к управлению цифровыми отвлечениями. Приложение использует системную блокировку через файл hosts, обеспечивая надёжную блокировку сайтов, которую сложно обойти.

### `Виды интерфейсов`

#### Терминальный интерфейс

<details>
    <summary>Посмотреть терминальный интерфейс</summary>
    <div class="row justify-content-center">
        <div class="col-md-8">
            {% include figure.liquid path="assets/img/terminal.jpg" title="Terminal Interface" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Технический разбор`

#### Архитектура бэкенда
- API-сервер на базе Flask  
- Блокировка сайтов на системном уровне через файл hosts  
- Ротация логов для отладки  
- Безопасная работа с файлами с защитой от изменения  
- Интеграция с systemd для автоматического запуска  

#### Функции фронтенда
- React + Vite для современного опыта разработки  
- Интерфейс в стиле терминала с использованием Lucide React  
- Связь с API в реальном времени  
- Tailwind CSS для адаптивного дизайна  
- Взаимодействие, вдохновлённое командной строкой  

### `Репозиторий`

- **[ArchWebBlocker GitHub Repository](https://github.com/andebugulin/archwebblocker)**

### `Участники`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Загрузка участников...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/andebugulin/archwebblocker/contributors';
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
