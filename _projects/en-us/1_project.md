---
layout: page
title: TATASk
description: An innovative platform for managing daily tasks and activities.
img: assets/img/wizardTATASK.png
importance: 1
category: uni 
---

## `TATASk` - Your Daily Task Management Wizard

> TATASk integrates cutting-edge technologies to streamline the management of daily tasks and activities, offering a feature-rich platform that enhances efficiency and style.

### `Feature Highlights`

Utilizing a blend of technologies like `React`, `Node.js`, `PostgreSQL`, and `Docker`, `TATASk` offers robust functionality and scalability.

### `Page layouts`

#### Landing Page

<details>
    <div class="row justify-content-center">
        <div class="col-md-8">
            {% include figure.liquid path="assets/img/landing-page.jpg" title="Landing Page" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Dashboard View
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

#### Tasks Management
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

#### Activities Management
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

#### Statistics Page
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

### `Conclusion and Reflection`

Developing `TATASK` has been a journey of innovation and learning. The project not only enhanced my technical skills but also deepened my understanding of user-centric design.

For further `insights` and a `detailed breakdown` of technologies used, check out the project `documentation`:

- **[TATASk_manager](https://github.com/martimolanes/TATASk_Manager/)**
- **[Database Setup and Usage](https://github.com/martimolanes/TATASk_Manager/blob/main/docs/database/database-usage.md)**
- **[Server Implementation Details](https://github.com/martimolanes/TATASk_Manager/blob/main/docs/server/server-usage.md)**
- **[Client Application Insights](https://github.com/martimolanes/TATASk_Manager/blob/main/docs/client/application-usage.md)**

### `Contributors`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Loading contributors...</div>

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

