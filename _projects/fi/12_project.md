---
layout: page
title: Knowledge Tree
description: Minimalistinen graafipohjainen tiedonhallintajärjestelmä Zettelkasten-metodologiasta inspiroituneena. Visualisoi ja yhdistä ajatuksesi interaktiivisessa verkostossa.
img: assets/img/knowledge-tree.png
importance: 1
category: productivity
---

## `Knowledge Tree` Kn-🦉-⭕-🌳

Minimalistinen graafipohjainen tiedonhallintajärjestelmä, joka on saanut inspiraationsa Zettelkasten-metodologiasta. Visualisoi ja yhdistä ajatuksesi interaktiivisessa verkostossa.

### `Idea`

Halusin yksinkertaisen UI/web-työkalun, jossa voin hallita tietoani graafina, samankaltaisesti kuin Zettelkasten, ilman Obsidiania miljoonine liitännäisine.

### `Yleiskatsaus`

Knowledge Tree auttaa sinua rakentamaan henkilökohtaisen tietopohjan toisiinsa linkitettyjen muistiinpanojen avulla. Jokainen muistiinpano muuttuu solmuksi tietograafissasi, jossa suhteet muodostavat merkityksellisiä yhteyksiä ideoiden ja ajatusten välille.

### `Teknologiapino`

- **Frontend**: Next.js 15, React, TypeScript, TailwindCSS
- **Visualisointi**: Sigma.js Graphologyn kanssa
- **Backend**: tRPC, Prisma ORM
- **Tietokanta**: PostgreSQL
- **Autentikointi**: NextAuth.js

### `Ominaisuudet`

#### Solmujen Luominen
- Klikkaa **New Node** yläpalkissa
- Syötä otsikko ja valinnainen sisältö
- Tukee perus markdown-muotoilua

#### Ideoiden Yhdistäminen
- Valitse solmu **Edit Mode** -tilaan
- Vaihda **Link Mode** -tilaan
- Valitse suhdetyyppi:
  - **Parent/Child** - Hierarkkiset yhteydet (yksi vanhempi per solmu)
  - **Reference** - Liittyvät käsitteet
  - **Example** - Konkreettiset esimerkit
  - **Contradiction** - Ristiriitaiset ideat
- Klikkaa toista solmua luodaksesi yhteyden

#### Navigointi
- **Click** - Valitse ja muokkaa solmuja
- **Hover** - Esikatsele solmun sisältö
- **Search** - Etsi solmuja otsikon tai sisällön perusteella
- **Drag** - Panoroi graafia
- **Scroll** - Zoomaa

### `Tietokantarakenne`

**Node** - Tallentaa yksittäisiä tietoyksiköitä, kuuluu käyttäjälle, sisältää otsikon ja sisällön

**Edge** - Yhdistää kaksi solmua, tyypit: parent, reference, example, contradiction

**User** - Autentikointi ja omistajuus, eristetyt tietograafit per käyttäjä

**[Knowledge Tree GitHub-repositorio](https://github.com/Andebugulin/kn-owl-edge-tree)**

### `Osallistujat`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Ladataan osallistujia...</div>

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
    Kokeile Live Demoa →
  </a>
  <p style="margin-top: 20px; color: #666; font-size: 14px;">
    Luo tili ja rakenna ensimmäinen tietoverkostosi
  </p>
</div>