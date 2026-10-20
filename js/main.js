/* Language switching; Polish and English copy is in translations.js. */

const copyrightYear = document.getElementById("copyright-year");
if (copyrightYear) copyrightYear.textContent = String(new Date().getFullYear());

// Bind the dictionary to text elements on the current page.
const pageTranslations = {
  ...TRANSLATIONS.common,
  ...TRANSLATIONS[document.body.dataset.page]
};
const translatedElements = Object.entries(pageTranslations).flatMap(([selector, translations]) =>
  Array.from(document.querySelectorAll(selector), (element) => ({ element, translations }))
);
// Cache metadata and titles before the initial language is applied.
const translatedMetadata = Array.from(document.querySelectorAll("[data-en]"), (element) => ({
  element,
  property: element.tagName === "META" ? "content" : "textContent",
  pl: element.tagName === "META" ? element.content : element.textContent,
  en: element.dataset.en
}));
const switcher = document.querySelector(".language-switch");
const languageButtons = Array.from(document.querySelectorAll("[data-language]"));
const navigation = document.querySelector(".header-nav");

function setLanguage(language) {
  const lang = language === "en" ? "en" : "pl";
  document.documentElement.lang = lang;
  for (const { element, translations } of translatedElements) {
    element.textContent = translations[lang];
  }
  for (const { element, property, pl, en } of translatedMetadata) {
    element[property] = lang === "pl" ? pl : en;
  }
  if (navigation) navigation.setAttribute("aria-label", lang === "pl" ? "Nawigacja główna" : "Main navigation");
  if (switcher) {
    switcher.setAttribute("aria-label", lang === "pl" ? "Język strony" : "Page language");
    languageButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === lang));
    });
    switcher.hidden = false;
  }
  try { localStorage.setItem("portfolio-language", lang); } catch { /* Storage may be unavailable. */ }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

let initialLanguage = "pl";
try {
  const savedLanguage = localStorage.getItem("portfolio-language");
  if (savedLanguage === "en" || savedLanguage === "pl") initialLanguage = savedLanguage;
} catch { /* Use Polish when storage is unavailable. */ }
setLanguage(initialLanguage);
