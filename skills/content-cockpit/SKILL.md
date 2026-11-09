---
name: content-cockpit
description: >
  Unica routine settimanale (lunedì) della content strategy di Stefano, consegnata su Google Doc: misura
  i post LinkedIn pubblicati (finestra matura 8-14 giorni) e ricalcola su tutto lo storico cosa funziona,
  legge sito, conversioni e call, legge ogni settimana gli autori della watchlist su LinkedIn, newsletter
  propria e X, cerca anche nuovi content creator su X (radar X), e chiude con tre liste: 5 notizie tech
  da leggere con i suoi pillar, fino a 5 angoli dagli autori, e fino a 3 candidati Build in Public/
  Personal Brand/Offer dalla sua settimana. Riporta anche il mix dei contenuti per categoria
  (Educational/Thought Leadership/Personal Brand/Build in Public/Offer) reale contro target.
  Si ferma, aspetta che Stefano dica cosa sviluppare, poi scrive solo quello, immagine inclusa. Impara
  dalle correzioni alle bozze, dalle previsioni verificate e da quali voci delle liste Stefano sceglie.
  Usa quando l'utente dice "cockpit", "report del lunedì", "lancia il cockpit", "come sono andati i post",
  "radar", "lancia il radar", "cosa hanno pubblicato gli autori", o quando lo scheduler settimanale lo
  invoca. Con "radar" o "autori" da soli esegue solo la parte autori (Fase 5). NON pubblica mai niente:
  produce solo bozze e proposte.
---

# Content Cockpit, report settimanale del lunedì

Scopo: dire a Stefano **cosa ha funzionato, perché, e cosa scrivere adesso**, con i numeri davanti.
Non è una dashboard: ogni sezione deve chiudersi con una decisione o con un'ammissione esplicita di
non sapere.

È l'unica routine dei contenuti: fino a ottobre 2026 la lettura degli autori era una skill separata
(`content-radar`) con un suo scheduler, un suo Doc e una finestra di 15 giorni che si sovrapponeva al
ciclo precedente. Ora sta qui dentro, alla Fase 5, e gira ogni settimana. **Un solo report, su Google
Doc**, che è dove Stefano lo legge.

**Working directory attesa:** la cartella `System-content-flywheel` indicata nel prompt del task.
Il repo privato `claude-private-refs` le sta accanto. I percorsi cambiano da computer a computer e
stanno solo nel prompt, mai in questa skill. Per installare la routine su un altro computer:
`System-content-flywheel/scripts/README.md`.

**Non pubblicare mai niente.** Nessun post, nessun commento, nessuna modifica su LinkedIn o sul sito.
L'output sono bozze che Stefano edita.

---

## Fase 0: Contesto

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
   - `claude-private-refs/linkedin/cosa-funziona.md` — l'ultimo ricalcolo su tutto lo storico (Fase 1)
   - `claude-private-refs/linkedin/scelte.csv` — le voci proposte nelle liste e quali Stefano ha tenuto
3. Leggi `knowledge/posts/published.md` e la cartella `post-idee/` **solo per i titoli**: servono a non
   riproporre angle già usati o già in canna.
4. **Rileggi le liste e la sezione autori degli ultimi due report** in `claude-private-refs/linkedin/cockpit/`.
   Non è facoltativo: il 25/10 una stesura costruita senza rileggere il ciclo precedente aveva 3 angoli su
   7 doppi e uno su un dato già scartato. Un angolo già proposto torna solo con un fatto nuovo, e lo dici.
5. Determina la data del run e le finestre:
   - **Finestra matura**: post pubblicati tra 14 e 8 giorni fa. È quella che si misura.
   - **Finestra fresca**: ultimi 7 giorni. Si cita solo come anticipazione, mai per trarre conclusioni.
   - **Finestra autori**: dal giorno dopo la data dell'ultimo report in `cockpit/` fino a oggi, al massimo
     21 giorni. Di norma sono 7. Se un lunedì è saltato si allarga da sola e non lascia buchi; se il run è
     manuale a metà settimana, non rilegge quello che il report di lunedì ha già letto.

**Perché la finestra matura:** le impressioni LinkedIn continuano ad accumularsi per circa una
settimana. Misurare i post di ieri premia chi ha pubblicato lunedì scorso per un artefatto di
misurazione, non per merito.

## Fase 1: Aggiorna il dataset dei post

1. Verifica che Chrome sia aperto e loggato su LinkedIn (`mcp__chrome-devtools-mcp__list_pages`).
2. Apri `https://www.linkedin.com/in/stefano-martiradonna-product-marketing-manager/recent-activity/all/`
   e prendi uno snapshot. Le impressioni sono visibili **solo** da loggati come proprietario.
