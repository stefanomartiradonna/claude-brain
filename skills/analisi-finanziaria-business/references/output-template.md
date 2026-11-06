# Il formato del report

Un report, sempre la stessa struttura, in italiano. Si apre con la diagnosi e non con i dati: chi legge
deve capire in dieci secondi come sta il business e cosa fare lunedì.

Regole di forma: niente trattino medio, mai. Numeri con separatore delle migliaia. Ogni numero derivato
porta il tag `[derivato]`. Ogni soglia citata porta la traccia a cui appartiene. Niente aggettivi al
posto dei numeri ("margine basso" non è un dato, "44,7% contro una fascia 60-80%" lo è).

---

## Struttura

```markdown
# Come sta [azienda o business], [mese anno]

**Traccia**: [ricorrente / transazionale / servizi] · **Periodo**: [finestra, es. lug-set 2026] ·
**Perimetro dei costi diretti**: [cosa è incluso]

## La diagnosi

**[Nome della lettura], [aggravanti se presenti].**

[Due righe: cosa è rotto e perché è quello e non altro. Qui si nomina il numero bloccante nella
forma obbligatoria: X è a [valore], deve entrare in [banda] entro [data], altrimenti [conseguenza].]

## Il cruscotto

| Blocco | Numero | Valore | Giudizio |
|---|---|---|---|
| Margini | Gross margin | | |
| | Contribution margin (coorte matura) | | |
| Unit economics | CAC | | |
| | LTV (a margine) | | |
| | Rapporto LTV/CAC | | |
| | Payback | | |
| | Tetto del CAC | | |
| Cassa | Cassa a [data] | | |
| | Burn rate | | |
| | Runway | | zona |
| Circolante | Ciclo di cassa | | anticipa / neutro / libera |
| | Cassa per ogni 10% di crescita | | |

**Controlli di coerenza**: [i tre, con esito. Se uno non torna, il report si fermava prima: qui
compare solo se sono passati.]

## Perché questa diagnosi e non un'altra

[Il passaggio nella cascata: quali letture sono state escluse e per quale segnale. Soprattutto la
biforcazione: se il rapporto è sotto 3, perché C2 e non C3, o il contrario. Se un numero cade nella
banda di indecisione, qui si dichiara la doppia lettura e si dice quale dato la risolverebbe.]

## Le mosse

**Politica guida.** Per i prossimi N mesi portiamo [numero] da X a Y, e rinunciamo a [oggetto].

**Dove va il capitale.** [Leva dominante al N%, leva di supporto, leva ferma o a zero, con la riga
che spiega perché quella è a zero.]

| # | Mossa | Leva | Effetto atteso sul numero bloccante | Primo segnale | Reversibilità |
|---|---|---|---|---|---|
| 1 | | | | | |

**Entro 14 giorni**: [solo cassa e stop]
**Entro 6 settimane**: [prima misura, con il metodo]

## Cosa non fare

[Da 2 a 4 voci. Ognuna è la mossa d'istinto, con la ragione per cui peggiora le cose. Questa
sezione non è un riempitivo: è spesso la parte più utile del report.]

## Il punto di controllo

La diagnosi scade quando [numero] supera [soglia], o il [data]. A quel punto la lettura diventa
probabilmente [lettura] e il capitale si sposta su [leva].

## Cosa manca per stringere il giudizio

| Dato mancante | Perché cambia qualcosa | Dove si trova |
|---|---|---|

[Se ci sono numeri derivati che entrano nella lettura, qui va la riga di sensibilità: "se la durata
reale è 14 mesi invece di 20, la lettura passa da C5 a C2".]
```

---

## Il cruscotto in una pagina

Quando serve la versione corta, da incollare in un deck o mandare per email: la diagnosi in una riga, la
tabella dei quattro blocchi con i soli giudizi, le prime tre mosse, il punto di controllo. Niente
altro. Non è un riassunto del report: è la stessa cosa senza le spiegazioni.

---

## Quando il report non si fa

Due casi, entrambi vanno scritti e non aggirati.

**Dati sotto il pavimento** (manca uno dei tre numeri irriducibili). Si consegna il cruscotto parziale,
si scrive **"diagnosi non emessa"**, e si elenca cosa recuperare e dove. Nessuna lettura viene nominata,
nemmeno come ipotesi: il nome resta nella testa del cliente e i caveat no.

**Un controllo di coerenza fuori dal 20%.** Si dice quale blocco non torna e cosa significa quello
specifico scostamento, si chiede il dato, e si rimanda il report. Un cruscotto costruito su tre numeri
che non si parlano fra loro non è un cruscotto.

---

## Dove si salva

Il report è materiale cliente. Non va in un repo pubblico, nemmeno anonimizzato di fretta: chiedi la
destinazione. Se dal lavoro esce un pattern che vale oltre quel cliente, l'estrazione anonimizzata è un
passaggio a parte, e segue le regole di `client-intelligence` nel repo editoriale.
