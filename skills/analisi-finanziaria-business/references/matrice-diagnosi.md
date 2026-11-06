# La cascata di diagnosi

Non è una matrice a celle incrociate: è una **cascata ordinata di otto regole**. Si valutano in ordine e
**la prima che scatta chiude la diagnosi**, quindi le otto letture sono mutuamente esclusive per
costruzione e non serve una griglia da 64 caselle. Sopra la cascata stanno due **aggravanti**, che non
cambiano la lettura ma riordinano le mosse.

```
GATE DATI  ->  OROLOGIO (zona di runway)  ->  CASCATA (8 letture)  ->  AGGRAVANTI  ->  KERNEL  ->  MOSSE
```

Le soglie non stanno qui, stanno in `soglie-e-benchmark.md`. Qui sta la logica.

---

## I segnali, e quelli che non generano una lettura

Un segnale genera una lettura solo se cambia la **direzione** della mossa. Se cambia solo l'intensità o
l'ordine, non merita una casella sua.

| Segnale | Stati | Ruolo |
|---|---|---|
| Segno del contribution margin, su coorte matura | negativo / sottile (positivo ma sotto la fascia di traccia) / sano | **genera** la lettura. È il solo segnale senza benchmark: il segno è il segno in ogni traccia |
| Rapporto LTV/CAC, con LTV sul margine lordo | sotto 3 / 3-5 / sopra 5 | **genera** la lettura |
| Driver del rapporto rotto: ritenzione contro CAC | ritenzione sotto il pavimento / CAC sopra il tetto / entrambi | **genera** la lettura, ed è la biforcazione che decide prodotto contro canali |
| Zona di runway | rossa / arancione / gialla / verde | **orologio e aggravante**, non lettura, con una sola eccezione (C6) |
| Segno del ciclo di cassa | anticipa / neutro / libera | **aggravante** |
| Payback in mesi, o in ordini nel transazionale | sotto soglia / sopra soglia | **ausiliario**: qualifica C5 e C7 e serve da controllo di coerenza sul rapporto |
| Direzione del churn | peggiora / stabile / migliora | **ausiliario**: entra nella scelta della leva e nella data del punto di controllo |

**Perché la runway non è una lettura.** La zona di cassa è compatibile con qualunque stato dei margini,
quindi promuoverla a lettura raddoppierebbe la tassonomia aggiungendo zero informazione sulla
direzione. La cassa risponde a "quanto tempo ho", non a "cosa è rotto". Unica eccezione: quando nessun
blocco economico è fuori banda e la cassa è l'unica cosa fuori posto, la cassa **è** la diagnosi (C6).

---

## La cascata

### C1. Crescita che scava

**Segnali.** Contribution margin per unità negativo, misurato sulla **coorte matura**: ordine 2 o
successivi nel transazionale, mese 4 o successivi nel ricorrente, progetto chiuso nei servizi.

**Perché questa e non un'altra.** Col segno negativo ogni altro numero è irrilevante. Un LTV/CAC a 8 su
un'unità che perde soldi significa solo che stai comprando a buon mercato il diritto di perdere soldi
più volte. Precede tutto perché è l'unica condizione che rende **vietata** un'intera classe di azioni,
cioè crescere.

**Mosse, in ordine.**
1. Isolare dove sparisce il margine: prodotto, canale, cliente, SKU, taglia di contratto. Il margine
   negativo è quasi sempre la media di sottoinsiemi, non una condizione uniforme.
2. Spegnere o riprezzare il sottoinsieme in perdita, non l'intero business.
3. Riclassificare i costi col test "sparirebbe se vendessi un'unità in meno", per verificare che il
   segno sia vero e non un errore di classificazione.
4. Leva prezzo sui nuovi, passando dal gate delle quattro condizioni.
5. Solo dopo, costo diretto.

**Cosa non fare.** Aumentare il volume per diluire i costi fissi: è la mossa d'istinto numero uno e con
il contribution margin negativo la diluizione non arriva mai, perché i costi fissi si diluiscono sul
contributo e il contributo è negativo. Secondo divieto: tagliare il prezzo per riempire capacità.

