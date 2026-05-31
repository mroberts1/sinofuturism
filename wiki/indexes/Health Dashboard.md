---
title: Health Dashboard
draft: true
created: 2026-05-31
updated: 2026-05-31
---

*Local only — not published. For LLM health checks and editorial review.*

## Orphaned Concepts
*No other note links to these — they may be stubs or need connecting.*

```dataview
LIST
FROM "wiki/concepts"
WHERE length(file.inlinks) = 0
SORT file.name ASC
```

## Orphaned Sources
*Source summaries not linked from any concept article.*

```dataview
LIST
FROM "wiki/sources"
WHERE length(file.inlinks) = 0
SORT file.name ASC
```

## Concepts Without Tags

```dataview
LIST
FROM "wiki/concepts"
WHERE !tags OR length(tags) = 0
SORT file.name ASC
```

## Sources Without Tags

```dataview
LIST
FROM "wiki/sources"
WHERE !tags OR length(tags) = 0
SORT file.name ASC
```

## All Tags in Use

```dataview
LIST rows.file.link
FROM "wiki"
WHERE tags
GROUP BY tags
```

## Unresolved Wikilinks

```dataview
LIST file.outlinks
FROM "wiki"
WHERE length(filter(file.outlinks, (l) => !l.exists)) > 0
SORT file.name ASC
```
