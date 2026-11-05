---
name: winn-loss
description: "Analyses sales call transcripts (and churn or renewal calls) to find why deals are won, lost, kept or churned. Reads each call across six dimensions (product, messaging, sales process, pricing, competition, customer context) plus Bob Moesta's four forces of progress (push, pull, anxiety, habit), pulls verbatim quotes with the speaker named, counts how often each pattern appears, and writes findings with recommendations. Works with any recorder export or pasted text. Triggers: \"win/loss analysis\", \"why do we lose\", \"why do we win\", \"analyse these sales calls\", \"lost deals\", \"churn analysis\", \"objection patterns\", \"analisi win loss\", \"perché perdiamo i deal\", \"perché vinciamo\", \"analizza queste call di vendita\", \"analisi churn\", \"pattern delle obiezioni\". Feeds positioning (b2b-positioning-diagnostic, positioning-framework-estner) and messaging (b2b-h1-writer, saas-homepage-analyzer, sales-deck-creator). Not for general meeting summaries, competitor research from the outside, or picking an ICP on its own (feed the findings into gtm-icp-definition)."
---

# Win-loss

Turn sales calls into evidence about why people buy and why they don't. The quotes are the main product; the summary is secondary. Every pattern you report has to trace back to something a person said on a call.

## When to use it

- After 5 or more closed deals with recordings or notes.
- Before positioning or messaging work, to replace opinions about objections with evidence.
- When win rate drops, or a competitor starts showing up in losses.
- Monthly, as a standing review for a team with steady deal flow.

Don't use it for one-off meeting notes, for researching competitors from the outside, or for picking an ICP on its own (feed the findings into gtm-icp-definition).

## Inputs

**Required:** transcripts, each with the customer (or a code name) and the outcome: win, loss, retention or churn. If the outcome isn't given, ask. Only infer it when the call itself states it.

**Optional:** deal size and stage, competitor names to watch for, context/icp/ and context/competitors/ (dossiers from competitor-map-tittarelli) for cross-referencing. Competitors that show up in deals feed back into competitor-map-tittarelli: they set its competitor list and back its "primary" threat level.

**Paths.** Write to `context/win-loss/MMYY-win-loss.md`. Keep a short `context/win-loss/win-loss-strategy.md` across runs: decisions made, definitions agreed, things to stop doing. Read it first on every run. Agency or consultant? Swap `context/` for `clients/<client>/context/` throughout.

**Tools.** None needed beyond the transcripts. If a call recorder or CRM is connected (e.g. Granola), pull from it; otherwise the user pastes or uploads files.

## Before you analyse

1. **Normalise the format.** Recorder exports, subtitle files, JSON and pasted text all become one shape: speaker-attributed turns, with timestamps where they exist.
2. **Redact personal data.** Mask end-customer names, emails, phone and account numbers. Keep roles, company type and deal context.
3. **Bind every claim to a quote.** A finding without a quote and a named speaker role doesn't ship.

## The six dimensions

| Dimension | Win signals | Loss signals |
|---|---|---|
| Product | "Exactly what we need" | "It doesn't do X" |
| Messaging | "Now I see why this matters" | "What does it actually do?" |
| Sales process | "You understood our problem" | "The demo missed our use case" |
| Pricing | "Fair for what we get" | "Over budget", "too expensive" |
| Competition | "Chose you over Y" | "Going with Y" |
| Customer context | "We need this by Q2" | "No rush, maybe next year" |

## The four forces of progress (Bob Moesta)

The six dimensions read the call from the seller's side: what we did well or badly. The four forces read it from the buyer's side: what was pushing them to change and what was holding them back. Use them as a second read on the same quotes, not as a replacement.

A switch happens when push + pull are stronger than anxiety + habit.

