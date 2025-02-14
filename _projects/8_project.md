---
layout: page
title: ArchBlocker
description: A powerful website blocker with a retro terminal interface for managing digital distractions.
img: assets/img/ArchBlocker.png
importance: 1
category: productivity
---

## `ArchWebBlocker` - Your Digital Well-being Guardian

> ArchWebBlocker combines the power of system-level website blocking with a nostalgic terminal interface, helping you stay focused when it matters most.

### `Feature Highlights`

Built with `Python` for the backend and `React` for the frontend, ArchWebBlocker offers a unique approach to managing digital distractions. The application uses system-level blocking through the hosts file, ensuring robust website blocking that can't be easily circumvented.

### `Interface Views`

#### Terminal Interface

<details>
    <summary>View the Terminal Interface</summary>
    <div class="row justify-content-center">
        <div class="col-md-8">
            {% include figure.liquid path="assets/img/terminal.jpg" title="Terminal Interface" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Technical Deep Dive`

#### Backend Architecture
- Flask-based API server
- System-level website blocking via hosts file
- Rotating log system for debugging
- Secure file handling with immutability protection
- Systemd service integration for automatic startup

#### Frontend Features
- React + Vite for modern development experience
- Terminal-style interface using Lucide React
- Real-time API communication
- Tailwind CSS for responsive design
- Command-line inspired interaction




- **[ArchWebBlocker GitHub Repository](https://github.com/andebugulin/archwebblocker)**

### `Contributors`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Loading contributors...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/andebugulin/archwebblocker/contributors';
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