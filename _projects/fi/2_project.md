---
layout: page
title: Morner Bot
description: Telegram-botti aamurutiinien seuraamiseen älykellolla puhelimen häiriöiden minimoimiseksi.
img: assets/img/PlaniriumBot.png
importance: 1
category: productivity
---

## `Morner Bot` - Aamurutiini älykellolla

> Morner Bot auttaa rakentamaan johdonmukaisia aamutottumuksia minimoimalla puhelimen käyttöä. Aseta rutiini kerran ja suorita se sitten päivittäin käyttämällä vain älykelloasi.

### `Ydinajatus`

Uskon, että aamut ovat tuottavampia aivollemme ja mielelle. On kuitenkin vaikeaa välttää häiriötekijöitä eikä juuttua puhelimeen, siitä syntyi ajatus tähän bottiin. Asetat aamurutiinisi kerran puhelimen kautta, sitten joka aamu kommunikoit botin kanssa älykellon kautta käyttäen vain pikaviestejä, minimoit puhelimen käyttöä, pidät pääsi kirkkaana eikä liikaa melua ole mielestäni aina hyvä asia.

### `Tekninen toteutus`

Rakennettu `Python`-kielellä käyttäen `aiogram 3.x`-kirjastoa asynkronisiin Telegram-operaatioihin. Botti käyttää FSM-mallia (äärellinen automaatti) keskustelun kulun hallintaan. Tietojen pysyvyys JSON:n kautta aikavyöhyketuella `pytz`:n avulla. Kaikki ilmoitukset ovat hiljaisia, jotta ne eivät ole häiritseviä.

### `Botin käyttöliittymä`

#### Päävalikko

<details>
    <summary>Näytä päävalikko</summary>
    <div class="row justify-content-center">
        <div class="col-md-5">
            {% include figure.liquid path="assets/img/menu.jpg" title="Päävalikko" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Tehtävävirta

<details>
    <summary>Katso tehtävävirta</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/tasks.jpg" title="Tehtävävirta" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Tilastonäkymä

<details>
    <summary>Tutki tilastoja</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/working.jpg" title="Tilastonäkymä" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Asetuspaneeli

<details>
    <summary>Hallinnoi asetuksia</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/template.jpg" title="Asetuspaneeli" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Miten se toimii`

Aseta rutiini kerran puhelimen kautta. Joka aamu saat hiljaisen ilmoituksen kellossasi. Napauta mitä tahansa pikavastausta aloittaaksesi. Suorita tehtävät napauttamalla mitä tahansa pikavastausnappia. Botti etenee automaattisesti riippumatta siitä, mitä pikavastausta käytät, koska kaikilla on erilaiset nappikokoonpanot kelloissaan.

Erikoiskomennot: `Skip` (merkitsee nykyisen tehtävän ohitetuksi), `Menu` (palaa päävalikkoon). Putket vaativat 100% pakollisten tehtävien suorittamisen. Valinnaiset tehtävät eivät vaikuta putkeen, jos ne ohitetaan.

### `Pääominaisuudet`

Kellolle optimoitu käyttöliittymä mukautettavilla pikaviestillä. Tehtävienhallinta valinnaisten/pakollisten tehtävätyyppien kanssa. Mukautettavat aikaikkunat ja aikavyöhyketuki. Putkien seuranta päivittäisillä/viikoittaisilla/kuukausittaisilla kalenteritilastoilla. Hiljaiset ilmoitukset rutiinin alussa, varoitukset ennen määräaikaa ja suoritusyhteenvedot. Tauko/jatka-toiminto keskeytyneille rutiineille.

### `Pohdinta`

Morner Botin kehittäminen opetti minulle asynkronisia ohjelmointimalleja ja tilakone-arkkitehtuuria. Haasteena oli saada käyttöliittymä toimimaan saumattomasti älykelloissa säilyttäen samalla täysi toiminnallisuus puhelimissa. Aikavyöhykkeiden käsittely ja ilmoitusten aikataulutus vaativat huolellista harkintaa toimiakseen luotettavasti eri käyttäjäkonteksteissa.

Lisätietoja ja lähdekoodia varten:

- **[Morner Bot GitHub-repositorio](https://github.com/Andebugulin/telegram_bot)**
- **[Kokeile isännöityä bottia](https://t.me/PlanyDbot)** - Toimii Oracle Cloudissa

### `Osallistujat`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Ladataan osallistujia...</div>

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