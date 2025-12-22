---
layout: page
title: Morner Bot
description: Telegram bot for morning routine tracking via smartwatch to minimize phone distractions.
img: assets/img/PlaniriumBot.png
importance: 1
category: productivity
---

## `Morner Bot` - Morning Routine via Smartwatch

> Morner Bot helps build consistent morning habits by minimizing phone usage. Set up your routine once, then complete it daily using only your smartwatch.

### `Core Idea`

I believe mornings are more productive for our brain and mind. However, it is difficult to avoid distractions and not get pulled into the phone, hence comes the idea of this bot. You set up your morning routine once via phone, then every morning you interact with the bot via smartwatch using quick replies only, minimizing phone usage, keeping your head clear and not being too much noise is always good in my opinion.

### `Technical Implementation`

Built with `Python` using the `aiogram 3.x` library for async Telegram operations. The bot uses FSM (Finite State Machine) pattern for conversation flow management. Data persistence via JSON with timezone support through `pytz`. All notifications are silent to avoid being intrusive.

### `Bot Interface`

#### Main Menu

<details>
    <summary>View the Main Menu</summary>
    <div class="row justify-content-center">
        <div class="col-md-5">
            {% include figure.liquid path="assets/img/menu.jpg" title="Main Menu" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Task Flow

<details>
    <summary>Check Out Task Flow</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/tasks.jpg" title="Task Flow" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Statistics View

<details>
    <summary>Explore Statistics</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/working.jpg" title="Statistics View" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Settings Panel

<details>
    <summary>Manage Settings</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/template.jpg" title="Settings Panel" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `How It Works`

Setup your routine once through phone. Each morning you receive a silent notification on your watch. Tap any quick reply to start. Complete tasks by tapping any quick reply button. The bot advances automatically regardless of which quick reply you use, since everyone has different button configurations on their watches.

Special commands: `Skip` (marks current task as skipped), `Menu` (returns to main menu). Streaks require 100% completion of required tasks. Optional tasks don't affect your streak if skipped.

### `Key Features`

Watch-optimized interface with customizable quick replies. Task management with optional/required task types. Configurable time windows and timezone support. Streak tracking with daily/weekly/monthly calendar statistics. Silent notifications at routine start, warnings before deadline, and completion summaries. Pause/resume functionality for interrupted routines.

### `Reflection`

Developing Morner Bot taught me about async programming patterns and state machine architecture. The challenge was making the interface work seamlessly on smartwatches while maintaining full functionality on phones. Timezone handling and notification scheduling required careful consideration to work reliably across different user contexts.

For more details and source code:

- **[Morner Bot GitHub Repository](https://github.com/Andebugulin/telegram_bot)**
- **[Try the hosted bot](https://t.me/PlanyDbot)** - Running on Oracle Cloud

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