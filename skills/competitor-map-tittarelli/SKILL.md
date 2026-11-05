---
name: competitor-map-tittarelli
description: "Researches one competitor across 13 fixed dimensions (company, product, ICP, pricing, reviews, content, launches, search and AI visibility, tech stack, hiring, go-to-market, social, paid ads) and writes a sourced dossier with an executive summary, a threat level, strengths and weaknesses judged against your ICP, and a data gaps section. Every data point carries a source and a confidence tag. Run it once per competitor, refresh it over time, then compare in a landscape file. Works for B2B SaaS competitors and, with the services variant, for agencies, consultancies and freelancers. Triggers: \"competitor analysis\", \"competitor research on\", \"what is [competitor] doing\", \"compare us to\", \"competitive landscape\", \"battlecard prep\", \"competitor map\", \"analisi competitor\", \"dossier su [competitor]\", \"mappa dei competitor\", \"cosa sta facendo [competitor]\", \"aggiorna il dossier di [competitor]\". Not for researching your own company, for a single factual question (answer it directly), for a deep dive on one competitor's ads or messaging (use deep-research-gtm in the GTM collective repo, after the dossier), or for non-software alternatives like spreadsheets and manual work (those belong in positioning and in winn-loss)."
---

# Competitor map (Tittarelli)

Build a dossier on one competitor that a marketer, a seller and a founder can each act on. The rule that governs everything: no data point without a source. Every claim carries a URL and an access date, or it's marked [Not available].

## When to use it

- Building the context folder, after you know who your customer is.
- Before positioning, so you know what buyers compare you to.
- When a competitor shows up in deals more often, or launches something.
- To refresh an existing dossier (quarterly, or after a launch, a funding round or a pricing change).

Don't use it for your own company or a single factual question ("what does X charge?"), which you can answer directly.

