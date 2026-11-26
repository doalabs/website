/* DOA Labs — cases shown on the site. Edit this list to add, reorder or update cases.
   kind: the type of solution (what the client buys) — drives the filter on /feina/.
   format: "mobil" (shown inside a phone), "web" (browser view) or "tauler" (dashboard view).
   sector: who it is for — drives the filter on /feina/ and the doors on the home page:
   "Comerç i hostaleria" | "Immobiliari" | "Despatxos i professionals" | "Clubs i esport" | "Formació".
   status: "En marxa" | "Beta" | "Llançament" | "En desenvolupament" | "Prototip"
   Do not label projects as "own product": the site shows solutions, not ownership.
   shot: image in /assets/shots/. Empty shot = dark tile with the name.
   demo: optional link to a live demo hosted in /demos/<slug>/; the card opens it. */
window.DOA_PROJECTS = [
  { slug: "whalbar", name: "Whalbar", kind: "Agents i eines amb IA", format: "mobil", sector: "Comerç i hostaleria", status: "En marxa", featured: true, page: "/feina/whalbar/", demo: "/demos/whalbar/",
    line: "Un agent que viu a WhatsApp: el restaurador envia la foto de l'albarà i en uns segons sap quin proveïdor li ha apujat el preu.",
    shot: "/assets/shots/whalbar-chat.jpg" },
  { slug: "cami-al-14", name: "Camí al 14", kind: "Acadèmies en línia", format: "mobil", sector: "Formació", status: "En desenvolupament", featured: true, demo: "/demos/cami-al-14/",
    line: "El professor de reforç que sap on falles: de 4t d'ESO a la PAU, amb exercicis corregits per IA i nota estimada per tema. Per a famílies i AMPES.",
    shot: "/assets/shots/cami-al-14.jpg" },
  { slug: "whalbar-panell", name: "Panell Whalbar", kind: "Eines de gestió a mida", format: "tauler", sector: "Comerç i hostaleria", status: "En marxa", page: "/feina/whalbar/",
    line: "El tauler que acompanya l'agent: què t'han cobrat de més aquest mes, per proveïdor, i el missatge de reclamació a punt.",
    shot: "/assets/shots/whalbar-panell.jpg" },
  { slug: "daniela-meriuta", name: "Daniela Meriuta", kind: "Webs que porten clients", format: "web", sector: "Immobiliari", status: "En marxa", featured: true,
    line: "Per a una assessora immobiliària de luxe: web per a compradors internacionals, generació de contactes i processos automatitzats.",
    shot: "/assets/shots/daniela-meriuta.jpg" },
  { slug: "3-viles", name: "Club Bàsquet 3 Viles", kind: "Fidelització i ingressos", format: "mobil", sector: "Clubs i esport", status: "En desenvolupament", featured: true, demo: "/demos/carnet-fan/",
    line: "Per a un club de bàsquet: tauler de gestió (quotes, pressupost, subvencions, botiga) i carnets de fan al mòbil amb descomptes al comerç local.",
    shot: "/assets/shots/3-viles-fan.jpg" },
  { slug: "swishcoach", name: "SwishCoach", kind: "Agents i eines amb IA", format: "mobil", sector: "Clubs i esport", status: "En marxa", featured: true,
    line: "Per a Endora Biotech Sports: anàlisi de la mecànica de tir amb la càmera del mòbil (visió per computador) i tauler per a entrenadors.",
    shot: "/assets/shots/swishcoach.jpg" },
  { slug: "aea", name: "AEA", kind: "Acadèmies en línia", format: "tauler", demo: "/demos/aea/", sector: "Formació", status: "Llançament", featured: true,
    line: "Acadèmia en línia amb cursos, simulacres cronometrats i correcció amb IA. El professor prepara el contingut; la plataforma fa la resta.",
    shot: "/assets/shots/aea.jpg" },
  { slug: "milo", name: "Milo", kind: "Agents i eines amb IA", format: "mobil", demo: "/demos/milo/", sector: "Despatxos i professionals", status: "Beta",
    line: "Un assistent de despeses al mòbil: et pregunta, contestes amb un toc, una nota de veu o la foto del tiquet, i ho ordena tot sol.",
    shot: "/assets/shots/milo.jpg" },
  { slug: "sam-brindle", name: "Sam Brindle Coaching", kind: "Webs que porten clients", format: "web", sector: "Despatxos i professionals", status: "En marxa",
    line: "Web, recurs gratuït amb notes de veu, sistema de correu i tauler per a un coach que acompanya pares en un divorci.",
    shot: "/assets/shots/sam-brindle.jpg" },
  { slug: "viure-al-maresme", name: "Viure al Maresme", kind: "Webs que porten clients", format: "web", sector: "Immobiliari", status: "En marxa", featured: true, demo: "/demos/viure-al-maresme/",
    line: "Agència immobiliària amb tarifa fixa de 6.000 € + IVA: calculadora d'estalvi, valoració al moment, portal del venedor amb visites i ofertes, i arres en 3 mesos.",
    shot: "/assets/shots/viure-al-maresme.jpg" },
  { slug: "court-commander", name: "Court Commander", kind: "Agents i eines amb IA", format: "mobil", sector: "Clubs i esport", status: "En desenvolupament",
    line: "Preparació de partits amb IA per a entrenadors: quintets, rotacions i informe del rival a partir de les actes.",
    shot: "/assets/shots/court-commander.jpg" },
  { slug: "repla", name: "Replà", kind: "Agents i eines amb IA", format: "mobil", sector: "Despatxos i professionals", status: "Prototip",
    line: "Per a despatxos d'administració de finques: un agent que rep els avisos dels veïns per WhatsApp, detecta duplicats, avisa el proveïdor i informa l'administrador. Aparcat després d'una auditoria de mercat: primer validem, després construïm.",
    shot: "/assets/shots/repla.svg" }
];
