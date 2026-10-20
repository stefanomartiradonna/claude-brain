# Output Luneva, Mix e Confronto

Il formato Tharin sta in `output-templates.md` (doc completo, mermaid, one-pager). Qui ci sono gli altri
tre. Regole comuni: ogni numero con la sua fonte, 🔴 come domande aperte, niente numero secco dove c'è
incertezza.

Se il caso riguarda un cliente, **non salvarlo in un repo pubblico**: dì dove lo consegni e lascia
all'utente la destinazione.

---

## (A) Doc Luneva

```markdown
# Business Case (metodo Luneva): [Nome iniziativa]

**Decisione richiesta**: [investire $X in Y, sì/no/quando]

## 1. Catena
| Cambio di prodotto | Cambio di comportamento | Leva finanziaria | Impatto in $ |
|---|---|---|---|
| [cosa si costruisce] | [cosa cambia nel cliente] | [ricavi / costo / conversione] | [+$ all'anno] |

## 2. Input
*Se i flussi di valore sono più d'uno (nuovi ricavi, churn evitato, upgrade, costo risparmiato), una
tabella per flusso, più la tabella comune di margine e investimento.*
| Input | Valore | Fonte |
|---|---|---|
| [base clienti] | | [dato / stima dichiarata] |
| [adozione] | | |
| [azioni extra per adottante / anno] | | |
| [valore medio] | | |
| [margine lordo] | | |
| [investimento] | | |

## 3. Calcolo
[base × adozione × azioni × valore] = ricavi annui (orizzonte 12 mesi) → × margine = margine lordo
annuo → ÷ 12 = mensile. Con più flussi: una riga per flusso, poi la somma.
**Payback** = investimento ÷ margine mensile = [X mesi]. *Payback semplice: non include sviluppo,
ramp-up, costi ricorrenti.* **Payback massimo accettabile** dell'utente: [X mesi, o assunzione dichiarata].

## 4. Rischi
- **Assunzione che pesa di più**: [quale]
- **Se è sbagliata**: [cosa succede]
- **Cosa testo prima di spendere tutto**: [test, durata, campione]

## 5. Downside (una variabile)
[input spostato da A a B] → ricavi [X], margine lordo [X], payback [X mesi]. **Guida l'economia**: [sì/no].

## 6. Scenari
| | Conservative | Base | Stretch |
|---|---|---|---|
| [leva 1] | | | |
| [leva 2] | | | |
| Ricavi annui | | | |
| Margine lordo | | | |
| Payback su [investimento] | | | |

## 7. La decisione in 60 secondi
Se la raccomandazione è sì:
Dovremmo investire [$X] in [iniziativa] perché ci aspettiamo [$Y] di [ricavi] e [$Z] di margine lordo.
Il caso dipende da [A] e [B]. Nel caso downside, [cosa succede e payback]. Raccomando [decisione] e
validerei [assunzione] per prima con [test].

Se la raccomandazione è no o non ora:
Non raccomando di investire [$X] in [iniziativa] ora perché ci aspettiamo solo [$Z] di margine lordo,
con payback di [X mesi]. Il caso non regge a causa di [A] e [B]. Cambierei idea se [cosa dovrebbe essere
vero]. Prima di decidere validerei [assunzione].
```

---

## (B) Doc Mix

```markdown
# Business Case (Mix Tharin + Luneva): [Nome iniziativa]

## In 60 secondi
[Le quattro frasi di Luneva, con numeri del Base e del downside]

## One-pager
**Upside**: [range ricavi / ARR] · risultato dei tre scenari · [% dell'ARR o equivalente]
**Margine lordo**: [range] · **Investimento**: [$ + nota Difficult/Complex] · **Payback**: [range]
**Gate**: [differentiator / ...] · **Soglia**: [superata / no]
**Rischio critico**: [input 🔴 con più leva] · **Kill threshold**: [metrica, soglia, durata, campione]
**Raccomandazione**: [Go / No-go / Go condizionato]

## 1. Assunzione centrale, gate e soglia
[Assunzione in una frase · gate · stima grezza vs soglia]

## 2. Albero (canali → driver, con colore)
[mermaid come in output-templates.md, con i colori 🔴🟡🟢 e l'upside per canale]

## 3. Per ogni canale: catena e tabella input
**Catena**: [cambio di prodotto → comportamento → leva → $]
| Input | Valore | Colore | Fonte |
|---|---|---|---|
| ... | | 🟢/🟡/🔴 | |
(margine lordo e investimento sempre presenti; se assunti, 🔴)

## 4. Effort e costo
Difficult vs Complex: [stima]. Se Complex: Conservative con investimento +[50]%. Milestone: [se high-cost].

## 5. Sensibilità e scenari
**Input che guida l'economia**: [quale] → downside a una variabile: [risultato].
| | Conservative | Base | Stretch |
|---|---|---|---|
| Input spostati | | | |
| Ricavi annui incrementali | | | |
| Margine lordo | | | |
| Investimento | | | |
| Payback | | | |
| % dell'ARR (o metrica equivalente) | | | |
*Payback semplice: non include [sviluppo / ramp-up / costi ricorrenti].*

## 6. De-risking
Test: [cosa, su quale campione, per quanto tempo] · metrica [X] · **Kill threshold**: se [metrica] non
raggiunge [soglia] in [durata], si ferma.

## 7. Raccomandazione
[Go / No-go / Go condizionato] [1-2 frasi]
```

---

## (D) Nota di stop sotto soglia (Tharin e Mix)

Si consegna al posto del documento completo quando la stima grezza non supera la soglia dell'utente.
Mezza pagina:

```markdown
## [Nome iniziativa]: sotto soglia (Tharin / Mix)

**Stima grezza**: [range] · **Soglia dell'utente**: [es. 5% dell'ARR = X] · **Esito**: sotto soglia
**Perché**: [i due o tre numeri che la tengono sotto]
**Cosa dovrebbe essere vero per superarla**: [input che dovrebbe valere X, ed è plausibile o no]
**In 60 secondi (forma "non ora")**: [le quattro frasi della variante no/non ora, con i numeri della stima]
**Cosa resta aperto**: [se Luneva dà un esito diverso, rimanda al confronto]
```

Se l'utente chiede di costruire comunque il Mix completo, si fa e si marca "esplorativo, sotto soglia".

---

## (C) Sezione di confronto (quando i binari sono due o tre)

```markdown
# Confronto dei metodi: [Nome iniziativa]

| | Tharin | Luneva | Mix |
|---|---|---|---|
| Upside (range) | | | |
| Metrica chiave | [% dell'ARR] | [payback] | [entrambe] |
| Rischio principale | | | |
| Raccomandazione | | | |

**Dove divergono e perché**: [input o regola che spiega la differenza, in una riga ciascuno]
**Cosa vede solo uno dei due**: [es. il gate / il costo in denaro]
**Quale consegnare e a chi**: [una riga]
**Domande aperte**: [i 🔴 che reggono il risultato, da chiedere o testare]
```

Se i tre risultati coincidono, dillo in una riga: è un'informazione (il caso regge indipendentemente dal
metodo).
