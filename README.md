# Sito personale di Andrea Viani

Portfolio realizzato **solo con HTML e CSS** (Sass + Bootstrap) per il corso *HTML e CSS* del Master start2impact × Unimarconi.

- **Repository**: https://github.com/viangi23/progetto-html-css-portfolio
- **Sito online (GitHub Pages)**: https://viangi23.github.io/progetto-html-css-portfolio/

## Pagine

| Pagina | Contenuto |
|---|---|
| `index.html` | Home: presentazione, chi sono, competenze, progetti in evidenza |
| `progetti.html` | Elenco dei progetti con tecnologie e link a sito e codice |
| `cv.html` | **CV in HTML**, con stile dedicato alla stampa (si salva in PDF dal browser) |
| `contattami.html` | **Form di contatto** con validazione HTML (`required`, `type="email"`, `minlength`) |
| `grazie.html` | Pagina mostrata dopo l'invio del modulo |
| `404.html` | Pagina «non trovata», mostrata automaticamente da GitHub Pages |

## Requisiti del brief → dove sono soddisfatti

| Requisito | Soluzione |
|---|---|
| Solo HTML e CSS | Nessun JavaScript nel sito (nemmeno quello di Bootstrap: si usa solo il suo CSS) |
| Almeno due pagine, CV in HTML | quattro pagine + ringraziamento; `cv.html` |
| Pagina "contattami" con form | `contattami.html`, attributi `required`, etichette collegate, campo anti-bot |
| Framework front end | **Bootstrap 5** (griglia, utility, form, pulsanti) in `css/vendor/` |
| Favicon | `img/favicon.svg` |
| Menu sticky (almeno mobile) | `sticky-top` su tutte le dimensioni; sotto i 576 px diventa un menu «hamburger» **solo CSS** (checkbox + `<label>`, selettore `~`), raggiungibile da tastiera |
| Layout con Flexbox o Grid | **Grid**: hero, skill, CV, contatti. **Flexbox**: menu, footer, card |
| Sass | `scss/` (variabili, base, layout, componenti) → compilato in `css/style.css` |
| 100% responsive | mobile-first, verificato a 320, 375, 550, 800 e 1280 px senza scroll orizzontale |
| GitHub Pages | vedi sotto |
| Tag Open Graph | in ogni pagina: titolo, descrizione, URL, immagine 1200×630 (`img/og-image.png`) |
| Collegare il form a un servizio email (opzionale) | FormSubmit, senza JavaScript e senza mostrare l'email (vedi sotto) |

Extra: **tema scuro automatico** (`prefers-color-scheme`, tutto tramite custom properties), **validazione del modulo solo CSS** con messaggi che compaiono dopo aver toccato un campo (`:user-invalid`), animazione d'ingresso della home, **pagina 404**, link «Vai al contenuto», `aria-current` sulla pagina attiva, focus visibile, `prefers-reduced-motion`, alt su tutte le immagini, stile di stampa per il CV (sempre chiaro, anche col tema scuro).

## Struttura

```
index.html · progetti.html · cv.html · contattami.html · grazie.html · 404.html
css/style.css          generato da Sass
css/vendor/            Bootstrap (solo CSS)
scss/                  _variables, _base, _layout, _components, main
img/                   favicon, avatar, illustrazione, immagine Open Graph
scripts/               build, controllo link, server di prova
```

## Sviluppo

```bash
npm install
npm run build      # compila Sass in css/style.css e copia Bootstrap
npm run sass:watch # ricompila mentre modifichi gli .scss
npm run serve      # http://localhost:4300
npm run validate   # html-validate su tutte le pagine
npm run check      # link, risorse locali, ancore e alt
```

`css/style.css` e `css/vendor/` sono nel repository, così GitHub Pages pubblica il sito senza passaggi di build.

## Pubblicazione su GitHub Pages

1. Crea il repository `progetto-html-css-portfolio` su GitHub e fai il push (`git remote add origin …`, `git push -u origin main`).
2. *Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `(root)`*.
3. Dopo un minuto il sito è su `https://<tuo-username>.github.io/progetto-html-css-portfolio/`.
4. Se lo username non è `viangi23`, sostituiscilo nei link (`og:url`, `og:image`, `canonical`) con una ricerca e sostituzione globale.

## Modulo di contatto (FormSubmit)

Il modulo è **attivo**: invia i dati a FormSubmit, che li inoltra per email. Nell'attributo `action` di `contattami.html` c'è il **codice casuale** fornito da FormSubmit al posto dell'indirizzo email, così l'email non compare nel codice pubblico e i bot non possono raccoglierla.

Come si attiva (per riprodurlo con un'altra email):

1. si mette per una volta la propria email nell'`action` e si invia un messaggio di prova;
2. FormSubmit manda un'email di attivazione con un **codice alfanumerico casuale**;
3. si clicca «Activate Form» e si sostituisce l'email con quel codice.

Dopo l'invio l'utente torna sulla pagina `grazie.html` (campo nascosto `_next`).

In alternativa si può usare EmailJS (richiede JavaScript, fuori dal vincolo «solo HTML e CSS»).

## Cose da personalizzare

I contenuti sono scritti solo con ciò che emerge dal percorso del Master. Prima di consegnare rivedi:

- il testo «Cerco un ruolo da sviluppatore web junior» (home, CV, contatti) e le percentuali delle barre delle competenze (sono un'autovalutazione);
- aggiungi **formazione ed esperienze precedenti** nel CV (`cv.html`, sezione *Formazione*) e i link ai tuoi profili social;
- se vuoi una **foto**, salva `img/foto.jpg` e sostituisci `img/avatar.svg` in home e CV (mantieni `alt`);
- verifica username GitHub e link dei progetti (i repository vanno creati/pubblicati).