---

### C2. Effetto lavatrice

**Segnali.** Contribution margin positivo, LTV/CAC sotto 3, **ritenzione sotto il pavimento di
traccia**, flusso di nuovi clienti stabile o in crescita.

**Perché questa e non C3.** Entrambe hanno il rapporto sotto 3: la biforcazione è il driver. Se la
ritenzione è sotto il pavimento vince C2 anche quando il CAC è pure sopra il tetto, perché la ritenzione
è un moltiplicatore su ogni euro futuro di acquisizione. Riparare il CAC su un prodotto che non
trattiene è ottimizzare il costo di riempimento di un secchio bucato.

**Mosse, in ordine.**
1. Coorti per mese di ingresso e per segmento, per vedere dove si concentra il churn. Il churn medio è
   quasi sempre due popolazioni, una che resta e una che non doveva entrare.
2. Decidere se è prodotto (non trattiene chi è giusto) o ingresso (entra chi è sbagliato): se il churn
   si concentra nei primi 60-90 giorni è onboarding e qualificazione, se è distribuito è valore.
3. Capitale su prodotto e assistenza.
4. Marketing **fermo al livello attuale**, non azzerato.
5. Nessuna azione sul prezzo fino al punto di controllo.

**Cosa non fare.** Assumere in vendite o alzare il budget di acquisizione perché "serve volume". E non
azzerare il marketing: servono coorti nuove per misurare se la riparazione funziona, e azzerare
l'ingresso migliora artificialmente il churn blended mentre il business peggiora.

---

### C3. Acquisizione fuori prezzo

**Segnali.** Contribution margin positivo, LTV/CAC sotto 3, ritenzione **dentro** la banda di traccia,
CAC sopra il tetto implicito (tetto = LTV diviso 3).

**Perché questa e non C2.** Il prodotto trattiene. Il capitale non va sul prodotto, va su chi porta i
clienti e a che prezzo.

**Mosse, in ordine.**
1. Scomporre il CAC per canale e per segmento e calcolare il tetto **per canale**, non aggregato.
2. Spegnere i canali sopra il tetto, concentrare su quelli sotto.
3. Alzare il numeratore: valore medio dell'ordine, bundle, contratto annuale, taglia minima, upsell
   all'ingresso. Spesso è più rapido che abbassare il CAC.
4. Restringere l'ICP: un CAC alto è spesso un ICP largo.
5. Solo dopo, nuovi canali.

**Cosa non fare.** Aumentare la spesa sul canale che porta volume: volume e tetto sono due cose diverse,
e il canale che porta volume è quasi sempre quello sopra il tetto. Secondo divieto: aprire un terzo e un
quarto canale per diversificare mentre i primi due stanno sopra il tetto.

---

### C4. Valore regalato

**Segnali.** Contribution margin positivo ma **sottile** rispetto alla fascia di traccia, LTV/CAC in
banda o alto.

**Perché questa e non C7.** Un rapporto alto su un margine sottile non è un invito a spingere, è un
artefatto: il numeratore è gonfiato dalla durata e il denominatore è basso perché l'acquisizione non è
ancora pagata a prezzo di mercato. C4 precede C7 e C5 perché il margine sottile rende temporaneo ogni
intervento sulla cassa: sistemi il ciclo e finanzi più in fretta un libro clienti strutturalmente
sottoprezzato.

**Perché "regalato".** Letto col Value Stick: margine sottile con clienti che restano significa che il
valore creato esiste, ma finisce quasi tutto in customer delight e in surplus del fornitore.

**Mosse, in ordine.**
1. Gate delle quattro condizioni sul prezzo.
2. Se il gate passa: prezzo sui nuovi e ai rinnovi, sconti rimossi, pavimento di prezzo alzato.
3. Mix: uscire o riprezzare il sottoinsieme a margine peggiore.
4. Costo diretto, in ordine di peso e non di facilità.
5. Se il gate non passa: packaging e recinti di valore invece di aumento di listino.

