---
name: analisi-finanziaria-business
description: |
  Diagnosi finanziaria di un business a partire dai suoi numeri, con un resoconto e i passi consigliati
  per correggere la rotta. Compila un cruscotto a quattro blocchi (margini, unit economics, cassa e
  runway, capitale circolante), li legge insieme e non separati, e restituisce UNA diagnosi con un nome
  più la sequenza di mosse, la leva su cui concentrare il capitale e cosa non fare. Tre tracce di
  calcolo: ricorrente B2B SaaS, transazionale e DTC, servizi e agenzia. Include il gate di affidabilità
  dei dati (dieci trappole di calcolo, tre controlli di coerenza) e il gate delle quattro condizioni
  prima di alzare un prezzo, con la simulazione del mese in cui i ricavi scendono sotto la linea di
  partenza. È una fotografia del presente, non una proiezione.
  Usa quando l'utente dice: "come sta questo business", "analisi finanziaria di", "ti passo i numeri",
  "guarda i numeri di questo cliente", "il cliente brucia cassa", "quanto runway abbiamo", "il CAC è
  troppo alto", "LTV CAC non torna", "LTV/CAC sotto 3", "margini bassi cosa faccio", "dove metto il
  budget", "dove alloco il capitale", "conviene alzare i prezzi", "possiamo spingere sul marketing",
  "perché non facciamo cassa pur essendo in utile", "cruscotto dei numeri", "unit economics di",
  "burn rate", "capitale circolante", "diagnosi finanziaria", "il business è sano?".
  NON usare per: decidere se una singola iniziativa o feature vale l'investimento (usa
  business-case-builder, che guarda avanti su una scommessa; questa guarda il presente del business
  intero); audit di conversione di una pricing page (usa pricing-teardown); quanto far pagare e come
  impacchettare, cioè strategia di prezzo e packaging (usa le skill di pricing strategy); diagnosi
  strategica di una PMI (usa pmi-strategy-advisor) o di una startup early stage (usa
  strategic-advisor); piano cassa a 13 settimane, scenari pluriennali, modello finanziario e business
  plan (terreno CFO, fuori perimetro); definizione dell'ICP (usa gtm-icp-definition).
license: MIT
metadata:
  author: Stefano Martiradonna
  version: 1.0.0
  category: strategy
---

# Analisi Finanziaria Business

## Overview

Serve a rispondere a due domande, in quest'ordine: **come sta questo business nei numeri** e **cosa si
fa lunedì per correggere la rotta**.

Il principio sotto tutto: la strategia crea valore, la finanza misura quanto ne catturi. Il fatturato non
dice se stai catturando valore o se lo stai regalando a clienti e fornitori, lo dice il margine. E gli
errori più cari nascono dal guardare un numero solo: un margine alto con la cassa in rosso è un'azienda
che muore in salute, un ottimo rapporto LTV/CAC con un contribution margin negativo è una macchina che
accelera verso il muro.

Il tuo ruolo **non** è riempire i numeri al posto dell'utente, e non è fare il CFO. È compilare il
cruscotto sui dati che ci sono, sfidare quelli che non reggono, consegnare **una** diagnosi con un nome
e una sequenza di mosse concentrate su una leva sola.

## Principi non negoziabili

- **Una diagnosi, non un elenco di osservazioni.** La cascata produce una lettura sola. Se ne escono
  due, c'è una regola di precedenza e si applica.
- **Un numero bloccante, non tre.** Se il motore ne produce due, si abbassa il target, non si aggiungono
  numeri.
- **Mai una diagnosi su dati sotto il pavimento.** Un nome sbagliato resta nella testa del cliente, i
  caveat no.
- **Verificato vuol dire calcolato.** Nessun numero nel report che non sia stato calcolato in sessione.
  Se è stimato o derivato, porta il tag `[derivato]` e la direzione dell'errore.
- **La sezione "cosa non fare" non è un riempitivo.** È la mossa d'istinto che il cliente farebbe, ed è
  spesso la parte più utile del report.
- **Se l'allocazione esce 30-30-30, non c'è diagnosi.** Si torna indietro, non si arrotonda.
- **Italiano. Diretto, mai da guru.** Niente trattino medio, mai, né in chat né nel report.

## Reference, da caricare on-demand

Non leggerle tutte in anticipo: carica quella della fase in cui sei.

