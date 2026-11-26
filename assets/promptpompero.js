/* Prompt Pompero — recipes to copy into ChatGPT, Claude or Gemini. Edit the list below; nothing else needs touching.
   Each recipe: sector (one of SECTORS), title, needs (what the person attaches), gets (what they get back), prompt, optional hook {text, href}. */
(function () {
  var SECTORS = {
    "Comerç i hostaleria": { text: "Whalbar revisa cada albarà sol, per WhatsApp, i t'avisa quan un preu puja.", href: "/feina/whalbar/", cta: "Mira Whalbar" },
    "Immobiliari": { text: "Captació, valoracions, dossiers i seguiment que funcionen sols, a nom teu.", href: "/immobiliari/", cta: "Solucions per a immobiliàries" },
    "Despatxos i professionals": { text: "Contingut, atenció i números que surten sols cada setmana.", href: "/feina/?sector=Despatxos%20i%20professionals", cta: "Mira els casos" },
    "Clubs i esport": { text: "Carnets de fan, patrocinadors i eines per als entrenadors, sense hores de més.", href: "/demos/carnet-fan/", cta: "Prova el carnet de fan" },
    "Formació": { text: "Una plataforma d'estudi que fa tot això cada dia, adaptada a cada alumne.", href: "/demos/cami-al-14/", cta: "Prova Camí al 14" }
  };

  var RECIPES = [
    /* Comerç i hostaleria */
    { sector: "Comerç i hostaleria", title: "El menú de demà, amb el que tens a la cambra",
      needs: "Foto de la cambra o del rebost", gets: "Un menú del dia llest per a la pissarra",
      prompt: "Mira aquesta foto de la meva cambra. Proposa 3 primers, 3 segons i 2 postres per al menú de demà fent servir sobretot el que està a punt de caducar. El menú val [14 €]. Escriu-lo llest per a la pissarra, amb noms que facin venir gana." },
    { sector: "Comerç i hostaleria", title: "Enxampa el proveïdor",
      needs: "Fotos de l'albarà d'avui i d'un del mes passat", gets: "Què ha pujat, quant et costa al mes i el missatge per reclamar",
      prompt: "Compara aquests dos albarans del mateix proveïdor. Digues-me quins productes han pujat de preu, quant en % i quant em costa al mes si compro el mateix cada setmana. Després escriu-me un WhatsApp educat per demanar-li explicacions.",
      hook: { text: "Whalbar ho fa sol amb cada albarà", href: "/feina/whalbar/" } },
    { sector: "Comerç i hostaleria", title: "Què guanyes amb cada plat",
      needs: "Foto de la carta i la llista de preus de compra", gets: "El marge de cada plat i com reordenar la carta",
      prompt: "Amb aquesta carta i aquests preus de compra, calcula el cost aproximat de cada plat i el marge que em deixa. Digues-me els 3 plats que més em fan guanyar i els 3 que gairebé no em deixen res. Suggereix com recol·locar-los a la carta perquè es venguin més els bons." },
    { sector: "Comerç i hostaleria", title: "El que diuen de tu a Google",
      needs: "Captures de les últimes 20–30 ressenyes", gets: "Què agrada, què es repeteix i les respostes fetes",
      prompt: "Llegeix aquestes ressenyes del meu local. Digues-me les 3 coses que més agraden, les 3 queixes que es repeteixen i una acció concreta per a cada queixa. Després escriu respostes curtes per a les ressenyes negatives, amables i sense sonar a robot." },
    { sector: "Comerç i hostaleria", title: "La carta per als turistes",
      needs: "Foto de la carta", gets: "La carta en anglès, francès i alemany, llesta per imprimir",
      prompt: "Tradueix aquesta carta a l'anglès, el francès i l'alemany, però no literal: explica en una línia els plats típics que un estranger no coneixeria (calçots, esqueixada, crema catalana…). Marca els al·lèrgens que detectis pels ingredients. Format llest per imprimir.",
      warn: "Els al·lèrgens que proposa la IA són orientatius: revisa'ls tu, la responsabilitat és del local." },
    { sector: "Comerç i hostaleria", title: "De l'aparador a Instagram",
      needs: "Foto del producte o de l'aparador", gets: "Un post, una història i la fitxa per a la web",
      prompt: "Mira aquesta foto d'un producte de la meva botiga a [Mataró]. Escriu: 1) un post d'Instagram curt i proper, amb 5 etiquetes locals; 2) un text de 2 línies per a una història; 3) una fitxa de producte per a la web amb el que es veu a la foto. Preu: [35 €]." },

    /* Immobiliari */
    { sector: "Immobiliari", title: "L'anunci, des de les fotos",
      needs: "8–10 fotos del pis", gets: "Anunci per al portal, versió en anglès i quines fotos repetir",
      prompt: "Amb aquestes fotos, escriu un anunci per a Idealista d'un pis de [3 hab, 90 m², Mataró, 260.000 €]. Destaca el que es veu bé i no inventis res que no surti a les fotos. Fes també una versió en anglès per a un comprador estranger i digues-me quines fotos hauria de tornar a fer i per què." },
    { sector: "Immobiliari", title: "La nota simple, explicada fàcil",
      needs: "Foto o PDF de la nota simple", gets: "Titulars, càrregues i alertes en llenguatge planer",
      prompt: "Resumeix aquesta nota simple: qui en són els titulars, quines càrregues, hipoteques o embargaments té i qualsevol cosa estranya que hagi de revisar. Explica-ho com si li ho estiguessis explicant al comprador, en frases curtes.",
      warn: "És una primera lectura: abans de signar res, que ho revisi un professional." },
    { sector: "Immobiliari", title: "Baixar el propietari del núvol",
      needs: "Captures de 5–6 pisos semblants al portal", gets: "Un rang de preu realista i el missatge per convèncer-lo",
      prompt: "El meu propietari vol demanar [420.000 €] pel seu pis de [4 hab, 120 m², Llavaneres]. Amb aquests pisos semblants, dona'm un rang de preu realista i justifica'l. Després escriu un missatge respectuós, amb dades, per convèncer-lo d'ajustar el preu sense que se senti atacat." },
    { sector: "Immobiliari", title: "De l'àudio caòtic a la fitxa del comprador",
      needs: "La transcripció de l'àudio de WhatsApp del client", gets: "Una fitxa de cerca clara i les preguntes que et falten",
      prompt: "Converteix aquest missatge d'un client en una fitxa de cerca: zona, pressupost, imprescindibles, desitjables i el que descarta. Després digues-me quines preguntes li hauria de fer per acabar d'entendre què busca." },

    /* Despatxos i professionals */
    { sector: "Despatxos i professionals", title: "D'una sessió a un article",
      needs: "Les teves notes d'una sessió o d'una consulta (sense noms)", gets: "Un post i un correu per a la newsletter",
      prompt: "Aquestes són les meves notes d'una sessió amb un client (sense dades personals). Converteix la idea principal en: 1) un post de LinkedIn o Instagram en primera persona, proper i útil; 2) un correu curt per a la meva newsletter amb un consell pràctic. El meu to és [proper i directe]." },
    { sector: "Despatxos i professionals", title: "Els tiquets del trimestre, ordenats",
      needs: "Fotos dels tiquets i factures", gets: "Una taula per a la gestoria, per categories",
      prompt: "Llegeix aquests tiquets i factures. Fes una taula amb data, proveïdor, concepte, base, IVA i total, i agrupa-ho per categories (desplaçaments, material, dietes, programari…). Al final, el total per categoria. Marca els tiquets que no es llegeixin bé.",
      hook: { text: "Mira Milo, l'assistent de despeses", href: "/demos/milo/" } },
    { sector: "Despatxos i professionals", title: "El correu que no saps com respondre",
      needs: "El correu del client, enganxat", gets: "Una resposta clara, amable i amb el pas següent",
      prompt: "Aquest client m'ha escrit això: [enganxa el correu]. Respon-li amb calma, sense donar-li la raó en el que no té, explicant què farem i quan. Màxim 8 línies. Fes-me'n dues versions: una més formal i una més propera." },

    /* Clubs i esport */
    { sector: "Clubs i esport", title: "La crònica del partit",
      needs: "Foto de l'acta i 3 frases teves del partit", gets: "Una crònica per a la web i un post per a les xarxes",
      prompt: "Amb aquesta acta i aquestes notes, escriu la crònica del partit de l'equip [Mini Femení] del club [nom]. Positiva, centrada en l'equip i l'esforç. Fes servir només els noms de pila, sense cognoms. Després fes-ne un post curt per a Instagram." },
    { sector: "Clubs i esport", title: "La carta als patrocinadors",
      needs: "Les dades del club: equips, famílies, partits i xarxes", gets: "Una proposta de patrocini amb tres nivells",
      prompt: "Som un club de [bàsquet formatiu] a [Arenys de Mar] amb [300] jugadors, [600] famílies i [40] partits a casa per temporada. Escriu una carta per a comerços del poble proposant tres nivells de patrocini ([150 €], [400 €] i [900 €]) amb el que rep cada un. To proper, de veí a veí, no de gran empresa." },
    { sector: "Clubs i esport", title: "El comunicat a les famílies",
      needs: "Què ha canviat (horari, pista, quota…)", gets: "Un missatge clar en català i castellà",
      prompt: "Escriu un missatge per al grup de famílies explicant aquest canvi: [els entrenaments dels dimecres passen a les 18.30 al pavelló nou]. Clar i curt, amb el que han de fer ells. En català i en castellà, i una versió encara més curta per a WhatsApp." },

    /* Formació */
    { sector: "Formació", title: "Dels apunts a un test",
      needs: "Fotos dels apunts o del tema", gets: "10 preguntes amb les solucions explicades",
      prompt: "Amb aquests apunts, fes-me un test de 10 preguntes de resposta múltiple, de més fàcil a més difícil. No em diguis les respostes fins que t'escrigui les meves. Després corregeix-me i explica'm cada error en dues frases." },
    { sector: "Formació", title: "Explica-m'ho com si tingués 14 anys",
      needs: "Foto de la pàgina del llibre que no s'entén", gets: "La mateixa idea, explicada fàcil i amb un exemple",
      prompt: "Explica'm aquesta pàgina com si tingués 14 anys: frases curtes, un exemple de la vida real i un resum de 3 punts al final. Si hi ha fórmules, explica què vol dir cada lletra." },
    { sector: "Formació", title: "El pla d'estudi fins a l'examen",
      needs: "Les dates dels exàmens i els temes", gets: "Un calendari d'estudi dia a dia, realista",
      prompt: "Tinc aquests exàmens: [Mates 12/12 temes 3-5, Història 15/12 temes 4-6]. Puc estudiar [1 h i mitja] els dies feiners i [3 h] el cap de setmana. Fes-me un pla dia a dia, amb repassos, i deixa el dia abans de cada examen només per repassar." }
  ];

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }

  function copy(text, btn) {
    var done = function () { btn.textContent = "Copiada"; setTimeout(function () { btn.textContent = "Copia la recepta"; }, 1800); };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done, function () { fallback(text); done(); });
    } else { fallback(text); done(); }
  }
  function fallback(text) {
    var t = el("textarea", { "aria-hidden": "true", style: "position:fixed;opacity:0" });
    t.value = text; document.body.appendChild(t); t.select();
    try { document.execCommand("copy"); } catch (e) {}
    t.remove();
  }

  function card(r) {
    var btn = el("button", { type: "button", "class": "btn btn-ink btn-sm", text: "Copia la recepta" });
    btn.addEventListener("click", function () { copy(r.prompt, btn); });
    return el("article", { "class": "pp-card" }, [
      el("div", { "class": "pp-meta mono", text: r.sector }),
      el("h3", { text: r.title }),
      el("dl", { "class": "pp-io" }, [
        el("div", {}, [el("dt", { text: "Què hi poses" }), el("dd", { text: r.needs })]),
        el("div", {}, [el("dt", { text: "Què n'obtens" }), el("dd", { text: r.gets })])
      ]),
      el("p", { "class": "pp-prompt", text: r.prompt }),
      r.warn ? el("p", { "class": "pp-warn", text: r.warn }) : null,
      el("div", { "class": "pp-actions" }, [
        btn,
        r.hook ? el("a", { "class": "more", href: r.hook.href, text: r.hook.text + " →" }) : null
      ])
    ]);
  }

  function upsell(sector) {
    var s = SECTORS[sector];
    if (!s) return null;
    return el("aside", { "class": "pp-upsell" }, [
      el("div", {}, [
        el("div", { "class": "label", text: "Ho vols cada dia, sense pensar-hi?" }),
        el("p", { text: s.text })
      ]),
      el("div", { "class": "btns" }, [
        el("a", { "class": "btn btn-accent btn-sm", href: s.href, text: s.cta + " →" }),
        el("a", { "class": "btn btn-line btn-sm", href: "/cita/", text: "Demana cita" })
      ])
    ]);
  }

  var list = document.querySelector("[data-pp-list]");
  var filters = document.querySelector("[data-pp-filters]");
  if (!list || !filters) return;

  var order = Object.keys(SECTORS);
  var names = ["Tots"].concat(order);
  var wanted = new URLSearchParams(location.search).get("sector");
  var current = names.indexOf(wanted) > -1 ? wanted : "Tots";

  function render() {
    list.textContent = "";
    order.forEach(function (s) {
      if (current !== "Tots" && current !== s) return;
      var items = RECIPES.filter(function (r) { return r.sector === s; });
      if (!items.length) return;
      var group = el("section", { "class": "pp-group", "aria-label": s }, [el("h2", { "class": "pp-sector", text: s })]);
      var grid = el("div", { "class": "pp-grid" });
      items.forEach(function (r) { grid.appendChild(card(r)); });
      group.appendChild(grid);
      group.appendChild(upsell(s));
      list.appendChild(group);
    });
  }

  var buttons = names.map(function (s) {
    var count = s === "Tots" ? RECIPES.length : RECIPES.filter(function (r) { return r.sector === s; }).length;
    var b = el("button", { type: "button", "class": "chip", "aria-pressed": s === current ? "true" : "false" }, [s, el("span", { text: String(count) })]);
    b.addEventListener("click", function () {
      current = s;
      buttons.forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      var url = new URL(location.href);
      if (s === "Tots") url.searchParams.delete("sector"); else url.searchParams.set("sector", s);
      history.replaceState(null, "", url);
      render();
    });
    filters.appendChild(b);
    return b;
  });
  render();
})();
