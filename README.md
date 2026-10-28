# DOA Labs · website

Public website for **DOA Labs SLU**: business and AI consulting for small businesses, from Sant Andreu de Llavaneres (Maresme).

Status: **v1 built as a static site** (plain HTML/CSS/JS, no build step, no dependencies). Hosted on Netlify from this repo (public repo, free plan). The Lovable prompt for a future admin version lives in `doalabs/playbook/builds/`.

## Editing
- Projects: `assets/projects.js` (add, reorder, change status or text; `featured: true` shows it on the home page).
- Settings: `assets/config.js` (booking calendar URL, contact email).
- Styles: `assets/styles.css` (design tokens at the top).
- Live demos: one self-contained page per project in `demos/<slug>/index.html`, linked from the card with `demo:` in `assets/projects.js`. Each demo has a fixed "Tornar a DOA Labs" button and its booking button points to `/cita/`.
- Pages: `index.html`, `feina/`, `feina/whalbar/`, `immobiliari/`, `cita/`, `privacitat/`, `avis-legal/`, `404.html`.

## Positioning
- **Line:** *Tu fes la teva feina. El sistema fa la resta.*
- **Promise:** I listen, we look at it together, I make a proposal, we agree it, I build it in your name, and then it runs on its own.
- **Proof:** 30+ websites, apps, agents and tools built; 10+ years selling property on the Maresme coast; 13 years running seven bars, restaurants and beach clubs; one year at Oracle EMEA (Dublin); Localret.
- **Doors:** property agents (second door, own landing) · clubs & associations · coaches & services · hospitality.

## Languages
Catalan first, then Spanish and English (switcher CA · ES · EN). ES and EN copy follow once the Catalan version is approved.

## Pages
Home · Feina (work, filter by sector) · case study pages · Què faig · Com treballem · Preus · Qui sóc · Demana cita (booking calendar; first appointment free, in person in the Maresme or by video; no free phone call) · Privacitat / Galetes / Avís legal.

## Pricing shown
Inici 900 € (26 h) · Creixement 1.250 € (36 h) · Complet 1.700 € (48 h) · extra AI workflow 220 €. Launch rate, first 5 clients. Standard 50 €/h; out-of-scope changes 50 €/h quoted first. Payment 40 / 30 / 30.

## Target and message
- **Who:** small businesses (pimes), shops and self-employed people (autònoms) in the Maresme and Barcelona; sectors known from inside: real estate, hospitality and retail, clubs and associations, professionals and trainers.
- **Pain:** paying every month for big tools they half use, re-typing data, answering the same questions on WhatsApp, not being found, not knowing where to start with AI.
- **Promise:** I analyse your business, your image and the tools you pay for, and build what you really need: automated, in your name, no monthly licences. You save time and money and modernise.
- **Solutions:** diagnosis and advice · custom management tools (ERP/CRM-like dashboards) · AI agents (WhatsApp, documents, photos) · process automation · websites that bring clients · online academies · loyalty and new revenue (digital fan cards).

## Cases shown (no "own product" labels; the site shows solutions, not ownership)
Whalbar (AI agent, hospitality) · Daniela Meriuta (website and lead capture, real estate) · Club Bàsquet 3 Viles (custom management tool) · SwishCoach (AI app, for Endora Biotech Sports) · AEA (online academy) · Fan cards (loyalty and revenue for clubs) · Sam Brindle Coaching · Camí al 14 (study platform for AMPAs) · Viure al Maresme · PropPulse · Court Commander.
Not shown: MDO, SUMA Llar, Puerto, Milo, Prego, Ajudes Clares, My Digital Me, Matchday Journal Builder.

## Design system (do not drift)
- Colours: ground `#F2F0EA` · surface `#FFFFFF` · ink / dark band `#121412` · dark surface `#1C1F1D` · muted `#575C57` · on-dark muted `#A9AEA8` · lines `#D9D6CC` · accent `#FF6A2B` (fills and large type only; never small text on light ground)
- Status dots: live `#2E9E5B` · beta `#C98A00` · in development `#3D6FE0` · paused `#8A8F89` (always with a text label)
- Type: Archivo 800 for headlines (tight tracking), Archivo for body, JetBrains Mono for labels and numbers
- Shapes: 16–24 px radii on cards, pill buttons, 44 px minimum touch targets, max width 1240 px
- Forbidden: gradients, purple/blue tech palettes, glassmorphism, emoji, stock photos of people, left-border accent cards, sparkle or robot icons
- Images: real screenshots of each project; real photo of Dani

## Voice
Plain and practical, one business owner to another. Concrete numbers, euros, hours, real screens. Never: revolucionar, disruptiu, "potenciat per IA" as a headline, SaaS/ERP/LLM jargon.

## Stack
Static site in this repo (`doalabs/website`), hosted on Netlify. Booking: Cal.com `cal.com/doalabs/primera-cita` (30 min, free, Mitico Spaces or video). Email: Resend from hola@[domain]. Domain: doalabs.eu (Namecheap), connected to Netlify.

## Open
- [ ] DNS for doalabs.eu at Namecheap (ALIAS @ → apex-loadbalancer.netlify.com, CNAME www → doalabs.netlify.app)
- [ ] Contact email shown as hola@doalabs.eu until the domain is decided
- [ ] ES and EN versions
- [ ] Registered address and CIF (Mitico Spaces as company address?)
