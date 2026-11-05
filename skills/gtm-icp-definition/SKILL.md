---
name: gtm-icp-definition
description: "Build or pressure-test your Ideal Customer Profile from actual customer data. Use when defining ICP from scratch, validating an existing one, or sharpening targeting that has drifted. Covers market energy segments (M1/M2/M3), ECP vs ICP distinction, firmographic and deep-dive segmentation, winning indicators, buying triggers, buying committee, negative ICP, voice of customer, proof points, data gaps, and operationalization."
---

# GTM ICP Definition

**When to use this skill:** Use this skill to build an Ideal Customer Profile from scratch, pressure-test an existing one, or sharpen targeting criteria that have drifted from reality. The ICP is the foundation everything else in GTM is built on — if it's wrong, everything downstream is wrong too. Rerun this skill every 6 months or after any significant product, pricing, or market change.

---

## Personalization Required

This skill walks you through building an Ideal Customer Profile from scratch or pressure-testing an existing one. But the output is only as good as the inputs you bring. Before running this skill, provide:

- Your current customer list — even a rough one. 10-20 existing customers is enough to start. If you have zero customers, identify 5-10 companies you would consider a dream fit and explain why.
- Your best and worst customers — which customers are happiest, growing, and easy to work with? Which churned, never adopted, or were painful? Both matter equally.
- What you sell — product/service, core use case, the problem you solve.
- Your stage — pre-product-market-fit, early traction, scaling, or mature? ICP definition looks different at each stage.

Recommended, if available:
- The outside-in ICP draft produced by the `setup` skill (`clients/[nome]/context/icp-definition.md`): customer evidence table, candidate segments with counts, public proof points, sources. Use it as the starting evidence base, then correct it with internal data. It describes who the company chooses to show, not necessarily who buys best.
- Interview notes or call transcripts (discovery, sales, CS). They are the primary source for voice of customer.
- A CRM export. Strip person names and emails before sharing it.

Without this, the output is a generic ICP template. With it, the agent builds a profile calibrated to your actual customer reality — not assumptions about who should buy.

---

## What This Skill Produces

A documented ICP with market energy segment (M1/M2/M3), firmographic criteria, situational criteria, buying triggers, buying committee roles, explicit disqualifiers, observable signals, and a confidence level — in a format every revenue team member can use and reference quickly.

It also produces the material downstream skills need to write: voice of customer in the buyers' own words, customer proof points with sources, data gaps, and a source list. Every claim in the output can be traced to a customer record, an interview, or a URL.

---

## ICP Methodology

---

### Step 1 — Establish the Purpose

An ICP is not a wish list. It is a pattern extracted from reality. Before building one, be clear on what it is actually for.

An ICP is used to:
- Prioritize which companies to pursue (and which to ignore)
- Guide outbound targeting and list building
- Score and qualify inbound leads quickly
- Align sales, marketing, and product on who the customer is
- Make resource allocation decisions — where to spend time and money

An ICP is not:
- A persona (that is a person, not a company)
- A TAM exercise (ICP is about fit quality, not market size)
- A permanent document (it should evolve as you learn)
- A consensus document (it should reflect reality, not make everyone feel included)

If the team has multiple conflicting views of who the ICP is, that conflict should be surfaced and resolved during this process — not papered over.

**ECP is not ICP — know where you are before you start.**

Your early customers (ECP — Early Customer Profile) are structurally different from your ideal customers (ICP). Confusing the two leads to building an ICP optimized for early adopters, not for the real market.

| | Early Customer Profile (ECP) | Ideal Customer Profile (ICP) |
|---|---|---|
| Awareness | Solution-aware — they already know your category | Problem-aware — they know the pain, not your type of solution |
| Behavior | Early adopter, in the market to try new tech | Needs to be influenced, not actively looking |
| Risk tolerance | High — willing to bet on an unproven product | Low — requires proof of work for their use case |
| Reachability | They find you (inbound, communities, word of mouth) | Hard to reach — requires deliberate outbound or content |
| Feedback | Opinionated, eager to give feedback, generous | Expects polish, judges based on traction and references |
| Relationship | Easy to work with, forgiving | Demands compliance, onboarding, account management |

Your first 10-100 customers are almost certainly ECPs — not ICPs. That is fine. But when you run this skill to define your ICP, you must be aware that the patterns you extract from early customers may describe who buys early, not who represents your best long-term market.

**When are you ready to define your ICP?**

