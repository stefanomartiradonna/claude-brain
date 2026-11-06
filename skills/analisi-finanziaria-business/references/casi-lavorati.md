# Tre casi lavorati, uno per traccia

Servono a due cose: ancorare la diagnosi quando un caso reale è ambiguo, e fare da test di regressione
alla cascata. I tre casi sono **sintetici** e costruiti per cadere in tre letture diverse. I numeri sono
stati calcolati, non stimati: se modifichi la cascata o le soglie, rieseguili e verifica che cadano
ancora in tre letture diverse. Se due finiscono nella stessa, la cascata è rotta.

---

## Caso 1. SaaS B2B, traccia ricorrente

### Dati

MRR 48.000 su 160 clienti, ricavo medio per cliente 300. Gross margin 78%, quindi 234 di margine per
cliente al mese. Churn logo mensile di coorte 5,2%, NDR 96%. Spesa di acquisizione del trimestre 96.000
(36.000 di ads, 60.000 di costo pieno per due commerciali), 48 nuovi clienti. Cassa 420.000, uscite
nette medie 35.000 al mese. Il 70% dei contratti è annuale prepagato, incasso a 25 giorni, pagamento a
30. Costi fissi del trimestre 217.000.

### Cruscotto

| Numero | Valore |
|---|---|
| Gross margin | 78%, sano |
| CAC | 2.000 |
| Durata implicita | 19,2 mesi `[derivato: 1 / 0,052]` |
| LTV (a margine) | 4.500 |
| Rapporto LTV/CAC | 2,25 |
| Payback | 8,5 mesi |
| Runway | 12,0 mesi |
| Ciclo di cassa | negativo, libera cassa |

### Controlli di coerenza

- CAC × nuovi clienti = 96.000, pari alla spesa dichiarata. Passa.
- Margine lordo del trimestre 112.320 meno fissi 217.000 = meno 104.680, cioè meno 34.893 al mese,
  contro un burn di 35.000. Passa.
- Cassa 420.000 meno 35.000 per 12 mesi = 0, coerente con la runway dichiarata. Passa.

### Lettura

C1 no, il margine è sano. **C2 Effetto lavatrice**: il rapporto è a 2,25 sotto 3, il churn al 5,2% è
sopra il pavimento del 3%, l'NDR a 96% è sotto 100, e il flusso di nuovi clienti è stabile. La
biforcazione va su C2 e non su C3 perché la ritenzione è sotto il pavimento.

Aggravanti: il ciclo libera cassa, quindi niente AG2. La runway a 12,0 cade nella banda di indecisione
fra arancione e gialla: si adotta la più conservativa, **arancione**, e si scrive che 12,0 è un confine e
che basta un mese di burn a 39.000 per entrare in arancione pieno.

### Kernel

**Diagnosi.** Il churn logo mensile di coorte è a 5,2%, deve scendere sotto il 3% entro due trimestri,
altrimenti ogni euro investito in acquisizione resta sotto il tetto e la runway, oggi non critica,
diventa il problema senza che il prodotto sia cambiato.

**Politica guida.** Per due trimestri portiamo il churn sotto il 3%, e rinunciamo alla terza posizione
commerciale prevista per gennaio e all'apertura del canale partner.

**Allocazione** su 100.000 discrezionali: prodotto 60.000, onboarding e assistenza 25.000, marketing
15.000 su adozione e contenuti per la base, canali 0. Dominante al 60%, una leva a zero, nessuna
configurazione fra 20% e 40% su tutte e tre.

**Mosse.**
1. Coorti per mese e per segmento, entro 14 giorni, per separare churn di ingresso e churn di valore.
   Reversibile, segnale immediato.
2. Qualificazione in ingresso più stretta, se il churn si concentra entro 90 giorni. Reversibile,
   segnale in 6 settimane.
3. Due interventi di prodotto sui momenti di abbandono rilevati. Costosa, segnale in un trimestre.
4. Rassegna di valore trimestrale sui 20 clienti più grandi. Reversibile, segnale in 6 settimane.

**Cosa non fare.** Il terzo commerciale. L'aumento di listino: il gate è a 1 su 4, e alzare il prezzo
con un churn al 5,2% accelera l'uscita. Azzerare il marketing, perché senza coorti nuove la riparazione
non è misurabile.

