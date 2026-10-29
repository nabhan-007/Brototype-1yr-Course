# Consolidation Tracker — M13 + M14

> Created 19 Oct 2026 (M14 passed 7/10 — consolidation phase before Module 15).
> Goal: **LEARN → UNDERSTAND → TEST** — every item ends **typed AND explained aloud** (spoken-only for 🟢 items).
> Status: ⬜ pending · 🟡 taught (capsule given — awaiting fresh type + explain-back) · ✅ done.
> ⭐ = asked in a real exam (19 Oct ExamBrainDump) — always full treatment.
> Priority tiers change **depth & coverage only — never order**: P1 portal 7 topics · P2 most-asked pendings · P3 long-tail spoken-only.
> Diagnostic first pass runs this list in order — pass = straight ✅, shaky = stop and teach gently.

---

## The loop (one block at a time)

1. I give **one block**: one test (type X / answer Y).
2. You do it — **you type all code**; I coach, question, verify. Never copy; fresh mini-exercises.
3. Fluent → ✅, next item. Shaky → small capsule (one concept, code shown, ⏱) → you type a fresh mini-exercise → explain back → ✅.
4. 🟢 items (Section I): spoken answer only — no typing drill; ✅ once you can explain it.
5. Stuck → the example gets **smaller**, not louder.
6. You say **"Next"** — I never run ahead.

## Priority map

- **P1 — portal 7 topics** (full treatment): routing+Outlet → C1–C8 · Context/global state → D1–D9 · custom hooks/HOC → F1–F4 · Babel/Webpack/bundling → G1–G4 · production build/serve → G5–G6 · BlogApp → E1–E8 · hooks in the portal list → B1–B5.
- **P2 — most-asked pendings** (full treatment): Outlet vs portal ~14 asks → H3 · synthetic events ~12 → H1 · React.memo vs useMemo 6+ → B4.
- **P3 — long tail** (spoken-only): Section I — no typing drills.
- Order never changes: **A → B → C → D → E → F → G → H → I (spoken sweep) → J (capstones last)**.

## Sandbox

- **CoreLab** (`LW-Ai\CoreLab`) — router-free lab. `main.jsx` renders `./Lab`; your current test replaces `Lab.jsx` content (extra components = new files beside it). Used for A/B/H items.
- **PracticeApp** — router-based stations (C/D/F items). D01/D02 done during the cram week — noted on A8/A15.
- New files are typed **on demand** — no placeholder walls.
- Firebase items (E) — **confirmed: typed inside BlogApp** (already wired).

## References (not duplicated here)

- 13 senior practicals with answers → `M14-full-teach.md` Section 1.
- Quick spoken Q&A → `senior-rapid-fire.md`.
- Blog app map → `blog-app-walkthrough.md`.
- Real exam questions → `Module 14\Exam\ExamBrainDump.md` (mapped as ⭐ below).

**Total: 90 items — A19 · B13 · C8 · D9 · E8 · F6 · G6 · H6 · I12 · J3**

---

## A — M13 fundamentals (19)

| #   | Item                                                                  | The test                                         | Status |
| --- | --------------------------------------------------------------------- | ------------------------------------------------ | ------ |
| A1  | React mental model: library vs framework · SPA/CSR · component-based  | Explain all three in 60s                         | ✅     |
| A2  | Entry: `main.jsx` — createRoot · #root · StrictMode                   | Type main.jsx from scratch; explain each word    | ✅     |
| A3  | JSX + function components + modules (default vs named export)         | Type a Greeting component with props + import it | ✅     |
| A4  | Props: pass, destructure, read-only                                   | Pass 2 props; explain one-way flow               | ✅     |
| A5  | Conditional rendering (ternary, &&)                                   | Empty-list message + count badge                 | ✅     |
| A6  | Lists: `map` + keys                                                   | Render 3 items; explain key purpose, id vs index | ✅     |
| A7  | Events: `onClick={fn}` vs `onClick={fn()}`                            | Fix broken handler; predict the bug first        | ✅     |
| A8  | useState: counter, updater form, batching                             | D01 re-type fast (cram); explain `prev =>`       | ✅     |
| A9  | Controlled inputs + form submit                                       | Type form: input + submit + preventDefault       | ✅     |
| A10 | Array state: add / delete / update immutably                          | Todo mini: add, delete by id, toggle done        | ⬜     |
| A11 | Child→parent callback ⭐                                              | Child button sends text up; parent shows it      | ⬜     |
| A12 | Derived values (no redundant state)                                   | Add done-count computed; explain why not state   | ⬜     |
| A13 | useEffect: purpose + mount effect                                     | Log on mount; explain what effects are FOR       | ⬜     |
| A14 | useEffect deps + cleanup (state changing) ⭐                          | Interval start/stop; explain cleanup + deps      | ⬜     |
| A15 | useRef: DOM + value box, no re-render                                 | D02 re-type fast (cram); explain render-proof    | ⬜     |
| A16 | useState vs useRef vs plain variable                                  | Pick the right tool for 3 scenarios + why        | ⬜     |
| A17 | Lifecycle: mount/update/unmount ↔ effects; class names                | Map each phase to effect deps/cleanup            | ⬜     |
| A18 | Virtual DOM vs Real DOM · render vs re-render · reconciliation ⭐     | Explain 60s; how keys fit reconciliation         | ⬜     |
| A19 | Component switching — element type change → unmount old, mount new ⭐ | Explain + type a 2-tab switch demo               | ⬜     |

