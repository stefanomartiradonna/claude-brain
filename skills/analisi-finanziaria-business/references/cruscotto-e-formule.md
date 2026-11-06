# Il cruscotto: quattro blocchi, formule, e cosa cambia nelle tre tracce

Il cruscotto serve a vedere gli **incroci**, non i numeri singoli. Un margine alto con la cassa in rosso
è un'azienda che muore in salute. Un ottimo rapporto LTV/CAC con un contribution margin negativo è una
macchina che accelera verso il muro. I quattro blocchi si compilano in quest'ordine e si leggono insieme
in Fase 2.

Le soglie e i giudizi stanno in `soglie-e-benchmark.md`. Qui stanno le formule.

---

## Il principio sotto tutto: valore creato e valore catturato

La strategia crea valore, la finanza misura quanto ne catturi. Il fatturato non dice se catturi valore o
se lo stai regalando: lo dice il margine.

**Value Stick**, quattro livelli dall'alto in basso: willingness to pay del cliente, prezzo, costo,
willingness to supply del fornitore.

- WTP meno prezzo = **customer delight**, la fetta del cliente
- Prezzo meno costo = **margine**, la tua fetta
- Costo meno WTS = la fetta del fornitore
- WTP meno WTS = **valore totale creato**

La leva strategica agisce sugli estremi: alzare la WTP o abbassare la WTS allarga lo stick. Prezzo e
costo non creano valore, decidono solo come si divide. Serve in due momenti: quando la lettura è C4
(valore regalato, la tua fetta è la più sottile delle tre) e nel gate del prezzo (quanto delight puoi
sacrificare prima che un competitor ti superi).

---

## Blocco A. I due margini

**Gross margin** = (Ricavi meno costi diretti del prodotto) diviso Ricavi.
Zoom macro, tutta l'azienda. Quanto resta prima di tutto il resto.

**Contribution margin** = Ricavi dell'unità o dell'iniziativa meno tutti i costi variabili legati a
quell'unità.
Zoom micro. È la quota che va a coprire i costi fissi.

Il perimetro dei costi diretti è una scelta: dichiara cosa hai incluso e tieni lo stesso perimetro in
tutti i periodi confrontati.

**La regola che blocca tutto**: se il contribution margin sulla coorte matura è negativo, ogni vendita
in più allarga il buco e crescere peggiora le cose. Si ferma qui e si apre la lettura C1.

**Il test per classificare un costo**: quali costi sparirebbero se domani vendessi un'unità in meno?
Quelli sono variabili. Gli altri no.

---

## Blocco B. Le unit economics

| Numero | Formula |
|---|---|
| CAC | (spesa marketing + spesa commerciale, persone incluse a costo pieno) diviso i nuovi clienti dello stesso periodo |
| LTV | ricavo medio per cliente × gross margin % × durata media della relazione. **Sempre sul margine, mai sul ricavo** |
| Payback | CAC diviso il margine mensile per cliente |
| Rapporto | LTV diviso CAC |
| Tetto del CAC | LTV diviso 3. Si calcola per canale e per segmento, non aggregato |

**Perché la soglia del rapporto è 3 e non 1.** Oltre al CAC, il cliente genera altri costi lungo la
permanenza: assistenza, infrastruttura, tempo del team. Sotto 3 quei costi sommersi si mangiano il
margine e il cliente non aiuta a coprire i fissi. Sotto 1 ogni cliente è una perdita secca.

**Il problema opposto.** Sopra 5 non è una vittoria: spesso è marketing troppo prudente. Non stai
perdendo soldi, stai perdendo tempo. Prima di spingere, però, verifica che il rapporto non sia un
artefatto (CAC senza persone, LTV sul ricavo, passaparola non replicabile).

**La crescita amplifica.** Se ogni cliente perde 10 euro, 1.000 clienti ne perdono 10.000. Le unit
economics si sistemano prima di accelerare, non durante.

---

## Blocco C. Cassa, burn, runway

| Numero | Formula |
|---|---|
| Cassa | saldo dei conti correnti a una data certa, da estratto conto. Non l'utile, non il fatturato |
| Burn rate | cassa netta che esce ogni mese, media su 6 mesi (o 3 se la storia è corta), al netto delle una tantum dichiarate |
| Runway | cassa diviso burn rate |

**Prima di assegnare la zona**, sottrai dalla cassa le passività già maturate e non ancora pagate: IVA
del trimestre, acconti di giugno e novembre, tredicesima, TFR maturato, saldo e acconto contributivo. E
non contare mai un round non firmato nel numeratore.

**Profitto e cassa non sono la stessa cosa.** Il profitto è una fotografia contabile, la cassa è quello
che c'è in banca. Le aziende non falliscono solo perché perdono soldi: falliscono perché finiscono la
cassa, e possono finirla anche mentre sono in utile.

---

## Blocco D. Capitale circolante

