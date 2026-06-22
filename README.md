# Sito web — Dr. Salvatore Catalano, Otorinolaringoiatra (Domodossola)

Sito **statico** (HTML + CSS + JavaScript, senza framework e senza build) pensato per due obiettivi:

1. **Tagliare i costi** → si pubblica **gratis** (GitHub Pages, Cloudflare Pages o Netlify), nessun canone di website-builder.
2. **Aumentare la visibilità su Domodossola e il VCO** → SEO locale, dati strutturati Schema.org, performance e mobile-first.

---

## 📁 Struttura

```
.
├── index.html              # Pagina principale (one-page)
├── privacy.html            # Informativa privacy/cookie (GDPR)
├── 404.html                # Pagina di errore
├── robots.txt              # Indicazioni per i motori di ricerca
├── sitemap.xml             # Mappa del sito
├── site.webmanifest        # Metadati PWA / installazione
└── assets/
    ├── css/styles.css      # Tutti gli stili
    ├── js/main.js          # Menu mobile + interazioni
    └── img/                # Immagini e favicon (foto da inserire)
```

---

## ✅ DA COMPLETARE prima di andare online

Cerca nel codice i commenti **`⚠️ DA CONFERMARE`** / **`DA INSERIRE`** / **`DA COMPLETARE`**.
Ecco la checklist dei dati reali da inserire:

| Dato | Stato | Note |
|---|---|---|
| Telefono / WhatsApp | ✅ inserito | 366 217 5507 |
| Indirizzo + coordinate | ✅ inserito | Ospedale San Biagio, Domodossola |
| Listino prezzi | ✅ inserito | da profilo MioDottore |
| Recensioni | ✅ reali | 6 in pagina, 25 totali su MioDottore |
| Foto | ✅ caricate | 5 scatti reali |
| **Email** | ⛔ DA FORNIRE | serve anche per ricevere il modulo di contatto |
| **P.IVA / n° Ordine Medici** | ⛔ DA FORNIRE | obbligo di legge (footer + privacy) |
| **Orari studio** | ⛔ DA DEFINIRE | ora il sito indica "su appuntamento" |
| Dominio | ➡️ se diverso | aggiornare `canonical`, `og:url`, sitemap, robots |

### Foto da caricare in `assets/img/`
Carica i file con **esattamente** questi nomi (il sito li richiama già):

| Nome file | Quale foto | Dove appare | Privacy |
|---|---|---|---|
| `dott-catalano-endoscopia.jpg` | Dott. che guarda in camera con l'endoscopio vicino alla bocca del paziente | Hero | OK (paziente non identificabile) |
| `dott-catalano-ritratto.jpg` | Dott. sorridente in piedi accanto alla torre Olympus | Chi sono + anteprima social | OK (solo medico) |
| `dott-catalano-endoscopia-nasale.jpg` | Endoscopia nasale al signore con capelli bianchi | Chirurgia rino-sinusale | ⚠️ paziente identificabile: serve consenso |
| `dott-catalano-laringoscopia.jpg` | Esame con monitor rosa, occhi del paziente oscurati | In ambulatorio | OK (anonimizzata) |
| `dott-catalano-microscopio.jpg` | Dott. al microscopio Carl Zeiss (otomicroscopia) | In ambulatorio | ⚠️ paziente identificabile: serve consenso |

> **Consenso immagini pazienti**: per le foto in cui il paziente è riconoscibile serve un consenso scritto
> all'uso dell'immagine. In alternativa, ritaglia/sfoca il volto prima di pubblicare.
> Carica file ottimizzati per il web (lato lungo ~1600px, < 300 KB).

### Modulo di contatto (gratuito)
Il form usa un endpoint placeholder. Per riceverlo via email **senza backend e senza costi**:
- **Formspree** (https://formspree.io) — piano gratuito; copia l'endpoint in `action="..."`.
- oppure **Web3Forms** (https://web3forms.com) — gratuito, basta una access key.

---

## 🚀 Pubblicazione gratuita (consigliata: GitHub Pages)

1. Esegui il commit e push del repository.
2. Su GitHub → **Settings → Pages** → *Source: Deploy from a branch* → seleziona il branch e cartella `/root`.
3. Il sito sarà online su `https://<utente>.github.io/<repo>/`.
4. **Dominio personalizzato** `drsalvatorecatalano.it`: in *Settings → Pages → Custom domain* inserisci il dominio e configura i record DNS dal provider del dominio (file `CNAME`). HTTPS è gratuito e automatico.

> In alternativa **Cloudflare Pages** o **Netlify**: stesso costo (zero), deploy automatico ad ogni push.

---

## 🔎 Dopo la pubblicazione — visibilità locale

Il sito è la base; per "aumentare in modo massivo la visibilità" servono anche questi passi (gratuiti):

1. **Profilo dell'attività su Google** (Google Business Profile) — il fattore #1 per le ricerche "otorino Domodossola". Scheda completa, foto, orari, link al sito, recensioni.
2. **Google Search Console** — invia la `sitemap.xml`, monitora le query.
3. **Coerenza NAP** (Nome, Indirizzo, Telefono identici) su sito, Google, MioDottore, PagineGialle, ecc.
4. **Recensioni**: chiedere ai pazienti soddisfatti una recensione su Google.
5. **Contenuti**: in futuro aggiungere pagine/articoli su temi cercati localmente (es. "apnee notturne", "sinusite cronica", "deviazione setto").

---

## 🛠️ Anteprima in locale

Apri semplicemente `index.html` nel browser, oppure avvia un piccolo server:

```bash
python3 -m http.server 8000
# poi visita http://localhost:8000
```

---

## ♿ Note tecniche

- Mobile-first e responsive.
- Accessibilità: skip-link, focus visibile, contrasti, supporto `prefers-reduced-motion`.
- Nessun cookie di profilazione di default (privacy-friendly).
- Nessuna dipendenza esterna → caricamento veloce (ottimo per SEO).
