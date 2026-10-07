---
layout: page
title: nfcGuard
description: "Sperrt ablenkende Apps, bis Sie einen physischen NFC-Tag berühren. Legen Sie den Tag an einen unbequemen Ort, und Instagram zu öffnen kostet einen Spaziergang."
img: assets/img/nfcguard_icon.png
importance: 1
category: productivity
lang: de-ge
year: 2026
stack: Kotlin · Jetpack Compose · NFC
featured: 1
metric: 1.250+ Nutzer
icon: assets/img/nfcguard_icon.png
---

<dl class="project-facts">
  <div><dt>Plattform</dt><dd>Android 8.0+</dd></div>
  <div><dt>Gebaut mit</dt><dd>Kotlin, Jetpack Compose</dd></div>
  <div><dt>Tests</dt><dd>333 Unit-Tests</dd></div>
  <div><dt>Nutzer</dt><dd>1.250+, alle organisch</dd></div>
</dl>

<div class="cta-row">
  <a href="https://play.google.com/store/apps/details?id=com.andebugulin.nfcguard">Google Play</a>
  <a href="https://andebugulin.github.io/nfcGuard/">Website</a>
  <a href="https://github.com/Andebugulin/nfcGuard">Quellcode</a>
  <a href="https://github.com/Andebugulin/nfcGuard/releases/">APK-Releases</a>
</div>

Software-Blocker scheitern aus einem Grund: Der Ausschalter liegt auf demselben Bildschirm wie das, was man meiden will. nfcGuard verlegt den Ausschalter in die physische Welt. Eine gesperrte App bleibt gesperrt, bis Sie einen bestimmten NFC-Tag berühren. Liegt der Tag in der Küche, kostet jeder Impuls zum Scrollen einen Gang in die Küche.

<div class="shots">
  <figure><img src="/assets/img/nfcguard_app_with_overlay.webp" alt="Sperrbildschirm" loading="lazy"><figcaption>Sperrbildschirm</figcaption></figure>
  <figure><img src="/assets/img/nfcguard_modes_screen.webp" alt="Modi" loading="lazy"><figcaption>Modi</figcaption></figure>
  <figure><img src="/assets/img/nfcguard_schedules_screen.webp" alt="Zeitpläne" loading="lazy"><figcaption>Zeitpläne</figcaption></figure>
  <figure><img src="/assets/img/nfcguard_temporary_unlock.webp" alt="Zeitlich begrenzte Entsperrung" loading="lazy"><figcaption>Zeitlich begrenzte Entsperrung</figcaption></figure>
  <figure><img src="/assets/img/nfcguard_lost_your_tag.webp" alt="Tag verloren" loading="lazy"><figcaption>Tag verloren</figcaption></figure>
  <figure><img src="/assets/img/nfcguard_home_screen.webp" alt="Startseite" loading="lazy"><figcaption>Startseite</figcaption></figure>
</div>

## So funktioniert es

Ein **Modus** ist eine Gruppe von Apps, die entweder gesperrt oder erlaubt sind. Schalten Sie ihn von Hand ein oder verknüpfen Sie einen **Zeitplan**, damit er sich an Arbeitstagen selbst einschaltet. Solange ein Modus aktiv ist, öffnen sich diese Apps nicht. Ein verknüpfter **NFC-Tag** entsperrt ihn.

Jeder Tag bestimmt, wie viel er freigibt. Ein Tag entsperrt einen Modus vollständig, ein anderer nur für fünf Minuten, danach schaltet sich der Modus selbst wieder ein. Den großzügigen Tag zu Hause, den strengen im Büro. Ein Modus ohne verknüpfte Tags akzeptiert jedes NFC-Objekt, etwa eine Fahrkarte oder Kopfhörer.

**Tag verloren?** Ein Wiederherstellungsablauf auf der Startseite verlangt eine zeitgesteuerte Aufmerksamkeitsprüfung und lässt Sie dann wählen, welche Tags weg sind. Die Modi schalten sich ab, diese Tags werden entfernt, der Rest der Einrichtung bleibt.

## Verbreitung

Mehr als 1.250 Menschen nutzen nfcGuard, und jeder hat die App selbst gefunden: keine Werbung, keine bezahlte Reichweite.

## Architektur

Das Projekt ist in zwei Gradle-Module geteilt, damit sich die Regeln ohne Telefon testen lassen.

- **`:domain`** ist reines Kotlin: der App-Zustand plus vier Logikobjekte (`NfcUnlockLogic`, `ScheduleTransitions`, `ModeActivationLogic`, `BlockDecider`). Es kann kein Android importieren, der Compiler erzwingt das, und die Tests laufen auf der normalen JVM.
- **`:app`** enthält Compose-UI, Services, Receiver und das Widget. Die Schichten laufen in eine Richtung, Domäne, Daten, Seiteneffekte, Service und UI, mit genau einem Besitzer pro Aufgabe.
- **`AppStateRepository`** besitzt den gespeicherten Zustand. Jede Änderung läuft durch ein mutexgeschütztes `update { }`, und genau eine Datei kennt den Speicherschlüssel.
- **`StateSyncer`** besitzt die Seiteneffekte. Nach jedem Schreiben startet er den Blocker-Service neu, plant Alarme um und aktualisiert Widgets, damit kein Bildschirm daran denken muss.
- **`BlockerService`** prüft bei jedem Takt die Vordergrund-App und setzt die Entscheidung durch, normalerweise per Overlay, mit Bedienungshilfen per Zwangsschließen, was Pixel und Samsung verlangen.

Modi, Zeitpläne und Tags lassen sich als JSON oder YAML exportieren und wieder importieren, entweder als vollständiger Ersatz oder zusammengeführt nach ID.

## Was ich gelernt habe

Android bekämpft lang laufende Apps hart, und jeder Hersteller auf seine eigene Weise. Der Großteil der Arbeit floss ins Überleben: Autostart bei Xiaomi und Oppo, Akku-Ausnahmen, der Weg über Bedienungshilfen für Pixel und eine Berechtigungsseite, die jede Berechtigung bei der Rückkehr neu prüft. Dass die Regeln in einem Modul ohne Android liegen, hat diese ständigen Änderungen sicher gemacht.
