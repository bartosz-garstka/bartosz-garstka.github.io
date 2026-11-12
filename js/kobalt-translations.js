/* Polish and English copy for the Kobalt case study and its cover. */
const KOBALT_TRANSLATIONS = Object.fromEntries(
  Object.entries({
    "back": { "pl": "Powrót do strony głównej", "en": "Back to homepage" },
    "skip": { "pl": "Przejdź do treści", "en": "Skip to content" },
    "one-brand": { "pl": "Jedna marka.", "en": "One brand." },
    "two-platforms": { "pl": "Dwie platformy.", "en": "Two platforms." },
    "intro": { "pl": "Na przykładzie rejestracji i logowania pokazuję, jak połączyłem wspólną paletę marki i kolory semantyczne z typografią i komponentami dopasowanymi do każdej platformy.", "en": "Using sign-up and login as examples, I show how I combined a shared brand palette and semantic colors with typography and components tailored to each platform." },
    "phone-welcome": { "pl": "Dobrze Cię widzieć.", "en": "Good to see you." },
    "phone-intro": { "pl": "Zaloguj się i kontynuuj swoją naukę.", "en": "Log in to keep learning." },
    "email": { "pl": "Adres e-mail", "en": "Email address" },
    "phone-email-placeholder": { "pl": "np. imie@domena.pl", "en": "e.g. name@example.com" },
    "password": { "pl": "Hasło", "en": "Password" },
    "phone-password-placeholder": { "pl": "Wpisz hasło", "en": "Enter your password" },
    "phone-sign-in": { "pl": "Zaloguj się", "en": "Log in" },
    "phone-no-account": { "pl": "Nie masz konta?", "en": "New here?" },
    "phone-register": { "pl": "Zarejestruj się", "en": "Sign up" },
    "phone-forgot": { "pl": "Nie pamiętasz hasła?", "en": "Forgot your password?" },
    "phone-reset": { "pl": "Zresetuj hasło", "en": "Reset password" },
    "phone-terms": { "pl": "Logując się akceptujesz", "en": "By logging in, you accept the" },
    "phone-terms-link": { "pl": "Regulamin serwisu.", "en": "Terms of Service." },
    "role": { "pl": "Rola", "en": "Role" },
    "scope": { "pl": "Zakres", "en": "Scope" },
    "scope-value": { "pl": "Design system i prototyp", "en": "Design system and prototype" },
    "platforms": { "pl": "Platformy", "en": "Platforms" },
    "architecture-label": { "pl": "02 / Design system", "en": "02 / Design system" },
    "architecture-title": { "pl": "Co współdzielą obie platformy?", "en": "What do the two platforms share?" },
    "architecture-body": { "pl": "Obie platformy korzystają z tej samej palety marki i tych samych ról kolorów w jasnym i ciemnym motywie. Typografię, wymiary i wygląd komponentów dopasowałem osobno do platformy iOS i Android.", "en": "Both platforms share the brand palette and color roles across light and dark themes. I tailored typography, dimensions, and component styling separately for iOS and Android." },
    "core": { "pl": "Paleta marki i kolory semantyczne dla obu motywów.", "en": "Brand palette and semantic colors for both themes." },
    "ios": { "pl": "Typografia i komponenty dopasowane do iOS.", "en": "Typography and components tailored to iOS." },
    "android": { "pl": "Typografia i komponenty dopasowane do Androida.", "en": "Typography and components tailored to Android." },
    "fields-label": { "pl": "03 / Decyzja projektowa", "en": "03 / Design decision" },
    "fields-title": { "pl": "Spójność we wszystkich formularzach", "en": "Consistency across all forms" },
    "fields-body": { "pl": "W każdym formularzu Kobalt użytkownik rozpoznaje aktywne pole po wyróżnionym obramowaniu. Ta sama reguła dotyczy logowania, resetowania hasła i planowanej rejestracji.", "en": "A highlighted border identifies the focused field in every Kobalt form. The same rule applies to login, password reset, and the planned sign-up flow." },
    "source": { "pl": "iOS / Komponenty źródłowe", "en": "iOS / Source components" },
    "shared-color": { "pl": "Wspólny token koloru fokusu", "en": "Shared focus color token" },
    "shared-color-body": { "pl": "W tym przykładzie token określa kolor obramowania aktywnego pola formularza.", "en": "In this example, the token sets the border color of the focused form field." },
    "flow-label": { "pl": "01 / Ścieżka logowania", "en": "01 / Login flow" },
    "flow-title": { "pl": "Co dzieje się, gdy logowanie się nie uda?", "en": "What happens when login fails?" },
    "flow-body": { "pl": "W prototypie Androida pokazałem formularz gotowy do wysłania, logowanie w toku i ponowienie próby po odrzuceniu danych logowania.", "en": "The Android prototype shows the form ready to submit, login in progress, and a retry after the credentials are rejected." },
    "ready": { "pl": "Formularz gotowy do wysłania", "en": "Form ready to submit" },
    "ready-body": { "pl": "Po wpisaniu adresu e-mail i hasła użytkownik może wysłać formularz.", "en": "After entering an email address and password, the user can submit the form." },
    "loading": { "pl": "Logowanie w toku", "en": "Login in progress" },
    "loading-body": { "pl": "Przycisk pokazuje, że aplikacja sprawdza dane logowania.", "en": "The button shows that the app is checking the login details." },
    "phone-loading": { "pl": "Logowanie...", "en": "Logging in…" },
    "retry": { "pl": "Nieprawidłowe dane", "en": "Incorrect login details" },
    "retry-body": { "pl": "Komunikat wskazuje problem z danymi. Przycisk umożliwia ponowienie próby.", "en": "The message identifies the problem with the login details. The button lets the user try again." },
    "phone-error": { "pl": "Sprawdź dane logowania.", "en": "Check your login details." },
    "phone-error-body": { "pl": "Adres e-mail lub hasło są nieprawidłowe. Spróbuj ponownie.", "en": "Your email or password is incorrect. Try again." },
    "phone-retry": { "pl": "Spróbuj ponownie", "en": "Try again" },
    "figma": { "pl": "Zobacz projekt w Figmie", "en": "View the project in Figma" },
    "mockup-intro": { "pl": "Wpisz adres e-mail i hasło do swojego konta.", "en": "Enter your account email address and password." },
    "focus-rule": { "pl": "Zasada dla całego projektu", "en": "A rule for the whole project" },
    "focus-rule-detail": { "pl": "Spójny sygnał w Light i Dark", "en": "A consistent signal in light and dark themes" },
    "focus-rule-body": { "pl": "W obrębie danego motywu wszystkie formularze używają tego samego koloru fokusu pól. Wartości dla Light i Dark są dobierane w zależności od tego, jaki motyw użytkownik zastosuje.", "en": "Within each theme, all forms use the same field focus color. The value depends on whether the user selects the light or dark theme." },
    "summary-label": { "pl": "04 / Podsumowanie", "en": "04 / Summary" },
    "summary-title": { "pl": "Dlaczego dostęp do konta ma znaczenie?", "en": "Why does account access matter?" },
    "summary-body": { "pl": "Każdy niejasny krok przy logowaniu lub zakładaniu konta to moment, w którym użytkownik może przerwać proces. Dlatego projektując Kobalt, skupiłem się na tym, żeby użytkownik wiedział, co zrobić dalej, także wtedy, gdy coś pójdzie nie tak.", "en": "Every unclear step during login or sign-up is a point where a user might abandon the process. When designing Kobalt, I focused on making the next step clear, even when something goes wrong." },
    "summary-recovery": { "pl": "Komunikat przy formularzu podpowiada, jak poprawić dane. Gdy wiadomość z linkiem do resetowania hasła nie dociera, użytkownik może ponowić wysyłkę lub zmienić adres e-mail.", "en": "A message by the form explains how to correct the details. If the password reset email doesn’t arrive, the user can request another email or change their email address." },
    "summary-outcome": { "pl": "Dlatego w Kobalcie zaprojektowałem konkretne wyjścia z takich sytuacji. Komunikaty przy polach pomagają poprawić dane, a na ekranie odzyskiwania dostępu użytkownik może zmienić adres e-mail lub poprosić o nowy link. To drobne decyzje, które przy dużej liczbie użytkowników mogą mieć znaczenie.", "en": "That’s why I designed clear ways to recover in Kobalt. Messages beside fields help users correct their details, and on the account recovery screen they can change their email address or request a new link. These small decisions can make a difference when many people use the app." },
    "cover-label": { "pl": "PRODUCT DESIGN / CASE STUDY", "en": "PRODUCT DESIGN / CASE STUDY" },
    "page-title": { "pl": "Kobalt – Jedna marka. Dwie platformy. | Bartosz Garstka", "en": "Kobalt – One brand. Two platforms. | Bartosz Garstka" }
}).map(([key, copy]) => [`[data-kobalt="${key}"]`, copy])
);

