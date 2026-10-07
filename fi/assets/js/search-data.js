
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
  },{id: "nav-päiväkirja",
          title: "päiväkirja",
          description: "Tässä on päiväkirjani elämäni muistojen säilyttämiseksi!",
          section: "Navigointivalikko",
          handler: () => {
            window.location.href = "/fi/journal/";
          },
        },{id: "nav-opinnäytetyö",
          title: "opinnäytetyö",
          description: "",
          section: "Navigointivalikko",
          handler: () => {
            window.location.href = "/fi/thesis/";
          },
        },{id: "nav-projektit",
          title: "projektit",
          description: "Asioita, jotka olen suunnitellut, rakentanut ja julkaissut. Useimpia käytän itse joka päivä.",
          section: "Navigointivalikko",
          handler: () => {
            window.location.href = "/fi/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigointivalikko",
          handler: () => {
            window.location.href = "/fi/cv/";
          },
        },{id: "post-learning-journal-2025-10-06-y-m-d-webassembly-history-amp-concepts",
        
          title: "Learning Journal — 2025-10-06 (y/m/d): WebAssembly History &amp; Concepts",
        
        description: "Notes, reflections, and rough experiments on WebAssembly, asm.js, and related tooling.",
        section: "Julkaisut",
        handler: () => {
          
            window.location.href = "/fi/blog/2025/10/06/learning-2025-10-05-webassembly/";
          
        },
      },{id: "post-central-cee-amp-dave-quot-sprinter-quot",
        
          title: "Central Cee &amp; Dave - &quot;Sprinter&quot;",
        
        description: "A review of my favorite song of 2023, &quot;Sprinter&quot; by Central Cee and Dave. A lot of bars.",
        section: "Julkaisut",
        handler: () => {
          
            window.location.href = "/fi/blog/2025/07/08/central-cee-dave-sprinter-review/";
          
        },
      },{id: "post-everyday-journal",
        
          title: "Everyday Journal",
        
        description: "I struggle as everybody and I try to learn something new every day. Here are my notes.",
        section: "Julkaisut",
        handler: () => {
          
            window.location.href = "/fi/blog/1000/10/06/life-journal/";
          
        },
      },{id: "post-learning-journal-1000-10-10-y-m-d-webassembly-history-amp-concepts",
        
          title: "Learning Journal — 1000-10-10 (y/m/d): WebAssembly History &amp; Concepts",
        
        description: "Notes, reflections, and rough experiments on WebAssembly, asm.js, and related tooling.",
        section: "Julkaisut",
        handler: () => {
          
            window.location.href = "/fi/blog/1000/10/05/learning-2025-10-05-webassembly/";
          
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
          description: "Vitsienjakopalvelu: Go-rajapinta, React-käyttöliittymä ja PostgreSQL, julkaistu Dockerilla.",
          section: "Projektit",handler: () => {
              window.location.href = "/fi/projects/fi/10_project/";
            },},{id: "projects-awareen",
          title: 'Awareen',
          description: "Hiljainen ajastin jokaisen sovelluksen päällä, joka näyttää, kuinka kauan olet ollut puhelimella tänään. Ei estoja, ei mainoksia, ei internet-lupaa.",
          section: "Projektit",handler: () => {
              window.location.href = "/fi/projects/fi/11_project/";
            },},{id: "projects-knowledge-tree",
          title: 'Knowledge Tree',
          description: "Muistiinpanot verkkona Zettelkastenin hengessä. Jokainen muistiinpano on solmu, jota voi linkittää, hakea ja selata näppäimistöllä.",
          section: "Projektit",handler: () => {
              window.location.href = "/fi/projects/fi/12_project/";
            },},{id: "projects-wordor",
          title: 'Wordor',
          description: "Kääntäjä, joka tekee jokaisesta hausta sanakortin ja tuo sen takaisin kertausjärjestelmällä.",
          section: "Projektit",handler: () => {
              window.location.href = "/fi/projects/fi/13_project/";
            },},{id: "projects-nfcguard",
          title: 'nfcGuard',
          description: "Estää häiritsevät sovellukset, kunnes kosketat fyysistä NFC-tagia. Pidä tagi hankalassa paikassa, niin Instagramin avaaminen maksaa kävelyn.",
          section: "Projektit",handler: () => {
              window.location.href = "/fi/projects/fi/14_project/";
            },},{id: "projects-tatask",
          title: 'TATASk',
          description: "Opintojen tiimiprojektina tehty tehtävä- ja aktiviteettiseuranta, jonka tilastot näyttävät, mihin viikko meni.",
          section: "Projektit",handler: () => {
              window.location.href = "/fi/projects/fi/1_project/";
            },},{id: "projects-morner-bot",
          title: 'Morner Bot',
          description: "Telegram-botti, joka seuraa aamurutiinia älykellosta, jotta puhelin voi jäädä toiseen huoneeseen.",
          section: "Projektit",handler: () => {
              window.location.href = "/fi/projects/fi/2_project/";
            },},{id: "projects-ankara",
          title: 'Ankara',
          description: "Sanastokortit kertausjärjestelmällä, satunnaisella järjestyksellä ja puhesynteesillä.",
          section: "Projektit",handler: () => {
              window.location.href = "/fi/projects/fi/3_project/";
            },},{id: "projects-weatherornot",
          title: 'WeatherOrNot',
          description: "Huoneen lämpötila reaaliajassa ESP32-anturilta MQTT:n kautta verkkonäkymään.",
          section: "Projektit",handler: () => {
              window.location.href = "/fi/projects/fi/4_project/";
            },},{id: "projects-piracy-rpg",
          title: 'Piracy RPG',
          description: "Merenkulku- ja taistelupeli proseduraalisilla kartoilla, kirjoitettu klassisten suunnittelumallien harjoitteluun.",
          section: "Projektit",handler: () => {
              window.location.href = "/fi/projects/fi/5_project/";
            },},{id: "projects-galeriyah",
          title: 'GaleriYah',
          description: "Valokuvaportfolio epätavallisella, galleriakeskeisellä asettelulla.",
          section: "Projektit",handler: () => {
              window.location.href = "/fi/projects/fi/7_project/";
            },},{id: "projects-archblocker",
          title: 'ArchBlocker',
          description: "Järjestelmätasolla toimiva verkkosivujen estäjä Arch Linuxille, terminaalityylisellä ohjauspaneelilla.",
          section: "Projektit",handler: () => {
              window.location.href = "/fi/projects/fi/8_project/";
            },},{id: "projects-robanization",
          title: 'Robanization',
          description: "2D-tasohyppely proseduraalisesti luoduilla tasoilla ja liikkuvilla esteillä.",
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
          window.open("https://www.linkedin.com/in/andrei-gulin", "_blank");
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
