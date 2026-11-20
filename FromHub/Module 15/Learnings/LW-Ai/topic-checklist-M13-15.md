# Cross-Module Topic Checklist — M13 · M14 · M15

**Built:** 19 Nov 2026 · **Sources:** `Module 13/14/15 → Learnings/RAW/RAW-Technical.md` (read verbatim, not from memory)
**Purpose:** one linear list — revise the theory, do the practical, tick it, move on. No more jumping between sources.

**How to tick:** an item is done only when (a) you said the definition out loud in your own words, and (b) the practical ran in the browser/terminal. Reading alone does not tick.

**Time basis (`assumed`):** minutes = revise the theory once + type the practical once, for someone who has already built that module's project. First-time learning is ~50% more. Estimates are my calibration, not measured.

---

## Module 13 — React basics (4 topics · **6 h 45**)

| # | Topic | Theory | Practical | Est | Done |
|---|---|---|---|---|---|
| 13.1 | Vite — what it is, vs CRA, project init, `vite.config.js` structure | 20 m | 25 m | **45 m** | [ ] |
| 13.2 | Core React — SPA/CSR, functional components, render cycle & re-render, props vs state, lifecycle, JSX, DOM events | 50 m | 70 m | **2 h** | [ ] |
| 13.3 | Hooks — `useState`, `useEffect`, `useRef`: syntax, purpose, usage | 40 m | 50 m | **1 h 30** | [ ] |
| 13.4 | **To-Do app** — add/update/delete/display, mark complete, deadlines, overdue toast | — | 2 h 30 | **2 h 30** | [ ] |

## Module 14 — Routing, Context, patterns, build (7 topics · **10 h 30**)

| # | Topic | Theory | Practical | Est | Done |
|---|---|---|---|---|---|
| 14.1 | React Router DOM — routes, navigation, params, nested `Outlet`, dynamic paths | 30 m | 60 m | **1 h 30** | [ ] |
| 14.2 | Context API + hooks — create/use Context, `useContext`, `useNavigate`, `useParams`, `useCallback`, `useMemo`, global auth state | 50 m | 70 m | **2 h** | [ ] |
| 14.3 | Advanced patterns — custom hooks, HOC | 30 m | 30 m | **1 h** | [ ] |
| 14.4 | Build tools — Babel, Webpack | 30 m | 15 m | **45 m** | [ ] |
| 14.5 | How React projects are bundled | 30 m | — | **30 m** | [ ] |
| 14.6 | Build + serve a production-ready app | 15 m | 30 m | **45 m** | [ ] |
| 14.7 | **Blog app** — Firebase Auth + Context, Firestore CRUD, routing, build/deploy | — | 4 h | **4 h** | [ ] |

## Module 15 — Redux, middleware, errors, stores, projects (6 topics · **6 h 15**)

| # | Topic | Theory | Practical | Est | Done |
|---|---|---|---|---|---|
| 15.1 | Redux core — why it exists, data flow, store config, reducers/actions/dispatch | 40 m | 50 m | **1 h 30** | [x] |
| 15.2 | Middleware & DevTools — Thunk, what middleware sits between, time-travel debugging | 25 m | 20 m | **45 m** | [x] |
| 15.3 | Errors & validation — Error Boundaries, StrictMode, React Hook Form (state + basic validation) | 50 m | 40 m | **1 h 30** | [ ] — ErrorBoundary ✔ verified, StrictMode ✔ theory, **RHF parked** |
| 15.4 | **OLX-like e-commerce** — auth+JWT in Redux, sell, listing+filters, cart, checkout, RHF, Express error middleware | — | 1 h (already built; from scratch 6 h) | **1 h** | [ ] |
| 15.5 | Zustand — `create`, no boilerplate, read/update via hooks | 25 m | 20 m | **45 m** | [ ] |
| 15.6 | MobX — why, observables/actions/computed/reactions, React integration, `makeObservable` vs `makeAutoObservable` | 30 m | 15 m | **45 m** | [ ] |

---

## Totals

| Module | Items | Revision time |
|---|---|---|
| 13 | 4 | 6 h 45 |
| 14 | 7 | 10 h 30 |
| 15 | 6 | 6 h 15 |
| **All 17** | | **23 h 30** |

---

## What actually fits before Sat 21 (review day)

Available: **Thu 19 evening ~2 h · Fri 20 ~4 h · Sat morning review only (no new items).** ≈ 6 h.
So the line is drawn at **M15 only** — M13/M14 are prerequisites, already exam-passed, and only return as targeted fixes if a quiz exposes a gap.

| Slot | Items | Time |
|---|---|---|
| Thu 19 evening | 15.1 (finish — already partly quizzed) + 15.2 | 2 h 15 |
| Fri 20 | 15.3 + 15.4 + 15.5 + 15.6 | 4 h |
| Sat 21 AM | re-read your own one-liners, no new code | — |

**Order rule:** theory item → one practical → quiz that item (3 questions) → tick. Skipped/IDK items come back the next slot; they never get quietly dropped.

**Deferred (after Sat):** all of M13 + 14.1–14.7. They matter for the next module, not this review.

---

## Log

| Date | Item | Result |
|---|---|---|
| 20 Nov | 15.2 middleware + DevTools — **ticked**. P3 thunk verified live (`Portable Headphones`, blocked → `Error: Network Error`) | ✔ |
| 20 Nov | 15.3 ErrorBoundary typed + verified (Boom → `Something went wrong!!`); StrictMode theory done; **RHF parked by user** (3 spoken facts recorded) | partial |
| 20 Nov | 15.4 demo stack re-verified end to end: 10 cards, Helmet titles, login, httpOnly refresh cookie invisible to JS, modal + "Your listing" guard, cart localStorage; state reset to logged-in demo + empty cart | ✔ |
| 20 Nov | 15.1 Redux core — **ticked**. P1 passed in browser: 0→1→2→7→6→5, no console errors (`practice/rtk-counter`, :5190) | ✔ |
