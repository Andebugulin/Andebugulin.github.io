---
layout: page
title: TATASk
description: Eine innovative Plattform zur Verwaltung täglicher Aufgaben und Aktivitäten.
img: assets/img/wizardTATASK.png
importance: 1
category: uni 
---

## `TATASk` - Ihr täglicher Aufgabenverwaltungs-Assistent

> TATASk integriert modernste Technologien zur Optimierung der Verwaltung täglicher Aufgaben und Aktivitäten und bietet eine funktionsreiche Plattform, die Effizienz und Stil verbessert.

### `Funktions-Highlights`

Mit einer Kombination aus Technologien wie `React`, `Node.js`, `PostgreSQL` und `Docker` bietet `TATASk` robuste Funktionalität und Skalierbarkeit.

### `Seitenlayouts`

#### Startseite

<details>
    <div class="row justify-content-center">
        <div class="col-md-8">
            {% include figure.liquid path="assets/img/landing-page.jpg" title="Landing Page" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Dashboard-Ansicht
<details>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/navbar.jpg" title="Navigation Bar" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="row justify-content-center">    
        <div class="col-sm-10">
            {% include figure.liquid path="assets/img/task-overview.jpg" title="Task Overview" class="img-fluid rounded z-depth-1" %}
        </div>
        <div class="col-sm-10">
            {% include figure.liquid path="assets/img/activity-overview.jpg" title="Activity Overview" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Aufgabenverwaltung
<details>
    <div class="row justify-content-center">
        <div class="col-sm-8">
            {% include figure.liquid path="assets/img/task-popup.jpg" title="Task Creation Popup" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/task-filter.jpg" title="Task Filter by Activity" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/task-example-1.jpg" title="Task Example 1" class="img-fluid rounded z-depth-1" %}
        </div>
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/task-example-3.jpg" title="Task Example 3" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>    
</details>

#### Aktivitätsverwaltung
<details>
    <div class="row justify-content-center">
        <div class="col-sm-8">
            {% include figure.liquid path="assets/img/add-activity-button.jpg" title="Add Activity Button" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-sm-8">
            {% include figure.liquid path="assets/img/activity-popup.jpg" title="Activity Creation Popup" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="row">
        <div class="col-sm-14">
            {% include figure.liquid path="assets/img/activity-example.jpg" title="Activity Example" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Statistik-Seite
<details>
    <div class="row">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/statistics-chart-1.jpg" title="Statistics Chart 1" class="img-fluid rounded z-depth-1" %}
        </div>
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/statistics-chart-2.jpg" title="Statistics Chart 2" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Fazit und Reflexion`

Die Entwicklung von `TATASK` war eine Reise der Innovation und des Lernens. Das Projekt hat nicht nur meine technischen Fähigkeiten verbessert, sondern auch mein Verständnis für benutzerzentriertes Design vertieft.

Für weitere `Einblicke` und eine `detaillierte Aufschlüsselung` der verwendeten Technologien, schauen Sie sich die Projekt-`Dokumentation` an:

- **[TATASk_manager](https://github.com/martimolanes/TATASk_Manager/)**
- **[Database Setup and Usage](https://github.com/martimolanes/TATASk_Manager/blob/main/docs/database/database-usage.md)**
- **[Server Implementation Details](https://github.com/martimolanes/TATASk_Manager/blob/main/docs/server/server-usage.md)**
- **[Client Application Insights](https://github.com/martimolanes/TATASk_Manager/blob/main/docs/client/application-usage.md)**

### `Mitwirkende`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Mitwirkende werden geladen...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/martimolanes/TATASk_Manager/contributors';
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