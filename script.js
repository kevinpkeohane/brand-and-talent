/* Brand & Talent — progressive enhancement only.
   Blueprint revision: Sep 2026 */
(function () {
  "use strict";

  // Current year in footer
  document.querySelectorAll(".year").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

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

  // FAQ accordion
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var btn = item.querySelector(".faq-question");
    var answer = item.querySelector(".faq-answer");
    if (!btn || !answer) return;

    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");

      // Close all others
      document.querySelectorAll(".faq-item.open").forEach(function (other) {
        other.classList.remove("open");
        other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
        var otherAnswer = other.querySelector(".faq-answer");
        if (otherAnswer) otherAnswer.hidden = true;
      });

      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        answer.hidden = false;
      }
    });
  });

  // Testimonial carousel — 3 cards visible, JS-measured widths
  function initCarousel(el) {
    var track = el.querySelector(".carousel-track");
    var slides = Array.prototype.slice.call(el.querySelectorAll(".carousel-slide"));
    var prevBtn = el.querySelector(".carousel-prev");
    var nextBtn = el.querySelector(".carousel-next");
    var currentEl = el.querySelector(".carousel-current");
    var total = slides.length;
    var current = 0;
    var timer;
    var GAP_PX = 17.6; // 1.1rem

    if (!track || total === 0) return;

    function visibleCount() {
      var w = el.offsetWidth;
      if (w <= 540) return 1;
      if (w <= 860) return 2;
      return 3;
    }

    function setSlideSizes() {
      var vis = visibleCount();
      var containerW = el.offsetWidth;
      var sw = (containerW - (vis - 1) * GAP_PX) / vis;
      slides.forEach(function (slide) {
        slide.style.width = sw + "px";
      });
    }

    function stepWidth() {
      return slides[0] ? slides[0].offsetWidth + GAP_PX : 0;
    }

    function maxIndex() {
      return Math.max(0, total - visibleCount());
    }

    function goTo(index) {
      if (index < 0) index = maxIndex();
      if (index > maxIndex()) index = 0;
      current = index;
      track.style.transform = "translateX(-" + (current * stepWidth()) + "px)";
      slides.forEach(function (slide, i) {
        var vis = i >= current && i < current + visibleCount();
        slide.setAttribute("aria-hidden", vis ? "false" : "true");
      });
      if (currentEl) currentEl.textContent = current + 1;
    }

    // Init sizes, then re-measure on resize
    setSlideSizes();
    window.addEventListener("resize", function () {
      setSlideSizes();
      goTo(Math.min(current, maxIndex()));
    });

    function startTimer() {
      timer = setInterval(function () { goTo(current + 1); }, 7000);
    }

    function resetTimer() {
      clearInterval(timer);
      startTimer();
    }

    if (prevBtn) prevBtn.addEventListener("click", function () { goTo(current - 1); resetTimer(); });
    if (nextBtn) nextBtn.addEventListener("click", function () { goTo(current + 1); resetTimer(); });

    // Pause on hover
    el.addEventListener("mouseenter", function () { clearInterval(timer); });
    el.addEventListener("mouseleave", function () { startTimer(); });

    // Keyboard nav
    el.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { goTo(current - 1); resetTimer(); }
      if (e.key === "ArrowRight") { goTo(current + 1); resetTimer(); }
    });

    // Touch/swipe
    var touchStartX = 0;
    el.addEventListener("touchstart", function (e) {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    el.addEventListener("touchend", function (e) {
      var delta = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) > 50) { goTo(delta < 0 ? current + 1 : current - 1); resetTimer(); }
    });

    goTo(0);
    startTimer();
  }

  document.querySelectorAll(".carousel").forEach(initCarousel);

  // Reveal on scroll (respects reduced motion)
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var targets = document.querySelectorAll(".reveal, .section, .hero .lede, .hero-actions");
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
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });

  targets.forEach(function (el) { io.observe(el); });

  // Safety net
  window.setTimeout(function () {
    targets.forEach(function (el) { el.classList.add("is-in"); });
  }, 1600);

})();
