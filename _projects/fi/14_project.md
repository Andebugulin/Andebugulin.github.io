---
layout: page
title: nfcGuard
description: "Estää häiritsevät sovellukset, kunnes kosketat fyysistä NFC-tagia. Pidä tagi hankalassa paikassa, niin Instagramin avaaminen maksaa kävelyn."
img: assets/img/nfcguard_icon.png
importance: 1
category: productivity
lang: fi
year: 2026
stack: Kotlin · Jetpack Compose · NFC
featured: 1
metric: 1 250+ käyttäjää
icon: assets/img/nfcguard_icon.png
---

<dl class="project-facts">
  <div><dt>Alusta</dt><dd>Android 8.0+</dd></div>
  <div><dt>Tekniikat</dt><dd>Kotlin, Jetpack Compose</dd></div>
  <div><dt>Testit</dt><dd>333 yksikkötestiä</dd></div>
  <div><dt>Käyttäjät</dt><dd>1 250+, kaikki orgaanisia</dd></div>
</dl>

<div class="cta-row">
  <a href="https://play.google.com/store/apps/details?id=com.andebugulin.nfcguard">Google Play</a>
  <a href="https://andebugulin.github.io/nfcGuard/">Verkkosivu</a>
  <a href="https://github.com/Andebugulin/nfcGuard">Lähdekoodi</a>
  <a href="https://github.com/Andebugulin/nfcGuard/releases/">APK-julkaisut</a>
</div>

Ohjelmalliset estäjät pettävät yhdestä syystä: katkaisin on samalla näytöllä kuin se, mitä yrität välttää. nfcGuard siirtää katkaisimen fyysiseen maailmaan. Estetty sovellus pysyy estettynä, kunnes kosketat tiettyä NFC-tagia. Jos tagi on keittiössä, jokainen halu selata maksaa käynnin keittiössä.

<div class="shots">
  <figure><img src="/assets/img/nfcguard_app_with_overlay.webp" alt="Estonäkymä" loading="lazy"><figcaption>Estonäkymä</figcaption></figure>
  <figure><img src="/assets/img/nfcguard_modes_screen.webp" alt="Tilat" loading="lazy"><figcaption>Tilat</figcaption></figure>
  <figure><img src="/assets/img/nfcguard_schedules_screen.webp" alt="Aikataulut" loading="lazy"><figcaption>Aikataulut</figcaption></figure>
  <figure><img src="/assets/img/nfcguard_temporary_unlock.webp" alt="Väliaikainen avaus" loading="lazy"><figcaption>Väliaikainen avaus</figcaption></figure>
  <figure><img src="/assets/img/nfcguard_lost_your_tag.webp" alt="Kadonnut tagi" loading="lazy"><figcaption>Kadonnut tagi</figcaption></figure>
  <figure><img src="/assets/img/nfcguard_home_screen.webp" alt="Etusivu" loading="lazy"><figcaption>Etusivu</figcaption></figure>
</div>

## Miten se toimii

**Tila** on joukko sovelluksia, jotka ovat joko estettyjä tai sallittuja. Kytke se päälle käsin tai liitä siihen **aikataulu**, jolloin se käynnistyy itse työpäivinä. Kun tila on päällä, sovellukset eivät aukea. Liitetyn **NFC-tagin** kosketus avaa sen.

Jokainen tagi päättää, kuinka paljon se antaa. Yksi tagi avaa tilan kokonaan, toinen vain viideksi minuutiksi, minkä jälkeen tila palaa itsestään. Pidä antelias tagi kotona ja tiukka toimistolla. Tila, johon ei ole liitetty tageja, hyväksyy minkä tahansa NFC-esineen, kuten matkakortin tai kuulokkeet.

**Kadotitko tagin?** Etusivun palautustoiminto pyytää ajastetun tarkkaavaisuustehtävän ja antaa sitten valita kadonneet tagit. Tilat kytkeytyvät pois, tagit poistetaan ja muut asetukset säilyvät.

## Jakelu

nfcGuardia käyttää yli 1 250 ihmistä, ja jokainen löysi sen itse: ei mainoksia eikä maksettua näkyvyyttä.

## Arkkitehtuuri

Projekti on jaettu kahteen Gradle-moduuliin, jotta säännöt voi testata ilman puhelinta.

- **`:domain`** on puhdasta Kotlinia: sovelluksen tila ja neljä logiikkaoliota (`NfcUnlockLogic`, `ScheduleTransitions`, `ModeActivationLogic`, `BlockDecider`). Se ei voi tuoda Androidia, kääntäjä valvoo sitä, ja testit ajetaan tavallisella JVM:llä.
- **`:app`** sisältää Compose-käyttöliittymän, palvelut, vastaanottimet ja widgetin. Kerrokset kulkevat yhteen suuntaan, domain, data, sivuvaikutukset, palvelu ja käyttöliittymä, ja jokaisella asialla on yksi omistaja.
- **`AppStateRepository`** omistaa tallennetun tilan. Jokainen muutos kulkee yhden mutexilla suojatun `update { }` -kutsun kautta, ja vain yksi tiedosto tuntee tallennusavaimen.
- **`StateSyncer`** omistaa sivuvaikutukset. Jokaisen kirjoituksen jälkeen se käynnistää estopalvelun uudelleen, ajoittaa hälytykset ja päivittää widgetit, joten yhdenkään näkymän ei tarvitse muistaa sitä.
- **`BlockerService`** tarkistaa jokaisella tikillä etualalla olevan sovelluksen ja panee päätöksen toimeen, tavallisesti peittokuvalla tai esteettömyystoimintojen ollessa päällä sulkemalla sovelluksen, mitä Pixel ja Samsung vaativat.

Tilat, aikataulut ja tagit viedään JSON- tai YAML-muotoon ja tuodaan takaisin joko korvaamalla kaikki tai yhdistämällä tunnisteen mukaan.

## Mitä opin

Android taistelee pitkään käynnissä olevia sovelluksia vastaan kovasti, ja jokainen valmistaja omalla tavallaan. Suurin osa työstä meni hengissä pysymiseen: automaattinen käynnistys Xiaomilla ja Oppolla, akkupoikkeukset, esteettömyyspolku Pixelille ja lupasivu, joka tarkistaa jokaisen luvan uudelleen, kun palaat. Sääntöjen pitäminen moduulissa, jossa ei ole Androidia, teki jatkuvista muutoksista turvallisia.
