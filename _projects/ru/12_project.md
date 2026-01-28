---
layout: page
title: Knowledge Tree
description: Минималистичная система управления знаниями на основе графов, вдохновленная методологией Zettelkasten. Визуализируй и соединяй свои мысли в интерактивной сети.
img: assets/img/knowledge-tree.png
importance: 1
category: productivity
---

## `Knowledge Tree` Kn-🦉-⭕-🌳

Минималистичная система управления знаниями на основе графов, вдохновленная методологией Zettelkasten. Визуализируй и соединяй свои мысли в интерактивной сети.

### `Идея`

Я хотел простой UI/веб-инструмент, где я мог бы управлять своими знаниями в виде графа, похожего на Zettelkasten, без использования Obsidian с миллионами плагинов.

### `Обзор`

Knowledge Tree помогает создавать личную базу знаний через взаимосвязанные заметки. Каждая заметка становится узлом в графе знаний, где связи формируют осмысленные соединения между идеями и мыслями.

### `Технологический Стек`

- **Frontend**: Next.js 15, React, TypeScript, TailwindCSS
- **Визуализация**: Sigma.js с Graphology
- **Backend**: tRPC, Prisma ORM
- **База данных**: PostgreSQL
- **Аутентификация**: NextAuth.js

### `Функции`

#### Создание Узлов
- Нажми **New Node** в верхней панели
- Введи заголовок и опциональное содержание
- Поддерживает базовое форматирование markdown

#### Связывание Идей
- Выбери узел для **Edit Mode**
- Переключись на **Link Mode**
- Выбери тип связи:
  - **Parent/Child** - Иерархические связи (один родитель на узел)
  - **Reference** - Связанные концепции
  - **Example** - Конкретные примеры
  - **Contradiction** - Противоречивые идеи
- Кликни на другой узел для создания связи

#### Навигация
- **Click** - Выбрать и редактировать узлы
- **Hover** - Просмотр содержимого узла
- **Search** - Поиск узлов по заголовку или содержимому
- **Drag** - Перемещение по графу
- **Scroll** - Масштабирование

### `Схема Базы Данных`

**Node** - Хранит отдельные единицы знаний, принадлежит пользователю, содержит заголовок и содержание

**Edge** - Соединяет два узла, типы: parent, reference, example, contradiction

**User** - Аутентификация и владение, изолированные графы знаний на пользователя

**[Knowledge Tree GitHub Репозиторий](https://github.com/Andebugulin/kn-owl-edge-tree)**

### `Участники`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Загрузка участников...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/Andebugulin/kn-owl-edge-tree/contributors';
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

---

### `Live Demo`

<div style="text-align: center; margin: 40px 0;">
  <a href="https://kn-owl-edge-tree.vercel.app/" target="_blank" style="display: inline-block; padding: 15px 40px; background: linear-gradient(135deg, #5D0E41 0%, #A0153E 50%, #FF204E 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 18px; transition: transform 0.2s;">
    Попробовать Live Demo →
  </a>
  <p style="margin-top: 20px; color: #666; font-size: 14px;">
    Создайте аккаунт и постройте свою первую сеть знаний
  </p>
</div>