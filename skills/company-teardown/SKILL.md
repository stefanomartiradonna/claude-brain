---
name: company-teardown
description: Produce analisi giornalistiche long-form di aziende reali (startup, scale-up, unicorni) per la rubrica Company Teardown della newsletter "da 0 al PMF". Copre origini, acquisizione primi clienti, positioning, GTM evolution, e — opzionalmente — unit economics e salute finanziaria. Usa quando l'utente dice "fai il teardown di [azienda]", "analisi company teardown", "scrivi il teardown di [azienda]", "rubrica teardown", "analisi [azienda] per la newsletter".
license: MIT
metadata:
  author: Stefano Martiradonna
  version: 1.3.0
---

# Company Teardown

## Overview

Skill per la rubrica "Company Teardown" della newsletter "da 0 al PMF". Produce analisi editoriali di aziende reali basate su fatti verificati: origini, acquisizione primi clienti, positioning, GTM evolution, e — quando i dati lo permettono — unit economics e salute finanziaria.

Non è un case study per outreach (usa `case-study-creator`). Non è un'analisi strategica in astratto (usa `strategic-advisor`). Non è un'analisi del vettore di crescita di un brand consumer (usa `how-small-brands-growth`). È un pezzo editoriale lungo-form costruito su ricerca verificata, con una narrativa ad atti cronologici e un angolo editoriale dichiarato.

**Prima di procedere:** leggi tutti i file in `references/`, comprese le schede in `references/examples/`. Le schede servono a capire quale formato proporre. I testi integrali degli articoli di riferimento si leggono dopo la Fase 2, quando il formato è deciso (vedi Fase 2bis).

---

## Instructions

### Fase 1 — Intake & Verifica

1. Leggi tutto il materiale condiviso dall'utente (articoli, note, appunti, dati grezzi, link)
2. Identifica i claim che richiedono verifica attiva: round di funding, date chiave, revenue dichiarate, milestones di prodotto, composizione del team fondatore, acquisizioni
3. Lancia la ricerca con **cinque agenti in parallelo**, uno per corsia: storia e funding, numeri, clienti, GTM, prodotto e motore di crescita. Le cinque chiamate Agent partono nello stesso messaggio, con `subagent_type: general-purpose` e `model: sonnet`. Brief comune, corsie e formato di ritorno sono in `references/research-lanes.md`. Se lo strumento Agent non è disponibile, esegui le corsie in sequenza con lo stesso brief.
4. Unisci i risultati seguendo la sezione "Sintesi" di `references/research-lanes.md`: una tabella sola, le contraddizioni tra corsie segnate ❌, i buchi critici rilanciati a un agente mirato.
5. Per ogni claim critico, classifica:
   - ✅ Verificato con fonte citata
   - ⚠️ Non verificabile pubblicamente — segnalato, andrà dichiarato nel testo
   - ❌ Contraddice le fonti trovate — richiede chiarimento dall'utente
6. Mostra la tabella di verifica all'utente
7. Se ci sono ❌ chiedi all'utente di risolvere prima di procedere

Consulta `references/verification-checklist.md` per i dettagli su cosa verificare per ogni categoria di dato.

### Fase 2 — Domande di sviluppo

Fai massimo 5 domande, divise in tre blocchi:

**Focus narrativo:**
- Quale arco temporale vuoi enfatizzare? (0→PMF / PMF→growth / full arc / un momento specifico)
- Ci sono episodi, scelte o turning point che vuoi approfondire e che non sono nelle fonti pubbliche?

**Angolo editoriale:**
- Che POV vuoi adottare? (neutro investigativo / ammirazione / critico / "cosa avrei fatto diversamente")
- C'è qualcosa di non ovvio o contro-intuitivo sull'azienda che vuoi portare in primo piano?
- Includo i moduli **leve di crescita** e **flywheel**? (default sì per le leve; il flywheel solo se i loop sono dimostrabili dai fatti, altrimenti lo salto — vedi gate in `references/structure.md`)

**Sezione finanziaria:**
- Includi l'analisi dei numeri (revenue, EBITDA, gross margin, unit economics, scenari)?
- Se sì: quali metriche e con che profondità?

Chiudi la Fase 2 dichiarando il formato che esce dalle risposte: investigativo ad atti, tematico o playbook.

### Fase 2bis: leggi per intero gli articoli di riferimento (obbligatorio)

Prima di proporre l'outline:

