# Metodo Luneva: dal cambio di prodotto all'impatto in dollari

Fonte: Elena Luneva, "Build A Business Case Executives Say Yes To" (guida per Senior PM e direttori).
Questo file è una **nota di lavoro con parole mie**: contiene il metodo in forma operativa, non il testo
dell'articolo.

## Dove sta il testo integrale

Testo integrale e immagini (con trascrizione) sono in un repo **privato**, perché contenuto di terzi:

`claude-private-refs/business-case/luneva-build-a-business-case-executives-say-yes-to.md`
(https://github.com/stefanomartiradonna/claude-private-refs)

Come trovarlo: la cartella `claude-private-refs` sta nel computer accanto a `System-content-flywheel`
(clone locale). Fai `git pull` e leggi il file. **Niente percorsi assoluti in questa skill**: cambiano da
computer a computer.

**Se il file non è raggiungibile** (repo non clonato, sessione web, nessun accesso): dillo all'utente in
una riga, completa il binario Tharin, e per Luneva e Mix chiedi se vuole procedere usando solo queste note.
Non ricostruire il metodo a memoria e non spacciare per Luneva ciò che qui non c'è.

## L'idea in una riga

Il PM senior non spiega cosa costruire, spiega **perché l'azienda dovrebbe finanziare questo invece di
altro**, collegando il cambio di prodotto a un impatto finanziario, e consegna una decisione con i suoi
rischi dichiarati.

## Il metodo in sei passi

**L1. La catena.** Quattro anelli in fila:
`cambio di prodotto → cambio di comportamento → leva finanziaria → impatto in $`.
Parti dal cliente: chi è, che problema ha, quale cambiamento vuoi produrre. Poi **non fermarti
al comportamento** (es. "+5% di attivazione"): segui la catena fino al denaro (utenti paganti in più,
+$500K di ARR). Funziona anche per prodotti che non generano ricavi: la leva può essere ricavi da
engagement o retention, costo di servizio più basso, costi operativi ridotti, conversione migliore.

**L2. La tabella degli input.** Ogni variabile del modello su una riga, con un valore:
base clienti, adozione, azioni extra per adottante all'anno, valore medio, margine lordo, investimento.

**L3. Il calcolo.** Ricavi annui (base × adozione × azioni × valore), poi margine lordo annuo, poi margine
lordo mensile. **Payback = investimento ÷ margine lordo mensile.** Il caso si dice con questi numeri,
non con "pensiamo che aumenterà l'engagement".

*Più flussi di valore (aggiunta operativa mia, l'esempio dell'articolo ne ha uno solo).* Se l'iniziativa
produce più effetti (churn evitato, upgrade, costo risparmiato), una riga di calcolo per flusso, ognuno
con i suoi input e la sua fonte, poi si sommano ricavi e margine. **Orizzonte: 12 mesi.** Un cliente
trattenuto vale un anno di ricavo (ARPA) per il margine, non il suo LTV: il metodo ragiona in impatto
annuo. Dichiaralo nel caso.

**L4. Il foglio di calcolo è per te.** Il capo non vuole vederlo, lo chiede se non sai rispondere. Serve a
capire le assunzioni e metterle sotto stress. Le domande: quale assunzione porta più rischio? cosa succede
se è sbagliata? cosa posso testare prima di spendere l'intero investimento? L'istinto naturale è gonfiare
l'upside e ignorare i rischi: il metodo lo corregge forzando il downside.

**L5. Downside e scenari.**
- **Downside a una variabile**: cambi solo l'assunzione più rischiosa (es. adozione dal 20% al 10%) e
  rileggi ricavi, margine, payback. Ti dice **quale input guida l'economia**.
- **Tre scenari** Conservative / Base / Stretch, con due leve che si muovono insieme (nell'esempio
  adozione e frequenza). Un numero solo è ciò che speri, uno scenario mostra ciò che può succedere.
  *Quando le leve non sono adozione e frequenza, scegli le due più incerte, cioè quelle con il dato più
  debole. Le altre restano ferme.*

**L6. La decisione in 60 secondi.** Cinque domande a cui rispondere prima di presentare: cosa facciamo e
perché, quale ritorno, quali assunzioni contano, cosa succede nel downside, cosa validiamo per primo.
Si dice in quattro frasi:
1. Dovremmo investire $X perché ci aspettiamo $Y di impatto.
2. Il caso dipende da A e B.
3. Nel caso downside succede Z.
4. Raccomando [decisione] e validerei [assunzione] per prima.

La raccomandazione include sempre **un test piccolo prima della spesa piena** (nell'esempio: 30 giorni su
5.000 clienti, il 10% della base).

*Se la raccomandazione è no o non ora* (aggiunta mia: l'articolo scrive solo il caso del sì), le quattro
frasi diventano: 1. Non raccomando di investire $X in Y ora perché ci aspettiamo solo $Z. 2. Il caso
non regge a causa di A e B. 3. Cambierei idea se [cosa dovrebbe essere vero]. 4. Prima di decidere
validerei [assunzione].

*Soglia di payback* (aggiunta mia): Luneva non dà un payback accettabile. Il giudizio "è troppo lungo"
va su una soglia che l'utente ha detto in Fase 0. Se non l'ha detta, dichiara la tua come assunzione, mai
come regola del metodo.

## Esempio di taratura (Fantastic Florists)

50.000 clienti attivi, 20% di adozione, 2 ordini extra a testa all'anno, $60 a ordine, margine lordo 40%,
investimento $200K → ricavi $1,2M, margine lordo $480K (= $40K al mese), payback 5 mesi. Downside con
adozione al 10%: payback 10 mesi. Scenari: Conservative (10% e 1 ordine) payback 20 mesi, Stretch (30% e 3
ordini) 2,2 mesi.

## Attenzioni di lettura (mie osservazioni, verificate rifacendo i conti)

1. **Downside e Conservative non sono la stessa cosa.** Il downside tocca una variabile (payback 10
   mesi), il Conservative ne tocca due (payback 20 mesi). Nel business case tienili separati e nominali
   per quello che sono.
2. **Il payback è semplice**: investimento ÷ margine mensile a regime. Non include tempo di sviluppo,
   ramp-up dell'adozione, costi ricorrenti. Dichiaralo nel caso, non lasciarlo implicito.
3. **Gli scenari muovono solo due leve** (adozione e frequenza nell'esempio). Valore medio, margine e
   investimento restano fissi, anche se l'articolo li cita tra le domande di rischio.
4. **Non c'è un gate** su se vale la pena fare il caso (table stake o no), né una scala di confidence per
   input, né una regola contro il double-counting. Sono i punti in cui Tharin completa Luneva (vedi
   `confronto-e-mix.md`).

## Come eseguire il binario Luneva

Con gli input già raccolti nella Fase 0 condivisa (SKILL.md):

1. Scrivi la catena L1 per l'iniziativa, con numeri.
2. Compila la tabella input L2, ogni riga con **la fonte** (dato, stima dichiarata, assunzione). Se i
   flussi di valore sono più d'uno, una sezione di input per flusso.
3. Calcola L3: ricavi, margine lordo annuo e mensile, payback (orizzonte 12 mesi). **Fai i calcoli con
   un comando o uno script, non a mente.**
4. Rispondi alle tre domande L4 con il contenuto del caso, non in astratto.
5. Costruisci il downside a una variabile (L5) sull'assunzione più rischiosa e i tre scenari.
6. Chiudi con la decisione in quattro frasi (L6).

Output: formato A in `output-luneva-mix.md`. **Non applicare** il gate table stake/differentiator/debt, i
colori 🔴🟡🟢, il risk-adjusted e il kill threshold in questo binario: sono Tharin, e se li usi il binario
non è più Luneva. Se il gate della Fase 0 ha dato "table stake", una riga di avviso all'utente basta
("i numeri qui sono fragili per natura"), non un cambio di metodo.
