# Bartosz Garstka — portfolio

Portfolio Product / UX/UI Designera w HTML, CSS i JavaScript. Bez zależności i etapu budowania. Lokalne fonty oraz jasny i ciemny motyw dopasowany do ustawień systemu.

## Struktura

```text
index.html       treść strony
css/styles.css   fonty, kolory, układ i responsywność
js/main.js       przełączanie języka i automatyczny rok
js/translations.js słownik polskich i angielskich tekstów
projects/        podstrony case studies
images/          placeholdery i ikony
fonts/           lokalne fonty
favicon.svg      ikona strony
robots.txt       wskazówki dla robotów wyszukiwarek
.nojekyll        wyłączenie przetwarzania przez Jekyll
.gitignore       pomijanie lokalnych plików w Git
.gitattributes   ujednolicenie końców linii
```

## Podgląd i edycja

Otwórz `index.html` w przeglądarce lub użyj rozszerzenia Live Server w VS Code.

- Treść: `index.html`.
- Kontakt: linki w sekcji kontaktowej w `index.html` (działają także bez JavaScript).
- Wygląd: `css/styles.css`, w tym zmienne kolorów obu motywów.
- Tłumaczenia: słownik `TRANSLATIONS` w `js/translations.js`; sekcja `common` zawiera wspólną nawigację, a sekcje nazwane jak pliki HTML zawierają treści w kolejności strony. Każdy selektor ma wersje `pl` i `en`. Sekcję wskazuje atrybut `data-page` na `body`. Polskie treści są również zapisane w HTML na potrzeby działania bez JavaScript — przy zmianach utrzymuj je zgodne ze słownikiem. Tłumaczenia tytułów i opisów metadanych są w atrybutach `data-en` w HTML.
- Skrypty: `translations.js` musi być wczytany przed `main.js`; oba korzystają z `defer`.
- Nowe teksty: dodaj selektor oraz wersje `pl` i `en` do `TRANSLATIONS`. Unikaj nakładających się selektorów.
- Bez JavaScript strona pozostaje po polsku. Wybrany język jest zapamiętywany, jeśli przeglądarka udostępnia localStorage.

## Publikacja w GitHub Pages

1. Dla adresu `https://TWOJ-LOGIN.github.io/` utwórz repozytorium `TWOJ-LOGIN.github.io`, zastępując `TWOJ-LOGIN` swoim loginem. W planie GitHub Free użyj repozytorium publicznego.
2. Dodaj zawartość tego folderu bezpośrednio do głównego katalogu repozytorium. Zapisz pliki na gałęzi `main` i wyślij na GitHuba.
3. Otwórz **Settings → Pages** w repozytorium.
4. Ustaw **Source: Deploy from a branch**, gałąź **main** i katalog **/(root)**. Kliknij **Save**.
5. Po zakończeniu wdrożenia sprawdź adres podany w ustawieniach Pages.

Przy innej nazwie repozytorium adres będzie miał postać `https://TWOJ-LOGIN.github.io/NAZWA-REPOZYTORIUM/`. Ścieżki zasobów są względne.

Docker, nginx i konfiguracja Apache nie są potrzebne. Nie jest wymagany własny proces budowania.

[Dokumentacja GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Przed udostępnieniem portfolio w CV

- Uzupełnij pozostałe dane kontaktowe i CV do pobrania.
- Dodaj case studies i potwierdź informacje o doświadczeniu.
- Sprawdź wersję mobilną, oba motywy i obsługę klawiaturą.
- Wygeneruj kod QR dla ustalonego, działającego adresu strony.
