---
layout: page
title: Knowledge Tree
description: Minimalist graph-based knowledge management system inspired by Zettelkasten. Visualize and connect your thoughts in an interactive network — fully keyboard-driven.
img: assets/img/knowledge-tree.png
importance: 1
category: productivity
---

## `Knowledge Tree` Kn-🦉-⭕-🌳

A minimalist graph-based knowledge management system inspired by Zettelkasten methodology. Navigate your entire knowledge network without leaving the keyboard.

### `Idea`
I wanted a simple UI/web tool where I could manage my knowledge as a graph, similar to Zettelkasten, without using Obsidian with millions of plugins.

### `Overview`
Knowledge Tree helps you build a personal knowledge base through interconnected notes. Each note becomes a node in your knowledge graph, with relationships that form meaningful connections between ideas and thoughts. The dashboard is fully controllable via Vim keybindings, with dark/light theme support persisted across sessions.

### `Tech Stack`
- **Frontend**: Next.js 15, React, TypeScript, TailwindCSS
- **Visualization**: Sigma.js with Graphology
- **Backend**: tRPC, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js

#### Theme
Toggle between dark and light mode via the theme button in the top bar. Preference is saved in `localStorage`.

#### Vim Keybindings
The entire dashboard is keyboard-driven. Press `?` at any time to open the in-app reference.

**Node List**
- `j` / `k` — move down / up the list
- `l` or `Enter` — open node in editor
- `n` — create new node
- `dd` — delete node (with confirmation)
- `/` — search by title or content
- `g` or `Tab` — toggle graph view

**Editor — Normal Mode**
- `h` / `l` / `j` / `k` — move cursor
- `w` / `b` / `e` — next / prev / end of word
- `0` / `$` / `^` — line start / end / first non-blank
- `gg` / `G` — document top / bottom
- `i` / `a` / `A` / `o` / `O` — enter Insert mode
- `dd` / `yy` / `p` / `P` — delete / yank / paste line
- `dw` / `cw` / `cc` — delete / change word / line
- `ci"` `ci(` `ci[` — change inside pair
- `u` / `Ctrl+R` — undo / redo (50-level history)
- `v` — Visual mode
- `Space` — open link panel
- `q` — save and return to list
- `Ctrl+S` — save note

**Link Panel (`Space`)**
- `h` / `l` — cycle link type
- `j` / `k` — navigate sections
- `Enter` or `Space` — create link
- `d` — delete connection
- `Esc` — close panel

#### Connecting Ideas
- Select a node and press `Space` to open the link panel
- Choose relationship type:
  - **Parent/Child** — hierarchical connections (one parent per node, no cycles)
  - **Reference** — related concepts
  - **Example** — concrete instances
  - **Contradiction** — conflicting ideas
- Navigate to a candidate and press `Enter` to link

#### Wiki-links
Type `[[` in Insert mode to trigger autocomplete against existing node titles. Selecting a suggestion inserts a `[[Node Title]]` inline link.

#### Graph Navigation
- **Click** — select node and open in editor
- **Hover** — preview node content
- **Drag** — pan around the graph
- **Scroll** — zoom in/out
- **Double-click** (empty space) — create node at position

### `Database Schema`
**Node** - Stores individual knowledge units, belongs to a user, contains title and content

**Edge** - Connects two nodes, types: parent, reference, example, contradiction

**User** - Authentication and ownership, isolated knowledge graphs per user

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
    Try Live Demo →
</a>
<p style="margin-top: 20px; color: #666; font-size: 14px;">
    Create an account and build your first knowledge network
</p>
</div>