# Confronto Tharin / Luneva e regole del Mix

Questo file è lavoro di confronto, non contenuto di nessuno dei due autori. Le righe segnate **[regola
del Mix]** sono scelte di costruzione dell'ibrido: non sono né di Tharin né di Luneva e Stefano può
cambiarle.

## 1. Confronto step per step

| Dimensione | Tharin | Luneva | Il Mix prende |
|---|---|---|---|
| Domanda a cui risponde | Vale l'investimento? Dove sono i rischi? (risk management veloce) | Perché finanziare questo invece di altro? (convincere chi decide) | Tharin per decidere se e quanto fare, Luneva per come lo si dice |
| Gate "vale un caso in numeri?" | Sì: table stake / differentiator / debt | No | Tharin |
| Punto di partenza | Assunzione core + soglia minima in % dell'ARR | Catena prodotto → comportamento → leva → $ | Assunzione core e soglia di Tharin; ogni foglia dell'albero è una catena Luneva |
| Scomposizione | Albero canali → sotto-driver, semplificato | Una catena lineare con tabella input | Albero di Tharin; per ogni canale tenuto, una tabella input di Luneva |
| Incertezza di ogni input | Colori 🔴🟡🟢, Impact, Confidence, Effort | Domande di rischio: quale assunzione pesa di più, cosa se è sbagliata | Colori su ogni riga della tabella input; il 🔴 con più leva è l'input che si sposta nel downside |
| Metrica di uscita | Upside di ARR e % dell'ARR | Ricavi, margine lordo, payback | Tutte: ricavi annui incrementali, margine lordo, payback, % dell'ARR |
| Costo | Effort Difficult vs Complex, non in denaro | Investimento in $, un numero | Investimento in $ obbligatorio, più Difficult/Complex per giudicare quanto il costo è affidabile |
| Come comunica l'incertezza | Range + risk-adjusted (upside × confidence media) | Downside a una variabile + tre scenari | Tre scenari come range. Il risk-adjusted **non** compare **[regola del Mix]** |
| Validazione prima di spendere | De-risking: painted door, MVP, kill threshold | Test su un campione prima della spesa piena | Test di Luneva (campione + durata) con kill threshold di Tharin (soglia che decide stop/vai) |
| Double-counting | Regola esplicita | Non dice | Tharin |
| Evidenza dietro i numeri | Behavior batte statements, fonte per ogni numero | Non dice | Tharin: ogni input ha la fonte |
| Prodotti non a ricavi | ARR come metrica | Esplicito: costo di servizio, costi operativi, conversione | Luneva: la leva può essere un costo, non solo un ricavo |
| Consegna | One-pager con impact e timeline; doc completo sotto | Quattro frasi in 60 secondi; il foglio di calcolo resta a chi lo costruisce | Apertura a quattro frasi, sotto il one-pager di Tharin, sotto il dettaglio |

## 2. Dove i due metodi si completano (il motivo del Mix)

- **Tharin non ha l'investimento in denaro**, quindi non ha payback né ritorno per dollaro speso: dice
  quanto upside c'è e quanto è difficile, non se i conti tornano contro il costo. Luneva copre questo.
- **Luneva non ha il gate**, quindi si può costruire un caso elegante su qualcosa che è un table stake e
  non si può quantificare. Tharin copre questo.
- **Luneva non dà scala di confidence**: tutti gli input sembrano ugualmente solidi. Tharin li colora.
- **Tharin non dà un formato di decisione per chi non è product**: un albero con colori è chiaro per chi
  l'ha costruito, meno per un CFO. Luneva dà le quattro frasi.

## 3. Regole del Mix (in ordine)

**M1. Gate (Tharin).** Table stake: non forzare i numeri, il Mix si ferma al caso qualitativo e lo
dice. Debt/focus: logica del downside, non dell'upside (vedi `strategic-framing.md`). Differentiator:
si procede.

**M2. Soglia (Tharin).** Stima grezza dell'upside contro la soglia in % dell'ARR. Se non la supera, il
Mix si ferma e lo dichiara. Il Mix non ribalta la soglia: se Luneva mostra un payback brevissimo su
qualcosa di piccolo, lo segnala nel confronto e la scelta di andare avanti resta all'utente.
**Cosa si consegna quando Tharin e Mix si fermano:** la *nota di stop* (template D in
`output-luneva-mix.md`), non i documenti completi. Se l'utente chiede di costruire comunque il Mix
completo, si fa, marcandolo come esplorativo (sotto soglia).

