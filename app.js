const STORAGE_KEYS = {
  language: "resume-language",
  theme: "resume-theme",
};

const DEFAULT_LANGUAGE = "en";
const SUPPORTED_LANGUAGES = ["en", "fr", "ru"];

const content = {
  en: {
    pageTitle: "Sergey Bayraktar | WordPress Developer",
    brand: {
      full: "LIPOVANTOR",
      short: "L",
    },
    controls: {
      languageToggleLabel: "Toggle language list",
      closeModalLabel: "Close image preview",
      previewTitle: "Preview",
    },
    nav: {
      toggleLabel: "Toggle navigation menu",
      about: "About",
      skills: "Skills",
      education: "Education",
      experience: "Experience",
      contact: "Contact",
    },
    a11y: {
      skipLink: "Skip to content",
    },
    theme: {
      toggleTextDark: "Dark theme",
      toggleTextLight: "Light theme",
      toggleLabelDark: "Switch to light theme",
      toggleLabelLight: "Switch to dark theme",
    },
    hero: {
      roleShort: "WordPress Developer",
      eyebrow: "WordPress Developer",
      name: "Sergey Bayraktar",
      lead:
        "Building custom WordPress and WooCommerce websites with clean front-end, practical UX, and long-term support.",
      contactCta: "Contact me",
      workCta: "View experience",
      photoBadge: "Photo area",
      photoAlt: "Portrait of Sergey Bayraktar",
      photoHint: "Add your portrait here later",
      meta: {
        currentRole: "Middle WordPress Developer at GoIT",
        location: "Available for remote collaboration",
        stack: "Commercial experience in web design",
      },
    },
    section: {
      aboutEyebrow: "Profile",
      aboutTitle: "About",
      skillsEyebrow: "Expertise",
      skillsTitle: "Skills",
      educationEyebrow: "Learning",
      educationTitle: "Education",
      experienceEyebrow: "Career",
      experienceTitle: "Experience",
      contactEyebrow: "Connect",
      contactTitle: "Contact",
    },
    skills: {
      hardTitle: "Key skills",
      softTitle: "Soft skills",
      hard: [
        "HTML",
        "CSS (SCSS)",
        "BEM",
        "Flexbox",
        "Grid",
        "JavaScript (jQuery)",
        "PHP",
        "WordPress (Woo)",
        "MySQL",
        "npm",
        "Gulp",
        "Git",
        "Figma",
      ],
      soft: [
        "Clear communication",
        "Attention to detail",
        "Responsibility",
        "Structured thinking",
        "Problem solving",
        "Team collaboration",
        "Adaptability",
        "Client focus",
      ],
    },
    about: {
      copy:
        "I am a WordPress developer focused on custom themes, redesign work, and improving existing websites. I also have web design experience, which helps me create cleaner interfaces and make better visual decisions. I value readable code and stable delivery without unnecessary complexity.",
    },
    contact: {
      emailLabel: "Email",
      telegramLabel: "Telegram",
      phoneLabel: "Phone",
    },
    education: [
      {
        title: "Odessa National Academy of Food Technologies",
        meta: "2004 - 2009",
        copy: "Engineer-technologist in winemaking industry.",
        image: "./images/diploma/onapt.webp",
        imageAlt: "Diploma from Odessa National Academy of Food Technologies",
      },
      {
        title: 'Front-End + Angular Basics, "BelHard"',
        meta: "2019, Minsk",
        copy: "Front-end training with a focus on layout fundamentals and Angular basics.",
        image: "./images/diploma/belhard.webp",
        imageAlt: 'Certificate for Front-End + Angular Basics from "BelHard"',
      },
      {
        title: 'Front-End Pro, "Hillel"',
        meta: "2019, Odesa",
        copy: "Advanced front-end course with certificate.",
        image: "./images/diploma/hillel.webp",
        imageAlt: 'Certificate for Front-End Pro from "Hillel"',
      },
    ],
    experience: [
      {
        title: "Middle WordPress Developer, GoIT",
        meta: "September 2023 - Present",
        companyName: "GoIT",
        companyUrl: "https://goit.global/",
        copy:
          "Developing a custom theme for the main GoITeens website and the GoITeens School website, continuously working on redesigns and improvements, and creating and updating conversion landing pages.",
        work: [
          {
            text: "GoITeens main website",
            url: "https://goiteens.com/",
          },
          {
            text: "GoITeens School",
            url: "https://school.goiteens.com/",
          },
        ],
      },
      {
        title: "WordPress Developer, EcDev",
        meta: "June 2021 - October 2023",
        companyName: "EcDev",
        companyUrl: "https://www.ecdevstudio.com/",
        copy:
          "Built WordPress and WooCommerce websites, improved existing functionality, and maintained client projects.",
        work: [
          {
            text: "Sammamish Mortgage",
            url: "https://www.sammamishmortgage.com/",
          },
          {
            text: "Rise Construction",
            url: "https://riseconstructiontx.com",
          },
          {
            text: "GunfightersINC",
            url: "https://gunfightersinc.com/",
          },
          {
            text: "Picup Media",
            url: "https://picupmedia.com/",
          },
        ],
      },
      {
        title: "Layout Developer for Angular, DeepInspire",
        meta: "November 2021 - March 2022",
        companyName: "DeepInspire",
        companyUrl: "https://deepinspire.com/",
        copy:
          "Worked on layout and assisted with front-end development for two large trading platforms.",
        work: [
          {
            text: "Tokenise Brokerage",
            url: "https://www.tokenise.io/",
          },
          {
            text: "Tokenise Exchange",
            url: "https://tokenisestock.exchange/",
          },
        ],
      },
      {
        title: "WordPress Developer, Coelix",
        meta: "April 2021 - August 2021",
        companyName: "Coelix",
        companyUrl: "https://jobs.dou.ua/companies/coelix/",
        copy:
          "Developed WordPress and WooCommerce websites, added features, and supported launched products.",
        work: [
          {
            text: "Gamezo",
            url: "https://gamezo.gg/",
          },
        ],
      },
      {
        title: 'Web Developer, Studio "Mart"',
        meta: "October 2020 - April 2021",
        companyName: "Mart",
        companyUrl: "https://mart.com.ua/",
        copy:
          "Created WordPress websites and web applications, integrated designs into WordPress, and improved active projects.",
        work: [
          {
            text: "AFGroup",
            url: "https://a-f.com.ua/",
          },
          {
            text: "Mitridat",
            url: "https://www.mitridat.odessa.ua/",
          },
          {
            text: "Vedanta",
            url: "https://vedanta-auto.com.ua/",
          },
        ],
      },
    ],
  },
  fr: {
    pageTitle: "Sergey Bayraktar | Developpeur WordPress",
    brand: {
      full: "LIPOVANTOR",
      short: "L",
    },
    controls: {
      languageToggleLabel: "Afficher ou masquer la liste des langues",
      closeModalLabel: "Fermer l'aperçu de l'image",
      previewTitle: "Apercu",
    },
    nav: {
      toggleLabel: "Afficher ou masquer le menu",
      about: "A propos",
      skills: "Competences",
      education: "Formation",
      experience: "Experience",
      contact: "Contact",
    },
    a11y: {
      skipLink: "Aller au contenu",
    },
    theme: {
      toggleTextDark: "Theme sombre",
      toggleTextLight: "Theme clair",
      toggleLabelDark: "Passer au theme clair",
      toggleLabelLight: "Passer au theme sombre",
    },
    hero: {
      roleShort: "Developpeur WordPress",
      eyebrow: "Developpeur WordPress",
      name: "Sergey Bayraktar",
      lead:
        "Je cree des sites WordPress et WooCommerce sur mesure avec un front-end propre, une UX pratique et un support durable.",
      contactCta: "Me contacter",
      workCta: "Voir l'experience",
      photoBadge: "Zone photo",
      photoAlt: "Portrait de Sergey Bayraktar",
      photoHint: "Ajoutez votre portrait ici plus tard",
      meta: {
        currentRole: "Middle WordPress Developer chez GoIT",
        location: "Disponible pour une collaboration a distance",
        stack: "Experience commerciale en web design",
      },
    },
    section: {
      aboutEyebrow: "Profil",
      aboutTitle: "A propos",
      skillsEyebrow: "Expertise",
      skillsTitle: "Competences",
      educationEyebrow: "Formation",
      educationTitle: "Formation",
      experienceEyebrow: "Carriere",
      experienceTitle: "Experience",
      contactEyebrow: "Contact",
      contactTitle: "Contact",
    },
    skills: {
      hardTitle: "Competences cles",
      softTitle: "Soft skills",
      hard: [
        "HTML",
        "CSS (SCSS)",
        "BEM",
        "Flexbox",
        "Grid",
        "JavaScript (jQuery)",
        "PHP",
        "WordPress (Woo)",
        "MySQL",
        "npm",
        "Gulp",
        "Git",
        "Figma",
      ],
      soft: [
        "Communication claire",
        "Attention aux details",
        "Sens des responsabilites",
        "Pensee structuree",
        "Resolution de problemes",
        "Travail en equipe",
        "Adaptabilite",
        "Orientation client",
      ],
    },
    about: {
      copy:
        "Je suis developpeur WordPress, specialise dans les themes sur mesure, les redesigns et l'amelioration de sites existants. J'ai aussi de l'experience en web design, ce qui m'aide a creer des interfaces plus propres et a prendre de meilleures decisions visuelles. J'accorde de l'importance a un code lisible et a une livraison stable sans complexite inutile.",
    },
    contact: {
      emailLabel: "Email",
      telegramLabel: "Telegram",
      phoneLabel: "Telephone",
    },
    education: [
      {
        title: "Academie nationale des technologies alimentaires d'Odessa",
        meta: "2004 - 2009",
        copy: "Ingenieur-technologue de l'industrie vinicole.",
        image: "./images/diploma/onapt.webp",
        imageAlt: "Diplome de l'Academie nationale des technologies alimentaires d'Odessa",
      },
      {
        title: 'Front-End + bases d\'Angular, "BelHard"',
        meta: "2019, Minsk",
        copy: "Formation front-end axee sur les fondamentaux de l'integration et les bases d'Angular.",
        image: "./images/diploma/belhard.webp",
        imageAlt: 'Certificat Front-End + bases d\'Angular de "BelHard"',
      },
      {
        title: 'Front-End Pro, "Hillel"',
        meta: "2019, Odessa",
        copy: "Cours avance de front-end avec certificat.",
        image: "./images/diploma/hillel.webp",
        imageAlt: 'Certificat Front-End Pro de "Hillel"',
      },
    ],
    experience: [
      {
        title: "Middle WordPress Developer, GoIT",
        meta: "Septembre 2023 - Aujourd'hui",
        companyName: "GoIT",
        companyUrl: "https://goit.global/",
        copy:
          "Developpement d'un theme sur mesure pour le site principal de GoITeens et le site de l'ecole GoITeens School, travail continu sur les redesigns et les ameliorations, creation et mise a jour de landing pages de conversion.",
        work: [
          {
            text: "Site principal GoITeens",
            url: "https://goiteens.com/",
          },
          {
            text: "GoITeens School",
            url: "https://school.goiteens.com/",
          },
        ],
      },
      {
        title: "Developpeur WordPress, EcDev",
        meta: "Juin 2021 - Octobre 2023",
        companyName: "EcDev",
        companyUrl: "https://www.ecdevstudio.com/",
        copy:
          "Creation de sites WordPress et WooCommerce, amelioration de fonctionnalites existantes et maintenance de projets clients.",
        work: [
          {
            text: "Sammamish Mortgage",
            url: "https://www.sammamishmortgage.com/",
          },
          {
            text: "Rise Construction",
            url: "https://riseconstructiontx.com",
          },
          {
            text: "GunfightersINC",
            url: "https://gunfightersinc.com/",
          },
          {
            text: "Picup Media",
            url: "https://picupmedia.com/",
          },
        ],
      },
      {
        title: "Developpeur d'integration pour Angular, DeepInspire",
        meta: "Novembre 2021 - Mars 2022",
        companyName: "DeepInspire",
        companyUrl: "https://deepinspire.com/",
        copy:
          "Participation a l'integration et a l'aide au developpement front-end de deux grandes plateformes de trading.",
        work: [
          {
            text: "Tokenise Brokerage",
            url: "https://www.tokenise.io/",
          },
          {
            text: "Tokenise Exchange",
            url: "https://tokenisestock.exchange/",
          },
        ],
      },
      {
        title: "Developpeur WordPress, Coelix",
        meta: "Avril 2021 - Aout 2021",
        companyName: "Coelix",
        companyUrl: "https://jobs.dou.ua/companies/coelix/",
        copy:
          "Developpement de sites WordPress et WooCommerce, ajout de fonctionnalites et support des produits deja lances.",
        work: [
          {
            text: "Gamezo",
            url: "https://gamezo.gg/",
          },
        ],
      },
      {
        title: 'Developpeur web, studio "Mart"',
        meta: "Octobre 2020 - Avril 2021",
        companyName: "Mart",
        companyUrl: "https://mart.com.ua/",
        copy:
          "Creation de sites et d'applications web sous WordPress, integration de maquettes et amelioration de projets actifs.",
        work: [
          {
            text: "AFGroup",
            url: "https://a-f.com.ua/",
          },
          {
            text: "Mitridat",
            url: "https://www.mitridat.odessa.ua/",
          },
          {
            text: "Vedanta",
            url: "https://vedanta-auto.com.ua/",
          },
        ],
      },
    ],
  },
  ru: {
    pageTitle: "Сергей Байрактар | WordPress разработчик",
    brand: {
      full: "LIPOVANTOR",
      short: "L",
    },
    controls: {
      languageToggleLabel: "Открыть или скрыть список языков",
      closeModalLabel: "Закрыть просмотр изображения",
      previewTitle: "Просмотр",
    },
    nav: {
      toggleLabel: "Открыть или скрыть меню навигации",
      about: "Обо мне",
      skills: "Навыки",
      education: "Образование",
      experience: "Опыт",
      contact: "Контакты",
    },
    a11y: {
      skipLink: "Перейти к содержимому",
    },
    theme: {
      toggleTextDark: "Темная тема",
      toggleTextLight: "Светлая тема",
      toggleLabelDark: "Переключить на светлую тему",
      toggleLabelLight: "Переключить на темную тему",
    },
    hero: {
      roleShort: "WordPress разработчик",
      eyebrow: "WordPress разработчик",
      name: "Сергей Байрактар",
      lead:
        "Разрабатываю кастомные сайты на WordPress и WooCommerce с аккуратным фронтендом, практичным UX и надежной поддержкой.",
      contactCta: "Связаться",
      workCta: "Смотреть опыт",
      photoBadge: "Место для фото",
      photoAlt: "Портрет Сергея Байрактара",
      photoHint: "Позже сюда можно добавить ваш портрет",
      meta: {
        currentRole: "Middle WordPress Developer в GoIT",
        location: "Открыт к удаленному сотрудничеству",
        stack: "Есть коммерческий опыт в веб-дизайне",
      },
    },
    section: {
      aboutEyebrow: "Профиль",
      aboutTitle: "Обо мне",
      skillsEyebrow: "Экспертиза",
      skillsTitle: "Навыки",
      educationEyebrow: "Обучение",
      educationTitle: "Образование",
      experienceEyebrow: "Карьера",
      experienceTitle: "Опыт",
      contactEyebrow: "Связь",
      contactTitle: "Контакты",
    },
    skills: {
      hardTitle: "Ключевые навыки",
      softTitle: "Софт скиллы",
      hard: [
        "HTML",
        "CSS (SCSS)",
        "БЭМ",
        "Flexbox",
        "Grid",
        "JavaScript (jQuery)",
        "PHP",
        "WordPress (Woo)",
        "MySQL",
        "npm",
        "Gulp",
        "Git",
        "Figma",
      ],
      soft: [
        "Четкая коммуникация",
        "Внимание к деталям",
        "Ответственность",
        "Структурное мышление",
        "Решение проблем",
        "Командная работа",
        "Адаптивность",
        "Ориентация на результат",
      ],
    },
    about: {
      copy:
        "Я WordPress-разработчик с фокусом на кастомные темы, редизайн и улучшение существующих сайтов. Также у меня есть опыт в веб-дизайне, что помогает делать интерфейсы чище и принимать более точные визуальные решения. Для меня важны читаемый код и стабильная реализация без лишней сложности.",
    },
    contact: {
      emailLabel: "Email",
      telegramLabel: "Telegram",
      phoneLabel: "Телефон",
    },
    education: [
      {
        title: "ОНАПТ",
        meta: "2004 - 2009",
        copy: "Инженер-технолог винодельческой промышленности.",
        image: "./images/diploma/onapt.webp",
        imageAlt: "Диплом ОНАПТ",
      },
      {
        title: 'Front-End + основы Angular, "БеллХард"',
        meta: "2019, Минск",
        copy: "Курс по фронтенду с фокусом на верстку и базовые основы Angular.",
        image: "./images/diploma/belhard.webp",
        imageAlt: 'Сертификат Front-End + основы Angular от "БеллХард"',
      },
      {
        title: 'Front-End Pro, "Hillel"',
        meta: "2019, Одесса",
        copy: "Продвинутый курс по фронтенду с сертификатом.",
        image: "./images/diploma/hillel.webp",
        imageAlt: 'Сертификат Front-End Pro от "Hillel"',
      },
    ],
    experience: [
      {
        title: "Middle WordPress Developer, GoIT",
        meta: "сентябрь 2023 - настоящее время",
        companyName: "GoIT",
        companyUrl: "https://goit.global/",
        copy:
          "Разработка уникальной темы для главного сайта GoITeens и сайта школы GoITeens School, постоянная работа над редизайном и улучшениями, создание и правка конверсионных лендингов.",
        work: [
          {
            text: "Главный сайт GoITeens",
            url: "https://goiteens.com/",
          },
          {
            text: "GoITeens School",
            url: "https://school.goiteens.com/",
          },
        ],
      },
      {
        title: "WordPress-разработчик, EcDev",
        meta: "июнь 2021 - октябрь 2023",
        companyName: "EcDev",
        companyUrl: "https://www.ecdevstudio.com/",
        copy:
          "Разработка сайтов на WordPress и WooCommerce, доработка существующего функционала и поддержка клиентских проектов.",
        work: [
          {
            text: "Sammamish Mortgage",
            url: "https://www.sammamishmortgage.com/",
          },
          {
            text: "Rise Construction",
            url: "https://riseconstructiontx.com",
          },
          {
            text: "GunfightersINC",
            url: "https://gunfightersinc.com/",
          },
          {
            text: "Picup Media",
            url: "https://picupmedia.com/",
          },
        ],
      },
      {
        title: "Верстка под Angular, DeepInspire",
        meta: "ноябрь 2021 - март 2022",
        companyName: "DeepInspire",
        companyUrl: "https://deepinspire.com/",
        copy:
          "Верстка и помощь в разработке двух крупных трейд-платформ на Angular.",
        work: [
          {
            text: "Tokenise Brokerage",
            url: "https://www.tokenise.io/",
          },
          {
            text: "Tokenise Exchange",
            url: "https://tokenisestock.exchange/",
          },
        ],
      },
      {
        title: "WordPress-разработчик, Coelix",
        meta: "апрель 2021 - август 2021",
        companyName: "Coelix",
        companyUrl: "https://jobs.dou.ua/companies/coelix/",
        copy:
          "Разработка сайтов на WordPress и WooCommerce, добавление нового функционала и поддержка готовых проектов.",
        work: [
          {
            text: "Gamezo",
            url: "https://gamezo.gg/",
          },
        ],
      },
      {
        title: 'Веб-разработчик, студия "Mart"',
        meta: "октябрь 2020 - апрель 2021",
        companyName: "Mart",
        companyUrl: "https://mart.com.ua/",
        copy:
          "Разработка сайтов и веб-приложений под WordPress, натяжка верстки и доработка уже работающих проектов.",
        work: [
          {
            text: "AFGroup",
            url: "https://a-f.com.ua/",
          },
          {
            text: "Mitridat",
            url: "https://www.mitridat.odessa.ua/",
          },
          {
            text: "Vedanta",
            url: "https://vedanta-auto.com.ua/",
          },
        ],
      },
    ],
  },
};

