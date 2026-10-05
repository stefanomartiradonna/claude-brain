---
name: content-radar
description: >
  Radar bisettimanale per la content strategy: monitora i post LinkedIn recenti degli autori di
  riferimento (watchlist) + le conversazioni sui temi core (posizionamento B2B, early stage, growth,
  product marketing, GTM), li mappa sui POV del sistema content-flywheel e produce un Google Doc
  con 5-8 angle prioritizzati per post e articoli. Usa quando l'utente dice "content radar",
  "radar bisettimanale", "lancia il radar", "cosa hanno pubblicato gli autori nelle ultime 2 settimane",
  o quando il cron bisettimanale lo invoca. NON aggiorna la knowledge base: propone solo candidati.
---

# Content Radar — loop bisettimanale autori + temi

Scopo: alimentare la produzione editoriale di Stefano (post LinkedIn + articoli Substack) con segnali
freschi, già tradotti in angle collegati ai SUOI core argument. Non è rassegna stampa: ogni output
deve superare il test "questo serve a scalare un POV di Stefano?".

**Working directory attesa:** il repo `System-content-flywheel`. Se non ci sei, chiedila o usa
`c:\Users\Utente\Documents\System-content-flywheel`.

**Config:** autori e temi stanno in `references/watchlist.md` (in questa cartella skill).
Modificare quella, non questo workflow.

---

## Fase 0 — Setup contesto

1. `git pull` nel repo System-content-flywheel (il sistema è cross-surface).
2. Leggi da `knowledge/foundation/`: `pov.md` (POV-master + sotto-POV), `content-strategy.md`
   (5 tipi di contenuto, trigger), `audience.md` (buyer, convinzioni, lessico). Questi sono i core
   argument contro cui mappare TUTTO.
3. Leggi `knowledge/hypotheses/active.md` (per la sezione "Segnali per la knowledge").
4. Determina la data del run (`YYYY-MM-DD`, chiave del ciclo) e la finestra: ultimi 15 giorni.
   Come etichetta di periodo secondaria usa il range di settimane ISO coperte (`Wxx–Wxx+1`).
5. Leggi `references/watchlist.md` di questa skill: lista autori + temi + query.

## Fase 1 — Radar autori (browser)

**Canale primario: `chrome-devtools-mcp`.** Si attacca al Chrome dell'utente già aperto
e già loggato su LinkedIn (`--autoConnect`). Tool da usare, in quest'ordine:

- `mcp__chrome-devtools-mcp__list_pages` — verifica che il browser risponda e vedi i tab aperti
- `mcp__chrome-devtools-mcp__navigate_page` — apri il profilo dell'autore
- `mcp__chrome-devtools-mcp__take_snapshot` — leggi i post dall'albero di accessibilità

Se i tool non sono già caricati, prendili con ToolSearch:
`select:mcp__chrome-devtools-mcp__list_pages,mcp__chrome-devtools-mcp__navigate_page,mcp__chrome-devtools-mcp__take_snapshot`

