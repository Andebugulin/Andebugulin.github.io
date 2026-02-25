---
layout: page
title: Knowledge Tree
description: Минималистичная система управления знаниями на основе графов, вдохновлённая методологией Zettelkasten. Визуализируйте и связывайте мысли в интерактивной сети — полностью управляемой с клавиатуры.
img: assets/img/knowledge-tree.png
importance: 1
category: productivity
---

## `Knowledge Tree` Kn-🦉-⭕-🌳
Минималистичная система управления знаниями на основе графов, вдохновлённая методологией Zettelkasten. Навигация по всей сети знаний без отрыва от клавиатуры.

### `Идея`
Я хотел простой веб-инструмент, где можно управлять знаниями в виде графа — как в Zettelkasten, но без Obsidian с его бесконечными плагинами.

### `Обзор`
Knowledge Tree помогает строить персональную базу знаний через взаимосвязанные заметки. Каждая заметка становится узлом графа, а связи формируют осмысленные отношения между идеями и мыслями. Дашборд полностью управляется с помощью Vim-биндингов, с поддержкой тёмной и светлой тем, сохраняемых между сессиями.

### `Технологии`
- **Frontend**: Next.js 15, React, TypeScript, TailwindCSS
- **Визуализация**: Sigma.js с Graphology
- **Backend**: tRPC, Prisma ORM
- **База данных**: PostgreSQL
- **Аутентификация**: NextAuth.js

#### Тема оформления
Переключение между тёмной и светлой темой через кнопку в верхней панели. Настройка сохраняется в `localStorage`.

#### Vim-биндинги
Весь дашборд управляется с клавиатуры. Нажмите `?` в любой момент, чтобы открыть справку.

**Список узлов**
- `j` / `k` — перемещение вниз / вверх по списку
- `l` или `Enter` — открыть узел в редакторе
- `n` — создать новый узел
- `dd` — удалить узел (с подтверждением)
- `/` — поиск по названию или содержимомуf
- `g` или `Tab` — переключить вид графа

**Редактор — Normal Mode**
- `h` / `l` / `j` / `k` — перемещение курсора
- `w` / `b` / `e` — следующее / предыдущее / конец слова
- `0` / `$` / `^` — начало / конец / первый непробельный символ строки
- `gg` / `G` — начало / конец документа
- `i` / `a` / `A` / `o` / `O` — вход в Insert mode
- `dd` / `yy` / `p` / `P` — удалить / скопировать / вставить строку
- `dw` / `cw` / `cc` — удалить / заменить слово / строку
- `ci"` `ci(` `ci[` — замена содержимого пары символов
- `u` / `Ctrl+R` — отмена / повтор (история 50 шагов)
- `v` — Visual mode
- `Space` — открыть панель связей
- `q` — сохранить и вернуться к списку
- `Ctrl+S` — сохранить заметку

**Панель связей (`Space`)**
- `h` / `l` — переключение типа связи
- `j` / `k` — навигация по секциям
- `Enter` или `Space` — создать связь
- `d` — удалить связь
- `Esc` — закрыть панель

#### Связывание идей
- Выберите узел и нажмите `Space` для открытия панели связей
- Выберите тип отношения:
  - **Parent/Child** — иерархические связи (один родитель на узел, без циклов)
  - **Reference** — связанные концепции
  - **Example** — конкретные примеры
  - **Contradiction** — противоречивые идеи
- Перейдите к кандидату и нажмите `Enter` для создания связи

#### Wiki-ссылки
Введите `[[` в режиме Insert для автодополнения по названиям существующих узлов. Выбор предложения вставляет `[[Название узла]]` прямо в текст.

#### Навигация по графу
- **Клик** — выбрать узел и открыть в редакторе
- **Наведение** — предпросмотр содержимого узла
- **Перетаскивание** — перемещение по графу
- **Прокрутка** — масштабирование
- **Двойной клик** (пустое место) — создать узел в этой позиции

### `Схема базы данных`
**Node** — хранит отдельные единицы знаний, принадлежит пользователю, содержит заголовок и содержимое

**Edge** — соединяет два узла, типы: parent, reference, example, contradiction

**User** — аутентификация и владение, изолированные графы знаний для каждого пользователя

**[Репозиторий Knowledge Tree на GitHub](https://github.com/Andebugulin/kn-owl-edge-tree)**

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
### `Демо`
<div style="text-align: center; margin: 40px 0;">
<a href="https://kn-owl-edge-tree.vercel.app/" target="_blank" style="display: inline-block; padding: 15px 40px; background: linear-gradient(135deg, #5D0E41 0%, #A0153E 50%, #FF204E 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 18px; transition: transform 0.2s;">
    Открыть демо →
</a>
<p style="margin-top: 20px; color: #666; font-size: 14px;">
    Создайте аккаунт и постройте свою первую сеть знаний
</p>
</div>