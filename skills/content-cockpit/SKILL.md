---
name: content-cockpit
description: >
  Report settimanale del lunedì per la content strategy di Stefano: misura i post LinkedIn pubblicati
  (finestra matura 8-14 giorni), legge le conversioni da PostHog e dal log manuale, incrocia i temi in
  trend degli autori della watchlist con i POV del sistema, e produce 3 bozze di post pronte da editare.
  Chiude il loop imparando dai propri output passati. Usa quando l'utente dice "cockpit", "report del
  lunedì", "lancia il cockpit", "come sono andati i post", o quando lo scheduler settimanale lo invoca.
  NON pubblica mai niente: produce solo bozze e proposte.
---

# Content Cockpit — report settimanale del lunedì

Scopo: dire a Stefano **cosa ha funzionato, perché, e cosa scrivere adesso**, con i numeri davanti.
Non è una dashboard: ogni sezione deve chiudersi con una decisione o con un'ammissione esplicita di
non sapere.

**Working directory attesa:** `c:\Users\Utente\Documents\System-content-flywheel`.

**Non pubblicare mai niente.** Nessun post, nessun commento, nessuna modifica su LinkedIn o sul sito.
L'output sono bozze che Stefano edita.

---

## Fase 0 — Contesto

1. `git pull` in `System-content-flywheel` e in `claude-private-refs`.
2. Leggi `knowledge/INDEX.md`, poi **solo** questi file (context scoping, non caricare tutto):
   - `knowledge/foundation/pov.md`, `audience.md`, `content-strategy.md`, `voice-guide.md`
   - `knowledge/craft/writing_techniques.md` e `edit-patterns.md`
   - `knowledge/hypotheses/active.md`
   - `knowledge/platforms/linkedin/rules.md` e `utm-convention.md`
3. Leggi `knowledge/posts/published.md` e la cartella `post-idee/` **solo per i titoli**: servono a non
   riproporre angle già usati o già in canna.
4. Determina la data del run e le due finestre:
   - **Finestra matura**: post pubblicati tra 14 e 8 giorni fa. È quella che si misura.
   - **Finestra fresca**: ultimi 7 giorni. Si cita solo come anticipazione, mai per trarre conclusioni.

**Perché la finestra matura:** le impressioni LinkedIn continuano ad accumularsi per circa una
settimana. Misurare i post di ieri premia chi ha pubblicato lunedì scorso per un artefatto di
misurazione, non per merito.

## Fase 1 — Aggiorna il dataset dei post

1. Verifica che Chrome sia aperto e loggato su LinkedIn (`mcp__chrome-devtools-mcp__list_pages`).
2. Apri `https://www.linkedin.com/in/stefano-martiradonna-product-marketing-manager/recent-activity/all/`
   e prendi uno snapshot. Le impressioni sono visibili **solo** da loggati come proprietario.
3. Rilancia `claude-private-refs/linkedin/parse_snapshot.py` sullo snapshot per rigenerare
   `metrics.csv` e `posts-full.md`.
   Python sta in `C:\Users\Utente\AppData\Local\Programs\Python\Python312\python.exe` (`python` nudo non funziona).

**Se Chrome non risponde:** dichiaralo in cima al report, lavora sul `metrics.csv` esistente, e segna
quali sezioni sono ferme alla settimana scorsa. **Non inventare numeri e non fingere che il dato sia
fresco.** Il log del radar è pieno di cicli degradati: un report onesto su dati vecchi vale, un report
che finge no.

## Fase 2 — KPI dei post

Sulla finestra matura, per ogni post: formato, tema, impressioni, reazioni, commenti, engagement rate.

Poi tre letture:

1. **Il migliore della finestra** con i numeri, e la spiegazione del perché: quale pattern di
   `craft/writing_techniques.md` usava, quale tema, quale formato, dove stava il link.
2. **Il confronto con la base storica**: mediana di tutto il dataset e mediana delle ultime 4 settimane.
   I KPI stanno salendo o scendendo rispetto al tuo stesso passato, non rispetto a un benchmark esterno.
3. **Cosa fare per migliorare**: una raccomandazione per KPI che si è mosso, agganciata a un numero del
   dataset. Mai consigli generici tipo "pubblica più spesso".

### Il controllo anti-rumore, obbligatorio

Il dataset ha mediana ~278 impressioni per post. Su numeri così piccoli la maggior parte delle
oscillazioni è rumore di conteggio.

**Regola:** per ogni confronto tra gruppi, somma reazioni + commenti del gruppo. Se la somma è sotto 30,
l'errore di conteggio è sopra il 18%: dichiara la differenza **non leggibile** a meno che non superi
il 50%. Scrivilo nel report, non tenerlo per te.

