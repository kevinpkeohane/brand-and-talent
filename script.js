/* Brand & Talent — light progressive enhancement only. */
(function () {
  "use strict";

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    var setOpen = function (open) {
      menu.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  // Selectable outcome cards: hover/focus previews pink via CSS; click/Enter/Space
  // makes the chosen outcome persistently pink, with AI selected by default.
  var outcomeCards = Array.prototype.slice.call(document.querySelectorAll("#services .card"));
  var selectOutcome = function (selected) {
    outcomeCards.forEach(function (card) {
      var active = card === selected;
      card.classList.toggle("is-selected", active);
      card.setAttribute("aria-pressed", active ? "true" : "false");
    });
  };
  outcomeCards.forEach(function (card) {
    card.addEventListener("click", function () { selectOutcome(card); });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectOutcome(card);
      }
    });
  });

  // Reveal-on-scroll (respects reduced motion)
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll(".section, .hero .lede, .hero-actions, .card, .work, .quote, .stat, .timeline li");
  targets.forEach(function (el) { el.classList.add("reveal"); });

  if (reduce || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("is-in"); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  targets.forEach(function (el) { io.observe(el); });

  // Safety net: never leave content hidden if the observer misses (fast
  // captures, edge browsers, bfcache). Reveal anything still hidden after 1.6s.
  window.setTimeout(function () {
    targets.forEach(function (el) { el.classList.add("is-in"); });
  }, 1600);
})();

// Scrollspy — pink-underline active nav section on main page
(function () {
  var navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
  if (!navLinks.length || !("IntersectionObserver" in window)) return;

  var sectionMap = {};
  navLinks.forEach(function (link) {
    var id = link.getAttribute('href').slice(1);
    var section = document.getElementById(id);
    if (section) sectionMap[id] = link;
  });

  var sectionIds = Object.keys(sectionMap);
  if (!sectionIds.length) return;

  var setActive = function (activeId) {
    navLinks.forEach(function (link) { link.classList.remove('nav-active'); });
    if (activeId && sectionMap[activeId]) sectionMap[activeId].classList.add('nav-active');
  };

  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-15% 0px -75% 0px', threshold: 0 });

  sectionIds.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) spy.observe(el);
  });
})();
