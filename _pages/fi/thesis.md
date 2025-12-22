---
layout: page
permalink: /thesis/
title: opinnäytetyö
nav: true
nav_order: 2
---

# Kandidaatintutkielma: WebAssembly vs JavaScript Suorituskyky

**WebAssemlyn suorituskyvyn arviointi verrattuna JavaScriptiin CPU-intensiivisissä selainsovelluksissa**

## Yleiskatsaus

Tämä opinnäytetyö tutkii suorituskykyeroja JavaScriptin ja WebAssemblyn välillä laskennallisesti vaativissa selainsovelluksissa, erityisesti keskittyen kuvankäsittelytehtäviin.

### Keskeiset Tulokset

- **WebAssembly ylitti johdonmukaisesti JavaScriptin** kaikissa testatuissa skenaarioissa
- Nopeutusvaihtelu oli **1,3x - 3,95x** riippuen algoritmin monimutkaisuudesta
- WebAssembly osoitti **huomattavasti parempaa suorituskyvyn johdonmukaisuutta** (jopa 12x vakaampi)
- Suorituskykyedut kasvoivat laskennallisen monimutkaisuuden myötä

### Testatut Algoritmit

1. **Värien inversio** (kevyt) - ~1,4x nopeutus
2. **Reunantunnistus Sobel-operaattoreilla** (keskitaso) - ~1,9x nopeutus
3. **K-Means värikvantisaatio** (raskas) - ~3,7x nopeutus

### Interaktiivinen Demo

Koe suorituskykyerot itse **live-verkkosovelluskehyksellä**:

[Katso interaktiivinen opinnäytetyöprojekti](https://andebugulin.github.io/js-wasm-vis/)

Sovelluksen avulla voit:
- Ladata omia kuvia
- Suorittaa suorituskykytestejä reaaliajassa
- Vertailla suoritusaikoja visuaalisesti
- Tutkia yksityiskohtaisia suorituskykymittareita

### Tekniset Tiedot

- **Julkaistu**: 2025
- **Arvosana**: 4/5
- **Sivumäärä**: 40
- **Teknologiat**: JavaScript, Rust, WebAssembly, Canvas API
- **Testiympäristö**: Chrome (V8-moottori) Linuxilla

### Keskeiset Panokset

- Avoimen lähdekoodin verkkokehys suorituskyvyn testaamiseen
- Käytännönläheinen suorituskykyanalyysi visuaalisella palautteella
- Kattava arviointi eri kuvakokoisilla ja -formaateilla
- Analyysi kylmäkäynnistyksen kuormasta, skaalautuvuudesta ja johdonmukaisuudesta

---

**[Lue koko opinnäytetyö (PDF)](https://urn.fi/URN:NBN:fi:amk-2025121737531)**