| Numero | Formula |
|---|---|
| Giorni di incasso | saldo crediti diviso fatturato medio giornaliero |
| Giorni di pagamento | saldo debiti verso fornitori diviso acquisti medi giornalieri |
| Ciclo di cassa | giorni di incasso + giorni di magazzino o di erogazione pre-fattura − giorni di pagamento |
| Cassa immobilizzata | ciclo di cassa × costo del venduto medio giornaliero |
| Cassa per ogni 10% di crescita | cassa immobilizzata × 0,10 |

**Il segno è quello che conta.** Se incassi dopo aver pagato, ogni euro di crescita richiede cassa da
anticipare: più cresci, più serve, e la crescita brucia cassa invece di generarla. Se incassi prima di
pagare, la crescita libera cassa.

È la causa numero uno di morte delle aziende in utile. L'ultima riga della tabella è il numero più utile
del blocco, perché è il **vero tetto di crescita**: se servono 24.000 euro di cassa per ogni 10% di
volume in più e in banca ce ne sono 140.000, il tetto non lo decide il budget marketing.

---

## Le tre tracce

La traccia si decide in Fase 0 da una domanda sola: **come e quando incassi?**

### Ricorrente (B2B SaaS, abbonamenti)

| Cosa cambia | Come |
|---|---|
| Unità di misura | MRR e ARPA (ricavo medio per account), non ordini |
| Ritenzione | churn logo per coorte mensile, più NDR o NRR per l'espansione. Il churn blended non si usa |
| Coorte matura per il segno | mese 4 o successivi, al netto di hosting, supporto, commissioni di pagamento, customer success dedicato |
| Payback | in mesi, confrontato con la fascia per ACV. Mai usato da solo |
| Circolante | di norma libera cassa con l'annuale prepagato. Anticipa con fatturazione mensile e termini enterprise a 60-90 giorni |
| Numeri aggiuntivi utili | quota di contratti annuali prepagati, espansione contro contrazione, burn multiple come scala qualitativa |

### Transazionale (DTC, e-commerce, retail)

| Cosa cambia | Come |
|---|---|
| Unità di misura | ordine. Valore medio dell'ordine, ordini per cliente, repeat rate |
| Contribution margin | a strati: dopo il costo del prodotto, poi dopo spedizione netta, resi e commissioni, poi dopo gli ads. Dichiara **quale strato** stai citando, perché i benchmark pubblici confondono i tre |
| Resi | sono una deduzione, non un dettaglio. A zero sono un errore di dato, non una buona notizia |
| Coorte matura per il segno | ordine 2 o successivi. Il primo ordine in perdita può essere un loss leader dichiarato, e in quel caso non è C1 |
| Payback | in **numero di ordini**, poi tradotto in mesi usando la cadenza reale fra primo e secondo ordine |
| Ritenzione | repeat a 90 e 180 giorni, LTV troncato a 12 mesi. **Mai orizzonte infinito** |
| Verifica di cadenza | obbligatoria prima di diagnosticare C2: mediana dei giorni fra primo e secondo ordine fra chi ha riacquistato. Se supera la finestra di misura, è sbagliata la finestra |
| Circolante | anticipa quasi sempre: magazzino e ads si pagano prima dell'incasso. È il tetto di crescita reale |

### Servizi (agenzia, consulenza, studio)

| Cosa cambia | Come |
|---|---|
| Unità di misura | cliente a retainer o progetto. Ricavo per persona, utilization fatturabile |
| Gross margin | ricavo meno costo pieno del team di erogazione. Dichiara se il ricavo è lordo o netto dei pass-through: i benchmark cambiano di 20 punti a seconda della definizione |
| Costo diretto | include i subappalti e gli straordinari. I freelance non sono costi di struttura |
| CAC | va **imputato**: ore del founder su acquisizione × tariffa di mercato. Se resta a zero, la lettura C3 diventa invisibile e il business sembra più sano di quanto è |
| Payback | segnale debole, quasi sempre immediato. Si usa il DSO al suo posto come indicatore di cassa |
| Utilization | si legge insieme al prezzo, non da sola: riempire capacità libera al prezzo attuale alza il fatturato e congela il margine. Nei servizi la sequenza è **prezzo prima, utilization dopo** |
| Ore non fatturabili | vanno separate in capacità inutilizzata contro lavoro svolto e non fatturato. Sono due problemi diversi |
| Circolante | anticipa strutturalmente: paghe mensili contro incassi a 60-90 giorni. **È il primo blocco da leggere, prima della runway** |
| Concentrazione | se un cliente supera il 20% del ricavo, il cruscotto si calcola due volte, con e senza |

### Business ibrido

Se nessuna linea di ricavo supera il 70% del totale, i blocchi A e B si calcolano **per linea** e il
report dichiara due letture. I blocchi C e D restano consolidati, perché la cassa è una.
