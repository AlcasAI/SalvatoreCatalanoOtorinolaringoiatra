# Guida alla visibilità locale — Dr. Salvatore Catalano

Obiettivo: comparire **in alto su Google** per ricerche come *"otorino Domodossola"*,
*"otorinolaringoiatra VCO"*, *"apnee notturne Domodossola"* e portare contatti allo studio.
Tutti i passi qui sotto sono **gratuiti**.

> Ordine di importanza: **1) Profilo Google → 2) Sito + Search Console → 3) Recensioni → 4) Citazioni → 5) Contenuti.**
> Il sito da solo non basta: il fattore numero uno per le ricerche locali è il **Profilo dell'attività su Google**.

---

## 1) Profilo dell'attività su Google (Google Business Profile) — PRIORITÀ MASSIMA

È la scheda che appare nella mappa e a destra nei risultati. Per un medico locale vale più del sito.

1. Vai su **https://business.google.com** e accedi con l'account Google dello studio.
2. Crea/rivendica la scheda: **categoria principale "Otorinolaringoiatra"** (aggiungi anche "Medico").
3. Compila **tutto**:
   - Nome esatto: *Dr. Salvatore Catalano — Otorinolaringoiatra*
   - Indirizzo studio (o "servo i clienti fuori sede" se solo a domicilio/ospedale)
   - **Telefono** e **sito** (l'URL del sito appena pubblicato)
   - **Orari** (gli stessi del sito)
   - Servizi: visita ORL, endoscopia naso-sinusale, chirurgia endoscopica, apnee del sonno, ecc.
   - Descrizione con parole chiave naturali (Domodossola, VCO, naso/orecchio/gola)
4. Carica **foto reali**: ritratto, studio, esterno. Le schede con foto ricevono molti più contatti.
5. **Verifica** la scheda (per posta/telefono/video): senza verifica non si posiziona bene.
6. Pubblica un breve **"Post"** ogni 2–4 settimane (novità, consigli): tiene la scheda attiva.

---

## 2) Sito web + Google Search Console

Il sito è già ottimizzato (meta tag, dati strutturati Schema.org, sitemap). Resta da farlo "vedere" a Google.

1. Pubblica il sito (vedi sotto, GitHub Pages).
2. Vai su **https://search.google.com/search-console** → aggiungi la proprietà (il dominio).
3. **Invia la sitemap**: `https://drsalvatorecatalano.it/sitemap.xml`.
4. Usa **"Controllo URL" → Richiedi indicizzazione** per la home.
5. Dopo qualche giorno controlla *Copertura* e *Risultati di ricerca* per vedere le query che portano visite.

> Verifica i dati strutturati con il **Rich Results Test**: https://search.google.com/test/rich-results

---

## 3) Recensioni (fiducia + posizionamento)

- Le recensioni Google influenzano **molto** il ranking locale e la scelta del paziente.
- Chiedi ai pazienti soddisfatti una recensione: il modo più semplice è il **link breve** che Google
  genera dalla scheda ("Chiedi recensioni") — si può mettere in un QR in studio o in un messaggio.
- **Rispondi sempre** alle recensioni (anche con un grazie): segnala a Google una scheda attiva.

---

## 4) Citazioni e coerenza NAP

**NAP = Name, Address, Phone.** Devono essere **identici ovunque** (anche la formattazione del telefono).
Verifica/aggiorna la presenza su:

- Google Business Profile
- MioDottore (profilo già esistente)
- PagineGialle / PagineBianche
- Doctolib, Dottori.it e simili (se utili)
- Eventuali pagine ASL/strutture

Incoerenze nei dati confondono Google e abbassano il posizionamento.

---

## 5) Contenuti (crescita nel tempo)

Quando vorrai spingere oltre, aggiungiamo al sito **pagine/articoli** sui temi più cercati localmente,
una per argomento (ognuna è una nuova "porta d'ingresso" da Google):

- *Sinusite cronica: sintomi e quando operare*
- *Russamento e apnee notturne (OSAS): cosa fare*
- *Deviazione del setto nasale*
- *Vertigini: a chi rivolgersi nel VCO*

Ogni articolo: titolo chiaro, 600–1000 parole, linguaggio semplice, una call-to-action verso la visita.

---

## Social (facoltativo, supporto)

- Una pagina **Facebook/Instagram** locale aiuta la notorietà e il passaparola.
- Collega i profili alla scheda Google e al sito (campo `sameAs` già predisposto nel codice).

---

## Pubblicare il sito gratis con GitHub Pages

1. Assicurati che il codice sia su GitHub (è già pushato sul branch del progetto).
2. Sul repository: **Settings → Pages**.
3. In *Build and deployment* → *Source*: **Deploy from a branch**.
4. Seleziona il **branch** del sito e la cartella **/(root)** → **Save**.
5. Dopo 1–2 minuti il sito è online su `https://alcasai.github.io/salvatorecatalanootorinolaringoiatra/`.
6. **Dominio personalizzato** `drsalvatorecatalano.it`:
   - In *Settings → Pages → Custom domain* inserisci `drsalvatorecatalano.it` → Save.
   - Dal pannello DNS del dominio crea i record indicati da GitHub (CNAME/A). HTTPS è gratuito e automatico.

> Alternative equivalenti e gratuite: **Cloudflare Pages** o **Netlify** (deploy automatico ad ogni push).

---

## Checklist rapida

- [ ] Profilo Google creato, compilato e **verificato**
- [ ] Foto reali caricate (Google + sito)
- [ ] Sito pubblicato e dominio collegato
- [ ] Sitemap inviata in Search Console
- [ ] Dati NAP identici su Google, MioDottore, PagineGialle…
- [ ] Primo invito alle recensioni Google ai pazienti
- [ ] (Più avanti) Primo articolo SEO pubblicato
