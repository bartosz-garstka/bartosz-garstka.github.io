// Słownik PL / EN. Polskie treści w HTML należy utrzymywać zgodne ze słownikiem.
// Sekcję strony wybiera atrybut data-page na elemencie body.
const TRANSLATIONS = {
  // Wspólne: link pomijania i nawigacja
  "common": {
    ".skip-link": {
      "pl": "Przejdź do treści",
      "en": "Skip to content"
    },
    ".nav-about": {
      "pl": "O mnie",
      "en": "About me"
    },
    ".nav-projects": {
      "pl": "Projekty",
      "en": "Projects"
    },
    ".nav-contact": {
      "pl": "Kontakt",
      "en": "Contact"
    }
  },

  // index.html — kolejność zgodna z HTML
  "index.html": {
    ".hero > .eyebrow:not(.case-eyebrow)": {
      "pl": "Cześć, jestem",
      "en": "Hello, I'm"
    },
    ".dim span": {
      "pl": "Projektant produktów cyfrowych",
      "en": "Digital product designer"
    },
    ".hero > .lede:not(.case-pending)": {
      "pl": "Projektuję responsywne serwisy internetowe i aplikacje mobilne, łącząc perspektywę użytkownika z wymaganiami biznesowymi i technicznymi. Mam doświadczenie w e-commerce, rozwijaniu funkcjonalności od discovery po wdrożenie oraz budowie design systemów i tokenów projektowych. Współpracuję z deweloperami i menedżerami produktu, dbając o użyteczność, spójność i dostępność interfejsów.",
      "en": "I design responsive websites and mobile apps, combining a user perspective with business and technical requirements. My experience includes e-commerce, developing features from discovery through implementation, and building design systems and design tokens. I collaborate with developers and product managers, focusing on usability, consistency and accessibility."
    },
    ".skills-eyebrow": {
      "pl": "Kompetencje",
      "en": "Skills"
    },
    "#skills-h": {
      "pl": "Moje kompetencje",
      "en": "My skills"
    },
    "#skill-ux": {
      "pl": "Projektowanie UX/UI",
      "en": "UX/UI design"
    },
    "#skill-ux-description": {
      "pl": "Responsywne serwisy internetowe i aplikacje mobilne, architektura informacji, user flows oraz makiety low- i high-fidelity.",
      "en": "Responsive websites and mobile apps, information architecture, user flows, and low- and high-fidelity wireframes."
    },
    "#skill-prototype": {
      "pl": "Prototypowanie",
      "en": "Prototyping"
    },
    "#skill-prototype-description": {
      "pl": "Tworzenie interaktywnych prototypów do weryfikacji koncepcji i testowania rozwiązań.",
      "en": "Creating interactive prototypes to validate concepts and test solutions."
    },
    "#skill-systems": {
      "pl": "Design systemy",
      "en": "Design systems"
    },
    "#skill-systems-description": {
      "pl": "Budowa i rozwój bibliotek komponentów, fundamentów wizualnych, wytycznych i dokumentacji.",
      "en": "Building and maintaining component libraries, visual foundations, guidelines and documentation."
    },
    "#skill-tokens": {
      "pl": "Design tokeny",
      "en": "Design tokens"
    },
    "#skill-tokens-description": {
      "pl": "Projektowanie tokenów projektowych dla web w trybie jasnym oraz aplikacji mobilnej w trybach jasnym i ciemnym.",
      "en": "Creating design tokens for websites in light mode and mobile apps in light and dark modes."
    },
    "#skill-handoff": {
      "pl": "Współpraca przy wdrożeniu",
      "en": "Design handoff and collaboration"
    },
    "#skill-handoff-description": {
      "pl": "Przygotowywanie specyfikacji projektowych i współpraca z deweloperami oraz menedżerami produktu.",
      "en": "Preparing design specifications and collaborating with developers and product managers."
    },
    "#skill-accessibility": {
      "pl": "Dostępność cyfrowa",
      "en": "Digital accessibility"
    },
    "#skill-accessibility-description": {
      "pl": "Znajomość zasad WCAG i ich zastosowania w projektowaniu interfejsów, m.in. w zakresie kontrastu, czytelności, nawigacji i stanów komponentów.",
      "en": "Knowledge of WCAG principles and their application to interface design, including contrast, readability, navigation and component states."
    },
    ".projects-eyebrow": {
      "pl": "Projekty",
      "en": "Projects"
    },
    "#projects-h": {
      "pl": "Przykładowe projekty",
      "en": "Selected projects"
    },
    ".project-registration": {
      "pl": "Rejestracja i logowanie na doz.pl",
      "en": "Registration and login on doz.pl"
    },
    ".project-receipts": {
      "pl": "E-paragony w aplikacji mobilnej",
      "en": "E-receipts in the mobile app"
    },
    ".project-design-system": {
      "pl": "Design system web i aplikacji",
      "en": "Design system for web and mobile apps"
    },
    "[aria-labelledby='contact-h'] .section-head .eyebrow": {
      "pl": "Kontakt",
      "en": "Contact"
    },
    "#contact-h": {
      "pl": "Znajdziesz mnie tutaj",
      "en": "Find me online"
    }
  },

  // design-system.html — kolejność zgodna z HTML
  "design-system.html": {
    ".case-back": {
      "pl": "Wróć do projektów",
      "en": "Back to projects"
    },
    ".project-design-system": {
      "pl": "Design system web i aplikacji",
      "en": "Design system for web and mobile apps"
    },
    ".case-pending": {
      "pl": "Opis projektu w przygotowaniu.",
      "en": "Case study coming soon."
    }
  },

  // e-paragony.html — kolejność zgodna z HTML
  "e-paragony.html": {
    ".case-back": {
      "pl": "Wróć do projektów",
      "en": "Back to projects"
    },
    ".project-receipts": {
      "pl": "E-paragony w aplikacji mobilnej",
      "en": "E-receipts in the mobile app"
    },
    ".case-pending": {
      "pl": "Opis projektu w przygotowaniu.",
      "en": "Case study coming soon."
    }
  },

  // rejestracja-logowanie.html — kolejność zgodna z HTML
  "rejestracja-logowanie.html": {
    ".case-back": {
      "pl": "Wróć do projektów",
      "en": "Back to projects"
    },
    ".project-registration": {
      "pl": "Rejestracja i logowanie na doz.pl",
      "en": "Registration and login on doz.pl"
    },
    ".case-pending": {
      "pl": "Opis projektu w przygotowaniu.",
      "en": "Case study coming soon."
    }
  }
};