## B — M14 hooks & core (13)

| #   | Item                                                        | The test                                      | Status |
| --- | ----------------------------------------------------------- | --------------------------------------------- | ------ |
| B1  | useCallback: memoized function, stable refs ⭐              | Type handler via useCallback → memo child     | ⬜     |
| B2  | useMemo: memoized value ⭐                                  | Cached calc; log proves skip on re-render     | ⬜     |
| B3  | React.memo: skip re-render on same props ⭐                 | Memo demo; explain why child stays silent     | ⬜     |
| B4  | Trio: memoization — React.memo vs useCallback vs useMemo ⭐ | Explain each + use all three in one demo      | ⬜     |
| B5  | useLayoutEffect vs useEffect ⭐                             | Explain timing/paint; measure-then-show demo  | ⬜     |
| B6  | Rules of hooks + hook-order internals                       | 3 rules + why no `if`/loops                   | ⬜     |
| B7  | useReducer                                                  | Counter INC/DEC/RESET typed fresh             | ⬜     |
| B8  | useReducer vs useState — when each                          | Explain + justify for a 5-action form         | ⬜     |
| B9  | Fragments                                                   | Replace wrapper div with `<>`; keyed Fragment | ⬜     |
| B10 | JSX → createElement (+ where createRoot fits)               | Rewrite tiny JSX as createElement calls       | ⬜     |
| B11 | StrictMode dev behaviors                                    | Explain double-invoke; find it in main.jsx    | ⬜     |
| B12 | package-lock.json                                           | Explain what/why (version pinning)            | ⬜     |
| B13 | useId                                                       | Label+input pairing typed                     | ⬜     |

## C — Routing (8)

| #   | Item                            | The test                                 | Status |
| --- | ------------------------------- | ---------------------------------------- | ------ |
| C1  | BrowserRouter setup — where/why | Type router shell in main.jsx            | ⬜     |
| C2  | Routes + Route — two pages      | Type /a /b pages + links                 | ⬜     |
| C3  | Link vs `<a>`; NavLink active   | Explain + NavLink `isActive` style       | ⬜     |
| C4  | useNavigate ⭐                  | Button navigates programmatically        | ⬜     |
| C5  | useParams                       | `/item/:id` page reads the id            | ⬜     |
| C6  | Nested routes + Outlet ⭐       | Layout shell + 2 child tabs              | ⬜     |
| C7  | ProtectedRoute + `<Navigate>`   | Fake auth guard typed                    | ⬜     |
| C8  | 404 catch-all; Hash vs Browser  | `*` route typed + explain the difference | ⬜     |

## D — Context & global state (9)

| #   | Item                                                         | The test                                                                             | Status |
| --- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------ |
| D1  | Context cycle: create → Provider → useContext ⭐             | Theme string typed end-to-end                                                        | ⬜     |
| D2  | children prop + Provider/Layout composition                  | Explain children; wrap app in provider                                               | ⬜     |
| D3  | Consumers re-render; stabilize value                         | Log consumers; add useMemo value + useCallback fns                                   | ⬜     |
| D4  | useReducer + Context combo                                   | Global counter via dispatch from context                                             | ⬜     |
| D5  | AuthContext from scratch (fake)                              | user + login/logout + useAuth typed                                                  | ⬜     |
| D6  | Limitations of Context                                       | 3 limits + fixes, aloud                                                              | ⬜     |
| D7  | One vs many contexts; split state/dispatch                   | Explain + tiny two-context demo                                                      | ⬜     |
| D8  | Global state management: concept + how to manage globally ⭐ | Explain context vs Redux/Zustand; window vs context                                  | ⬜     |
| D9  | What is a store? (Redux/Zustand) ⭐                          | Type a 10-line vanilla store (getState/subscribe/setState); explain store vs context | ⬜     |

## E — Firebase (8) — typed in BlogApp (confirmed)

