---
layout: page
title: Awareen
description: Eine Bildschirmzeit-Bewusstseins-App mit persistentem Overlay-Timer für bewusste Gerätenutzung.
img: assets/img/awareen.png
importance: 1
category: productivity 
---

## `Awareen` - Bildschirmzeit-Bewusstseins-Wächter

> Awareen (Awareness + Screen) ist eine Android-Anwendung, die bewusste Gerätenutzung durch einen persistenten Overlay-Timer fördert und Benutzern hilft, sich ihrer Bildschirmzeit über alle Anwendungen hinweg bewusster zu werden.

### `Technologie-Stack`

Gebaut mit modernen Android-Entwicklungspraktiken:
- `Kotlin` für native Android-Entwicklung
- `Service-basierte Architektur` für Hintergrundverarbeitung
- `Overlay-Berechtigungen` für systemweite Integration
- `Vordergrunddienste` für zuverlässigen Betrieb
- `SharedPreferences` für Einstellungspersistenz
- `Custom UI-Komponenten` für flexible Anzeigeoptionen

### `Kern-Innovation: Dreistufiges Warnsystem`

Awareen verfügt über ein progressives Bewusstseinssystem, das sich an Nutzungsmuster anpasst:

1. **Stufe 1 (Grün)**: Standard-Anzeige für normale Nutzung (0-30 Minuten)
2. **Stufe 2 (Gelb)**: Warnphase bei Annäherung an Limits (30-60 Minuten)  
3. **Stufe 3 (Rot)**: Alarmphase für excessive Nutzung (60+ Minuten) mit optionalem Blinken

Alle Farben, Positionen und Zeitschwellen sind vollständig anpassbar an individuelle Präferenzen.

### `Hauptfunktionen`

#### Persistentes Overlay-System
- **Immer sichtbarer Timer**, der über alle Anwendungen funktioniert
- **Intelligente Anzeigemodi**: Immer-an oder konfigurierbare intervallbasierte Sichtbarkeit
- **Anpassbare Positionierung** mit per-Stufe-Schriftgrößen und -farben
- **Systemweite Integration**, die App-Wechsel und Gerätedrehungen übersteht

#### Erweiterte Konfiguration
- **Dreistufige Anpassung** für Farben, Positionen und Schwellenwerte
- **Flexible Anzeigeintervalle** mit konfigurierbaren Dauern
- **Täglicher Auto-Reset** mit benutzerdefinierten Zeiten
- **Batterieoptimierungs-Behandlung** für unterbrechungsfreien Betrieb

#### Analytics-Dashboard
- **Tägliche Nutzungsverfolgung** mit Mustererkennung
- **Historische Datenvisualisierung** für langfristiges Bewusstsein
- **Trendanalyse** zur Identifikation von Nutzungsgewohnheiten

### `Entwicklungsreise`

Die Erstellung von Awareen war eine Erkundung in Android-Systemprogrammierung, Benutzerverhalten-Psychologie und nachhaltige App-Architektur. Das Projekt forderte mich heraus:

- **Android-Services zu meistern** und Vordergrunddienst-Management
- **Komplexe Berechtigungssysteme zu navigieren** über verschiedene Android-Versionen
- **Intuitive UX zu gestalten** für produktivitätsfokussierte Anwendungen
- **Persistente Overlay-Systeme zu implementieren**, die Benutzerprivatsphäre respektieren
- **Batterieoptimierung zu handhaben** und Auto-Start-Komplexitäten
- **Flexible Konfigurationssysteme zu erstellen** für diverse Benutzerpräferenzen

Die Anwendung sammelte erfolgreich über 100 Benutzer durch organische Vertriebskanäle und demonstrierte reale Nachfrage nach achtsamen Technologielösungen.

### `Auswirkung & Vertrieb`

- **100+ aktive Benutzer** über mehrere Vertriebskanäle
- **Signierte Release-Versionen** mit ordnungsgemäßer Android-Sicherheits-Compliance
- **Positives Benutzerfeedback** zur Wirksamkeit für Bildschirmzeit-Bewusstsein
- **Open-Source-Beitrag** zum digitalen Wellness-Ökosystem

- **[Awareen GitHub Repository](https://github.com/Andebugulin/awareen)**

### `Contributors`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Loading contributors...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/Andebugulin/awareen/contributors';
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