**Cosa non fare.** Aumento di listino orizzontale sulla base installata senza le quattro condizioni: il
margine sale nel trimestre, churn e passaparola peggiorano nei due successivi, e la diagnosi diventa
C2. Secondo divieto: riempire la capacità inutilizzata al prezzo attuale, che alza il fatturato e
congela il problema.

---

### C5. Crescita a credito

**Segnali.** Contribution margin e LTV/CAC in banda, ma **almeno uno** di questi due:
- payback oltre la soglia di traccia, variante **credito di acquisizione**;
- ciclo di cassa che anticipa con crescita del fatturato sopra il 5% mensile, variante **credito
  operativo**.

**Perché questa.** Ogni cliente è profittevole e la crescita consuma cassa comunque. Il vincolo non è
nella triade prodotto, marketing, canali: è nei termini contrattuali e nel ciclo operativo. Dire "alloca
su prodotto o marketing" qui è la risposta sbagliata a una domanda giusta.

**Mosse, in ordine.**
1. Quantificare la cassa anticipata per ogni 10% di crescita e confrontarla con la cassa disponibile.
   Quello è il vero tetto di crescita, non il budget marketing.
2. Termini: acconto all'avvio, annuale prepagato con sconto inferiore al costo del capitale,
   fatturazione a inizio periodo, addebito automatico, penali di ritardo.
3. Lato fornitori e magazzino: giorni di pagamento, profondità di stock, riassortimento della coda
   lunga.
4. Nella variante acquisizione: spostare il mix di pagamento del cliente, non tagliare il CAC.
5. Allocazione della triade **invariata** finché il ciclo non è sistemato.

**Cosa non fare.** Tagliare il marketing per fare cassa: la cassa qui non è nel conto economico, è nel
circolante, e tagliare l'acquisizione riduce il burn di poco distruggendo il motore che funziona.
Secondo divieto: finanziare il circolante con debito prima di aver provato i termini contrattuali, che
costano zero.

---

### C6. Muore in salute

**Segnali.** Contribution margin sano, LTV/CAC in banda, payback in banda, e runway sotto 6 mesi (oppure
sotto 12 con burn in salita da tre mesi).

**Perché questa è l'unica lettura generata dalla cassa.** Quando tutti i blocchi economici sono in
banda, la zona di cassa non è l'aggravante di qualcos'altro: è l'intera diagnosi. Il problema non è il
prodotto.

**Mosse, in ordine.**
1. Incassare prima: crediti scaduti, acconti, prepagato, addebito automatico.
2. Dilazionare le uscite non critiche e rinegoziare i termini.
3. Parlare con investitori o banche **col cruscotto in mano**: qui i blocchi sani sono l'argomento, non
   un dettaglio.
4. Tagli solo su spesa che non tocca l'acquisizione né l'erogazione.
5. Prezzo solo se il gate passa, e solo sui nuovi.

**Cosa non fare.** Tagliare il marketing. È la mossa d'istinto, abbassa il burn e spegne l'unica
macchina che sta funzionando, trasformando una crisi di cassa reversibile in una crisi di ricavo
irreversibile. Secondo divieto: contare un round non firmato dentro il numeratore della runway.

---

### C7. Freno a mano

**Segnali.** Contribution margin sano (non sottile), LTV/CAC sopra 5, payback sotto la metà della
soglia di traccia, runway oltre 18 mesi, ciclo neutro o che libera cassa.

**Perché questa.** Un rapporto così alto con cassa larga non è virtù, è sotto-investimento: stai
lasciando sul tavolo crescita che il modello si può permettere.

**Mosse, in ordine.**
1. Verificare che il rapporto non sia un artefatto: CAC che esclude le persone, LTV sul ricavo,
   acquisizione da passaparola non replicabile. Se è un artefatto, la lettura è C4 o C8.
2. Alzare la spesa di acquisizione fino a far scendere il rapporto verso 3-4, a scaglioni, ognuno con
   un punto di controllo.
