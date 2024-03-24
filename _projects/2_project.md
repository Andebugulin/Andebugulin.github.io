---
layout: page
title: Planirium Bot
description: A streamlined Telegram bot for efficient daily planning and task management.
img: assets/img/PlaniriumBot.png
importance: 1
category: productivity
---

## `Planirium Bot` - Your Daily Planning Assistant

> Planirium Bot simplifies daily planning, offering a feature-rich platform that enhances efficiency and makes managing schedules effortless.

### `Feature Highlights`

Planirium Bot is built with `Python` and utilizes the `aiogram` library for seamless interaction with Telegram. It offers a range of features designed to help users stay organized and productive. Plus, it adds a bit of charm to your day with playful compliments to keep you motivated!

### `Page Layouts`

#### Main Menu

<details>
    <summary>View the Main Menu</summary>
    <div class="row justify-content-center">
        <div class="col-md-5">
            {% include figure.liquid path="assets/img/menu.jpg" title="Main Menu" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Tasks View

<details>
    <summary>Check Out the Tasks View</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/tasks.jpg" title="Tasks View" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Working Mode

<details>
    <summary>Explore the Working Mode</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/working.jpg" title="Working Mode" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Template Management

<details>
    <summary>Manage Your Templates</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/template.jpg" title="Template Management" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Conclusion and Reflection`

Developing Planirium Bot has been a rewarding experience. It allowed me to delve deeper into Telegram's bot API and the aiogram library, enhancing my skills in Python development and user experience design. Plus, adding those fun, uplifting messages has made the development process even more enjoyable!

For further insights and a detailed breakdown of the project, check out the project documentation:

- **[Planirium Bot GitHub Repository](https://github.com/Andebugulin/telegram_bot)**


### `Fancy Feature: Daily Compliments`

One of the standout features of Planirium Bot is its ability to sprinkle a bit of joy into your daily routine. Whether you're hard at work or ticking off tasks, the bot will cheer you on with charming compliments like, "Are you a cat? Because you’re purr-fect!" or "You must be a magician because whenever I look at you, everyone else disappears!"

Planirium Bot is here to keep you smiling while you stay organized. Happy planning!

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
