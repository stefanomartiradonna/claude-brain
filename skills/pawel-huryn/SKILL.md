---
name: pawel-huryn
description: Ponte verso il plugin PM Skills di Pawel Huryn (Product Compass), 69 skill e 42 workflow su discovery, strategia di prodotto, execution, go-to-market, market research, marketing e growth, data analytics, AI shipping e toolkit. Le skill non sono installate in locale, vivono nel fork GitHub stefanomartiradonna/pm-skills e si leggono da lì al momento dell'uso. Sceglie da sola la skill o il workflow giusto per la richiesta, oppure lancia il workflow completo. Usa quando l'utente nomina Pawel Huryn, Huryn, Product Compass, pm-skills, "il plugin di Huryn", "la skill di Huryn", "usa Huryn", oppure uno dei suoi workflow (/discover, /strategy, /pre-mortem, /plan-launch, /market-scan, /north-star, /red-team-prd, /business-model, /pricing, /research-users, /triage-requests, /write-prd, /write-stories). NON usare per positioning, PRD, OKR, ICP o strategia quando l'utente non nomina Huryn, lì valgono le skill proprie (b2b-positioning-diagnostic, prd-writer, okr-hybrid, gtm-icp-definition, strategic-advisor).
---

# Pawel Huryn, PM Skills (letto da GitHub)

- Repo: https://github.com/stefanomartiradonna/pm-skills (fork di phuryn/pm-skills, licenza MIT)
- Base per scaricare i file: `https://raw.githubusercontent.com/stefanomartiradonna/pm-skills/main/`
- Catalogo di skill e workflow, con percorsi: [catalogo.md](catalogo.md)

## Procedura

1. **Scegli cosa serve** leggendo [catalogo.md](catalogo.md).
   - Richiesta su un singolo artefatto ("un lean canvas", "le ipotesi rischiose", "la north star") → una skill.
   - Richiesta su un processo intero ("fammi la discovery", "piano di lancio", "scan del mercato"), oppure l'utente dice "tutto il plugin" o nomina un comando → il workflow, che concatena più skill.
   - Due opzioni ugualmente plausibili: scegli, e dichiara in una riga cosa hai scelto e qual era l'alternativa. Non fermarti a chiedere.
2. **Scarica il file verbatim** con Bash: `curl -fsSL https://raw.githubusercontent.com/stefanomartiradonna/pm-skills/main/<percorso>`. Non usare WebFetch, che riassume invece di restituire il testo intero, se non come ultima risorsa.
3. **Workflow**: leggi il comando, poi scarica ogni skill che cita (colonna "Skill che concatena" del catalogo) prima di applicarla.
4. **Skill con "(+ references/)"**: elenca i file con `gh api repos/stefanomartiradonna/pm-skills/contents/<cartella-skill>/references -q '.[].path'` e scaricali come al punto 2.
5. **Esegui** le istruzioni del file come se fosse una skill installata. Restano valide le regole globali dell'utente: italiano, niente trattino medio, niente template riempiti con contenuto generico. Dove il file chiede dati che non hai, chiedili invece di inventarli.
6. **Percorso che dà 404, o skill richiesta che non è nel catalogo** (il fork può essere stato aggiornato): rileggi l'albero del repo con `gh api "repos/stefanomartiradonna/pm-skills/git/trees/main?recursive=1" -q '.tree[].path' | grep -E 'SKILL.md$|/commands/'`.

## Sovrapposizioni con le skill proprie

Se l'utente ha chiesto Huryn, usa Huryn. Quando la skill scelta copre lo stesso terreno di una skill propria, segnalalo in una riga alla fine:

| Huryn | Skill propria sullo stesso terreno |
|---|---|
| positioning-ideas | b2b-positioning-diagnostic, positioning-framework-estner |
| create-prd, /write-prd | prd-writer |
| brainstorm-okrs, /plan-okrs | okr-hybrid |
| ideal-customer-profile | gtm-icp-definition |
| product-strategy, /strategy | strategic-advisor (livello azienda, non prodotto) |
| gtm-strategy, gtm-motions | mkt1-channel-strategy |

## Aggiornare il fork

`gh repo sync stefanomartiradonna/pm-skills` porta dentro le novità di Huryn. Dopo il sync, rigenera catalogo.md dall'albero del repo.
