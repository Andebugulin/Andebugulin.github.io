---
layout: page
permalink: /thesis/
title: abschlussarbeit
nav: true
nav_order: 2
---

# Bachelor-Arbeit: WebAssembly vs JavaScript Leistung

**Bewertung der Leistung von WebAssembly im Vergleich zu JavaScript in CPU-intensiven Browser-Anwendungen**

## Überblick

Diese Arbeit untersucht die Leistungsunterschiede zwischen JavaScript und WebAssembly in rechenintensiven Browser-Anwendungen, mit besonderem Fokus auf Bildverarbeitungsaufgaben.

### Wichtigste Ergebnisse

- **WebAssembly übertraf JavaScript durchgängig** in allen getesteten Szenarien
- Beschleunigungsfaktoren lagen zwischen **1,3x und 3,95x** je nach Algorithmus-Komplexität
- WebAssembly zeigte **deutlich bessere Leistungskonsistenz** (bis zu 12x stabiler)
- Leistungsvorteile nahmen mit steigender Rechenkomplexität zu

### Getestete Algorithmen

1. **Farbinversion** (leichtgewichtig) - ~1,4x Beschleunigung
2. **Kantenerkennung mit Sobel-Operatoren** (mittel) - ~1,9x Beschleunigung
3. **K-Means Farbquantisierung** (schwer) - ~3,7x Beschleunigung

### Interaktive Demo

Erleben Sie die Leistungsunterschiede selbst mit dem **Live-Web-Anwendungs-Framework**:

[Interaktives Thesis-Projekt ansehen](https://andebugulin.github.io/js-wasm-vis/)

Die Anwendung ermöglicht es Ihnen:
- Eigene Bilder hochzuladen
- Leistungstests in Echtzeit durchzuführen
- Ausführungszeiten visuell zu vergleichen
- Detaillierte Leistungsmetriken zu erkunden

### Technische Details

- **Veröffentlicht**: 2025
- **Note**: 4/5
- **Seiten**: 40
- **Technologien**: JavaScript, Rust, WebAssembly, Canvas API
- **Testumgebung**: Chrome (V8-Engine) auf Linux

### Hauptbeiträge

- Open-Source Web-Framework für Leistungstests
- Praxisnahe Leistungsanalyse mit visuellem Feedback
- Umfassende Bewertung über mehrere Bildgrößen und Formate
- Analyse von Kaltstartkosten, Skalierungsverhalten und Konsistenz

---

**[Vollständige Arbeit lesen (PDF)](https://urn.fi/URN:NBN:fi:amk-2025121737531)**