The answer depends on your ACV and target segment. Analyze too early and you are pattern-matching on noise. Analyze too late and you have wasted resources on bad-fit customers.

| Target Segment | ACV | Minimum customers before ICP analysis |
|---------------|-----|--------------------------------------|
| Enterprise | 100K+ | ~5 customers (small sample — ICP is hypothesis-grade) |
| Mid-Market | 25K-100K | ~25 customers |
| SMB | 5K-25K | ~100 customers |
| Prosumer / Small Business | <5K | 100+ customers (aim for statistical relevance) |

If you are below these thresholds, you are still in hustle mode. Use this skill to build a hypothesis-ICP, but label it explicitly as such and plan to revisit once you cross the threshold.

> The art of ICP definition blends data with intuition. In low-data environments (enterprise, <10 customers), qualitative judgment — past experience, founder instinct, pattern recognition from conversations — carries more weight. In high-volume environments (SMB/prosumer, 100+ customers), quantitative analysis dominates. The best ICPs combine both, using data to confirm or override initial assumptions.

---

### Step 2 — Identify Your Market Energy Segment

Before analyzing customers or building firmographic profiles, make a strategic choice: which type of market are you going after? Not all potential buyers are in the same state. Defining this upfront determines your value proposition, your messaging, and where your GTM budget should concentrate.

**Three market energy segments:**

| Segment | State | Description | Your competitor is |
|---------|-------|-------------|-------------------|
| **M1 — Potential Energy** | Desire without action | People who have a desired outcome your product could fulfill, but are not doing anything about it. Barriers (cost, complexity, time, awareness) keep them stuck. | Inaction. Doing nothing. |
| **M2 — Kinetic Energy** | Activity without your category | People who are already performing the activity your product addresses, but using inferior or different means (spreadsheets, manual processes, a non-purpose-built tool). | The current workaround — whatever they cobbled together. |
| **M3 — Captured Energy** | Category-aware, competitor-chosen | People who have evaluated or are using a direct competitor in your product category. They know the space and its players. | A specific incumbent product. |

**Why this matters before anything else:**

Each segment requires a fundamentally different value proposition. The same product feature must be positioned differently depending on which segment you are addressing.

Example — selling a CRM:
- To M1 (not tracking leads at all): "Finally keep track of every lead."
- To M2 (using spreadsheets): "No more manual updates."
- To M3 (using Salesforce): "A CRM you will actually enjoy using."

Send an M3 message to an M1 buyer and they will not understand you. Send an M1 message to an M3 buyer and they will think you are irrelevant. A good message aimed at the wrong segment becomes a bad message.

Trying to address all three simultaneously leads to vague, generic messaging that resonates with no one — the "Grow your business!" problem.

**The firmographic trap:**

Firmographics (industry, company size, geography, business model) are the most common way B2B teams define their market. They are also a bad starting point. A company that matches every firmographic criterion may still have zero need for your product if none of its people are in the energy state your product serves.

Firmographics are not useless — they are a refinement layer. Use them after you have identified your energy segment, not before.

**Prioritize one segment:**

Most startups cannot effectively pursue all three segments simultaneously. Each segment requires separate messaging, separate campaigns, and separate positioning. Choose the primary segment where you have the strongest pull, devote 60-80% of your GTM budget to it, and layer in the others only when the primary segment is working.

Exceptions exist (famous founder, massive funding, built-in virality), but for most companies: pick one, win it, then expand.

**To complete this step, answer:**
1. Which energy segment (M1, M2, or M3) describes your best existing customers? If pre-revenue, which segment are you betting on?
2. What is the specific state your target buyer is in? (e.g., "They want to automate reporting but are doing it manually in Excel" = M2)
3. Who or what is the real competitor in that segment? (inaction, a workaround, or a named product)
4. Can you articulate a value proposition that speaks directly to that energy state — without being generic enough to apply to all three?

> If you cannot clearly answer question 4, your ICP will produce firmographic lists that look right but convert poorly. Revisit before proceeding.

---

### Step 3 — Analyze Existing Customers

The fastest path to an accurate ICP is backward — look at who already bought and succeeded.

For each current or past customer, collect:
- Company size (headcount and revenue if available)
- Industry / vertical
- Geography
- Business model (B2B, B2C, marketplace, SaaS, services, etc.)
- Tech stack (relevant tools they use)
- How they found you or why they bought
- Time to close
- Expansion or contraction since signing
- Health score or NPS if available
- Why they churned (if applicable)

