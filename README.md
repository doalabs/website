# DOA Labs · website

Public website for **DOA Labs SLU**: business and AI consulting for small businesses, from Sant Andreu de Llavaneres (Maresme).

Status: **v1 built as a static site** (plain HTML/CSS/JS, no build step, no dependencies). Hosted on Netlify from this repo (public repo, free plan). The Lovable prompt for a future admin version lives in `doalabs/playbook/builds/`.

## Editing
- Projects: `assets/projects.js` (add, reorder, change status or text; `featured: true` shows it on the home page).
- Settings: `assets/config.js` (booking calendar URL, contact email).
- Styles: `assets/styles.css` (design tokens at the top).
- Pages: `index.html`, `feina/`, `feina/whalbar/`, `immobiliari/`, `cita/`, `privacitat/`, `avis-legal/`, `404.html`.

## Positioning
- **Line:** *Tu fes la teva feina. El sistema fa la resta.*
- **Promise:** I listen, we look at it together, I make a proposal, we agree it, I build it in your name, and then it runs on its own.
- **Proof:** 16 products and client systems built; 10+ years selling property on the Maresme coast; 13 years running seven bars, restaurants and beach clubs; one year at Oracle EMEA (Dublin); Localret.
- **Doors:** property agents (second door, own landing) · clubs & associations · coaches & services · hospitality.

## Languages
Catalan first, then Spanish and English (switcher CA · ES · EN). ES and EN copy follow once the Catalan version is approved.

## Pages
Home · Feina (work, filter by sector) · case study pages · Què faig · Com treballem · Preus · Qui sóc · Demana cita (booking calendar; first appointment free, in person in the Maresme or by video; no free phone call) · Privacitat / Galetes / Avís legal.

## Pricing shown
Inici 900 € (26 h) · Creixement 1.250 € (36 h) · Complet 1.700 € (48 h) · extra AI workflow 220 €. Launch rate, first 5 clients. Standard 50 €/h; out-of-scope changes 50 €/h quoted first. Payment 40 / 30 / 30.

## Portfolio (status · tag)
| Sector | Project | Tag | Status |
|---|---|---|---|
| Coaching | Sam Brindle Coaching | Client | Live |
| Clubs i esport | SwishCoach | Co-founded · Endora Biotech Sports SL | Live |
| | 3 Viles → Fan Club Connect | Client → Own | In development |
| | Court Commander | Own | In development |
| | Matchday Journal Builder | Own | Live |
| Immobiliari | MDO Property Consultants | Client → Own | In development |
| | Viure al Maresme | Own | Live |
| | SUMA Llar | Own | Live |
| | PropPulse | Own | Live |
| Hostaleria | Whalbar | Own | Live |
| Marques i botiga | Puerto | Own | Live |
| Formació | AEA | Own | Launching |
| Finances personals | Milo | Own | Beta |
| Municipis | Ajudes Clares | Own | In development |
| | Prego | Own | Paused |
| Privacitat | My Digital Me | Own | Paused |

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
Static site in this repo (`doalabs/website`), hosted on Netlify. Booking: Cal.com `cal.com/doalabs/primera-cita` (30 min, free, Mitico Spaces or video). Email: Resend from hola@[domain]. Domain: doa-labs.com or doalabs.eu [to decide].

## Open
- [ ] Domain: doa-labs.com or doalabs.eu
- [ ] Screenshots: currently loaded from Lovable's screenshot links; save them into assets/shots/ so they don't break
- [ ] Contact email shown as hola@doalabs.eu until the domain is decided
- [ ] ES and EN versions
- [ ] Registered address and CIF (Mitico Spaces as company address?)