const selectors = {
  hardSkillsList: document.querySelector("#hard-skills-list"),
  softSkillsList: document.querySelector("#soft-skills-list"),
  educationList: document.querySelector("#education-list"),
  experienceList: document.querySelector("#experience-list"),
  siteHeader: document.querySelector(".site-header"),
  siteNav: document.querySelector(".site-nav"),
  siteNavLinks: Array.from(document.querySelectorAll(".site-nav a")),
  brandMenuToggle: document.querySelector(".brand-menu-toggle"),
  langMenu: document.querySelector(".lang-menu"),
  langMenuToggle: document.querySelector(".lang-menu-toggle"),
  langSwitcher: document.querySelector(".lang-switcher"),
  currentLanguageLabel: document.querySelector("[data-current-language]"),
  themeButton: document.querySelector(".theme-toggle"),
  mediaModal: document.querySelector("#media-modal"),
  mediaModalImage: document.querySelector(".media-modal__image"),
  mediaModalTitle: document.querySelector(".media-modal__title"),
  mediaModalCloseButton: document.querySelector(".media-modal__close"),
  mediaModalCloseTargets: Array.from(document.querySelectorAll("[data-modal-close]")),
  languageButtons: Array.from(document.querySelectorAll("[data-lang]")),
  translatableNodes: Array.from(document.querySelectorAll("[data-i18n]")),
  translatableAttributes: Array.from(document.querySelectorAll("[data-i18n-attr]")),
};

