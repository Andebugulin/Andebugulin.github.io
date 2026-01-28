---
layout: page
title: Wordor
description: Boosted translator with spaced repetition algorithm to help you learn translations instantly.
img: assets/img/wordor.png
importance: 2
category: productivity 
---

## `Wordor` - Smart Translator with Built-in Learning

> Wordor combines translation with spaced repetition learning. Discover interesting words, save them instantly, and learn through an intelligent review system powered by AI hints.

### `Core Idea`

As a language learner, I often encounter fascinating words during translation that I want to remember. However, transferring them to a separate learning tool like Anki felt cumbersome, so I'd forget them. Wordor solves this by integrating translation and vocabulary learning into one seamless experience. Translate a word, save it with one tap, and let the spaced repetition algorithm handle your learning schedule.

### `Technical Implementation`

Built with `Flutter` for cross-platform Android support. Uses `Riverpod` for state management and `Drift` ORM with `SQLite` for local data persistence. Translation powered by `DeepL API`, with optional `Gemini AI` for intelligent hint generation. Background scheduling via `Android Alarm Manager` with local notification system.

### `App Interface`

#### Translation Screen

<details>
    <summary>View Translation Interface</summary>
    <div class="row justify-content-center">
        <div class="col-md-5">
            {% include figure.liquid path="assets/img/wordor_translate.png" title="Translation Screen" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Review System

<details>
    <summary>Check Out Review Flow</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/wordor_review.png" title="Review System" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Settings

<details>
    <summary>Explore Settings</summary>
    <div class="row justify-content-center">
        <div class="col-sm-6">
            {% include figure.liquid path="assets/img/wordor_settings.png" title="Word Settings" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `How It Works`

Type or speak your word using voice input. Select source and target languages from your recently used pairs. Get instant translation from DeepL and save words worth remembering with one tap. Review due words through spaced repetition intervals that adapt to your performance.

Use the progressive hint system when needed: AI-generated example sentence in source language, meaning explanation in target language, first letter hint, or full reveal. Mark responses as "I Know," "Hint Helped," or "Forgot" to adjust future intervals. Words automatically schedule for optimal retention.

### `Spaced Repetition Algorithm`

Initial interval of 1 day. Success multiplies interval by 2.5x, partial success by 1.5x, and failure resets to 1 day. Maximum interval caps at approximately 100 days. The algorithm balances retention with review efficiency.

For more details and source code:

- **[Wordor GitHub Repository](https://github.com/Andebugulin/wordor)**
- **[Download APK](https://github.com/Andebugulin/wordor/releases)** - Android 7.0+

### `Contributors`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Loading contributors...</div>

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