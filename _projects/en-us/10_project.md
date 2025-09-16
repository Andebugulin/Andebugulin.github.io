---
layout: page
title: HaHaSaaS
description: A joke-sharing SaaS platform that delivers humor on demand.
img: assets/img/hahasaas.svg
importance: 2
category: uni 
---

## `HaHaSaaS` - Bringing Laughter to the Cloud

> HaHaSaaS is a SaaS platform designed to deliver jokes instantly, categorized and rated for the best comedic experience.

### `Feature Highlights`

HaHaSaaS is built with `Golang` for the backend and `React` for the frontend. It allows users to browse jokes, rate them, and even add their own, ensuring a never-ending supply of humor.

### `Page Layouts`

#### Homepage

<details>
    <summary>View the Homepage</summary>
    <div class="row justify-content-center">
        <div class="col-md-5">
            {% include figure.liquid path="assets/img/joke_interface.png" title="Homepage" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>


#### Joke Help

<details>
    <summary>help</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/joke_help.png" title="Joke Submission" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Deployment with Docker`

To deploy HaHaSaaS using Docker, simply run:

```sh
git clone https://github.com/andebugulin/hahasaas.git
cd hahasaas
docker-compose up -d
```

This will set up both the backend and frontend along with a PostgreSQL database for seamless deployment.

### `API Documentation (Coming Soon)`

HaHaSaaS will soon integrate `DocBox` for API documentation, making it easier for developers to explore and utilize the available endpoints.

### `Conclusion and Reflection`

Developing HaHaSaaS has been a fun and challenging experience. Working with `Golang`, `React`, and `PostgreSQL` has allowed me to refine my skills in full-stack development while creating something that spreads joy.

For more details, check out the project repository:

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

