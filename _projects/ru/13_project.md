---
layout: page
title: Wordor
description: Улучшенный переводчик с алгоритмом интервальных повторений для мгновенного запоминания переводов.
img: assets/img/wordor.png
importance: 2
category: изучение языков
---

## `Wordor` - Умный переводчик со встроенной системой обучения

> Wordor сочетает перевод с интервальными повторениями. Находите интересные слова, сохраняйте их мгновенно и учите через интеллектуальную систему повторений с подсказками на основе ИИ.

### `Основная идея`

Изучая языки, я часто встречаю при переводе интересные слова, которые хочу запомнить. Однако перенос их в отдельное приложение для изучения, как Anki, казался громоздким, и я их забывал. Wordor решает это, объединяя перевод и изучение словарного запаса в единый опыт. Переведите слово, сохраните его одним касанием, и пусть алгоритм интервальных повторений управляет вашим расписанием обучения.

### `Техническая реализация`

Создано на `Flutter` для кроссплатформенной поддержки Android. Использует `Riverpod` для управления состоянием и `Drift` ORM с `SQLite` для локального хранения данных. Перевод на основе `DeepL API`, с опциональным `Gemini AI` для создания умных подсказок. Планирование фоновых задач через `Android Alarm Manager` с системой локальных уведомлений.

### `Интерфейс приложения`

#### Экран перевода

<details>
    <summary>Посмотреть интерфейс перевода</summary>
    <div class="row justify-content-center">
        <div class="col-md-5">
            {% include figure.liquid path="assets/img/wordor_translate.png" title="Экран перевода" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Система повторений

<details>
    <summary>Посмотреть процесс повторений</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/wordor_review.png" title="Система повторений" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Настройки

<details>
    <summary>Настройки</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/wordor_settings.png" title="Настройки" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Как это работает`

Введите слово или используйте голосовой ввод. Выберите исходный и целевой языки из недавно использованных пар. Получите мгновенный перевод от DeepL и сохраните стоящие запоминания слова одним касанием. Повторяйте слова по расписанию через интервалы, адаптирующиеся к вашим результатам.

Используйте прогрессивную систему подсказок при необходимости: пример предложения на исходном языке, созданный ИИ, объяснение значения на целевом языке, подсказка первой буквы или полное раскрытие. Отмечайте ответы как «Знаю», «Подсказка помогла» или «Забыл», чтобы настроить будущие интервалы. Слова автоматически планируются для оптимального запоминания.

### `Основные возможности`

Голосовой ввод с распознаванием речи. Умный перевод от DeepL с памятью языковых пар. Четырехуровневая система подсказок ИИ с примерами предложений и объяснениями. Алгоритм интервальных повторений с адаптивными интервалами (от 1 дня до ~100 дней). Уведомления со значком, показывающим количество слов для повторения. История переводов с отслеживанием статуса сохранения. Офлайн-архитектура с локальным хранилищем SQLite.

### `Алгоритм интервальных повторений`

Начальный интервал 1 день. Успех умножает интервал на 2,5x, частичный успех на 1,5x, неудача сбрасывает на 1 день. Максимальный интервал ограничен примерно 100 днями. Алгоритм балансирует запоминание с эффективностью повторений.

### `Размышления`

Создание Wordor научило меня интеграции внешних API с локальным хранением данных и реализации алгоритмов интервальных повторений. Задачей было создать систему подсказок, которая действительно помогает обучению, не делая повторения слишком простыми. Планирование фоновых задач и управление уведомлениями требовали тщательного тестирования для обеспечения надежности на разных версиях Android.

Для дополнительной информации и исходного кода:

- **[Wordor GitHub Repository](https://github.com/Andebugulin/wordor)**
- **[Скачать APK](https://github.com/Andebugulin/wordor/releases)** - Android 7.0+

### `Участники`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Загрузка участников...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/Andebugulin/wordor/contributors';
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