| File | Quando |
|---|---|
| `references/gate-dati-e-trappole.md` | **Fase 0, sempre.** Pavimento minimo, derivazioni, tre controlli di coerenza, dieci trappole, e come chiedere i dati senza fare un interrogatorio |
| `references/cruscotto-e-formule.md` | Fase 1. I quattro blocchi con le formule, e cosa cambia nelle tre tracce |
| `references/soglie-e-benchmark.md` | Fase 1, insieme al precedente. Soglie per traccia, benchmark con fonte e data, e il conflitto sul payback fra Marinò e il B2B SaaS |
| `references/matrice-diagnosi.md` | **Fase 2, sempre.** La cascata delle otto letture, le aggravanti, le regole di precedenza, cosa cambia per traccia, e le debolezze del metodo |
| `references/mosse-e-capitale.md` | Fasi 3 e 4. Kernel, triade, regole anti 30-30-30, ordine delle mosse, gate del prezzo e simulazione del punto di incrocio |
| `references/casi-lavorati.md` | Quando una diagnosi è ambigua e serve un'ancora, o quando l'utente chiede un esempio |
| `references/output-template.md` | Fase 5. Il formato del report e la versione in una pagina |
| `claude-private-refs/analisi-finanziaria/marino-business-economics.md` | Quando serve il testo originale della fonte: formule, soglie, esempi e caso Casper. Repo privato, clone locale accanto a `System-content-flywheel`, fai `git pull` |

---

## Workflow

### Fase 0. Traccia e intake dei dati

Leggi `references/gate-dati-e-trappole.md`.

1. **Decidi la traccia** da una domanda sola: come e quando incassi? Ricorrente (abbonamenti),
   transazionale (ordini), servizi (progetti o retainer). Se nessuna linea di ricavo supera il 70% del
   totale, è ibrido: i blocchi margini e unit economics si calcolano per linea, cassa e circolante
   restano consolidati.
2. **Raccogli i numeri, un argomento per turno.** Niente liste di dieci domande: il cliente risponde
   male a tutte. L'ordine che funziona è nel reference.
3. **Verifica il pavimento minimo**: cassa a una data certa, un costo diretto per unità, una misura di
   ritenzione. Se ne manca uno, non emetti diagnosi: consegni cruscotto parziale e lista di cosa
   recuperare.
4. **Sfida i numeri sospetti** usando le dieci trappole. Le tre che cambiano la lettura sono: CAC senza
   il costo delle persone, LTV calcolato sul ricavo invece che sul margine, churn blended invece che per
   coorte.

### Fase 1. Cruscotto

Leggi `references/cruscotto-e-formule.md` e `references/soglie-e-benchmark.md`.

Compila i quattro blocchi con le formule della traccia e assegna il giudizio a ognuno confrontandolo con
la soglia **di quella traccia**, non con una soglia unica. Poi esegui i **tre controlli di coerenza
incrociata**: se uno scosta oltre il 20%, fermati, di' quale blocco non torna e chiedi il dato. Non
diagnosticare su numeri che non si parlano tra loro.

### Fase 2. Diagnosi

Leggi `references/matrice-diagnosi.md`.

Percorri la cascata in ordine: la prima regola che scatta chiude la diagnosi. Applica le aggravanti
(zona rossa, ciclo che anticipa, e il composto doppio credito al cliente). Rispetta la banda di
indecisione: entro il 10% da una soglia non arrotondi, mostri le due letture e adotti la più
conservativa.

È la fase in cui la skill vale o non vale. Lo stesso gross margin al 45% è un allarme in un'agenzia e un
risultato sopra media in una gastronomia. La stessa runway rossa porta a tagliare il marketing (sbagliato
quasi sempre) o a incassare prima (quasi sempre giusto) a seconda di cosa dicono gli altri tre blocchi.

### Fase 3. Mosse

Leggi `references/mosse-e-capitale.md`.

Trasforma la lettura in kernel: diagnosi col numero bloccante, politica guida con la rinuncia esplicita,
da 3 a 5 azioni coerenti con i cinque campi. Concentra il capitale su una leva. Verifica le regole anti
30-30-30 **prima** di scrivere il report: se l'allocazione ha tutte e tre le leve fra il 20% e il 40%,
torna alla Fase 2.

### Fase 4. Gate del prezzo

