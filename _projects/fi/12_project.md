---
layout: page
title: Knowledge Tree
description: Minimalistinen graafipohjainen tiedonhallintajärjestelmä Zettelkasten-metodologiasta inspiroituneena. Visualisoi ja yhdistä ajatuksesi interaktiivisessa verkostossa – täysin näppäimistöllä ohjattuna.
img: assets/img/knowledge-tree.png
importance: 1
category: productivity
---

## `Knowledge Tree` Kn-🦉-⭕-🌳
Minimalistinen graafipohjainen tiedonhallintajärjestelmä Zettelkasten-metodologiasta inspiroituneena. Navigoi koko tietoverkkosi läpi ilman, että irrotat kädet näppäimistöltä.

### `Idea`
Halusin yksinkertaisen verkkotyökalun, jolla voin hallita tietoa graafina – samaan tapaan kuin Zettelkasten, mutta ilman Obsidiania ja sen loputtomia lisäosia.

### `Yleiskatsaus`
Knowledge Tree auttaa rakentamaan henkilökohtaisen tietopohjan toisiinsa kytkettyjen muistiinpanojen avulla. Jokainen muistiinpano muuttuu solmuksi tietograafissa, ja yhteydet muodostavat merkityksellisiä suhteita ideoiden ja ajatusten välille. Kojelauta on täysin ohjattavissa Vim-näppäinbindeillä, ja dark/light-teematuki tallennetaan istuntojen välille.

### `Teknologiat`
- **Frontend**: Next.js 15, React, TypeScript, TailwindCSS
- **Visualisointi**: Sigma.js ja Graphology
- **Backend**: tRPC, Prisma ORM
- **Tietokanta**: PostgreSQL
- **Todennus**: NextAuth.js

#### Teema
Vaihda tumman ja vaalean tilan välillä yläpalkin teemapainikkeesta. Asetus tallennetaan `localStorage`-muistiin.

#### Vim-näppäinbindit
Koko kojelauta on näppäimistöohjattu. Paina `?` milloin tahansa avataksesi sovelluskohtaisen ohjeen.

**Solmulista**
- `j` / `k` — siirry listalla alas / ylös
- `l` tai `Enter` — avaa solmu editorissa
- `n` — luo uusi solmu
- `dd` — poista solmu (vahvistuksella)
- `/` — hae otsikon tai sisällön perusteella
- `g` tai `Tab` — vaihda graafnäkymä

**Editori — Normal Mode**
- `h` / `l` / `j` / `k` — liikuta kursoria
- `w` / `b` / `e` — seuraava / edellinen / sanan loppu
- `0` / `$` / `^` — rivin alku / loppu / ensimmäinen merkki
- `gg` / `G` — dokumentin alku / loppu
- `i` / `a` / `A` / `o` / `O` — siirry Insert-tilaan
- `dd` / `yy` / `p` / `P` — poista / kopioi / liitä rivi
- `dw` / `cw` / `cc` — poista / vaihda sana / rivi
- `ci"` `ci(` `ci[` — vaihda merkkirajauksen sisältö
- `u` / `Ctrl+R` — kumoa / tee uudelleen (50 askelta)
- `v` — Visual-tila
- `Space` — avaa linkityspaneeli
- `q` — tallenna ja palaa listaan
- `Ctrl+S` — tallenna muistiinpano

**Linkityspaneeli (`Space`)**
- `h` / `l` — vaihda linkkityyppiä
- `j` / `k` — navigoi osioiden välillä
- `Enter` tai `Space` — luo linkki
- `d` — poista yhteys
- `Esc` — sulje paneeli

#### Ideoiden yhdistäminen
- Valitse solmu ja paina `Space` avataksesi linkityspaneelin
- Valitse yhteystyyppi:
  - **Parent/Child** — hierarkkiset yhteydet (yksi vanhempi per solmu, ei silmukoita)
  - **Reference** — toisiinsa liittyvät käsitteet
  - **Example** — konkreettiset esimerkit
  - **Contradiction** — ristiriitaiset ideat
- Navigoi ehdokkaaseen ja paina `Enter` luodaksesi linkin

#### Wiki-linkit
Kirjoita `[[` Insert-tilassa käynnistääksesi olemassa olevien solmujen nimien automaattitäydennyksen. Ehdotuksen valitseminen lisää `[[Solmun nimi]]` suoraan tekstiin.

#### Graafinavigointi
- **Klikkaus** — valitse solmu ja avaa editorissa
- **Hover** — esikatsele solmun sisältöä
- **Raahaus** — panoroi graafilla
- **Vieritys** — zoomaus
- **Kaksoisklikkaus** (tyhjä alue) — luo solmu kyseiseen kohtaan

### `Tietokantarakenne`
**Node** — Tallentaa yksittäiset tietoyksiköt, kuuluu käyttäjälle, sisältää otsikon ja sisällön

**Edge** — Yhdistää kaksi solmua, tyypit: parent, reference, example, contradiction

**User** — Todennus ja omistajuus, eristetyt tietograafit käyttäjäkohtaisesti

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
### `Live-demo`
<div style="text-align: center; margin: 40px 0;">
<a href="https://kn-owl-edge-tree.vercel.app/" target="_blank" style="display: inline-block; padding: 15px 40px; background: linear-gradient(135deg, #5D0E41 0%, #A0153E 50%, #FF204E 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 18px; transition: transform 0.2s;">
    Avaa live-demo →
</a>
<p style="margin-top: 20px; color: #666; font-size: 14px;">
    Luo tili ja rakenna ensimmäinen tietoverkkosi
</p>
</div>