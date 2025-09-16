
const currentUrl = window.location.href;
const siteUrl = "https://Andebugulin.github.io"; 
let updatedUrl = currentUrl.replace("https://Andebugulin.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("fi".length > 0) {
  updatedUrl = updatedUrl.replace("/fi", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-tietoja",
    title: "tietoja",
    section: "Navigointivalikko",
    handler: () => {
      window.location.href = "/fi/";
    },
  },{id: "nav-blogi",
          title: "blogi",
          description: "blogissa",
          section: "Navigointivalikko",
          handler: () => {
            window.location.href = "/fi/page/:num/";
          },
        },{id: "nav-päiväkirja",
          title: "päiväkirja",
          description: "Tässä on päiväkirjani elämäni muistojen säilyttämiseksi!",
          section: "Navigointivalikko",
          handler: () => {
            window.location.href = "/fi/journal/";
          },
        },{id: "nav-projektit",
          title: "projektit",
          description: "Kasvava kokoelma minun/meidän hienoja projekteja.",
          section: "Navigointivalikko",
          handler: () => {
            window.location.href = "/fi/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigointivalikko",
          handler: () => {
            window.location.href = "/fi/cv/";
          },
        },{id: "post-central-cee-amp-dave-quot-sprinter-quot",
        
          title: "Central Cee &amp; Dave - &quot;Sprinter&quot;",
        
        description: "A review of my favorite song of 2023, &quot;Sprinter&quot; by Central Cee and Dave. A lot of bars.",
        section: "Julkaisut",
        handler: () => {
          
            window.location.href = "/fi/blog/2025/07/08/central-cee-dave-sprinter-review/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/fi/books/en-us/the_godfather/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/fi/books/pt-br/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "Uutiset",},{id: "news-um-anúncio-simples-em-uma-linha",
          title: 'Um anúncio simples em uma linha.',
          description: "",
          section: "Uutiset",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "Uutiset",handler: () => {
              window.location.href = "/fi/news/announcement_2/";
            },},{id: "news-um-anúncio-longo-com-detalhes",
          title: 'Um anúncio longo com detalhes',
          description: "",
          section: "Uutiset",handler: () => {
              window.location.href = "/fi/news/pt-br/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "Uutiset",},{id: "news-um-anúncio-simples-em-uma-linha-com-markdown-emoji-sparkles-smile",
          title: 'Um anúncio simples em uma linha com Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "Uutiset",},{id: "projects-hahasaas",
          title: 'HaHaSaaS',
          description: "Vitsien jakamisen SaaS-alusta, joka tarjoaa huumoria pyynnöstä.",
          section: "Projektit",handler: () => {
              window.location.href = "/fi/projects/fi/10_project/";
            },},{id: "projects-awareen",
          title: 'Awareen',
          description: "Ruutuajan tietoisuussovellus pysyvällä päällysajastimella tietoista laitteen käyttöä varten.",
          section: "Projektit",handler: () => {
              window.location.href = "/fi/projects/fi/11_project/";
            },},{id: "projects-tatask",
          title: 'TATASk',
          description: "Innovatiivinen alusta päivittäisten tehtävien ja aktiviteettien hallintaan.",
          section: "Projektit",handler: () => {
              window.location.href = "/fi/projects/fi/1_project/";
            },},{id: "projects-planirium-bot",
          title: 'Planirium Bot',
          description: "Virtaviivainen Telegram-botti tehokkaaseen päivittäiseen suunnitteluun ja tehtävien hallintaan.",
          section: "Projektit",handler: () => {
              window.location.href = "/fi/projects/fi/2_project/";
            },},{id: "projects-ankara",
          title: 'Ankara',
          description: "Interaktiivinen työkalu, joka hyödyntää kertausjärjestelmää ja satunnaistamista tehokkaaseen sanaston oppimiseen.",
          section: "Projektit",handler: () => {
              window.location.href = "/fi/projects/fi/3_project/";
            },},{id: "projects-weatherornot",
          title: 'WeatherOrNot',
          description: "Reaaliaikainen lämpötilanseurantajärjestelmä käyttäen ESP32:ta, MQTT:tä ja web-sovellusta.",
          section: "Projektit",handler: () => {
              window.location.href = "/fi/projects/fi/4_project/";
            },},{id: "projects-piracy-rpg",
          title: 'Piracy RPG',
          description: "Strateginen merimatkailu- ja taistelupeli proseduraalisella tasojen luomisella ja edistyneillä ohjelmistosuunnittelumalleilla.",
          section: "Projektit",handler: () => {
              window.location.href = "/fi/projects/fi/5_project/";
            },},{id: "projects-galeriyah",
          title: 'GaleriYah',
          description: "An avant-garde photography portfolio.",
          section: "Projektit",handler: () => {
              window.location.href = "/fi/projects/fi/7_project/";
            },},{id: "projects-archblocker",
          title: 'ArchBlocker',
          description: "Tehokas verkkosivujen esto-ohjelma retro-terminaaliliittymällä digitaalisten häiriötekijöiden hallintaan.",
          section: "Projektit",handler: () => {
              window.location.href = "/fi/projects/fi/8_project/";
            },},{id: "projects-robanization",
          title: 'Robanization',
          description: "Haastava 2D-tasohyppelypeli proseduraalisella tasojen luomisella ja dynaamisilla esteillä.",
          section: "Projektit",handler: () => {
              window.location.href = "/fi/projects/fi/9_project/";
            },},{
        id: 'social-email',
        title: 'Lähetä sähköposti',
        section: 'Sosiaalinen media',
        handler: () => {
          window.open("mailto:%61%6E%64%72%65%69%67%75%6C%69%6E%32%30%30%35@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Sosiaalinen media',
        handler: () => {
          window.open("https://github.com/Andebugulin", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Sosiaalinen media',
        handler: () => {
          window.open("https://www.kaggle.com/andreygulincodim", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Sosiaalinen media',
        handler: () => {
          window.open("https://www.linkedin.com/in/andrei-gulinyo", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'Kielet',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
          id: 'lang-ru',
          title: 'ru',
          section: 'Kielet',
          handler: () => {
            window.location.href = "/ru" + updatedUrl;
          },
        },{
          id: 'lang-de-ge',
          title: 'de-ge',
          section: 'Kielet',
          handler: () => {
            window.location.href = "/de-ge" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Vaihda teema vaaleaksi',
      description: 'Vaihda sivuston teema vaaleaksi',
      section: 'Teema',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Vaihda teema tummaksi',
      description: 'Vaihda sivuston teema tummaksi',
      section: 'Teema',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Käytä järjestelmän oletusteemaa',
      description: 'Vaihda sivuston teema järjestelmän oletukseksi',
      section: 'Teema',
      handler: () => {
        setThemeSetting("system");
      },
    },];