Un report che spaccia ogni oscillazione per insight è peggio di nessun report: fa inseguire fantasmi
e le decisioni che ne derivano sono casuali.

## Fase 3 — PostHog

**Il project giusto è `413969`, organizzazione "Mio Sito"** (`019e02de-86b0-0000-7808-ca885401ea7f`).
Il default del connector è `415565` ("Sito Doc"), che contiene i dati del sito di un cliente.
**Chiama sempre `switch-organization` e `switch-project` prima di qualsiasi query**, poi verifica con
una query su `properties.$host` che il dominio sia `stefanomartiradonna.com`. Se non lo è, fermati e
segnalalo: stai leggendo il sito sbagliato.

Estrai per la settimana: pageview, visitatori unici, e gli eventi CTA custom già strumentati sul sito
(`cta_calendly_clicked`, `cta_substack_clicked`, `cta_tool_audit_clicked`, `cta_gtm_snapshot_clicked`,
`cta_guida_gtm_clicked`, `nav_service_clicked`, `scroll_depth_reached`, `faq_opened`).

Se nei dati compaiono UTM (vedi `utm-convention.md`), aggiungi due breakdown:
- per `utm_content` → quale post ha portato traffico
- per `utm_medium` → **link nel corpo contro link nel primo commento**, che è l'esperimento aperto

**Contesto da tenere presente, e da ripetere finché resta vero:** a ottobre 2026 il sito faceva 61
pageview e 44 visitatori in cinque mesi, contro 27.328 impressioni LinkedIn nello stesso periodo. Lo
0,22%. Su questi volumi l'attribuzione per singolo post non è leggibile: la maggior parte dei post avrà
zero o una visita. Riporta i numeri grezzi, **non costruirci sopra analisi che non reggono**, e di' a
chiare lettere quando un numero è troppo piccolo per significare qualcosa.

## Fase 4 — Conversioni manuali

Leggi `claude-private-refs/linkedin/conversions.md`. Se ci sono righe nuove, prova ad agganciarle a un
post per timing, ma **solo come ipotesi dichiarata**, mai come fatto.

Ricorda la gerarchia di Stefano: DM da founder (forte) > iscritto newsletter (media) > visita al sito
(debole). La conversione più forte non passa da nessun sistema automatico: se il log è vuoto, dillo,
perché un log vuoto significa che il report sta misurando solo ciò che piace, non ciò che porta lavoro.

## Fase 5 — Radar autori (a settimane alterne)

Il radar autori gira **ogni due settimane**, non ogni settimana. Motivo documentato in `radar/log.md`:
Dunford è rimasta quattro cicli consecutivi senza pubblicare, Herubel due. Su finestra settimanale
metà delle volte la sezione sarebbe vuota o riempita con materiale marginale.

- **Settimana dispari (radar attivo):** esegui la skill `content-radar` per la parte autori e temi.
- **Settimana pari:** niente radar. Pesca dagli angle dell'ultimo ciclo che non sono stati usati,
  elencandoli esplicitamente come "riporto dal ciclo precedente".

## Fase 6 — Temi in trend, filtrati sui POV

Dagli autori e dalle conversazioni, estrai i temi che stanno girando. Poi applica il filtro che è il
cuore del sistema: **questo serve a scalare un POV di Stefano?** Un tema che gira ma non aggancia
`foundation/pov.md` va scartato, non incluso perché è di moda.

Per ogni tema trattenuto, dichiara se serve a **demand gen** (allargare il pubblico) o a **demand
capture** (convertire chi già cerca). Stefano vuole entrambe, ma ogni singolo pezzo serve una delle due
e il report deve dirlo, perché sono stili diversi e si misurano con KPI diversi.

**Nei dati i due obiettivi vanno in direzioni opposte**: il post con più reach del dataset (Como e
Disney, 7.902 impressioni, tema consumer) ha anche uno dei peggiori engagement rate, mentre i cinque
post più risonanti stanno tutti sotto le 300 impressioni e sono tutti B2B core. Tienine conto quando
proponi.

## Fase 7 — Tre bozze

Usa la skill `linkedin-viral-post-writer`, che porta voce e struttura. Il cockpit aggiunge il contesto:
quale tema, quale pattern, perché adesso.

Per ciascuna delle 3 bozze dichiara, prima del testo:

