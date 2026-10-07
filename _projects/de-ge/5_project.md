---
layout: page
title: Piracy RPG
description: "Seefahrts- und Kampfspiel mit prozeduralen Karten, geschrieben, um klassische Entwurfsmuster zu üben."
img: assets/img/pirates_battle.jpeg
importance: 3
category: uni
year: 2024
stack: C# · design patterns
---

## `Seas of Fortune` - Piraten-RPG-Abenteuer 🏴‍☠️  

> Begeben Sie sich auf eine digitale Reise, wo Strategie, Erkundung und Lernen aufeinandertreffen. Navigieren Sie durch gefährliche Gewässer, führen Sie taktische Kämpfe und entdecken Sie prozedural generierte Inselgeheimnisse!

### `Spielkonzept`  

*Seas of Fortune* ist mehr als ein Spiel – es ist ein Showcase fortgeschrittener Software-Engineering-Techniken, gebaut mit `C#` und `.NET`. Es demonstriert modernste Design-Muster und KI-Techniken, um ein reichhaltiges und immersives Piraten-Abenteuer zu liefern.

### `Technische Architektur`  
```
 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
                                                                                
 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
                                                                                
 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
                                                                                
 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
                                                                                
 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
                                                                                
 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ L ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
                                                                                
 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
                                                                                
 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
                                                                                
 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ B ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
                                                                                
 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ L ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
                                                                                
 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
                                                                                
 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
                                                                                
 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ F ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
                                                                                
 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
                                                                                
 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
                                                                                
Move the player ship (HJLK) or press Q to quit:
```

##### Combat Interface
```
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][@][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][E][E][I][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][E][ ][ ][ ]
[ ][ ][ ][A][ ][ ][ ][ ][ ][ ][ ][ ][E][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][E][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][E][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][ ][I]
[ ][ ][ ][ ][ ][ ][I][ ][ ][ ][ ][ ][ ][ ][ ]

Combat Log:
Reward: 1500 Gold
Reward: 60 Reputation
Captain Jack Sparrow moved to position (1, 1)
Captain Jack Sparrow moved to position (2, 1)
Crewman Gibbs obtained Intricate Map.

Ship 1 Crew:
Captain Jack Sparrow: HP 100/100 | SP 100/100 | MP 50/50
Crewman Gibbs: HP 100/100 | SP 100/100 | MP 50/50

Ship 2 Crew:
Davy Jones: HP 100/100 | SP 100/100 | MP 50/50
Bootstrap Bill: HP 100/100 | SP 100/100 | MP 50/50
Bill Turner: HP 100/100 | SP 100/100 | MP 50/50
Maccus: HP 100/100 | SP 100/100 | MP 50/50
Clanker: HP 100/100 | SP 100/100 | MP 50/50
Victor: HP 100/100 | SP 100/100 | MP 50/50

Current Action: Heal
Current State: Action
Stamina: 100/100
Magic Points: 50/50
Ammunition: 1

Actions:
1-4: Select action strategy
HJKL: Move
SPACE: Perform current action
D: Enter defending state
I: View Inventory
E: Open Equipment Menu
Q: Quit combat
O: View Quests
```

#### Fortgeschrittene Design-Muster 🧩  

Das Spiel integriert wesentliche Software-Design-Muster:  
- **Singleton**: Zentralisierte Kontrolle für Kernsysteme  
- **State**: Reibungslose Handhabung von Spielzuständen und Übergängen  
- **Strategy**: Flexible Kampf- und KI-Entscheidungsfindung  
- **Command**: Modulare, erweiterbare Eingabebehandlung  
- **Factory & Abstract Factory**: Dynamische Generierung von Spielentitäten, Inseln und Kämpfen  

#### Künstliche Intelligenz-Integration 🤖  

*Seas of Fortune* hebt die Messlatte für Spiel-KI:  
- Adaptives Feindverhalten  
- Prozedurale Generierung intelligenter, kontextbewusster Spielwelten  
- Strategische NPC-Wegfindung und Entscheidungsfindung  

#### Lernen Sie Vim beim Segeln! 🧭📚  

Meistern Sie effiziente Navigation mit unserem Vim-inspirierten HJKL-Steuerungssystem:  
- **H**: Nach Westen segeln ←  
- **J**: Nach Süden fahren ↓  
- **K**: Nach Norden navigieren ↑  
- **L**: Nach Osten erkunden →  

**Warum es innovativ ist:**  
- Vim-Navigationsfähigkeiten natürlich durch Gameplay aufbauen  
- Muskelgedächtnis für effiziente Tastaturbewegung trainieren  
- Steuerung in praktische Programmierfähigkeiten für Texteditoren und IDEs umwandeln  

Am Ende Ihres Piraten-Abenteuers werden Sie unbewusst die Vim-Navigation beherrschen – ein unschätzbares Werkzeug für Entwickler und Power-User!

- **[Seas of Fortune GitHub Repository](https://github.com/Andebugulin/rpg_pirates)**  


### `Fazit und Reflexion`  

Die Entwicklung von *Seas of Fortune* war eine lohnende Reise in Software-Engineering und Spieledesign, die zeigt, wie fortgeschrittene Programmiermuster und KI-Techniken ein immersives und anpassungsfähiges Spielerlebnis schaffen können.

### `Lernen durch Spielen`  

*Seas of Fortune* verbindet Spaß mit Lernen:  
- Meistern Sie fortgeschrittene Design-Muster durch Gameplay  
- Erkunden Sie KI- und prozedurale Generierungstechniken  
- Entwickeln Sie strategisches Denken mit komplexen Spielmechaniken  

Wer sagte, dass Software-Engineering nicht wie ein episches Piraten-Abenteuer sein kann? 🌊🏴‍☠️


### `Contributors`  

<div id="contributors-list" style="display: flex; flex-wrap: wrap; justify-content: space-around; padding: 20px;">Loading contributors...</div>
<script>
  async function fetchContributors() {
    const url = 'https://api.github.com/repos/Andebugulin/rpg_pirates/contributors';
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