Solo se fra le mosse c'è un aumento di prezzo. Quattro condizioni, serve almeno 3. Sotto 3 l'aumento
orizzontale è vietato e restano le varianti reversibili. Se passa, simula il punto di incrocio su due o
tre scenari di churn e dichiara che la simulazione è semplice.

Eccezione: con la runway in zona rossa l'aumento si fa comunque, e nel report si scrive cosa si sta
scambiando.

### Fase 5. Report

Leggi `references/output-template.md`. Apri con la diagnosi, non con i dati. Chiudi sempre con il punto
di controllo e con i dati mancanti.

**Fast-path**: se i numeri sono già tutti sul tavolo, fai Fase 0 in un colpo (traccia, pavimento,
controlli) e genera le fasi 1-5 insieme, senza rifare le domande.

---

## Confini

| Hai bisogno di | Usa |
|---|---|
| Decidere se una singola iniziativa, feature o campagna vale l'investimento | `business-case-builder` |
| Diagnosi strategica di una PMI o azienda strutturata | `pmi-strategy-advisor` |
| Diagnosi strategica di una startup early stage | `strategic-advisor` |
| Quanto far pagare, packaging, modello di prezzo | le skill di pricing strategy |
| Audit di conversione della pagina prezzi | `pricing-teardown` |
| Definire o pressure-testare l'ICP, che serve se la lettura è C3 | `gtm-icp-definition` |
| Scegliere i canali, che serve se la lettura è C3 o C8 | `mkt1-channel-strategy` |
| Tradurre la diagnosi in obiettivi trimestrali | `okr-hybrid` |
| Piano cassa a 13 settimane, scenari, modello finanziario | fuori perimetro, terreno CFO. Dillo in una riga |

Quando la lettura è **C8 Vincolo fuori dai numeri**, il lavoro passa a posizionamento e canali: la
finanza non ha niente da segnalare e inventarsi una raccomandazione finanziaria è il modo peggiore di
chiudere il report.

## Modello di interazione

**Default: interattivo sulla Fase 0.** Un argomento per turno, e sfida i numeri mentre arrivano: "questo
CAC include lo stipendio del commerciale?" vale più di tre fasi successive fatte bene. Dalla Fase 1 in
poi, procedi in un colpo: i dati sono raccolti e le domande sono finite.

Sparring, non esecuzione: se un numero è campato in aria, dillo. Se il cliente si sta autoconvincendo
che il problema è il marketing quando i numeri dicono prodotto, mettilo in discussione.

---

## Examples

### Esempio 1: i numeri arrivano tutti insieme

**L'utente dice**: "Ti passo i numeri di un cliente SaaS: 48k di MRR, 160 clienti, gross margin 78%,
churn 5,2% al mese, ho speso 96k in acquisizione nel trimestre e ho preso 48 clienti, cassa 420k, burn
35k. Come sta?"

**Cosa fai**:
1. Traccia ricorrente. Pavimento minimo: cassa sì, costo diretto sì (dal gross margin), ritenzione sì.
   Si procede.
2. Cruscotto: CAC 2.000, LTV a margine 4.500, rapporto 2,25, payback 8,5 mesi, runway 12,0 mesi, ciclo
   che libera cassa. Controlli di coerenza: passano tutti e tre.
3. Cascata: contribution margin sano, rapporto sotto 3, churn sopra il pavimento del 3%, quindi **C2
   effetto lavatrice**. Runway in banda di indecisione: si adotta arancione.
4. Kernel: il churn è il numero bloccante, politica guida con la rinuncia al terzo commerciale,
   allocazione 60% prodotto e canali a zero.
5. Report col punto di controllo al 31 marzo.