let currentLanguage = getInitialLanguage();
let currentTheme = getInitialTheme();
let isHeaderMenuOpen = false;
let isLanguageMenuOpen = false;
let mediaModalCloseTimer = null;
const headerMenuMedia = window.matchMedia("(max-width: 1024px)");
const languageMenuMedia = window.matchMedia("(max-width: 720px)");

/**
 * Returns a nested translation value by path.
 *
 * @param {string} language
 * @param {string} path
 * @returns {string}
 */
function getTranslation(language, path) {
  return path.split(".").reduce((value, key) => value?.[key], content[language]) ?? "";
}

/**
 * Detects the initial interface language.
 *
 * @returns {string}
 */
function getInitialLanguage() {
  const savedLanguage = localStorage.getItem(STORAGE_KEYS.language);

  if (SUPPORTED_LANGUAGES.includes(savedLanguage)) {
    return savedLanguage;
  }

  return DEFAULT_LANGUAGE;
}

/**
 * Detects the initial visual theme.
 *
 * @returns {"dark" | "light"}
 */
function getInitialTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

/**
 * Builds a linked list of project examples for an experience item.
 *
 * @param {{ text: string, url: string }[]} items
 * @returns {HTMLUListElement}
 */
function createWorkList(items) {
  const list = document.createElement("ul");
  list.className = "timeline-item__work";

  items.forEach((item) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    link.href = item.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = item.text;

    listItem.append(link);
    list.append(listItem);
  });

  return list;
}

