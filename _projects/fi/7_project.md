---
layout: page
title: GaleriYah
description: An avant-garde photography portfolio.
img: assets/img/GaleriYah.png
importance: 1
category: fun 
---

## `GaleriYah` - Avantgarde-valokuvausportfolio

> Koe valokuvaus uuden linssin läpi GaleriYahin kanssa, jossa avantgarde-suunnittelu kohtaa saumattoman toiminnallisuuden. Tämä Next.js 13 -pohjainen alusta muuttaa tapaa, jolla esittelemme ja olemme vuorovaikutuksessa visuaalisen taiteen kanssa.

### `Teknologiasinfonia`

Rakennettu modernilla web-teknologioilla, GaleriYah orkesteroi:
- `Next.js 13` salamannopean suorituskyvyn saavuttamiseksi
- `Tailwind CSS` upeiden esteettisten ratkaisujen luomiseksi
- `Framer Motion` sujuvien animaatioiden toteuttamiseksi
- `Supabase` vankan tiedonhallinnan varmistamiseksi
- `TypeScript` koodin luotettavuuden takaamiseksi
- `Lucide React` kauniiden ikonien käyttöön
- `Custom Geist font` integrointi

### `Visuaalinen kokemus`

#### Dynaaminen ruudukkojärjestely

<details>
    <summary>Tutustu ruudukkoon</summary>
    <div class="row justify-content-center">
        <div class="col-md-8">
            {% include figure.liquid path="assets/img/grid.jpg" title="Dynaaminen ruudukkojärjestely" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="caption">
        Responsiivinen ruudukkojärjestelmä dynaamisella kokojen muutoksella ja elegantilla hover-efekteillä
    </div>
</details>

#### Albumikatselin

<details>
    <summary>Selaa albumeita</summary>
    <div class="row justify-content-center">
        <div class="col-md-8">
            {% include figure.liquid path="assets/img/albums.jpg" title="Albuminäkymä" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="caption">
        Vaakasuunnassa vieritettävä albuminäkymä intuitiivisella hiiren rulla-navigoinnilla
    </div>
</details>

#### Valokuvan yksityiskohdat

<details>
    <summary>Näytä valokuvan tiedot</summary>
    <div class="row justify-content-center">
        <div class="col-md-8">
            {% include figure.liquid path="assets/img/photo.jpg" title="Valokuvan yksityiskohdat" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
    <div class="caption">
        Mukaansatempaava valokuvan katselukokemus metatiedoilla ja kuvauksilla
    </div>
</details>

### `Projektin arkkitehtuuri`

```
app/
├── album/[id]/       # Dynaamiset albumisivut
├── albums/           # Albumien yleiskatsaus
├── components/       # Uudelleenkäytettävät komponentit
├── photo/[id]/       # Yksittäisten kuvien näkymät
└── fonts/           # Mukautetut fonttitiedostot
public/
└── assets/          # Staattiset resurssit
scripts/
└── parse_pictures_from_flickr.py  # Tietojen tuonti-apuohjelma
```

### `Erottuvat ominaisuudet`

#### Supreme-inspiroidtu navigointi
Yksi GaleriYahin erottuvimmista ominaisuuksista on sen Supreme-inspiroidusta navigaatiojärjestelmä. Minimalistinen suunnittelu yhdistyy rohkeaan typografiaan ja sujuviin siirtymiin luoden kokemuksen, joka on sekä toiminnallinen että visuaalisesti vaikuttava.

```javascript
const MenuButton = () => (
  <button className="bg-white text-black font-bold text-xl py-2 px-4 
    hover:bg-black hover:text-[#ED1C24] transition-colors duration-300">
    VALIKKO
  </button>
);
```

#### Dynaaminen valokuvaruudukko
Valokuvaruudukko mukautuu sisältöön, luoden visuaalista mielenkiintoa vaihtelevien kokojen ja sijaintien kautta:

```javascript
const getPhotoClassName = (index) => {
  const patterns = {
    large: "col-span-2 row-span-2",
    tall: "col-span-1 row-span-2",
    wide: "col-span-2 row-span-1",
    normal: "col-span-1 row-span-1"
  };
  // Dynaaminen kuvioiden valinta indeksin perusteella
  return patterns[getPattern(index)];
};
```

#### Hallintapaneeli ja sisällönhallinta
Sisäänrakennettu hallintakäyttöliittymä osoitteessa `/admin/photos` Supabase-todennuksella turvalliseen valokuvien ja albumien hallintaan. Sisältää yhden napsautuksen Flickr-synkronoinnin saumattomaan sisällön tuontiin.

### `Tietokannan suunnittelu`

#### Supabase-rakenne
```sql
-- Valokuva-taulu UUID-pääavaimilla
create table photos (
    id uuid default uuid_generate_v4() primary key,
    url text not null,
    title text,
    category text,
    description text,
    date_taken date,
    created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Albumit relaatiorakenteella
create table albums (
    id uuid default uuid_generate_v4() primary key,
    url text not null,
    title text,
    category text,
    description text,
    date_taken date,
    created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Liitostaulu albumi-valokuva-suhteille
create table album_photos (
    id uuid default uuid_generate_v4() primary key,
    album_id uuid references albums(id),
    photo_id uuid references photos(id),
    created_at timestamp with time zone default timezone('utc'::text, now())
);
```

### `Tekniset kohokohdat`

#### Sujuvan vierityksen toteutus
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

#### Flickr-integraation putkilinja
Automaattinen valokuvien tuontijärjestelmä Python-kaapijalla, joka:
- Poimii metatiedot Flickr-valokuvavirroista
- Luo UUID-yhteensopivia tietorakenteita
- Vie CSV-muotoon Supabase-tuontia varten
- Sisältää nopeuden rajoittamisen ja virheenkäsittelyn

```python
def parse_photo_details(self, photo_data):
    return {
        'id': str(uuid.uuid4()),
        'url': photo_data['url'],
        'title': self._parse_title(soup),
        'category': 'oletus_kategoria',
        'description': self._parse_description(soup),
        'date_taken': self._parse_date(soup)
    }
```

### `Kehitysmatka`

GaleriYahin luominen on ollut jännittävä tutkimusmatka moderniin web-teknologioihin ja suunnitteluperiaatteisiin. Projekti haastoi minut:
- Toteuttamaan monimutkaisia ruudukkoasetteluja dynaamisella kokojensäädöllä
- Luomaan sujuvia, suorituskykyisiä animaatioita
- Suunnittelemaan intuitiivisen mutta avantgarde-käyttöliittymän
- Integroimaan saumatonta tiedonhallintaa Supabasen kanssa
- Rakentamaan automatisoituja sisällön tuontiputkilinjoja
- Kehittämään turvallisia hallintakäyttöliittymiä todennuksella
- Optimoimaan kuvien lataamista ja toimittamista

### `Suunnittelufilosofia`

GaleriYah omaksuu avantgarde-suunnitteluperiaatteet säilyttäen samalla käytettävyyden:
- **Minimalistiset esteettiset ratkaisut** - Vähemmän on enemmän -lähestymistapa
- **Dynaamiset vuorovaikutukset** - Sujuvia animaatioita ja siirtymiä
- **Responsiivinen suunnittelu** - Toimii kaikilla laittekoilla
- **Visuaalinen hierarkia** - Selkeä sisällön järjestely

### `Tulevat parannukset`

Tämän suunnittelun tarkoituksena on tehdä siitä mahdollisimman minimalistinen, joten jokaisen parannuksen tulisi noudattaa tätä periaatetta - toisin sanoen, vähemmän on enemmän!

Syvemmälle sukeltamiseen koodiin ja toteutukseen:
- **[GaleriYah GitHub-repositorio](https://github.com/andebugulin/galeriyah)**

### `Osallistujat`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Ladataan osallistujia...</div>

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