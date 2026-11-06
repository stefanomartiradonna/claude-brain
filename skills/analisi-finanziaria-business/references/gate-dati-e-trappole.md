# Gate dei dati, derivazioni e trappole di calcolo

I clienti non hanno numeri puliti. Questo file serve a non emettere una diagnosi su dati che non la
reggono, e a riconoscere i numeri **plausibili ma falsi**, che sono il rischio vero: un numero sbagliato
detto con sicurezza passa la review, entra nel report e ci resta.

Si legge in Fase 0, prima di qualsiasi calcolo.

---

## 1. Il pavimento minimo: tre numeri irriducibili

La diagnosi non si emette senza tutti e tre.

1. **Cassa a una data certa**, dall'estratto conto e non dal gestionale. Senza, non c'è orologio.
2. **Un costo diretto per unità**, con la lista dei costi inclusi. Senza, non c'è segno, e il segno è la
   prima regola della cascata.
3. **Una misura di ritenzione o di riacquisto**, anche grezza. Senza, non c'è durata del cliente, quindi
   non c'è LTV, quindi manca la biforcazione fra C2 e C3, che è la decisione più importante del metodo.

**Con due su tre**: si produce un **cruscotto parziale** con i blocchi riempibili, si scrive a lettere
chiare "diagnosi non emessa", e si consegna la lista di cosa recuperare e dove (estratto conto, export
Stripe o Shopify, gestionale, libro IVA, cedolini, scadenzario fornitori). **Nessuna lettura viene
nominata**: nominare una lettura su dati sotto il pavimento è il peggior danno che questa skill può
fare, perché il nome resta nella testa del cliente e i caveat no.

**Insieme minimo di partenza, sei numeri**: ricavo del periodo, costo diretto del periodo o per unità,
cassa a una data, uscite di cassa medie degli ultimi 3 mesi, numero di clienti o ordini attivi, spesa
totale di acquisizione del periodo.

**Periodo**: tutti e quattro i blocchi sulla stessa finestra, minimo 3 mesi consecutivi chiusi, meglio
6. Le coorti richiedono almeno 3 mesi di storia. Sotto i 3 mesi si consegnano solo il blocco margini e
il blocco cassa, e il rapporto LTV/CAC non si calcola.

---

## 2. Derivazioni, e come si dichiarano

Ogni numero non fornito direttamente porta il tag `[derivato]` con la formula **e la direzione
dell'errore**, che è la parte che tutti omettono.

| Mancante | Derivazione | Direzione dell'errore |
|---|---|---|
| Durata del rapporto | 1 diviso il churn mensile di coorte | se il churn accelera, la durata è sovrastimata e l'LTV con essa |
| Durata senza dato di churn | mediana dell'anzianità dei clienti attivi | sottostimata in forte crescita, perché la base è giovane |
| Churn nel DTC | repeat rate a 90 e 180 giorni, LTV su orizzonte troncato a 12 mesi | mai orizzonte infinito: sovrastima garantita |
| CAC | (spesa marketing + costo pieno delle persone di vendita, contributi e variabile inclusi) diviso i nuovi clienti dello stesso periodo | nei cicli di vendita lunghi va usata la spesa sfasata della durata media del ciclo, altrimenti il CAC è sottostimato in crescita |
| LTV | ricavo medio per cliente × gross margin % × durata, **sempre sul margine lordo** | se arriva calcolato sul ricavo, si divide per il gross margin e si mostrano entrambi i valori |
| Burn | media delle uscite di cassa nette di 3 mesi, al netto delle una tantum dichiarate una per una | sottostimato se le passività stagionali non sono scontate dalla cassa |
| Giorni di incasso e di pagamento | saldo crediti diviso fatturato medio giornaliero; saldo debiti diviso acquisti medi giornalieri | con forte stagionalità il saldo puntuale mente, serve la media di due date |
| CAC nei servizi | ore del founder su acquisizione × tariffa di mercato | se resta a zero, la lettura C3 è strutturalmente invisibile |

