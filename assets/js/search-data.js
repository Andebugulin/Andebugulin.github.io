
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
  },{id: "nav-blog",
          title: "blog",
          description: "on da blog",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-journal",
          title: "journal",
          description: "Here is my journal to have memories of my life!",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/journal/";
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
        },{id: "post-central-cee-amp-dave-quot-sprinter-quot",
        
          title: "Central Cee &amp; Dave - &quot;Sprinter&quot;",
        
        description: "A review of my favorite song of 2023, &quot;Sprinter&quot; by Central Cee and Dave. A lot of bars.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/07/08/central-cee-dave-sprinter-review/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/books/en-us/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-hahasaas",
          title: 'HaHaSaaS',
          description: "A joke-sharing SaaS platform that delivers humor on demand.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/10_project/";
            },},{id: "projects-tatask",
          title: 'TATASk',
          description: "An innovative platform for managing daily tasks and activities.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/1_project/";
            },},{id: "projects-planirium-bot",
          title: 'Planirium Bot',
          description: "A streamlined Telegram bot for efficient daily planning and task management.",
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
            },},{id: "projects-projeto-1",
          title: 'projeto 1',
          description: "com imagem de fundo",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pt-br/1_project/";
            },},{id: "projects-projeto-2",
          title: 'projeto 2',
          description: "um projeto com imagem de fundo e comentários do giscus",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pt-br/2_project/";
            },},{id: "projects-projeto-3-com-um-nome-bem-longo",
          title: 'projeto 3 com um nome bem longo',
          description: "um projeto que redireciona pra outro website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pt-br/3_project/";
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
          window.open("https://www.linkedin.com/in/andrei-gulin", "_blank");
        },
      },{
          id: 'lang-pt-br',
          title: 'pt-br',
          section: 'Languages',
          handler: () => {
            window.location.href = "/pt-br" + updatedUrl;
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
