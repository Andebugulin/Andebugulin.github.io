---
layout: page
title: HaHaSaaS
description: Vitsien jakamisen SaaS-alusta, joka tarjoaa huumoria pyynnöstä.
img: assets/img/hahasaas.svg
importance: 2
category: uni
---

## `HaHaSaaS` - Naurun tuominen pilveen

> HaHaSaaS on SaaS-alusta, joka on suunniteltu tarjoamaan vitsejä välittömästi, kategorisoituna ja arvosteltuna parhaimman koomisen kokemuksen takaamiseksi.

### `Ominaisuuksien kohokohdat`

HaHaSaaS on rakennettu `Golang`illa taustajärjestelmälle ja `React`illa käyttöliittymälle. Se mahdollistaa käyttäjille vitsien selaamisen, niiden arvostelun ja jopa omien lisäämisen, varmistaen loppumattoman huumorin tarjonnan.

### `Sivuasettelut`

#### Etusivu
<details>
<summary>Näytä etusivu</summary>
<div class="row justify-content-center">
<div class="col-md-5">
 {% include figure.liquid path="assets/img/joke_interface.png" title="Etusivu" class="img-fluid rounded z-depth-1" %}
</div>
</div>
</details>

#### Vitsien ohje
<details>
<summary>ohje</summary>
<div class="row justify-content-center">
<div class="col-sm-6">
 {% include figure.liquid path="assets/img/joke_help.png" title="Vitsien lähettäminen" class="img-fluid rounded z-depth-1" %}
</div>
</div>
</details>

### `Käyttöönotto Dockerilla`

HaHaSaaS:n käyttöönotto Dockerilla, suorita vain:

```sh
git clone https://github.com/andebugulin/hahasaas.git
cd hahasaas
docker-compose up -d
```

Tämä asettaa sekä tausta- että käyttöliittymäjärjestelmän yhdessä PostgreSQL-tietokannan kanssa saumattoman käyttöönoton takaamiseksi.

### `API-dokumentaatio (tulossa pian)`

HaHaSaaS integroi pian `DocBox`in API-dokumentaatiota varten, tehden kehittäjien helpommaksi tutustua ja hyödyntää käytettävissä olevia päätepisteitä.

### `Johtopäätös ja pohdinta`

HaHaSaaS:n kehittäminen on ollut hauska ja haastava kokemus. `Golang`in, `React`in ja `PostgreSQL`:n kanssa työskentely on antanut minun hioa taitojani full-stack-kehityksessä samalla luodessa jotain, joka levittää iloa.

Lisätietoja varten tutustu projektitietolähteeseen:

- **[HaHaSaaS GitHub Repository](https://github.com/Andebugulin/hahasaas)**

### `Contributors`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Loading contributors...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/Andebugulin/hahasaas/contributors';
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