Put this in a customer evidence table, one row per customer. Then normalize the attributes into consistent bands (e.g., headcount 1-10 / 11-50 / 51-200 / 201-1000 / 1000+; one industry taxonomy; one region scheme) so they can be counted. Without bands, pattern recognition in Step 4 becomes impression, not counting.

Sort into three tiers:

**Tier A — Best customers.** Bought fast, adopted fully, expanded, refer others, easy to support, clearly get value.
**Tier B — Average customers.** Fine. Paid. Not churned. Not excited. Require normal effort.
**Tier C — Bad customers.** Churned, struggling, never adopted, required disproportionate support, or the relationship is difficult.

Your ICP is built from Tier A only. Not from the average of all customers. Optimizing for the average means optimizing for mediocrity.

> If you have fewer than 5 Tier A customers, acknowledge that the ICP is a hypothesis at this point — not a validated pattern.

---

### Step 4 — Find the Pattern in Tier A

Look across your Tier A customers and identify what they have in common. You are looking for signal, not coincidence. This step has two passes: first-pass segmentation (the obvious filters) and deep-dive segmentation (the hidden gems).

#### First Pass — Standard Pattern Recognition

**Firmographic patterns (the "who"):**
- Is there a consistent size range? (e.g., 50-200 employees, Series A-B)
- Are they concentrated in specific industries?
- Do they share a geography or language/market?
- Same business model or revenue structure?

**Situational patterns (the "when"):**
- What was happening at the company when they bought? (rapid growth, leadership change, new initiative, scaling pains)
- Were they in a specific stage of their own lifecycle?
- What triggered the purchase? Was there a consistent catalyst?

**Behavioral patterns (the "how they buy"):**
- How did they find you? (inbound, outbound, referral, event)
- How long did they take to buy?
- Who was involved in the decision?
- What made them choose you over alternatives?

**Value patterns (the "why it works"):**
- What outcome did they hire you to achieve? (the functional job-to-be-done)
- What metric improved as a result of using your product?
- How do they describe the value to colleagues?
- What emotional job does your product fulfill? (how they want to feel — in control, confident, less stressed, respected by peers)
- What social job does it address? (how it affects their status, credibility, or visibility within the organization)
- What job were they trying to eliminate or avoid? (tedious tasks, risk exposure, manual overhead)
- How do they measure success for the job your product performs?

These surface-level segments reveal initial patterns — but rarely the full picture.

#### Second Pass — Deep-Dive Segmentation

Layer on advanced filters that go beyond firmographics. These are often where the real ICP signal hides.

**Vertical-specific criteria:**
Metrics that only make sense within a specific industry. Examples: number of SKUs (e-commerce), transaction volume (payments), leads contacted per month (sales enablement), marketing budget (performance marketing). These filters separate "same industry, different reality" companies.

**Use case segmentation:**
How they actually use your product — not what you assumed they would use it for. Examples: using a scheduling tool for sales vs. recruiting; single use-case vs. multi use-case users; using for internal operations vs. external-facing workflows.

**User persona segmentation:**
Who inside the company actually uses the product. Manager vs. executive vs. individual contributor? Which department — marketing, product, operations, finance? The persona often predicts adoption depth and expansion potential.

**Pain point segmentation:**
What primary challenge drove them to buy. Companies in the same industry with the same size can have radically different buying motivations. Example: companies trying to reduce costs vs. companies trying to grow faster will evaluate and use your product differently.

#### Winning Indicators — How to Measure "Better Fit"

Do not just look for shared attributes. Measure which segments consistently outperform on indicators that signal best-fit customers.

**Product Usage indicators:**
- Frequency of key actions (daily/weekly logins, core product activities)
- Depth of feature adoption (advanced features vs. basic only)
- Integration usage (API calls, third-party app connections)

**Commercial Health indicators:**
- Higher win rates — which segments convert more easily in sales conversations?
- Shorter sales cycles — who closes faster?
- Higher ACVs — which segments pay more willingly?
- Net Revenue Expansion (NRR) — who expands after signing?
- Conversion rates (visitor → demo, demo → paid)
- Customer Acquisition Cost (CAC)

**Strategic Alignment indicators:**
- Roadmap fit — do they need features you are excited to build?
- Referenceability — willingness to do case studies and testimonials
- Cultural fit — values alignment, ease of collaboration

**Customer Success indicators:**
- Higher NPS scores
- Lower support ticket volume
- Better qualitative feedback from founders and sales reps

