---
layout: page
title: Knowledge Tree
description: Minimalist graph-based knowledge management system inspired by Zettelkasten. Visualize and connect your thoughts in an interactive network.
img: assets/img/knowledge-tree.png
importance: 1
category: productivity
---

## `Knowledge Tree` Kn-🦉-⭕-🌳

A minimalist graph-based knowledge management system inspired by Zettelkasten methodology. 

### `Idea`

I wanted a simple UI/web tool where I could manage my knowledge as a graph, similar to Zettelkasten, without using Obsidian with millions of plugins.

### `Overview`

Knowledge Tree helps you build a personal knowledge base through interconnected notes. Each note becomes a node in your knowledge graph, with relationships that form meaningful connections between ideas and thoughts.

### `Tech Stack`

- **Frontend**: Next.js 15, React, TypeScript, TailwindCSS
- **Visualization**: Sigma.js with Graphology
- **Backend**: tRPC, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js

### `Features`

#### Creating Nodes
- Click **New Node** in the top bar
- Enter a title and optional content
- Nodes support basic markdown formatting

#### Connecting Ideas
- Select a node to enter **Edit Mode**
- Switch to **Link Mode**
- Choose relationship type:
  - **Parent/Child** - Hierarchical connections (one parent per node)
  - **Reference** - Related concepts
  - **Example** - Concrete instances
  - **Contradiction** - Conflicting ideas
- Click another node to create the connection

#### Navigation
- **Click** - Select and edit nodes
- **Hover** - Preview node content
- **Search** - Find nodes by title or content
- **Drag** - Pan around the graph
- **Scroll** - Zoom in/out

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