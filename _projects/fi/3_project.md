---
layout: page
title: Ankara
description: Interaktiivinen työkalu, joka hyödyntää kertausjärjestelmää ja satunnaistamista tehokkaaseen sanaston oppimiseen.
img: assets/img/ankara.png
importance: 1
category: productivity 
---

## `Ankara` - Parannettu Muistikorttien Oppimistyökalu

> Älykäs, datapohjainen sanaston oppimissovellus kertausjärjestelmällä ja kattavilla analytiikkaominaisuuksilla. Toisin kuin perinteiset muistikorttisovellukset, Ankara sisältää kolmipuolisia kortteja ja kerää oppimisdataa tekoälytutkimuksen sovelluksiin.

### `Teknologiapino`

Ankara on kehitetty nykyaikaisilla Python-teknologioilla:
- `Python 3.8+` ydintoiminnallisuudelle
- `Pygame` interaktiiviselle käyttöliittymäkehykselle
- `Pandas` datan manipuloinnille ja analytiikalle
- `gTTS` tekstistä-puheeksi -toiminnallisuudelle
- `Pathlib` nykyaikaiselle tiedostonkäsittelylle
- `Langdetect` automaattiselle kielentunnistukselle

### `Avaininnovaatio: Kolmipuolinen Oppiminen`

Kun useimmat muistikorttityökalut rajoittavat sinut kaksipuolisiin kortteihin, Ankara tarjoaa ainutlaatuisen **kolmivaiheisen oppimislähestymistavan**:

1. **Sana** → Näe sanastokäsite
2. **Esimerkki** → Konteksti ennen määritelmää (valinnainen välitaso)
3. **Merkitys** → Lopullinen määritelmän paljastus

Tämä eteneminen jäljittelee luonnollista kielen omaksumista ja mahdollistaa oppijan rakentaa kontekstin ennen suorien käännösten näkemistä.

### `Pikanäppäimet`

Sovellus tukee Vim-tyyppisiä pikanäppäimiä intuitiivista ja tehokasta oppimiskokemusta varten:

#### Navigointi
- `n` - Seuraava sana
- `p` - Edellinen sana
- `0` - Hyppää 10 sanaa eteenpäin
- `<` - Vaihda ääntämisen kieltä manuaalisesti
- `>` - Vaihda ääntämisen kieltä manuaalisesti

#### Korttinäkymät
- `f` - Näytä sana
- `d` - Näytä merkitys
- `s` - Näytä esimerkki
- `a` - Toista ääntäminen (tunnistaa kielen automaattisesti)

#### Arviointi (Kertausjärjestelmä)
- `h` - Merkitse sana "en muista" (1)
- `j` - Merkitse sana "vaikea" (2)
- `k` - Merkitse sana "normaali" (3)
- `l` - Merkitse sana "hyvä" (4)
- `i` - Merkitse sana "erittäin vaikuttava" (5)

#### Järjestelmä
- `ESC` - Tallenna ja poistu

### `Optimoitu Käsien Sijoittelu`

Parhaan käyttäjäkokemuksen saavuttamiseksi suosittelemme käsien sijoittamista seuraavasti:

- **Vasen käsi**: Aseta sormesi `A` `S` `D` `F` (nimetön → etusormi) sanainteraktionäppäimille
- **Oikea käsi**: Aseta sormesi `H` `J` `K` `L` (etusormi → pikkusormi) arviointinäppäimille

Tämä Vim-inspiroitu asettelu minimoi käden liikkeet ja maksimoi oppimisnopeuden, samalla auttaen sinua oppimaan kymmensormijärjestelmän.

### `Sivupohjat`

#### Ohjeiden näkymä 

