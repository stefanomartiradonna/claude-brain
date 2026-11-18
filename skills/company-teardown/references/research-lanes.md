# Corsie di ricerca (Fase 1)

La ricerca di un teardown si divide in cinque corsie che non dipendono l'una dall'altra, quindi girano in parallelo su agenti separati. Agli agenti va la raccolta dei fatti. La sintesi, il confronto tra corsie e ogni giudizio restano all'agente principale.

---

## Come si lanciano

- **Un solo messaggio, cinque chiamate Agent**, una per corsia: `subagent_type: general-purpose`, `model: sonnet`. È ricerca ed estrazione, non serve il modello più costoso.
- **Ogni prompt = brief comune + la sezione della corsia.** L'agente non vede la skill né la conversazione: tutto quello che gli serve deve stare nel prompt.
- **Materiale dell'utente:** se l'utente ha condiviso link, articoli o cifre, passa a ogni corsia solo la parte che la riguarda, segnata come "da verificare".
- **Senza lo strumento Agent** (per esempio in una sessione web), esegui le corsie una dopo l'altra con lo stesso brief.

---

## Brief comune (da incollare in ogni prompt)

```
Stai facendo ricerca per un teardown giornalistico su [AZIENDA] ([SITO]).
Contesto in una riga: [settore, paese, B2B o B2C, anno di fondazione se noto].
La tua corsia è: [NOME CORSIA]. Cerca solo quello che riguarda la tua corsia (elenco sotto).
[Eventuale materiale dell'utente da verificare per questa corsia.]

Strumenti, in quest'ordine:
1. WebSearch e WebFetch sulle fonti primarie: sito ufficiale, blog, comunicati stampa,
   interviste ai fondatori, testate note (TechCrunch, Sifted, Il Sole 24 Ore, Corriere, Wired).
2. Actor Apify quando servono dati strutturati che la ricerca semplice non dà
   (Crunchbase, LinkedIn company, SimilarWeb, G2, Capterra, Trustpilot, app store).
   Trovali con mcp__apify__search-actors; se gli strumenti Apify non sono caricati, cercali con ToolSearch.

Regole sulle fonti:
- Nessun dato senza fonte. Ogni riga ha URL e data della fonte.
- Status: ✅ fonte primaria (bilancio depositato, comunicato ufficiale, documento dell'azienda);
  ⚠️ dichiarato in un'intervista, stima di terzi, oppure una sola fonte secondaria;
  ❌ fonti in contraddizione tra loro (riportale entrambe).
- Non stimare, non calcolare, non riempire i buchi. Se un dato non c'è, va in "Non trovato".
- Distingui sempre: dichiarato vs verificato, utenti registrati vs attivi,
  round totale vs tranche, data di annuncio vs data di chiusura.
- Ogni numero porta il mese e l'anno a cui si riferisce, non solo la data dell'articolo
  che lo riporta (un articolo di maggio può citare i clienti di marzo).

Restituisci solo questo, senza prosa di analisi:
1. Tabella: | Claim | Valore | Riferito a (mese/anno) | Fonte (URL) | Data fonte | Status | Nota |
2. Non trovato: i dati della tua corsia che hai cercato senza trovarli, e dove hai cercato.
3. Segnali: al massimo 5 fatti fuori dal tuo elenco che chi scrive il pezzo deve vedere, con fonte.

Elenco della tua corsia:
[INCOLLA QUI LA SEZIONE DELLA CORSIA]
```

---

## Le cinque corsie

### 1. Storia, team, funding
- Fondatori: nomi, ruoli alla fondazione, background; data e città di fondazione
- Ogni round: importo e valuta, tipo, data di chiusura, lead, partecipanti, valutazione post-money se dichiarata
- Quota del capitale presa dal lead o dai nuovi investitori, se dichiarata (serve a calcolare la valutazione implicita)
- Acquisizioni fatte e subite: anno, importo se dichiarato
- Headcount nel tempo, ogni dato con il suo mese e anno; cambi di CEO o di leadership, pivot, cambi di nome

### 2. Numeri
- Ricavi per anno (più anni possibile), margine lordo, EBITDA, risultato netto, cassa, debito
- Aziende italiane: bilanci depositati al Registro Imprese, schede startup innovative, articoli che citano i bilanci
- ARR, run rate, GMV solo se dichiarati, sempre con chi li dichiara e quando
- Tasso di crescita dichiarato (per esempio "cresciamo del 10% al mese"), con chi lo dichiara e quando
- Obiettivi dichiarati: target di ricavi, ARR, clienti o team, con l'orizzonte e la data in cui sono stati annunciati
- Rating, report di analisti, documenti per investitori, se pubblici
- Nessuna cifra ricavata: se un dato va calcolato, porta gli input con la loro fonte e lascia il calcolo a chi scrive

### 3. Clienti
- Chi compra: segmenti, dimensione aziendale o profilo consumer, settori, ruolo di chi decide l'acquisto
- Quanti clienti nel tempo, ogni dato con il suo mese e anno e con la definizione di "cliente" che usa l'azienda (clienti, studi, brand, utenti); loghi pubblici
- Concentrazione, se emerge: peso dei clienti grandi, di un mercato, di un canale
- Metriche dichiarate: churn, retention, NRR, utenti registrati vs attivi
- Come ne parlano i clienti: recensioni su G2, Capterra, Trustpilot, app store (temi ricorrenti, chi recensisce)

### 4. GTM
- Motion: PLG, SLG, PLS, marketing-led, founder-led, e come è cambiata nel tempo, con le date
- Canali di acquisizione osservabili: contenuti, community, paid (librerie degli annunci), partner, eventi, outbound
- Pricing e packaging oggi e in passato (Wayback Machine per le versioni vecchie della pagina prezzi)
- Struttura commerciale: annunci di lavoro per sales, SDR, customer success, partner; dimensione del team sales
- Espansione geografica e di segmento: dove, quale segmento, quando

### 5. Prodotto e motore di crescita
- Milestone di prodotto: lanci, nuove linee, funzioni chiave, con date
- Segnali d'uso: traffico (SimilarWeb), download e posizione negli app store, utenti attivi dichiarati
- Prove di loop: referral, contenuti generati dagli utenti, inviti e collaborazione, effetti di rete. Solo comportamenti osservabili o numeri, non ipotesi
- Da dove viene la crescita, se l'azienda o terzi lo dicono: nuovi clienti, espansione sui clienti esistenti, aumenti di prezzo, acquisizioni, organica vs acquisita

---

## Sintesi (agente principale)

1. Unisci le cinque tabelle in un'unica tabella di verifica.
2. Incrocia le corsie: la stessa cifra con valori diversi in due corsie è ❌ finché non si risolve.
3. Buchi critici per il pezzo (il numero su cui regge l'hook, un round chiave, i ricavi dell'ultimo anno): rilancia un agente solo su quel buco, con la domanda precisa. Non rilanciare corsie intere.
4. Prepara gli input degli indicatori (scheda `examples/startup-italiane-2026-albanese.md`): ricavi, clienti e persone abbinati alla stessa data, quota dell'investitore accanto al round, obiettivi dichiarati accanto al tasso di crescita. Se le date non coincidono, scrivilo nella tabella: il calcolo sarà "su periodi non identici".
5. Gli elenchi "Non trovato" entrano nella tabella come ⚠️ non verificabile.
6. I "Segnali" degli agenti si valutano per l'outline: non entrano nel pezzo senza passare dalla tabella.