3. Capitale su marketing e canali.
4. Prodotto solo per sostenere il carico: onboarding, affidabilità.
5. Tetto esplicito: si ferma se il payback supera la soglia o la runway scende sotto 12 mesi.

**Cosa non fare.** Aumentare la spesa su tutto insieme, perdendo la capacità di capire quale scaglione
ha funzionato. E non confondere capacità finanziaria con capacità di erogazione: nei servizi "freno a
mano" spesso vuol dire capacità, non capitale.

---

### C8. Vincolo fuori dai numeri

**Segnali.** Tutti i blocchi in banda, nessuna delle precedenti.

**Perché serve.** Senza questa lettura la skill inventa un problema finanziario per avere qualcosa da
dire. Questa dichiara che la finanza non ha niente da segnalare e che il vincolo è a monte:
posizionamento, ICP, categoria, distribuzione.

**Mosse.** Consegnare il cruscotto, dichiarare i margini di manovra (quanta cassa è investibile senza
scendere sotto 12 mesi di runway, quanto CAC è ancora comprabile sotto il tetto) e rimandare alle skill
di posizionamento e di channel strategy. Nessuna mossa finanziaria inventata.

**Cosa non fare.** Produrre tre raccomandazioni generiche per giustificare il report.

---

## Le due aggravanti

Non sono letture: sono compatibili con quasi ogni lettura, quindi promuoverle raddoppierebbe la
tassonomia senza aggiungere direzione. Cambiano l'**ordine** e l'**ammissibilità temporale** delle
mosse, non la loro natura.

### AG1. Zona rossa
Runway sotto 6 mesi, oppure sotto 9 con burn in salita e stagionalità sfavorevole nel trimestre.
Tre regole si attivano:
- nessuna mossa entra nel piano se il suo primo segnale misurabile arriva oltre 30 giorni. Le altre
  vanno in una lista separata, da riprendere dopo;
- le azioni di incasso e di stop salgono in testa alla sequenza anche se non toccano il numero
  bloccante;
- ogni mossa irreversibile richiede una riga di giustificazione esplicita, perché in zona rossa
  l'irreversibilità si paga due volte.

### AG2. Ciclo che anticipa
Giorni di incasso più giorni di magazzino o di erogazione pre-fattura, meno giorni di pagamento, con
risultato positivo e sopra i 20 giorni.
Effetto: la crescita è un consumo di cassa, quindi **ogni mossa che aumenta il volume porta in allegato
il fabbisogno di cassa che genera**, espresso in euro per ogni 10% di volume in più. Nessuna mossa di
volume senza quel numero accanto.

### Il composto nominato: doppio credito al cliente
AG2 insieme a LTV/CAC sotto 3. È il nome del segnale più pericoloso del modulo: concedi credito due
volte allo stesso cliente, in CAC che non rientra e in giorni di incasso. Quando scatta, la prima mossa
della sequenza diventa **congelare il volume di acquisizione al livello attuale**, prima di qualunque
lavoro di riparazione. Resta un'etichetta e non una lettura: è compatibile con C2, C3, C4 e C5, e
ognuna conserva mosse diverse.

**Lettura finale**: `lettura + aggravanti`, scritta come una frase. "Acquisizione fuori prezzo, con
doppio credito, in zona rossa". Al massimo sedici etichette possibili, ma la logica delle mosse vive
solo nelle otto letture.

---

## Precedenza: come si risolvono i conflitti

### Il caso difficile: contribution margin negativo e runway rossa insieme

Vince **C1** sul nome e sull'ordine delle azioni. AG1 aggiunge la scadenza e mette le azioni di cassa
**in parallelo**, non al posto.

Il motivo: il playbook standard della zona rossa (incassa prima, dilaziona, parla con gli investitori)
applicato a un contribution margin negativo compra tempo per una macchina che distrugge valore a ogni
unità, e un round chiuso su un margine unitario negativo peggiora la posizione invece di salvarla. La
frase operativa: **col segno negativo, prima si ferma l'emorragia unitaria, poi si cerca la
trasfusione.** L'unica azione di cassa che precede lo stop è l'incasso dei crediti già scaduti, che è
gratis e non ha controindicazioni.