**Tetto alle derivazioni.** La diagnosi può appoggiarsi su **massimo due numeri derivati** fra quelli
che entrano nelle condizioni della lettura. Al terzo, l'output diventa **ipotesi di diagnosi** e il
report mostra la sensibilità in forma esplicita: "se la durata reale è 14 mesi invece di 20, la lettura
passa da C5 a C2".

---

## 3. I tre controlli di coerenza incrociata

Si fanno senza chiedere un dato in più e intercettano i numeri plausibili ma falsi. **Si eseguono prima
della cascata.**

1. `ricavo × gross margin % − costi fissi dichiarati ≈ meno il burn`
2. `CAC × nuovi clienti ≈ spesa di acquisizione dichiarata`
3. `cassa iniziale − burn × mesi ≈ cassa attuale`

Scostamento oltre il 20% su uno qualunque: **la diagnosi si blocca** e si dice **quale** blocco non
torna, perché lo scostamento localizza l'errore.

- Il controllo 1 che non torna significa costi variabili classificati come fissi, oppure ricavo
  fatturato confuso con ricavo incassato.
- Il controllo 2 che non torna significa CAC senza le persone, oppure periodi disallineati.
- Il controllo 3 che non torna significa burn addomesticato, oppure circolante non contato.

---

## 4. Le dieci trappole

Per ognuna: come la riconosci dai dati che hai già, cosa chiedi, e la severità. La severità dice se la
trappola cambia la **lettura**, l'**orologio** o solo l'**intensità**.

### 1. CAC senza il costo delle persone
*Severità: cambia la lettura.*
**Riconoscimento**: la spesa di acquisizione coincide esattamente con la spesa in ads; esiste un
commerciale, o il founder vende; il CAC è troppo basso rispetto al ticket.
**Richiesta**: costo pieno (lordo, contributi, variabile) delle persone su marketing e vendite, più la
percentuale di tempo. Per il founder che vende, una tariffa imputata.
**Effetto**: ricalcolo del rapporto. Spesso C7 diventa C4 o C8.

### 2. LTV sul ricavo invece che sul margine lordo
*Severità: cambia la lettura.*
**Riconoscimento**: rapporto sopra 5 con gross margin noto sotto il 60%; LTV pari a ricavo medio per
mesi, senza nessun moltiplicatore.
**Richiesta**: quale gross margin è stato usato.
**Effetto**: ricalcolo con entrambi i valori a vista, perché la differenza è spesso un fattore 2. Nota:
la lezione parlata di Marinò usa il ricavo, le sue slide usano il margine. Vale il margine.

### 3. Churn blended invece che per coorte
*Severità: cambia la lettura. È la trappola più costosa in assoluto, perché inverte la biforcazione
C2/C3.*
**Riconoscimento**: churn mensile stabile al decimale mentre i nuovi clienti crescono, perché i nuovi
diluiscono il denominatore e fanno sembrare la ritenzione migliore; churn calcolato su clienti totali
invece che sui clienti a rischio nel periodo.
**Richiesta**: tabella clienti con data di ingresso e data di uscita o stato, ultimi 6-12 mesi, per
costruire le coorti mensili.

### 4. Ricavo fatturato contro ricavo incassato
*Severità: cambia l'orologio.*
**Riconoscimento**: ricavo dal gestionale e cassa dall'estratto conto messi nello stesso rapporto;
giorni di incasso sopra 45; blocco margini e blocco cassa che non si parlano.
**Richiesta**: incassi del periodo dall'estratto conto, e saldo crediti a inizio e fine periodo.
**Regola**: i blocchi margini usano la competenza, i blocchi cassa usano l'incassato, e i due non si
mescolano mai nello stesso rapporto.