**Punto di controllo.** 31 marzo. La diagnosi scade se due coorti consecutive scendono sotto il 3% o se
l'NDR supera 105, e in quel caso il capitale si sposta su marketing e canali. Scade anche al ribasso se
la runway scende sotto 9 mesi: la lettura resta C2 ma in zona rossa, e l'ordine delle mosse si ribalta
sulla cassa.

---

## Caso 2. E-commerce DTC, traccia transazionale

### Dati

Fatturato 280.000 al mese, 4.500 ordini. Gross margin 45%, dentro la fascia 30-50%. Costi variabili per
ordine: spedizione netta 5,5, resi 2,1, commissioni 1,4. Ads 73.000 al mese, 2.280 nuovi clienti. Repeat
a 90 giorni 31%, ordini per cliente a 12 mesi 2,4, cadenza mediana fra ordini 85 giorni. Cassa 140.000,
uscite nette 28.000. Giorni di magazzino 75, incasso 2, pagamento 30.

### Cruscotto

| Numero | Valore |
|---|---|
| Valore medio dell'ordine | 62,2 |
| Margine per ordine | 28,0 |
| Costi variabili per ordine | 9,0 |
| Contribuzione per ordine, prima degli ads | 19,0 |
| CAC | 32,0 |
| LTV (2,4 ordini × contribuzione) | 45,6 |
| Rapporto LTV/CAC | 1,42 |
| Tetto del CAC | 15,2. Il CAC attuale è 2,11 volte il tetto |
| Payback | 1,69 ordini, cioè circa 143 giorni o 4,8 mesi alla cadenza rilevata |
| Contribuzione dopo gli ads (CM3) | 2,8 per ordine, il 4,5% del ricavo |
| Runway | 5,0 mesi |
| Ciclo di cassa | 47 giorni |
| Cassa immobilizzata | circa 241.000 |
| Cassa per ogni 10% di crescita | circa 24.100, contro 140.000 in banca |

### Nota di cascata, importante

Il primo ordine è in perdita dopo il CAC (19,0 di contribuzione contro 32,0 di CAC) e rientra all'ordine
1,69. **C1 non scatta**, perché il segno si misura sulla coorte matura e sull'ordine 2 o successivi la
contribuzione è 19,0, positiva. Il report lo scrive esplicitamente: il primo ordine è un loss leader
dichiarato, ripagato all'ordine 1,69, e questo è l'unico motivo per cui non siamo in C1.

### Lettura

Il rapporto è 1,42, sotto 3. La ritenzione è dentro banda: repeat a 90 giorni al 31%, sopra la soglia, e
2,4 ordini sopra 2,0. La verifica di cadenza passa: mediana a 85 giorni, compatibile con la finestra a
90, quindi il repeat misurato è reale e non un artefatto della finestra. Quindi non C2. Il CAC è sopra
il tetto: **C3 Acquisizione fuori prezzo**.

Aggravanti: ciclo che anticipa con rapporto sotto 3, quindi **doppio credito al cliente**. Runway a 5,0,
quindi **zona rossa**.

Etichetta finale: "Acquisizione fuori prezzo, con doppio credito, in zona rossa".

### Kernel

**Diagnosi.** Il gross margin al 45% è dentro la fascia e rassicura solo se guardato da solo. Il
rapporto LTV/CAC è a 1,42, ogni cliente nuovo richiede cassa oggi, e la cassa copre 5 mesi.

**Co-blocco.** Per portare il rapporto a 3 servirebbe un CAC a 15,2 (meno 52,5%) oppure una
contribuzione a 40,0 (più 110,6%). Nessuna delle due leve chiude da sola più del 60% del gap nella
finestra dell'orologio, quindi **si taglia il target**: rapporto a 2,2 in 90 giorni, con CAC a 24 e
contribuzione a 22. Non si divide il capitale su due programmi.

**Politica guida.** Per 90 giorni portiamo il rapporto da 1,42 a 2,2 e liberiamo 60.000 di cassa dal
ciclo, e rinunciamo a crescere il fatturato in questo trimestre, incluso il riassortimento della coda
lunga.

