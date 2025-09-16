---
layout: page
title: Planirium Bot
description: Ein optimierter Telegram-Bot für effiziente Tagesplanung und Aufgabenverwaltung.
img: assets/img/PlaniriumBot.png
importance: 1
category: productivity
---

## `Planirium Bot` - Ihr täglicher Planungsassistent

> Planirium Bot vereinfacht die Tagesplanung und bietet eine funktionsreiche Plattform, die die Effizienz steigert und die Verwaltung von Terminplänen mühelos macht.

### `Funktions-Highlights`

Planirium Bot ist mit `Python` gebaut und nutzt die `aiogram`-Bibliothek für nahtlose Interaktion mit Telegram. Er bietet eine Reihe von Funktionen, die darauf ausgelegt sind, Benutzern dabei zu helfen, organisiert und produktiv zu bleiben. Außerdem fügt er Ihrem Tag einen Hauch von Charme mit spielerischen Komplimenten hinzu, um Sie motiviert zu halten!

### `Seitenlayouts`

#### Hauptmenü

<details>
    <summary>Hauptmenü anzeigen</summary>
    <div class="row justify-content-center">
        <div class="col-md-5">
            {% include figure.liquid path="assets/img/menu.jpg" title="Hauptmenü" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Aufgabenansicht

<details>
    <summary>Aufgabenansicht ansehen</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/tasks.jpg" title="Aufgabenansicht" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Arbeitsmodus

<details>
    <summary>Arbeitsmodus erkunden</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/working.jpg" title="Arbeitsmodus" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Vorlagenverwaltung

<details>
    <summary>Vorlagen verwalten</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/template.jpg" title="Vorlagenverwaltung" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Fazit und Reflexion`

Die Entwicklung von Planirium Bot war eine lohnende Erfahrung. Sie ermöglichte es mir, tiefer in Telegrams Bot-API und die aiogram-Bibliothek einzutauchen, wodurch meine Fähigkeiten in Python-Entwicklung und Benutzererfahrungsdesign verbessert wurden. Außerdem hat das Hinzufügen dieser lustigen, aufbauenden Nachrichten den Entwicklungsprozess noch angenehmer gemacht!

### `Besondere Funktion: Tägliche Komplimente`

Eine der herausragenden Funktionen von Planirium Bot ist seine Fähigkeit, ein wenig Freude in Ihre tägliche Routine zu streuen. Egal ob Sie hart arbeiten oder Aufgaben abhaken, der Bot wird Sie mit charmanten Komplimenten anfeuern wie: "Bist du eine Katze? Denn du bist schnurr-fekt!" oder "Du musst ein Zauberer sein, denn wann immer ich dich ansehe, verschwinden alle anderen!"

Planirium Bot ist hier, um Sie zum Lächeln zu bringen, während Sie organisiert bleiben. Fröhliches Planen!

- **[Planirium Bot GitHub Repository](https://github.com/Andebugulin/telegram_bot)**


### `Contributors`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Loading contributors...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/Andebugulin/telegram_bot/contributors';
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
