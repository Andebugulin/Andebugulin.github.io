---
layout: page
title: Awareen
description: "Ein stiller Timer über jeder App, der zeigt, wie lange Sie heute schon am Telefon sind. Keine Sperren, keine Werbung, keine Internetberechtigung."
img: assets/img/awareen_icon.png
importance: 1
category: productivity
lang: de-ge
year: 2025
stack: Kotlin · Android
featured: 2
metric: 350+ Nutzer
icon: assets/img/awareen_icon.png
---

<figure class="project-cover"><img src="/assets/img/awareen_cover.png" alt="Awareen"></figure>

<dl class="project-facts">
  <div><dt>Plattform</dt><dd>Android 8.0+</dd></div>
  <div><dt>Gebaut mit</dt><dd>Kotlin, Android Views</dd></div>
  <div><dt>Datenschutz</dt><dd>Keine Internetberechtigung</dd></div>
  <div><dt>Nutzer</dt><dd>350+, alle organisch</dd></div>
</dl>

<div class="cta-row">
  <a href="https://play.google.com/store/apps/details?id=com.andebugulin.awareen2">Google Play</a>
  <a href="https://andebugulin.github.io/Awareen/">Website</a>
  <a href="https://github.com/Andebugulin/Awareen">Quellcode</a>
  <a href="https://github.com/Andebugulin/Awareen/releases/latest">APK</a>
</div>

Awareen (Awareness plus Screen) sperrt nichts. Es legt einen kleinen Timer über jede App, der zeigt, wie lange Sie heute am Telefon waren, und vertraut Ihnen mit dieser Zahl. Sie zu sehen reicht meistens.

<div class="shots">
  <figure><img src="/assets/img/awareen_1.webp" alt="Awareen" loading="lazy"></figure>
  <figure><img src="/assets/img/awareen_2.webp" alt="Awareen" loading="lazy"></figure>
  <figure><img src="/assets/img/awareen_3.webp" alt="Awareen" loading="lazy"></figure>
  <figure><img src="/assets/img/awareen_4.webp" alt="Awareen" loading="lazy"></figure>
  <figure><img src="/assets/img/awareen_5.webp" alt="Awareen" loading="lazy"></figure>
</div>

## So funktioniert es

Der Timer durchläuft im Laufe des Tages drei Stufen. Jede Stufe hat eigenen Namen, Farben, Position, Größe und optionales Blinken, und jede Einstellung greift sofort, mit einer Live-Vorschau auf dem Bildschirm.

| Stufe | Standardfarbe | Standardzeit |
| --- | --- | --- |
| **Calm** | grün | die ersten 30 Minuten |
| **Heads up** | bernstein | die nächsten 30 Minuten |
| **Enough** | rot, blinkend | bis zum täglichen Zurücksetzen |

- **Wie Sie wollen.** Immer, ein paar Sekunden pro Minute oder nie, mit einem Widget auf dem Startbildschirm.
- **Aus dem Weg.** Antippen blendet den Timer fünf Sekunden aus; verschieben, und er bleibt dort.
- **Ihr Tag.** Die Analyse teilt 24 Stunden in Schlaf, Arbeit, Freizeit und Bildschirmzeit, neben Tagesdurchschnitt, Trend und einer Hochrechnung aufs Leben.
- **Verlässliches Zurücksetzen.** Der Tag beginnt zur gewählten Uhrzeit neu, auch wenn das Telefon schläft.
- **Ihre Daten.** Einstellungen und Verlauf lassen sich als JSON exportieren und auf ein neues Telefon mitnehmen. Kein Konto, keine Werbung und keine Internetberechtigung, Ihre Bildschirmzeit kann das Gerät nicht verlassen.

## Architektur

Reines Kotlin und Android Views, eine Einstellungsdatei, keine Datenbank und kein DI-Framework. `ui` spricht mit `service`, `service` mit `data`, und `overlay` teilen sich beide. Overlay-Entscheidungen, Analyseschlüssel und die Reset-Berechnung liegen in einem reinen `domain`-Paket und lassen sich ohne Gerät testen. Die gesamte Grafik, vom Icon bis zum Play-Eintrag, erzeugt ein einziges Skript, damit sie über alle Releases einheitlich bleibt.

## Verbreitung

Awareen begann als APK zum Selbstinstallieren und hat heute mehr als 350 Nutzer bei Google Play, alle organisch.
