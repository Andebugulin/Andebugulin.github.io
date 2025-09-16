---
layout: page
title: WeatherOrNot
description: Ein Echtzeit-Temperaturüberwachungssystem mit ESP32, MQTT und einer Webanwendung.
img: assets/img/weather_or_not.png
importance: 1
category: uni
---

## `WeatherOrNot` - Echtzeit-Temperaturüberwachungssystem

> WeatherOrNot ist ein umfassendes IoT-Projekt, das einen ESP32-Mikrocontroller und einen DHT11-Sensor nutzt, um Echtzeit-Temperaturdaten über einen MQTT-Broker und eine Webanwendung zur Visualisierung bereitzustellen.

### `Funktions-Highlights`

WeatherOrNot kombiniert die Leistung von Mikrocontroller-Technologie, MQTT-Protokoll und moderner Webentwicklung, um ein effizientes Temperaturüberwachungssystem zu liefern. Es enthält ein benutzerfreundliches Setup-Skript und unterstützt Echtzeit-Datenvisualisierung.

### `Projektstruktur`

Das Projekt ist in mehrere Komponenten organisiert, um Entwicklung und Bereitstellung zu optimieren:

```
weather-or-not/
│
├── firmware/                 # All microcontroller-related code
│   ├── src/
│   │   ├── <something.ino>   # Main firmware
│   │
│   ├── lib/                  # External libraries
│
├── server/
│   ├── Dockerfile            # Dockerfile for server environment
│   ├── docker-compose.yml    # Docker compose file to manage services
│   └── app/
│       ├── mqtt/             # MQTT broker setup
│       └── database/         # Database scripts
│           ├── models/
│           └── migrations/
│
├── web-app/                  # Web application for end-users
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── hooks/
│   ├── index.html
│   ├── vite.config.js        # Vite configuration file
│   └── package.json          # NPM package file
│
└── scripts/                  # Utility scripts (testing scripts or deployment)
```

### `Seitenlayouts`

#### Haupt-Interface-Ansicht 

<details>
    <summary>Haupt-Interface</summary>
    [Image content remains the same]
</details>

### `Setup-Anweisungen`

#### Einrichtung des MQTT-Brokers

1. Navigieren Sie zum `server`-Verzeichnis.
2. Führen Sie `docker-compose up -d` aus, um den Mosquitto MQTT-Broker zu starten.

#### Konfiguration des ESP32 (optional zum Testen)

1. Öffnen Sie die Arduino IDE oder PlatformIO.
2. Laden Sie den bereitgestellten Firmware-Code zum Lesen von Temperaturdaten.
3. Passen Sie die WiFi- und MQTT-Server-Einstellungen im Code an Ihre Umgebung an.
4. Laden Sie die Firmware auf den ESP32 hoch.
5. Alternativ simulieren Sie ESP32-Messungen zum Testen mit `./scripts/fake_arduino.sh`.

#### Ausführung der Webanwendung

1. Navigieren Sie zum `web-app`-Verzeichnis.
2. Führen Sie `npm install` aus, um Abhängigkeiten zu installieren.
3. Starten Sie den Server, der MQTT mit `npm run start-server` abonniert.
4. Starten Sie die Anwendung mit `npm run dev`.
5. Für mehr Komfort können Sie den Server starten und die App gleichzeitig mit `npm start` ausführen.

### `Skript-Verwendung`

WeatherOrNot enthält ein Bash-Skript `project-manager.sh` zur einfachen Verwaltung aller Komponenten:

- **Docker Compose Services starten:** `./project-manager.sh start-docker-compose`
- **Docker Compose Services stoppen:** `./project-manager.sh stop-docker-compose`
- **Node Server ausführen:** `./project-manager.sh run-node-server`
- **Vite App starten:** `./project-manager.sh run-vite-app`
- **Fake Arduino Script ausführen:** `./project-manager.sh run-fake-arduino`
- **Shell-Modus eingeben:** `./project-manager.sh shell` für interaktive Befehle.

### `Fazit und Reflexion`

Die Entwicklung von WeatherOrNot war eine fantastische Erfahrung, die es mir ermöglichte, tief in IoT-Technologien, MQTT-Protokolle und moderne Webentwicklung einzutauchen. Dieses Projekt ist nicht nur ein Zeugnis meiner technischen Fähigkeiten, sondern auch meiner Fähigkeit, verschiedene Technologien in ein kohärentes, funktionales System zu integrieren.

- **[WeatherOrNot GitHub Repository](https://github.com/Andebugulin/weatherOrNot)**


### `Fehlerbehebung`

- **MQTT-Broker-Verbindungsprobleme:** Stellen Sie sicher, dass der MQTT-Broker läuft und zugänglich ist. Überprüfen Sie die IP-Adresse und Port-Konfigurationen sowohl in der ESP32-Firmware als auch in der Webanwendung.
- **Temperaturdaten werden nicht aktualisiert:** Überprüfen Sie, dass der ESP32 korrekt mit dem WiFi verbunden ist und dass das MQTT-Topic zwischen dem Publisher (ESP32) und Subscriber (Web-App) übereinstimmt.


### `Contributors`

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
