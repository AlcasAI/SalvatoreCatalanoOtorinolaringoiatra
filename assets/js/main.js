/* =========================================================================
   Dr. Salvatore Catalano — script principale
   Nessuna dipendenza esterna. Solo interazioni di base.
   ========================================================================= */
(function () {
  "use strict";

  /* --- Anno corrente nel footer --- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* --- Menu mobile --- */
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("main-nav");

  function closeNav() {
    if (!nav || !toggle) return;
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Apri il menu");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Chiudi il menu" : "Apri il menu");
    });

    /* Chiudi il menu quando si clicca un link */
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeNav();
    });

    /* Chiudi con il tasto ESC */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
  }

  /* --- Ombra dell'header allo scroll --- */
  var header = document.getElementById("site-header");
  if (header) {
    var onScroll = function () {
      header.style.boxShadow = window.scrollY > 8 ? "0 6px 20px rgba(15,42,51,.08)" : "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* --- Animazioni di entrata allo scroll (rispetta prefers-reduced-motion) --- */
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !prefersReduced) {
    var selector = ".section-head, .card, .pat-group, .sede-card, .review, " +
                   ".area-list li, .feature .col-text, .feature .col-media, " +
                   ".hero-content, .hero-card, .credentials, .contact-form";
    var els = document.querySelectorAll(selector);
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    els.forEach(function (el, i) {
      el.classList.add("reveal");
      el.style.transitionDelay = (i % 4) * 70 + "ms";
      io.observe(el);
    });
  }
})();
