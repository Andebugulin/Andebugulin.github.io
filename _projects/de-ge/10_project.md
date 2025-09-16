---
layout: page
title: HaHaSaaS
description: Eine Witze-teilende SaaS-Plattform, die Humor auf Abruf liefert.
img: assets/img/hahasaas.svg
importance: 2
category: uni 
---

## `HaHaSaaS` - Lachen in die Cloud bringen

> HaHaSaaS ist eine SaaS-Plattform, die darauf ausgelegt ist, Witze sofort zu liefern, kategorisiert und bewertet für das beste komödiantische Erlebnis.

### `Funktions-Highlights`

HaHaSaaS ist mit `Golang` für das Backend und `React` für das Frontend gebaut. Es ermöglicht Benutzern, Witze zu durchsuchen, sie zu bewerten und sogar ihre eigenen hinzuzufügen, um eine nie endende Versorgung mit Humor zu gewährleisten.

### `Seitenlayouts`

#### Startseite

<details>
    <summary>Startseite anzeigen</summary>
    [Image content remains the same]
</details>

#### Witze-Hilfe

<details>
    <summary>Hilfe</summary>
    [Image content remains the same]
</details>

### `Bereitstellung mit Docker`

Um HaHaSaaS mit Docker bereitzustellen, führen Sie einfach aus:
```sh
git clone https://github.com/andebugulin/hahasaas.git
cd hahasaas
docker-compose up -d
```


- **[HaHaSaaS GitHub Repository](https://github.com/Andebugulin/hahasaas)**

### `Contributors`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Loading contributors...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/Andebugulin/hahasaas/contributors';
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

