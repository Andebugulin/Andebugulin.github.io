---
layout: page
title: Knowledge Tree
description: Minimalistisches graph-basiertes Wissensmanagementsystem inspiriert von Zettelkasten. Visualisiere und vernetze deine Gedanken interaktiv.
img: assets/img/knowledge-tree.png
importance: 1
category: productivity
---

## `Knowledge Tree` Kn-🦉-⭕-🌳

Ein minimalistisches graph-basiertes Wissensmanagementsystem inspiriert von der Zettelkasten-Methodik. Visualisiere und vernetze deine Gedanken in einem interaktiven Netzwerk.

### `Idee`

Ich wollte ein einfaches UI/Web-Tool, mit dem ich mein Wissen als Graph verwalten kann, ähnlich wie Zettelkasten, ohne Obsidian mit Millionen von Plugins zu verwenden.

### `Überblick`

Knowledge Tree hilft dir, eine persönliche Wissensbasis durch vernetzte Notizen aufzubauen. Jede Notiz wird zu einem Knoten in deinem Wissensgraphen, mit Beziehungen, die bedeutungsvolle Verbindungen zwischen Ideen und Gedanken bilden.

### `Tech Stack`

- **Frontend**: Next.js 15, React, TypeScript, TailwindCSS
- **Visualisierung**: Sigma.js mit Graphology
- **Backend**: tRPC, Prisma ORM
- **Datenbank**: PostgreSQL
- **Authentifizierung**: NextAuth.js

### `Features`

#### Notizen Erstellen
- Klicke auf **New Node** in der oberen Leiste
- Gib einen Titel und optionalen Inhalt ein
- Unterstützt einfaches Markdown-Formatting

#### Ideen Verbinden
- Wähle einen Knoten für **Edit Mode**
- Wechsle zu **Link Mode**
- Wähle Beziehungstyp:
  - **Parent/Child** - Hierarchische Verbindungen (ein Elternteil pro Knoten)
  - **Reference** - Verwandte Konzepte
  - **Example** - Konkrete Beispiele
  - **Contradiction** - Widersprüchliche Ideen
- Klicke auf einen anderen Knoten zum Verbinden

#### Navigation
- **Click** - Knoten auswählen und bearbeiten
- **Hover** - Knoten-Vorschau
- **Search** - Knoten nach Titel oder Inhalt finden
- **Drag** - Graph verschieben
- **Scroll** - Zoom

### `Database Schema`

**Node** - Speichert einzelne Wissenseinheiten, gehört einem Benutzer, enthält Titel und Inhalt

**Edge** - Verbindet zwei Knoten, Typen: parent, reference, example, contradiction

**User** - Authentifizierung und Eigentümerschaft, isolierte Wissensgraphen pro Benutzer

**[Knowledge Tree GitHub Repository](https://github.com/Andebugulin/kn-owl-edge-tree)**

### `Contributors`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Loading contributors...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/Andebugulin/kn-owl-edge-tree/contributors';
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

---

### `Live Demo`

<div style="text-align: center; margin: 40px 0;">
  <a href="https://kn-owl-edge-tree.vercel.app/" target="_blank" style="display: inline-block; padding: 15px 40px; background: linear-gradient(135deg, #5D0E41 0%, #A0153E 50%, #FF204E 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 18px; transition: transform 0.2s;">
    Live Demo Ausprobieren →
  </a>
  <p style="margin-top: 20px; color: #666; font-size: 14px;">
    Erstelle einen Account und baue dein erstes Wissensnetzwerk
  </p>
</div>