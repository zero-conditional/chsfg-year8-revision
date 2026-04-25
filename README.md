# KS3 Year 8 Revision Site

A simple static website for Year 8 KS3 revision that a parent or child can open in a browser with no setup.

## What is in this repo

- a homepage with the exam window and quick routes into revision
- subject hub pages for `English`, `Maths`, and `Science`
- subject hub pages for `GL English`, `GL Maths`, and `GL Science`
- an exam tips page with planning, retrieval, and exam-day guidance

## Why this approach

The first version is designed to be:

- easy to open locally
- easy to host on GitHub Pages
- useful before any advanced features exist
- based on the school Year 8 exam booklet for `5 May 2026` to `21 May 2026`

## Open it locally

Open [index.html](C:/Users/graha/Documents/Github/ks3_revision_guide/index.html) in a browser.

No install step is required.

## Site structure

```text
index.html
exam-tips.html
subjects/
  english.html
  maths.html
  science.html
gl/
  english.html
  maths.html
  science.html
assets/
  data.js
  site.js
  styles.css
```

## Content model

Each subject page uses the same data shape:

- `title`
- `exam_format`
- `key_topics`
- `revision_strategy`
- `curated_links`
- `weekly_checklist`

## Next good improvements

- add topic-level pages, starting with Maths
- add printable mini-tests and answer sheets
- expand into other Year 8 subjects from the booklet
- add simple progress tracking in the browser