- **Tema** e a quale POV si aggancia
- **Obiettivo**: demand gen o demand capture
- **Formato consigliato** (testo, immagine, carosello) e perché, con il numero che lo giustifica
- **Pattern usato** (T01-T06 o altro) e l'evidenza nel dataset che lo supporta
- **Link con UTM già montato** secondo `utm-convention.md`, se il pezzo porta da qualche parte
- **Previsione**: cosa ti aspetti che faccia rispetto alla mediana, e perché

Poi, alla fine, **di' quale delle tre è la più forte e perché**. Tre bozze senza una gerarchia
spostano su Stefano il lavoro di scelta, che è esattamente il lavoro che la routine dovrebbe togliergli.

**Anti-ripetizione:** scarta angle già presenti in `post-idee/` o già pubblicati in `published.md`,
a meno che non ci sia un motivo esplicito per rifarli (dato nuovo, evidenza contraria).

## Fase 8 — Auto-miglioramento (la parte che chiude il loop)

Questa fase è ciò che distingue il cockpit da un report che si ripete uguale ogni settimana.

1. **Verifica le previsioni vecchie.** Recupera le previsioni fatte nei report delle settimane
   precedenti (sono in `claude-private-refs/linkedin/cockpit/`) per i post che ora sono nella finestra
   matura. Hanno retto? Scrivi il confronto previsto contro reale. **Una previsione sbagliata è il dato
   più prezioso della settimana**: significa che un pattern che credevamo buono non lo è.
2. **Aggiorna l'evidenza.** Porta quello che hai imparato in `knowledge/hypotheses/active.md`. Se
   un'ipotesi è confermata per la terza volta, **proponi** la promozione a regola in
   `platforms/linkedin/rules.md`. Proponi, non eseguire: la promozione la decide Stefano, come per il
   resto del sistema.
3. **Impara dai post che performano.** Rileggi in `posts-full.md` i post entrati nel top decile da
   quando gira la routine, ed estrai cosa hanno in comune che i mediani non hanno: apertura, lunghezza,
   presenza di numeri, tipo di chiusura. Se emerge un pattern nuovo, aggiungilo a
   `craft/writing_techniques.md`; se qualcosa funziona che non dovrebbe, va nella sezione false beliefs.
4. **Registra le previsioni di questa settimana**, così fra due settimane saranno verificabili.

Senza il punto 1 il sistema non impara: produce consigli che non vengono mai messi alla prova.

## Fase 9 — Output

Scrivi il report in `claude-private-refs/linkedin/cockpit/AAAA-MM-GG-report.md` (privato: contiene
performance e dati di conversione).

Struttura, in quest'ordine, perché l'ordine è il messaggio:

1. **Una riga di verdetto**: la cosa che Stefano deve sapere se legge solo la prima riga
2. **Stato dei dati**: cosa è fresco, cosa è degradato, cosa manca
3. **KPI della finestra matura** + il migliore + trend contro le ultime 4 settimane
4. **Cosa fare per migliorare i KPI**, agganciato ai numeri
5. **Sito e conversioni** (con l'avvertenza sui volumi finché resta vera)
6. **Previsioni verificate** della settimana scorsa
7. **Temi in trend filtrati sui POV**, con tag gen/capture
8. **Le 3 bozze**, con la gerarchia dichiarata
9. **L'esperimento della settimana**: una sola ipotesi falsificabile da testare, con come si misura

Poi committa: il dataset e il report in `claude-private-refs`, eventuali aggiornamenti di knowledge in
`System-content-flywheel`. Niente push di cose non richieste.

---

## Cosa rende questo report sopra la media (e cosa lo rovinerebbe)

- **Dice anche cosa smettere di fare.** Se un tema è stato battuto più volte e la performance scende a
  ogni ripetizione, dillo. Quasi tutti i report editoriali aggiungono soltanto, e la saturazione non la
  vede nessuno.
- **Confronta Stefano con gli autori sullo stesso tema.** Se un autore della watchlist fa 300 reazioni
  su un tema dove Stefano ne fa 12, la differenza non è il tema: è l'esecuzione o il pubblico. Dirlo è
  scomodo ed è il motivo per cui serve.
- **Ammette l'incertezza invece di riempirla.** Sezione vuota dichiarata vuota. Campione piccolo
  dichiarato piccolo. È ciò che rende credibile il resto.
- **Propone un esperimento alla volta**, non cinque consigli paralleli: con questi volumi, testare più
  variabili insieme rende i risultati illeggibili.
- **Si espone con una previsione**, e due settimane dopo si misura.

Cosa lo rovinerebbe: presentare ogni oscillazione come insight, produrre bozze su temi di moda che non
agganciano i POV, e riempire le sezioni vuote per non lasciare buchi.
