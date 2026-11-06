# Soglie per traccia e benchmark

Questo è l'unico file da aggiornare quando arrivano benchmark nuovi. La cascata in
`matrice-diagnosi.md` legge le soglie da qui e non le contiene: così i numeri invecchiano senza toccare
la logica.

**Ultima revisione: novembre 2026. Da rivedere entro novembre 2027.** Oltre quella data, dichiara nel
report che le soglie non sono state riviste e usa i dati storici del cliente al posto dei benchmark.

---

## Tre regole di lettura, che contano più delle soglie

1. **Il confronto col benchmark del proprio settore batte il valore assoluto.** Un'agenzia al 45% di
   gross margin è messa male, una gastronomia allo stesso 45% è sopra la media. Lo stesso numero
   racconta due storie opposte. Non giudicare mai un margine senza avere la fascia di quel mestiere.
2. **Il perimetro dei costi diretti è una scelta, non una regola.** Materia prima sola, o anche il
   lavoro diretto e l'ammortamento: il gross margin cambia di 20 punti a seconda di cosa includi.
   Dichiara nel report cosa hai incluso e usa lo stesso perimetro in tutti i periodi che confronti.
   Senza, stai confrontando due numeri che hanno lo stesso nome e misurano cose diverse.
3. **I benchmark pubblici sono quasi tutti di vendor e di survey, non dati auditati, e divergono tra
   loro.** Vanno usati come fascia, mai come numero secco, e la fonte va citata. Quando il dato storico
   del cliente esiste, vince sul benchmark: la domanda utile è "rispetto a sei mesi fa", non "rispetto
   alla mediana del settore".
4. **Quasi tutti i benchmark disponibili sono statunitensi.** Su una PMI italiana, su un'agenzia
   italiana o su una startup con ticket in euro vanno trattati come ordine di grandezza. Dove il
   cliente ha tre mesi di storia propria, quella storia è un benchmark migliore.

---

## Soglie operative, quelle che la cascata legge

### Universali, valide in tutte le tracce

| Soglia | Valore | Origine |
|---|---|---|
| Contribution margin | deve essere positivo sulla coorte matura. Negativo apre C1 | Marinò |
| LTV/CAC rotto | sotto 3 | Marinò |
| LTV/CAC in banda | 3 a 5 | Marinò |
| LTV/CAC sotto-investito | sopra 5 | Marinò |
| LTV/CAC perdita secca | sotto 1, ogni cliente è una perdita | slide 14 |
| Zone di runway | rossa 6 mesi o meno, arancione 6-12, gialla 12-18, verde oltre 18 | Marinò |
| Banda di indecisione | entro il 10% da ogni soglia non si arrotonda, si mostrano le due letture e si adotta la più conservativa | regola di questa skill |
| Tetto del CAC | LTV diviso 3. Si calcola per canale e per segmento, non aggregato | derivato dalla soglia 3 |

### Traccia ricorrente (B2B SaaS)

| Soglia | Valore | Fonte e data |
|---|---|---|
| Gross margin sano | 70% e oltre | mediane 2026 a 75-77% (SaaSRise 75% su SaaS B2B privato; PitchBook 77,1% proiettato su SaaS enterprise pubblico) |
| Gross margin sottile | 55-70% | interpolazione fra la mediana e la fascia servizi di Marinò |
| Gross margin grave | sotto 55% | come sopra |
| Pavimento di ritenzione (apre C2) | churn logo mensile sopra 3%, oppure NDR sotto 100% | NRR mediana 101-102% (Benchmarkit 2026 via sintesi secondarie); GRR mediana 84-88%, in calo |
| NDR per fascia di ACV | enterprise sopra 100k ACV circa 118%, mid-market 25-100k circa 108%, SMB sotto 25k circa 97% | SaaS Capital, via sintesi secondarie |
| Payback, riferimento | mediana circa 16 mesi, scesa da 18. Top quartile sotto 12, i migliori sotto 6 | Benchmarkit 2026 via sintesi secondarie |
| Payback per fascia di ACV | ACV sotto 15k: 8-12 mesi. 15-100k: 14-18. Oltre 100k: 18-24 | **dato in conflitto**, vedi nota sotto |
| Tolleranza sul payback | fino a 18 mesi accettabile se NDR sopra 110% e runway sopra 18 mesi | regola di questa skill |
| Ciclo di cassa | di norma libera cassa (annuale prepagato). Anticipa con fatturazione mensile e termini enterprise a 60-90 giorni | |
| Burn multiple | nessun report 2026 pubblica una distribuzione utilizzabile. Si usa come scala qualitativa, dichiarandolo: sotto 1 efficiente, 1-2 accettabile, sopra 2 da spiegare | |

