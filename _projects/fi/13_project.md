---
layout: page
title: Wordor
description: Tehostettu kääntäjä hajautetun kertauksen algoritmilla käännösten välittömään oppimiseen.
img: assets/img/wordor.png
importance: 2
category: kieltenoppiminen
---

## `Wordor` - Älykäs kääntäjä sisäänrakennetulla oppimisella

> Wordor yhdistää käännöksen hajautettuun kertaukseen. Löydä mielenkiintoisia sanoja, tallenna ne välittömästi ja opi älykkään kertausjärjestelmän avulla tekoälyvihjeiden tuella.

### `Perusajatus`

Kieltenoppijana törmään usein käännöksissä kiehtoviin sanoihin, jotka haluan muistaa. Niiden siirtäminen erilliseen oppimistyökaluun kuten Ankiin tuntui kuitenkin hankalalta, joten unohdin ne. Wordor ratkaisee tämän yhdistämällä käännöksen ja sanaston oppimisen saumattomaksi kokemukseksi. Käännä sana, tallenna se yhdellä napautuksella ja anna hajautetun kertauksen algoritmin hoitaa oppimisaikataulusi.

### `Tekninen toteutus`

Rakennettu `Flutterilla` alustarajat ylittävään Android-tukeen. Käyttää `Riverpod`-tilanhallintaa ja `Drift` ORM:ää `SQLite`-tietokannalla paikalliseen tietojen säilyttämiseen. Käännökset `DeepL API`:n avulla, valinnainen `Gemini AI` älykkäiden vihjeiden luomiseen. Taustaajastus `Android Alarm Managerin` kautta paikallisella ilmoitusjärjestelmällä.

### `Sovelluksen käyttöliittymä`

#### Käännösnäkymä

<details>
    <summary>Katso käännösliittymä</summary>
    <div class="row justify-content-center">
        <div class="col-md-5">
            {% include figure.liquid path="assets/img/wordor_translate.png" title="Käännösnäkymä" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Kertausjärjestelmä

<details>
    <summary>Tutustu kertausprosessiin</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/wordor_review.png" title="Kertausjärjestelmä" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>


### `Toiminta`

Kirjoita tai puhu sanasi äänisyötteellä. Valitse lähde- ja kohdekielet viimeksi käytetyistä pareista. Saat välittömän käännöksen DeepL:ltä ja tallennat muistamisen arvoisia sanoja yhdellä napautuksella. Kertaa erääntyviä sanoja hajautetun kertauksen välein, jotka mukautuvat suoritukseesi.

Käytä progressiivista vihejärjestelmää tarvittaessa: tekoälyn luoma esimerkkikause lähdekielellä, merkityksen selitys kohdekielellä, ensimmäisen kirjaimen vihje tai täysi paljastus. Merkitse vastaukset "Osaan", "Vihje auttoi" tai "Unohdin" säätääksesi tulevia välejä. Sanat ajoittuvat automaattisesti optimaaliseen muistamiseen.

### `Pääominaisuudet`

Äänisyöte puheentunnistuksella. Älykäs DeepL-käännös kieliparimuistilla. Nelivaiheinen tekoälyvihejärjestelmä esimerkkikauseineen ja selityksineen. Hajautetun kertauksen algoritmi mukautuvilla väleillä (1 päivästä ~100 päivään). Merkkiilmoitukset erääntyvien sanojen määrällä. Käännöshistoria tallennustilan seurannalla. Offline-first-arkkitehtuuri paikallisella SQLite-tallennuksella.

### `Hajautetun kertauksen algoritmi`

Alkuväli 1 päivä. Onnistuminen kertoo välin 2,5x:llä, osittainen onnistuminen 1,5x:llä ja epäonnistuminen nollaa 1 päivään. Maksimi väli rajoitettu noin 100 päivään. Algoritmi tasapainottaa muistamisen ja kertaustehokkuuden.

### `Pohdintaa`

Wordorin rakentaminen opetti minulle ulkoisten API:en integroinnista paikalliseen tietojen säilyttämiseen ja hajautetun kertauksen algoritmien toteutuksesta. Haasteena oli luoda vihejärjestelmä, joka aidosti tukee oppimista tekemättä kertauksista liian helppoja. Tausta-ajoitusten ja ilmoitusten hallinta vaativat huolellista testausta toimivuuden varmistamiseksi eri Android-versioilla.

Lisätietoja ja lähdekoodi:

- **[Wordor GitHub Repository](https://github.com/Andebugulin/wordor)**
- **[Lataa APK](https://github.com/Andebugulin/wordor/releases)** - Android 7.0+

### `Osallistujat`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Ladataan osallistujia...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/Andebugulin/wordor/contributors';
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