1. `git pull` nel repo privato `claude-private-refs` (clone locale accanto a `System-content-flywheel`, `~/Documents/claude-private-refs`).
2. Scegli gli articoli dalla tabella qui sotto, in base al formato e ai moduli decisi in Fase 2.
3. **Leggi per intero ogni articolo scelto**, dall'inizio alla fine, senza limiti di righe. La lettura la fai tu, non un subagente: serve a chi scrive, e un riassunto non basta. Le schede in `references/examples/` orientano, non sostituiscono il testo.
4. Se il repo non è raggiungibile, dillo in una riga e fermati. Non si scrive un teardown sul modello di Michelon senza aver letto Michelon.
5. Apri l'outline dicendo quali articoli hai letto: titolo, autore, data.

| Formato | Leggi sempre (in `claude-private-refs/`) | In aggiunta se |
|---|---|---|
| Investigativo ad atti (default, anche senza finanza o con focus 0→PMF) | `company-teardown/satispay-michelon.md` | leve o flywheel inclusi: `company-teardown/weroad-mastella.md` |
| Tematico (azienda consolidata, conta lo stato attuale più della storia) | `company-teardown/teamsystem-michelon.md` | leve o flywheel inclusi: `company-teardown/weroad-mastella.md` |
| Playbook (educational breakdown) | `company-teardown/weroad-mastella.md`, più l'estratto Atlassian/Hermann in `references/examples/atlassian-hermann.md` (il testo integrale non è nel sistema) | sezione "Facciamo i conti" inclusa: `company-teardown/satispay-michelon.md` |
| Qualsiasi formato | (si aggiunge agli articoli della riga del formato) | analisi dei numeri inclusa in Fase 2: `company-teardown/startup-italiane-2026-albanese.md`, il modello per gli indicatori calcolati sui dati pubblici (ricavo per cliente nel tempo, clienti e ricavi per persona, valutazione implicita, ritmo mensile proiettato, moltiplicatore chiesto dal target) |

Se in Fase 3 l'utente cambia formato, leggi gli articoli del nuovo formato prima di rifare l'outline.

### Fase 3 — Outline

Proponi la struttura basata sulle risposte della Fase 2. Struttura default:

1. **Hook** — 3-5 righe: numero singolo, paradosso o contraddizione che crea tensione immediata
2. **Frame investigativo** — 1 paragrafo: come hai raccolto le informazioni e cosa risponde il pezzo
3. **Atti cronologici** — da 4 a 8 atti con titolo + anni nel titolo (es. "ATTO 2 — Il network (2016–2019)"), ognuno con: narrative dei fatti chiave + interpretazione strategica del momento
4. **[Opzionale] Facciamo i conti** — sezione separata con: assunzioni esplicite, 3 scenari con implicazioni pratiche
5. **[Opzionale] Opportunità adiacenti** — mercati non esplorati ma accessibili con il network esistente
6. **[Raccomandato] Le leve di crescita** — 4-8 leve di prodotto/marketing isolate e nominate, ognuna con cosa fa + perché funziona (con fatto/numero) + come applicarlo
7. **[Raccomandato — con gate] Il/i flywheel** — i loop auto-alimentanti che spiegano la crescita. **Includere solo se dimostrabili dai fatti; altrimenti omettere** (mai inventare un loop)
8. **Closing synthesis** — ritorna alla domanda o paradosso dell'apertura, verdict, apertura verso il futuro

Attendi la conferma dell'utente prima di scrivere il draft.

Consulta `references/structure.md` per le specifiche di ogni sezione.

### Fase 4 — Draft completo

1. Scrivi con davanti i testi letti in Fase 2bis: struttura, ritmo, passaggi tra un atto e l'altro e gestione dei dati incerti si prendono da lì, i contenuti no. Se non sono più nel contesto (sessione lunga), rileggili per intero prima di scrivere.
2. Segui le linee guida in `references/narrative-guide.md`
3. Rispetta lo stile in `~/.claude/skills/newsletter-writer/references/style-guide.md`
4. Lunghezza target: 3500–5000 parole
5. Segna i dati incerti con `[DA VERIFICARE]` nel testo
6. Dati finanziari: sempre con fonte inline es. "secondo il bilancio 2023 depositato al MISE" o "come dichiarato dal CEO in un'intervista a Il Sole 24 Ore"
7. Salva il file in `articoli/Company-Teardown-[NomeAzienda]-[Anno].md` nel progetto System-content-flywheel

### Fase 5 — Revisione editoriale

1. Proponi 3-5 titoli alternativi + sottotitolo per ciascuno
2. Breve analisi strutturale:
   - Cosa funziona bene
   - Cosa è debole o da sviluppare
   - Un suggerimento editoriale finale

