(function () {
  var storageKey = "ks3-revision-theme";
  var root = document.documentElement;
  var themeToggle = document.querySelector("[data-theme-toggle]");
  var savedTheme = null;
  injectSiteFooter();

  try {
    savedTheme = window.localStorage.getItem(storageKey);
  } catch (error) {
    savedTheme = null;
  }

  applyTheme(savedTheme || "light");

  if (themeToggle) {
    updateThemeToggleLabel(root.getAttribute("data-theme"));
    themeToggle.addEventListener("click", function () {
      var nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(nextTheme);

      try {
        window.localStorage.setItem(storageKey, nextTheme);
      } catch (error) {
        // Ignore storage failures and keep the current page theme.
      }
    });
  }

  var body = document.body;
  var sectionKey = body.getAttribute("data-section");
  var subjectKey = body.getAttribute("data-subject");

  if (!sectionKey || !subjectKey || !window.revisionSiteData) {
    return;
  }

  var section = window.revisionSiteData[sectionKey];
  var subject = section && section[subjectKey];

  if (!subject) {
    return;
  }

  setText("subject-group", subject.group);
  setText("subject-title", subject.title);
  setText("subject-summary", subject.summary);
  renderList("exam-format", subject.exam_format, "plain-list");
  renderList("key-topics", subject.key_topics, "plain-list");
  renderList("revision-strategy", subject.revision_strategy, "plain-list");
  renderList("weekly-checklist", subject.weekly_checklist, "check-list");
  renderLinks("curated-links", subject.curated_links);

  function setText(id, value) {
    var element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  }

  function renderList(id, items, className) {
    var element = document.getElementById(id);
    if (!element) {
      return;
    }

    var list = document.createElement("ul");
    list.className = className;

    items.forEach(function (item) {
      var listItem = document.createElement("li");
      listItem.textContent = item;
      list.appendChild(listItem);
    });

    element.appendChild(list);
  }

  function renderLinks(id, links) {
    var element = document.getElementById(id);
    if (!element) {
      return;
    }

    var list = document.createElement("ul");
    list.className = "resource-list";

    links.forEach(function (link) {
      var listItem = document.createElement("li");
      var anchor = document.createElement("a");
      var note = document.createElement("p");

      anchor.href = link.url;
      anchor.textContent = link.label;
      anchor.target = "_blank";
      anchor.rel = "noreferrer";

      note.textContent = link.note;

      listItem.appendChild(anchor);
      listItem.appendChild(note);
      list.appendChild(listItem);
    });

    element.appendChild(list);
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    updateThemeToggleLabel(theme);
  }

  function updateThemeToggleLabel(theme) {
    if (!themeToggle) {
      return;
    }

    themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    themeToggle.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  }

  function injectSiteFooter() {
    var pageShell = document.querySelector(".page-shell");

    if (!pageShell || pageShell.querySelector(".site-footer")) {
      return;
    }

    var footer = document.createElement("footer");
    footer.className = "site-footer";

    var copyright = document.createElement("p");
    copyright.className = "site-footer-meta";
    copyright.textContent = "© 2026 KS3 Year 8 Revision Site. All rights reserved.";

    var sourceNote = document.createElement("p");
    sourceNote.className = "site-footer-note";
    sourceNote.textContent = "This site reorganises information drawn from CHSFG Year 8 exam materials, including the school exam booklet, into a simpler revision guide for families. CHSFG remains the original source of timetable and exam information.";

    footer.appendChild(copyright);
    footer.appendChild(sourceNote);
    pageShell.appendChild(footer);
  }
})();
