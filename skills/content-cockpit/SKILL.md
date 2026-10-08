---
name: content-cockpit
description: >
  Report settimanale del lunedì per la content strategy di Stefano: misura i post LinkedIn pubblicati
  (finestra matura 8-14 giorni), legge le conversioni da PostHog e dal log manuale, pesca i temi dalla
  sua settimana, dagli autori della watchlist e dall'archivio, e propone un piano editoriale di 5 pezzi.
  Si ferma, aspetta che Stefano scelga, poi scrive solo quelli, immagine inclusa. Impara dalle
  correzioni che Stefano fa alle bozze e dalle proprie previsioni verificate. Usa quando l'utente dice
  "cockpit", "report del lunedì", "lancia il cockpit", "come sono andati i post", o quando lo scheduler
  settimanale lo invoca. NON pubblica mai niente: produce solo bozze e proposte.
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
   - `claude-private-refs/linkedin/voce-analisi.md` — cosa Stefano fa **di fatto** nei suoi testi, con
     il conteggio dei post che lo sostengono. È evidenza, non autorità: vedi "Dipendenze" sotto.
   - `claude-private-refs/linkedin/temi.csv` — tema e formato retorico per ogni post, serve a ogni
     analisi per tema e a ritrovare i post vecchi su un argomento
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

## Fase 6 — I temi della settimana, da tre fonti

Non cercare i temi solo nel mercato: il contenuto che suona autentico nasce da cosa Stefano ha fatto
davvero. Guarda in quest'ordine.

1. **La sua settimana.** Cosa ha fatto, deciso, lanciato o imparato negli ultimi 7 giorni: commit nei
   repo, file nuovi in `articoli/`, `post-idee/`, `infografiche/`, note di engagement in
   `client-intelligence/`, e se i connector sono disponibili anche mail e calendario. **È la fonte
   migliore e quella che tutti saltano**, perché è l'unica che nessun concorrente può copiare.
2. **Il mercato.** Gli autori della watchlist (Fase 5) e le conversazioni sui temi core.
3. **L'archivio.** Post sopra la mediana pubblicati più di sei mesi fa, da aggiornare; oppure tre-cinque
   post sullo stesso tema da fondere in un pezzo unico. Materiale già validato dai numeri, che nessuno
   dei lettori attuali ricorda.

Poi applica il filtro che è il cuore del sistema: **questo serve a scalare un POV di Stefano?** Un tema
che gira ma non aggancia `foundation/pov.md` si scarta, non si include perché è di moda.

Per ogni tema trattenuto dichiara se serve a **demand gen** (allargare il pubblico) o **demand capture**
(convertire chi già cerca). Stefano vuole entrambe, ma ogni singolo pezzo ne serve una sola, e sono
stili diversi che si misurano con KPI diversi.

**Nei dati i due obiettivi vanno in direzioni opposte**: il post con più reach (Como e Disney, 7.902
impressioni, tema consumer) ha uno dei peggiori engagement rate, mentre i cinque post più risonanti
stanno tutti sotto le 300 impressioni e sono tutti B2B core. Non mescolarli in un unico giudizio.

## Fase 7 — Il piano, poi fermati

**Non scrivere ancora i post.** Proponi un piano di 5 pezzi, uno per giorno lavorativo: **2 ripresi
dall'archivio** (fonte 3) e **3 nuovi**.

Per ciascuno, in una riga di tabella più poche righe sotto:

- **Giorno** e **tema**, con il POV agganciato
- **Fonte**: il file, il commit, la mail o il link preciso da cui nasce. Un tema senza fonte tracciabile
  è un tema inventato
- **Obiettivo**: demand gen o demand capture
- **Tre aperture diverse** tra cui scegliere, non una
- **Formato** media (testo/immagine/carosello) e **formato retorico**, con il numero dell'archivio che
  giustifica la scelta (vedi `temi.csv` e `voce-analisi.md`)
- **Previsione**: cosa ti aspetti rispetto alla mediana, e perché

Poi **di' quale dei cinque è il più forte e quale toglieresti**. Un piano senza gerarchia sposta su
Stefano il lavoro di scelta, che è il lavoro che la routine dovrebbe togliergli.

**Anti-ripetizione:** scarta angle già in `post-idee/` o già pubblicati in `published.md`, a meno che
non ci sia un motivo esplicito per rifarli (dato nuovo, evidenza contraria).

**Qui la routine si ferma e aspetta.** Scrivere cinque pezzi che poi ne pubblica due significa buttare
via tre quinti del lavoro, e soprattutto togliergli il gate editoriale che nel suo sistema sta sempre
al livello strategico, mai al copy-editing.

## Fase 8 — Scrivere i pezzi scelti

Solo dopo che Stefano ha detto quali tiene.

**Prima di scrivere su un tema, rileggi tutti i suoi post già pubblicati su quel tema** (filtra
`temi.csv`, poi leggi i testi in `posts-full.md`). Serve a due cose: non contraddire quello che ha già
sostenuto, e sapere quali pezzi vecchi linkare o citare. Un consulente che si contraddice tra due post
sullo stesso tema perde più credibilità di quanta ne guadagni con un post in più.

**Scrivi invocando la skill `linkedin-viral-post-writer`**, che è l'autorità sulla voce di Stefano.
Il cockpit non la duplica e non la sostituisce: le passa il contesto (tema, formato, pezzi vecchi da
linkare, obiettivo gen o capture) e lascia che sia lei a dettare voce, struttura e hook. Vedi
"Dipendenze" in fondo per l'ordine di precedenza.