---

## Examples

### Example 1: Teardown full arc con analisi finanziaria

**User says:** "fai il teardown di Satispay per la mia newsletter"

**Actions:**
1. Fase 1 — Verifica: cinque agenti in parallelo (storia e funding, numeri, clienti, GTM, crescita), sintesi in un'unica tabella ✅/⚠️/❌
2. Fase 2 — Domande: arco temporale? (full arc), POV? (neutro investigativo), finanza? (sì, con scenari). Formato: investigativo ad atti
3. Fase 2bis: `git pull` e lettura integrale di Satispay/Michelon e Startup italiane 2026/Albanese (c'è l'analisi dei numeri), più WeRoad/Mastella se entrano le leve
4. Fase 3 — Outline: si apre con gli articoli letti, poi 7 atti cronologici (2013–2026) + sezione "Facciamo i conti" + closing synthesis
5. Fase 4 — Draft: ~4500 parole, salvato in `articoli/Company-Teardown-Satispay-2026-05.md`
6. Fase 5 — Revisione: 4 titoli alternativi + analisi strutturale

**Result:** Articolo completo, verificato, con sezione finanziaria e verdict finale

### Example 2: Teardown focalizzato su 0→PMF, no finanza

**User says:** "scrivi il teardown di Figma — focus su come hanno acquisito i primi clienti, senza la parte numeri"

**Actions:**
1. Fase 1 — Verifica: founding story, key hires, beta timeline, prime partnership, product milestones
2. Fase 2 — Domande: conferma foco su 0→PMF, salta la sezione finanziaria
3. Fase 3 — Outline: 5 atti (2012–2020 circa) + no "Facciamo i conti"
4. Fase 4 — Draft: ~3500 parole, focus su community-led growth e PLG motion
5. Fase 5 — Revisione: 3 titoli + analisi

**Result:** Articolo narrativo senza analisi finanziaria

### Example 3: Teardown playbook con leve di crescita + flywheel

**User says:** "fai il teardown di WeRoad — voglio capire come funziona il loro playbook di crescita"

**Actions:**
1. Fase 1 — Verifica: round di funding (pre-seed→Serie C), fatturato, numero coordinatori/viaggiatori, founding story → tabella ✅/⚠️/❌
2. Fase 2 — Domande: format educational breakdown (playbook, non paradosso), POV ammirazione strutturata, leve di crescita SÌ, flywheel SÌ (loop contenuti + community dimostrabili dai fatti)
3. Fase 3 — Outline: hook-domanda + sezioni tematiche (origini, modello) + **6 leve di crescita** con "come applicarlo" + **2 flywheel** + lezioni finali
4. Fase 4 — Draft: ~6000+ parole, learnings embedded per sezione, stile playbook
5. Fase 5 — Revisione: titoli + analisi

**Result:** Teardown in stile educational breakdown con leve e flywheel espliciti — vedi `references/examples/weroad-mastella.md` come modello

---

## Troubleshooting

### I dati finanziari non sono verificabili

**Causa:** L'azienda è privata e non deposita bilanci pubblici accessibili
**Soluzione:** Segna nella tabella ⚠️. Usa fonti secondarie: interviste al CEO, press release, stime di settore con fonte dichiarata. Dichiara nel testo l'incertezza con attributione ("secondo quanto dichiarato dal CEO in un'intervista a..."). Non inventare mai numeri.

### Il materiale condiviso è troppo scarso per un articolo completo

**Causa:** L'utente ha fornito solo appunti iniziali senza ricerca strutturata
**Soluzione:** Usa la Fase 1 per fare ricerca attiva autonoma (WebSearch + Apify). In Fase 2 chiedi se ci sono episodi o conoscenze dirette che non emergono dalle fonti pubbliche.

### L'azienda è internazionale e ha poca coverage in italiano

**Causa:** Startup straniera con documentazione solo in inglese
**Soluzione:** Scrivi l'articolo in italiano, cita le fonti in lingua originale. Include quote in inglese se rilevanti, con traduzione contestuale nel testo.

### Non riesco a distinguere questo teardown da un article di `how-small-brands-growth`

**Criterio:** `company-teardown` parte dai fatti verificati e costruisce una narrativa editoriale su una singola azienda reale. `how-small-brands-growth` applica il framework dei 5 vettori di disruption (Kinner) per diagnosticare o valutare la strategia di crescita di un brand consumer. Non si sovrappongono.