**Allocazione.** Canali 70%, marketing 30% su valore dell'ordine e post-acquisto, prodotto 0.

**Mosse**, nell'ordine imposto dal doppio credito e dalla zona rossa.
1. Congelare la spesa di acquisizione al livello attuale, oggi, prima di qualunque altra cosa.
   Reversibile, effetto immediato sulla cassa.
2. CAC per canale con i rispettivi tetti, spegnere i canali sopra il tetto entro 14 giorni. Reversibile,
   segnale in 14 giorni.
3. Magazzino: fermare il riassortimento della coda lunga, chiedere 60 giorni ai due fornitori
   principali, ridurre la profondità di stock. Costosa, segnale in 30 giorni, vale la gran parte dei
   60.000.
4. Valore dell'ordine: soglia di spedizione gratuita più alta, bundle, rimozione del codice sconto
   automatico al primo ordine. Reversibile, segnale in 21 giorni.
5. Restringere il targeting al segmento con repeat sopra il 40%. Costosa, segnale in 45 giorni.

**Cosa non fare.** La svendita per fare cassa: è la mossa d'istinto in zona rossa, incassa questo mese
consumando un CM3 del 4,5%, sposta domanda dal mese successivo e addestra la base allo sconto.
Aumentare il budget sul canale che porta più volume, che è lo stesso che sta sopra il tetto. L'aumento
di listino, col gate a 0,5 su 4. Tagliare la spedizione gratuita senza test, perché abbassa il valore
dell'ordine, che è l'altra metà del numero bloccante.

**Punto di controllo.** 45 giorni. Scade se la cassa scende sotto 90.000, e allora la lettura resta ma
l'orizzonte si riduce a 14 giorni su tutto. Scade anche se il CAC dopo gli spegnimenti resta sopra 26, e
allora il vincolo è nella domanda e la diagnosi si rifà su C4, perché il margine sottile diventa il vero
tetto.

---

## Caso 3. Agenzia di servizi, traccia servizi

### Dati

Nove persone, sei in erogazione più il founder e due di staff. Ricavo 94.000 al mese, costo pieno del
team di erogazione 52.000. Utilization fatturabile 58%. Sei clienti a retainer, ricavo medio 15.700, il
primo cliente a 29.000. Durata media incarico 14 mesi. Il founder dedica il 25% del tempo
all'acquisizione, costo pieno 10.000 al mese, 0,5 nuovi clienti al mese. Incasso a 68 giorni, pagamento
a 25, 15 giorni di erogazione prima della fattura. Cassa 96.000, uscite nette 11.000.

### Cruscotto

| Numero | Valore |
|---|---|
| Gross margin | 44,7%, contro una fascia servizi 60-80%: **sottile di circa 15 punti** |
| Ricavo per persona | 10.444 al mese |
| Utilization fatturabile | 58%, sotto la soglia di profittabilità |
| CAC imputato | 5.000 `[derivato: 10.000 × 25% / 0,5 nuovi clienti]` |
| LTV (a margine) | 98.200 |
| Rapporto LTV/CAC | 19,6 |
| Payback | 0,71 mesi, segnale debole in questa traccia |
| Runway | 8,7 mesi, zona arancione |
| Ciclo di cassa | 58 giorni |
| Cassa immobilizzata | circa 181.700, contro 96.000 in banca |
| Concentrazione primo cliente | 30,9% |

Senza l'imputazione del tempo del founder il CAC sarebbe zero e la lettura C3 diventerebbe invisibile.
Trappola 1 applicata.

### Lettura

C1 no. C2 e C3 saltate, il rapporto è sopra 3. **C4 Valore regalato**: il gross margin è sottile
rispetto alla fascia di traccia e il rapporto è alto.

C7 Freno a mano **non** si applica, pur avendo rapporto sopra 5 e payback sotto soglia, perché C7
richiede un contribution margin **sano**: un 19,6 costruito su un margine al 44,7% e su acquisizione
pagata in ore di founder non prezzate è un artefatto, non un invito a crescere.

Aggravanti: ciclo che anticipa (AG2), senza il composto doppio credito perché il rapporto non è rotto.
Zona arancione.

