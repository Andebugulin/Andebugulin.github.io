---
layout: page
title: ArchBlocker
description: Ein mächtiger Website-Blocker mit einer Retro-Terminal-Oberfläche zur Verwaltung digitaler Ablenkungen.
img: assets/img/ArchBlocker.png
importance: 1
category: productivity
---

## `ArchWebBlocker` - Ihr digitaler Wohlbefindens-Wächter

> ArchWebBlocker kombiniert die Macht systemweiter Website-Blockierung mit einer nostalgischen Terminal-Oberfläche und hilft Ihnen, fokussiert zu bleiben, wenn es darauf ankommt.

### `Funktions-Highlights`

Gebaut mit `Python` für das Backend und `React` für das Frontend, bietet ArchWebBlocker einen einzigartigen Ansatz zur Verwaltung digitaler Ablenkungen. Die Anwendung nutzt systemweite Blockierung durch die Hosts-Datei und gewährleistet robuste Website-Blockierung, die nicht leicht umgangen werden kann.

### `Interface-Ansichten`

#### Terminal-Oberfläche

<details>
    <summary>Terminal-Oberfläche anzeigen</summary>
    [Image content remains the same]
</details>

### `Technischer Tiefgang`

#### Backend-Architektur
- Flask-basierter API-Server
- Systemweite Website-Blockierung via Hosts-Datei
- Rotierendes Log-System für Debugging
- Sichere Dateibehandlung mit Unveränderlichkeitsschutz
- Systemd-Service-Integration für automatischen Start

#### Frontend-Funktionen
- React + Vite für moderne Entwicklungserfahrung
- Terminal-ähnliche Oberfläche mit Lucide React
- Echtzeit-API-Kommunikation
- Tailwind CSS für responsives Design
- Kommandozeilen-inspirierte Interaktion



- **[ArchWebBlocker GitHub Repository](https://github.com/andebugulin/archwebblocker)**

### `Contributors`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Loading contributors...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/andebugulin/archwebblocker/contributors';
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