| Force | What it is | Win signals | Loss signals |
|---|---|---|---|
| Push of the situation | The pain or event that makes the current way no longer acceptable | "We can't keep doing this manually", "Since the funding round we have to..." | Push absent or weak: "It works well enough for now" |
| Pull of the new solution | The picture of a better life with the new product | "If this works, I can finally...", "That's what we've been missing" | Pull vague or not specific to us: "Looks interesting" |
| Anxiety of the new | Fear about switching: will it work, will the team adopt it, what if I'm wrong | Anxiety raised and resolved: "OK, if the onboarding takes a week it's fine" | Anxiety raised and never resolved: "What if the team doesn't use it?", "We'd need to migrate everything" |
| Habit of the present | Attachment to the current way, even when it's painful | Habit named and broken: "We've always used Excel, but..." | Habit wins: "Our team is used to the current tool", "Not the right moment to change" |

Rules:
- Tag a force only when a buyer says it. Don't infer forces from the rep's pitch.
- Anxiety and habit often surface indirectly in sales calls (hesitations, "we'd need to check internally", repeated questions on the same risk). Tag them, but mark the quote as indirect.
- A loss where anxiety + habit dominate and no competitor is named is a loss to the status quo, not to a competitor. Report it as such.

What each force feeds:
- **Push** → buying triggers and observable signals (gtm-icp-definition, Step 6).
- **Pull** → UVP and messaging, in the buyer's words.
- **Anxiety** → proof points, objection handling, risk reversal in onboarding and pricing.
- **Habit** → the real competitive alternative (status quo, workaround) for positioning.

## Steps

1. **Read the strategy file** if one exists, and apply its locked definitions.
2. **Process each call.** Classify the outcome, tag speakers (buyer, champion, rep), and pull quotes against the six dimensions and the four forces. Produces: a per-call evidence table.
3. **Aggregate by outcome.** Group wins, losses, retention and churn. Count how many calls support each pattern ("4 of 7 losses").
4. **Rank patterns.** Three or more mentions is a pattern. Two is emerging. One is a single mention, labelled as unconfirmed.
5. **Read the forces balance by outcome.** For wins: which push and pull did the work, which anxiety was resolved and how. For losses and churn: which force tipped the balance (weak push, vague pull, unresolved anxiety, habit). Count it like any other pattern.
6. **Cross-reference** by segment, deal size or competitor where the data allows. Look across at least three cuts, not just competitor.
7. **Separate product gaps from sales execution.** They go to different teams.
8. **Write insights.** For each: the pattern, the evidence with frequency and quotes, the confidence, and what to do about it.
9. **Update the strategy file** with new decisions and definitions.
10. **Hand off** to positioning (b2b-positioning-diagnostic, positioning-framework-estner) and messaging (b2b-h1-writer, saas-homepage-analyzer, sales-deck-creator).

## Output shape

Open with a 3-line TLDR and the sample size, stated once. Then:

- Executive summary
- Top win drivers
- Top loss drivers
- Forces of progress: the balance for wins, losses and churn, with quotes per force
- Objection themes with suggested responses
- Competitor mentions (status quo included)
- Per-dimension breakdown
- Recommendations split into product, messaging and sales
- Appendix of quotes by call

**Confidence:** high is 3 or more consistent calls, medium is 2 or strong indirect signals, low is a single mention.

## What good looks like

- Every finding has a frequency and at least one verbatim quote with a speaker role.
- Patterns are described as "associated with", not "caused by".
- Small samples are flagged clearly. Under 5 wins and 5 losses, findings are directional.
- Dimensions and forces with no data say "not discussed in transcripts".
- Every force is backed by a buyer quote, never by the rep's pitch.
- A seller could use the objection section on their next call.

## Mistakes to avoid

- Summarising what buyers said instead of quoting them.
- Treating one memorable call as a pattern.
- Mixing up what the rep said with what the buyer said.
- Reading cause into correlation ("long cycles lose deals").
- Reporting a loss to the status quo as a loss to a competitor.
- Keeping customer names or emails in the saved file.