### 5. Periodi disallineati fra i blocchi
*Severità: intensità, a volte la lettura.*
**Riconoscimento**: CAC su un trimestre e nuovi clienti su un mese; ricavo da inizio anno e cassa a
oggi; spesa del mese divisa per i clienti dello stesso mese con ciclo di vendita a 90 giorni.
**Richiesta**: la stessa finestra per tutti e quattro i blocchi, dichiarata in testa al report.

### 6. Mesi anomali usati come media
*Severità: intensità.*
**Riconoscimento**: un mese che devia oltre il 40% dalla mediana. Black Friday, un contratto una
tantum, un rimborso fiscale, agosto, dicembre.
**Richiesta**: quali mesi contengono eventi una tantum.
**Effetto**: si usa la mediana su 6 mesi e si elencano gli outlier esclusi, uno per uno, nel report.

### 7. Costi variabili classificati come fissi, e viceversa
*Severità: cambia la lettura, perché può cambiare il segno.*
**Riconoscimento**: gross margin calcolato come prezzo meno costo di magazzino mentre esistono
spedizioni, resi, commissioni di pagamento, fee di piattaforma, affiliate, customer success dedicato.
Nei servizi: i freelance in subappalto messi fra i costi di struttura.
**Richiesta**: una domanda sola, che un non addetto sa rispondere. **Quali costi sparirebbero se domani
vendessi un'unità in meno?**

### 8. Deduzioni dimenticate, specifiche di traccia
*Severità: cambia la lettura nel DTC, intensità altrove.*
**Riconoscimento**: resi dichiarati a zero o non dichiarati; utilization sopra il 90%; ricavo al lordo
di sconti e crediti promozionali; chargeback assenti.
**Richiesta**: tasso di reso e costo pieno del reso; ore non fatturabili e straordinari non pagati;
sconti e crediti emessi nel periodo.

### 9. Runway che include una raccolta attesa
*Severità: cambia l'orologio, quindi riordina tutte le mosse.*
**Riconoscimento**: runway dichiarata sopra 12 mesi con un burn che non torna sul saldo; menzione di un
round in corso, di un bando, di un finanziamento in istruttoria.
**Richiesta**: cassa effettiva, e separatamente gli incassi contrattualizzati con data. Un round non
firmato non entra mai nel numeratore, entra come nota.
**Nella stessa famiglia**, le passività stagionali italiane da sottrarre dalla cassa prima di assegnare
la zona: IVA del trimestre, acconti di giugno e novembre, tredicesima di dicembre, TFR maturato, saldo e
acconto contributivo.

### 10. Ricavo medio per cliente su una base bimodale
*Severità: intensità, ma raddoppia il lavoro.*
**Riconoscimento**: un cliente sopra il 20% del ricavo; mediana del ricavo per cliente molto distante
dalla media.
**Richiesta**: distribuzione dei ricavi per cliente.
**Effetto**: se il primo cliente supera il 20%, la diagnosi si esegue **due volte**, con e senza, e il
report mostra entrambe le letture.

---

## 5. Come si chiedono i dati senza fare un interrogatorio

Un argomento per turno. Prima i tre numeri del pavimento, poi il resto. Non fare liste di dieci domande:
il cliente risponde male a tutte.

Ordine che funziona:
1. Che tipo di business è, come incassa, chi paga e quando. Da qui si decide la traccia.
2. Cassa a oggi e uscite medie degli ultimi tre mesi.
3. Prezzo e costi di un prodotto o servizio rappresentativo, con la domanda del costo che sparisce.
4. Quanto è stato speso per acquisire e quanti clienti sono entrati, nello stesso periodo.
5. Quanto restano i clienti, e come lo sanno.
6. Giorni di incasso e giorni di pagamento.

Se a una domanda la risposta è "non lo so", non insistere: derivalo, taglialo col tag `[derivato]`, e
mettilo nella lista dei dati mancanti alla fine del report. Il report con i buchi dichiarati è utile.
Il report senza buchi e con numeri inventati, no.
