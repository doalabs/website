/* DOA Labs — renders project cards and the sector filter. No dependencies. */
(function () {
  var DOTS = { "En marxa": "var(--live)", "Beta": "var(--beta)", "Llançament": "var(--beta)", "En desenvolupament": "var(--dev)", "Aturat": "var(--paused)" };
  // Work-page filter groups cases by the kind of solution, which is what a client is looking for
  var FILTER_KEY = "kind";
  var all = window.DOA_PROJECTS || [];

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else if (k === "style") n.style.cssText = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }

  function card(p) {
    var paused = p.status === "Aturat";
    var shot = el("div", { "class": "shot" + (paused ? " paused" : "") }, [
      el("span", { "class": "fallback", "aria-hidden": "true", text: p.name })
    ]);
    if (p.shot) {
      var img = el("img", { src: p.shot, alt: "Captura de " + p.name, loading: "lazy", decoding: "async" });
      img.addEventListener("load", function () { shot.querySelector(".fallback").style.display = "none"; });
      img.addEventListener("error", function () { img.remove(); });
      shot.insertBefore(img, shot.firstChild);
    }
    var tagName = p.page ? "a" : "article";
    var attrs = { "class": "project" };
    if (p.page) attrs.href = p.page;
    return el(tagName, attrs, [
      shot,
      el("h3", { text: p.name }),
      el("div", { "class": "meta" }, [
        el("span", { text: p.kind + " · " + p.sector }),
        el("span", { "class": "status" }, [
          el("span", { "class": "dot", "aria-hidden": "true", style: "background:" + (DOTS[p.status] || "var(--paused)") }),
          document.createTextNode(p.status)
        ])
      ]),
      el("p", { text: p.line })
    ]);
  }

  function render(container, list) {
    container.textContent = "";
    list.forEach(function (p) { container.appendChild(card(p)); });
  }

  // Featured on the home page
  var featured = document.querySelector("[data-projects='featured']");
  if (featured) render(featured, all.filter(function (p) { return p.featured; }));

  // Any page that lists a sector (e.g. /immobiliari)
  document.querySelectorAll("[data-projects-sector]").forEach(function (c) {
    var s = c.getAttribute("data-projects-sector");
    render(c, all.filter(function (p) { return p.sector === s; }));
  });

  // Work page with filter
  var grid = document.querySelector("[data-projects='all']");
  var filters = document.querySelector("[data-filters]");
  if (grid && filters) {
    var sectors = ["Tots"];
    all.forEach(function (p) { if (sectors.indexOf(p[FILTER_KEY]) < 0) sectors.push(p[FILTER_KEY]); });
    var current = "Tots";
    var buttons = sectors.map(function (s) {
      var count = s === "Tots" ? all.length : all.filter(function (p) { return p[FILTER_KEY] === s; }).length;
      var b = el("button", { type: "button", "class": "chip", "aria-pressed": s === current ? "true" : "false" }, [
        document.createTextNode(s), el("span", { text: String(count) })
      ]);
      b.addEventListener("click", function () {
        current = s;
        buttons.forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        render(grid, all.filter(function (p) { return s === "Tots" || p[FILTER_KEY] === s; }));
      });
      filters.appendChild(b);
      return b;
    });
    render(grid, all);
  }

  // Booking embed: set DOA_BOOKING_URL in /assets/config.js
  var booking = document.querySelector("[data-booking]");
  if (booking && window.DOA_BOOKING_URL) {
    booking.appendChild(el("iframe", { src: window.DOA_BOOKING_URL, title: "Calendari per demanar cita", loading: "lazy" }));
    var fb = document.querySelector("[data-booking-fallback]");
    if (fb) fb.hidden = true;
  }
})();
