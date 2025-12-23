---
layout: page
title: Ankara
description: Ein interaktives Tool, das verteilte Wiederholung und Randomisierung für effektives Vokabellernen nutzt.
img: assets/img/ankara.png
importance: 1
category: productivity 
---

## `Ankara` - Verbessertes Karteikarten-Lerntool

> Eine intelligente, datengesteuerte Vokabellern-Anwendung mit verteilter Wiederholung und umfassenden Analysen. Anders als herkömmliche Karteikarten-Anwendungen bietet Ankara dreiseitige Karten und sammelt Lerndaten für KI-Forschungsanwendungen.

### `Technologie-Stack`

Ankara wurde mit modernen Python-Technologien entwickelt:
- `Python 3.8+` für Kernfunktionalität
- `Pygame` für interaktives GUI-Framework
- `Pandas` für Datenmanipulation und -analyse
- `gTTS` für Text-zu-Sprache-Funktionalität
- `Pathlib` für moderne Dateiverwaltung
- `Langdetect` für automatische Spracherkennung

### `Schlüsselinnovation: Dreiseitiges Lernen`

Während die meisten Karteikarten-Tools Sie auf zweiseitige Karten beschränken, bietet Ankara einen einzigartigen **dreistufigen Lernansatz**:

1. **Wort** → Sehen Sie den Vokabelterm
2. **Beispiel** → Kontext vor Definition (optionaler Zwischenschritt)
3. **Bedeutung** → Endgültige Definitionsenthüllung

Diese Progression ahmt natürlichen Spracherwerb nach und ermöglicht es Lernenden, Kontext aufzubauen, bevor sie direkte Übersetzungen sehen.

### `Tastenbelegungen`

Die Anwendung unterstützt Vim-ähnliche Tastenbelegungen für eine intuitive und effiziente Lernerfahrung:

#### Navigation
- `n` - Nächstes Wort
- `p` - Vorheriges Wort
- `0` - 10 Wörter vorspringen
- `<` - Sprache für Aussprache manuell wechseln
- `>` - Sprache für Aussprache manuell wechseln

#### Kartenansichten
- `f` - Wort zeigen
- `d` - Bedeutung zeigen
- `s` - Beispiel zeigen
- `a` - Aussprache abspielen (erkennt Sprache automatisch)

#### Bewertung (Verteilte Wiederholung)
- `h` - Wort als "nicht erinnern" markieren (1)
- `j` - Wort als "schwer" markieren (2)
- `k` - Wort als "normal" markieren (3)
- `l` - Wort als "gut" markieren (4)
- `i` - Wort als "sehr beeindruckend" markieren (5)

#### System
- `ESC` - Speichern und beenden

### `Optimierte Handposition`

Für die beste Benutzererfahrung empfehlen wir folgende Handpositionierung:

- **Linke Hand**: Legen Sie Ihre Finger auf `A` `S` `D` `F` (Ring → Zeigefinger) für Wortinteraktions-Tasten
- **Rechte Hand**: Legen Sie Ihre Finger auf `H` `J` `K` `L` (Zeige → kleiner Finger) für Bewertungstasten

Dieses Vim-inspirierte Layout minimiert Handbewegungen und maximiert die Lerngeschwindigkeit, während es Ihnen auch hilft, das Zehnfingersystem zu lernen.

### `Seitenlayouts`

#### Anweisungsansicht 

