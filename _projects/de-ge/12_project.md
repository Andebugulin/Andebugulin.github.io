---
layout: page
title: Knowledge Tree
description: Minimalistisches graphbasiertes Wissensmanagementsystem inspiriert von Zettelkasten. Visualisiere und verknüpfe Gedanken in einem interaktiven Netzwerk – vollständig tastaturgesteuert.
img: assets/img/knowledge-tree.png
importance: 1
category: productivity
---

## `Knowledge Tree` Kn-🦉-⭕-🌳
Ein minimalistisches graphbasiertes Wissensmanagementsystem inspiriert von der Zettelkasten-Methode. Navigiere durch dein gesamtes Wissensnetzwerk ohne die Tastatur zu verlassen.

### `Idee`
Ich wollte ein einfaches Web-Tool, mit dem ich mein Wissen als Graph verwalten kann – ähnlich wie Zettelkasten, aber ohne Obsidian mit unzähligen Plugins.

### `Überblick`
Knowledge Tree hilft dir, eine persönliche Wissensbasis durch vernetzte Notizen aufzubauen. Jede Notiz wird zu einem Knoten im Wissensgraphen, und Beziehungen bilden bedeutungsvolle Verbindungen zwischen Ideen und Gedanken. Das Dashboard ist vollständig per Vim-Tastenkürzel steuerbar, mit Dark/Light-Theme-Unterstützung, die sitzungsübergreifend gespeichert wird.

### `Technologien`
- **Frontend**: Next.js 15, React, TypeScript, TailwindCSS
- **Visualisierung**: Sigma.js mit Graphology
- **Backend**: tRPC, Prisma ORM
- **Datenbank**: PostgreSQL
- **Authentifizierung**: NextAuth.js

#### Theme
Zwischen Dark und Light Mode über die Theme-Schaltfläche in der oberen Leiste wechseln. Die Einstellung wird in `localStorage` gespeichert.

#### Vim-Tastenkürzel
Das gesamte Dashboard ist tastaturgesteuert. Drücke `?` jederzeit, um die Referenz in der App zu öffnen.

**Knotenliste**
- `j` / `k` — Liste nach unten / oben bewegen
- `l` oder `Enter` — Knoten im Editor öffnen
- `n` — Neuen Knoten erstellen
- `dd` — Knoten löschen (mit Bestätigung)
- `/` — Nach Titel oder Inhalt suchen
- `g` oder `Tab` — Graphansicht umschalten

**Editor — Normal Mode**
- `h` / `l` / `j` / `k` — Cursor bewegen
- `w` / `b` / `e` — Nächstes / vorheriges / Ende des Wortes
- `0` / `$` / `^` — Zeilenanfang / -ende / erstes Nicht-Leerzeichen
- `gg` / `G` — Dokumentanfang / -ende
- `i` / `a` / `A` / `o` / `O` — Insert Mode betreten
- `dd` / `yy` / `p` / `P` — Zeile löschen / kopieren / einfügen
- `dw` / `cw` / `cc` — Wort / Zeile löschen / ändern
- `ci"` `ci(` `ci[` — Inhalt zwischen Zeichenpaar ändern
- `u` / `Ctrl+R` — Rückgängig / Wiederholen (50 Schritte)
- `v` — Visual Mode
- `Space` — Verknüpfungsbereich öffnen
- `q` — Speichern und zur Liste zurückkehren
- `Ctrl+S` — Notiz speichern

**Verknüpfungsbereich (`Space`)**
- `h` / `l` — Verknüpfungstyp wechseln
- `j` / `k` — Zwischen Abschnitten navigieren
- `Enter` oder `Space` — Verknüpfung erstellen
- `d` — Verbindung löschen
- `Esc` — Bereich schließen

#### Ideen verknüpfen
- Knoten auswählen und `Space` drücken, um den Verknüpfungsbereich zu öffnen
- Beziehungstyp wählen:
  - **Parent/Child** — Hierarchische Verbindungen (ein Elternteil pro Knoten, keine Zyklen)
  - **Reference** — Verwandte Konzepte
  - **Example** — Konkrete Instanzen
  - **Contradiction** — Widersprüchliche Ideen
- Zum Kandidaten navigieren und `Enter` drücken, um zu verknüpfen

#### Wiki-Links
`[[` im Insert Mode eingeben, um die Autovervollständigung für vorhandene Knotentitel auszulösen. Bei Auswahl eines Vorschlags wird `[[Knotenname]]` direkt eingefügt.

#### Graphnavigation
- **Klick** — Knoten auswählen und im Editor öffnen
- **Hover** — Knoteninhalt als Vorschau anzeigen
- **Ziehen** — Im Graph scrollen
- **Scrollen** — Zoom
- **Doppelklick** (leerer Bereich) — Knoten an dieser Position erstellen

### `Datenbankschema`
**Node** — Speichert einzelne Wissenseinheiten, gehört einem Benutzer, enthält Titel und Inhalt

**Edge** — Verbindet zwei Knoten, Typen: parent, reference, example, contradiction

**User** — Authentifizierung und Eigentümerschaft, isolierte Wissensgraphen pro Benutzer

**[Knowledge Tree GitHub-Repository](https://github.com/Andebugulin/kn-owl-edge-tree)**

### `Mitwirkende`
<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Mitwirkende werden geladen...</div>
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
### `Live-Demo`
<div style="text-align: center; margin: 40px 0;">
<a href="https://kn-owl-edge-tree.vercel.app/" target="_blank" style="display: inline-block; padding: 15px 40px; background: linear-gradient(135deg, #5D0E41 0%, #A0153E 50%, #FF204E 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 18px; transition: transform 0.2s;">
    Live-Demo öffnen →
</a>
<p style="margin-top: 20px; color: #666; font-size: 14px;">
    Erstelle ein Konto und baue dein erstes Wissensnetzwerk auf
</p>
</div>