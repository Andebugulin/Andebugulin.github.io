
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
          description: "Eine wachsende Sammlung meiner/unserer coolen Projekte.",
          section: "Navigationsmenü",
          handler: () => {
            window.location.href = "/de-ge/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
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
          description: "Eine Witze-teilende SaaS-Plattform, die Humor auf Abruf liefert.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/10_project/";
            },},{id: "projects-awareen",
          title: 'Awareen',
          description: "Eine Bildschirmzeit-Bewusstseins-App mit persistentem Overlay-Timer für bewusste Gerätenutzung.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/11_project/";
            },},{id: "projects-knowledge-tree",
          title: 'Knowledge Tree',
          description: "Minimalistisches graph-basiertes Wissensmanagementsystem inspiriert von Zettelkasten. Visualisiere und vernetze deine Gedanken interaktiv.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/12_project/";
            },},{id: "projects-tatask",
          title: 'TATASk',
          description: "Eine innovative Plattform zur Verwaltung täglicher Aufgaben und Aktivitäten.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/1_project/";
            },},{id: "projects-morner-bot",
          title: 'Morner Bot',
          description: "Telegram-Bot zur Verfolgung von Morgenroutinen über Smartwatch, um Ablenkungen durch das Telefon zu minimieren.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/2_project/";
            },},{id: "projects-ankara",
          title: 'Ankara',
          description: "Ein interaktives Tool, das verteilte Wiederholung und Randomisierung für effektives Vokabellernen nutzt.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/3_project/";
            },},{id: "projects-weatherornot",
          title: 'WeatherOrNot',
          description: "Ein Echtzeit-Temperaturüberwachungssystem mit ESP32, MQTT und einer Webanwendung.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/4_project/";
            },},{id: "projects-piracy-rpg",
          title: 'Piracy RPG',
          description: "Ein strategisches Seefahrt-Erkundungs- und Kampfspiel mit prozeduraler Generierung und fortgeschrittenen Software-Design-Mustern.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/5_project/";
            },},{id: "projects-galeriyah",
          title: 'GaleriYah',
          description: "Ein avantgardistisches Fotografie-Portfolio.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/7_project/";
            },},{id: "projects-archblocker",
          title: 'ArchBlocker',
          description: "Ein mächtiger Website-Blocker mit einer Retro-Terminal-Oberfläche zur Verwaltung digitaler Ablenkungen.",
          section: "Projekte",handler: () => {
              window.location.href = "/de-ge/projects/de-ge/8_project/";
            },},{id: "projects-robanization",
          title: 'Robanization',
          description: "Ein herausforderndes 2D-Plattformspiel mit prozeduraler Level-Generierung und dynamischen Hindernissen.",
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
          window.open("https://www.linkedin.com/in/andrei-gulinyo", "_blank");
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
