---
layout: page
title: WeatherOrNot
description: Система мониторинга температуры в реальном времени с использованием ESP32, MQTT и веб-приложения.
img: assets/img/weather_or_not.png
importance: 1
category: uni
---

## `WeatherOrNot` — Система мониторинга температуры в реальном времени

> WeatherOrNot — это полнофункциональный IoT-проект, использующий микроконтроллер ESP32 и датчик DHT11 для передачи данных о температуре через брокер MQTT и визуализацию в веб-приложении.

### `Основные возможности`

- **ESP32 + DHT11**: сбор данных о температуре с заданным интервалом  
- **MQTT брокер**: лёгкий и быстрый обмен сообщениями в реальном времени  
- **Веб-панель**: интерактивная визуализация показаний датчиков  
- **Docker-сервисы**: удобный запуск брокера MQTT и базы данных  
- **Скрипты**: единые команды для настройки, симуляции и управления проектом  

---

### `Структура проекта`

```

weather-or-not/
│
├── firmware/                 # Прошивка для микроконтроллера
│   ├── src/
│   │   └── main.ino          # Код ESP32 + DHT11
│   └── lib/                  # Внешние библиотеки
│
├── server/                   # Бэкенд-инфраструктура
│   ├── Dockerfile
│   ├── docker-compose.yml    # Запуск сервисов (MQTT, БД)
│   └── app/
│       ├── mqtt/             # Настройка брокера
│       └── database/         # Скрипты БД и миграции
│
├── web-app/                  # Веб-приложение
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── hooks/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── scripts/                  # Вспомогательные скрипты

```

---

### `Интерфейс`

#### Основной экран  

<details>
    <summary>Интерфейс</summary>
    <div class="row justify-content-center">
        <div class="col-sm-8">
            {% include figure.liquid path="assets/img/main_interface_weatherOrNot.jpg" title="Main Interface" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

---

### `Инструкция по установке`

#### Настройка MQTT брокера
```bash
cd server
docker-compose up -d
```

#### Конфигурация ESP32

1. Открыть **Arduino IDE** или **PlatformIO**
2. Загрузить `firmware/src/main.ino`
3. Указать данные WiFi и адрес брокера MQTT
4. Залить прошивку на ESP32
5. (Опционально) Для теста: `./scripts/fake_arduino.sh`

#### Запуск веб-приложения

```bash
cd web-app
npm install
npm run start-server   # Подписка на MQTT
npm run dev            # Запуск Vite-приложения
# или: npm start       # Запуск всего вместе
```

---

### `Использование скриптов`

Файл `project-manager.sh` упрощает управление:

* `./project-manager.sh start-docker-compose` → Запуск MQTT и БД
* `./project-manager.sh stop-docker-compose` → Остановка сервисов
* `./project-manager.sh run-node-server` → Запуск Node-сервера
* `./project-manager.sh run-vite-app` → Запуск веб-приложения
* `./project-manager.sh run-fake-arduino` → Симуляция данных ESP32
* `./project-manager.sh shell` → Режим интерактивной оболочки

---

### `Поиск и устранение ошибок`

* **Нет подключения к MQTT?**
  Проверь работу брокера, IP и порт в настройках ESP32 и веб-приложения.
* **Нет обновления данных?**
  Убедись, что ESP32 подключен к WiFi и что топики MQTT совпадают у издателя и подписчика.

---

### `Вывод и рефлексия`

Работа над WeatherOrNot дала мне практический опыт по всем уровням IoT-стека: от микроконтроллера и протокола MQTT до серверной части и веб-визуализации. Это не просто термометр, а полноценная система, объединяющая «железо», коммуникацию и софт.

Исходный код и документация доступны здесь:

* **[WeatherOrNot GitHub Repository](https://github.com/Andebugulin/weatherOrNot)**

---

### `Участники`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Loading contributors...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/Andebugulin/WeatherOrNot/contributors';
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
