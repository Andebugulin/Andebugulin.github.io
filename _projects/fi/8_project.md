---
layout: page
title: ArchBlocker
description: Tehokas verkkosivujen esto-ohjelma retro-terminaaliliittymällä digitaalisten häiriötekijöiden hallintaan.
img: assets/img/ArchBlocker.png
importance: 1
category: productivity
---

## `ArchWebBlocker` - Digitaalisen hyvinvoinnin vartija

> ArchWebBlocker yhdistää järjestelmätason verkkosivujen eston nostalgisen terminaaliliittymän kanssa, auttaen sinua pysymään keskittyneenä silloin kun se on tärkeintä.

### `Ominaisuuksien kohokohdat`

Rakennettu `Python`illa taustajärjestelmälle ja `React`illa käyttöliittymälle, ArchWebBlocker tarjoaa ainutlaatuisen lähestymistavan digitaalisten häiriötekijöiden hallintaan. Sovellus käyttää järjestelmätason estoa hosts-tiedoston kautta, varmistaen vankan verkkosivujen eston, jota ei voida helposti kiertää.

### `Liittymänäkymät`

#### Terminaaliliittymä
<details>
<summary>Näytä terminaaliliittymä</summary>
<div class="row justify-content-center">
<div class="col-md-8">
 {% include figure.liquid path="assets/img/terminal.jpg" title="Terminaaliliittymä" class="img-fluid rounded z-depth-1" %}
</div>
</div>
</details>

### `Tekninen syväsukellus`

#### Taustajärjestelmän arkkitehtuuri
- Flask-pohjainen API-palvelin
- Järjestelmätason verkkosivujen esto hosts-tiedoston kautta
- Pyörivä lokijärjestelmä virheenkorjausta varten
- Turvallinen tiedostonkäsittely muuttumattomuussuojauksella
- Systemd-palveluintegraatio automaattista käynnistystä varten

#### Käyttöliittymän ominaisuudet
- React + Vite modernin kehityskokemuksen takaamiseksi
- Terminaalityyppinen käyttöliittymä käyttäen Lucide React
- Reaaliaikainen API-viestintä
- Tailwind CSS responsiivista suunnittelua varten
- Komentoriviinspiroitu vuorovaikutus

- **[ArchWebBlocker GitHub Repository](https://github.com/andebugulin/archwebblocker)**

### `Kehittäjät`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Ladataan kehittäjiä...</div>

<script>
async function fetchContributors() {
const url = 'https://api.github.com/repos/andebugulin/archwebblocker/contributors';
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
