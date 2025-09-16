---
layout: page
title: Robanization
description: Ein herausforderndes 2D-Plattformspiel mit prozeduraler Level-Generierung und dynamischen Hindernissen.
img: assets/img/robanization.svg
importance: 1
category: fun 
---

## `Robanization`

> Ein anspruchsvoller 2D-Plattformer, der prozedurale Level-Generierung mit herausfordernden Gameplay-Mechaniken kombiniert und jedes Mal ein einzigartiges Erlebnis schafft.

### `Funktions-Highlights`

Gebaut mit `Python` und `Pygame`, zeigt dieser Plattformer fortgeschrittene Spieleentwicklungskonzepte. Das Spiel bietet prozedural generierte Level, dynamische Hindernisse und ein responsives Kamerasystem, das der Spielerbewegung folgt.

### `Interface-Ansichten`

#### Spielmenü-Oberfläche

<details>
    <summary>Spielmenü-Oberfläche anzeigen</summary>
    [Image content remains the same]
</details>

#### Spiel-Oberfläche

<details>
    <summary>Spiel-Oberfläche anzeigen</summary>
    [Image content remains the same]
</details>

### `Technischer Tiefgang`

#### Kern-Spielsysteme
- Custom-Physik-Engine mit Schwerkraftsimulation
- Prozedurale Level-Generierung aus Textvorlagen
- Dynamisches Kamerasystem
- Pixelgenaue Kollisionserkennung
- Zustandsverwaltung (Menü, Spiel, Game Over)
- Punkteverfolgungssystem

#### Spiel-Mechaniken
- Geschmeidige Spielerbewegung und -steuerung
- Umgebungsgefahren (Wasser, Tornados)
- Teleportationssystem für Level-Fortschritt
- Mehrere Charakter-Animationszustände
- Monetäres Belohnungssystem

### `Implementierungsdetails`

#### Level-Generierung
Das Spiel nutzt ein einzigartiges Level-Generierungssystem, das vordesignte Segmente kombiniert

#### Physik-System
Simuliert realistische Schwerkraft und verwaltet Sprungmechaniken

#### Kamerasystem
Verfolgt Spielerbewegung und bietet geschmeidiges Scrollen


- **[Game GitHub Repository](https://github.com/andebugulin/my_game)**


### `Contributors`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Loading contributors...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/andebugulin/my_game/contributors';
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
