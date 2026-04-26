# KS3 Year 8 Revision Site

A simple static website that reorganises the CHSFG Year 8 exam booklet into easier-to-scan pages for home use.

## What is in this repo

- a homepage with the exam window and quick routes into revision
- subject guide pages for `Art`, `Computing`, `English`, `Geography`, `History`, `Maths`, `Modern Foreign Languages`, `Music`, `Religious Studies`, and `Science`
- subject guide pages for `GL English`, `GL Maths`, and `GL Science`
- a `GL assessments explained` page with careful background notes and caveats
- a draft `Practice Papers and Questions` page built around booklet guidance, curriculum roadmaps, and public practice routes
- a timetable page and an exam tips page
- practice sections on each subject page with question ideas, self-check prompts, and extra revision links

## Why this approach

This version is designed to be:

- easy to open locally
- easy to host on GitHub Pages
- useful at home without extra setup
- based on the school Year 8 exam booklet for `5 May 2026` to `21 May 2026`

## Open the published site

If GitHub Pages is enabled for this repository, the published site URL will be:

`https://zero-conditional.github.io/chsfg-year8-revision/`

If that URL does not load yet, enable GitHub Pages in the repository settings and deploy from the default branch root.

## Open it locally

Open [index.html](./index.html) in a browser.

No install step is required.

## Site structure

```text
index.html
exam-tips.html
timetable.html
gl-assessments-explained.html
practice-papers-and-questions.html
subjects/
  art.html
  computing.html
  english.html
  geography.html
  history.html
  maths.html
  mfl.html
  music.html
  religious-studies.html
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
- `summary`
- `exam_format`
- `key_topics`
- `revision_strategy`
- `curated_links`
- `weekly_checklist`
- `practice_section`

The `practice_section` contains:

- `title`
- `summary`
- `question_types`
- `self_check`
- `practice_links`

## Next good improvements

- add printable mini-tests and answer sheets
- add a simple quiz or self-marking layer for selected subjects
- add topic-level pages for the biggest subjects
- add simple progress tracking in the browser
