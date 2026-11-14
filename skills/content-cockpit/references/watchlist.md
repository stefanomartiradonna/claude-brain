# Watchlist del cockpit: autori e temi

Configurazione della parte autori del cockpit (Fase 5 di `../SKILL.md`). Per cambiare chi si legge o
quali temi si cercano si modifica questo file, non la skill.

Ultima revisione: 2026-11-14. Aggiunto il canale YouTube Category Pirates su richiesta di Stefano (fonte
per novità tech e angoli sulle notizie). Prima, 2026-11-13: unite due revisioni fatte in parallelo. Del 11/11: Rand Fishkin e Sjeel
Koster aggiunti, Michelle Wiles solo con la newsletter Brand Futures, URL di tutti i canali forniti da
Stefano. Del 13/11: colonna YouTube e sezione parole chiave YouTube; Jared Waxman rimosso su richiesta di
Stefano; aggiunti Brooke Yoakam, Will Poskett, Ana Andjelic, Jasmine Bina su richiesta diretta di Stefano;
April Dunford e Pierre Herubel esclusi da YouTube (la prima non pubblica più lì, il secondo è fermo e
tratta LinkedIn); canale di Maja Voje corretto in @gtmstrategist; agganciate al feed le newsletter di
Maja Voje, April Dunford, Alex Estner e Fletch PMM; Matt Bertulli senza YouTube. Prima, 2026-11-09:
Douwe Wester rimosso su richiesta di Stefano, nessun post nella finestra in 6 cicli su 8. Prima ancora,
2026-11-08: 8 nuovi autori multi-canale aggiunti su richiesta diretta di Stefano, poi Emily Segal/Nemesis
con Instagram come quarto canale.

---

## Autori: fino a cinque canali quando esistono

LinkedIn, newsletter/Substack propria, X, YouTube, Instagram (quest'ultimo solo per chi lo usa come
canale primario). Non tutti hanno tutti i canali. Instagram è il canale più difficile da leggere senza
login (più ancora di X): aspettati dato parziale di default, non solo in caso di guasto.

Livelli di verifica usati nelle celle:

- **verificato**: pagina aperta e letta il 2026-11-13.
- **indicato da Stefano**: handle fornito da lui; l'esistenza del canale è stata verificata aprendo la pagina. Cosa pubblica e con che frequenza non è stato verificato.
- **non verificato**: URL trovato tramite una fonte terza, non caricato o letto direttamente. Va ri-controllato quando il cockpit ha accesso a un browser.
- **non trovato**: ricerca senza esito. È un risultato inconclusivo, non prova che il canale non esista.
- **non cercato**: la ricerca non è stata fatta.
- Cella con "—": nessun dato, nessuna decisione presa.

**Convenzioni lette dallo script `scan_esterno.py`** (se le rompi, lo script si ferma e lo dice, non salta righe in silenzio):