<details>
    <summary>Ohjeet</summary>
    <div class="row justify-content-center">
        <div class="col-md-8">
            {% include figure.liquid path="assets/img/instructions.jpg" title="Ohjeet" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Pääkäyttöliittymän näkymä 

<details>
    <summary>Pääkäyttöliittymä</summary>
    <div class="row justify-content-center">
        <div class="col-sm-10">
            {% include figure.liquid path="assets/img/main_interface.jpg" title="Pääkäyttöliittymä" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Projektiarkkitehtuuri`

```
ankara.py                  # Pääsovelluksen skripti
requirements.txt          # Python-riippuvuudet
flashcard_data/
├── words.csv              # Pääsanastotietokanta
├── config.json           # Sovelluksen asetukset
└── backups/              # Automaattinen varmuuskopiointi
    ├── words_backup_20241201_120000.csv
    └── words_backup_20241130_120000.csv
```

### `Edistyneet Ominaisuudet`

#### Data-analytiikka & Tekoälyintegraatio
- **Kattavat oppimismittarit**: Seuraa opiskeluaikaa, tarkkuutta ja kehityskuvioita
- **Koneoppimisvalmiudet**: Tuottaa muistitutkimukseen soveltuvia tietojoukkoja
- **Suoritusanalytiikka**: Istuntotilastot ja pitkän aikavälin kehitysseuranta
- **Vientimahd.**: Data valmiina neuroverkon harjoittelulle

#### Vankka Datan Hallinta
- **Automaattiset varmuuskopiot**: Ajoitetut varmuuskopiot määritettävissä olevalla säilytyksellä
- **CSV-pohjainen tallennus**: Kevyt, kannettava ja versionhallittavissa
- **Datan palautus**: Sisäänrakennettu varmuuskopion palautusjärjestelmä
- **Suoritusoptimoitu**: Käsittelee tehokkaasti suuria sanastoja

#### Monikielituki
- **Automaattinen kielentunnistus**: Ääntämisominaisuuksia varten
- **Reaaliaikainen tekstistä-puheeksi**: Tukee useita kieliä
- **Määritettävissä olevat asetukset**: Mukautettava ääntämiskieli

### `Oppimisanalytiikan Datarakenne`

Sovellus kerää kattavia oppimismittareita sanaa kohden:

```python
# Sanakohtainen analytiikka
- study_sessions: int      # Opiskelukerrat
- total_study_time: float  # Kumulatiivinen opiskeluaika
- correct_answers: int     # Onnistuneet muistamiset
- total_answers: int       # Yhteensä yrityksiä
- accuracy_rate: float     # Onnistumisprosentti
- class_progression: list  # Kertausjärjestelmän historia
```

### `Konfigurointi & Asennus`

#### CSV-datan Muoto
```csv
word,meaning,example
serendipity,miellyttävä yllätys,Tuon kirjan löytäminen oli puhdasta serendipiteettiä
ephemeral,hyvin lyhytaikainen,Kirsikankukkien ohikiitävä kauneus
```

#### Sovelluksen Asetukset
```json
{
  "auto_backup": true,
  "backup_interval_days": 7,
  "max_backups": 10,
  "last_backup": "20250912_143722",
  "pronunciation_language": "en"
}
```

### `Hienoa Ominaisuutta: Kertausjärjestelmä ja Tekoälytutkimus`

Yksi Ankaran avainaromauksista on sen kertausjärjestelmän käyttö ja kattava datan keruu. Sovellus ei ainoastaan optimoi oppimista todistettujen opetustek.oiden kautta, vaan tuottaa myös arvokkaita tietojoukkoja tekoälytutkimuksen sovelluksiin:

- **Kognitiotiede**: Muisti- ja oppimiskuvioiden analyysi
- **Opetustekniikka**: Mukautuvien oppimisalgoritmien kehitys  
- **Luonnollisen kielen käsittely**: Sanaston omaksumisen mallintaminen
- **Ihminen-kone vuorovaikutus**: Käyttöliittymän optimointitutkimukset

### `Asennus & Käyttö`

```bash
# Kloonaa repositorio
git clone https://github.com/Andebugulin/ankara.git
cd ankara

# Luo virtuaaliympäristö (suositeltu)
python -m venv venv
source venv/bin/activate  # Linux/macOS
# tai venv\Scripts\activate # Windows

# Asenna riippuvuudet
pip install -r requirements.txt

# Käynnistä sovellus
python ankara.py
```

### `Yhteenveto ja Pohdinta`

Parannetun muistikorttien oppimistyökalun, Ankaran, kehittäminen on ollut rikastuttava matka kielen oppimisen, datatieteen ja käyttäjäkokemuksen suunnittelun risteyksessä. Tämä projekti mahdollisti minun tutkia edistyneitä käsitteitä opetustekniikassa samalla rakentaen käytännön taitoja Python-kehityksessä, data-analytiikassa ja tutkimusorientoituneessa ohjelmistosuunnittelussa.

Työkalu ei ainoastaan auta sanaston omaksumisessa, vaan muuttaa oppimisprosessin datapohjaiseksi, tieteellisesti tuetuksi kokemukseksi, joka on sekä nautinnollinen ja tehokas oppijoille että arvokas tutkijoille.

Lisätietoja ja yksityiskohtaista toteutusta varten:

- **[Ankara GitHub Repositorio](https://github.com/Andebugulin/ankara)**

### `Osallistujat`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Ladataan osallistujia...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/Andebugulin/ankara/contributors';
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