# Lingua Strategies — Codex Project Instructions

## Mission
Build the resource an EAL / multilingual-learner teacher wishes someone had handed them on day one: a practical, research-informed field guide that helps teachers know what to do tomorrow, understand why it works, and continue growing over time.

The product should collect, organize, and translate the field of multilingual education into an accessible system. It should reduce the years of searching, trial-and-error, scattered PDFs, conference notes, framework documents, and disconnected strategies that teachers often have to navigate on their own.

This is not merely a 52-strategy website. The strategy library is the first practical core of a larger teacher-learning resource.

## Product promise
A teacher should be able to arrive with a real classroom problem, find a useful move quickly, understand the principle behind it, and leave knowing exactly what to try next.

Every major content page should answer two questions:
1. **What can I do tomorrow?**
2. **Why does this work?**

Teachers should never leave a page knowing more but still not knowing what to do.

## Primary users
- Classroom teachers supporting multilingual learners
- EAL / ESL / ELL specialists
- Teaching assistants
- Elementary teachers in international and multilingual-school contexts

Secondary users:
- Literacy coaches
- Instructional coaches
- School leaders
- Pre-service teachers and university students

## Core philosophy
Organize the field around teacher needs, not around jargon or institutional frameworks.

Instead of starting with “Which strategy do you want?”, help users start with questions such as:
- My students are not participating. What can I do?
- We are starting a difficult informational text. How can I make it accessible?
- My multilingual learners have ideas but cannot get them onto the page.
- How do I scaffold without lowering expectations?
- How can I use students’ home languages well?
- How do I plan or co-teach with an EAL specialist?

## Content architecture
The long-term product should have five connected areas:

### 1. Foundations
Plain-language orientation to the field:
- Who multilingual learners are
- Language development basics
- Asset-based teaching
- Content vs. language objectives
- Scaffolding vs. simplifying
- WIDA and similar frameworks, explained without assuming expertise
- Pull-out, push-in, collaboration, and co-teaching
- Common misconceptions

### 2. Practical Toolbox
The strategy library. Begin with the 52 seed strategies in `data/strategies.json`.

Each strategy should be practical, observable, and reusable.

### 3. Co-Teaching & Collaboration
Help specialists and classroom teachers move from siloed support to shared practice:
- co-planning
- 5–10 minute demonstration teaching
- shared facilitation
- observation and noticing
- reflection conversations
- gradual transfer of ownership
- instructional coaching habits

Use the cycle:
**Plan → Model → Notice → Reflect → Try**

### 4. Reading, Writing & Academic Language
A deeper practice area that can eventually include:
- vocabulary
- reading comprehension
- oral language
- writing
- genre pedagogy / Teaching and Learning Cycle
- mentor texts
- sentence-level work
- feedback
- multilingual resources

### 5. Grow as a Multilingual Educator
A guided professional-learning layer:
- research summaries
- framework explainers
- recommended books / articles / videos
- conference and PD takeaways
- reflection tools
- suggested learning pathways

Do not build all five sections in the MVP. Design the information architecture so the product can grow naturally into them.

## Page DNA
Where appropriate, content pages should use a consistent structure:

### Quick version
A teacher can understand the practice in about 2 minutes.
- What it is
- When to use it
- Why it matters
- What to do tomorrow
- Suggested teacher language

### Go deeper
Optional deeper learning for teachers who want it.
- Underlying principle
- Examples across subjects / grade levels
- Common mistakes
- Variations
- Reflection prompts
- Evidence / framework connections
- Further reading

## Strategy detail schema
Each strategy should eventually support:
- title
- short promise
- classroom problem / teacher need
- category
- when to use
- estimated time
- language domains
- lesson phase
- co-teaching move
- materials
- 3–5 implementation steps
- suggested teacher script
- student example
- what an observing teacher should notice
- what students are doing
- common mistake
- easier variation
- extension
- “Try this tomorrow” action
- 2-minute reflection question
- evidence note
- source placeholders / citations once researched

## MVP
Build these first:
1. Home page with the field-guide mission and a “What are you trying to do?” entry point.
2. Searchable/filterable strategy library using the 52 seed strategies.
3. Strategy cards.
4. Strategy detail page/modal using the Quick Version + Go Deeper structure.
5. Need-based browsing such as comprehension, speaking, vocabulary, writing, scaffolding, co-teaching, and multilingual assets.
6. Simple “Try this tomorrow” implementation view.
7. A lightweight placeholder/navigation structure for Foundations, Co-Teaching, Reading & Writing, and Grow as an Educator so the larger vision is visible without building everything yet.
8. Favorite/save can be local-only for MVP.

## First milestone
Polish 10 strategies deeply rather than manually completing all 52. The remaining strategies can display lighter seed metadata until expanded.

Suggested first 10:
1. Preview key vocabulary with visuals
2. Build background knowledge before reading
3. Language objective + content objective
4. Think-Pair-Share with sentence stems
5. Intentional wait time
6. Chunk teacher directions
7. Oral rehearsal before writing
8. Deconstruct a mentor text
9. Build a shared word bank
10. Gradually remove scaffolds

## Voice and design
Warm, calm, credible, practical, contemporary, and teacher-facing.

The site should feel like an experienced colleague saying, “Start here. This will help.” It should not feel like a corporate LMS, a dense research database, or a flashy AI product.

Design principles:
- generous white space
- excellent readability
- approachable typography
- rounded cards and subtle interaction
- mobile responsive
- clear hierarchy
- low cognitive load
- no gimmicky AI gradients or chatbot-first design

## Evidence and attribution
The project should be research-informed without pretending every practical adaptation has direct experimental evidence.

- Do not invent citations.
- Evidence/source fields may remain placeholders until sources are added intentionally.
- Clearly distinguish a research-supported principle from a practical classroom adaptation.
- Do not imply WIDA endorsement or affiliation.
- Do not reproduce copyrighted framework text beyond brief references to publicly known concepts.
- Credit frameworks and researchers appropriately when content is added.

## Content workflow
Treat `data/strategies.json` as the source of truth for the initial 52-strategy collection.

As the project grows, content may be added in structured local data files for:
- foundations
- teacher needs / problems
- co-teaching guides
- research notes
- recommended resources
- learning pathways

Prefer structured content over hard-coded page copy when practical.

## Guardrails
- Practical before theoretical, but never anti-research.
- Do not lower expectations for multilingual learners.
- Treat home languages and multilingualism as assets.
- Avoid deficit language.
- Do not imply one strategy works in every context.
- Do not build accounts, analytics, school dashboards, AI assistants, or a backend in the first MVP unless explicitly requested.
- Avoid feature creep. The first release should be genuinely useful with static/local content.

## Suggested tech
Choose a simple modern stack Codex can maintain easily. React/Next.js or Vite/React are both fine. Use local JSON initially. Avoid backend infrastructure until it solves a demonstrated need.
