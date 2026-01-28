---
layout: page
title: Wordor
description: Erweiterter Übersetzer mit Spaced-Repetition-Algorithmus, um Übersetzungen sofort zu lernen.
img: assets/img/wordor.png
importance: 2
category: productivity 
---

## `Wordor` - Intelligenter Übersetzer mit integriertem Lernsystem

> Wordor kombiniert Übersetzung mit Spaced-Repetition-Lernen. Entdecke interessante Wörter, speichere sie sofort und lerne durch ein intelligentes Wiederholungssystem mit KI-Hinweisen.

### `Grundidee`

Als Sprachenlerner stoße ich oft beim Übersetzen auf faszinierende Wörter, die ich mir merken möchte. Das Übertragen in ein separates Lerntool wie Anki fühlte sich jedoch umständlich an, sodass ich sie vergaß. Wordor löst dies, indem es Übersetzung und Vokabellernen in einer nahtlosen Erfahrung vereint. Übersetze ein Wort, speichere es mit einem Fingertipp, und lass den Spaced-Repetition-Algorithmus deinen Lernplan übernehmen.

### `Technische Umsetzung`

Entwickelt mit `Flutter` für plattformübergreifende Android-Unterstützung. Verwendet `Riverpod` für State-Management und `Drift` ORM mit `SQLite` für lokale Datenpersistenz. Übersetzung durch `DeepL API`, mit optionaler `Gemini AI` für intelligente Hinweise. Hintergrundplanung über `Android Alarm Manager` mit lokalem Benachrichtigungssystem.

### `App-Oberfläche`

#### Übersetzungsbildschirm

<details>
    <summary>Übersetzungsoberfläche ansehen</summary>
    <div class="row justify-content-center">
        <div class="col-md-5">
            {% include figure.liquid path="assets/img/wordor_translate.png" title="Übersetzungsbildschirm" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Wiederholungssystem

<details>
    <summary>Wiederholungsablauf ansehen</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/wordor_review.png" title="Wiederholungssystem" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>


### `Funktionsweise`

Tippe dein Wort ein oder nutze die Spracheingabe. Wähle Ausgangs- und Zielsprache aus deinen zuletzt verwendeten Paaren. Erhalte sofortige Übersetzung von DeepL und speichere merkenswerte Wörter mit einem Fingertipp. Wiederhole fällige Wörter durch Spaced-Repetition-Intervalle, die sich an deine Leistung anpassen.

Nutze das progressive Hinweissystem bei Bedarf: KI-generierter Beispielsatz in der Ausgangssprache, Bedeutungserklärung in der Zielsprache, Anfangsbuchstaben-Hinweis oder vollständige Enthüllung. Markiere Antworten als „Ich weiß", „Hinweis half" oder „Vergessen", um zukünftige Intervalle anzupassen. Wörter planen sich automatisch für optimale Behaltung.

### `Hauptfunktionen`

Spracheingabe mit Spracherkennung. Intelligente DeepL-Übersetzung mit Sprachpaar-Speicher. Vierstufiges KI-Hinweissystem mit Beispielsätzen und Erklärungen. Spaced-Repetition-Algorithmus mit adaptiven Intervallen (1 Tag bis ~100 Tage). Badge-Benachrichtigungen mit Anzahl fälliger Wörter. Übersetzungshistorie mit Speicherstatus-Tracking. Offline-First-Architektur mit lokalem SQLite-Speicher.

### `Spaced-Repetition-Algorithmus`

Anfangsintervall von 1 Tag. Erfolg multipliziert Intervall mit 2,5x, Teilerfolg mit 1,5x, Fehlschlag setzt auf 1 Tag zurück. Maximales Intervall begrenzt auf etwa 100 Tage. Der Algorithmus balanciert Behaltung mit Wiederholungseffizienz.

### `Reflexion`

Die Entwicklung von Wordor lehrte mich über die Integration externer APIs mit lokaler Datenpersistenz und die Implementierung von Spaced-Repetition-Algorithmen. Die Herausforderung war, ein Hinweissystem zu schaffen, das echtes Lernen unterstützt, ohne Wiederholungen zu einfach zu machen. Hintergrundaufgaben-Planung und Benachrichtigungsverwaltung erforderten sorgfältiges Testen für Zuverlässigkeit über verschiedene Android-Versionen.

Für weitere Details und Quellcode:

- **[Wordor GitHub Repository](https://github.com/Andebugulin/wordor)**
- **[APK herunterladen](https://github.com/Andebugulin/wordor/releases)** - Android 7.0+

### `Mitwirkende`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Mitwirkende werden geladen...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/Andebugulin/wordor/contributors';
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