Map each segment from the first and second pass against these indicators. The segment that consistently outperforms across multiple indicators is your ICP. If no segment stands out clearly, either wait for more data (if below the ACV-based thresholds from Step 1) or re-examine your segmentation criteria.

> Your best-fit customers typically show: high product usage + lower churn + faster sales cycle + higher win rate + higher ACVs. When a segment hits 4 out of 5, you have a strong ICP signal.

Look for 3-5 attributes that appear in 80%+ of Tier A customers. Those are your ICP criteria. Attributes that appear in less than half are nice-to-haves, not requirements.

**Show the count behind every pattern.** Write "7 of 9 Tier A customers", not "most customers". A segment needs several customers behind it: one big logo is not a segment. If the sample is small, say so once in the confidence section and point to it, instead of repeating the caveat in every section.

---

### Step 5 — Identify the Negative ICP

Knowing who is NOT your ICP is as important as knowing who is. It prevents wasted cycles on companies that look right but are not.

From your Tier C customers, extract:
- What firmographic traits did bad customers share?
- What was their situation when they bought? (oversold to, wrong use case, too early, too late)
- What was the tell that was visible before the sale — that you ignored?
- What objections or concerns should have been disqualifying?

Common negative ICP signals:
- Too small to get real value (cannot afford implementation, team too thin)
- Too large for your current product maturity (needs enterprise features you do not have)
- Wrong vertical — the use case does not translate cleanly
- Wrong buying stage — they needed something before they could use you
- Wrong internal champion — bought by someone without authority or budget

Document the negative ICP explicitly. It should be as clear as the positive ICP. "We do not sell to X" is a policy, not a failure.

---

### Step 6 — Define the Buying Trigger

A company that fits your ICP perfectly but has no reason to buy right now is not a prospect — they are a future prospect. The buying trigger separates the two.

A buying trigger is the specific condition that creates urgency. It is situational, not firmographic.

**Types of buying triggers:**

| Trigger Type | Description |
|-------------|-------------|
| Growth trigger | Company is scaling faster than their current tools/processes can handle |
| Pain trigger | A specific problem has become acute enough that the status quo is no longer acceptable |
| Event trigger | Funding, acquisition, leadership change, product launch, expansion into new market |
| Competitive trigger | A competitor is gaining ground and they need to respond |
| Compliance trigger | Regulatory or legal deadline is forcing action |
| Budget trigger | New fiscal year, new budget approved, or previous tool contract expiring |

For your ICP, identify:
- What is the primary buying trigger? (the one that appears most often in Tier A)
- What are 1-2 secondary triggers?
- What does the trigger look like from the outside — what observable signal tells you the trigger has fired?

> The observable signal is what turns your ICP into a targetable list. "Series B company in logistics that just hired a VP of Operations" is actionable. "Series B company in logistics" is a list.

---

### Step 7 — Define the Buying Committee

Even if you have a perfect ICP company with a live buying trigger, you still need to reach the right people. ICP operates at the company level — the buying committee operates at the person level.

For each deal, identify:

**Economic buyer** — who approves the budget? What are their priorities? What business outcome do they care about?

**Champion** — who wants this to happen internally? What is their role, their motivation, their ability to influence the decision?

**End user / evaluator** — who will use the product day-to-day? What does success look like for them in their workflow?

**Influencer** — who has input but not final authority? (IT, legal, procurement, a peer who has been consulted)

**Blocker** — who might slow or kill the deal? What is their concern and what would resolve it?

For each role, document:
- Typical title(s) for this role at your ICP companies
- What they care about (their job-to-be-done)
- What messaging resonates with them
- How they typically behave in an evaluation

The buying committee structure should reflect your Tier A customer reality — not org chart theory. If the CFO never shows up in your deals, do not build a CFO strategy.

The champion and the economic buyer must read differently: different pains, different objections, different success measures. If the two profiles are interchangeable, you have described one person twice, and the messaging built on top will miss one of them.

Build roles from evidence (deals, interviews, quoted roles in case studies), never from imagination. "Marketing Mary, 34, loves podcasts" is not a buying committee role.

---

### Step 8: Capture Voice of Customer and Proof Points

The ICP tells you who to target. Voice of customer and proof points tell you what to say to them and how to make it credible. Collect both here, from the same evidence base.

**Voice of customer.** Exact phrases customers use for:
- The problem, before they bought (how they describe the pain)
- The trigger (what made them act now)
- The outcome (what changed, in their words)
- The alternative they left (what they were doing before)