**What it does not cover.** The status quo (spreadsheets, manual processes, doing nothing, hiring in-house) is often the main competitive alternative, but you cannot build a 13-dimension dossier on Excel. Handle it in positioning (Dunford's competitive alternatives) and in winn-loss (the habit force). Mention it in the landscape file as an alternative, without a dossier.

## Inputs

**Required:** the competitor's name and website. If the name is ambiguous, confirm before you start.

**Recommended:**
- Your company context and ICP (e.g. `context/icp/`, or `clients/<client>/context/icp-definition.md`), so you can judge the threat against your own buyer.
- The latest winn-loss output: which competitors buyers actually mention in deals, and how often. It sets the competitor list and supports the threat level.
- Any existing dossier to refresh.
- The questions the user cares about most (pricing, outbound, a feature).

**Variant.** Choose before starting:
- **Software** (default): the competitor sells a product.
- **Services**: the competitor sells work (agency, consultancy, fractional, freelancer). The 13 dimensions stay, but some are read differently (see the table below).

**Paths.** Write to `context/competitors/MMYY-<competitor-slug>.md`. With two or more dossiers done, add `context/competitors/MMYY-landscape.md`. Agency or consultant? Swap `context/` for `clients/<client>/context/` throughout.

In the GTM collective repo: dossiers go in `clients/<client>/context/competitors/` (or `_agency/context/competitors/` for the collective's own competitors), and the landscape file is the existing `competitor-radar.md`. Update the radar; don't create a second landscape file.

**Tools.** Web search and page fetching cover most of it. Apify helps with ad libraries, LinkedIn and review sites. Exa helps find similar companies and clean page text; Firecrawl helps with pricing and comparison pages. Paid SEO and tech-stack tools are optional: if you don't have one, say so in that dimension rather than guessing. On a large site, list the pages first and only read the ones that matter (product, pricing, positioning, customers).

## The 13 dimensions

| # | Dimension | Software variant | Services variant |
|---|---|---|---|
| 1 | Company | Founding, funding, headcount, leadership | Founding, team size and seniority, founders, legal form |
| 2 | Product | Core offer, key features, what changed recently | Services offered, deliverables, engagement model (retainer, project, fractional), what changed recently |
| 3 | ICP | Who they sell to, from case studies and logos | Same |
| 4 | Pricing | Model, tiers, entry price, what's gated behind sales | Public prices or ranges, minimum engagement, pricing model (fixed, retainer, success fee) |
| 5 | Reviews | G2, Capterra or Trustpilot praise and complaints, with counts | Clutch, Google reviews, LinkedIn recommendations, client testimonials, with counts |
| 6 | Content | What they publish, how often, which topics | Same |
| 7 | Launches | What they've shipped in the last 12 months | New services, productized offers, tools or methods launched in the last 12 months |
| 8 | Search and AI visibility | Topics they rank or get cited for | Same |
| 9 | Tech stack | Tools visible on the site | Tools they build their service on and partner badges (e.g. Clay, HubSpot partner) |
| 10 | Hiring | Open roles by team, signalling where they invest | Same |
| 11 | Go-to-market | Self-serve, sales-led or both; channels; partnerships | Founder-led, referral, outbound, content, partnerships |
| 12 | LinkedIn and social | Founder and company activity, recurring themes | Same |
| 13 | Paid advertising | Ads in public ad libraries, angles they test | Same |

**How to read the ICP dimension.** Use the same method as the outside-in ICP draft: a table of the customers they show publicly (industry, size band, region, role quoted, problem, outcome, source), normalised into bands, then candidate segments with counts ("5 of 12 case studies"). One logo is not a segment. Remember that public customers are the ones they choose to show, not necessarily the ones they win most often.

## Steps

1. **Confirm scope.** Name, URL, variant, and what the user wants to learn. On a refresh, open the existing dossier first. Produces: a one-line brief.
2. **Research each dimension** in the order above. Note the source and date for each finding. If a dimension needs a tool you don't have, write [Not available: needs X] and move on.
3. **Tag confidence.** [VERIFIED], [INFERRED], [ESTIMATED], [UNAVAILABLE]. Aim for at least half verified.
4. **Assess strengths and weaknesses against your ICP**, not in the abstract. A strength that matters to a buyer you don't target is not a threat.
5. **Set a threat level**: primary (same buyer, same problem, often in deals), enterprise tier (same problem, bigger buyer), direct ICP (same buyer, adjacent problem), watch (early or stealth), low, or defunct. Explain the call in two sentences. "Often in deals" needs deal evidence (winn-loss, CRM, sales notes): without it, a primary rating is tagged [INFERRED].
6. **Write the executive summary last**, in 2 to 3 short paragraphs.
7. **List data gaps** with the action that would fill each one.
8. **If you have 2 or more dossiers, write or update the landscape file**: threat table, where each competitor is weak, the status quo and other non-software alternatives in one line each, and 3 to 5 recommendations. Cite the dossiers rather than repeating them.
9. **Hand off**:
   - Positioning (b2b-positioning-diagnostic, positioning-framework-estner): the competitor set becomes the list of alternatives.
   - Deep dive on a primary threat's ads, messaging or GTM motion: deep-research-gtm (GTM collective repo), starting from this dossier.
   - Their pricing page: pricing-teardown. Their homepage: saas-homepage-analyzer.
   - Sales: the battlecard in `_methodology/playbooks/competitor-switch.md` (GTM collective repo), when the competitor is in the radar.
   - winn-loss: add the competitor name to the list to watch for in transcripts.

## Output shape

Title the file `# Competitor map: [Name]`. Then:

- A recent-changes line (on a refresh)
- Executive summary
- Threat level, with the two-sentence reason
- A section per dimension, with inline (Source: X) notes and confidence tags
- Strengths and weaknesses against your ICP
- Data gaps, with the action for each
- A sources table at the end: URL, access date, confidence, dimension

## What good looks like

- All 13 dimensions present, each either filled or marked with why it's empty.
- Major claims (funding, size, pricing) have more than one source.
- Review themes come with counts, not adjectives.
- The threat level would make sense to your sales team, and a primary rating is backed by deal evidence or tagged [INFERRED].
- A refresh updates the existing file and notes what changed, rather than creating a duplicate.

## Mistakes to avoid

- Copying their marketing claims as fact. Note the claim, then the evidence.
- Guessing pricing that's behind "contact sales".
- Reporting old news as current. Date every finding.
- A weakness list that's really a wish list ("their UX is bad") with no evidence.
- Restating every dossier inside the landscape file.
- Turning the landscape into a feature-by-feature comparison. That is a separate job.
- Treating the competitors you found on Google as the competitors buyers actually compare you to.