**Il conflitto sul payback, da dichiarare sempre.** Marinò dà 3-6 mesi come payback buono. Sul B2B SaaS
la mediana 2026 è intorno ai 16 mesi. Le due cose non si contraddicono, misurano mercati diversi: 3-6
mesi è realistico su transazionale e self-serve, non su un B2B con ciclo di vendita e commerciale. Se
applichi 3-6 mesi a una startup B2B SaaS, quasi ogni cliente risulta rotto e la diagnosi è
sistematicamente sbagliata. **Nella traccia ricorrente usa le fasce per ACV, e se l'ACV non è noto usa
la mediana a 16 mesi come riferimento.** Le due fonti sulle fasce per ACV non coincidono (una dà 11
mesi sotto 5k di ACV e 22 mesi nella fascia 50-100k), quindi la fascia va presentata come intervallo e
la diagnosi non deve mai dipendere dal solo payback.

### Traccia transazionale (DTC, e-commerce)

| Soglia | Valore | Fonte e data |
|---|---|---|
| Gross margin | 30-50% | Marinò |
| Contribution margin dopo gli ads (CM3) sano | 15% del ricavo e oltre | range per verticale da 5% (elettronica) a 35% (integratori), eightx 2026 |
| Pavimento di ritenzione (apre C2) | repeat a 90 giorni sotto 20% senza abbonamento, sotto 30% con abbonamento. Oppure ordini per cliente a 12 mesi sotto 2,0 | fasce "strong" e "average" 2026: senza abbonamento strong oltre 20%, media 12-20%; con abbonamento strong oltre 30%, media 20-30% |
| Verifica di cadenza, obbligatoria prima di C2 | mediana dei giorni fra primo e secondo ordine fra chi ha riacquistato. Se supera la finestra di misura, è sbagliata la finestra e non la ritenzione | regola di questa skill |
| Tasso di reso | media 19-20,5% su tutte le categorie. Abbigliamento mediana 25%, fascia 20-30%. Elettronica circa 10%. Beauty sotto 12% | eightx 2026 |
| Payback | entro 2 ordini, misurato **in numero di ordini** e non in mesi | regola di questa skill |
| Ciclo di cassa | anticipa quasi sempre: magazzino e ads si pagano prima dell'incasso | |

### Traccia servizi (agenzia, consulenza, studio)

| Soglia | Valore | Fonte e data |
|---|---|---|
| Gross margin | 60-80% | Marinò. **In conflitto** con i dati di settore: 50-60% sul ricavo netto per agenzie sane, 30-50% per le agenzie social. Il conflitto è di definizione, ricavo lordo contro ricavo netto di pass-through: dichiara quale usi |
| Gross margin sottile | sotto 60% sul ricavo lordo | Marinò |
| Utilization fatturabile | 75-85% sui profili di erogazione, 65-75% blended. Media di settore 60-63%, soglia di profittabilità 65-70% | fonti 2026 in conflitto sulla definizione, fatturabile contro blended |
| Revenue per head | 150-200k dollari come obiettivo, media 163k nel 2025 su agenzie marketing. UK 100-120k sterline | **dati statunitensi e britannici: su un'agenzia italiana sono un ordine di grandezza, non una soglia** |
| Pavimento di ritenzione (apre C2) | durata media incarico sotto 9 mesi, oppure churn clienti sopra 25% annuo | regola di questa skill, nessun benchmark pubblico affidabile |
| Payback | segnale debole, è quasi sempre immediato. **Sostituito dal DSO** come indicatore di cassa | regola di questa skill |
| Ciclo di cassa | anticipa strutturalmente: paghe mensili contro incassi a 60-90 giorni | |
| CAC | va imputato a tariffa di mercato sulle ore di acquisizione del founder. Se resta a zero, la cella C3 è strutturalmente invisibile e il business sembra più sano di quanto è | regola di questa skill |