const kobaltAttributes = {
  "ios-mockup": { "pl": "Ekran logowania iOS w trybie jasnym.", "en": "iOS login screen in light mode." },
  "dark-mockup": { "pl": "Ekran logowania Android w trybie ciemnym.", "en": "Android login screen in dark mode." },
  "ready-mockup": { "pl": "Wypełniony formularz logowania na Androidzie.", "en": "Completed Android login form." },
  "loading-mockup": { "pl": "Formularz logowania na Androidzie w stanie ładowania.", "en": "Android login form in its loading state." },
  "retry-mockup": { "pl": "Formularz na Androidzie pokazuje błąd danych logowania i opcję ponowienia.", "en": "Android form showing an invalid credentials error and a retry action." },
  "navigation": { "pl": "Nawigacja główna", "en": "Main navigation" },
  "show-password": { "pl": "Pokaż hasło", "en": "Show password" }
};

function translateKobaltAttributes(language) {
  for (const element of document.querySelectorAll("[data-kobalt-label]")) {
    element.setAttribute("aria-label", kobaltAttributes[element.dataset.kobaltLabel][language]);
  }
}

const passwordToggle = document.getElementById("kobalt-password-toggle");
if (passwordToggle) {
  const password = document.getElementById(passwordToggle.getAttribute("aria-controls"));
  passwordToggle.addEventListener("click", () => {
    const visible = password.type === "password";
    password.type = visible ? "text" : "password";
    passwordToggle.setAttribute("aria-pressed", String(visible));
  });
}