Rules:
- Quote verbatim. Do not paraphrase, do not merge two quotes into one.
- Attribute each quote to a role and segment (e.g., "Head of Ops, Tier A, 51-200"), not to a person's name unless it is already public.
- Source priority: interviews and call transcripts first, sales and CS notes second, public testimonials and reviews last. Public testimonials are marketing-edited text: use them only when nothing better exists, and label them as such.
- Group quotes by segment and by buying committee role. Recurring phrases across customers are messaging candidates.

**Proof points.** For each customer you can reference: company, segment, the outcome they reported (with the number, if there is one), and the source (URL, or "internal data, not public"). Mark which ones are public and usable in outbound, decks and the website, and which ones are internal only.

Only customers that are public or that come from data the user provided. Never invent a customer or an outcome.

---

### Step 9 — Pressure-Test the ICP

Before committing to the ICP, validate it.

**Test 1 — The exclusion test**
Apply the ICP criteria to your current pipeline. Does it cleanly separate the deals you are excited about from the ones you are grinding on? If not, the criteria are not sharp enough.

**Test 2 — The prediction test**
Pick 10 companies you have not sold to. Apply the ICP criteria and predict which ones would be Tier A customers. Can you articulate clearly why? If the criteria do not produce confident predictions, they are too vague.

**Test 3 — The consensus test**
Share the ICP with sales, marketing, and CS. Do they all recognize it as accurate? If marketing says "yes" and sales says "that is not who we actually close," there is a gap between the aspirational ICP and the operational one. Resolve the conflict — do not split the difference.

**Test 4 — The list test**
Try to build a prospect list using only your ICP criteria. Can you find 50-100 companies that match? If yes, the ICP is specific enough to be useful and broad enough to be a real market. If you can find 10,000 companies, the criteria are too loose. If you can find 12, the market is too narrow.

---

### Step 10 — Document the ICP

Write it up in a form every revenue team member can use and reference quickly.

    TLDR (3 lines): who the ICP is, the primary trigger, the confidence level.

    OPEN QUESTIONS
    What the user or client must answer to raise confidence (short list).

    PROFILE NAME: [[a name your team will use in conversation, e.g., "Mid-market SaaS scaler"]]

    MARKET ENERGY SEGMENT
    Primary segment: [ ] M1 — Potential Energy  [ ] M2 — Kinetic Energy  [ ] M3 — Captured Energy
    Buyer state description:
    Real competitor in this segment: (inaction / workaround / named product)
    Segment-specific value proposition:

    FIRMOGRAPHIC CRITERIA
    Industry / vertical:
    Company size (headcount and/or revenue):
    Geography:
    Business model:
    Tech stack signals (if relevant):

    SITUATIONAL CRITERIA
    Stage of growth or lifecycle:
    Primary buying trigger:
    Secondary triggers (1-2):

    BUYING COMMITTEE
    Primary buyer: [title, priorities, messaging angle]
    Champion profile: [title, motivation]
    Other key stakeholders:

    NEGATIVE ICP
    Explicit disqualifiers:

    OBSERVABLE SIGNALS
    How you identify that a company fits the ICP and the trigger has fired —
    what you can actually see from the outside:

    VOICE OF CUSTOMER
    Verbatim quotes, by segment and role: problem / trigger / outcome / alternative left.
    Source type for each (interview, call, CS note, public testimonial).

    PROOF POINTS
    Customer, segment, outcome, source. Public or internal only.

    CONFIDENCE LEVEL
    [ ] Low — fewer than 5 Tier A customers. ICP is a hypothesis.
    [ ] Medium — 5-15 Tier A customers. Directionally right, some gaps remain.
    [ ] High — 15+ Tier A customers. Validated pattern.
    Small-sample caveat, stated once here.

    DATA GAPS
    What is missing and what would fill it (interviews, CRM fields, win-loss, churn data).

    SOURCES
    Customer records, interviews, URLs with access date. Confidence per source (high / medium / estimate).

    LAST UPDATED: [[date]]
    NEXT REVIEW: [[date — 6 months out, or sooner if major product/market change]]


---

### Step 11 — Turn the ICP Into a Working System

An ICP document that lives in a folder is worthless. It needs to be operationalized.

Connect ICP to every part of the GTM motion:

