# Catalogo PM Skills di Pawel Huryn

Generato dal fork stefanomartiradonna/pm-skills il 2026-10-23 (commit 07b34f6): 9 plugin, 69 skill, 42 workflow.
I percorsi sono relativi alla base https://raw.githubusercontent.com/stefanomartiradonna/pm-skills/main/

### pm-ai-shipping

| Skill | Quando usarla | Percorso |
|---|---|---|
| code-review | Review code for actionable defects. | pm-ai-shipping/skills/code-review/SKILL.md (+ references/) |
| intended-vs-implemented | The method for finding the gap between what a system is supposed to do and what the code actually does , the class of bug generic scanners miss because they have no model of intent. | pm-ai-shipping/skills/intended-vs-implemented/SKILL.md |
| shipping-artifacts | The durable documentation set that makes an AI-built (vibe-coded) app reviewable before shipping. | pm-ai-shipping/skills/shipping-artifacts/SKILL.md |

| Comando (workflow) | Cosa fa | Skill che concatena | Percorso |
|---|---|---|---|
| /derive-tests | Turn documented intent into a test-coverage map , inventory the tests that exist today, derive use-case cases from the system docs, separate existing coverage from proposed tests and unverified gaps,... | shipping-artifacts, intended-vs-implemented | pm-ai-shipping/commands/derive-tests.md |
| /document-app | Reverse-engineer an AI-built codebase into the system documents reviewers and auditors need , a core set (architecture, flows, permissions, variables) plus conditional docs (emails, cron, SEO,... | shipping-artifacts, intended-vs-implemented | pm-ai-shipping/commands/document-app.md |
| /performance-audit-static | Static performance audit of AI-built code , find N+1 queries and request waterfalls, over-fetching, missing indexes, and caching opportunities, ranked by effort and impact. | shipping-artifacts, code-review | pm-ai-shipping/commands/performance-audit-static.md |
| /security-audit-static | Static security audit of AI-built code , map trust boundaries, cross-reference documented intent, self-refute every finding, and report only evidence-backed risks. | intended-vs-implemented, shipping-artifacts, code-review | pm-ai-shipping/commands/security-audit-static.md |
| /ship-check | Turn a vibe-coded repo into a reviewer-ready shipping packet , document the app, wire agent context, run correctness, security and performance reviews, add an independent unsteered pass, map test... | shipping-artifacts, code-review, intended-vs-implemented | pm-ai-shipping/commands/ship-check.md |

### pm-data-analytics

| Skill | Quando usarla | Percorso |
|---|---|---|
| ab-test-analysis | Analyze A/B test results with statistical significance, sample size validation, confidence intervals, and ship/extend/stop recommendations. | pm-data-analytics/skills/ab-test-analysis/SKILL.md |
| cohort-analysis | Perform cohort analysis on user engagement data , retention curves, feature adoption trends, and segment-level insights. | pm-data-analytics/skills/cohort-analysis/SKILL.md |
| sql-queries | Generate SQL queries from natural language descriptions. | pm-data-analytics/skills/sql-queries/SKILL.md |

| Comando (workflow) | Cosa fa | Skill che concatena | Percorso |
|---|---|---|---|
| /analyze-cohorts | Perform cohort analysis on user data , retention curves, feature adoption, and engagement trends | cohort-analysis | pm-data-analytics/commands/analyze-cohorts.md |
| /analyze-test | Analyze A/B test results , statistical significance, sample size validation, and ship/extend/stop recommendations | ab-test-analysis | pm-data-analytics/commands/analyze-test.md |
| /write-query | Generate SQL queries from natural language , supports BigQuery, PostgreSQL, MySQL, and more | sql-queries | pm-data-analytics/commands/write-query.md |

### pm-execution

| Skill | Quando usarla | Percorso |
|---|---|---|
| brainstorm-okrs | Brainstorm team-level OKRs aligned with company objectives , qualitative objectives with measurable key results. | pm-execution/skills/brainstorm-okrs/SKILL.md |
| create-prd | Create a lean, decision-ready Product Requirements Document with an 8-section template: summary, contacts, background, objective, market segments, value propositions (6-part JTBD template), solution,... | pm-execution/skills/create-prd/SKILL.md |
| dummy-dataset | Generate realistic dummy datasets for testing with customizable columns, constraints, and output formats (CSV, JSON, SQL, Python script). | pm-execution/skills/dummy-dataset/SKILL.md |
| job-stories | Create job stories using the 'When [situation], I want to [motivation], so I can [outcome]' format with detailed acceptance criteria. | pm-execution/skills/job-stories/SKILL.md |
| outcome-roadmap | Transform an output-focused roadmap into an outcome-focused one that communicates strategic intent. | pm-execution/skills/outcome-roadmap/SKILL.md |
| pre-mortem | Run a pre-mortem risk analysis on a PRD or launch plan. | pm-execution/skills/pre-mortem/SKILL.md |
| prioritization-frameworks | Reference guide to 9 prioritization frameworks with formulas, when-to-use guidance, and templates , RICE, ICE, Kano, MoSCoW, Opportunity Score, and more. | pm-execution/skills/prioritization-frameworks/SKILL.md |
| release-notes | Generate user-facing release notes from tickets, PRDs, or changelogs. | pm-execution/skills/release-notes/SKILL.md |
| retro | Facilitate a structured sprint retrospective , what went well, what didn't, and prioritized action items with owners and deadlines. | pm-execution/skills/retro/SKILL.md |
| sprint-plan | Plan a sprint with capacity estimation, story selection, dependency mapping, and risk identification. | pm-execution/skills/sprint-plan/SKILL.md |
| stakeholder-map | Build a stakeholder map using a power/interest grid, identify communication strategies per quadrant, and generate a communication plan. | pm-execution/skills/stakeholder-map/SKILL.md |
| strategy-red-team | Red-team a PRD, roadmap, or strategy by attacking its load-bearing assumptions before reality does. | pm-execution/skills/strategy-red-team/SKILL.md |
| summarize-meeting | Summarize a meeting transcript into structured notes with date, participants, topic, key decisions, summary points, and action items. | pm-execution/skills/summarize-meeting/SKILL.md |
| test-scenarios | Create comprehensive test scenarios from user stories with test objectives, starting conditions, user roles, step-by-step actions, and expected outcomes. | pm-execution/skills/test-scenarios/SKILL.md |
| user-stories | Create user stories following the 3 C's (Card, Conversation, Confirmation) and INVEST criteria with descriptions, design links, and acceptance criteria. | pm-execution/skills/user-stories/SKILL.md |
| wwas | Create product backlog items in Why-What-Acceptance format , independent, valuable, testable items with strategic context. | pm-execution/skills/wwas/SKILL.md |

| Comando (workflow) | Cosa fa | Skill che concatena | Percorso |
|---|---|---|---|
| /generate-data | Generate realistic dummy datasets for testing , CSV, JSON, SQL inserts, or Python scripts | dummy-dataset | pm-execution/commands/generate-data.md |
| /meeting-notes | Summarize a meeting transcript into structured notes with decisions, action items, and follow-ups | summarize-meeting | pm-execution/commands/meeting-notes.md |
| /plan-okrs | Brainstorm team-level OKRs aligned with company objectives , qualitative objectives with measurable key results | brainstorm-okrs | pm-execution/commands/plan-okrs.md |
| /pre-mortem | Run a pre-mortem risk analysis on a PRD, launch plan, or feature , identify what could go wrong before it does | pre-mortem | pm-execution/commands/pre-mortem.md |
| /red-team-prd | Red-team a PRD, roadmap, or strategy , attack its load-bearing assumptions and return the cheapest test for each before you commit | strategy-red-team | pm-execution/commands/red-team-prd.md |
| /sprint | Sprint lifecycle , plan a sprint, run a retrospective, or generate release notes | retro, release-notes, sprint-plan | pm-execution/commands/sprint.md |
| /stakeholder-map | Map stakeholders on a Power × Interest grid and create a tailored communication plan | stakeholder-map | pm-execution/commands/stakeholder-map.md |
| /test-scenarios | Generate comprehensive test scenarios from user stories or feature specs , happy paths, edge cases, and error handling | test-scenarios | pm-execution/commands/test-scenarios.md |
| /transform-roadmap | Convert a feature-based roadmap into an outcome-focused roadmap that communicates strategic intent | outcome-roadmap | pm-execution/commands/transform-roadmap.md |
| /write-prd | Create a lean Product Requirements Document from a feature idea or problem statement, with a fuller spec on request | create-prd | pm-execution/commands/write-prd.md |
| /write-stories | Break a feature into backlog items , user stories, job stories, or WWA format with acceptance criteria | user-stories, job-stories, wwas | pm-execution/commands/write-stories.md |

### pm-go-to-market

| Skill | Quando usarla | Percorso |
|---|---|---|
| beachhead-segment | Identify the first beachhead market segment for a product launch. | pm-go-to-market/skills/beachhead-segment/SKILL.md |
| competitive-battlecard | Create sales-ready competitive battlecards comparing your product against a specific competitor , positioning, feature comparison, objection handling, and win/loss patterns. | pm-go-to-market/skills/competitive-battlecard/SKILL.md |
| growth-loops | Identify growth loops (flywheels) for sustainable traction. | pm-go-to-market/skills/growth-loops/SKILL.md |
| gtm-motions | Identify the best GTM motions and tools across 7 motion types: Inbound, Outbound, Paid Digital, Community, Partners, ABM, and PLG. | pm-go-to-market/skills/gtm-motions/SKILL.md |
| gtm-strategy | Create a go-to-market strategy covering marketing channels, messaging, success metrics, and launch timeline. | pm-go-to-market/skills/gtm-strategy/SKILL.md |
| ideal-customer-profile | Identify the Ideal Customer Profile (ICP) from research data with demographics, behaviors, JTBD, and needs. | pm-go-to-market/skills/ideal-customer-profile/SKILL.md |

| Comando (workflow) | Cosa fa | Skill che concatena | Percorso |
|---|---|---|---|
| /battlecard | Create a sales-ready competitive battlecard , positioning, feature comparison, objection handling, and win strategies | competitive-battlecard | pm-go-to-market/commands/battlecard.md |
| /growth-strategy | Design sustainable growth mechanisms , growth loops and GTM motions for product-led and sales-led strategies | growth-loops, gtm-motions | pm-go-to-market/commands/growth-strategy.md |
| /plan-launch | Create a full go-to-market strategy , beachhead segment, ICP, messaging, channels, and launch plan | beachhead-segment, ideal-customer-profile, gtm-strategy | pm-go-to-market/commands/plan-launch.md |

### pm-market-research

| Skill | Quando usarla | Percorso |
|---|---|---|
| competitor-analysis | Analyze competitors with strengths, weaknesses, and differentiation opportunities. | pm-market-research/skills/competitor-analysis/SKILL.md |
| customer-journey-map | Create an end-to-end customer journey map with stages, touchpoints, emotions, pain points, and opportunities. | pm-market-research/skills/customer-journey-map/SKILL.md |
| market-segments | Identify 3-5 potential customer segments with demographics, JTBD, and product fit analysis. | pm-market-research/skills/market-segments/SKILL.md |
| market-sizing | Estimate market size using TAM, SAM, and SOM with top-down and bottom-up approaches. | pm-market-research/skills/market-sizing/SKILL.md |
| sentiment-analysis | Analyze user feedback data to identify segments with sentiment scores, JTBD, and product satisfaction insights. | pm-market-research/skills/sentiment-analysis/SKILL.md |
| user-personas | Create refined user personas from research data , 3 personas with JTBD, pains, gains, and unexpected insights. | pm-market-research/skills/user-personas/SKILL.md |
| user-segmentation | Segment users from feedback data based on behavior, JTBD, and needs. | pm-market-research/skills/user-segmentation/SKILL.md |

| Comando (workflow) | Cosa fa | Skill che concatena | Percorso |
|---|---|---|---|
| /analyze-feedback | Analyze user feedback at scale , sentiment analysis, theme extraction, and segment-level insights | sentiment-analysis | pm-market-research/commands/analyze-feedback.md |
| /competitive-analysis | Analyze the competitive landscape , identify competitors, compare strengths and weaknesses, find differentiation opportunities | competitor-analysis | pm-market-research/commands/competitive-analysis.md |
| /research-users | Comprehensive user research , build personas, segment users, and map the customer journey from research data | user-personas, user-segmentation, market-segments, customer-journey-map | pm-market-research/commands/research-users.md |

### pm-marketing-growth

| Skill | Quando usarla | Percorso |
|---|---|---|
| marketing-ideas | Generate 5 creative, cost-effective marketing ideas with channels, messaging, and engagement rationale. | pm-marketing-growth/skills/marketing-ideas/SKILL.md |
| north-star-metric | Define a North Star Metric and 3-5 supporting input metrics that form a metrics constellation. | pm-marketing-growth/skills/north-star-metric/SKILL.md |
| positioning-ideas | Brainstorm product positioning ideas differentiated from competitors. | pm-marketing-growth/skills/positioning-ideas/SKILL.md |
| product-name | Brainstorm 5 unique, memorable product names with rationale aligned to brand values and target audience. | pm-marketing-growth/skills/product-name/SKILL.md |
| value-prop-statements | Generate value proposition statements for marketing, sales, and onboarding from existing value propositions. | pm-marketing-growth/skills/value-prop-statements/SKILL.md |

| Comando (workflow) | Cosa fa | Skill che concatena | Percorso |
|---|---|---|---|
| /market-product | Brainstorm marketing ideas, positioning, value prop statements, and product names , creative marketing toolkit | marketing-ideas, positioning-ideas, value-prop-statements, product-name | pm-marketing-growth/commands/market-product.md |
| /north-star | Define your North Star Metric and supporting input metrics , classify the business game and validate against best practices | north-star-metric | pm-marketing-growth/commands/north-star.md |

### pm-product-discovery

| Skill | Quando usarla | Percorso |
|---|---|---|
| analyze-feature-requests | Analyze and prioritize a list of feature requests by theme, strategic alignment, impact, effort, and risk. | pm-product-discovery/skills/analyze-feature-requests/SKILL.md |
| brainstorm-experiments-existing | Design experiments to test assumptions for an existing product , prototypes, A/B tests, spikes, and other low-effort validation methods. | pm-product-discovery/skills/brainstorm-experiments-existing/SKILL.md |
| brainstorm-experiments-new | Design lean startup experiments (pretotypes) for a new product. | pm-product-discovery/skills/brainstorm-experiments-new/SKILL.md |
| brainstorm-ideas-existing | Brainstorm product ideas for an existing product using multi-perspective ideation from PM, Designer, and Engineer viewpoints. | pm-product-discovery/skills/brainstorm-ideas-existing/SKILL.md |
| brainstorm-ideas-new | Brainstorm feature ideas for a new product in initial discovery from PM, Designer, and Engineer perspectives. | pm-product-discovery/skills/brainstorm-ideas-new/SKILL.md |
| identify-assumptions-existing | Identify risky assumptions for a feature idea in an existing product across Value, Usability, Viability, and Feasibility. | pm-product-discovery/skills/identify-assumptions-existing/SKILL.md |
| identify-assumptions-new | Identify risky assumptions for a new product idea across 8 risk categories including Go-to-Market, Strategy, and Team. | pm-product-discovery/skills/identify-assumptions-new/SKILL.md |
| interview-script | Create a structured customer interview script with JTBD probing questions, warm-up, core exploration, and wrap-up sections. | pm-product-discovery/skills/interview-script/SKILL.md |
| metrics-dashboard | Define and design a product metrics dashboard with key metrics, data sources, visualization types, and alert thresholds. | pm-product-discovery/skills/metrics-dashboard/SKILL.md |
| opportunity-solution-tree | Build an Opportunity Solution Tree (OST) to structure product discovery , map a desired outcome to opportunities, solutions, and experiments. | pm-product-discovery/skills/opportunity-solution-tree/SKILL.md |
| prioritize-assumptions | Prioritize assumptions using an Impact × Risk matrix and suggest experiments for each. | pm-product-discovery/skills/prioritize-assumptions/SKILL.md |
| prioritize-features | Prioritize a backlog of feature ideas based on impact, effort, risk, and strategic alignment with top 5 recommendations. | pm-product-discovery/skills/prioritize-features/SKILL.md |
| summarize-interview | Summarize a customer interview transcript into a structured template with JTBD, satisfaction signals, and action items. | pm-product-discovery/skills/summarize-interview/SKILL.md |

| Comando (workflow) | Cosa fa | Skill che concatena | Percorso |
|---|---|---|---|
| /brainstorm | Brainstorm product ideas or experiments from PM, Designer, and Engineer perspectives , for existing or new products | brainstorm-ideas-existing, brainstorm-ideas-new, brainstorm-experiments-existing, brainstorm-experiments-new | pm-product-discovery/commands/brainstorm.md |
| /discover | Run a full product discovery cycle , from ideation through assumption mapping to experiment design | brainstorm-ideas-existing, brainstorm-ideas-new, identify-assumptions-existing, identify-assumptions-new, prioritize-assumptions, brainstorm-experiments-existing, brainstorm-experiments-new | pm-product-discovery/commands/discover.md |
| /interview | Prepare a customer interview script or summarize an interview transcript into structured insights | interview-script, summarize-interview | pm-product-discovery/commands/interview.md |
| /setup-metrics | Design a product metrics dashboard with North Star metric, input metrics, health metrics, and alert thresholds | metrics-dashboard | pm-product-discovery/commands/setup-metrics.md |
| /triage-requests | Analyze, categorize, and prioritize a batch of feature requests from customers or stakeholders | analyze-feature-requests, prioritize-features | pm-product-discovery/commands/triage-requests.md |

### pm-product-strategy

| Skill | Quando usarla | Percorso |
|---|---|---|
| ansoff-matrix | Generate an Ansoff Matrix analysis mapping growth strategies across market penetration, market development, product development, and diversification. | pm-product-strategy/skills/ansoff-matrix/SKILL.md |
| business-model | Generate a Business Model Canvas with all 9 building blocks. | pm-product-strategy/skills/business-model/SKILL.md |
| lean-canvas | Generate a Lean Canvas with problem, solution, metrics, cost structure, UVP, unfair advantage, channels, segments, and revenue. | pm-product-strategy/skills/lean-canvas/SKILL.md |
| monetization-strategy | Brainstorm 3-5 monetization strategies with audience fit, risks, and validation experiments. | pm-product-strategy/skills/monetization-strategy/SKILL.md |
| pestle-analysis | Perform a PESTLE analysis covering Political, Economic, Social, Technological, Legal, and Environmental factors. | pm-product-strategy/skills/pestle-analysis/SKILL.md |
| porters-five-forces | Perform Porter's Five Forces analysis , competitive rivalry, supplier power, buyer power, threat of substitutes, and threat of new entrants. | pm-product-strategy/skills/porters-five-forces/SKILL.md |
| pricing-strategy | Analyze and design pricing strategies including pricing models, competitive pricing analysis, willingness-to-pay estimation, and price elasticity. | pm-product-strategy/skills/pricing-strategy/SKILL.md |
| product-strategy | Create a comprehensive product strategy using the 9-section Product Strategy Canvas , vision, segments, costs, value propositions, trade-offs, metrics, growth, capabilities, and defensibility. | pm-product-strategy/skills/product-strategy/SKILL.md |
| product-vision | Brainstorm an inspiring, achievable, and emotional product vision that motivates teams and aligns stakeholders. | pm-product-strategy/skills/product-vision/SKILL.md |
| startup-canvas | Generate a Startup Canvas combining Product Strategy (9 sections) and Business Model (costs + revenue) for a new product. | pm-product-strategy/skills/startup-canvas/SKILL.md |
| swot-analysis | Perform a detailed SWOT analysis , strengths, weaknesses, opportunities, and threats with actionable recommendations. | pm-product-strategy/skills/swot-analysis/SKILL.md |
| value-proposition | Design a detailed value proposition using a 6-part JTBD template , Who, Why, What before, How, What after, Alternatives. | pm-product-strategy/skills/value-proposition/SKILL.md |

| Comando (workflow) | Cosa fa | Skill che concatena | Percorso |
|---|---|---|---|
| /business-model | Explore business models using Lean Canvas, Business Model Canvas, Startup Canvas, or Value Proposition frameworks | lean-canvas, business-model, startup-canvas, value-proposition | pm-product-strategy/commands/business-model.md |
| /market-scan | Comprehensive macro environment analysis , SWOT, PESTLE, Porter's Five Forces, and Ansoff Matrix in one scan | swot-analysis, pestle-analysis, porters-five-forces, ansoff-matrix | pm-product-strategy/commands/market-scan.md |
| /pricing | Design a pricing strategy , models, competitive analysis, willingness-to-pay estimation, and pricing experiments | pricing-strategy, monetization-strategy | pm-product-strategy/commands/pricing.md |
| /strategy | Create a comprehensive product strategy using the 9-section Strategy Canvas , from vision to defensibility | product-strategy, product-vision | pm-product-strategy/commands/strategy.md |
| /value-proposition | Design a value proposition using the 6-part JTBD template , Who, Why, What before, How, What after, Alternatives | value-proposition | pm-product-strategy/commands/value-proposition.md |

### pm-toolkit

| Skill | Quando usarla | Percorso |
|---|---|---|
| draft-nda | Draft a detailed Non-Disclosure Agreement between two parties covering information types, jurisdiction, and clauses needing legal review. | pm-toolkit/skills/draft-nda/SKILL.md |
| grammar-check | Identify grammar, logical, and flow errors in text and suggest targeted fixes without rewriting the entire text. | pm-toolkit/skills/grammar-check/SKILL.md |
| privacy-policy | Draft a detailed privacy policy covering data types, jurisdiction, GDPR and compliance considerations, and clauses needing legal review. | pm-toolkit/skills/privacy-policy/SKILL.md |
| review-resume | Comprehensive PM resume review and tailoring against 10 best practices including XYZ+S formula, keyword optimization, job-specific tailoring, and structure. | pm-toolkit/skills/review-resume/SKILL.md |

| Comando (workflow) | Cosa fa | Skill che concatena | Percorso |
|---|---|---|---|
| /draft-nda | Draft a Non-Disclosure Agreement between two parties with jurisdiction-appropriate clauses | draft-nda | pm-toolkit/commands/draft-nda.md |
| /privacy-policy | Draft a privacy policy covering data collection, usage, storage, and compliance requirements | privacy-policy | pm-toolkit/commands/privacy-policy.md |
| /proofread | Check grammar, logic, and flow in any text , targeted fixes without rewriting | grammar-check | pm-toolkit/commands/proofread.md |
| /review-resume | Comprehensive PM resume review against 10 best practices , structure, impact metrics, keywords, and actionable feedback | review-resume | pm-toolkit/commands/review-resume.md |
| /tailor-resume | Tailor a PM resume to a specific job description , keyword alignment, experience reframing, and strategic optimization | review-resume | pm-toolkit/commands/tailor-resume.md |
