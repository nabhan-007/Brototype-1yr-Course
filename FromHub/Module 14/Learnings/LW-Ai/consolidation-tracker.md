# Consolidation Tracker — M13 + M14

> Created 19 Oct 2026 (M14 passed 7/10 — consolidation phase before Module 15).
> Goal: **LEARN → UNDERSTAND → TEST** — every item ends **typed AND explained aloud**.
> Status: ⬜ pending · 🟡 taught (capsule given — awaiting fresh type + explain-back) · ✅ typed + explained.
> Code items: you type the test + explain it. Theory items: spoken answer (can't type "what is vDOM").
> Diagnostic first pass runs this same list in order — pass = straight ✅, shaky = stop and teach gently.

---

## The loop (one block at a time)

1. I give **one block**: one test (type X / answer Y).
2. You do it — **you type all code**; I coach, question, verify. Never copy; fresh mini-exercises.
3. Fluent → ✅, next item. Shaky → small capsule (one concept, code shown, ⏱) → you type a fresh mini-exercise → explain back → ✅.
4. Stuck → the example gets **smaller**, not louder.
5. You say **"Next"** — I never run ahead.

## Sandbox

- Typing home: `PracticeApp` (D01/D02 done during cram week — noted on A8/A15). **Confirmed: single sandbox for all stations.**
- New stations are typed **on demand** as items need them — no placeholder walls.
- Firebase items (E) — **confirmed: typed inside BlogApp** (already wired).

## References (not duplicated here)

- 13 senior practicals with answers → `M14-full-teach.md` Section 1.
- Quick spoken Q&A → `senior-rapid-fire.md`.
- Blog app map → `blog-app-walkthrough.md`.

**Total: 76 items — A18 · B13 · C8 · D8 · E8 · F6 · G6 · H6 · I3**

---

## A — M13 fundamentals (18)

| # | Item | The test | Status |
|---|------|----------|--------|
| A1 | React mental model: library vs framework · SPA/CSR · component-based | Explain all three in 60s | ⬜ |
| A2 | Entry: `main.jsx` — createRoot · #root · StrictMode | Type main.jsx from scratch; explain each word | ⬜ |
| A3 | JSX + function components + modules (default vs named export) | Type a Greeting component with props + import it | ⬜ |
| A4 | Props: pass, destructure, read-only | Pass 2 props; explain one-way flow | ⬜ |
| A5 | Conditional rendering (ternary, &&) | Empty-list message + count badge | ⬜ |
| A6 | Lists: `map` + keys | Render 3 items; explain key purpose, id vs index | ⬜ |
| A7 | Events: `onClick={fn}` vs `onClick={fn()}` | Fix broken handler; predict the bug first | ⬜ |
| A8 | useState: counter, updater form, batching | D01 re-type fast (cram); explain `prev =>` | ⬜ |
| A9 | Controlled inputs + form submit | Type form: input + submit + preventDefault | ⬜ |
| A10 | Array state: add / delete / update immutably | Todo mini: add, delete by id, toggle done | ⬜ |
| A11 | Child→parent callback | Child button sends text up; parent shows it | ⬜ |
| A12 | Derived values (no redundant state) | Add done-count computed; explain why not state | ⬜ |
| A13 | useEffect: purpose + mount effect | Log on mount; explain what effects are FOR | ⬜ |
| A14 | useEffect deps + cleanup | Interval start/stop; explain cleanup + deps | ⬜ |
| A15 | useRef: DOM + value box, no re-render | D02 re-type fast (cram); explain render-proof | ⬜ |
| A16 | useState vs useRef vs plain variable | Pick the right tool for 3 scenarios + why | ⬜ |
| A17 | Lifecycle: mount/update/unmount ↔ effects; class names | Map each phase to effect deps/cleanup | ⬜ |
| A18 | Virtual DOM vs Real DOM · render vs re-render | Explain 60s; how keys fit reconciliation | ⬜ |

## B — M14 hooks & core (13)

| # | Item | The test | Status |
|---|------|----------|--------|
| B1 | useCallback: memoized function, stable refs | Type handler via useCallback → memo child | ⬜ |
| B2 | useMemo: memoized value | Cached calc; log proves skip on re-render | ⬜ |
| B3 | React.memo: skip re-render on same props | Memo demo; explain why child stays silent | ⬜ |
| B4 | Trio: React.memo vs useCallback vs useMemo | Explain each + use all three in one demo | ⬜ |
| B5 | useLayoutEffect vs useEffect | Explain timing/paint; measure-then-show demo | ⬜ |
| B6 | Rules of hooks + hook-order internals | 3 rules + why no `if`/loops | ⬜ |
| B7 | useReducer | Counter INC/DEC/RESET typed fresh | ⬜ |
| B8 | useReducer vs useState — when each | Explain + justify for a 5-action form | ⬜ |
| B9 | Fragments | Replace wrapper div with `<>`; keyed Fragment | ⬜ |
| B10 | JSX → createElement (+ where createRoot fits) | Rewrite tiny JSX as createElement calls | ⬜ |
| B11 | StrictMode dev behaviors | Explain double-invoke; find it in main.jsx | ⬜ |
| B12 | package-lock.json | Explain what/why (version pinning) | ⬜ |
| B13 | useId | Label+input pairing typed | ⬜ |

## C — Routing (8)

| # | Item | The test | Status |
|---|------|----------|--------|
| C1 | BrowserRouter setup — where/why | Type router shell in main.jsx | ⬜ |
| C2 | Routes + Route — two pages | Type /a /b pages + links | ⬜ |
| C3 | Link vs `<a>`; NavLink active | Explain + NavLink `isActive` style | ⬜ |
| C4 | useNavigate | Button navigates programmatically | ⬜ |
| C5 | useParams | `/item/:id` page reads the id | ⬜ |
| C6 | Nested routes + Outlet | Layout shell + 2 child tabs | ⬜ |
| C7 | ProtectedRoute + `<Navigate>` | Fake auth guard typed | ⬜ |
| C8 | 404 catch-all; Hash vs Browser | `*` route typed + explain the difference | ⬜ |

## D — Context & global state (8)

| # | Item | The test | Status |
|---|------|----------|--------|
| D1 | Context cycle: create → Provider → useContext | Theme string typed end-to-end | ⬜ |
| D2 | children prop + Provider/Layout composition | Explain children; wrap app in provider | ⬜ |
| D3 | Consumers re-render; stabilize value | Log consumers; add useMemo value + useCallback fns | ⬜ |
| D4 | useReducer + Context combo | Global counter via dispatch from context | ⬜ |
| D5 | AuthContext from scratch (fake) | user + login/logout + useAuth typed | ⬜ |
| D6 | Limitations of Context | 3 limits + fixes, aloud | ⬜ |
| D7 | One vs many contexts; split state/dispatch | Explain + tiny two-context demo | ⬜ |
| D8 | "Global state management": context vs Redux/Zustand; window vs context | Explain poised | ⬜ |

## E — Firebase (8) — typed in BlogApp (confirmed)

| # | Item | The test | Status |
|---|------|----------|--------|
| E1 | Init: `firebase.js` + `.env` VITE_ + initializeApp | Explain exports; type a mini init | ⬜ |
| E2 | Auth: signup / login / logout + error handling | Type + explain the flow | ⬜ |
| E3 | onAuthStateChanged + loading gate | Explain refresh survival; show wiring | ⬜ |
| E4 | Firestore create: addDoc + serverTimestamp | Type the create fn | ⬜ |
| E5 | Read: getDoc vs onSnapshot live list | Type both; explain the difference | ⬜ |
| E6 | updateDoc / deleteDoc + owner gating (UI) | Type both | ⬜ |
| E7 | onSnapshot cleanup — unsubscribe | Explain the leak; wire cleanup | ⬜ |
| E8 | Security rules — the real gate | Explain why UI hiding isn't enough | ⬜ |

## F — Patterns (6)

| # | Item | The test | Status |
|---|------|----------|--------|
| F1 | Custom hook from scratch | useToggle or useLocalStorage typed | ⬜ |
| F2 | Custom hook vs component vs plain fn | Explain `use` prefix + rules | ⬜ |
| F3 | HOC | withFrame/withAuth typed — component in, component out | ⬜ |
| F4 | HOC vs hooks vs ProtectedRoute; why HOCs declined | Explain wrapper hell | ⬜ |
| F5 | React.lazy + Suspense | Lazy-load one sandbox page; fallback | ⬜ |
| F6 | Code splitting — chunks from lazy | Explain + point at the build output | ⬜ |

## G — Build & tooling (6)

| # | Item | The test | Status |
|---|------|----------|--------|
| G1 | Vite dev vs build | Run both; explain ESM/HMR vs Rollup → dist/ | ⬜ |
| G2 | Babel — translator | JSX → JS line; connect to B10 | ⬜ |
| G3 | Webpack — bundler (vs Vite) | Explain loaders; why Vite is faster | ⬜ |
| G4 | Bundle + tree-shaking + hashed filenames | Explain using dist filenames | ⬜ |
| G5 | Production serve + SPA rewrite | vite preview; explain rewrite / HashRouter | ⬜ |
| G6 | .env: VITE_ baked at build + secrets warning | Explain; find import.meta.env | ⬜ |

## H — Theory extras (6)

| # | Item | The test | Status |
|---|------|----------|--------|
| H1 | Synthetic events | Explain what the event object is | ⬜ |
| H2 | Controlled vs uncontrolled | Explain + sketch both | ⬜ |
| H3 | Portals | Why modals need it; createPortal shape | ⬜ |
| H4 | Pure functions/components; stateful vs stateless | Explain purity + why React assumes it | ⬜ |
| H5 | Error boundaries | What they catch / don't; class recognition | ⬜ |
| H6 | fetch + axios: loading/error states | Type fetch demo (public API), 3 states | ⬜ |

## I — Capstones (3)

| # | Item | The test | Status |
|---|------|----------|--------|
| I1 | Counter v2: useReducer + Context + memo trio + custom hook | Fresh end-to-end | ⬜ |
| I2 | Mini router app: pages + params + nested + protected + 404 | Fresh | ⬜ |
| I3 | Todo app rebuilt from blank (M13 features) | Fresh, no copy | ⬜ |

---

**Diagnostic starts at A1.** Updated live after every block.