### La gerarchia generale, in quattro righe

1. Il **segno** del valore unitario viene prima di tutto: decide quali azioni sono vietate.
2. La **sopravvivenza** viene prima della marginalità **nel tempo di esecuzione**: decide cosa si fa
   nelle prime due settimane.
3. La **marginalità** viene prima della sopravvivenza **nella scelta delle azioni**: decide su cosa si
   spende il capitale discrezionale, perché una cassa sistemata su un margine sottile si riempie e si
   svuota di nuovo.
4. Il **ciclo di cassa** non sceglie mai la direzione: stabilisce il prezzo in cassa di ogni euro di
   crescita.

### Banda di indecisione

Entro il 10% da ogni soglia non si arrotonda. Si mostrano le due letture candidate, si dichiara quale
dato spostato di poco cambierebbe la diagnosi, e si adotta la lettura **più conservativa**, cioè quella
che vieta più spesa. LTV/CAC a 2,9 si legge con C2 o C3. Runway a 12,0 si legge come arancione e non
come gialla.

### Regola di co-blocco

Se due leve, da sole, chiudono ciascuna meno del 60% del gap sul numero bloccante, si dichiarano **due
vincoli** e si **taglia l'ambizione del target** (un solo numero, obiettivo più basso) invece di
dividere il capitale su due fronti. Si taglia il target, non il budget: dividere il budget è il
30-30-30 travestito da realismo.

Se i vincoli sono tre (margine sottile, churn alto e ciclo che anticipa insieme), la risposta onesta è
che non c'è una mossa, c'è una ristrutturazione. Si scrive così.

---

## Cosa cambia per traccia

La cascata è identica nelle tre tracce. Cambiano le soglie (in `soglie-e-benchmark.md`) e, in tre punti,
l'interpretazione.

| Elemento | Ricorrente B2B SaaS | Transazionale / DTC | Servizi / agenzia |
|---|---|---|---|
| Coorte matura per il segno | mese 4 o successivi, al netto di hosting, supporto, commissioni di pagamento, customer success dedicato | ordine 2 o successivi, al netto di spedizione netta, resi, commissioni, affiliate | progetto chiuso, al netto di subappalti e straordinari |
| Pavimento di ritenzione, biforcazione C2/C3 | churn logo mensile sopra 3%, oppure NDR sotto 100% | repeat a 90 giorni sotto le fasce, oppure ordini per cliente a 12 mesi sotto 2,0, **previa verifica di cadenza** | durata media incarico sotto 9 mesi, oppure churn clienti sopra 25% annuo |
| Payback | fasce per ACV, mai usato da solo | in **numero di ordini**, non in mesi | segnale debole, sostituito dal DSO |
| Ciclo di cassa | di norma libera, anticipa con fatturazione mensile e termini a 60-90 giorni | anticipa quasi sempre | anticipa strutturalmente |
| Peso del blocco circolante | più basso, spesso è un vantaggio da difendere | alto, è il tetto di crescita reale | alto e strutturale, è il primo blocco da leggere, prima della runway |

**Letture che non cambiano mai**: C1 (il segno non ha benchmark), C2, C6, C8. Logica e nome identici in
tutte le tracce.

**Letture che cambiano interpretazione**:
- **C5**: nel SaaS scatta quasi sempre nella variante acquisizione, nei servizi quasi sempre in quella
  operativa, nel DTC in quella operativa con il magazzino.
- **C7**: nei servizi significa capacità e non capitale, e la mossa è assumere o subappaltare, non
  alzare un budget.
- **C3**: nei servizi scatta raramente, perché il CAC è pagato in ore di founder non prezzate. Va
  **imputato a tariffa di mercato**, altrimenti la lettura resta invisibile e il business sembra più
  sano di quanto è.

**Business ibrido**: se nessuna linea di ricavo supera il 70% del totale, la lettura si calcola **per
linea** e il report dichiara due letture. L'orologio resta uno, perché la cassa è una. Allocare fra due
linee con due letture diverse è una decisione di portafoglio e sta fuori dal perimetro di questa skill:
si dice, non si risolve.