/**
 * Renders the education section for the active language.
 *
 * @param {string} language
 * @returns {void}
 */
function renderEducation(language) {
  selectors.educationList.replaceChildren();

  content[language].education.forEach((item) => {
    const article = document.createElement("article");
    const media = document.createElement("div");
    const imageButton = document.createElement("button");
    const image = document.createElement("img");
    const contentWrap = document.createElement("div");
    const title = document.createElement("h3");
    const meta = document.createElement("p");
    const copy = document.createElement("p");

    article.className = "stack-item";
    media.className = "stack-item__media";
    imageButton.className = "stack-item__image-button";
    imageButton.type = "button";
    image.className = "stack-item__image";
    contentWrap.className = "stack-item__content";
    title.className = "stack-item__title";
    meta.className = "stack-item__meta";
    copy.className = "stack-item__copy";

    image.src = item.image;
    image.alt = item.imageAlt;
    title.textContent = item.title;
    meta.textContent = item.meta;
    copy.textContent = item.copy;

    imageButton.setAttribute("aria-label", item.imageAlt);
    imageButton.addEventListener("click", () => {
      openMediaModal(item.image, item.imageAlt, item.title);
    });

    imageButton.append(image);
    media.append(imageButton);
    contentWrap.append(title, meta, copy);
    article.append(media, contentWrap);
    selectors.educationList.append(article);
  });
}