3. Lancia `claude-private-refs/linkedin/parse_snapshot.py` sullo snapshot. Lo script **unisce**:
   aggiunge i post nuovi a `metrics.csv` e `posts-full.md`, aggiorna i numeri di quelli che ci sono
   già e conserva i più vecchi, che lo snapshot non mostra più. Stampa quanti ne ha aggiunti,
   aggiornati e conservati: se il totale è più basso di prima, fermati, è un errore.
   Python: `py -3`, e se manca `python`.
4. **Tagga i post nuovi in `temi.csv`**: una riga per ogni `activity_id` che c'è in `metrics.csv` e non lì,
   con fino a tre tag, il formato retorico e la **categoria mix**. Per tag e formato retorico usa solo
   quelli definiti nelle sezioni 1 e 2 di `voce-analisi.md`; per la categoria mix usa solo le 5 di
   `content-strategy.md` §2bis (Educational, Thought Leadership, Personal Brand, Build in Public, Offer).
   Se un post non ci sta bene in nessuna, scegli la più vicina e segnalalo nel report invece di inventarne
   una sesta. Un post fuori dalla tua rete (How Small Brands Grow, un'altra testata) o cancellato va anche
   in `esclusi.csv`, con il motivo.
5. **Aggiorna `scelte.csv`**:
   - le voci del report precedente con `scelta` ancora vuota diventano `si` se Stefano le ha fatte
     sviluppare (c'è una bozza in `bozze.md` o in `post-idee/` che le cita) e `no` altrimenti;
   - se un post appena entrato in `metrics.csv` è nato da una voce scelta, scrivi il suo `activity_id`
     su quella riga. Abbinalo per tema e testo, non per data: se non sei sicuro, lascia vuoto e dillo.
6. Lancia `claude-private-refs/linkedin/cosa_funziona.py`. Ricalcola su **tutto** lo storico maturo, con
   intervalli di confidenza, quali formati, formati retorici e temi stanno sopra o sotto la tua mediana, e
   cosa è cambiato dal lunedì precedente. Scrive `cosa-funziona.md`, che è la base storica di tutto il
   report. Se nel suo output compare "post maturi senza riga in temi.csv", torna al punto 4.

**Perché uno script e non una lettura a occhio:** su una mediana di ~275 impressioni una settimana sola
non dice quasi mai niente. Lo storico intero sì, ma solo se ogni lunedì si rifà lo stesso conto nello
stesso modo. È così che la routine impara da cosa funziona senza inseguire il rumore.

**Se Chrome non risponde:** dichiaralo in cima al report, lavora sul `metrics.csv` esistente, e segna
quali sezioni sono ferme alla settimana scorsa. **Non inventare numeri e non fingere che il dato sia
fresco.** Il vecchio log del radar (`radar/log.md`) è pieno di cicli degradati: un report onesto su dati vecchi vale, un report
che finge no.

## Fase 2: KPI dei post

Sulla finestra matura, per ogni post: formato, tema, impressioni, reazioni, commenti, engagement rate.

Poi tre letture:

1. **Il migliore della finestra** con i numeri, e la spiegazione del perché: quale pattern di
   `craft/writing_techniques.md` usava, quale tema, quale formato, dove stava il link.
2. **Il confronto con la base storica**: riferimento e trend li prendi da `cosa-funziona.md`, non li
   ricalcoli a mano. I KPI stanno salendo o scendendo rispetto al tuo stesso passato, non rispetto a un
   benchmark esterno. Il migliore della finestra lo leggi contro le tabelle di quel file: un carosello
   sopra la mediana generale ma dentro la mediana dei caroselli si comporta come sempre, non è un merito.
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

## Fase 3: PostHog

**Il project giusto è `413969`, organizzazione "Mio Sito"** (`019e02de-86b0-0000-7808-ca885401ea7f`).
Il default del connector può essere un altro project, con i dati del sito di un cliente.
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

## Fase 4: Conversioni manuali

Leggi `claude-private-refs/linkedin/conversions.md`. Se ci sono righe nuove, prova ad agganciarle a un
post per timing, ma **solo come ipotesi dichiarata**, mai come fatto.

Ricorda la gerarchia di Stefano: DM da founder (forte) > iscritto newsletter (media) > visita al sito
(debole). La conversione più forte non passa da nessun sistema automatico: se il log è vuoto, dillo,
perché un log vuoto significa che il report sta misurando solo ciò che piace, non ciò che porta lavoro.

## Fase 5: Gli autori della watchlist, ogni settimana

Autori e temi stanno in `references/watchlist.md` di questa skill: si cambiano lì, non qui. Da
2026-11-08 ogni autore si legge su **fino a quattro canali** quando li ha: LinkedIn, newsletter propria
(Substack o altra), X/Twitter, Instagram (solo per chi lo usa come canale primario, es. Emily Segal/
Nemesis). Non tutti gli autori hanno tutti e quattro: `watchlist.md` dichiara quali canali ha ciascuno.
La finestra è quella autori della Fase 0 (di norma 7 giorni). Con "radar" o "autori" da soli, fuori dal
lunedì, si esegue solo questa fase più la Lista B, e il report va comunque su Doc (Fase 10).

### Canale: LinkedIn, il browser di Stefano

**Primario: `chrome-devtools-mcp`**, che si attacca al Chrome già aperto e loggato su LinkedIn.
`list_pages` per verificare che risponda, `navigate_page` sul profilo, `take_snapshot` per leggere i post.
Se non sono caricati: ToolSearch
`select:mcp__chrome-devtools-mcp__list_pages,mcp__chrome-devtools-mcp__navigate_page,mcp__chrome-devtools-mcp__take_snapshot`.

**Fallback: `claude-in-chrome`**, quando `chrome-devtools-mcp` manca in sessione (CONNECT_TIMEOUT
all'avvio, anche se `claude mcp list` lo dà Connected) o `list_pages` non risponde entro 120 secondi. Ha
retto 7 autori su 7 in tutti i cicli in cui è servito. `tabs_context_mcp` (con `createIfEmpty: true`),
`navigate`, poi circa 4 secondi di attesa prima di `get_page_text`, oppure tutto in un `browser_batch`.
Se un'azione risponde "Couldn't determine which page this action targets", richiama `tabs_context_mcp` e
usa il tabId che restituisce. Chiudi i tab che apri. ToolSearch:
`select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__get_page_text,mcp__claude-in-chrome__browser_batch,mcp__claude-in-chrome__tabs_close_mcp`.

**Se nessuno dei due va**, o LinkedIn chiede il login: ricerca web per autore ("[autore] LinkedIn post
[tema]") e dichiaralo in cima al report come dato parziale. Mai fermare il run per un profilo.

Scrivi nel report quale canale hai usato per LinkedIn.

### Canale: newsletter propria, X e Instagram

Nessun browser loggato per questi tre: **WebSearch e WebFetch** (ToolSearch se deferred). Per la
newsletter, cerca l'ultimo numero pubblicato nella finestra e leggilo per intero se è il pezzo
centrale, altrimenti il riassunto. Per X, la ricerca web indicizza male i singoli post: prova prima
una ricerca diretta sul profilo, poi citazioni del post in articoli o thread terzi. Per Instagram è
anche peggio: spesso non recuperi nulla oltre la bio pubblica e qualche didascalia indicizzata, e il
sito ufficiale dell'autore (quando esiste) è spesso la fonte migliore per trovare caption o temi
recenti citati altrove. Quando non riesci a recuperare nulla di verificabile, dichiaralo invece di
riempire con un riassunto plausibile ma non letto. Stessa regola di LinkedIn: un canale assente per un
autore in una settimana non ferma il run.

### Cosa leggere

Per ogni autore, su ciascun canale che ha: fino a 3-4 contenuti rilevanti nella finestra (hook o tesi,
corpo se serve, reazioni/commenti se visibili). Il tetto è per canale, non per autore: non triplicare
il tempo di lettura solo perché un autore è su tre piattaforme, scarta subito i contenuti deboli.

- Salta i repost senza commento, i "commenta per ricevere" e i post solo promozionali.
- Se un autore non ha pubblicato su un canale nella finestra, scrivilo e passa oltre. Dunford è rimasta
  senza post in 6 cicli su 8: è normale, non va riempito.
- Se un profilo non carica, annotalo e vai avanti.

**Copertura obbligatoria, da dichiarare sempre nel report (Fase 10, sezione "Cosa hanno scritto gli
autori").** La watchlist può crescere; il tempo per leggerla no. Se non riesci a passare per **ogni**
autore della tabella prima di scrivere il report, non lasciarlo intuire da un'assenza silenziosa:
elenca per nome quali autori hai letto, su quali canali, e quali hai **saltato per tempo/budget**
invece di "non ha pubblicato". Un autore mai controllato e un autore senza post nella finestra sono
due informazioni diverse: la prima dice "la prossima settimana riparti da qui", la seconda dice
"tutto regolare". Confonderle fa credere a Stefano che la watchlist sia stata letta per intero quando
non lo è stata.

Poi i **temi core** della watchlist: una ricerca per tema sugli ultimi 7-10 giorni (newsletter di
settore, report con dati, dibattiti). Scarta quello che potrebbe interessare qualsiasi marketer: non è
un segnale, è rumore.

### Radar X: nuovi creator (ogni settimana)

Oltre agli autori fissi della watchlist, cerca su X nuovi content creator su brand, SaaS, AI, GTM,
positioning che Stefano non segue ancora — liste "who to follow", thread di settore, citazioni in
newsletter terze. Non è la watchlist: non entra in `references/watchlist.md` da sola, è una sezione a
parte del report (Fase 10) con **esattamente questa tabella**:

| Creator | Post (titolo/estratto) | Insight | Perché dovrebbe importare a Stefano | Cosa potrebbe scriverci sopra | Link |
|---|---|---|---|---|---|

"Insight" è cosa dice di specifico il post, non un riassunto vago. "Perché dovrebbe importare"
aggancia un pillar/sotto-argomento di `pov.md` quando possibile (es. A1, B2, D4), o dichiara un altro
motivo (tattica nuova, contro-esempio, trend) se non si aggancia a nessuno. Mai inventare un link.

Se un creator trovato qui torna per 2-3 settimane con segnale buono, **proponilo** per l'ingresso nella
watchlist vera (stesso meccanismo del loop C in Fase 9): non lo aggiungi da solo.

### Il filtro

Ogni segnale che resta (LinkedIn, newsletter, X, temi core) deve dichiarare quale POV di `pov.md` fa
scalare e quale trigger del buyer di `audience.md` aggancia. Se non scala nessun POV, si scarta o
finisce al massimo tra i segnali per la knowledge (Fase 10). Il confronto con gli ultimi due report
(Fase 0) si fa qui: un angolo già proposto torna solo con un fatto nuovo.

La Fase 5 **non modifica** `knowledge/references/`, `hypotheses/` o `foundation/`: propone candidati,
la promozione la decide Stefano.

## Fase 6: I temi della settimana, da quattro fonti

Le liste A e B della Fase 7 si costruiscono dalle fonti 2 (autori) e 4 (mosse delle aziende). La
fonte 3 (archivio) resta lettura di contesto: serve al lessico, a non ripetere angoli già usati e a
vedere i temi saturi. La fonte 1 (la sua settimana) alimenta **sia** il contesto **sia**, da quando
esiste la Lista C (vedi sotto), candidati veri per Build in Public/Personal Brand/Offer.

Guarda in quest'ordine.

1. **La sua settimana.** Cosa ha fatto, deciso, lanciato o imparato negli ultimi 7 giorni: commit nei
   repo, file nuovi in `articoli/`, `post-idee/`, `infografiche/`, note di engagement in
   `client-intelligence/`, e se i connector sono disponibili anche mail e calendario. **È la fonte
   migliore e quella che tutti saltano**, perché è l'unica che nessun concorrente può copiare.

   **Le call con i clienti, via Granola.** Se il connector Granola è disponibile, leggi le note delle
   call degli ultimi 7 giorni. È il materiale più ricco che Stefano produce e l'unico davvero
   irripetibile: quello che un founder gli ha detto martedì vale più di qualsiasi tema di tendenza.
   Cerca tre cose precise, non un riassunto della call:
   - **La domanda che torna.** Se due founder diversi chiedono la stessa cosa, quella è un post.
   - **Le parole loro, non le tue.** Come chiamano il problema prima che tu gli dia il nome tecnico.
     Vanno, già anonimizzate, in `claude-private-refs/client-intelligence/lexicon-da-call.md`
     (privato). Nel lexicon pubblico (`knowledge/client-intelligence/lexicon.md`) ci passano solo
     quando lo decide Stefano: quello che esce da una call è materiale delicato anche senza nomi.
   - **Il problema dichiarato prima della diagnosi.** Il sintomo che portano è l'hook; la causa che
     trovi tu è la tesi. È letteralmente la struttura del suo formato più usato (sintomo verso causa,
     21 post su 80).

   **Anonimizzazione obbligatoria all'ingresso, non dopo.** Mai nomi di persona, mai nomi di azienda,
   mai dati identificabili: tieni solo ruolo, settore e scala ("founder, SaaS B2B, ~400K ARR"). Vale
   anche nel report, che pure sta nel repo privato: se un tema poi diventa un post o finisce in
   `knowledge/`, deve essere già anonimo da prima, perché quei file sono pubblici. Questa non è una
   precauzione, è la regola del CLAUDE.md globale di Stefano.

   **Se Granola non è disponibile o non è autorizzato, scrivilo nel report** e vai avanti con le altre
   fonti. Non saltare la riga in silenzio: una fonte assente dichiarata è informazione, una fonte
   assente taciuta fa credere che quella settimana non ci fossero call.

   **Candidati per Lista C (Build in Public / Personal Brand / Offer).** Oltre a quanto sopra, cerca
   esplicitamente cosa è successo *davvero* questa settimana nel lavoro di Stefano: un commit o una
   decisione nel sistema di content flywheel stesso, l'iterazione di un metodo, una call che ha chiuso
   bene un caso cliente. Stessa anonimizzazione obbligatoria di sopra. Filtro più leggero di quello
   di Lista A/B: non serve agganciare un pillar di `pov.md` per forza — dichiaralo quando c'è, lascialo
   vuoto quando non c'è senza scartare il candidato solo per questo.
2. **Il mercato.** Quello che hai letto alla Fase 5: autori della watchlist e temi core.
3. **L'archivio.** Post sopra la mediana pubblicati più di sei mesi fa, da aggiornare; oppure tre-cinque
   post sullo stesso tema da fondere in un pezzo unico. Materiale già validato dai numeri, che nessuno
   dei lettori attuali ricorda.
4. **Le mosse delle aziende.** Cerca sul web cosa hanno fatto le aziende negli ultimi 7-10 giorni:
   acquisizioni, lanci, cambi di prezzo, riposizionamenti, prodotti chiusi, round. Perimetro: tech in
   generale, senza limiti di dimensione. Anche consumer, purché il caso atterri su un pillar. Può
   essere anche un caso più vecchio, se insegna qualcosa. Tre filtri:
   - **Nome noto.** Il lettore deve conoscere l'azienda prima di leggere. Un nome sconosciuto entra
     solo se agganciato a uno noto.
   - **Spiega un pillar.** La notizia è il pretesto: ogni candidato deve servire a spiegare tesi di
     prodotto, architettura di brand, crescita per accumulo, POV o strategia di posizionamento su un
     caso reale. Se non si aggancia a nessuno, si scarta anche se è la notizia della settimana.
   - **Numeri verificati.** Ogni cifra va controllata sulla fonte, primaria quando esiste (comunicato,
     pagina ufficiale, prospetto). Se una fonte non si apre o due fonti divergono, scrivilo accanto al
     candidato. Mai un numero preso solo dal riassunto di una ricerca senza dichiararlo.

Poi applica il filtro che è il cuore del sistema: **questo serve a scalare un POV di Stefano?** Un tema
che gira ma non aggancia `foundation/pov.md` si scarta, non si include perché è di moda. Per i candidati
di Lista C questo filtro è opzionale (vedi sopra): non scartare un buon Build in Public/Personal Brand
solo perché non aggancia un pillar.

Per ogni tema trattenuto dichiara se serve a **demand gen** (allargare il pubblico), **demand capture**
(convertire chi già cerca) o **nurture** (restare nella testa di chi lo conosce già ma non ha ancora
un'esigenza — il tipico obiettivo di Personal Brand e Build in Public). Stefano vuole tutti e tre, ma
ogni singolo pezzo ne serve uno solo, e sono stili diversi che si misurano con KPI diversi. Dichiara
anche la **categoria mix** (`content-strategy.md` §2bis): è l'asse che alimenta la sezione "mix dei
contenuti" del report (Fase 10) e vale per le voci di tutte e tre le liste, non solo la C.

**Nei dati i due obiettivi vanno in direzioni opposte**: il post con più reach (Como e Disney, 7.902
impressioni, tema consumer) ha uno dei peggiori engagement rate, mentre i cinque post più risonanti
stanno tutti sotto le 300 impressioni e sono tutti B2B core. Non mescolarli in un unico giudizio.

## Fase 7: Le tre liste, poi fermati

**Non scrivere ancora i post.** La routine chiude con tre liste. Stefano le legge e dice cosa
sviluppare.

**L'ordine dentro ogni lista lo decide anche `scelte.csv`.** Prima dei pesi, vale il filtro della Fase 6.
Poi, a parità di forza, metti in alto le fonti e i pillar che Stefano sceglie più spesso, e scrivi in
una riga perché una voce sta dov'è quando l'ordine viene dalle scelte passate. Non escludere un pillar
perché è stato scartato: servono anche i pillar che non ha ancora coperto, e la ragione del rifiuto
spesso era la notizia, non il tema.

**Lista A: 5 notizie tech** (fonte 4). Per ciascuna, poche righe:

- **Il fatto**: cosa ha fatto l'azienda, con data e numeri, e il link alla fonte
- **Il pillar** che serve a spiegare
- **L'ipotesi sul mercato**: dove sta andando quel settore, in una riga, dichiarata come ipotesi
- **La prima riga** possibile e **la domanda** da fare al lettore
- Cosa non è verificato, se c'è

**Lista B: fino a 5 angoli dagli autori** (fonte 2, dalla Fase 5 di questo run). Per ciascuno:

- **Chi e quando**: autore, data, link al post
- **Cosa ha scritto**, in una riga
- **L'angolo di Stefano**: dove va un passo oltre l'autore, e quale pillar aggancia
- **La prima riga** possibile

**Lista C: fino a 3 candidati Build in Public / Personal Brand / Offer** (fonte 1, dalla Fase 6 di
questo run). Per ciascuno:

- **Cosa è successo**, in una riga, già anonimizzato dove serve
- **Categoria mix**: Build in Public, Personal Brand o Offer
- **Il pillar**, se c'è (opzionale per questa lista, vedi Fase 6)
- **La prima riga** possibile

**Fino a 5 (A e B) o 3 (C), non per forza al massimo.** In una settimana magra gli angoli buoni possono
essere meno: scrivi quanti sono e perché, non riempire con materiale debole. Una voce mediocre in lista
costa a Stefano più tempo di quanto ne faccia risparmiare. In una settimana senza materiale per la
Lista C, scrivilo e lasciala vuota: non è un errore, è normale per fonti che dipendono dalla sua
settimana reale.

Poi **di' quali due svilupperesti tu e perché**, tra tutte e tre le liste. Tredici voci senza gerarchia
spostano su Stefano il lavoro di scelta, che è il lavoro che la routine dovrebbe togliergli.

**Registra ogni voce in `scelte.csv`** prima di fermarti: `data_report`, `voce` (A1, B3, C2...), `lista`
(`A`, `B` o `C`), `fonte` (l'azienda per la Lista A, l'autore per la B, "la sua settimana" per la C),
`pillar` (il codice di `pov.md`, es. A1, C1 — vuoto per Lista C quando non c'è), `obiettivo` (`gen`,
`capture` o `nurture`), `categoria_mix` (una delle 5 di `content-strategy.md` §2bis, per ogni voce di
tutte e tre le liste), `scelta` vuota, `activity_id` vuoto. Quando Stefano dice cosa tiene, nella stessa
sessione, metti `si` su quelle e `no` sulle altre.

**Anti-ripetizione:** scarta angoli già in `post-idee/` o già pubblicati in `published.md`, a meno che
non ci sia un motivo esplicito per rifarli (dato nuovo, evidenza contraria). Scarta anche gli angoli
su un tema che Stefano ha già battuto più volte nelle ultime settimane, e scrivi quale hai scartato.

**Qui la routine si ferma e aspetta.** Scrivere pezzi che poi non pubblica significa buttare via il
lavoro, e soprattutto togliergli il gate editoriale che nel suo sistema sta sempre al livello
strategico, mai al copy-editing.

## Fase 8: Scrivere i pezzi scelti

Solo dopo che Stefano ha detto quali tiene.

**Prima di scrivere su un tema, rileggi tutti i suoi post già pubblicati su quel tema** (filtra
`temi.csv`, poi leggi i testi in `posts-full.md`). Serve a due cose: non contraddire quello che ha già
sostenuto, e sapere quali pezzi vecchi linkare o citare. Un consulente che si contraddice tra due post
sullo stesso tema perde più credibilità di quanta ne guadagni con un post in più.

**Scrivi invocando la skill `linkedin-viral-post-writer`**, che è l'autorità sulla voce di Stefano.
Il cockpit non la duplica e non la sostituisce: le passa il contesto (tema, formato, pezzi vecchi da
linkare, obiettivo gen/capture/nurture, categoria mix) e lascia che sia lei a dettare voce, struttura
e hook. Vedi
"Dipendenze" in fondo per l'ordine di precedenza.

**Se il pezzo viene dalla Lista A (notizia tech), la struttura è fissa, in quattro passi:**

1. **Cosa hanno fatto.** Fatto, numero e nome noto nella prima riga. Poi il contesto, un dato per riga.
2. **Dove va il mercato.** Un'ipotesi sul settore, dichiarata come ipotesi sua, appoggiata ad almeno
   un segnale oltre alla singola notizia.
3. **Come la vede lui.** Una lettura sola, ed è il pillar. Non un riassunto dei numeri: chi si ferma
   ai numeri sembra informato, non esperto. Il verdetto netto è ammesso quando i fatti lo reggono.
4. **La domanda al lettore.** Specifica, con due risposte difendibili, a cui si risponde in una riga
   senza ammettere niente di sé. Mai un generico "che ne pensi".

Più asciutto dei suoi post di metodo: frasi corte, poche idee. Modelli nel suo archivio: MEDVi
(11/04/2026), Bending Spoons (10/06/2026), Mistral contro OpenAI (19/06/2026), e la bozza del
12/10/2026 in `bozze.md`. In fondo alla bozza metti l'elenco delle fonti di ogni numero e le cose
da verificare prima di pubblicare.

**Se il pezzo viene dalla Lista B (angolo di un autore)**, cita l'autore e vai un passo oltre: la sua
frase è il punto di partenza, la tesi deve essere di Stefano.

**Se il pezzo viene dalla Lista C (Build in Public / Personal Brand / Offer)**, niente struttura fissa
a passi: è il tipo di pezzo più vicino a BACKSTORY nel §2 di `content-strategy.md`, prima persona,
concreto, un fatto reale di quella settimana. Per Offer, resta nel registro soft deciso in §2bis:
disponibilità o risultato cliente, mai una call-to-action diretta a comprare.

Per ogni pezzo scritto registra una **previsione** (impressioni ed engagement rate attesi, e su quale
dato dell'archivio si basa): serve al loop B della Fase 9.

Per ogni pezzo consegna anche:

- **Il brief dell'immagine**: cosa mostra, il testo esatto da metterci sopra (massimo 25 parole),
  formato 4:5. Il 70% dei suoi post porta un'immagine e finora non è mai stata specificata, quindi è
  il pezzo di lavoro che gli resta addosso ogni volta.
- **Il link con UTM già montato** secondo `utm-convention.md`, se il pezzo porta da qualche parte.

Salva ogni bozza in `claude-private-refs/linkedin/bozze.md` con la data e il nome del pezzo. Serve alla
Fase 9: senza la bozza salvata, il confronto con la versione pubblicata è impossibile.

## Fase 9: Auto-miglioramento (tre loop)

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

Le previsioni partono da `cosa-funziona.md`: la mediana del gruppo a cui il pezzo appartiene (formato,
formato retorico, tema), non la mediana generale. Se la sezione "Cosa è cambiato" di quel file mostra un
verdetto che si è spostato, dillo nel report: è la routine che cambia idea su un pattern, ed è
esattamente l'informazione che Stefano deve vedere.

Infine registra le previsioni di questa settimana, così fra due settimane saranno verificabili.

### Loop C — Le tue scelte sulle liste (segnale ogni settimana)

Ogni lunedì Stefano tiene due voci su tredici e scarta le altre. Dice quali fonti, pillar, obiettivi e
categorie mix gli servono davvero, ed è un segnale pulito, che non dipende dai volumi di LinkedIn. Sta
in `scelte.csv`, e `cosa-funziona.md` lo riassume per lista, fonte, pillar e categoria mix.

- **Nel report**: una riga su cosa dicono le scelte finora, con il numero di settimane su cui si regge.
  Prima di quattro settimane di dati, scrivi solo i conteggi, senza trarne una tendenza.
- **Watchlist**: un autore con almeno sei voci proposte e nessuna scelta in otto settimane, oppure senza
  segnale utile per otto settimane, va **proposto** per l'uscita, con i numeri. Proponi anche chi
  entrerebbe, se negli stessi report un nome fuori lista è tornato più volte. Non modificare la watchlist
  da solo: chi legge Stefano lo decide lui.
- **Quando i numeri e le scelte divergono**, dillo. Se Stefano sceglie sempre un pillar che poi fa
  sotto la mediana, o scarta sempre quello che va meglio, non è una cosa da correggere in silenzio: è
  una decisione sua, tra quello che vuole dire e quello che funziona.
- **Categoria mix**: se Stefano scarta sistematicamente le voci di una categoria (es. non sceglie mai
  Offer, o sempre Educational), dillo accanto alla sezione "mix dei contenuti" di Fase 10: è lo stesso
  tipo di segnale degli altri due punti, letto sull'asse mix invece che su fonte/pillar.

## Fase 10: Output, su Google Doc

Il report si legge **su Google Doc**. Il file .md nel repo privato resta come archivio, perché il loop B
rilegge le previsioni dei report vecchi e i Doc non stanno nel repo.

1. Scrivi il report in `claude-private-refs/linkedin/cockpit/AAAA-MM-GG-report.md` (privato: contiene
   performance e dati di conversione).
2. Caricalo su Drive come Google Doc: `mcp__claude_ai_Google_Drive__create_file` con `textContent` = il
   markdown del report, `contentMimeType` = `text/markdown` e `title` = `Content Cockpit AAAA-MM-GG`.
   Drive converte il markdown: titoli, grassetti, link, elenchi e tabelle arrivano formattati (verificato
   il 29/10/2026). Cartella: `Content Cockpit` nella root di Drive. Cercala con `search_files`
   (`title = 'Content Cockpit' and mimeType = 'application/vnd.google-apps.folder'`) e passa il suo id
   come `parentId`; se non c'è, creala.
3. Rileggi il Doc con `read_file_content` e controlla che ci sia il testo intero: se arriva vuoto o
   troncato, rifai il caricamento, e se fallisce ancora dillo nella risposta finale invece di dare il link.
4. Scrivi il link del Doc nella seconda riga del file .md, così report e Doc restano collegati.

Struttura, in quest'ordine, perché l'ordine è il messaggio:

1. **Una riga di verdetto**: la cosa che Stefano deve sapere se legge solo la prima riga
2. **Stato dei dati**: cosa è fresco, cosa è degradato, cosa manca, e quale canale ha letto gli autori
3. **KPI della finestra matura** + il migliore + trend, da `cosa-funziona.md`
4. **Il mix dei contenuti: reale vs target**. Dalla dimensione "Categoria mix" di `cosa-funziona.md`
   (finestra rolling 8-12 settimane, mai la singola settimana), confrontata con i target di
   `content-strategy.md` §2bis. Segnala la categoria più sotto quota e, se ci sono meno di 4 settimane
   di dati con `categoria_mix` popolata, scrivi solo i conteggi grezzi senza trarne una tendenza.
5. **Cosa fare per migliorare i KPI**, agganciato ai numeri
6. **Sito e conversioni** (con l'avvertenza sui volumi finché resta vera)
7. **Cosa ho imparato**: dalle tue correzioni (loop A), dalle previsioni (loop B), dalle tue scelte
   (loop C, incluso l'asse mix), e quali verdetti di `cosa-funziona.md` sono cambiati
8. **Il contesto della settimana**, in breve: cosa è uscito dalle call e quali temi sono saturi
9. **Cosa hanno scritto gli autori**: per autore, i canali letti (LinkedIn/newsletter/X), i temi della
   finestra e il contenuto più notevole con il perché, oppure "niente nella finestra" per canale. Poi i
   segnali dai temi core, con la fonte.
10. **Radar X: nuovi creator**, la tabella di Fase 5 (Creator, Post, Insight, Perché, Cosa scriverci,
    Link), oppure "nessun candidato solido questa settimana" se non c'è niente sopra la soglia.
11. **Le tre liste** (5 notizie tech, fino a 5 angoli dagli autori, fino a 3 candidati Build in
    Public/Personal Brand/Offer), con i due che svilupperesti, poi stop
12. **L'esperimento della settimana**: una sola ipotesi falsificabile da testare, con come si misura
13. **Segnali per la knowledge**: solo candidati, nessun file modificato. Formato "CANDIDATO: [cosa] →
    [dove andrebbe] → [perché]". Decide Stefano.

Poi committa e pusha `claude-private-refs` (dataset, report, bozze, `scelte.csv`, `cosa-funziona.*`): è
privato, ed è la copia che permette di ripartire da un altro computer. In `System-content-flywheel`
committa e pusha gli aggiornamenti di knowledge solo dopo aver controllato che nel diff e nel messaggio
di commit non ci siano nomi di clienti, di persone o loro identificativi.

Chiudi la risposta in chat con il link al Doc e il verdetto in una riga.

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

Il cockpit **orchestra** la scrittura, non la riscrive. La skill che invoca resta autonoma e usabile da
sola, fuori da questa routine.

| Skill o file | Ruolo | Quando lo usa il cockpit |
|---|---|---|
| `linkedin-viral-post-writer` | **Autorità sulla voce e sulla struttura dei post.** Scritta da Stefano, vive di vita propria, si usa anche da sola per un post singolo in qualsiasi momento | Fase 8, per scrivere i pezzi scelti |
| `references/watchlist.md` | Autori e temi da leggere | Fase 5 |
| `claude-private-refs/linkedin/cosa_funziona.py` | Ricalcolo settimanale di cosa funziona su tutto lo storico | Fase 1, poi letto in Fasi 2, 7 e 9 |
| `knowledge/foundation/content-strategy.md` §2bis | Vocabolario vincolato delle 5 categorie mix e i loro target % | Fase 1 (tagging), Fase 6 (dichiarazione per voce), Fase 10 (sezione mix) |

**Il cockpit non duplica mai la skill di scrittura.** Se una regola di scrittura serve in entrambi i
posti, va messa nella skill di scrittura e richiamata da qui, non copiata.

### Ordine di precedenza quando le fonti sono in conflitto

1. **`linkedin-viral-post-writer`** — è la voce dichiarata di Stefano, le sue scelte deliberate. Vince.
2. **`voce-analisi.md`** — è evidenza su cosa fa di fatto nei testi pubblicati. Informa, non comanda.
3. **Regole generiche di copywriting** — perdono sempre contro le prime due.

**Se 1 e 2 divergono, non risolvere da solo: segnalalo nel report.** Esempio: se la skill dice di
chiudere con una domanda aperta e i dati mostrano che l'ha fatto in 9 post su 80, quella non è una
regola da applicare in silenzio né da ignorare in silenzio. È una divergenza tra come Stefano pensa di
scrivere e come scrive davvero, e deciderla è un lavoro suo, non della routine. Mettila nella sezione
"Cosa ho imparato" e lascia che scelga.