---

## Le debolezze di questa cascata, e cosa le contiene

Da leggere prima di consegnare una diagnosi, non dopo.

1. **Il pavimento di ritenzione decide la biforcazione più importante ed è la soglia meno solida.** C2 e
   C3 mandano il capitale su leve opposte e sono separate da un numero che nel DTC dipende dalla cadenza
   di consumo della categoria: un integratore e un materasso non hanno lo stesso repeat a 90 giorni né
   lo stesso significato. Rischio: diagnosticare effetto lavatrice su un prodotto a riacquisto
   naturalmente lungo e dirottare il capitale sul prodotto quando il vincolo è nel canale o nel prezzo.
   È l'errore di Casper. *Contenimento*: nelle tracce non ricorrenti, prima che C2 scatti è obbligatoria
   la **verifica di cadenza**, cioè la mediana dei giorni fra primo e secondo ordine fra chi ha
   riacquistato. Se supera la finestra di misura, è sbagliata la finestra e non la ritenzione, e la
   lettura non può essere C2.
2. **Il segno come regola prioritaria assoluta è giusto in media e sbagliato nei modelli a primo ordine
   deliberatamente in perdita** (DTC in abbonamento, SaaS con onboarding incluso, land and expand con
   NDR sopra 115). Qui la cascata grida C1 su un modello che funziona, e lo grida con la massima
   autorevolezza perché C1 è la prima regola. *Contenimento*: C1 si misura solo sulla coorte matura, e
   in assenza della seconda coorte diventa "ipotesi" e non "diagnosi". La riga che lo dichiara va nel
   report, non nelle note.
3. **Il numero bloccante singolo a volte mente.** Ci sono casi con due vincoli co-bloccanti, e
   sceglierne uno produce un piano che non muove nulla mentre il report sembra deciso. *Contenimento*:
   la regola di co-blocco, che taglia l'ambizione del target invece di dividere il capitale. Resta una
   toppa.
4. **L'orologio dipende dal burn, che è il numero che il cliente conosce peggio** e che cambia proprio
   per effetto delle mosse. Un piano calibrato su 5 mesi di runway su un business che ne ha 3 è peggio
   di nessun piano. *Contenimento*: burn sulle uscite di cassa effettive, checklist delle passività
   stagionali sottratte dalla cassa prima di assegnare la zona, divieto di contare raccolte non firmate.
   Resta scoperto il caso della commessa che si interrompe, che un cruscotto del presente non prevede.
5. **I segnali hanno velocità diverse e la cascata è una fotografia.** Il contribution margin reagisce
   in settimane, il churn di coorte in trimestri. Rischio: dichiarare riparato un churn che è solo
   diluito da un buon mese di acquisizione, e spostare il capitale sul marketing troppo presto.
   *Contenimento*: il trigger di ri-diagnosi si esprime obbligatoriamente su due coorti consecutive,
   mai su churn blended, e il report dichiara la data minima prima della quale il numero non è
   leggibile.
6. **La precedenza è deterministica e i casi reali cadono sui confini.** *Contenimento*: la banda di
   indecisione al 10%. Il costo è un report meno netto in banda, e la nettezza è parte del valore della
   skill: è un compromesso accettato, perché un nome sbagliato detto con sicurezza dura più di
   un'incertezza dichiarata.
7. **Il gate dei dati non intercetta numeri plausibili e falsi.** Un CAC senza stipendi più un LTV sul
   ricavo passano il gate e producono "freno a mano" dove la realtà è "valore regalato", cioè la
   raccomandazione peggiore possibile: spingere l'acquisizione con le unit economics rotte.
   *Contenimento*: i tre controlli di coerenza incrociata in `gate-dati-e-trappole.md`, che vanno
   eseguiti **prima** della cascata e non dopo. Sono la difesa più efficace di tutto il metodo.
8. **Bias di traccia sui business ibridi.** *Contenimento*: la regola del 70%, diagnosi per linea e due
   letture dichiarate.
