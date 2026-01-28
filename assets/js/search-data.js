
const currentUrl = window.location.href;
const siteUrl = "https://Andebugulin.github.io"; 
let updatedUrl = currentUrl.replace("https://Andebugulin.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-journal",
          title: "journal",
          description: "Here is my journal to have memories of my life!",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/journal/";
          },
        },{id: "nav-thesis",
          title: "thesis",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/thesis/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my/our cool projects.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-learning-journal-2025-10-06-y-m-d-webassembly-history-amp-concepts",
        
          title: "Learning Journal — 2025-10-06 (y/m/d): WebAssembly History &amp; Concepts",
        
        description: "Notes, reflections, and rough experiments on WebAssembly, asm.js, and related tooling.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/10/06/learning-2025-10-05-webassembly/";
          
        },
      },{id: "post-central-cee-amp-dave-quot-sprinter-quot",
        
          title: "Central Cee &amp; Dave - &quot;Sprinter&quot;",
        
        description: "A review of my favorite song of 2023, &quot;Sprinter&quot; by Central Cee and Dave. A lot of bars.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/07/08/central-cee-dave-sprinter-review/";
          
        },
      },{id: "post-everyday-journal",
        
          title: "Everyday Journal",
        
        description: "I struggle as everybody and I try to learn something new every day. Here are my notes.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/1000/10/06/life-journal/";
          
        },
      },{id: "post-learning-journal-1000-10-10-y-m-d-webassembly-history-amp-concepts",
        
          title: "Learning Journal — 1000-10-10 (y/m/d): WebAssembly History &amp; Concepts",
        
        description: "Notes, reflections, and rough experiments on WebAssembly, asm.js, and related tooling.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/1000/10/05/learning-2025-10-05-webassembly/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/books/en-us/the_godfather/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/books/pt-br/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-um-anúncio-simples-em-uma-linha",
          title: 'Um anúncio simples em uma linha.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-um-anúncio-longo-com-detalhes",
          title: 'Um anúncio longo com detalhes',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/pt-br/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-um-anúncio-simples-em-uma-linha-com-markdown-emoji-sparkles-smile",
          title: 'Um anúncio simples em uma linha com Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-hahasaas",
          title: 'HaHaSaaS',
          description: "A joke-sharing SaaS platform that delivers humor on demand.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/10_project/";
            },},{id: "projects-awareen",
          title: 'Awareen',
          description: "A screen time awareness app with persistent overlay timer for mindful device usage.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/11_project/";
            },},{id: "projects-knowledge-tree",
          title: 'Knowledge Tree',
          description: "Minimalist graph-based knowledge management system inspired by Zettelkasten. Visualize and connect your thoughts in an interactive network.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/12_project/";
            },},{id: "projects-tatask",
          title: 'TATASk',
          description: "An innovative platform for managing daily tasks and activities.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/1_project/";
            },},{id: "projects-morner-bot",
          title: 'Morner Bot',
          description: "Telegram bot for morning routine tracking via smartwatch to minimize phone distractions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/2_project/";
            },},{id: "projects-ankara",
          title: 'Ankara',
          description: "An interactive tool utilizing spaced repetition and randomization for effective vocabulary learning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/3_project/";
            },},{id: "projects-weatherornot",
          title: 'WeatherOrNot',
          description: "A real-time temperature monitoring system using ESP32, MQTT, and a web application.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/4_project/";
            },},{id: "projects-piracy-rpg",
          title: 'Piracy RPG',
          description: "A strategic naval exploration and combat game with procedural generation and advanced software design patterns.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/5_project/";
            },},{id: "projects-galeriyah",
          title: 'GaleriYah',
          description: "An avant-garde photography portfolio.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/7_project/";
            },},{id: "projects-archblocker",
          title: 'ArchBlocker',
          description: "A powerful website blocker with a retro terminal interface for managing digital distractions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/8_project/";
            },},{id: "projects-robanization",
          title: 'Robanization',
          description: "A challenging 2D platformer game with procedural level generation and dynamic obstacles.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/9_project/";
            },},{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6E%64%72%65%69%67%75%6C%69%6E%32%30%30%35@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Andebugulin", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/andreygulincodim", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/andrei-gulinyo", "_blank");
        },
      },{
          id: 'lang-ru',
          title: 'ru',
          section: 'Languages',
          handler: () => {
            window.location.href = "/ru" + updatedUrl;
          },
        },{
          id: 'lang-de-ge',
          title: 'de-ge',
          section: 'Languages',
          handler: () => {
            window.location.href = "/de-ge" + updatedUrl;
          },
        },{
          id: 'lang-fi',
          title: 'fi',
          section: 'Languages',
          handler: () => {
            window.location.href = "/fi" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