**M3. Albero + catene.** Albero di Tharin (assunzione core → canali → driver, con i driver non provati
eliminati). Ogni foglia che resta si scrive come catena di Luneva: cambio di prodotto → comportamento →
leva → $.

**M4. Tabella input per canale, con colore e fonte.** Ogni riga ha valore, colore 🔴🟡🟢 e fonte
(dato, esperimento, intervista, assunzione dichiarata). Tre righe sono sempre obbligatorie perché
Tharin non le richiede: **margine lordo, investimento in $, frequenza o valore unitario**. Se mancano, si
dichiarano assunzioni 🔴.

**M5. Metrica giusta per il business.** "ARR" è una metrica da abbonamento. Se il business è
transazionale (e-commerce, servizi a ordine) usa **ricavi annui incrementali**, non ARR, e dillo. Il
rapporto con l'ARR totale per la soglia si calcola sulla metrica equivalente.

**M6. Effort e costo.** Stima Difficult vs Complex come in Tharin. Se è **Complex** (mai fatto,
dipendenze cross-team), nello scenario Conservative l'investimento sale del **50%** **[regola del Mix]**
(il 50% è un default: dichiara la percentuale scelta o cambiala). Motivo: i costi dei progetti grandi si
sottostimano, e né Tharin né Luneva li mettono in discussione nei numeri.

**M7. Scenari e downside.** Tre scenari (Conservative / Base / Stretch), con righe: input spostati,
ricavi, margine lordo, investimento, payback, % dell'ARR. Prima del Conservative si calcola il downside a
una variabile sull'input 🔴 con più leva, che è la risposta alla domanda "cosa guida l'economia". Tieni
distinti i due: sono due numeri diversi.

**M8. Payback dichiarato.** Il payback è semplice (investimento ÷ margine mensile a regime). Scrivi
una riga che dice cosa **non** include: sviluppo, ramp-up, costi ricorrenti. Se l'utente ha tempi di
sviluppo, mostrali accanto, non dentro il payback.

**M9. De-risking.** Un test con campione, durata, metrica e **kill threshold**: "se [metrica] non
raggiunge [soglia] in [durata] su [campione], si ferma". Il rischio da testare per primo è quello a monte
della catena (principio Tharin) e coincide, di norma, con l'input 🔴 della M7.

**M10. Consegna.** In cima le quattro frasi di Luneva, scritte con i numeri del Base e del downside. Poi
il one-pager di Tharin, poi il dettaglio (albero, tabelle, scenari).

**Conflitti non previsti.** Se un caso porta Tharin e Luneva a indicazioni opposte che qui non sono
coperte, vince la scelta che **rende il rischio più visibile** al lettore. Dichiara il conflitto in una
riga nel documento.

## 4. Le stesse cifre in tutti i binari

I tre binari partono dagli **stessi input** raccolti nella Fase 0. Le differenze nei risultati devono
nascere dal metodo, non da input diversi inseriti a caso in un binario e non nell'altro. Se in un binario
serve un input che non c'era (es. il margine per Luneva), si aggiunge al set condiviso e si usa in tutti.

**Orizzonte del valore.** Luneva conta 12 mesi di impatto (un cliente trattenuto = un anno di ricavo ×
margine). Tharin, nel suo Step 4, può usare LTV × 12. Nel binario Tharin usa quello che dice Tharin, nel
Mix usa i 12 mesi (così il payback è confrontabile) e riporta l'LTV come nota. Se i risultati divergono
per questo, dillo nel confronto.

**Chi sceglie le due leve degli scenari.** Le due più incerte tra gli input 🔴: lo stesso set in
Luneva e nel Mix, così gli scenari sono confrontabili.

## 5. La sezione di confronto (quando i binari sono due o tre)

Va in coda, dopo i documenti, ed è la parte che nessun metodo da solo ti dà. Contenuto:

1. **Tabella di sintesi**: per ogni binario, upside (range), metrica chiave (ARR / payback), rischio
   principale, raccomandazione (Go / No-go / Go condizionato).
2. **Dove divergono e perché**: nominare l'input o la regola che spiega la differenza (es. "Tharin dice
   sotto soglia perché pesa il % dell'ARR, Luneva dice vai perché il payback è di 4 mesi").
3. **Cosa vede solo uno dei due**: es. il gate che Luneva non ha, o il costo in denaro che Tharin non ha.
4. **Quale consegnare**: una riga di raccomandazione per il pubblico (CFO e chi decide sul budget:
   apertura Luneva; product leadership o chi deve agire sui rischi: albero Tharin; default: il Mix).
5. **Domande aperte**: i 🔴 che reggono il risultato, da chiedere al cliente o da testare.
