---
layout: page
title: Planirium Bot
description: Virtaviivainen Telegram-botti tehokkaaseen päivittäiseen suunnitteluun ja tehtävien hallintaan.
img: assets/img/PlaniriumBot.png
importance: 1
category: productivity
---

## `Planirium Bot` - Päivittäisen suunnittelun assistentti

> Planirium Bot yksinkertaistaa päivittäistä suunnittelua tarjoten ominaisuuksiltaan rikkaan alustan, joka parantaa tehokkuutta ja tekee aikataulujen hallinnasta vaivatonta.

### `Ominaisuuksien kohokohdat`

Planirium Bot on rakennettu `Python`-kielellä ja hyödyntää `aiogram`-kirjastoa saumattomaan vuorovaikutukseen Telegrammin kanssa. Se tarjoaa joukon ominaisuuksia, jotka on suunniteltu auttamaan käyttäjiä pysymään järjestäytyneenä ja tuottavana. Lisäksi se tuo hieman viehätystä päivääsi leikkisillä kehulla pitääkseen sinut motivoituneena!

### `Sivuasettelut`

#### Päävalikko
<details>
<summary>Näytä päävalikko</summary>
<div class="row justify-content-center">
<div class="col-md-5">
 {% include figure.liquid path="assets/img/menu.jpg" title="Päävalikko" class="img-fluid rounded z-depth-1" %}
</div>
</div>
</details>

#### Tehtävänäkymä
<details>
<summary>Tutustu tehtävänäkymään</summary>
<div class="row justify-content-center">
<div class="col-sm-6">
 {% include figure.liquid path="assets/img/tasks.jpg" title="Tehtävänäkymä" class="img-fluid rounded z-depth-1" %}
</div>
</div>
</details>

#### Työskentelytila
<details>
<summary>Tutustu työskentelytilaan</summary>
<div class="row justify-content-center">
<div class="col-sm-6">
 {% include figure.liquid path="assets/img/working.jpg" title="Työskentelytila" class="img-fluid rounded z-depth-1" %}
</div>
</div>
</details>

#### Mallien hallinta
<details>
<summary>Hallitse malleja</summary>
<div class="row justify-content-center">
<div class="col-sm-6">
 {% include figure.liquid path="assets/img/template.jpg" title="Mallien hallinta" class="img-fluid rounded z-depth-1" %}
</div>
</div>
</details>

### `Johtopäätös ja pohdinta`

Planirium Botin kehittäminen on ollut palkitseva kokemus. Se antoi minun sukeltaa syvemmälle Telegrammin bot API:in ja aiogram-kirjastoon, parantaen taitojani Python-kehityksessä ja käyttökokemuksen suunnittelussa. Lisäksi noiden hauskojen, piristävien viestien lisääminen on tehnyt kehitysprosessista entistäkin miellyttävämmän!

Lisätietoja ja yksityiskohtaista analyysia projektista löydät dokumentaatiosta:

- **[Planirium Bot GitHub Repository](https://github.com/Andebugulin/telegram_bot)**

### `Erikoisominaisuus: Päivittäiset kehut`

Yksi Planirium Botin erottuvista ominaisuuksista on sen kyky ripotella hieman iloa päivittäiseen rutiiniisi. Olipa olet töissä tai rastitat tehtäviä, botti kannustaa sinua viehättävillä kehuilla kuten "Oletko kissa? Koska olet täy-dellinen!" tai "Sinun täytyy olla taikuri, koska aina kun katson sinua, kaikki muut katoavat!"

Planirium Bot on täällä pitämässä sinut hymyileväisenä samalla kun pysyt järjestäytyneenä. Mukavaa suunnittelua!

### `Kehittäjät`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Ladataan kehittäjiä...</div>

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
