---
layout: page
title: Ankara
description: An interactive tool utilizing spaced repetition and randomization for effective vocabulary learning.
img: assets/img/ankara.png
importance: 1
category: productivity 
---

## `Ankara` - Enhance Your Vocabulary Efficiently

> The Vocabulary Learning Tool, Ankara, is designed to make vocabulary acquisition engaging and effective using principles of spaced repetition and randomization.

### `Feature Highlights`

Ankara is developed with `Python` and incorporates the `pygame` library to create an interactive learning environment. It leverages spaced repetition and randomization to help users learn and retain new words more effectively.

### `Key Bindings`

The application supports Vim-like key bindings for an intuitive and efficient learning experience:

- `n` - Next word
- `p` - Previous word
- `h` - Mark word as "don't remember"
- `j` - Mark word as "hard"
- `k` - Mark word as "normal"
- `l` - Mark word as "nice"
- `i` - Mark word as "very impressive"
- `0` - Skip 10 words forward
- `f` - Show word
- `d` - Show meaning
- `s` - Show example
- `a` - Play pronunciation

### `Optimized Hand Placement`

For the best user experience, we recommend positioning your hands as follows:

- **Right Hand**: Place your index finger on `h`, middle finger on `j`, ring finger on `k`, and pinky on `l`. This positioning allows easy access to the evaluation keys.
- **Left Hand**: Place your index finger on `f`, middle finger on `d`, ring finger on `s`, and pinky on `a`. This positioning allows easy access to the word interaction keys.

This hand placement mimics the efficient navigation of Vim, allowing for quick and comfortable interaction with the application.

### `Page Layouts`

#### Instructions view 

<details>
    <summary>Instructions</summary>
    <div class="row justify-content-center">
        <div class="col-md-8">
            {% include figure.liquid path="assets/img/instructions.jpg" title="Instructions" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Main Interface view 

<details>
    <summary>Main Interface</summary>
    <div class="row justify-content-center">
        <div class="col-sm-10">
            {% include figure.liquid path="assets/img/main_interface.jpg" title="Main Interface" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Conclusion and Reflection`

Developing the Vocabulary Learning Tool, Ankara, has been an enriching journey. It allowed me to explore the intersection of language learning and technology, enhancing my skills in Python development and user interface design. This tool not only aids in vocabulary acquisition but also makes the learning process enjoyable and efficient.

For further insights and a detailed breakdown of the project, check out the project documentation:

- **[Vocabulary Learning Tool GitHub Repository](https://github.com/Andebugulin/ankara)**

### `Fancy Feature: Spaced Repetition and Randomization`

One of the key features of Ankara is its use of spaced repetition and randomization to optimize learning. These techniques ensure that users engage with vocabulary words in a meaningful way, promoting better retention and understanding.

### `Contributors`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Loading contributors...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/Andebugulin/ankara/contributors';
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

