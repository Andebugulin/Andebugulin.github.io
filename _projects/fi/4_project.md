---
layout: page
title: WeatherOrNot
description: Reaaliaikainen lämpötilanseurantajärjestelmä käyttäen ESP32:ta, MQTT:tä ja web-sovellusta.
img: assets/img/weather_or_not.png
importance: 1
category: uni
---

## `WeatherOrNot` - Reaaliaikainen Lämpötilanseurantajärjestelmä

> WeatherOrNot on kattava IoT-projekti, joka hyödyntää ESP32-mikrokontrolleria ja DHT11-anturia tarjoaakseen reaaliaikaista lämpötiladataa MQTT-välittäjän ja visualisointiin tarkoitetun web-sovelluksen kautta.

### `Ominaisuuskohokohtia`

WeatherOrNot yhdistää mikrokontrolleriteknologian voiman, MQTT-protokollan ja nykyaikaisen web-kehityksen toimittaakseen tehokkaan lämpötilanseurantajärjestelmän. Se sisältää käyttäjäystävällisen asennusskriptin ja tukee reaaliaikaista datan visualisointia.

### `Projektirakenne`

Projekti on järjestetty useisiin komponentteihin kehityksen ja käyttöönoton virtaviivaistamiseksi:

```
weather-or-not/
│
├── firmware/                 # Kaikki mikrokontrollerikoodi
│   ├── src/
│   │   ├── <something.ino>   # Pääfirmware
│   │
│   ├── lib/                  # Ulkoiset kirjastot
│
├── server/
│   ├── Dockerfile            # Dockerfile palvelinympäristölle
│   ├── docker-compose.yml    # Docker compose -tiedosto palvelujen hallintaan
│   └── app/
│       ├── mqtt/             # MQTT-välittäjän asennus
│       └── database/         # Tietokantaskriptit
│           ├── models/
│           └── migrations/
│
├── web-app/                  # Web-sovellus loppukäyttäjille
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── hooks/
│   ├── index.html
│   ├── vite.config.js        # Vite-konfiguraatiotiedosto
│   └── package.json          # NPM-pakettitiedosto
│
└── scripts/                  # Apuskriptit (testaus- tai käyttöönottoskriptit)
```

### `Sivupohjat`

#### Pääkäyttöliittymän Näkymä 

<details>
    <summary>Pääkäyttöliittymä</summary>
    <div class="row justify-content-center">
        <div class="col-sm-8">
            {% include figure.liquid path="assets/img/main_interface_weatherOrNot.jpg" title="Pääkäyttöliittymä" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Asennusohjeet`

#### MQTT-Välittäjän Asennus

1. Siirry `server`-hakemistoon.
2. Suorita `docker-compose up -d` käynnistääksesi Mosquitto MQTT -välittäjän.

#### ESP32:n Konfigurointi (valinnainen testaukseen)

1. Avaa Arduino IDE tai PlatformIO.
2. Lataa annettu firmware-koodi lämpötiladatan lukemiseen.
3. Säädä WiFi- ja MQTT-palvelinasetukset koodissa vastaamaan ympäristöäsi.
4. Lataa firmware ESP32:lle.
5. Vaihtoehtoisesti, simuloi ESP32-mittauksia testaukseen komennolla `./scripts/fake_arduino.sh`.

#### Web-Sovelluksen Käynnistäminen

1. Siirry `web-app`-hakemistoon.
2. Suorita `npm install` asentaaksesi riippuvuudet.
3. Käynnistä palvelin, joka tilaa MQTT:n komennolla `npm run start-server`.
4. Käynnistä sovellus komennolla `npm run dev`.
5. Mukavuuden vuoksi, voit ajaa palvelimen ja käynnistää sovelluksen samanaikaisesti komennolla `npm start`.

### `Skriptin Käyttö`

WeatherOrNot sisältää bash-skriptin `project-manager.sh` kaikkien komponenttien helppoa hallintaa varten:

- **Käynnistä Docker Compose -palvelut:** `./project-manager.sh start-docker-compose`
- **Pysäytä Docker Compose -palvelut:** `./project-manager.sh stop-docker-compose`
- **Aja Node-palvelin:** `./project-manager.sh run-node-server`
- **Käynnistä Vite-sovellus:** `./project-manager.sh run-vite-app`
- **Aja väärennetty Arduino-skripti:** `./project-manager.sh run-fake-arduino`
- **Siirry Shell-tilaan:** `./project-manager.sh shell` interaktiivisille komennoille.

### `Yhteenveto ja Pohdinta`

WeatherOrNotin kehittäminen on ollut fantastinen kokemus, joka mahdollisti minun sukeltaa syvälle IoT-teknologioihin, MQTT-protokolliin ja nykyaikaiseen web-kehitykseen. Tämä projekti ei ole ainoastaan todiste teknisistä taidoistani, vaan myös kyvystäni integroida erilaisia teknologioita yhtenäiseksi, toimivaksi järjestelmäksi.

Lisätietoja ja yksityiskohtaista projektin erittelyä varten, tutustu projektin dokumentaatioon:

- **[WeatherOrNot GitHub Repositorio](https://github.com/Andebugulin/weatherOrNot)**

### `Vianetsintä`

- **MQTT-Välittäjän Yhteysongelmia:** Varmista, että MQTT-välittäjä on käynnissä ja saavutettavissa. Tarkista IP-osoite ja porttikonfiguraatiot sekä ESP32-firmwaressa että web-sovelluksessa.
- **Lämpötiladata Ei Päivity:** Varmista, että ESP32 on oikein yhdistetty WiFiin ja että MQTT-aihe vastaa julkaisijan (ESP32) ja tilaajan (web-sovellus) välillä.

### `Osallistujat`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Ladataan osallistujia...</div>

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