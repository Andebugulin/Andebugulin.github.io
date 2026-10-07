---
layout: page
title: Awareen
description: "Hiljainen ajastin jokaisen sovelluksen päällä, joka näyttää, kuinka kauan olet ollut puhelimella tänään. Ei estoja, ei mainoksia, ei internet-lupaa."
img: assets/img/awareen_icon.png
importance: 1
category: productivity
lang: fi
year: 2025
stack: Kotlin · Android
featured: 2
metric: 350+ käyttäjää
icon: assets/img/awareen_icon.png
---

<figure class="project-cover"><img src="/assets/img/awareen_cover.png" alt="Awareen"></figure>

<dl class="project-facts">
  <div><dt>Alusta</dt><dd>Android 8.0+</dd></div>
  <div><dt>Tekniikat</dt><dd>Kotlin, Android Views</dd></div>
  <div><dt>Yksityisyys</dt><dd>Ei internet-lupaa</dd></div>
  <div><dt>Käyttäjät</dt><dd>350+, kaikki orgaanisia</dd></div>
</dl>

<div class="cta-row">
  <a href="https://play.google.com/store/apps/details?id=com.andebugulin.awareen2">Google Play</a>
  <a href="https://andebugulin.github.io/Awareen/">Verkkosivu</a>
  <a href="https://github.com/Andebugulin/Awareen">Lähdekoodi</a>
  <a href="https://github.com/Andebugulin/Awareen/releases/latest">APK</a>
</div>

Awareen (awareness + screen) ei estä mitään. Se näyttää jokaisen sovelluksen päällä pienen ajastimen, josta näkee, kuinka kauan olet ollut puhelimella tänään, ja luottaa sinuun luvun kanssa. Sen näkeminen yleensä riittää.

<div class="shots">
  <figure><img src="/assets/img/awareen_1.webp" alt="Awareen" loading="lazy"></figure>
  <figure><img src="/assets/img/awareen_2.webp" alt="Awareen" loading="lazy"></figure>
  <figure><img src="/assets/img/awareen_3.webp" alt="Awareen" loading="lazy"></figure>
  <figure><img src="/assets/img/awareen_4.webp" alt="Awareen" loading="lazy"></figure>
  <figure><img src="/assets/img/awareen_5.webp" alt="Awareen" loading="lazy"></figure>
</div>

## Miten se toimii

Ajastin kulkee päivän mittaan kolmen vaiheen läpi. Jokaisella vaiheella on oma nimi, värit, sijainti, koko ja valinnainen vilkkuminen, ja jokainen asetus tulee voimaan heti, näytöllä näkyvän esikatselun kanssa.

| Vaihe | Oletusväri | Oletusaika |
| --- | --- | --- |
| **Calm** | vihreä | ensimmäiset 30 minuuttia |
| **Heads up** | meripihka | seuraavat 30 minuuttia |
| **Enough** | punainen, vilkkuu | päivittäiseen nollaukseen asti |

- **Sinun tavallasi.** Aina, muutaman sekunnin välein joka minuutti tai ei koskaan, ja kotinäytön widget.
- **Ei tiellä.** Napauta ajastinta piilottaaksesi sen viideksi sekunniksi; vedä se, niin se jää paikalleen.
- **Sinun päiväsi.** Analytiikka jakaa vuorokauden uneen, työhön, vapaa-aikaan ja ruutuaikaan, ja näyttää keskiarvon, trendin ja koko elämän ennusteen.
- **Luotettava nollaus.** Päivä nollautuu valitsemaasi aikaan, vaikka puhelin olisi lepotilassa.
- **Tietosi ovat sinun.** Asetukset ja historia viedään JSON-muotoon ja siirtyvät uuteen puhelimeen. Ei tiliä, ei mainoksia eikä internet-lupaa, joten ruutuaikasi ei voi poistua laitteelta.

## Arkkitehtuuri

Puhdasta Kotlinia ja Android Views -näkymiä, yksi asetustiedosto, ei tietokantaa eikä DI-kehystä. `ui` puhuu `service`-kerrokselle, `service` `data`-kerrokselle, ja `overlay` on yhteinen molemmille. Peittokuvan päätökset, analytiikka-avaimet ja nollauslaskenta ovat puhtaassa `domain`-paketissa, jotta ne voi testata ilman laitetta. Kaikki grafiikka kuvakkeesta Play-sivuun tuotetaan yhdellä skriptillä, joten se pysyy yhtenäisenä julkaisusta toiseen.

## Jakelu

Awareen alkoi itse asennettavana APK:na, ja nyt sillä on Google Playssa yli 350 käyttäjää, kaikki orgaanisia.
