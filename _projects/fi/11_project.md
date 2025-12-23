---
layout: page
title: Awareen
description: Ruutuajan tietoisuussovellus pysyvällä päällysajastimella tietoista laitteen käyttöä varten.
img: assets/img/awareen.png
importance: 1
category: productivity 
---

## `Awareen` - Ruutuajan tietoisuuden vartija

> Awareen (Awareness + Screen / Tietoisuus + Ruutu) on Android-sovellus, joka edistää tietoista laitteen käyttöä pysyvän päällysajastimen avulla, auttaen käyttäjiä tulemaan tietoisemmiksi ruutuajastaan kaikissa sovelluksissa.

### `Teknologiapino`

Rakennettu modernien Android-kehityskäytäntöjen mukaisesti:
- `Kotlin` natiiviin Android-kehitykseen
- `Palvelupohjainen arkkitehtuuri` taustaprosessointiin
- `Päällysoikeudet` järjestelmätason integrointiin
- `Etualan palvelut` luotettavaan toimintaan
- `SharedPreferences` asetusten säilyttämiseen
- `Mukautetut käyttöliittymäkomponentit` joustaviin näyttövaihtoehtoihin

### `Ydininnovaatio: Kolmitasoinen hälytysjärjestelmä`

Awareenissa on progressiivinen tietoisuusjärjestelmä, joka mukautuu käyttökuvioihin:

1. **Taso 1 (Vihreä)**: Oletusnäyttö normaalille käytölle (0-30 minuuttia)
2. **Taso 2 (Keltainen)**: Varoitusvaihe rajojen lähestyessä (30-60 minuuttia)  
3. **Taso 3 (Punainen)**: Hälytysviase liialliselle käytölle (60+ minuuttia) valinnaisella vilkkumisella

Kaikki värit, sijainnit ja aikakynnykset ovat täysin mukautettavissa henkilökohtaisten mieltymysten mukaisesti.

### `Keskeiset ominaisuudet`

#### Pysyvä päällysjärjestelmä
- **Aina näkyvä ajastin**, joka toimii kaikissa sovelluksissa
- **Älykkäät näyttötilat**: Aina päällä tai määriteltävissä olevat aikavälipohjaiset näkyvyysasetukset
- **Mukautettava sijoittelu** taso-kohtaisilla fonttikoilla ja väreillä
- **Järjestelmätason integrointi**, joka selviää sovelluksen vaihdoista ja laitteen kiertämisestä

#### Edistynyt konfigurointi
- **Kolmiportainen mukautus** väreille, sijainneille ja kynnyksille
- **Joustavat näyttövälit** määriteltävissä olevin kestoin
- **Päivittäinen automaattinen nollaus** käyttäjän määrittämällä ajoituksella
- **Akun optimoinnin käsittely** keskeytymättömään toimintaan

#### Analytiikkakokopiltti
- **Päivittäisen käytön seuranta** kuvion tunnistuksella
- **Historiallisen datan visualisointi** pitkäaikaiseen tietoisuuteen
- **Trendianalyysi** käyttötottumusten tunnistamiseen

### `Kuvakaappaukset`

#### Pääkäyttöliittymä ja asetukset