- Una cella di canale viene letta solo se **inizia con un URL** (o, per X, con un @handle). Qualunque altra cosa ("—", "non trovato", "escluso", "nessun canale") vuol dire che quel canale non si legge. Per escludere un canale basta far iniziare la cella con "escluso".
- La cella YouTube deve contenere `ID UC...` (l'ID del canale, 24 caratteri): da lì lo script costruisce il feed.
- Il marcatore `[tenuto]` in una cella dice che hai deciso di tenere un canale fermo: lo script lo segnala ma smette di proporne l'uscita.
- Una tabella con prima colonna "Autore" e una con prima colonna "Tema". Niente caratteri `|` dentro le celle.

| Autore | LinkedIn | Newsletter/Substack | X | YouTube | Instagram | Focus | Perché è in lista |
|---|---|---|---|---|---|---|---|
| Maja Voje | https://www.linkedin.com/in/majavoje/ | https://gtmstrategist.substack.com ("GTM Strategist"; il feed risponde, verificato il 2026-11-13; la newsletter è citata nella descrizione del suo canale YouTube) | — | https://www.youtube.com/@gtmstrategist (canale "Maja Voje", ID UCIdvWmX_Lcmhuj22e2jy5Lg; indicato da Stefano, esistenza verificata). Il canale `@MajaVoje` (ID UCan262LlbeETYgrWi5VLUzg) esiste ma il suo feed non contiene video: non va monitorato | — | GTM strategy, early stage | Segmento vicino; pattern hook + framework |
| April Dunford | https://www.linkedin.com/in/aprildunford/ | https://aprildunford.substack.com (il feed risponde, verificato il 2026-11-13) | https://twitter.com/aprildunford (non verificato, stessa fonte) | escluso su richiesta di Stefano (non pubblica più lì). Il canale del podcast esiste: https://www.youtube.com/@positioningshow (verificato, non monitorato) | — | Positioning B2B, architetture multi-product | Fonte primaria del metodo (Obviously Awesome); il pillar architetture deriva da lei |
| Alex Estner | https://www.linkedin.com/in/alexander-estner/ | https://www.mrrunlocked.com (pubblicazione "MRR Unlocked"; il feed risponde, verificato il 2026-11-13; profilo Substack: https://substack.com/@mrrunlocked) | — | non trovato | — | GTM execution, anchor framework | Fonte del framework anchor; reframe diagnostico |
| Rob Kaminski | https://www.linkedin.com/in/heyrobk/ | — (la newsletter di Fletch PMM si legge una volta sola, nella riga di Anthony Pierri) | — | non trovato | — | Positioning & messaging B2B (Fletch) | Fonte del framework H1/homepage; contenuti visual |
| Anthony Pierri | https://www.linkedin.com/in/anthonypierri/ | https://fletchpmm.substack.com ("The Fletch Newsletter", di Fletch PMM; il feed risponde, verificato il 2026-11-13; profilo Substack personale: https://substack.com/@fletchpmm, non verificato) | — | non trovato | — | Homepage messaging B2B (Fletch) | Fonte H1; registro sarcastico su AI hype |
| Pierre Herubel | https://www.linkedin.com/in/pierre-herubel-540b3949/ | https://pierreherubel.substack.com (verificato; la pagina indica oltre 35.000 iscritti) | — | escluso su richiesta di Stefano (2026-11-13): ultimo video 3 settembre 2026, titoli recenti su crescita LinkedIn. Il canale esiste: https://www.youtube.com/@pierreherubel9492 (ID UCSM7lBFL2PVPHaKbO40NKmQ), non monitorato | — | Content strategy B2B | Pattern di struttura post + caroselli; engagement alto |
| Michelle Wiles (Brand Futures) | linkedin.com/in/michellewiles/ (non verificato: indicato da Stefano il 2026-11-13 come canale, ma l'URL non è stato confermato; al primo uso controlla che sia lei, cofondatrice di Ocean Bottle e fondatrice di Embedded) | https://embeddedbrandstrategy.substack.com (profilo: https://substack.com/@michellewiles; la pubblicazione si chiama Brand Futures, il feed risponde; ultimo post 2026-09-04) | — | non trovato | — | Brand strategy consumer/retail (ex McKinsey, Ogilvy, P&G) | Fuori standard B2B SaaS ma framework di architettura di brand molto trasferibile (caso Hoka/On su estensione di categoria = pillar C); utile anche per How Small Brands Grow. Brand Futures e Embedded Brand Strategy sono la stessa pubblicazione (rinominata): l'ipotesi dell'11/11 che fossero due fonti diverse era sbagliata |
| Jamie Smith (Customer Futures) | linkedin.com/in/jamiedsmith/ (non verificato) | https://www.customerfutures.com | @jamiedsmith (non verificato) | non trovato | — | Customer experience nell'era degli agenti AI | Conferma diretta di B2 (il POV resta l'unica cosa scarsa quando l'esecuzione si azzera) applicata agli agenti AI, dominio ancora scoperto nel B2B SaaS italiano |
| Connor MacDonald | https://www.linkedin.com/in/theconnormacdonald/ | — (nessuna propria; co-host del network 9operators.com) | https://x.com/couuor | non trovato. Attenzione: `@Operators9` NON è suo, è il canale dell'Operators Podcast | — | CMO Ridge (DTC wallet), paid media/creative ops | Contro-esempio su sequenza deliberata vs accumulo di canali (pillar A); soprattutto execution DTC, meno positioning |
| Matt Bertulli | https://www.linkedin.com/in/mbertulli | https://nocompetition.media/ (nessun archivio pubblico) | https://x.com/mbertulli | nessun canale personale (decisione di Stefano). Il podcast Operators (`@Operators9`) non è monitorato | https://www.instagram.com/mattbertulli/ (reel che promuovono gli episodi del podcast Operators) | CEO Pela/Lomi, category creation DTC | Il caso Pela vs Lomi è il miglior parallelo B2C su categoria matura vs immatura (pillar C) e vantaggio da decisione di prodotto, non narrazione (pillar D) |
| Kira Klaas | https://www.linkedin.com/in/kirstenklaas/ | https://kiraklaas.substack.com (profilo: https://substack.com/@kiraklaas; il feed risponde, verificato il 2026-11-13) | — (nessuna presenza rilevata) | non trovato | — | Brand strategy (ex Notion, Brex, Gusto) | Attacca "demand gen = performance" mancando la causa a monte: stesso bersaglio della critica A1 al GTM engineering |
| Emma Stratton (Punchy) | linkedin.com/in/emma-stratton-punchy/ (non verificato) | escluso su indicazione di Stefano (2026-11-13): il feed di punchy.co/blog è fermo a marzo 2023 e il canale vero è YouTube. Blog: https://punchy.co/blog, non monitorato | https://twitter.com/EmmaStratton_1 (non verificato) | https://www.youtube.com/@PunchyMessaging (canale "Punchy, Messaging for B2B Tech", ID UCqnBHzXrKlXrgI7tuD6l24w; indicato da Stefano, che lo dà attivo con circa 2 uscite al mese; feed verificato il 2026-11-13: video brevi quasi ogni giorno dal 12 al 23 ottobre, l'ultimo il 2026-10-23) | — | Messaging/positioning B2B tech | "Tech Talk" come sintomo di tesi di prodotto mai presa; aggancia pillar C e la regola anti "AI-powered" |
| Karo (Karolina Zieminski) | https://www.linkedin.com/in/zieminski/ | https://karozieminski.substack.com (profilo: https://substack.com/@karozieminski; il feed risponde, verificato il 2026-11-13) | — (non trovato) | non trovato | — | AI product/builder, alfabetizzazione AI | Tema distribuzione/AI search trasferibile al proprio funnel hub&spoke; pubblico individual builder, non team B2B |
| Emily Segal (Nemesis) | https://www.linkedin.com/in/emily-segal-0b272925/ | https://nemesisglobal.substack.com/ | https://x.com/khole_emily | non trovato | https://www.instagram.com/nemesis.global/ (collettivo) e https://www.instagram.com/nemesis_emily/ (personale, trovato il 11/11) | Trend forecasting e brand strategy (co-fondatrice K-HOLE, coniò "normcore"; oggi Nemesis, consulenza/think tank Berlino-Helsinki-NY) | Instagram è il suo canale primario per esplicita indicazione di Stefano; Nemesis legge cultura e segnali di mercato prima che diventino mainstream, materiale di cross-pollination per Brand Culture B2C/How Small Brands Grow più che per il B2B SaaS diretto |
| Sjeel Koster | https://www.linkedin.com/in/sjeel-koster | https://fractionalsjeel.substack.com (Fractional Sjeel; profilo: https://substack.com/@fractionalsjeel; il feed risponde, verificato il 2026-11-13) | — | — (non cercato) | — | Fractional CMO B2B (Series A-C), ex Lightspeed, EVBox; scrive di fractional, rapporto marketing-sales, agenzie | Aggiunta da Stefano il 2026-11-11. Peer diretto: stesso mestiere (fractional), stesso pubblico di founder B2B; materiale per Personal Brand e Offer (come ci si posiziona, si prezza e si riempie la pipeline da fractional) |
| Rand Fishkin | https://www.linkedin.com/in/randfishkin/ (non verificato) | https://sparktoro.com/blog/author/rand/ (blog SparkToro, newsletter del blog; non verificato) | https://x.com/randfish (letto il 2026-11-11) | — (non cercato) | — | Audience research, ricerca sul comportamento del traffico e della distribuzione (co-fondatore SparkToro, ex Moz) | Aggiunto da Stefano il 2026-11-11. Dati originali su distribuzione e calo del traffico web (pillar D1) e su AI search; fonte per i numeri da usare nei pezzi sulla distribuzione dentro il prodotto |
| Brooke Yoakam (The Brand Blueprint) | — (non cercato) | https://thebrandblueprint.substack.com (verificato; la pagina indica oltre 4.000 iscritti) | non trovato | non trovato | — | Brand & Marketing Strategy Breakdowns (dalla descrizione della newsletter) | Aggiunta su richiesta diretta di Stefano il 2026-11-13. Motivazione editoriale da compilare. Il suo canale forte sembra TikTok (`@thebrandblueprint`, circa 60K secondo CreatorDB, non verificato): non monitorato, canale escluso dallo scope |
| Will Poskett (Behind The Brand) | — (non cercato) | https://willposkett.substack.com (non verificato; post a pagamento con anteprima; esistono altre pubblicazioni omonime "Behind The Brand", controllare l'URL) | — (non cercato) | — (non cercato) | — | Brand (dal titolo della newsletter; focus da verificare) | Aggiunto su richiesta diretta di Stefano il 2026-11-13. Motivazione editoriale da compilare |
| Ana Andjelic | — (non cercato) | https://andjelicaaa.substack.com ("The Sociology of Business", in gran parte a pagamento con anteprima; visto nei risultati di ricerca, non caricato direttamente) | profilo citato in un suo post del 2024 (insieme a Instagram e Threads), handle non recuperato | https://www.youtube.com/@andjelic (canale "Ana Andjelic", ID UCz-F96DS7h6EDjG8yvdYnZQ; indicato da Stefano, esistenza verificata). Ultimo video 20 agosto 2026, fermo da 12 settimane al 2026-11-13. [tenuto] Tenuta su YouTube su richiesta di Stefano: dovrebbe ripartire con una nuova serie di Hitmakers (da confermare) | — | Sociologia del business, brand e cultura | Aggiunta su richiesta diretta di Stefano il 2026-11-13. Podcast Hitmakers (con Lee Maschmeyer) non monitorato; le descrizioni degli episodi rimandano a YouTube ma l'URL non è stato recuperato |
| Jasmine Bina | — (non cercato) | https://conceptbureau.substack.com ("Concept Bureau", verificato; la pagina indica oltre 29.000 iscritti). Handle Substack `@jasminebina`, non verificato | non trovato | https://www.youtube.com/@jasmine_bina (canale "Jasmine Bina", ID UCSYRrZ5wbufE8vOmsHuBVUA; indicato da Stefano, esistenza verificata) | — | Cultural futurist; CEO di Concept Bureau e cofondatrice di Exposure Therapy (dalla bio del canale) | Aggiunta su richiesta diretta di Stefano il 2026-11-13. Motivazione editoriale da compilare |
| Category Pirates | — (non cercato) | https://www.categorypirates.news (feed verificato il 2026-11-14, 20 post con testo; indicato da Stefano. Le notizie del giovedì sono libere, i mini-book e i numeri del venerdì in gran parte a pagamento: se un pezzo arriva bloccato, dillo a Stefano con titolo e link, lui incolla il testo) | — (non cercato) | https://www.youtube.com/@categorypirates (canale "Category Pirates", ID UCHsrZstn16Zfm2-N_FTgbXg; indicato da Stefano, feed verificato il 2026-11-14: 15 video, l'ultimo il 2026-11-13) | — | Notizie di business e tech lette come questione di categoria; uscita settimanale il giovedì alle 7 PT (dalla descrizione del canale) | Aggiunto da Stefano il 2026-11-14: canale molto importante per le novità del mondo tech e per angoli diversi su come guardare le notizie. Serve alla Lista A (notizie tech) oltre che alla B. Conduttori (dalla descrizione del feed della newsletter): Christopher Lochhead, Eddie Yoon, Bri Clark |

**Post recenti LinkedIn:** `[URL profilo]recent-activity/all/`

**Feed YouTube:** `https://www.youtube.com/feeds/videos.xml?channel_id=[ID canale]`, con gli ID nella colonna YouTube.

Chi entra o esce lo decide Stefano. Il cockpit propone un'uscita quando un autore resta senza
segnale utile o senza voci scelte per otto settimane (Fase 9, loop C). Stesso criterio per i canali
Substack/X/YouTube: se per 8 settimane un canale non produce segnale, il cockpit può proporre di
smettere di leggerlo (senza toglierlo dalla watchlist, solo quel canale). Per YouTube il segnale
minimo è la presenza di almeno un video nel feed nelle ultime 8 settimane: l'esistenza del canale non
basta (April Dunford è il caso che l'ha reso necessario).

## Note per il collector (proposte, da confermare)

- **Voci non indipendenti.** Rob Kaminski e Anthony Pierri sono co-fondatori di Fletch PMM: ai fini della convergenza contano come una voce. Alex Estner raccomanda Maja Voje nella sua lista di Substack consigliate (visto in un risultato di ricerca, non verificato).
- **Due gruppi.** Yoakam, Poskett, Andjelic e Bina formano un gruppo brand/cultura B2C, distinto dagli autori GTM B2B. Da decidere se la convergenza si conta dentro il gruppo o tra gruppi (il segnale tra gruppi è più raro e più informativo).
- **Copertura YouTube.** I canali YouTube monitorati sono cinque (Voje, Stratton, Andjelic, Bina, Category Pirates), e al 2026-11-13 Andjelic è ferma da 12 settimane: non bastano a calcolare un trend "views/giorno rispetto alla mediana del canale". La scoperta per keyword e i canali che Stefano guarda restano necessari.
- **Post bloccati.** `scan_esterno.py` segna `[BLOCCATO: ...]` nei contenuti e `BLOCCATI (n, ...)` nella nota della riga quando un post Substack arriva nel feed troncato (il testo finisce con "Read more"). Euristica verificata a mano solo su Category Pirates, Sjeel Koster e Pierre Herubel: su altre newsletter può sbagliare in entrambi i sensi. Il cockpit non deve leggere quei pezzi come se fossero completi: lo dice a Stefano con titolo e link e aspetta che li incolli.
- **Category Pirates.** Nel feed convivono episodi interi (circa 400-480 visualizzazioni al 2026-11-14) e Short (6-64) che escono a raffica lo stesso giorno: la mediana del canale è trascinata verso gli Short, quindi quasi ogni episodio intero risulterà "sopra mediana". Leggere il rapporto con la mediana tenendo conto del formato, e guardare prima gli episodi interi. Il canale serve anche per la Lista A: i titoli della settimana sono un controllo incrociato sulle notizie tech candidate, non una fonte da citare come fatto (i fatti si verificano sulla fonte primaria).
- **Paywall.** Andjelic e Poskett pubblicano in gran parte a pagamento: via RSS arrivano titolo e anteprima, non il contenuto. Peso del segnale ridotto di conseguenza.
- **Baseline dei canali.** Usare la mediana delle visualizzazioni del canale, non la media: il canale di Maja Voje ha un video da oltre 266.000 visualizzazioni contro valori tipici tra 39 e 1.136, e con la media renderebbe invisibili tutti gli altri per mesi.
- **Feed RSS.** Per i canali della watchlist il feed (`videos.xml?channel_id=`) dà gratis ultimi 15 video, date e visualizzazioni, senza chiave e senza quota. L'API serve solo per la ricerca per parole chiave.

## Parole chiave YouTube (scoperta per keyword)

Oltre ai canali degli autori, il collector YouTube cerca per parole chiave, per trovare voci e video
fuori dalla watchlist. Indicate da Stefano il 2026-11-13, in revisione:

- positioning b2b tech
- brand architecture
- gtm
- startup tech b2b

Stato: non ancora testate. Prima di fissarle serve un test di rumore: aprire i primi 20 risultati di
ogni parola e contare quanti sono davvero pertinenti. Chi le esegue in automatico deve usare l'API
ufficiale di YouTube, perché la pagina dei risultati non è leggibile da strumenti automatici
(robots.txt).

## Temi core (ricerca web)

| Tema | Query base (adattare all'attualità) |
|------|--------------------------------------|
| Posizionamento B2B | "B2B positioning" debate OR framework OR repositioning [periodo corrente] · "positioning mistakes" B2B SaaS |
| Startup early stage | early stage startup GTM OR traction OR first customers [mese corrente] · pre-PMF founder mistakes |
| Startup growth | startup growth stage scaling GTM OR product marketing [mese corrente] · post-PMF growth plateau |
| Product marketing | product marketing trends OR PMM role OR product marketing AI [mese corrente] |
| Go-to-market | go-to-market strategy B2B SaaS [mese corrente] · GTM motion PLG SLG founder-led |

**Lente sempre attiva:** privilegiare segnali collegabili al concept "Accumulo" (feature bloat, prodotti
confusi, tesi di prodotto, architettura di brand, homepage che non converte, founder bottleneck).
