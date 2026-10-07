---
layout: page
title: Awareen
description: "Тихий таймер поверх всех приложений, который показывает, сколько вы сегодня провели в телефоне. Без блокировок, без рекламы, без доступа в интернет."
img: assets/img/awareen_icon.png
importance: 1
category: productivity
lang: ru
year: 2025
stack: Kotlin · Android
featured: 2
metric: 350+ пользователей
icon: assets/img/awareen_icon.png
---

<figure class="project-cover"><img src="/assets/img/awareen_cover.png" alt="Awareen"></figure>

<dl class="project-facts">
  <div><dt>Платформа</dt><dd>Android 8.0+</dd></div>
  <div><dt>Технологии</dt><dd>Kotlin, Android Views</dd></div>
  <div><dt>Приватность</dt><dd>Без доступа в интернет</dd></div>
  <div><dt>Пользователи</dt><dd>350+, все органические</dd></div>
</dl>

<div class="cta-row">
  <a href="https://play.google.com/store/apps/details?id=com.andebugulin.awareen2">Google Play</a>
  <a href="https://andebugulin.github.io/Awareen/">Сайт</a>
  <a href="https://github.com/Andebugulin/Awareen">Исходный код</a>
  <a href="https://github.com/Andebugulin/Awareen/releases/latest">APK</a>
</div>

Awareen (awareness + screen) ничего не блокирует. Он показывает маленький таймер поверх любого приложения со временем, проведённым в телефоне сегодня, и доверяет вам это число. Обычно этого достаточно.

<div class="shots">
  <figure><img src="/assets/img/awareen_1.webp" alt="Awareen" loading="lazy"></figure>
  <figure><img src="/assets/img/awareen_2.webp" alt="Awareen" loading="lazy"></figure>
  <figure><img src="/assets/img/awareen_3.webp" alt="Awareen" loading="lazy"></figure>
  <figure><img src="/assets/img/awareen_4.webp" alt="Awareen" loading="lazy"></figure>
  <figure><img src="/assets/img/awareen_5.webp" alt="Awareen" loading="lazy"></figure>
</div>

## Как это работает

Таймер проходит три стадии в течение дня. У каждой стадии своё название, цвета, положение, размер и мигание по желанию, а любая настройка применяется сразу, с живым предпросмотром на экране.

| Стадия | Цвет по умолчанию | Время по умолчанию |
| --- | --- | --- |
| **Calm** | зелёный | первые 30 минут |
| **Heads up** | янтарный | следующие 30 минут |
| **Enough** | красный, мигает | до ежедневного сброса |

- **Как удобно вам.** Всегда, на несколько секунд каждую минуту или никогда, с виджетом на главном экране.
- **Не мешает.** Коснитесь таймера, чтобы скрыть его на пять секунд; перетащите, и он останется там.
- **Ваш день.** Аналитика делит сутки на сон, работу, свободное время и экранное время, рядом среднее, тренд и прогноз на всю жизнь.
- **Надёжный сброс.** День сбрасывается в выбранное время, даже когда телефон спит.
- **Данные ваши.** Настройки и история экспортируются в JSON и переносятся на новый телефон. Без аккаунта, рекламы и доступа в интернет, так что ваше экранное время не может покинуть устройство.

## Архитектура

Чистый Kotlin и Android Views, один файл настроек, без базы данных и DI-фреймворка. `ui` обращается к `service`, `service` к `data`, а `overlay` общий для обоих. Решения оверлея, ключи аналитики и расчёт сброса живут в чистом пакете `domain`, чтобы их можно было тестировать без устройства. Вся графика, от иконки до страницы в Play, генерируется одним скриптом и остаётся единой от релиза к релизу.

## Распространение

Awareen начинался как APK для ручной установки, а сейчас у него больше 350 пользователей в Google Play, и все они органические.
