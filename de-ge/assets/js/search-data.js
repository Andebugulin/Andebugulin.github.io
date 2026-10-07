
const currentUrl = window.location.href;
const siteUrl = "https://Andebugulin.github.io"; 
let updatedUrl = currentUrl.replace("https://Andebugulin.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("de-ge".length > 0) {
  updatedUrl = updatedUrl.replace("/de-ge", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-über-mich",
    title: "über mich",
    section: "Navigationsmenü",
    handler: () => {
      window.location.href = "/de-ge/";
    },
  },{id: "nav-tagebuch",
          title: "tagebuch",
          description: "Hier ist mein Tagebuch, um Erinnerungen an mein Leben zu bewahren!",
          section: "Navigationsmenü",
          handler: () => {
            window.location.href = "/de-ge/journal/";
          },
        },{id: "nav-abschlussarbeit",
          title: "abschlussarbeit",
          description: "",
          section: "Navigationsmenü",
          handler: () => {
            window.location.href = "/de-ge/thesis/";
          },
        },{id: "nav-projekte",
          title: "projekte",
          description: "Was ich entworfen, gebaut und veröffentlicht habe. Das meiste davon benutze ich jeden Tag.",
          section: "Navigationsmenü",
          handler: () => {
            window.location.href = "/de-ge/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigationsmenü",
          handler: () => {
            window.location.href = "/de-ge/cv/";
          },
        },{id: "post-learning-journal-2025-10-06-y-m-d-webassembly-history-amp-concepts",
        
          title: "Learning Journal — 2025-10-06 (y/m/d): WebAssembly History &amp; Concepts",
        
        description: "Notes, reflections, and rough experiments on WebAssembly, asm.js, and related tooling.",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de-ge/blog/2025/10/06/learning-2025-10-05-webassembly/";
          
        },
      },{id: "post-central-cee-amp-dave-quot-sprinter-quot",
        
          title: "Central Cee &amp; Dave - &quot;Sprinter&quot;",
        
        description: "A review of my favorite song of 2023, &quot;Sprinter&quot; by Central Cee and Dave. A lot of bars.",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de-ge/blog/2025/07/08/central-cee-dave-sprinter-review/";
          
        },
      },{id: "post-everyday-journal",
        
          title: "Everyday Journal",
        
        description: "I struggle as everybody and I try to learn something new every day. Here are my notes.",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de-ge/blog/1000/10/06/life-journal/";
          
        },
      },{id: "post-learning-journal-1000-10-10-y-m-d-webassembly-history-amp-concepts",
        
          title: "Learning Journal — 1000-10-10 (y/m/d): WebAssembly History &amp; Concepts",
        
        description: "Notes, reflections, and rough experiments on WebAssembly, asm.js, and related tooling.",
        section: "Beiträge",
        handler: () => {
          
            window.location.href = "/de-ge/blog/1000/10/05/learning-2025-10-05-webassembly/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/de-ge/books/en-us/the_godfather/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/de-ge/books/pt-br/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "Nachrichten",},{id: "news-um-anúncio-simples-em-uma-linha",
          title: 'Um anúncio simples em uma linha.',
          description: "",
          section: "Nachrichten",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "Nachrichten",handler: () => {
              window.location.href = "/de-ge/news/announcement_2/";
            },},{id: "news-um-anúncio-longo-com-detalhes",
          title: 'Um anúncio longo com detalhes',
          description: "",
          section: "Nachrichten",handler: () => {
              window.location.href = "/de-ge/news/pt-br/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "Nachrichten",},{id: "news-um-anúncio-simples-em-uma-linha-com-markdown-emoji-sparkles-smile",
          title: 'Um anúncio simples em uma linha com Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "Nachrichten",},{id: "projects-hahasaas",
          title: 'HaHaSaaS',
          description: "Dienst zum Teilen von Witzen mit Go-API, React-Frontend und PostgreSQL, ausgeliefert mit Docker.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/10_project/";
            },},{id: "projects-awareen",
          title: 'Awareen',
          description: "Ein stiller Timer über jeder App, der zeigt, wie lange Sie heute schon am Telefon sind. Keine Sperren, keine Werbung, keine Internetberechtigung.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/11_project/";
            },},{id: "projects-knowledge-tree",
          title: 'Knowledge Tree',
          description: "Notizen als Graph im Sinne des Zettelkastens. Jede Notiz ist ein Knoten, den man verknüpfen, suchen und per Tastatur ansteuern kann.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/12_project/";
            },},{id: "projects-wordor",
          title: 'Wordor',
          description: "Ein Übersetzer, der jede Abfrage in eine Lernkarte verwandelt und sie mit verteilter Wiederholung zurückbringt.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/13_project/";
            },},{id: "projects-nfcguard",
          title: 'nfcGuard',
          description: "Sperrt ablenkende Apps, bis Sie einen physischen NFC-Tag berühren. Legen Sie den Tag an einen unbequemen Ort, und Instagram zu öffnen kostet einen Spaziergang.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/14_project/";
            },},{id: "projects-tatask",
          title: 'TATASk',
          description: "Aufgaben- und Aktivitätstracker, im Studienteam gebaut, mit Statistiken darüber, wohin die Woche ging.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/1_project/";
            },},{id: "projects-morner-bot",
          title: 'Morner Bot',
          description: "Telegram-Bot, der die Morgenroutine über die Smartwatch erfasst, damit das Telefon im anderen Zimmer bleiben kann.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/2_project/";
            },},{id: "projects-ankara",
          title: 'Ankara',
          description: "Vokabelkarten mit verteilter Wiederholung, zufälliger Reihenfolge und Sprachausgabe.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/3_project/";
            },},{id: "projects-weatherornot",
          title: 'WeatherOrNot',
          description: "Raumtemperatur live von einem ESP32-Sensor, per MQTT an ein Web-Dashboard gestreamt.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/4_project/";
            },},{id: "projects-piracy-rpg",
          title: 'Piracy RPG',
          description: "Seefahrts- und Kampfspiel mit prozeduralen Karten, geschrieben, um klassische Entwurfsmuster zu üben.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/5_project/";
            },},{id: "projects-galeriyah",
          title: 'GaleriYah',
          description: "Fotografie-Portfolio mit einem ungewöhnlichen, galerieorientierten Layout.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/7_project/";
            },},{id: "projects-archblocker",
          title: 'ArchBlocker',
          description: "Website-Blocker für Arch Linux auf Systemebene, mit einer Steuerung im Terminal-Stil.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/8_project/";
            },},{id: "projects-robanization",
          title: 'Robanization',
          description: "2D-Plattformer mit prozedural erzeugten Levels und beweglichen Hindernissen.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/9_project/";
            },},{
        id: 'social-email',
        title: 'E-Mail senden',
        section: 'Soziale Medien',
        handler: () => {
          window.open("mailto:%61%6E%64%72%65%69%67%75%6C%69%6E%32%30%30%35@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Soziale Medien',
        handler: () => {
          window.open("https://github.com/Andebugulin", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Soziale Medien',
        handler: () => {
          window.open("https://www.kaggle.com/andreygulincodim", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Soziale Medien',
        handler: () => {
          window.open("https://www.linkedin.com/in/andrei-gulin", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'Sprachen',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
          id: 'lang-ru',
          title: 'ru',
          section: 'Sprachen',
          handler: () => {
            window.location.href = "/ru" + updatedUrl;
          },
        },{
          id: 'lang-fi',
          title: 'fi',
          section: 'Sprachen',
          handler: () => {
            window.location.href = "/fi" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Theme zu Hell wechseln',
      description: 'Das Theme der Website auf Hell ändern',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Theme zu Dunkel wechseln',
      description: 'Das Theme der Website auf Dunkel ändern',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'System-Standard-Theme verwenden',
      description: 'Das Theme der Website auf Systemstandard ändern',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