/**
 * Renders hard and soft skills for the active language.
 *
 * @param {string} language
 * @returns {void}
 */
function renderSkills(language) {
  selectors.hardSkillsList.replaceChildren();
  selectors.softSkillsList.replaceChildren();

  content[language].skills.hard.forEach((item) => {
    const tag = document.createElement("span");

    tag.className = "skill-tag";
    tag.textContent = item;
    selectors.hardSkillsList.append(tag);
  });

  content[language].skills.soft.forEach((item) => {
    const tag = document.createElement("span");

    tag.className = "skill-tag";
    tag.textContent = item;
    selectors.softSkillsList.append(tag);
  });
}

/**
 * Renders the experience section for the active language.
 *
 * @param {string} language
 * @returns {void}
 */
function renderExperience(language) {
  selectors.experienceList.replaceChildren();

  content[language].experience.forEach((item) => {
    const article = document.createElement("article");
    const title = document.createElement("h3");
    const meta = document.createElement("p");
    const copy = document.createElement("p");

    article.className = "timeline-item";
    title.className = "timeline-item__title";
    meta.className = "timeline-item__meta";
    copy.className = "timeline-item__copy";

    if (item.companyName && item.companyUrl && item.title.includes(item.companyName)) {
      const [beforeCompany, afterCompany] = item.title.split(item.companyName);
      const companyLink = document.createElement("a");

      companyLink.className = "timeline-item__company-link";
      companyLink.href = item.companyUrl;
      companyLink.target = "_blank";
      companyLink.rel = "noreferrer";
      companyLink.textContent = item.companyName;

      title.append(beforeCompany, companyLink, afterCompany ?? "");
    } else {
      title.textContent = item.title;
    }

    meta.textContent = item.meta;
    copy.textContent = item.copy;

    article.append(title, meta, copy);

    if (item.work?.length) {
      article.append(createWorkList(item.work));
    }

    selectors.experienceList.append(article);
  });
}

