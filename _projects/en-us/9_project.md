---
layout: page
title: Robanization
description: A challenging 2D platformer game with procedural level generation and dynamic obstacles.
img: assets/img/robanization.svg
importance: 1
category: fun 
---

## `Robanization`

> A sophisticated 2D platformer that combines procedural level generation with challenging gameplay mechanics, creating a unique experience every time you play.

### `Feature Highlights`

Built with `Python` and `Pygame`, this platformer showcases advanced game development concepts. The game features procedurally generated levels, dynamic obstacles, and a responsive camera system that follows the player's movement.

### `Interface Views`

#### Game Menu Interface

<details>
    <summary>View the Game Menu Interface</summary>
    <div class="row justify-content-center">
        <div class="col-md-8">
            {% include figure.liquid path="assets/img/game_menu_interface.jpg" title="Game Interface" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Game Interface

<details>
    <summary>View the Game Interface</summary>
    <div class="row justify-content-center">
        <div class="col-md-8">
            {% include figure.liquid path="assets/img/game_interface.jpg" title="Game Interface" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Technical Deep Dive`

#### Core Game Systems
- Custom physics engine with gravity simulation
- Procedural level generation from text templates
- Dynamic camera system
- Pixel-perfect collision detection
- State management (Menu, Game, Game Over)
- Score tracking system

#### Game Mechanics
- Smooth player movement and controls
- Environmental hazards (water, tornados)
- Teleportation system for level progression
- Multiple character animation states
- Monetary reward system

### `Key Classes`

```python
class LEVEL:
    # Main game level management
    # Handles world generation, collision detection, and camera movement

class Player:
    # Player character controls
    # Manages movement, physics, and animations

class Tornado/Water:
    # Dynamic obstacles
    # Features randomized movement patterns and collision detection

class Teleport:
    # Level progression system
    # Handles level transitions and score updates
```

### `Implementation Details`

#### Level Generation
The game uses a unique level generation system that combines pre-designed segments:
```python
def level_loading():
    # Loads random level segments
    # Combines them to create unique layouts
    # Ensures playability and proper player spawning
```

#### Physics System
```python
def apply_gravity(self):
    # Simulates realistic gravity
    # Handles vertical movement
    # Manages jump mechanics
```

#### Camera System
```python
def camera(self):
    # Tracks player movement
    # Provides smooth scrolling
    # Manages level boundaries
```

- **[Game GitHub Repository](https://github.com/andebugulin/my_game)**


### `Contributors`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Loading contributors...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/andebugulin/my_game/contributors';
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