<details>
    <summary>Näytä sovelluksen kuvakaappaukset</summary>
    <div class="col-sm-8">
            {% include figure.liquid path="assets/img/Awareen_app_demonstration.png" title="Pääkäyttöliittymä" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="caption">
        Täydellinen käyttöliittymä, joka esittelee päähallintaelementit, mukautusvaihtoehdot, analytiikkaseurannan ja päällystoiminnallisuuden
    </div>
</details>

### `Tekninen arkkitehtuuri`

#### Palvelupohjainen suunnittelu
```kotlin
class ScreenTimeService : Service() {
    private val overlayManager = OverlayManager()
    private val timeTracker = TimeTracker()
    
    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        startForeground(NOTIFICATION_ID, createNotification())
        return START_STICKY // Varmistaa palvelun uudelleenkäynnistyksen sammuttamisen jälkeen
    }
}
```

#### Käyttöoikeusten hallintajärjestelmä
```kotlin
// Kattava käyttöoikeuksien käsittely Android-monimutkaisuuteen
private fun requestOverlayPermission() {
    if (!Settings.canDrawOverlays(this)) {
        val intent = Intent(
            Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
            Uri.parse("package:$packageName")
        )
        startActivityForResult(intent, OVERLAY_PERMISSION_REQUEST)
    }
}
```

#### Dynaaminen näyttökonfiguraatio
```kotlin
class OverlayManager {
    fun updateDisplayLevel(screenTime: Long) {
        val level = when {
            screenTime < level1Threshold -> DisplayLevel.NORMAL
            screenTime < level2Threshold -> DisplayLevel.WARNING  
            else -> DisplayLevel.ALERT
        }
        applyLevelConfiguration(level)
    }
}
```

### `Projektin rakenne`

```
app/src/main/
├── java/com/example/screentimetracker/
│   ├── MainActivity.kt              # Sovelluksen pääsisäänkäynti
│   ├── ScreenTimeService.kt         # Ydinseurantapalvelu
│   ├── SettingsActivity.kt          # Konfigurointikäyttöliittymä
│   ├── AnalyticsActivity.kt         # Käytön analytiikka
│   ├── InfoActivity.kt              # Tietoa ja ohje
│   ├── AppSettings.kt               # Konfiguraatiovakiot
│   ├── BootReceiver.kt              # Automaattikäynnistystoiminnallisuus
│   └── UnsavedChangesDialog.kt      # Asetusten hallinta
├── res/
│   ├── layout/                      # Käyttöliittymäasettelut
│   ├── drawable/                    # Ikonit ja grafiikat
│   ├── values/                      # Merkkijonot ja teemat
│   └── xml/                         # Varmuuskopiokonfiguraatiot
└── AndroidManifest.xml              # Käyttöoikeudet ja komponentit
```

### `Edistyneet ominaisuudet`

#### Akun optimoinnin käsittely
Sovellus hallitsee älykkäästi Androidin akun optimointirajoituksia varmistaakseen johdonmukaisen toiminnan eri laitetoimittajien ja Android-versioiden välillä.

#### Automaattikäynnistys-integrointi
Saumaton integrointi järjestelmän käynnistysprosessien kanssa varmistaa, että tietoisuusjärjestelmä aktivoituu automaattisesti ilman käyttäjän toimenpiteitä.

#### Monilaite-yhteensopivuus
Kattava käyttöoikeuksien käsittely ja varajärjestelmämekanismit varmistavat yhteensopivuuden eri Android-versioiden (8.0+) ja laitetoimittajien välillä.

### `Asennus ja asetus`

```bash
# Kehitysympäristön setup
git clone https://github.com/Andebugulin/awareen.git
cd awareen

# Rakenna ja asenna
./gradlew assembleDebug
adb install app/build/outputs/apk/debug/app-debug.apk
```

### `Kehitysmatka`

Awareenin luominen on ollut tutkimusmatka Android-järjestelmätason ohjelmointiin, käyttäjäkäyttäytymisen psykologiaan ja kestävään sovellysarkkitehtuuriin. Projekti haastoi minut:

- **Hallitsemaan Android-palveluja** ja etualan palvelujen hallintaa
- **Navigoimaan monimutkaisia käyttöoikeusjärjestelmiä** eri Android-versioissa
- **Suunnittelemaan intuitiivista UX:ää** tuottavuuskeskeisille sovelluksille
- **Toteuttamaan pysyviä päällysjärjestelmiä**, jotka kunnioittavat käyttäjien yksityisyyttä
- **Käsittelemään akun optimointia** ja automaattikäynnistyksen monimutkaisuuksia
- **Luomaan joustavia konfiguraatiojärjestelmiä** monimuotoisille käyttäjämieltymyksille

Sovellus onnistui keräämään yli 100 käyttäjää orgaanisten jakelukanavien kautta, osoittaen tosielämän kysyntää tietoisille teknologiaratkaisuille.

### `Vaikutus ja jakelu`

- **100+ aktiivista käyttäjää** useiden jakelukanavien kautta
- **Allekirjoitetut julkaisuversiot** asianmukaisen Android-turvallisuusvaatimustenmukaisuuden kanssa
- **Positiivista käyttäjäpalautetta** tehokkuudesta ruutuajan tietoisuuteen
- **Avoimen lähdekoodin panos** digitaalisen hyvinvoinnin ekosysteemiin

Yksityiskohtaisen toteutuksen ja osallistumisen saamiseksi:

- **[Awareen GitHub-repositorio](https://github.com/Andebugulin/awareen)**

### `Osallistujat`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Ladataan osallistujia...</div>

<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/Andebugulin/awareen/contributors';
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

### `Download`

<div style="text-align: center; margin: 40px 0;">
  <a href="https://play.google.com/store/apps/details?id=com.andebugulin.awareen2" target="_blank">
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" style="height: 80px;">
  </a>
</div>