/**
 * Updates all static text nodes from the active dictionary.
 *
 * @param {string} language
 * @returns {void}
 */
function applyTranslations(language) {
  document.documentElement.lang = language;
  document.title = content[language].pageTitle;

  selectors.translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const translation = getTranslation(language, key);

    if (translation) {
      node.textContent = translation;
    }
  });

  selectors.translatableAttributes.forEach((node) => {
    const map = node.dataset.i18nAttr.split(",");

    map.forEach((entry) => {
      const [attribute, key] = entry.split(":").map((part) => part.trim());
      const translation = getTranslation(language, key);

      if (attribute && translation) {
        node.setAttribute(attribute, translation);
      }
    });
  });

  renderEducation(language);
  renderSkills(language);
  renderExperience(language);
  updateLanguageButtons(language);
  updateThemeToggleText(language, currentTheme);
}

/**
 * Updates the active state of language buttons.
 *
 * @param {string} language
 * @returns {void}
 */
function updateLanguageButtons(language) {
  selectors.languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;

    button.setAttribute("aria-pressed", String(isActive));
  });

  selectors.currentLanguageLabel.textContent = language.toUpperCase();
}

/**
 * Opens the media modal with the selected image.
 *
 * @param {string} imageSrc
 * @param {string} imageAlt
 * @param {string} imageTitle
 * @returns {void}
 */
