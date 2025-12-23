---
layout: page
title: Robanization
description: Haastava 2D-tasohyppelypeli proseduraalisella tasojen luomisella ja dynaamisilla esteillä.
img: assets/img/robanization.svg
importance: 1
category: fun
---

## `Robanization`

> Kehittynyt 2D-tasohyppelypeli, joka yhdistää proseduraalisen tasojen luomisen haastaviin pelimekaniikkoihin, luoden ainutlaatuisen kokemuksen joka kerta kun pelaat.

### `Ominaisuuksien kohokohdat`

Rakennettu `Python`illa ja `Pygame`lla, tämä tasohyppelypeli esittelee edistyneitä pelinkehityskonsepteja. Pelissä on proseduraalisesti luotuja tasoja, dynaamisia esteitä ja responsiivinen kamerajärjestelmä, joka seuraa pelaajan liikettä.

### `Liittymänäkymät`

#### Pelin valikkokäyttöliittymä
<details>
<summary>Näytä pelin valikkokäyttöliittymä</summary>
<div class="row justify-content-center">
<div class="col-md-8">
 {% include figure.liquid path="assets/img/game_menu_interface.jpg" title="Pelikäyttöliittymä" class="img-fluid rounded z-depth-1" %}
</div>
</div>
</details>

#### Pelikäyttöliittymä
<details>
<summary>Näytä pelikäyttöliittymä</summary>
<div class="row justify-content-center">
<div class="col-md-8">
 {% include figure.liquid path="assets/img/game_interface.jpg" title="Pelikäyttöliittymä" class="img-fluid rounded z-depth-1" %}
</div>
</div>
</details>

### `Tekninen syväsukellus`

#### Pelin ydinjärjestelmät
- Mukautettu fysiikkamoottorii painovoiman simuloinnilla
- Proseduraalinen tasojen luominen tekstimalleista
- Dynaaminen kamerajärjestelmä
- Pikselintarkka törmäystunnistus
- Tilanteen hallinta (Valikko, Peli, Peli Ohi)
- Pisteidenseurantajärjestelmä

#### Pelimekaniikka
- Sujuva pelaajan liike ja ohjaimet
- Ympäristön vaarat (vesi, tornadot)
- Teleportaatiojärjestelmä tasojen etenemiseen
- Useita hahmojen animaatiotiloja
- Rahallinen palkkiojärjestelmä

### `Avainkluokat`

```python
class LEVEL:
# Pelin päätason hallinta
# Käsittelee maailman luomisen, törmäystunnistuksen ja kameran liikkeen

class Player:
# Pelaajahahmoon ohjaimet
# Hallitsee liikettä, fysiikkaa ja animaatioita

class Tornado/Water:
# Dynaamiset esteet
# Sisältää satunnaistettuja liikekaavoja ja törmäystunnistuksen

class Teleport:
# Tasojen etenemissjärjestelmä
# Käsittelee tasosiirtymiä ja pisteidenpäivityksiä
```

### `Toteutuksen yksityiskohdat`

#### Tasojen luominen
Peli käyttää ainutlaatuista tasojen luomisjärjestelmää, joka yhdistää ennakkosuunniteltuja segmenttejä:

```python
def level_loading():
# Lataa satunnaisia tasosegmenttejä
# Yhdistää ne ainutlaatuisten asettelujen luomiseksi
# Varmistaa pelattavuuden ja oikean pelaajan syntymisen
```

#### Fysiikkajärjestelmä
```python
def apply_gravity(self):
# Simuloi realistista painovoimaa
# Käsittelee pystysuuntaista liikettä
# Hallitsee hyppymekaniikkaa
```

#### Kamerajärjestelmä
```python
def camera(self):
# Seuraa pelaajan liikettä
# Tarjoaa sujuvaa vieritystä
# Hallitsee tason rajoja
```

- **[Game GitHub Repository](https://github.com/andebugulin/my_game)**

### `Kehittäjät`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Ladataan kehittäjiä...</div>

<script>
async function fetchContributors() {
const url = 'https://api.github.com/repos/andebugulin/my_game/contributors';
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
