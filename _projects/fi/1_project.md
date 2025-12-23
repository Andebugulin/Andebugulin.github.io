---
layout: page
title: TATASk
description: Innovatiivinen alusta päivittäisten tehtävien ja aktiviteettien hallintaan.
img: assets/img/wizardTATASK.png
importance: 1
category: uni
---
## `TATASk` - Päivittäisten Tehtävien Hallintavelho
> TATASk yhdistää huipputeknologiat päivittäisten tehtävien ja aktiviteettien hallinnan tehostamiseksi, tarjoten monipuolisen alustan joka parantaa tehokkuutta ja tyylikkyyttä.
### `Ominaisuuskohokohtia`
Hyödyntäen teknologioiden yhdistelmää kuten `React`, `Node.js`, `PostgreSQL` ja `Docker`, `TATASk` tarjoaa vankan toiminnallisuuden ja skaalautuvuuden.
### `Sivupohjat`
#### Aloitussivu
<details>
<div class="row justify-content-center">
<div class="col-md-8">
 {% include figure.liquid path="assets/img/landing-page.jpg" title="Aloitussivu" class="img-fluid rounded z-depth-1" %}
</div>
</div>
</details>
#### Hallintapaneelin Näkymä
<details>
<div class="row justify-content-center">
<div class="col-sm-6">
 {% include figure.liquid path="assets/img/navbar.jpg" title="Navigointipalkki" class="img-fluid rounded z-depth-1" %}
</div>
</div>
<div class="row justify-content-center">
<div class="col-sm-10">
 {% include figure.liquid path="assets/img/task-overview.jpg" title="Tehtäväkatsaus" class="img-fluid rounded z-depth-1" %}
</div>
<div class="col-sm-10">
 {% include figure.liquid path="assets/img/activity-overview.jpg" title="Aktiviteettikatsaus" class="img-fluid rounded z-depth-1" %}
</div>
</div>
</details>
#### Tehtävien Hallinta
<details>
<div class="row justify-content-center">
<div class="col-sm-8">
 {% include figure.liquid path="assets/img/task-popup.jpg" title="Tehtävän Luomisen Ponnahdusikkuna" class="img-fluid rounded z-depth-1" %}
</div>
</div>
<div class="row justify-content-center">
<div class="col-sm-6">
 {% include figure.liquid path="assets/img/task-filter.jpg" title="Tehtävien Suodatus Aktiviteetin Mukaan" class="img-fluid rounded z-depth-1" %}
</div>
</div>
<div class="row">
<div class="col-sm-6">
 {% include figure.liquid path="assets/img/task-example-1.jpg" title="Tehtäväesimerkki 1" class="img-fluid rounded z-depth-1" %}
</div>
<div class="col-sm-6">
 {% include figure.liquid path="assets/img/task-example-3.jpg" title="Tehtäväesimerkki 3" class="img-fluid rounded z-depth-1" %}
</div>
</div>
</details>
#### Aktiviteettien Hallinta
<details>
<div class="row justify-content-center">
<div class="col-sm-8">
 {% include figure.liquid path="assets/img/add-activity-button.jpg" title="Lisää Aktiviteetti -nappi" class="img-fluid rounded z-depth-1" %}
</div>
</div>
<div class="row justify-content-center">
<div class="col-sm-8">
 {% include figure.liquid path="assets/img/activity-popup.jpg" title="Aktiviteetin Luomisen Ponnahdusikkuna" class="img-fluid rounded z-depth-1" %}
</div>
</div>
<div class="row">
<div class="col-sm-14">
 {% include figure.liquid path="assets/img/activity-example.jpg" title="Aktiviteettiesimerki" class="img-fluid rounded z-depth-1" %}
</div>
</div>
</details>
#### Tilastot-sivu
<details>
<div class="row">
<div class="col-sm-6">
 {% include figure.liquid path="assets/img/statistics-chart-1.jpg" title="Tilastokuvio 1" class="img-fluid rounded z-depth-1" %}
</div>
<div class="col-sm-6">
 {% include figure.liquid path="assets/img/statistics-chart-2.jpg" title="Tilastokuvio 2" class="img-fluid rounded z-depth-1" %}
</div>
</div>
</details>
### `Yhteenveto ja Pohdinta`
`TATASK`in kehittäminen on ollut innovaation ja oppimisen matka. Projekti ei ainoastaan parantanut teknisiä taitojani, vaan myös syvensi ymmärrystäni käyttäjäkeskeisestä suunnittelusta.
Lisätietoja ja `yksityiskohtaista erittelyä` käytetyistä teknologioista löydät projektin `dokumentaatiosta`:
- **[TATASk_manager](https://github.com/martimolanes/TATASk_Manager/)**
- **[Tietokannan Asennus ja Käyttö](https://github.com/martimolanes/TATASk_Manager/blob/main/docs/database/database-usage.md)**
- **[Palvelimen Toteutuksen Yksityiskohdat](https://github.com/martimolanes/TATASk_Manager/blob/main/docs/server/server-usage.md)**
- **[Asiakassovelluksen Tiedot](https://github.com/martimolanes/TATASk_Manager/blob/main/docs/client/application-usage.md)**
### `Osallistujat`
<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Ladataan osallistujia...</div>
<script>
async function *fetchContributors*() {
const url = 'https://api.github.com/repos/martimolanes/TATASk_Manager/contributors';
const response = await *fetch*(url);
const contributors = await response.*json*();
const contributorsHtml = contributors.*map*(*contributor* =>
`<div class="contributor" style="margin: 10px; text-align: center;">
 <img src="${contributor.avatar_url}" alt="${contributor.login}" style="width: 100px; height: 100px; border-radius: 50%; display: block; margin: auto;">
 <p><a href="${contributor.html_url}" target="_blank">${contributor.login}</a></p>
 </div>`
 ).*join*('');
 document.*getElementById*('contributors-list').innerHTML = contributorsHtml;
}
*fetchContributors*();
</script>