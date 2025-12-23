---
layout: page
title: Morner Bot
description: Telegram-Bot zur Verfolgung von Morgenroutinen über Smartwatch, um Ablenkungen durch das Telefon zu minimieren.
img: assets/img/PlaniriumBot.png
importance: 1
category: productivity
---

## `Morner Bot` - Morgenroutine über Smartwatch

> Morner Bot hilft, konsistente Morgengewohnheiten aufzubauen, indem die Telefonnutzung minimiert wird. Richten Sie Ihre Routine einmal ein und führen Sie sie dann täglich nur über Ihre Smartwatch aus.

### `Kernidee`

Ich glaube, dass Morgen produktiver für unser Gehirn und unseren Geist sind. Es ist jedoch schwierig, Ablenkungen zu vermeiden und nicht ins Telefon hineingezogen zu werden, daher kam die Idee für diesen Bot. Sie richten Ihre Morgenroutine einmal über das Telefon ein, dann interagieren Sie jeden Morgen mit dem Bot über die Smartwatch nur mit Schnellantworten, minimieren die Telefonnutzung, halten Ihren Kopf klar und nicht zu viel Lärm ist meiner Meinung nach immer gut.

### `Technische Umsetzung`

Entwickelt mit `Python` unter Verwendung der `aiogram 3.x`-Bibliothek für asynchrone Telegram-Operationen. Der Bot verwendet das FSM-Muster (Finite State Machine) zur Verwaltung des Gesprächsflusses. Datenpersistenz über JSON mit Zeitzonen-Unterstützung durch `pytz`. Alle Benachrichtigungen sind stumm, um nicht aufdringlich zu sein.

### `Bot-Oberfläche`

#### Hauptmenü

<details>
    <summary>Hauptmenü anzeigen</summary>
    <div class="row justify-content-center">
        <div class="col-md-5">
            {% include figure.liquid path="assets/img/menu.jpg" title="Hauptmenü" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Aufgabenfluss

<details>
    <summary>Aufgabenfluss ansehen</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/tasks.jpg" title="Aufgabenfluss" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Statistikansicht

<details>
    <summary>Statistiken erkunden</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/working.jpg" title="Statistikansicht" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Einstellungen

<details>
    <summary>Einstellungen verwalten</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/template.jpg" title="Einstellungen" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Funktionsweise`

Richten Sie Ihre Routine einmal über das Telefon ein. Jeden Morgen erhalten Sie eine stumme Benachrichtigung auf Ihrer Uhr. Tippen Sie auf eine beliebige Schnellantwort, um zu beginnen. Schließen Sie Aufgaben ab, indem Sie auf eine beliebige Schnellantworttaste tippen. Der Bot läuft automatisch weiter, unabhängig davon, welche Schnellantwort Sie verwenden, da jeder unterschiedliche Tastenkonfigurationen auf seinen Uhren hat.

Spezielle Befehle: `Skip` (markiert aktuelle Aufgabe als übersprungen), `Menu` (Rückkehr zum Hauptmenü). Für Serien ist eine 100%ige Erfüllung der Pflichtaufgaben erforderlich. Optionale Aufgaben beeinflussen Ihre Serie nicht, wenn sie übersprungen werden.

### `Hauptfunktionen`

Für Uhren optimierte Benutzeroberfläche mit anpassbaren Schnellantworten. Aufgabenverwaltung mit optionalen/erforderlichen Aufgabentypen. Konfigurierbare Zeitfenster und Zeitzonen-Unterstützung. Serien-Tracking mit täglichen/wöchentlichen/monatlichen Kalenderstatistiken. Stumme Benachrichtigungen bei Routinebeginn, Warnungen vor Ablauf und Abschlusszusammenfassungen. Pause/Fortsetzungsfunktion für unterbrochene Routinen.

### `Reflexion`

Die Entwicklung von Morner Bot hat mir asynchrone Programmiermuster und State-Machine-Architektur beigebracht. Die Herausforderung bestand darin, die Benutzeroberfläche nahtlos auf Smartwatches funktionieren zu lassen und gleichzeitig die volle Funktionalität auf Telefonen zu erhalten. Die Handhabung von Zeitzonen und die Planung von Benachrichtigungen erforderten sorgfältige Überlegungen, um zuverlässig in verschiedenen Benutzerkontexten zu funktionieren.

Für weitere Details und Quellcode:

- **[Morner Bot GitHub-Repository](https://github.com/Andebugulin/telegram_bot)**
- **[Probieren Sie den gehosteten Bot aus](https://t.me/PlanyDbot)** - Läuft auf Oracle Cloud

### `Mitwirkende`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Mitwirkende werden geladen...</div>

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