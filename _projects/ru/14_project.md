---
layout: page
title: Guardian
description: Android приложение для продуктивности с блокировкой приложений через NFC.
img: assets/img/guardian.png
importance: 2
category: productivity
lang: ru
---

## `Guardian` - Блокировщик Приложений на Основе NFC

> Физическая блокировка для Android. Заблокируйте отвлекающие приложения, разблокируйте только касанием NFC.

### `Основная Концепция`

Создайте режим блокировки → Выберите приложения для блокировки/разрешения → Установите необязательное расписание → Привяжите необязательную NFC-метку → Активируйте режим → Оставайтесь сосредоточенными. Без программного обхода - требуется физическое NFC-взаимодействие для разблокировки.

### `Технический Стек`

Создано на `Kotlin` и `Jetpack Compose`. Использует `Kotlin Coroutines` для асинхронных операций, `Kotlinx Serialization` для сохранения состояния и `AlarmManager` для точного планирования. Приоритетный сервис обеспечивает надежность после перезагрузок и удаления задач.

### `Функции`

**Режимы Блокировки**
- Заблокировать Выбранные: Ограничивает доступ к выбранным приложениям
- Разрешить Только: Блокирует всё кроме выбранных приложений
- Необязательное требование NFC-метки для каждого режима

**Планирование**
- Настройка времени по дням с индивидуальным временем начала/конца
- Привязка нескольких режимов
- Необязательная автоматическая деактивация

**NFC-Интеграция**
- Регистрация меток для разблокировки конкретных режимов
- Любое NFC-устройство работает, если не привязана конкретная метка
- Поддержка умных часов, наушников и других меток

### `Скриншоты`

<details>
    <summary>Интерфейс Приложения</summary>
    <div class="row">
        <div class="col-sm-6 mt-3">
            {% include figure.liquid path="assets/img/guardian_home.png" title="Главная" class="img-fluid rounded z-depth-1" %}
        </div>
        <div class="col-sm-6 mt-3">
            {% include figure.liquid path="assets/img/guardian_modes.png" title="Режимы" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6 mt-3">
            {% include figure.liquid path="assets/img/guardian_schedules.png" title="Расписания" class="img-fluid rounded z-depth-1" %}
        </div>
        <div class="col-sm-6 mt-3">
            {% include figure.liquid path="assets/img/guardian_nfc.png" title="NFC-Метки" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6 mt-3">
            {% include figure.liquid path="assets/img/guardian_info.png" title="NFC Info" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Требования`

- Android 6.0+ (API 23)
- NFC-оборудование
- Разрешения: Доступ к Использованию, Поверх Других Приложений, Исключение Оптимизации Батареи

**Пользователи MIUI/Custom ROM**: Отключите "Приостанавливать активность приложения при неиспользовании", включите "Автозапуск", установите батарею на "Без ограничений"

### `Ссылки`

- **[GitHub-репозиторий](https://github.com/Andebugulin/nfcGuard)** - Исходный код
- **[Скачать APK](https://github.com/Andebugulin/nfcGuard/releases)** - Последняя версия

### `Участники`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Загрузка...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/Andebugulin/nfcGuard/contributors';
    const response = await fetch(url);
    const contributors = await response.json();
    const contributorsHtml = contributors.map(c =>
      `<div style="margin: 10px; text-align: center;">
        <img src="${c.avatar_url}" alt="${c.login}" style="width: 80px; height: 80px; border-radius: 50%;">
        <p><a href="${c.html_url}" target="_blank">${c.login}</a></p>
      </div>`
    ).join('');
    document.getElementById('contributors-list').innerHTML = contributorsHtml;
  }
  fetchContributors();
</script>

---

Лицензия MIT | Создано с ❤️ 
Claude AI помог в разработке