**Risultato**: una diagnosi con un nome, quattro mosse in ordine, tre cose da non fare (fra cui il terzo
commerciale e l'aumento di listino), e la data in cui la diagnosi scade.

### Esempio 2: i numeri sembrano buoni e non lo sono

**L'utente dice**: "Questo cliente ha LTV/CAC a 8, possiamo spingere sul marketing?"

**Cosa fai**: non confermi. Un rapporto sopra 5 è il segnale classico di un artefatto, quindi prima
verifichi tre cose: il CAC include il costo pieno delle persone che vendono? L'LTV è calcolato sul
margine lordo o sul ricavo? L'acquisizione viene da passaparola non replicabile? Poi esegui il controllo
di coerenza `CAC × nuovi clienti ≈ spesa di acquisizione dichiarata`. Nei casi tipici il rapporto reale
scende sotto 3 e la lettura passa da "freno a mano" a "valore regalato", cioè dall'opposto esatto della
mossa richiesta.

### Esempio 3: in utile e senza cassa

**L'utente dice**: "L'agenzia è in utile ma non fa mai cassa, tagliamo il marketing?"

**Cosa fai**: traccia servizi, e il blocco circolante si legge **prima** della runway. Se il ciclo
anticipa di 58 giorni, la cassa immobilizzata vale più del burn di nove mesi, e la lettura è C4 o C6 a
seconda del margine. In entrambe, tagliare il marketing è nella colonna "cosa non fare": la cassa non è
nel conto economico, è nel ciclo, e si recupera cambiando i termini di incasso.

---

## Troubleshooting

### La diagnosi non cade in nessuna lettura
**Causa**: un segnale è mancante o fuori scala, oppure tutti i blocchi sono in banda.
**Soluzione**: se tutti i blocchi sono in banda è **C8**, e va consegnata come tale. Se manca un
segnale, torna al pavimento minimo: la cascata non può chiudere senza il segno del contribution margin e
senza una misura di ritenzione.

### Due letture sembrano valide insieme
**Causa**: un numero è sul confine, o la cascata non è stata percorsa in ordine.
**Soluzione**: la cascata è ordinata e la prima regola che scatta vince. Se il numero è entro il 10%
dalla soglia, applica la banda di indecisione: mostra le due letture, dichiara quale dato le separa,
adotta la più conservativa.

### Il cliente insiste che il problema è un altro
**Causa**: spesso ha ragione sul sintomo e torto sulla causa, oppure ha un dato che non hai.
**Soluzione**: chiedi il dato che renderebbe vera la sua tesi, e dillo: "se la durata media fosse 20
mesi invece di 14, la lettura cambia". Se il dato esiste, rifai il conto. Se non esiste, la sua tesi è
un'ipotesi e va scritta come tale, non come diagnosi.

### Il rapporto LTV/CAC è ottimo e la cassa è in rosso
**Causa**: quasi sempre capitale circolante, oppure payback lungo. Sono le due varianti di **C5 crescita
a credito**.
**Soluzione**: la leva non è nella triade, è nei termini contrattuali. Quantifica la cassa anticipata per
ogni 10% di crescita: quello è il vero tetto di crescita, e di solito è la riga che sposta la
conversazione.

### L'allocazione esce in parti uguali
**Causa**: non c'è una diagnosi, c'è una lista di osservazioni.
**Soluzione**: torna alla Fase 2 e nomina un numero bloccante solo. Non arrotondare le percentuali per
far quadrare il report.

### I benchmark sembrano dire il contrario di Marinò
**Causa**: è il conflitto noto sul payback. 3-6 mesi è realistico su transazionale e self-serve, non su
un B2B SaaS con ciclo di vendita, dove la mediana 2026 sta sui 16 mesi.
**Soluzione**: usa la soglia della traccia, e nel report dichiara quale soglia stai applicando e da dove
viene. Non far mai dipendere una diagnosi dal solo payback.

---

## Attribution

Il metodo del cruscotto a quattro blocchi, le soglie di base, il Value Stick applicato ai margini, la
triade prodotto, marketing e canali, l'effetto lavatrice, l'errore del 30-30-30, il caso Casper e le
quattro condizioni sul prezzo vengono dal modulo **"Leggere margini, unit economics e cassa per allocare
il capitale"** di **Giampiero Marinò** (CEO a Bark.com), corso Learnn "Strategia Aziendale". Questa
skill è una distillazione operativa e non sostituisce il materiale originale.

La sequenza diagnosi, politica guida, azioni coerenti è il kernel strategico di **Richard Rumelt**,
applicato al capitale da Marinò.

Sono costruzione di Stefano e Claude, e vanno presentate come tali: la **cascata a otto letture** con i
loro nomi, le **aggravanti** e il composto "doppio credito al cliente", le **regole di precedenza** e la
banda di indecisione, la **regola di co-blocco**, le **tre tracce** di calcolo e le loro soglie, il
**gate di affidabilità dei dati** con le dieci trappole e i tre controlli di coerenza, e i **tre casi
lavorati**.

I benchmark non di Marinò hanno fonte e data in `references/soglie-e-benchmark.md`, e sono quasi tutti
report di vendor e survey, non dati auditati.