Per ogni pezzo consegna anche:

- **Il brief dell'immagine**: cosa mostra, il testo esatto da metterci sopra (massimo 25 parole),
  formato 4:5. Il 70% dei suoi post porta un'immagine e finora non è mai stata specificata, quindi è
  il pezzo di lavoro che gli resta addosso ogni volta.
- **Il link con UTM già montato** secondo `utm-convention.md`, se il pezzo porta da qualche parte.

Salva ogni bozza in `claude-private-refs/linkedin/bozze.md` con la data e il nome del pezzo. Serve alla
Fase 9: senza la bozza salvata, il confronto con la versione pubblicata è impossibile.

## Fase 9 — Auto-miglioramento (due loop, non uno)

Questa fase distingue il cockpit da un report che si ripete uguale ogni settimana.

### Loop A — Le mie correzioni (segnale ogni settimana)

Confronta le bozze in `bozze.md` con i post che Stefano ha effettivamente pubblicato (li trovi in
`posts-full.md` dopo l'aggiornamento della Fase 1). Per ogni differenza, chiediti: **è una regola
generale del suo modo di scrivere, o vale solo per quel pezzo?**

Una correzione che si ripete in almeno due post si registra in `voce-analisi.md` con data ed esempio
prima/dopo: quello è il file delle osservazioni e si aggiorna da solo. Le correzioni uniche restano fuori.

**Poi proponi** di portarla in `~/.claude/skills/linkedin-viral-post-writer/references/mio-stile.md`,
che è dove vive la voce canonica. Proponi, non scrivere: quella skill è di Stefano, la usa anche fuori
da questa routine, e una regola che ci entra condiziona ogni post che scriverà, non solo quelli del
lunedì. Il gate è suo.

**Questo è il loop primario.** Dà segnale ogni singola settimana, perché Stefano edita sempre, mentre
le previsioni di performance (loop B) su questi volumi restano spesso non leggibili. Se devi
sacrificarne uno per tempo, sacrifica il B.

### Loop B — Le mie previsioni (segnale raro ma prezioso)

Recupera le previsioni dei report precedenti (in `cockpit/`) per i post ora nella finestra matura.
Hanno retto? Scrivi previsto contro reale. **Una previsione smentita vale più di tre confermate**:
significa che un pattern che il sistema dava per buono non regge.

Porta l'evidenza in `knowledge/hypotheses/active.md`. Alla terza conferma, **proponi** la promozione a
regola in `platforms/linkedin/rules.md`: proponi, non eseguire. La promozione la decide Stefano, come
tutto il resto del sistema.

Infine registra le previsioni di questa settimana, così fra due settimane saranno verificabili.

## Fase 10 — Output

Scrivi il report in `claude-private-refs/linkedin/cockpit/AAAA-MM-GG-report.md` (privato: contiene
performance e dati di conversione).

Struttura, in quest'ordine, perché l'ordine è il messaggio:

1. **Una riga di verdetto**: la cosa che Stefano deve sapere se legge solo la prima riga
2. **Stato dei dati**: cosa è fresco, cosa è degradato, cosa manca
3. **KPI della finestra matura** + il migliore + trend contro le ultime 4 settimane
4. **Cosa fare per migliorare i KPI**, agganciato ai numeri
5. **Sito e conversioni** (con l'avvertenza sui volumi finché resta vera)
6. **Cosa ho imparato dalle tue correzioni** (loop A) e **previsioni verificate** (loop B)
7. **I temi della settimana**, con fonte dichiarata e tag gen/capture
8. **Il piano dei 5 pezzi**, con la gerarchia dichiarata, poi stop
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

---

## Dipendenze

Il cockpit **orchestra**, non riscrive. Le skill che invoca restano autonome e usabili da sole, fuori
da questa routine, senza passare da qui.

| Skill | Ruolo | Quando la usa il cockpit |
|---|---|---|
| `linkedin-viral-post-writer` | **Autorità sulla voce e sulla struttura dei post.** Scritta da Stefano, vive di vita propria, si usa anche da sola per un post singolo in qualsiasi momento | Fase 8, per scrivere i pezzi scelti |
| `content-radar` | Radar autori e temi, ciclo bisettimanale autonomo | Fase 5, nelle settimane dispari |

**Il cockpit non duplica mai quello che fanno.** Se una regola di scrittura serve in entrambi i posti,
va messa nella skill di scrittura e richiamata da qui, non copiata.

### Ordine di precedenza quando le fonti sono in conflitto

1. **`linkedin-viral-post-writer`** — è la voce dichiarata di Stefano, le sue scelte deliberate. Vince.
2. **`voce-analisi.md`** — è evidenza su cosa fa di fatto nei testi pubblicati. Informa, non comanda.
3. **Regole generiche di copywriting** — perdono sempre contro le prime due.

**Se 1 e 2 divergono, non risolvere da solo: segnalalo nel report.** Esempio: se la skill dice di
chiudere con una domanda aperta e i dati mostrano che l'ha fatto in 9 post su 80, quella non è una
regola da applicare in silenzio né da ignorare in silenzio. È una divergenza tra come Stefano pensa di
scrivere e come scrive davvero, e deciderla è un lavoro suo, non della routine. Mettila nella sezione
"Cosa ho imparato" e lascia che scelga.
