---
layout: page
title: Guardian
description: Android app for focused productivity using NFC-controlled app blocking and scheduled modes.
img: assets/img/guardian.png
importance: 2
category: productivity
---

## `Guardian` - NFC-Based App Blocker

> Physical focus lock for Android. Block distracting apps, unlock only with NFC tap.

### `Core Concept`

Create blocking modes → Select apps to block/allow → Set optional schedules → Link optional NFC tag → Activate mode → Stay focused. No software bypass - requires physical NFC interaction to unlock.

### `Technical Stack`

Built with `Kotlin` and `Jetpack Compose`. Uses `Kotlin Coroutines` for async operations, `Kotlinx Serialization` for state persistence, and `AlarmManager` for precise scheduling. Foreground service ensures reliability across reboots and task removal.

### `Features`

**Blocking Modes**
- Block Selected: Restricts access to chosen apps
- Allow Only: Blocks everything except chosen apps
- Optional NFC tag requirement per mode

**Scheduling**
- Per-day time configuration with custom start/end times
- Multiple mode linking
- Optional automatic deactivation

**NFC Integration**
- Register tags for mode-specific unlocking
- Any NFC device works if no specific tag linked
- Smartwatch, headphones other tags supported

### `Screenshots`

<details>
    <summary>App Interface</summary>
    <div class="row">
        <div class="col-sm-6 mt-3">
            {% include figure.liquid path="assets/img/guardian_home.png" title="Home" class="img-fluid rounded z-depth-1" %}
        </div>
        <div class="col-sm-6 mt-3">
            {% include figure.liquid path="assets/img/guardian_modes.png" title="Modes" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6 mt-3">
            {% include figure.liquid path="assets/img/guardian_schedules.png" title="Schedules" class="img-fluid rounded z-depth-1" %}
        </div>
        <div class="col-sm-6 mt-3">
            {% include figure.liquid path="assets/img/guardian_nfc.png" title="NFC Tags" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6 mt-3">
            {% include figure.liquid path="assets/img/guardian_info.png" title="NFC Info" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Requirements`

- Android 6.0+ (API 23)
- NFC hardware
- Permissions: Usage Access, Display Over Apps, Battery Optimization exemption

**MIUI/Custom ROM Users**: Disable "Pause app activity if unused", enable "Autostart", set battery to "No restrictions"

### `Links`

- **[GitHub Repository](https://github.com/Andebugulin/nfcGuard)** - Source code
- **[Download APK](https://github.com/Andebugulin/nfcGuard/releases)** - Latest release

### `Contributors`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Loading...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/Andebugulin/nfcGuard/contributors';
    const response = await fetch(url);
    const contributors = await response.json();
    const contributorsHtml = contributors.map(c =>
      `<div style="margin: 10px; text-align: center;">
        <img src="${c.avatar_url}" alt="${c.login}" style="width: 80px; height: 80px; border-radius: 50%;">
        <p><a href="${c.html_url}" target="_blank">${c.login}</a></p>
      </div>`
    ).join('');
    document.getElementById('contributors-list').innerHTML = contributorsHtml;
  }
  fetchContributors();
</script>

---

MIT License | Built with ❤️ 
Claude AI assisted with development