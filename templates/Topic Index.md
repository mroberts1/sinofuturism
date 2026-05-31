---
title: <% tp.file.title %>
tags:
  - 
created: <% tp.date.now("YYYY-MM-DD") %>
updated: <% tp.date.now("YYYY-MM-DD") %>
---

# <% tp.file.title %>

Topic index for everything tagged `#<% tp.file.title.toLowerCase().replace(/ /g, "-") %>`.

## Sources

```dataview
TABLE date as "Year", authors
FROM "wiki/sources"
WHERE contains(tags, "<% tp.file.title.toLowerCase().replace(/ /g, "-") %>")
SORT date DESC
```

## Concepts

```dataview
TABLE tags
FROM "wiki/concepts"
WHERE contains(tags, "<% tp.file.title.toLowerCase().replace(/ /g, "-") %>")
SORT file.name ASC
```
