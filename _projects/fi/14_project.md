---
layout: page
title: Guardian
description: Android-sovellus keskittymiseen NFC-ohjatulla sovellusten estolla.
img: assets/img/guardian.png
importance: 2
category: productivity
lang: fi
---

## `Guardian` - NFC-Pohjainen Sovellusesto

> Fyysinen keskittymislukko Androidille. Estä häiritsevät sovellukset, avaa vain NFC-kosketuksella.

### `Ydinkonsepti`

Luo estotila → Valitse estettävät/sallittavat sovellukset → Aseta valinnainen aikataulu → Yhdistä valinnainen NFC-tunniste → Aktivoi tila → Pysy keskittyneenä. Ei ohjelmistokiertotapaa - vaatii fyysistä NFC-vuorovaikutusta avaamiseen.

### `Tekninen Toteutus`

Rakennettu `Kotlin`-kielellä ja `Jetpack Compose`-kirjastolla. Käyttää `Kotlin Coroutines`-kirjastoa asynkronisiin operaatioihin, `Kotlinx Serialization`-kirjastoa tilan tallennukseen ja `AlarmManager`-komponenttia tarkkaa aikataulutusta varten. Etualan palvelu takaa luotettavuuden uudelleenkäynnistysten ja tehtävien poiston yli.

### `Ominaisuudet`

**Estotilat**
- Estä Valitut: Rajoittaa pääsyä valittuihin sovelluksiin
- Salli Vain: Estää kaiken paitsi valitut sovellukset
- Valinnainen NFC-tunnistevaatimus tilaa kohden

**Aikataulutus**
- Päiväkohtainen aikamääritys mukautetuilla aloitus-/lopetusajoilla
- Useiden tilojen yhdistäminen
- Valinnainen automaattinen deaktivointi

**NFC-Integraatio**
- Rekisteröi tunnisteita tilakohtaiseen avaamiseen
- Mikä tahansa NFC-laite toimii ilman tiettyä tunnistetta
- Älykello, kuulokkeet ja muut tunnisteet tuettuja

### `Kuvakaappaukset`

<details>
    <summary>Sovelluksen Käyttöliittymä</summary>
    <div class="row">
        <div class="col-sm-6 mt-3">
            {% include figure.liquid path="assets/img/guardian_home.png" title="Koti" class="img-fluid rounded z-depth-1" %}
        </div>
        <div class="col-sm-6 mt-3">
            {% include figure.liquid path="assets/img/guardian_modes.png" title="Tilat" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6 mt-3">
            {% include figure.liquid path="assets/img/guardian_schedules.png" title="Aikataulut" class="img-fluid rounded z-depth-1" %}
        </div>
        <div class="col-sm-6 mt-3">
            {% include figure.liquid path="assets/img/guardian_nfc.png" title="NFC-Tunnisteet" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6 mt-3">
            {% include figure.liquid path="assets/img/guardian_info.png" title="NFC Info" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Vaatimukset`

- Android 6.0+ (API 23)
- NFC-laitteisto
- Luvat: Käyttöoikeustiedot, Näytä Sovellusten Päällä, Akkuoptimoinnin poikkeus

**MIUI/Mukautettu ROM -käyttäjät**: Poista käytöstä "Keskeytä sovelluksen toiminta kun sitä ei käytetä", aktivoi "Automaattikäynnistys", aseta akku tilaan "Ei rajoituksia"

### `Linkit`

- **[GitHub-repositorio](https://github.com/Andebugulin/nfcGuard)** - Lähdekoodi
- **[Lataa APK](https://github.com/Andebugulin/nfcGuard/releases)** - Uusin versio

### `Osallistujat`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Ladataan...</div>

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

MIT-lisenssi | Rakennettu ❤️:llä 
Claude AI avusti kehityksessä