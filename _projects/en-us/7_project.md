---
layout: page
title: GaleriYah
description: An avant-garde photography portfolio.
img: assets/img/GaleriYah.png
importance: 1
category: fun 
---

## `GaleriYah` - Avant-Garde Photography Portfolio

> Experience photography through a new lens with GaleriYah, where avant-garde design meets seamless functionality. This Next.js 13-powered platform transforms the way we showcase and interact with visual art.

### `Technology Symphony`

Built with modern web technologies, GaleriYah orchestrates:
- `Next.js 13` for lightning-fast performance
- `Tailwind CSS` for stunning aesthetics
- `Framer Motion` for fluid animations
- `Supabase` for robust data management
- `TypeScript` for code reliability
- `Lucide React` for beautiful icons
- `Custom Geist font` integration

### `Visual Experience`

#### Dynamic Grid Layout

<details>
    <summary>Explore the Grid</summary>
    <div class="row justify-content-center">
        <div class="col-md-8">
            {% include figure.liquid path="assets/img/grid.jpg" title="Dynamic Grid Layout" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="caption">
        Responsive grid system with dynamic sizing and elegant hover effects
    </div>
</details>

#### Album Viewer

<details>
    <summary>Browse Albums</summary>
    <div class="row justify-content-center">
        <div class="col-md-8">
            {% include figure.liquid path="assets/img/albums.jpg" title="Album View" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="caption">
        Horizontal scrolling album view with intuitive mouse wheel navigation
    </div>
</details>

#### Photo Details

<details>
    <summary>View Photo Details</summary>
    <div class="row justify-content-center">
        <div class="col-md-8">
            {% include figure.liquid path="assets/img/photo.jpg" title="Photo Details" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="caption">
        Immersive photo viewing experience with metadata and descriptions
    </div>
</details>

### `Project Architecture`

```
app/
├── album/[id]/       # Dynamic album pages
├── albums/           # Albums overview
├── components/       # Reusable components
├── photo/[id]/       # Individual photo views
└── fonts/           # Custom font files
public/
└── assets/          # Static assets
scripts/
└── parse_pictures_from_flickr.py  # Data import utility
```

### `Standout Features`

#### Supreme-Inspired Navigation
One of GaleriYah's most distinctive features is its Supreme-inspired navigation system. The minimalist design combines with bold typography and smooth transitions to create an experience that's both functional and visually striking.

```javascript
const MenuButton = () => (
  <button className="bg-white text-black font-bold text-xl py-2 px-4 
    hover:bg-black hover:text-[#ED1C24] transition-colors duration-300">
    MENU
  </button>
);
```

#### Dynamic Photo Grid
The photo grid adapts to content, creating visual interest through varied sizes and positions:

```javascript
const getPhotoClassName = (index) => {
  const patterns = {
    large: "col-span-2 row-span-2",
    tall: "col-span-1 row-span-2",
    wide: "col-span-2 row-span-1",
    normal: "col-span-1 row-span-1"
  };
  // Dynamic pattern selection based on index
  return patterns[getPattern(index)];
};
```

#### Admin Panel & Content Management
Built-in admin interface at `/admin/photos` with Supabase authentication for secure photo and album management. Features one-click Flickr synchronization for seamless content import.

### `Database Design`

#### Supabase Schema
```sql
-- Photos table with UUID primary keys
create table photos (
    id uuid default uuid_generate_v4() primary key,
    url text not null,
    title text,
    category text,
    description text,
    date_taken date,
    created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Albums with relational structure
create table albums (
    id uuid default uuid_generate_v4() primary key,
    url text not null,
    title text,
    category text,
    description text,
    date_taken date,
    created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Junction table for album-photo relationships
create table album_photos (
    id uuid default uuid_generate_v4() primary key,
    album_id uuid references albums(id),
    photo_id uuid references photos(id),
    created_at timestamp with time zone default timezone('utc'::text, now())
);
```

### `Technical Highlights`

#### Smooth Scrolling Implementation
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

#### Flickr Integration Pipeline
Automated photo import system with Python scraper that:
- Extracts metadata from Flickr photostreams
- Generates UUID-compatible data structures
- Exports to CSV for Supabase import
- Includes rate limiting and error handling

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

### `Development Journey`

Creating GaleriYah has been an exciting exploration of modern web technologies and design principles. The project challenged me to:
- Implement complex grid layouts with dynamic sizing
- Create smooth, performant animations
- Design an intuitive yet avant-garde user interface
- Integrate seamless data management with Supabase
- Build automated content import pipelines
- Develop secure admin interfaces with authentication
- Optimize image loading and delivery

### `Design Philosophy`

GaleriYah embraces avant-garde design principles while maintaining usability:
- **Minimalist Aesthetics** - Less is more approach
- **Dynamic Interactions** - Fluid animations and transitions
- **Responsive Design** - Works across all device sizes
- **Visual Hierarchy** - Clear content organization

### `Future Enhancements`

The purpose of this design is to make it the most minimalistic there is, so every enhancement should follow this principal, in other words, less is more!

For a deeper dive into the code and implementation:
- **[GaleriYah GitHub Repository](https://github.com/andebugulin/galeriyah)**

### `Contributors`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Loading contributors...</div>

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