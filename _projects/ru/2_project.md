---
layout: page
title: Morner Bot
description: Telegram бот для отслеживания утренней рутины через смарт-часы для минимизации отвлечений от телефона.
img: assets/img/PlaniriumBot.png
importance: 1
category: productivity
---

## `Morner Bot` - Утренняя рутина через смарт-часы

> Morner Bot помогает формировать последовательные утренние привычки, минимизируя использование телефона. Настройте рутину один раз, затем выполняйте её ежедневно, используя только смарт-часы.

### `Основная идея`

Я считаю, что утро наиболее продуктивно для нашего мозга и разума. Однако сложно избежать отвлечений и не погрузиться в телефон, отсюда и возникла идея этого бота. Вы настраиваете утреннюю рутину один раз через телефон, затем каждое утро взаимодействуете с ботом через смарт-часы, используя только быстрые ответы, минимизируя использование телефона, сохраняя ясность ума, и отсутствие лишнего шума всегда хорошо, на мой взгляд.

### `Техническая реализация`

Разработан на `Python` с использованием библиотеки `aiogram 3.x` для асинхронных операций с Telegram. Бот использует паттерн FSM (конечный автомат) для управления потоком разговора. Сохранение данных через JSON с поддержкой часовых поясов через `pytz`. Все уведомления тихие, чтобы не быть навязчивыми.

### `Интерфейс бота`

#### Главное меню

<details>
    <summary>Просмотр главного меню</summary>
    <div class="row justify-content-center">
        <div class="col-md-5">
            {% include figure.liquid path="assets/img/menu.jpg" title="Главное меню" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Поток задач

<details>
    <summary>Посмотреть поток задач</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/tasks.jpg" title="Поток задач" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Просмотр статистики

<details>
    <summary>Изучить статистику</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/working.jpg" title="Просмотр статистики" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Панель настроек

<details>
    <summary>Управление настройками</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/template.jpg" title="Панель настроек" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Как это работает`

Настройте рутину один раз через телефон. Каждое утро вы получаете тихое уведомление на часах. Нажмите любой быстрый ответ для начала. Завершайте задачи, нажимая любую кнопку быстрого ответа. Бот автоматически продвигается независимо от того, какой быстрый ответ вы используете, так как у всех разные настройки кнопок на часах.

Специальные команды: `Skip` (отмечает текущую задачу как пропущенную), `Menu` (возврат в главное меню). Для поддержания серии требуется 100% выполнение обязательных задач. Необязательные задачи не влияют на серию при пропуске.

### `Ключевые возможности`

Оптимизированный для часов интерфейс с настраиваемыми быстрыми ответами. Управление задачами с типами необязательных/обязательных задач. Настраиваемые временные окна и поддержка часовых поясов. Отслеживание серий с ежедневной/еженедельной/ежемесячной календарной статистикой. Тихие уведомления о начале рутины, предупреждения перед дедлайном и сводки о завершении. Функция паузы/возобновления для прерванных рутин.

### `Размышления`

Разработка Morner Bot научила меня паттернам асинхронного программирования и архитектуре конечных автоматов. Задачей было создать интерфейс, который бы безупречно работал на смарт-часах, сохраняя полную функциональность на телефонах. Обработка часовых поясов и планирование уведомлений требовали тщательного продумывания для надёжной работы в различных пользовательских контекстах.

Для получения дополнительной информации и исходного кода:

- **[Репозиторий Morner Bot на GitHub](https://github.com/Andebugulin/telegram_bot)**
- **[Попробуйте хостинговую версию бота](https://t.me/PlanyDbot)** - Работает на Oracle Cloud

### `Участники`

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