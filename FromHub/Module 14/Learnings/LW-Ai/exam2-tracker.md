# M14 Attempt 2 — Exam Mode Progress Tracker

Exam: **Mon 19 Oct 2026, 9:30 AM** · Method: fast teaching capsules (Sat) → practicals typed by Nabhan (Sun) → drill (Sun eve / Mon light)
Updated: 17 Oct 2026 ~22:00

## Phase 1 — Teaching (Saturday)

| Item | Status | Notes |
|---|---|---|
| A. Hooks pentagon (useRef · useContext · useCallback/useMemo · useLayoutEffect) | ✅ 4/4 | All explained back. Fixes: "`current` is a box holding the DOM" · "references, not memory" |
| B. Theory burst (Fragments · createElement · createRoot · package-lock) | ✅ 4/4 | Explained back. Fixes: createElement ≠ HTML · `#root` not "root-dev" |
| C. BlogApp walkthrough (7 parts, real code) | ✅ **7/7** | All parts taught + explained back (17–18 Oct). Fixes kept: `onAuthStateChanged` restores user on refresh · `unsubscribe` = stop button, not storage |

## Phase 2 — Practicals (Sunday · Nabhan types everything, coach asks questions only)

**Setup done:** `PracticeApp` scaffolded 14:00 (LW-Ai) — menu + routes pre-wired, build ✓, D01–D10 placeholders in `src/demos/`.

**Demo progress:** D01 ✅ 15:53 (bug fixed by Nabhan: `onClick={() => setCount(...)}` vs calling during render) · D02 ✅ 16:24–16:29 all confirmed (ref DOM change, body-log render-proof: 1 on load + 0 per click, textContent = no HTML parsing/injection-safe) · D03 ⬜ · D04 ⬜ · D05 ⬜ · D06 ⬜ · D07 ⬜ · D08 ⬜ · D09 ⬜ · D10 ⬜ · D12 ⬜ · D13 ⬜ · *(D05 spec 16:08: useTheme() custom hook now REQUIRED · D06: HOC bonus line added — first thing to drop if squeezed)*

| Item | Status | Notes |
|---|---|---|
| 1. Pentagon hook demos | ⬜ 0/4 | useRef DOM first (3 modules old) → useContext → useCallback/useMemo → useLayoutEffect |
| 2. BlogApp mini-tasks | ⬜ 0/3 | "My posts" route · search filter · extra field on posts |
| 3. Simulated exam task under time | ⬜ 0/1 | |

**⚠️ RE-TEACH PIVOT (18 Oct 16:42):** Nabhan: "walkthrough explanation was skimmed, teach M14 like I just passed M13 — natural flow, gradual growth. Ready to sit extra time." New order tonight: **1)** Context from zero → D05 · **2)** useCallback/useMemo/React.memo from zero → D06 · **3)** useLayoutEffect → D07 · **4)** Routing refresh → D13 + mini-tasks · **5)** Babel/Webpack/bundling lesson (compact) · **6)** sim exam + aloud drill (kept — comms + timed practice are non-negotiable). D03/D04/D12 slot where energy allows.

**Senior addendum (18 Oct, 15:06)** — gaps found via `FromSeniors.md` + pending bucket → `senior-rapid-fire.md` created (drill sheet). Adjustments: **D06 upgraded** = React.memo + useCallback + useMemo + child→parent callback · **capsule break after D04** (useReducer) and **after D07** (lazy loading/Suspense) · drill tonight = rapid-fire aloud + 60-sec block · Monday 8:00 = rapid-fire skim. Parked: Next.js/React Compiler/SSR/axios-interceptors. **D12 added** (useReducer counter, placeholder + route wired 15:18) · D04 header gained useId bonus line. No lazy-loading demo (capsule + click-handler experiment cover it). **D13 added 15:30** (nested routes + Outlet, per Nabhan's question — lowest priority, after D02/D05–D07/D11).

## Phase 3 — Final drill

| Item | Status | Notes |
|---|---|---|
| Theory Q&A aloud (Router · Context · custom hooks · HOC · Babel vs Webpack · bundling · build+serve · 60-sec block) | ⬜ | Sunday evening |
| Monday light review | ⬜ | Mon morning — walkthrough quick-revision + tracker only · **END BY 8:45 — exam 9:30** |

## If Sunday gets squeezed
Priority order: **pentagon demos → simulated exam → mini-tasks.** Demos are the examiner pendings; mini-tasks are bonus fluency.
