---
title: "Review: Design, Structure, Sources (2026-06-01)"
created: 2026-06-01
type: editorial-review
draft: true
---

*Local only — editorial review notes. Not published to the public site.*

# Review: Sinofuturism Wiki

## Overall Verdict

The content is genuinely strong — much better than the visual presentation currently signals. 18 concept articles, 10 source summaries, ~1,300 lines of dense, properly-cited, well-cross-linked theoretical writing on a niche-but-rigorous topic. The bones (tag vocabulary, source/concept split, ingest log, dataview health checks) reflect serious wiki hygiene. The weaknesses are:

1. The visual treatment doesn't yet match the writing's quality
2. The topical coverage has obvious geographic and tonal gaps
3. The surface is too flat — there's no curated reading path for someone arriving cold

---

## A. Design and Layout

### What's working

- Palette is good. The warm parchment + bronze (#faf8f4 / #5c4a3a) is distinctive and avoids the default Quartz pastel-purple. The dark mode (#1a1714 / #c8a882) is even better — that copper-on-near-black is right for the subject.
- Inter + IBM Plex Mono is a safe, legible pairing.
- Hanzi renders cleanly inline (人工智能, 千里眼) without falling back to ugly system fonts.
- Three-column layout works; graph view and TOC populate.

### What's unrefined

1. **Content column is too narrow on desktop** (~500px of actual text). Quartz's default `--page-width` is 750px and you're not overriding it; combined with the wide right sidebar this creates a cramped 8–9-word line on a wide monitor. Bump content width to ~720–780px in custom.scss.

2. **No display typography.** The serif body / sans-serif headers / scholarly tone of the writing is calling for a real type pairing — something like *Source Serif* or *Newsreader* for the article body, with Inter kept for UI/headings. Right now everything is the same Inter weight and the page reads "tech docs," not "humanities wiki."

3. **Hanzi typography is unstyled.** When you write "Rengong Zhineng 人工智能" the Chinese characters use whatever fallback the OS picks (often Source Han Sans Heavy or PingFang). Worth declaring a CJK font stack so it stays consistent: `font-family: ..., "Noto Serif SC", "Source Han Serif SC", serif;`

4. **Tables look unstyled.** The Seven Principles table is a major piece of content but renders with no zebra striping, default Quartz borders, no emphasis on the principle column. A 30-line scss block could turn these into a real teaching tool.

5. **No hero/landing differentiation.** The home page is just another article. A wiki with a thesis-laden subject like this benefits from a curated landing — "Start Here", "Reading Paths", a featured concept of the week.

6. **Tag pills are nearly invisible** (the `#sinofuturism` chip at the top of articles is a faint khaki). Bump the contrast or use the secondary color.

7. **Video embed has a black void** with a tiny loading spinner that never resolves cleanly. Worth checking the YouTube ID and the iframe sandbox attributes — or screenshot-thumbnailing it with a play overlay.

8. **No favicon or OG image customization.** The wiki ships with default Quartz icon and the OG image is the generic Quartz one. For a wiki this thematic, a simple 中 glyph favicon and a custom OG card with the wiki title would lift first-impression quality a lot.

### Specific custom.scss additions to consider

- `:root { --page-width: 780px; }` for breathing room
- Article body in a serif: `article { font-family: "Newsreader", "Source Serif Pro", Georgia, serif; }`
- CJK fallback: `font-family: ... "Noto Serif SC", serif;`
- Table styling: alternating row backgrounds using `var(--highlight)`, bold first column, slightly tighter line-height
- A `.callout` style for pull-quotes (Lek's manifesto lines, Han's aphorisms are everywhere — they want callout treatment)

---

## B. Wiki Structure

### Strengths

- The concepts / sources / indexes triad is clean and Obsidian-native.
- Tag vocabulary file with rules is rare and excellent practice — it'll keep this from drifting.
- Ingest log is gold. Maintaining a chronological provenance trail makes the LLM-curated nature of this auditable.
- Dataview health checks (orphans, missing tags) show this is being curated, not just generated.
- Backlinks from sources → concepts are present and accurate.

### Gaps and friction points

1. **No reading paths.** A new visitor lands on the home page and gets two flat tables of 11 concepts + 9 sources. There's no "if you're new to this, start here → here → here." Recommend adding 3–4 curated paths at the top of `index.md`:
    - *The 30-minute primer:* sinofuturism → shanzhai → rengong-zhineng
    - *The philosophy track:* cosmotechnics → yuk-hui → process-vs-being → the-trace
    - *The history track:* qian-xuesen → chinese-cybernetics → linggan → buzhou-shan-aesthetics
    - *The aesthetic-artistic track:* lawrence-lek → buzhou-shan-aesthetics → dark-forest-theory-of-intelligence

2. **Sources page lists 8 of 10 entries as Machine Decision sub-chapters.** That's a single 2025 anthology dominating the bibliography. The source pool is too thin and too concentrated. (See Section C for filling this in.)

3. **Index naming is inconsistent.** "Sinofuturism Topic Index" sits next to "Index" — the topic index is the only one that exists, so "Topic Index" is redundant scaffolding for a future state you may not need.

4. **Health Dashboard and Tag Vocabulary are marked `draft: true`** (correctly excluded from build) but Health Dashboard uses Dataview queries that won't execute on Quartz — they only work inside Obsidian. Worth noting in the file header so future-you doesn't get confused.

5. **No concept disambiguation pages or "see also" tail.** Most articles end abruptly. Adding a consistent footer pattern would tighten things up:
    - `## Related Concepts` (3–5 wiki-links)
    - `## Primary Sources` (link to source summaries)
    - `## External References` (real-world URLs — this is the biggest missing thing)

6. **No "stub" markers.** Some articles (decreation 32 lines, rengong-zhineng 35 lines, the-trace 36 lines) are substantially thinner than others (sinofuturism 74 lines, shanzhai 69 lines). A `stub: true` frontmatter flag + a "this article is a stub" callout would signal where contributions or LLM expansion would help.

7. **Aliases verification.** The `aliases:` frontmatter is being used (Sinofuturism has `[Sino-futurism, sinofuturist, 中华未来主义]`) but Quartz v4 doesn't natively redirect aliases to canonical pages without an `AliasRedirects` emitter — which you do have enabled. Good. But it only redirects if you create actual alias notes pointing to the canonical. Worth verifying `/sino-futurism` resolves.

8. **Folder name capitalization is inconsistent.** The `concepts/`, `sources/`, `indexes/` folders are lowercase but the breadcrumb on inner pages reads "concepts > Sinofuturism" which feels jarring. Either lowercase everywhere or capitalize the folder display names via a sitemap config.

---

## C. Coverage Gaps and Where to Find More Sources

### Editorial gaps, in priority order

1. **Chinese-language primary sources are entirely absent.** Every source is Anglophone (Lek, Hui in English, Han translated, Machine Decision in English). This is the single biggest credibility gap for a Sinofuturism wiki — the movement names itself in Mandarin and the wiki has zero 简体 primary text. Even one or two: a Chen Qiufan essay, a Xia Jia interview from *Science Fiction World* (科幻世界), Liu Cixin on AI, would change the texture.

2. **Liu Cixin / Three-Body / Dark Forest as a primary source, not just a derived concept.** "Dark Forest Theory of Intelligence" exists as a concept page but Liu's actual novels and essays aren't a source. Same for Hao Jingfang (*Folding Beijing*), Chen Qiufan (*Waste Tide*), Xia Jia.

3. **The CCRU / accelerationist lineage** is gestured at (Nick Land mentioned in the Sinofuturism article) but not built out. Mark Fisher, Reza Negarestani, Nick Land's Shanghai/Hyperstition phase — at minimum one source summary per major figure.

4. **No visual/film sources beyond the Lek essay.** *Geomancer* (2017), *Black Cloud* (2021), *NOX* (2023–24) are named in the body text but have no source entries. Same for Lu Yang's work, Cao Fei's Sinofuturist installations.

5. **No academic Sinology sources.** Carl Robichaud, Geremie Barmé, Jeffrey Wasserstrom, Susan Greenhalgh on Chinese governance/technology — the wiki could use one ballast source from area studies.

6. **No music / sound layer.** The Steve Goodman (Kode9) entry is acknowledged but there's no source. Hyperdub's Chinese aesthetic adjacencies, Howie Lee, Tzusing — these are the auditory wing of Sinofuturism.

7. **Tech industry critical writing.** Kai-Fu Lee's *AI Superpowers*, Jing Tsu's *Kingdom of Characters*, Susan Greenhalgh & Li Zhang on biopolitics. These are the policy-and-industry sources missing.

### Concrete sites / tools to harvest from

- **Urbanomic** (urbanomic.com) — Machine Decision's publisher. Documents series with PDFs of related essays; also published Hui's *On the Existence of Digital Objects* and *Recursivity and Contingency*.
- **e-flux journal** (e-flux.com/journal) — search "sinofuturism," "Yuk Hui," "Lawrence Lek," "Cosmotechnics." Probably 40+ essays directly on-topic, all open access.
- **Triple Canopy, Rhizome, ArtForum** — Sinofuturism criticism and Lek interviews.
- **Verso Blog and Boundary 2** — academic-adjacent essays on Chinese tech, cosmotechnics.
- **Angelaki vol. 25 issue 4** (2020) — the whole special issue Hui edited; the wiki has the foreword but not the other 6–8 essays.
- **PhilArchive / Academia.edu / SSRN** — Hui's papers are mostly there as PDFs.
- **Sci-Fi World 科幻世界** archives, and English-translation venues like *Clarkesworld* (their Chinese SF translation series 2015–present), *Pathlight magazine*.
- **YouTube** — Lek's other films, Yuk Hui's lectures (HKW, Goldsmiths talks), Lu Yang's video art. All embeddable.
- **arxiv.org for Chinese AI research papers** — DeepSeek, Qwen, Yi, Baichuan technical reports. Would ground the "rengong-zhineng" article in current industry reality.
- **Internet Archive** — for the Lek video essay (a permanent mirror in case YouTube takedown).
- **NYU Shanghai AI & Culture Centre** publications (Anna Greenspan's program).

### Practical harvesting workflow

A cron-job pattern would suit this wiki well: schedule a weekly script that runs `arxiv` skill queries on terms like "Chinese science fiction AI" / "cosmotechnics" / "shanzhai philosophy" / "Liu Cixin dark forest" and dumps a markdown digest of new candidates into `wiki/_meta/source-candidates.md`. Triage manually before ingesting.

---

## D. Prioritized Next Steps

If spending 4 hours improving this, in order:

1. **Widen the content column and add a body serif** (30 min) — biggest visual lift per minute.
2. **Add reading paths to home page** (30 min) — biggest UX lift.
3. **Custom favicon + OG card** (30 min) — first impression.
4. **Style tables and add a callout class** (45 min) — improves every article at once.
5. **Ingest 2–3 e-flux essays as new source entries** (1 hour) — most efficient way to broaden the bibliography.
6. **Build out one Chinese-language primary source entry** (Liu Cixin or Chen Qiufan) as a template for future Mandarin sources (45 min).

Items 1–4 are pure design; 5–6 are content.