| GTM Function | How ICP Connects |
|-------------|-----------------|
| Scoring | Use ICP criteria as the Fit dimension in your qualification scoring model |
| Targeting | Build prospect lists using ICP firmographics + observable trigger signals |
| Outreach | Use ICP buying triggers and committee roles to personalize messaging angle |
| Qualification calls | Use ICP criteria as a discovery checklist to qualify or disqualify fast |
| Forecasting | Flag deals in pipeline that do not match ICP as higher risk |
| Product | Share ICP with product team so they build for the right user |

The ICP should influence every decision in the revenue org. If it does not, it is decoration.

**Expansion after ICP dominance:**

Once you have won your primary ICP segment — repeatable growth, predictable conversion, strong retention — you have two expansion paths:

| Direction | What it means | When to use |
|-----------|--------------|-------------|
| **Vertical expansion** | Same ICP, new use cases. You deepen the product for your existing target. | When your best customers are asking for adjacent capabilities and NRR is the growth lever. |
| **Horizontal expansion** | Same use case, new target audience. You take a proven playbook to a new segment. | When you have saturated your beachhead or a neighboring segment shows organic pull. |

Operationalize one new segment at a time. Each new segment requires its own messaging, sales playbook, potentially different product features, and support processes. Adding too many segments simultaneously is the "spray and pray" path — it dilutes focus and prevents scalable growth.

> The ICP is not a permanent constraint. It is a focusing mechanism. Revisit it as you grow, but expand deliberately — not reactively.

---

## Quality Check: Before Delivering

What good looks like:
- Every customer named is public or came from the user's own data.
- Every pattern shows its count ("6 of 14").
- Quotes are verbatim and attributed to a role.
- The champion and the economic buyer have different pains and different success measures.
- The negative ICP excludes real companies someone on the team might chase, not abstract categories.
- The confidence level matches the evidence: mostly internal data and interviews can score Medium or High, mostly public evidence and estimates stays Low.

Mistakes to avoid:
- Inventing customer names, outcomes, or composite quotes.
- Personas built from imagination instead of deals and interviews.
- Calling one big logo a segment.
- Treating public case studies as a representative sample: they show the happy customers the company chose to show, which are often ECPs.
- Repeating the same caveat in every section. Say it once and point to it.

---

## Quick Reference — ICP Cheatsheet

| Layer | What to Define | Source |
|-------|---------------|--------|
| Market Energy | M1 (potential), M2 (kinetic), or M3 (captured) — which buyer state are you targeting? | Strategic choice + Tier A customer analysis |
| Firmographic | Industry, size, geography, business model | Customer data + enrichment |
| Situational | Growth stage, buying trigger, lifecycle moment | Win/loss analysis |
| Behavioral | How they buy, who decides, how long it takes | CRM + call recordings |
| Value | What outcome they hire you for, how they measure it | CS + customer interviews |
| Deep-dive | Vertical-specific criteria, use case, user persona, pain point | Product analytics + sales calls + CS |
| Winning Indicators | Product usage, commercial health, strategic alignment, customer success metrics | Cross-functional data (product, sales, CS, finance) |
| Negative | Hard disqualifiers, bad-fit patterns | Churn analysis + Tier C customers |
| Voice of Customer | Verbatim phrases for problem, trigger, outcome, alternative | Interviews + calls first, public testimonials last |
| Proof Points | Customer, outcome, source, public or internal | Customer data + public case studies |

| Confidence Level | Tier A Sample | What It Means |
|-----------------|--------------|---------------|
| Low | Fewer than 5 customers | ICP is a hypothesis. Test aggressively. |
| Medium | 5-15 customers | Directionally right. Some gaps remain. |
| High | 15+ customers | Validated pattern. Defend it from drift. |

| Target Segment | ACV | When to analyze |
|---------------|-----|----------------|
| Enterprise | 100K+ | After ~5 customers (hypothesis-grade) |
| Mid-Market | 25K-100K | After ~25 customers |
| SMB | 5K-25K | After ~100 customers |
| Prosumer | <5K | After 100+ customers |

---

## Relationship to Other Skills

setup (collective repo)    →  optional input: outside-in ICP draft from public evidence, before kick-off
gtm-icp-definition         →  run first. Everything downstream depends on this.
gtm-prospecting            →  uses ICP firmographics + triggers to build targeted lists
gtm-qualification-scoring  →  uses ICP criteria as the Fit dimension (Dimension 1)
gtm-outreach-strategy      →  uses ICP buying triggers and committee roles for messaging
gtm-account-research       →  validates ICP fit for a specific account before outreach
gtm-meeting-prep           →  uses buying committee roles to prepare contact strategy
