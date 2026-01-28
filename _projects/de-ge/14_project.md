---
layout: page
title: Guardian
description: Android-App für fokussierte Produktivität durch NFC-gesteuerte App-Sperrung.
img: assets/img/guardian.png
importance: 2
category: productivity
lang: de
---

## `Guardian` - NFC-Basierter App-Blocker

> Physische Fokus-Sperre für Android. Blockiere ablenkende Apps, entsperre nur mit NFC-Tap.

### `Kernkonzept`

Sperrmodus erstellen → Apps zum Sperren/Erlauben wählen → Optionale Zeitpläne setzen → Optionales NFC-Tag verknüpfen → Modus aktivieren → Fokussiert bleiben. Keine Software-Umgehung - erfordert physische NFC-Interaktion zum Entsperren.

### `Technischer Stack`

Entwickelt mit `Kotlin` und `Jetpack Compose`. Nutzt `Kotlin Coroutines` für asynchrone Operationen, `Kotlinx Serialization` für Zustandspersistenz und `AlarmManager` für präzise Zeitplanung. Vordergrund-Service gewährleistet Zuverlässigkeit über Neustarts und Task-Entfernung hinweg.

### `Funktionen`

**Sperrmodi**
- Ausgewählte Sperren: Beschränkt Zugriff auf gewählte Apps
- Nur Erlauben: Sperrt alles außer gewählten Apps
- Optionale NFC-Tag-Anforderung pro Modus

**Zeitplanung**
- Tagesspezifische Zeitkonfiguration mit individuellen Start-/Endzeiten
- Mehrfach-Modus-Verknüpfung
- Optionale automatische Deaktivierung

**NFC-Integration**
- Tags für modusspezifisches Entsperren registrieren
- Jedes NFC-Gerät funktioniert ohne spezifisches Tag
- Smartwatch, Kopfhörer und andere Tags unterstützt

### `Screenshots`

<details>
    <summary>App-Oberfläche</summary>
    <div class="row">
        <div class="col-sm-6 mt-3">
            {% include figure.liquid path="assets/img/guardian_home.png" title="Start" class="img-fluid rounded z-depth-1" %}
        </div>
        <div class="col-sm-6 mt-3">
            {% include figure.liquid path="assets/img/guardian_modes.png" title="Modi" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6 mt-3">
            {% include figure.liquid path="assets/img/guardian_schedules.png" title="Zeitpläne" class="img-fluid rounded z-depth-1" %}
        </div>
        <div class="col-sm-6 mt-3">
            {% include figure.liquid path="assets/img/guardian_nfc.png" title="NFC-Tags" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Anforderungen`

- Android 6.0+ (API 23)
- NFC-Hardware
- Berechtigungen: Nutzungszugriff, Über Apps anzeigen, Batterieoptimierungs-Ausnahme

**MIUI/Custom ROM Nutzer**: "App-Aktivität bei Nichtnutzung pausieren" deaktivieren, "Autostart" aktivieren, Batterie auf "Keine Einschränkungen" setzen

### `Links`

- **[GitHub Repository](https://github.com/Andebugulin/nfcGuard)** - Quellcode
- **[APK herunterladen](https://github.com/Andebugulin/nfcGuard/releases)** - Neueste Version

### `Mitwirkende`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Lädt...</div>

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

MIT-Lizenz | Mit ❤️ entwickelt  
Claude AI half bei der Entwicklung