**Fallback dichiarato: `claude-in-chrome`.** Se i tool `chrome-devtools-mcp` non sono disponibili in
sessione (tipicamente CONNECT_TIMEOUT all'avvio, anche quando `claude mcp list` lo dà Connected),
passa a `mcp__claude-in-chrome__*` e prosegui — non fermare il run. L'estensione di claude.ai è
installata e funzionante su questa macchina: ha retto 7/7 autori il 2026-08-17, 2026-08-24,
2026-09-21 e 2026-10-05. Tool equivalenti:

- `mcp__claude-in-chrome__tabs_context_mcp` (con `createIfEmpty: true`) — apre il tab group e verifica il browser
- `mcp__claude-in-chrome__navigate` — apri il profilo dell'autore
- `mcp__claude-in-chrome__get_page_text` — leggi i post (più compatto di uno snapshot)
- `mcp__claude-in-chrome__browser_batch` — accorpa navigate + wait + get_page_text in una chiamata

ToolSearch: `select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__get_page_text,mcp__claude-in-chrome__browser_batch,mcp__claude-in-chrome__tabs_close_mcp`

Note operative su questo canale: dopo `navigate` lascia ~4s di `wait` prima di leggere, altrimenti
`get_page_text` risponde "Can't interact with browser-internal or unparseable URLs". Se un'azione
risponde "Couldn't determine which page this action targets", richiama `tabs_context_mcp` e usa il
tabId che restituisce (gli id cambiano se il tab group viene ricreato). Chiudi i tab che apri.

Qualunque sia il canale, **dichiara nel report quale hai usato** (sezione Note di processo).

Per ogni autore della watchlist:

1. Naviga `https://www.linkedin.com/in/[handle]/recent-activity/all/` con `navigate_page`.
2. Estrai i post degli **ultimi 15 giorni**: hook (testo prima del "…altro"), corpo se rilevante,
   formato (testo / carosello / immagine / video), tema trattato, engagement se visibile
   (reactions, commenti).
3. **Regole anti-rumore:** max 3-4 post rilevanti per autore · skip repost senza commento,
   giveaway "commenta per ricevere", post puramente promozionali · se l'autore non ha pubblicato
   nella finestra, scrivilo e passa oltre.
4. **Se un profilo non carica** (rate limit, login scaduto, layout cambiato): annota nel report
   (sezione Note di processo) e continua — mai bloccare il run per un profilo.

## Fase 2 — Radar temi (WebSearch)

Per ognuno dei temi della watchlist: 1-2 ricerche mirate su cosa è uscito negli **ultimi 15 giorni**
(newsletter di settore, ricerche/report con dati, dibattiti, take contrarian). Usa le query suggerite
nella watchlist come base, adattandole all'attualità.

**Filtro:** scarta tutto ciò che non è collegabile ai core argument (test del generico: se il segnale
potrebbe interessare qualsiasi marketer, non è un segnale — è rumore).

## Fase 3 — Sintesi editoriale (il cuore del radar)

Per ogni segnale sopravvissuto al filtro, mappa TRE coordinate:

- **Quale POV scala** → POV-master (accumulo) o sotto-POV 1-3 (reframe madre / sequenza invertita /
  moltiplicatori) da `pov.md`. Un segnale che non scala nessun POV si scarta o finisce al massimo
  tra i "Segnali per la knowledge".
- **Quale tipo di contenuto** → Opinion / POV-Framework / Case-Teardown / Backstory
  (da `content-strategy.md`, con lo stadio di awareness che muove).
- **Quale trigger del buyer aggancia** → dai 4 tipi in `audience.md` (dolore / evento positivo /
  esterno / transizione di fase).

Poi produci **5-8 angle prioritizzati** (mai di più — la scarsità è il valore). Per ogni angle:

1. **Titolo/hook proposto** (in italiano, nella voce di Stefano: diretto, specifico, mai guru)
2. **Formato consigliato**: post LinkedIn / articolo Substack / infografica / combinazione hub&spoke
3. **Perché ora**: il segnale che lo rende attuale in questo ciclo
4. **Le 3 coordinate** (POV · tipo · trigger)
5. **Fonte**: link al post dell'autore o alla risorsa

Ordina per priorità: prima gli angle che (a) scalano il POV-master, (b) hanno un aggancio d'attualità
forte, (c) coprono tipi di contenuto diversi tra loro (variety dentro LinkedIn).

## Fase 4 — Report su Google Doc

Crea un Google Doc via Google Drive MCP, titolo: `Content Radar — Ciclo [YYYY-MM-DD] (Wxx–Wxx+1)`.
(Cartella di destinazione: se l'utente ne ha indicata una, usala; altrimenti root di Drive.)

Struttura fissa del Doc (in italiano):

1. **Executive summary** — 3 righe: il tema del ciclo, l'angle più forte, cosa ignorare.
2. **Cosa hanno detto gli autori** — per autore: temi trattati + il post più notevole con perché.
3. **Cosa gira sui temi core** — segnali dalle ricerche, con fonte.
4. **Gli angle pronti per te (5-8, prioritizzati)** — il cuore, formato della Fase 3.
5. **Segnali per la knowledge (solo candidati — nessun file modificato)** — pattern nuovi candidati
   per `references/`, evidenze pro/contro le ipotesi H01-H07. Formato: "CANDIDATO: [cosa] → [dove
   andrebbe] → [perché]". Decide Stefano cosa promuovere.
6. **Note di processo** — profili non raggiunti, limiti dei dati, tempo di run.

## Fase 5 — Log, push e rinnovo del loop

1. Aggiungi una riga a `radar/log.md` nel repo progetto:
   `| [data run YYYY-MM-DD] | [Wxx–Wxx+1] | [link al Doc] | [sintesi in 1 riga] |`
2. Commit + push: `chore: content radar — ciclo [YYYY-MM-DD]` (autorizzato dal CLAUDE.md di progetto).
3. **Trigger durevole (primario):** è lo **scheduled task Windows `Content Radar`** (domenica
   alterna 10:00, `StartWhenAvailable`) che lancia `scripts/launch-content-radar.ps1` — sopravvive
   alla chiusura di Claude Code. Non serve fare nulla qui per rinnovarlo: il task ricorre da solo.
   **Fallback (solo se il task NON è installato):** registra con CronCreate un job **one-shot**
   (`recurring: false`) per **15 giorni dopo la data del run, alle 10:00** (cron: `0 10 [giorno] [mese] *`),
   prompt: `Esegui la skill content-radar nella directory c:\Users\Utente\Documents\System-content-flywheel (run bisettimanale automatico).`
   Se CronCreate non è disponibile, caricalo con ToolSearch. Nota: i cron sono session-only — valgono
   solo finché la sessione resta aperta; per questo il meccanismo primario è lo scheduled task OS.
4. Chiudi riportando all'utente: link al Doc, i 3 angle top in una riga ciascuno, e conferma che il
   prossimo run è già coperto dallo scheduled task `Content Radar` (o dal cron di fallback).

---

## Regole di qualità (non negoziabili)

- **Test del generico:** un angle che potrebbe scrivere qualsiasi consulente si scarta.
- **Ogni angle dichiara il suo POV.** Senza collegamento esplicito, fuori.
- **Mai inventare:** se un dato/post non è verificabile, si omette o si marca come incerto.
- **Voce:** suggerimenti di hook in italiano, mai pomposi, con esempio/numero dove possibile.
- **Scarsità:** meglio 5 angle forti che 12 mediocri.

## Troubleshooting

- **I tool `chrome-devtools-mcp` non esistono in sessione** (ToolSearch non li trova, o il system
  reminder dice CONNECT_TIMEOUT): il server non si è agganciato all'avvio e in sessione non si
  riconnette. `claude mcp list` può dirlo Connected: non contraddice niente, misura un'altra cosa.
  Non insistere e non fermare il run: passa a `claude-in-chrome` (Fase 1). Dal 2026-10-05 il server
  è invocato dal bin globale `chrome-devtools-mcp` invece che da `npx chrome-devtools-mcp@latest`,
  che toglie il round-trip al registry: se il timeout si ripresenta, controlla che il bin ci sia
  ancora (`npm ls -g --depth=0 | grep chrome`) prima di cercare altrove.
- **`chrome-devtools-mcp` è caricato ma non risponde** (`list_pages` fallisce): verifica che Chrome
  sia aperto. Se lo è, passa a `claude-in-chrome`; se nessuno dei due canali va, avvisa l'utente e
  degrada a WebSearch per gli autori ("[autore] LinkedIn post [tema] last 2 weeks"), segnalandolo
  nelle Note di processo come dato parziale.
- **LinkedIn chiede login / blocca:** avvisa l'utente e prosegui con gli autori raggiungibili +
  WebSearch come fallback parziale ("[autore] LinkedIn post [tema] last 2 weeks").
- **Google Drive MCP non disponibile:** salva il report come `radar/[YYYY-Wxx]-content-radar.md`
  nel repo progetto (fallback), segnala il mancato Doc.
- **Run manuale fuori cadenza:** la finestra resta "ultimi 15 giorni" dal giorno del run.