function openMediaModal(imageSrc, imageAlt, imageTitle) {
  if (mediaModalCloseTimer) {
    window.clearTimeout(mediaModalCloseTimer);
    mediaModalCloseTimer = null;
  }

  selectors.mediaModalImage.src = imageSrc;
  selectors.mediaModalImage.alt = imageAlt;
  selectors.mediaModalTitle.textContent = imageTitle;
  selectors.mediaModal.hidden = false;
  document.body.style.overflow = "hidden";

  window.requestAnimationFrame(() => {
    selectors.mediaModal.classList.add("is-open");
  });
}

/**
 * Closes the media modal with a fade-out transition.
 *
 * @returns {void}
 */
function closeMediaModal() {
  selectors.mediaModal.classList.remove("is-open");
  document.body.style.overflow = "";

  mediaModalCloseTimer = window.setTimeout(() => {
    selectors.mediaModal.hidden = true;
    selectors.mediaModalImage.src = "";
    selectors.mediaModalImage.alt = "";
    selectors.mediaModalTitle.textContent = getTranslation(currentLanguage, "controls.previewTitle");
    mediaModalCloseTimer = null;
  }, 220);
}

/**
 * Synchronizes the responsive language menu with the current breakpoint.
 *
 * @returns {void}
 */
function syncLanguageMenuState() {
  const isCompactLanguageMenu = languageMenuMedia.matches;

  if (!isCompactLanguageMenu) {
    isLanguageMenuOpen = false;
    selectors.langSwitcher.hidden = false;
    selectors.langMenuToggle.setAttribute("aria-expanded", "false");
    return;
  }

  selectors.langSwitcher.hidden = !isLanguageMenuOpen;
  selectors.langMenuToggle.setAttribute("aria-expanded", String(isLanguageMenuOpen));
}

/**
 * Closes the compact language menu.
 *
 * @returns {void}
 */
function closeLanguageMenu() {
  isLanguageMenuOpen = false;
  syncLanguageMenuState();
}

/**
 * Toggles the compact language menu.
 *
 * @returns {void}
 */
function toggleLanguageMenu() {
  if (!languageMenuMedia.matches) {
    return;
  }

  isLanguageMenuOpen = !isLanguageMenuOpen;
  syncLanguageMenuState();
}

