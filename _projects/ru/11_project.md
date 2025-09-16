---
layout: page
title: Awareen
description: Приложение для осознанного использования экранного времени с постоянным таймером наложения.
img: assets/img/awareen.png
importance: 1
category: productivity 
---

## `Awareen` – Страж осознанного экранного времени

> Awareen (Awareness + Screen) — это Android-приложение, которое способствует осознанному использованию устройства с помощью постоянного таймера наложения, помогая пользователям быть более внимательными к времени, проведенному перед экраном, во всех приложениях.

### `Технологический стек`

Создано с использованием современных практик Android-разработки:
- `Kotlin` для нативной Android-разработки
- `Архитектура на основе сервисов` для фоновой обработки
- `Разрешения на наложение` для интеграции на системном уровне
- `Foreground-сервисы` для надежной работы
- `SharedPreferences` для сохранения настроек
- `Кастомные UI-компоненты` для гибких вариантов отображения

### `Ключевая инновация: система оповещений из трёх уровней`

Awareen использует прогрессивную систему осознанности, адаптирующуюся к паттернам использования:

1. **Уровень 1 (Зелёный)**: отображение по умолчанию при нормальном использовании (0-30 минут)  
2. **Уровень 2 (Жёлтый)**: предупреждение при приближении к лимиту (30-60 минут)  
3. **Уровень 3 (Красный)**: сигнал при чрезмерном использовании (60+ минут) с возможностью мигания

Все цвета, позиции и пороги времени полностью настраиваемы под индивидуальные предпочтения.

### `Основные функции`

#### Постоянный таймер наложения
- **Всегда видимый таймер**, работающий во всех приложениях  
- **Умные режимы отображения**: всегда включен или с настраиваемым интервалом  
- **Настраиваемое позиционирование** с индивидуальными размерами шрифтов и цветами для каждого уровня  
- **Интеграция на системном уровне**, которая сохраняется при переключении приложений и вращении устройства  

#### Расширенная конфигурация
- **Трёхуровневая настройка** цветов, позиций и порогов  
- **Гибкие интервалы отображения** с настраиваемыми длительностями  
- **Авто-сброс каждый день** по времени, заданному пользователем  
- **Обработка оптимизации батареи** для бесперебойной работы  

#### Панель аналитики
- **Отслеживание ежедневного использования** с распознаванием паттернов  
- **Визуализация исторических данных** для долгосрочной осознанности  
- **Анализ тенденций** для выявления привычек использования  

### `Галерея скриншотов`

#### Основной интерфейс и настройки

<details>
    <summary>Посмотреть скриншоты приложения</summary>
    <div class="col-sm-8">
            {% include figure.liquid path="assets/img/Awareen_app_demonstration.png" title="Основной интерфейс" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="caption">
        Полный интерфейс с основными элементами управления, настройками, аналитикой и функционалом наложения
    </div>
</details>

### `Техническая архитектура`

#### Сервисная архитектура
```kotlin
class ScreenTimeService : Service() {
    private val overlayManager = OverlayManager()
    private val timeTracker = TimeTracker()
    
    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        startForeground(NOTIFICATION_ID, createNotification())
        return START_STICKY // Гарантирует перезапуск сервиса после завершения
    }
}
````

#### Система управления разрешениями

```kotlin
// Комплексная обработка разрешений в Android
private fun requestOverlayPermission() {
    if (!Settings.canDrawOverlays(this)) {
        val intent = Intent(
            Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
            Uri.parse("package:$packageName")
        )
        startActivityForResult(intent, OVERLAY_PERMISSION_REQUEST)
    }
}
```

#### Динамическая конфигурация отображения

```kotlin
class OverlayManager {
    fun updateDisplayLevel(screenTime: Long) {
        val level = when {
            screenTime < level1Threshold -> DisplayLevel.NORMAL
            screenTime < level2Threshold -> DisplayLevel.WARNING  
            else -> DisplayLevel.ALERT
        }
        applyLevelConfiguration(level)
    }
}
```

### `Структура проекта`

```
app/src/main/
├── java/com/example/screentimetracker/
│   ├── MainActivity.kt              # Главная точка входа приложения
│   ├── ScreenTimeService.kt         # Основной сервис отслеживания
│   ├── SettingsActivity.kt          # Интерфейс настроек
│   ├── AnalyticsActivity.kt         # Аналитика использования
│   ├── InfoActivity.kt              # О приложении и помощь
│   ├── AppSettings.kt               # Константы конфигурации
│   ├── BootReceiver.kt              # Автозапуск при старте системы
│   └── UnsavedChangesDialog.kt      # Управление несохранёнными изменениями
├── res/
│   ├── layout/                      # UI-лейауты
│   ├── drawable/                    # Иконки и графика
│   ├── values/                      # Строки и темы
│   └── xml/                         # Резервные конфигурации
└── AndroidManifest.xml              # Разрешения и компоненты
```

### `Дополнительные функции`

#### Обработка оптимизации батареи

Приложение умно управляет ограничениями оптимизации батареи на Android, обеспечивая стабильную работу на разных устройствах и версиях Android.

#### Интеграция автозапуска

Бесшовная интеграция с процессами загрузки системы гарантирует автоматическую активацию системы осознанности без вмешательства пользователя.

#### Совместимость с разными устройствами

Комплексная обработка разрешений и резервные механизмы обеспечивают совместимость с различными версиями Android (8.0+) и производителями устройств.

### `Установка и настройка`

```bash
# Настройка для разработки
git clone https://github.com/Andebugulin/awareen.git
cd awareen

# Сборка и установка
./gradlew assembleDebug
adb install app/build/outputs/apk/debug/app-debug.apk
```

### `Путь разработки`

Создание Awareen стало исследованием программирования на уровне системы Android, психологии пользовательского поведения и устойчивой архитектуры приложений. Проект поставил передо мной следующие задачи:

* **Освоить Android-сервисы** и управление foreground-сервисами
* **Разобраться со сложной системой разрешений** на разных версиях Android
* **Создать интуитивный UX** для приложений, ориентированных на продуктивность
* **Реализовать постоянный таймер наложения** с уважением к приватности пользователей
* **Учесть оптимизацию батареи** и сложность автозапуска
* **Создать гибкую систему настроек** для разных пользовательских предпочтений

Приложение успешно привлекло более 100 пользователей через органические каналы распространения, демонстрируя реальный спрос на решения для осознанного использования технологий.

### `Влияние и распространение`

* **Более 100 активных пользователей** через различные каналы распространения
* **Подписанные релизные версии** с соблюдением Android-безопасности
* **Положительные отзывы пользователей** о повышении осознанности использования экрана
* **Вклад в open-source** в экосистему цифрового благополучия

Для детального изучения реализации и участия:

* **[Awareen GitHub Repository](https://github.com/Andebugulin/awareen)**

### `Участники`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Загрузка участников...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/Andebugulin/awareen/contributors';
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
