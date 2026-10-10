# Lingua Strategies

A practical, research-informed field guide for educators of multilingual learners.

## The idea

This project began as a library of 52 EAL strategies that specialists could model in mainstream classrooms.

It has grown into a clearer mission:

> **Build the resource we wish someone had handed us on day one — a place that helps teachers know what to do tomorrow, understand why it works, and keep developing over time.**

The 52-strategy collection remains the practical heart of the first version, but the long-term product can organize the wider field through foundations, classroom strategies, co-teaching, literacy and academic language, and professional learning.

## Product principle

**Teachers should never leave a page knowing more but still not knowing what to do.**

Every strategy should lead to a concrete next step: **Try this tomorrow.**

## Run the website

This first MVP is a dependency-free static site. From this folder, run:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

### What is included

- A problem-first home page for busy and first-time EAL teachers
- Search and category filtering across all 52 seed strategies
- Expanded Quick Version and Go Deeper content for all 52 strategies
- English, Spanish, and Simplified Chinese experiences across all 52 strategies
- Persistent `EN | ES | 中文` language switch
- A concrete Try this tomorrow action on every strategy
- Local-only saved strategies (no account or backend)
- Responsive mobile and desktop layouts
- Preview pathways for Foundations, Co-Teaching, Reading & Writing, and professional growth

## Original Codex starter prompt

1. Open this folder as a local project in Codex.
2. Read `AGENTS.md` and `PRODUCT_BRIEF.md` before coding.
3. Then give Codex this prompt:

`Read AGENTS.md, PRODUCT_BRIEF.md, and data/strategies.json. Build the MVP around the new field-guide vision. Start with a beautiful home page organized around "What are you trying to do?", then build the searchable strategy library, strategy detail experience with Quick Version + Go Deeper, and a strong "Try this tomorrow" action. Polish the first 10 strategies before expanding the rest. Keep it warm, calm, practical, mobile responsive, and teacher-friendly. Do not add authentication, a database, analytics, or AI features yet.`

4. Test the experience as a busy classroom teacher, not as a developer.

## Product name

**Lingua Strategies** is the teacher-facing companion in the wider Lingua product family: practical guidance that helps educators know what to try tomorrow.