/**
 * Updates the theme toggle caption and accessible label.
 *
 * @param {string} language
 * @param {"dark" | "light"} theme
 * @returns {void}
 */
function updateThemeToggleText(language, theme) {
  const isDarkTheme = theme === "dark";
  const ariaKey = isDarkTheme ? "theme.toggleLabelDark" : "theme.toggleLabelLight";

  selectors.themeButton.setAttribute("aria-label", getTranslation(language, ariaKey));
  selectors.themeButton.setAttribute("aria-pressed", String(isDarkTheme));
  selectors.mediaModalCloseButton.setAttribute("aria-label", getTranslation(language, "controls.closeModalLabel"));

  if (selectors.mediaModal.hidden) {
    selectors.mediaModalTitle.textContent = getTranslation(language, "controls.previewTitle");
  }
}

/**
 * Synchronizes the responsive header menu with the current breakpoint.
 *
 * @returns {void}
 */
function syncHeaderMenuState() {
  const isCompactHeader = headerMenuMedia.matches;

  if (!isCompactHeader) {
    isHeaderMenuOpen = false;
    selectors.siteNav.hidden = false;
    selectors.brandMenuToggle.setAttribute("aria-expanded", "false");
    return;
  }

  selectors.siteNav.hidden = !isHeaderMenuOpen;
  selectors.brandMenuToggle.setAttribute("aria-expanded", String(isHeaderMenuOpen));
}

/**
 * Closes the compact header navigation.
 *
 * @returns {void}
 */
function closeHeaderMenu() {
  isHeaderMenuOpen = false;
  syncHeaderMenuState();
}

/**
 * Toggles the compact header navigation.
 *
 * @returns {void}
 */
function toggleHeaderMenu() {
  if (!headerMenuMedia.matches) {
    return;
  }

  isHeaderMenuOpen = !isHeaderMenuOpen;
  syncHeaderMenuState();
}

/**
 * Applies the selected theme and stores it locally.
 *
 * @param {"dark" | "light"} theme
 * @returns {void}
 */
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(STORAGE_KEYS.theme, theme);
  updateThemeToggleText(currentLanguage, theme);
}

/**
 * Applies the selected language and stores it locally.
 *
 * @param {string} language
 * @returns {void}
 */
function applyLanguage(language) {
  currentLanguage = language;
  localStorage.setItem(STORAGE_KEYS.language, language);
  applyTranslations(language);
}

/**
 * Registers UI event handlers.
 *
 * @returns {void}
 */
function bindEvents() {
  selectors.languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.lang);
      closeLanguageMenu();
    });
  });

  selectors.themeButton.addEventListener("click", () => {
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });

  selectors.brandMenuToggle.addEventListener("click", () => {
    toggleHeaderMenu();
  });

  selectors.langMenuToggle.addEventListener("click", () => {
    toggleLanguageMenu();
  });

  selectors.mediaModalCloseTargets.forEach((button) => {
    button.addEventListener("click", () => {
      closeMediaModal();
    });
  });

  selectors.siteNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeHeaderMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (!headerMenuMedia.matches || !isHeaderMenuOpen) {
      return;
    }

    if (!selectors.siteHeader.contains(event.target)) {
      closeHeaderMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!languageMenuMedia.matches || !isLanguageMenuOpen) {
      return;
    }

    if (!selectors.langMenu.contains(event.target)) {
      closeLanguageMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isHeaderMenuOpen) {
      closeHeaderMenu();
    }

    if (event.key === "Escape" && isLanguageMenuOpen) {
      closeLanguageMenu();
    }

    if (event.key === "Escape" && !selectors.mediaModal.hidden) {
      closeMediaModal();
    }
  });

  headerMenuMedia.addEventListener("change", () => {
    closeHeaderMenu();
    syncHeaderMenuState();
  });

  languageMenuMedia.addEventListener("change", () => {
    closeLanguageMenu();
    syncLanguageMenuState();
  });
}

/**
 * Starts the resume page application.
 *
 * @returns {void}
 */
function init() {
  applyTheme(currentTheme);
  applyLanguage(currentLanguage);
  selectors.mediaModalTitle.textContent = getTranslation(currentLanguage, "controls.previewTitle");
  syncHeaderMenuState();
  syncLanguageMenuState();
  bindEvents();
}

init();