| #   | Item                                                | The test                              | Status |
| --- | --------------------------------------------------- | ------------------------------------- | ------ |
| E1  | Init: `firebase.js` + `.env` VITE\_ + initializeApp | Explain exports; type a mini init     | ⬜     |
| E2  | Auth: signup / login / logout + error handling      | Type + explain the flow               | ⬜     |
| E3  | onAuthStateChanged + loading gate                   | Explain refresh survival; show wiring | ⬜     |
| E4  | Firestore create: addDoc + serverTimestamp          | Type the create fn                    | ⬜     |
| E5  | Read: getDoc vs onSnapshot live list                | Type both; explain the difference     | ⬜     |
| E6  | updateDoc / deleteDoc + owner gating (UI)           | Type both                             | ⬜     |
| E7  | onSnapshot cleanup — unsubscribe                    | Explain the leak; wire cleanup        | ⬜     |
| E8  | Security rules — the real gate                      | Explain why UI hiding isn't enough    | ⬜     |

## F — Patterns (6)

| #   | Item                                              | The test                                               | Status |
| --- | ------------------------------------------------- | ------------------------------------------------------ | ------ |
| F1  | Custom hook from scratch                          | useToggle or useLocalStorage typed                     | ⬜     |
| F2  | Custom hook vs component vs plain fn              | Explain `use` prefix + rules                           | ⬜     |
| F3  | HOC ⭐                                            | withFrame/withAuth typed — component in, component out | ⬜     |
| F4  | HOC vs hooks vs ProtectedRoute; why HOCs declined | Explain wrapper hell                                   | ⬜     |
| F5  | React.lazy + Suspense                             | Lazy-load one sandbox page; fallback                   | ⬜     |
| F6  | Code splitting — chunks from lazy                 | Explain + point at the build output                    | ⬜     |

## G — Build & tooling (6)

| #   | Item                                            | The test                                    | Status |
| --- | ----------------------------------------------- | ------------------------------------------- | ------ |
| G1  | Vite dev vs build · how projects are bundled ⭐ | Run both; explain ESM/HMR vs Rollup → dist/ | ⬜     |
| G2  | Babel — translator ⭐                           | JSX → JS line; connect to B10               | ⬜     |
| G3  | Webpack — bundler (vs Vite) ⭐                  | Explain loaders; why Vite is faster         | ⬜     |
| G4  | Bundle + tree-shaking + hashed filenames ⭐     | Explain using dist filenames                | ⬜     |
| G5  | Production serve + SPA rewrite                  | vite preview; explain rewrite / HashRouter  | ⬜     |
| G6  | .env: VITE\_ baked at build + secrets warning   | Explain; find import.meta.env               | ⬜     |

## H — Theory extras (6)

| #   | Item                                             | The test                                               | Status |
| --- | ------------------------------------------------ | ------------------------------------------------------ | ------ |
| H1  | Synthetic events — delegation ⭐                 | Explain what the event object is + delegation          | ⬜     |
| H2  | Controlled vs uncontrolled                       | Explain + sketch both                                  | ⬜     |
| H3  | Portals — and Outlet vs portal ⭐                | Why modals need it; createPortal shape; compare Outlet | ⬜     |
| H4  | Pure functions/components; stateful vs stateless | Explain purity + why React assumes it                  | ⬜     |
| H5  | Error boundaries                                 | What they catch / don't; class recognition             | ⬜     |
| H6  | fetch + axios: loading/error states              | Type fetch demo (public API), 3 states                 | ⬜     |

## I — Long tail (12) — spoken-only 🟢

| #   | Item                      | The test                                         | Status |
| --- | ------------------------- | ------------------------------------------------ | ------ |
| I1  | React Fiber               | Why React can pause/resume work; what Fiber is   | ⬜     |
| I2  | Event pooling (legacy)    | What it was; why React 17 removed it             | ⬜     |
| I3  | Shadow DOM vs Virtual DOM | Browser encapsulation vs React's in-memory tree  | ⬜     |
| I4  | React Profiler            | What it measures; where it lives (DevTools)      | ⬜     |
| I5  | Render props              | Function-as-child pattern; why hooks replaced it | ⬜     |
| I6  | Component composition     | Building UI by nesting; children prop            | ⬜     |
| I7  | Lifting state up          | Move state to closest common parent              | ⬜     |
| I8  | Sibling communication     | Via parent or context                            | ⬜     |
| I9  | forwardRef / createRef    | Passing refs into child DOM; ref vs forwardRef   | ⬜     |
| I10 | Virtualization            | Render only visible rows; react-window           | ⬜     |
| I11 | Throttle vs debounce      | Rate-limiting events; the difference             | ⬜     |
| I12 | Hydration / SSR           | Server HTML + client attach; CSR vs SSR          | ⬜     |

## J — Capstones (3) — last

| #   | Item                                                       | The test         | Status |
| --- | ---------------------------------------------------------- | ---------------- | ------ |
| J1  | Counter v2: useReducer + Context + memo trio + custom hook | Fresh end-to-end | ⬜     |
| J2  | Mini router app: pages + params + nested + protected + 404 | Fresh            | ⬜     |
| J3  | Todo app rebuilt from blank (M13 features)                 | Fresh, no copy   | ⬜     |

---

**Diagnostic starts at A1.** Updated live after every block.