Etichetta finale: "Valore regalato, con ciclo che anticipa, in zona arancione".

### Kernel

**Diagnosi.** Il gross margin è a 44,7% contro un pavimento di traccia al 60%, e 58 giorni di cassa
anticipata assorbono circa 181.700 contro 96.000 disponibili.

**Perché il numero bloccante non è la utilization.** Riempire il 42% di capacità libera al prezzo
attuale alza il fatturato e congela il margine. Nei servizi la sequenza è **prezzo prima, utilization
dopo**.

**Politica guida.** In due trimestri portiamo il gross margin da 44,7% a 58% agendo su tariffa e mix, e
rinunciamo alla settima assunzione in erogazione e al nuovo progetto scontato del cliente principale.

**Gate del prezzo.** Condizione 1 a 1 (nessuna trattativa persa sul prezzo nelle ultime dieci, sconti
concessi a 3 clienti su 6). Condizione 2 a 0,5. Condizione 3 a 1 (tre case study nuovi con risultati
citati dai clienti). Condizione 4 a 0 (mai aumentato, nessun test). Totale **2,5 su 4, sotto la soglia
di 3**. Quindi aumento orizzontale vietato, ammesse solo le varianti reversibili: tariffa nuova sui
nuovi contratti più 18%, rimozione dei due sconti al rinnovo, riprezzamento o uscita dal retainer a
margine peggiore.

**Mosse.**
1. Incasso, entro 14 giorni: acconto del 40% all'avvio, fattura a inizio periodo invece che a fine,
   solleciti automatici a 7 giorni, esposizione del cliente principale sotto 90 giorni. Reversibile. I
   33 giorni di incasso recuperabili valgono circa 103.400, più del burn di nove mesi: è la
   dimostrazione che in questa traccia la cassa più veloce sta nel ciclo e non nei tagli.
2. Tariffa nuova sui nuovi contratti e rimozione degli sconti al rinnovo. Reversibile, segnale al primo
   rinnovo.
3. Riprezzamento o uscita dal retainer a margine peggiore. Irreversibile, giustificata, dopo la mossa 1.
4. Ore non fatturabili: dove vanno i 42 punti di utilization mancante, separando capacità inutilizzata
   da lavoro svolto e non fatturato. Reversibile, segnale in 30 giorni, intercetta la trappola 8.
5. Solo dopo che la tariffa ha retto, due nuovi clienti in banda al prezzo nuovo.

**Cosa non fare.** Assumere il settimo in erogazione per coprire la domanda: con utilization al 58% la
capacità c'è, e l'assunzione nasconde un problema di prezzo. Tagliare il 25% di tempo del founder
sull'acquisizione, che è l'unico motore di ingresso esistente, e il marketing è già a zero, quindi non
c'è niente da tagliare lì. Accettare il progetto aggiuntivo del cliente principale a tariffa scontata
per fare cassa, che aumenta la concentrazione e ancora il prezzo verso il basso.

**Doppia lettura imposta dalla trappola 10**, perché il primo cliente è al 30,9%. Rifacendo il conto
senza di lui, e facendo scalare il costo di erogazione in proporzione, il gross margin resta 44,7% e la
lettura **non cambia**: il problema di margine è strutturale e non dipende da quel cliente. Cambia il
rischio di concentrazione, che è un problema diverso e non finanziario, e che si affronta con la mossa 5
solo dopo che la tariffa ha retto.

---

## Esito del test

Tre casi, tre letture diverse (C2, C3, C4), tre combinazioni di aggravanti diverse (nessuna; doppio
credito più zona rossa; ciclo che anticipa più arancione), tre numeri bloccanti diversi, tre allocazioni
che passano il controllo anti 30-30-30. Nessun caso resta fuori dalla cascata, perché C8 chiude il
dominio per costruzione.

**La discriminazione più fragile** è fra il caso 1 e il caso 2: entrambi hanno il rapporto sotto 3 e
sono separati **solo** dal pavimento di ritenzione. Quel pavimento è il parametro singolo più carico di
tutto il metodo, ed è il primo da mettere in discussione quando una diagnosi sembra sbagliata.