<details>
    <summary>Anweisungen</summary>
    <div class="row justify-content-center">
        <div class="col-md-8">
            {% include figure.liquid path="assets/img/instructions.jpg" title="Instructions" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

#### Hauptschnittstellen-Ansicht 

<details>
    <summary>Hauptschnittstelle</summary>
    <div class="row justify-content-center">
        <div class="col-sm-10">
            {% include figure.liquid path="assets/img/main_interface.jpg" title="Main Interface" class="img-fluid rounded z-depth-1" %}
        </div>
    </div>
</details>

### `Projektarchitektur`

```
ankara.py                  # Hauptanwendungsskript
requirements.txt          # Python-Abhängigkeiten
flashcard_data/
├── words.csv              # Haupt-Vokabeldatenbank
├── config.json           # Anwendungseinstellungen
└── backups/              # Automatischer Backup-Speicher
    ├── words_backup_20241201_120000.csv
    └── words_backup_20241130_120000.csv
```

### `Erweiterte Funktionen`

#### Datenanalyse & KI-Integration
- **Umfassende Lernmetriken**: Verfolgung von Lernzeit, Genauigkeit und Fortschrittsmustern
- **Machine Learning Ready**: Generiert für Gedächtnisforschung geeignete Datensätze
- **Leistungsanalyse**: Sitzungsstatistiken und langfristige Fortschrittsverfolgung
- **Exportfähigkeiten**: Daten bereit für neuronale Netzwerk-Training

#### Robustes Datenmanagement
- **Automatische Backups**: Geplante Backups mit konfigurierbarer Aufbewahrung
- **CSV-basierte Speicherung**: Leichtgewichtig, portabel und versionskontrollierbar
- **Datenwiederherstellung**: Eingebautes Backup-Wiederherstellungssystem
- **Leistungsoptimiert**: Verarbeitet große Vokabulare effizient

#### Mehrsprachige Unterstützung
- **Automatische Spracherkennung**: Für Aussprachefunktionen
- **Echtzeit-Text-zu-Sprache**: Unterstützt mehrere Sprachen
- **Konfigurierbare Einstellungen**: Anpassbare Aussprachesprache

### `Lernanalyse-Datenstruktur`

Die Anwendung sammelt umfassende Lernmetriken pro Wort:

```python
# Pro-Wort-Analyse
- study_sessions: int      # Anzahl der Lernsitzungen
- total_study_time: float  # Kumulative Lernzeit
- correct_answers: int     # Erfolgreiche Erinnerungen
- total_answers: int       # Gesamte Versuche
- accuracy_rate: float     # Erfolgsrate
- class_progression: list  # Verteilte Wiederholungshistorie
```

### `Konfiguration & Setup`

#### CSV-Datenformat
```csv
word,meaning,example
serendipity,angenehme Überraschung,Das Buch zu finden war purer Zufall
ephemeral,sehr kurz dauernd,Die vergängliche Schönheit der Kirschblüten
```

#### Anwendungseinstellungen
```json
{
  "auto_backup": true,
  "backup_interval_days": 7,
  "max_backups": 10,
  "last_backup": "20250912_143722",
  "pronunciation_language": "en"
}
```

### `Besonderheit: Verteilte Wiederholung und KI-Forschung`

Eine der Schlüsselfunktionen von Ankara ist die Nutzung verteilter Wiederholung und umfassender Datensammlung. Die Anwendung optimiert nicht nur das Lernen durch bewährte Bildungstechniken, sondern generiert auch wertvolle Datensätze für KI-Forschungsanwendungen in:

- **Kognitionswissenschaft**: Gedächtnis- und Lernmusteranalyse
- **Bildungstechnologie**: Entwicklung adaptiver Lernalgorithmen
- **Natürliche Sprachverarbeitung**: Vokabelerwerbsmodellierung
- **Mensch-Computer-Interaktion**: Schnittstellenoptimierungsstudien

### `Installation & Verwendung`

```bash
# Repository klonen
git clone https://github.com/Andebugulin/ankara.git
cd ankara

# Virtuelle Umgebung erstellen (empfohlen)
python -m venv venv
source venv/bin/activate  # Linux/macOS
# oder venv\Scripts\activate # Windows

# Abhängigkeiten installieren
pip install -r requirements.txt

# Anwendung ausführen
python ankara.py
```

### `Fazit und Reflexion`

Die Entwicklung des verbesserten Karteikarten-Lerntools Ankara war eine bereichernde Reise in die Schnittstelle von Sprachenlernen, Datenwissenschaft und Benutzererfahrungsdesign. Dieses Projekt ermöglichte es mir, fortgeschrittene Konzepte in der Bildungstechnologie zu erkunden und gleichzeitig praktische Fähigkeiten in Python-Entwicklung, Datenanalyse und forschungsorientiertem Softwaredesign aufzubauen.

Das Tool unterstützt nicht nur den Vokabelerwerb, sondern verwandelt den Lernprozess in eine datengesteuerte, wissenschaftlich fundierte Erfahrung, die sowohl für Lernende angenehm und effizient als auch für Forscher wertvoll ist.

Für weitere Einblicke und detaillierte Implementierung:

- **[Ankara GitHub Repository](https://github.com/Andebugulin/ankara)**

### `Mitwirkende`

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Mitwirkende werden geladen...</div>

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