---
layout: page
title: GaleriYah
description: Ein avantgardistisches Fotografie-Portfolio.
img: assets/img/GaleriYah.png
importance: 1
category: fun 
---

## `GaleriYah` - Avantgardistisches Fotografie-Portfolio

> Erleben Sie Fotografie durch eine neue Linse mit GaleriYah, wo avantgardistisches Design auf nahtlose Funktionalität trifft. Diese Next.js 13-betriebene Plattform transformiert die Art, wie wir visuelle Kunst präsentieren und mit ihr interagieren.

### `Technologie-Symphonie`

Gebaut mit modernen Web-Technologien, orchestriert GaleriYah:
- `Next.js 13` für blitzschnelle Performance
- `Tailwind CSS` für atemberaubende Ästhetik
- `Framer Motion` für flüssige Animationen
- `Supabase` für robuste Datenverwaltung
- `TypeScript` für Code-Zuverlässigkeit
- `Lucide React` für schöne Icons
- `Custom Geist Font` Integration

### `Visuelle Erfahrung`

#### Dynamisches Grid-Layout

<details>
    <summary>Grid erkunden</summary>
    [Image content remains the same]
    <div class="caption">
        Responsives Grid-System mit dynamischer Größenanpassung und eleganten Hover-Effekten
    </div>
</details>

#### Album-Betrachter

<details>
    <summary>Alben durchsuchen</summary>
    [Image content remains the same]
    <div class="caption">
        Horizontale Scrolling-Album-Ansicht mit intuitiver Mausrad-Navigation
    </div>
</details>

#### Foto-Details

<details>
    <summary>Foto-Details anzeigen</summary>
    [Image content remains the same]
    <div class="caption">
        Immersive Foto-Betrachtung mit Metadaten und Beschreibungen
    </div>
</details>

### `Herausragende Funktionen`

#### Supreme-inspirierte Navigation
Eine der charakteristischsten Funktionen von GaleriYah ist ihr Supreme-inspiriertes Navigationssystem. Das minimalistische Design kombiniert mit kühner Typografie und geschmeidigen Übergängen, um eine Erfahrung zu schaffen, die sowohl funktional als auch visuell beeindruckend ist.

#### Dynamisches Foto-Grid
Das Foto-Grid passt sich dem Inhalt an und schafft visuelles Interesse durch verschiedene Größen und Positionen.

#### Admin-Panel & Content-Management
Eingebaute Admin-Oberfläche unter `/admin/photos` mit Supabase-Authentifizierung für sichere Foto- und Album-Verwaltung. Bietet Ein-Klick-Flickr-Synchronisation für nahtlosen Content-Import.

### `Entwicklungsreise`

Die Erstellung von GaleriYah war eine aufregende Erkundung moderner Web-Technologien und Design-Prinzipien. Das Projekt forderte mich heraus:
- Komplexe Grid-Layouts mit dynamischer Größenanpassung zu implementieren
- Geschmeidige, performante Animationen zu erstellen
- Eine intuitive und doch avantgardistische Benutzeroberfläche zu gestalten
- Nahtlose Datenverwaltung mit Supabase zu integrieren
- Automatisierte Content-Import-Pipelines zu entwickeln
- Sichere Admin-Oberflächen mit Authentifizierung zu entwickeln
- Bildladung und -auslieferung zu optimieren

### `Design-Philosophie`

GaleriYah umarmt avantgardistische Design-Prinzipien bei gleichzeitiger Beibehaltung der Benutzerfreundlichkeit:
- **Minimalistische Ästhetik** - Weniger ist mehr Ansatz
- **Dynamische Interaktionen** - Flüssige Animationen und Übergänge
- **Responsives Design** - Funktioniert auf allen Gerätegrößen
- **Visuelle Hierarchie** - Klare Inhaltsorganisation

### `Zukunftige Verbesserungen`

Der Zweck dieses Designs ist es, es so minimalistisch wie möglich zu machen, daher sollte jede Verbesserung diesem Prinzip folgen – mit anderen Worten: weniger ist mehr!

- **[GaleriYah GitHub Repository](https://github.com/andebugulin/galeriyah)**

### `Contributors`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Loading contributors...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/andebugulin/galeriyah/contributors';
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