
const currentUrl = window.location.href;
const siteUrl = "https://Andebugulin.github.io"; 
let updatedUrl = currentUrl.replace("https://Andebugulin.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("pt-br".length > 0) {
  updatedUrl = updatedUrl.replace("/pt-br", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-sobre",
    title: "sobre",
    section: "Menu de navegação",
    handler: () => {
      window.location.href = "/pt-br/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "um tema simples para acadêmicos",
          section: "Menu de navegação",
          handler: () => {
            window.location.href = "/pt-br/blog/";
          },
        },{id: "nav-journal",
          title: "journal",
          description: "Here is my journal to have memories of my life!",
          section: "Menu de navegação",
          handler: () => {
            window.location.href = "/pt-br/journal/";
          },
        },{id: "nav-projetos",
          title: "projetos",
          description: "Uma crescente coleção de seus projetos interessantes.",
          section: "Menu de navegação",
          handler: () => {
            window.location.href = "/pt-br/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Menu de navegação",
          handler: () => {
            window.location.href = "/pt-br/cv/";
          },
        },{id: "post-central-cee-amp-dave-quot-sprinter-quot",
        
          title: "Central Cee &amp; Dave - &quot;Sprinter&quot;",
        
        description: "A review of my favorite song of 2023, &quot;Sprinter&quot; by Central Cee and Dave. A lot of bars.",
        section: "Postagens",
        handler: () => {
          
            window.location.href = "/pt-br/blog/2025/07/08/central-cee-dave-sprinter-review/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/pt-br/books/pt-br/the_godfather/";
            },},{id: "news-um-anúncio-simples-em-uma-linha",
          title: 'Um anúncio simples em uma linha.',
          description: "",
          section: "Novidades",},{id: "news-um-anúncio-longo-com-detalhes",
          title: 'Um anúncio longo com detalhes',
          description: "",
          section: "Novidades",handler: () => {
              window.location.href = "/pt-br/news/pt-br/announcement_2/";
            },},{id: "news-um-anúncio-simples-em-uma-linha-com-markdown-emoji-sparkles-smile",
          title: 'Um anúncio simples em uma linha com Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "Novidades",},{id: "projects-hahasaas",
          title: 'HaHaSaaS',
          description: "A joke-sharing SaaS platform that delivers humor on demand.",
          section: "Projetos",handler: () => {
              window.location.href = "/pt-br/projects/pt-br/10_project/";
            },},{id: "projects-tatask",
          title: 'TATASk',
          description: "An innovative platform for managing daily tasks and activities.",
          section: "Projetos",handler: () => {
              window.location.href = "/pt-br/projects/en-us/1_project/";
            },},{id: "projects-planirium-bot",
          title: 'Planirium Bot',
          description: "A streamlined Telegram bot for efficient daily planning and task management.",
          section: "Projetos",handler: () => {
              window.location.href = "/pt-br/projects/en-us/2_project/";
            },},{id: "projects-ankara",
          title: 'Ankara',
          description: "An interactive tool utilizing spaced repetition and randomization for effective vocabulary learning.",
          section: "Projetos",handler: () => {
              window.location.href = "/pt-br/projects/en-us/3_project/";
            },},{id: "projects-weatherornot",
          title: 'WeatherOrNot',
          description: "A real-time temperature monitoring system using ESP32, MQTT, and a web application.",
          section: "Projetos",handler: () => {
              window.location.href = "/pt-br/projects/pt-br/4_project/";
            },},{id: "projects-piracy-rpg",
          title: 'Piracy RPG',
          description: "A strategic naval exploration and combat game with procedural generation and advanced software design patterns.",
          section: "Projetos",handler: () => {
              window.location.href = "/pt-br/projects/pt-br/5_project/";
            },},{id: "projects-galeriyah",
          title: 'GaleriYah',
          description: "An avant-garde photography portfolio.",
          section: "Projetos",handler: () => {
              window.location.href = "/pt-br/projects/pt-br/7_project/";
            },},{id: "projects-archblocker",
          title: 'ArchBlocker',
          description: "A powerful website blocker with a retro terminal interface for managing digital distractions.",
          section: "Projetos",handler: () => {
              window.location.href = "/pt-br/projects/pt-br/8_project/";
            },},{id: "projects-robanization",
          title: 'Robanization',
          description: "A challenging 2D platformer game with procedural level generation and dynamic obstacles.",
          section: "Projetos",handler: () => {
              window.location.href = "/pt-br/projects/pt-br/9_project/";
            },},{id: "projects-projeto-1",
          title: 'projeto 1',
          description: "com imagem de fundo",
          section: "Projetos",handler: () => {
              window.location.href = "/pt-br/projects/pt-br/1_project/";
            },},{id: "projects-projeto-2",
          title: 'projeto 2',
          description: "um projeto com imagem de fundo e comentários do giscus",
          section: "Projetos",handler: () => {
              window.location.href = "/pt-br/projects/pt-br/2_project/";
            },},{id: "projects-projeto-3-com-um-nome-bem-longo",
          title: 'projeto 3 com um nome bem longo',
          description: "um projeto que redireciona pra outro website",
          section: "Projetos",handler: () => {
              window.location.href = "/pt-br/projects/pt-br/3_project/";
            },},{
        id: 'social-email',
        title: 'Enviar um email',
        section: 'Redes sociais',
        handler: () => {
          window.open("mailto:%61%6E%64%72%65%69%67%75%6C%69%6E%32%30%30%35@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Redes sociais',
        handler: () => {
          window.open("https://github.com/Andebugulin", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Redes sociais',
        handler: () => {
          window.open("https://www.kaggle.com/andreygulincodim", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Redes sociais',
        handler: () => {
          window.open("https://www.linkedin.com/in/andrei-gulin", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'Idiomas',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Muda o tema para claro',
      description: 'Muda o tema do site para claro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Muda o tema para escuro',
      description: 'Muda o tema do site para escuro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Usa o tema padrão do sistema',
      description: 'Muda o tema do site para o padrão do sistema',
      section: 'Tema',
      handler: () => {
        setThemeSetting("system");
      },
    },];
