
const currentUrl = window.location.href;
const siteUrl = "https://Andebugulin.github.io"; 
let updatedUrl = currentUrl.replace("https://Andebugulin.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("ru".length > 0) {
  updatedUrl = updatedUrl.replace("/ru", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-обо-мне",
    title: "обо мне",
    section: "Меню навигации",
    handler: () => {
      window.location.href = "/ru/";
    },
  },{id: "nav-блог",
          title: "блог",
          description: "на блоге",
          section: "Меню навигации",
          handler: () => {
            window.location.href = "/ru/blog/";
          },
        },{id: "nav-журнал",
          title: "журнал",
          description: "Мои записи и моменты жизни",
          section: "Меню навигации",
          handler: () => {
            window.location.href = "/ru/journal/";
          },
        },{id: "nav-проекты",
          title: "проекты",
          description: "Здесь мои проекты))",
          section: "Меню навигации",
          handler: () => {
            window.location.href = "/ru/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Меню навигации",
          handler: () => {
            window.location.href = "/ru/cv/";
          },
        },{id: "post-central-cee-amp-dave-quot-sprinter-quot",
        
          title: "Central Cee &amp; Dave - &quot;Sprinter&quot;",
        
        description: "A review of my favorite song of 2023, &quot;Sprinter&quot; by Central Cee and Dave. A lot of bars.",
        section: "Посты",
        handler: () => {
          
            window.location.href = "/ru/blog/2025/07/08/central-cee-dave-sprinter-review/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/ru/books/en-us/the_godfather/";
            },},{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/ru/books/pt-br/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "Новости",},{id: "news-um-anúncio-simples-em-uma-linha",
          title: 'Um anúncio simples em uma linha.',
          description: "",
          section: "Новости",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "Новости",handler: () => {
              window.location.href = "/ru/news/announcement_2/";
            },},{id: "news-um-anúncio-longo-com-detalhes",
          title: 'Um anúncio longo com detalhes',
          description: "",
          section: "Новости",handler: () => {
              window.location.href = "/ru/news/pt-br/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "Новости",},{id: "news-um-anúncio-simples-em-uma-linha-com-markdown-emoji-sparkles-smile",
          title: 'Um anúncio simples em uma linha com Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "Новости",},{id: "projects-hahasaas",
          title: 'HaHaSaaS',
          description: "Платформа SaaS для обмена шутками, доставляющая юмор по запросу.",
          section: "Проекты",handler: () => {
              window.location.href = "/ru/projects/ru/10_project/";
            },},{id: "projects-awareen",
          title: 'Awareen',
          description: "Приложение для осознанного использования экранного времени с постоянным таймером наложения.",
          section: "Проекты",handler: () => {
              window.location.href = "/ru/projects/ru/11_project/";
            },},{id: "projects-tatask",
          title: 'TATASk',
          description: "Инновационная платформа для управления повседневными задачами и активностями.",
          section: "Проекты",handler: () => {
              window.location.href = "/ru/projects/ru/1_project/";
            },},{id: "projects-planirium-bot",
          title: 'Planirium Bot',
          description: "Удобный Telegram-бот для эффективного ежедневного планирования и управления задачами.",
          section: "Проекты",handler: () => {
              window.location.href = "/ru/projects/ru/2_project/";
            },},{id: "projects-ankara",
          title: 'Ankara',
          description: "Интерактивный инструмент, использующий интервальное повторение и рандомизацию для эффективного изучения словарного запаса.",
          section: "Проекты",handler: () => {
              window.location.href = "/ru/projects/ru/3_project/";
            },},{id: "projects-weatherornot",
          title: 'WeatherOrNot',
          description: "Система мониторинга температуры в реальном времени с использованием ESP32, MQTT и веб-приложения.",
          section: "Проекты",handler: () => {
              window.location.href = "/ru/projects/ru/4_project/";
            },},{id: "projects-piracy-rpg",
          title: 'Piracy RPG',
          description: "Стратегическая игра о морских исследованиях и сражениях с процедурной генерацией и современными паттернами проектирования.",
          section: "Проекты",handler: () => {
              window.location.href = "/ru/projects/ru/5_project/";
            },},{id: "projects-galeriyah",
          title: 'GaleriYah',
          description: "Авангардное портфолио фотографий.",
          section: "Проекты",handler: () => {
              window.location.href = "/ru/projects/ru/7_project/";
            },},{id: "projects-archblocker",
          title: 'ArchBlocker',
          description: "Мощный блокировщик сайтов с ретро-интерфейсом терминала для управления цифровыми отвлечениями.",
          section: "Проекты",handler: () => {
              window.location.href = "/ru/projects/ru/8_project/";
            },},{id: "projects-robanization",
          title: 'Robanization',
          description: "Сложная 2D платформер-игра с процедурной генерацией уровней и динамическими препятствиями.",
          section: "Проекты",handler: () => {
              window.location.href = "/ru/projects/ru/9_project/";
            },},{
        id: 'social-email',
        title: 'Отправить email',
        section: 'Социальные сети',
        handler: () => {
          window.open("mailto:%61%6E%64%72%65%69%67%75%6C%69%6E%32%30%30%35@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Социальные сети',
        handler: () => {
          window.open("https://github.com/Andebugulin", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Социальные сети',
        handler: () => {
          window.open("https://www.kaggle.com/andreygulincodim", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Социальные сети',
        handler: () => {
          window.open("https://www.linkedin.com/in/andrei-gulinyo", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'Языки',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
          id: 'lang-de-ge',
          title: 'de-ge',
          section: 'Языки',
          handler: () => {
            window.location.href = "/de-ge" + updatedUrl;
          },
        },{
          id: 'lang-fi',
          title: 'fi',
          section: 'Языки',
          handler: () => {
            window.location.href = "/fi" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Переключить на светлую тему',
      description: 'Переключает тему сайта на светлую',
      section: 'Тема',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Переключить на темную тему',
      description: 'Переключает тему сайта на темную',
      section: 'Тема',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Использовать системную тему по умолчанию',
      description: 'Переключает тему сайта на системную по умолчанию',
      section: 'Тема',
      handler: () => {
        setThemeSetting("system");
      },
    },];
