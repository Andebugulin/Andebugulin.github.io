---
layout: page
title: GaleriYah
description: Авангардное портфолио фотографий.
img: assets/img/GaleriYah.png
importance: 1
category: fun 
---

## `GaleriYah` - Авангардное портфолио фотографий

> Испытай фотографию через новую призму с GaleriYah, где авангардный дизайн встречается с безупречной функциональностью. Эта платформа на базе Next.js 13 меняет способ демонстрации и взаимодействия с визуальным искусством.

### `Технологический симфониум`

Построенный на современных веб-технологиях, GaleriYah сочетает:
- `Next.js 13` для молниеносной производительности
- `Tailwind CSS` для выразительной эстетики
- `Framer Motion` для плавных анимаций
- `Supabase` для надежного управления данными
- `TypeScript` для стабильности кода
- `Lucide React` для красивых иконок
- Интеграция `Custom Geist font`

### `Визуальный опыт`

#### Динамическая сетка

<details>
    <summary>Исследовать сетку</summary>
    <div class="row justify-content-center">
        <div class="col-md-8">
            {% include figure.liquid path="assets/img/grid.jpg" title="Dynamic Grid Layout" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="caption">
        Адаптивная сетка с динамическим размером и элегантными hover-эффектами
    </div>
</details>

#### Просмотр альбомов

<details>
    <summary>Просмотреть альбомы</summary>
    <div class="row justify-content-center">
        <div class="col-md-8">
            {% include figure.liquid path="assets/img/albums.jpg" title="Album View" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="caption">
        Горизонтальный скролл альбомов с интуитивной навигацией колесом мыши
    </div>
</details>

#### Детали фото

<details>
    <summary>Посмотреть детали фото</summary>
    <div class="row justify-content-center">
        <div class="col-md-8">
            {% include figure.liquid path="assets/img/photo.jpg" title="Photo Details" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="caption">
        Иммерсивный просмотр фотографий с метаданными и описанием
    </div>
</details>

### `Архитектура проекта`

```

app/
├── album/\[id]/       # Динамические страницы альбомов
├── albums/           # Обзор альбомов
├── components/       # Переиспользуемые компоненты
├── photo/\[id]/       # Просмотр отдельных фото
└── fonts/            # Кастомные шрифты
public/
└── assets/           # Статические ресурсы
scripts/
└── parse\_pictures\_from\_flickr.py  # Утилита для импорта данных

````

### `Выдающиеся фичи`

#### Навигация в стиле Supreme  
Одна из самых заметных особенностей GaleriYah — навигация, вдохновленная Supreme. Минималистичный дизайн в сочетании с жирной типографикой и плавными переходами создаёт опыт, который одновременно функционален и визуально выделяется.  

```javascript
const MenuButton = () => (
  <button className="bg-white text-black font-bold text-xl py-2 px-4 
    hover:bg-black hover:text-[#ED1C24] transition-colors duration-300">
    MENU
  </button>
);
````

#### Динамическая фотосетка

Сетка фотографий адаптируется к контенту, создавая визуальный интерес за счет вариативных размеров и позиций:

```javascript
const getPhotoClassName = (index) => {
  const patterns = {
    large: "col-span-2 row-span-2",
    tall: "col-span-1 row-span-2",
    wide: "col-span-2 row-span-1",
    normal: "col-span-1 row-span-1"
  };
  // Динамический выбор паттерна по индексу
  return patterns[getPattern(index)];
};
```

#### Админ-панель и управление контентом

Встроенный интерфейс администратора на `/admin/photos` с аутентификацией через Supabase для безопасного управления фотографиями и альбомами. Поддерживает синхронизацию с Flickr в один клик для легкого импорта контента.

### `Дизайн базы данных`

#### Схема Supabase

```sql
-- Таблица фотографий с UUID как первичными ключами
create table photos (
    id uuid default uuid_generate_v4() primary key,
    url text not null,
    title text,
    category text,
    description text,
    date_taken date,
    created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Таблица альбомов с реляционной структурой
create table albums (
    id uuid default uuid_generate_v4() primary key,
    url text not null,
    title text,
    category text,
    description text,
    date_taken date,
    created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Связующая таблица альбомов и фото
create table album_photos (
    id uuid default uuid_generate_v4() primary key,
    album_id uuid references albums(id),
    photo_id uuid references photos(id),
    created_at timestamp with time zone default timezone('utc'::text, now())
);
```

### `Технические акценты`

#### Реализация плавного скролла

```javascript
useEffect(() => {
  const container = scrollContainerRef.current;
  const handleWheel = (e) => {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
  };
  container?.addEventListener("wheel", handleWheel, { passive: false });
  return () => container?.removeEventListener("wheel", handleWheel);
}, []);
```

#### Конвейер интеграции с Flickr

Автоматизированная система импорта фотографий с помощью Python-скрейпера:

* Извлекает метаданные из фотопотоков Flickr
* Генерирует структуры данных, совместимые с UUID
* Экспортирует в CSV для импорта в Supabase
* Включает лимитирование запросов и обработку ошибок

```python
def parse_photo_details(self, photo_data):
    return {
        'id': str(uuid.uuid4()),
        'url': photo_data['url'],
        'title': self._parse_title(soup),
        'category': 'your_default_category',
        'description': self._parse_description(soup),
        'date_taken': self._parse_date(soup)
    }
```

### `Путь разработки`

Создание GaleriYah стало захватывающим исследованием современных веб-технологий и принципов дизайна. В проекте я:

* Реализовал сложные сетки с динамическими размерами
* Сделал плавные и производительные анимации
* Создал интуитивный, но авангардный интерфейс
* Интегрировал Supabase для управления данными
* Построил автоматизированный pipeline импорта контента
* Разработал безопасный админ-интерфейс с аутентификацией
* Оптимизировал загрузку и доставку изображений

### `Философия дизайна`

GaleriYah сочетает авангардный подход с юзабилити:

* **Минимализм** — принцип «меньше значит больше»
* **Динамика** — плавные анимации и переходы
* **Адаптивность** — работа на всех устройствах
* **Визуальная иерархия** — чёткая организация контента

### `Будущие улучшения`

Главная цель дизайна — сделать его максимально минималистичным, поэтому каждое улучшение должно следовать этому принципу: меньше — значит больше.

Чтобы глубже изучить код и реализацию:

* **[GaleriYah GitHub Repository](https://github.com/andebugulin/galeriyah)**

### `Участники`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Загрузка участников...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/andebugulin/galeriyah/contributors';
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
