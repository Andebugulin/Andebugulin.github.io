---
layout: page
title: Robanization
description: Сложная 2D платформер-игра с процедурной генерацией уровней и динамическими препятствиями.
img: assets/img/robanization.svg
importance: 1
category: fun 
---

## `Robanization`

> Сложный 2D платформер, который сочетает процедурную генерацию уровней с непростой игровой механикой, создавая уникальный опыт при каждом запуске.

### `Основные возможности`

Созданная на `Python` с использованием `Pygame`, эта игра демонстрирует продвинутые концепции разработки игр. В игре есть процедурно генерируемые уровни, динамические препятствия и адаптивная камера, следящая за движением игрока.

### `Виды интерфейсов`

#### Меню игры

<details>
    <summary>Посмотреть интерфейс меню игры</summary>
    <div class="row justify-content-center">
        <div class="col-md-8">
            {% include figure.liquid path="assets/img/game_menu_interface.jpg" title="Game Interface" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Игровой интерфейс

<details>
    <summary>Посмотреть игровой интерфейс</summary>
    <div class="row justify-content-center">
        <div class="col-md-8">
            {% include figure.liquid path="assets/img/game_interface.jpg" title="Game Interface" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Технический разбор`

#### Основные игровые системы
- Собственный физический движок с имитацией гравитации  
- Процедурная генерация уровней из текстовых шаблонов  
- Динамическая система камеры  
- Точное обнаружение столкновений (pixel-perfect)  
- Управление состояниями игры (Меню, Игра, Game Over)  
- Система отслеживания очков  

#### Игровая механика
- Плавное управление персонажем  
- Опасности окружения (вода, торнадо)  
- Система телепортации для перехода между уровнями  
- Множество анимационных состояний персонажей  
- Система наград и монет  

### `Основные классы`

```python
class LEVEL:
    # Управление основными уровнями игры
    # Отвечает за генерацию мира, обработку столкновений и движение камеры

class Player:
    # Управление персонажем игрока
    # Отвечает за движение, физику и анимации

class Tornado/Water:
    # Динамические препятствия
    # Имеют случайные шаблоны движения и обработку столкновений

class Teleport:
    # Система прогрессии уровня
    # Отвечает за переходы между уровнями и обновление очков
````

### `Подробности реализации`

#### Генерация уровней

Игра использует уникальную систему генерации уровней, комбинируя заранее разработанные сегменты:

```python
def level_loading():
    # Загружает случайные сегменты уровней
    # Комбинирует их для создания уникальной компоновки
    # Обеспечивает возможность прохождения и корректное спавн-место игрока
```

#### Физическая система

```python
def apply_gravity(self):
    # Симулирует реалистичную гравитацию
    # Обрабатывает вертикальное движение
    # Управляет механикой прыжков
```

#### Система камеры

```python
def camera(self):
    # Отслеживает движение игрока
    # Обеспечивает плавную прокрутку
    # Управляет границами уровня
```

* **[Репозиторий игры на GitHub](https://github.com/andebugulin/my_game)**

### `Участники`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Загрузка участников...</div>

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