### Fasce di gross margin di Marinò, per gli altri mestieri

Servizi 60-80%, e-commerce 30-50%, food retail 25-40%. Fuori da queste e dal SaaS, non inventare una
fascia: usa il dato storico del cliente e dichiara che il benchmark di settore non c'è.

---

## Fonti

Benchmark SaaS 2026, letti attraverso sintesi secondarie perché i report primari sono a pagamento o
dietro registrazione:
- [Benchmarkit 2026 financial benchmarks, sintesi](https://techsy.io/it/blog/metriche-saas-che-contano) (NRR 102%, GRR 84%, CAC payback 16 mesi)
- [B2B SaaS Benchmarks 2026 annual report, Data-Mania](https://www.data-mania.com/blog/b2b-saas-benchmarks-2026-annual-report/) (NRR 101%, CAC payback 20 mesi nelle rilevazioni precedenti)
- [SaaS Benchmark Report 2026, SaaSRise](https://saasrise.com/blog/saas-benchmark-report-2026) (gross margin mediano 75%)
- [2026 B2B SaaS GTM benchmarks, SaaS Hero](https://www.saashero.net/uncategorized/2026-b2b-saas-gtm-benchmarks) (gross margin 77,1% proiettato, top quartile payback)
- [Enterprise SaaS CAC payback standards, SaaS Hero](https://www.saashero.net/strategy/enterprise-saas-cac-payback-standards/) (fasce per ACV)
- [Net revenue retention benchmarks 2026, Digital Applied](https://www.digitalapplied.com/blog/net-revenue-retention-benchmarks-2026-saas-expansion-data) (NDR per fascia di ACV, dati SaaS Capital)
- [SaaS metrics benchmarks 2026, Averi](https://www.averi.ai/blog/15-essential-saas-metrics-every-founder-must-track-in-2026-%28with-benchmarks%29) (burn multiple sotto 2 come obiettivo)

Benchmark DTC 2026:
- [Ecommerce KPI benchmark report 2026, eightx](https://eightx.co/blog/ecommerce-kpi-benchmark-report-2026)
- [Repeat purchase rate per verticale 2026, eightx](https://eightx.co/blog/average-ecommerce-repeat-purchase-rate-by-vertical-2026)
- [Average contribution margin per verticale, eightx](https://eightx.co/blog/average-contribution-margin-by-vertical)
- [Average ecommerce return rate, eightx](https://eightx.co/blog/average-ecommerce-return-rate)
- [DTC profitability benchmarks 2026, Attn Agency](https://www.attnagency.com/blog/dtc-profitability-benchmarks-2026)

Benchmark servizi 2026:
- [Growth marketing agency revenue metrics, SaaS Hero](https://saashero.net/customer-retention/growth-marketing-agency-revenue-metrics/) (utilization, revenue per head, gross margin su ricavo netto)
- [Agency profitability statistics, Agiled](https://agiled.app/statistics/agency-profitability-statistics) (revenue per head, dati Promethean Research)
- [Marketing agency staffing costs 2026, Stealth Agents](https://stealthagents.com/research/marketing-agency-staffing-costs-2026/) (utilization media di settore, Agency Management Institute)
- [Revenue per employee per agenzie, Alto Accounting](https://www.alto-accounting.com/insights/revenue-per-employee-agencies) (dato UK)

Soglie di Marinò: modulo "Leggere margini, unit economics e cassa per allocare il capitale", corso
Learnn 4561. Il testo integrale e le slide sono in
`claude-private-refs/analisi-finanziaria/marino-business-economics.md`.

**Nessuno dei numeri di questa pagina viene da un dato auditato.** Quando li usi nel report, portali
come fascia con la fonte accanto, mai come verità.
