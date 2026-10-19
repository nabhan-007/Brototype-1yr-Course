# Senior Topics — Rapid-Fire (M14 attempt 2)

Source: FromSeniors.md + FromPendingBucket.md · 18 Oct 2026
How to use: tonight's aloud drill + Monday 8:00 skim. One line each — **say them aloud**, don't read silently.

## Memoization trio (asked 6+ times)

**Q: React.memo vs useMemo vs useCallback?**
React.memo wraps a **component** (skips re-render when props are unchanged) · useMemo caches a **value** · useCallback caches a **function**. All exist for **referential equality**.

**Q: React.memo — its one limit?**
It compares props **shallowly**; a new deep object still re-renders. Custom check: `React.memo(Child, (prev, next) => prev.id === next.id)` = the `arePropsEqual` argument.

**Q: Does useMemo prevent re-renders?**
No — it prevents **recalculation**. Preventing re-renders = React.memo or not touching state.

**Q: Pure component in one line?**
Renders the **same output for the same props/state**, no side effects. `React.PureComponent` = shallow-compares props + state.

## useReducer (pending since 2024-10)

**Q: useReducer vs useState?**
useState = one value · useReducer = **state logic in one reducer function**: `const [state, dispatch] = useReducer(reducer, initial)`; `dispatch({ type: "INC" })`. Use when the next state depends on complex previous state or several actions exist.

**Q: How does a reducer work?**
Pure function `(state, action) => newState` — `switch (action.type)`, return new state, **never mutate**. Pair with Context when the app needs it globally: put `state` + `dispatch` in the value.

## Lazy loading / Suspense (pending 2025-03 → 2026-08)

**Q: Lazy loading in one line?**
Load a component only when its route needs it: `const Page = React.lazy(() => import("./Page"))` inside `<Suspense fallback={<p>Loading…</p>}>`.

**Q: How is it related to code splitting?**
Each `lazy(() => import(...))` becomes a **separate chunk** in `dist/` → smaller first download. That's code splitting. (Our ">500 kB" build warning = one chunk doing everything; lazy fixes it.)

**Q: Skeleton loader?**
Placeholder UI **shaped like the real content** (grey boxes) while data loads — better UX than a spinner. Pure CSS, no React magic.

**Q: Disadvantage of lazy loading?**
Extra round-trips + a flash when the chunk arrives; needs a Suspense fallback; pointless for tiny apps.

## Events (synthetic — asked ~12 times)

**Q: Synthetic events?**
React wraps the native DOM event in its own **cross-browser SyntheticEvent** — `e.preventDefault()` behaves the same everywhere. Since React 17 events are **not pooled** anymore.

**Q: Event pooling?**
Old React **reused event objects** after the handler ran; async code needed `e.persist()`. Removed in React 17+ — safe to use `e.target` later.

## Components & hooks hygiene

**Q: Controlled vs uncontrolled?**
Controlled = React state is the single source of truth (`value` + `onChange`) — every BlogApp form. Uncontrolled = DOM holds data until you read it (`defaultValue` + ref / form submit).

**Q: useId?**
`const id = useId()` → a stable unique id for **label ↔ input pairing** that survives re-renders and repeated components.

**Q: Rules of hooks (the 3)?**

1. Only at the **top level** of a component or custom hook. 2) Only from React functions (components/hooks). 3) **Same order every render** — never inside `if`, loops, or nested functions.

**Q: StrictMode in one line?**
Dev-only wrapper that **double-invokes** render and effects (setup → cleanup → setup) to expose missing cleanups; nothing ships to production.

**Q: Error boundaries?**
Catch **render-time errors** below them: `static getDerivedStateFromError()` + `componentDidCatch` — **class components only**, show a fallback UI instead of a white screen.

**Q: Portals vs Outlet?**
**Outlet** = the router's slot where a child **route** renders inside a layout. **Portal** = render into a **different DOM node** (modal/toast) while staying in the React tree — `ReactDOM.createPortal(children, node)`.

## Internals (basics, pending since 2025-01)

**Q: Virtual DOM in one line?**
An **in-memory JS copy** of the UI; on change React **diffs** it with the previous copy (**reconciliation**) and applies only what changed to the real DOM.

**Q: Why is index-as-key bad?**
If the list reorders/deletes, React matches old↔new **by position** → wrong DOM reused (typed input text jumps to the wrong row). Use a **stable id**.

**Q: window object vs context?**
`window.x` = global mutable JS — no re-render on change, breaks testing/SSR. Context = React's own store: changes **re-render consumers** and stay scoped to the tree.

## Data fetching one-liners

**Q: fetch vs axios?**
fetch = browser builtin, manual `.json()`, no interceptors · axios = library, auto-JSON, interceptors, cancellation, timeouts.

**Q: Loading/error states rule?**
Every fetch shows **three states**: loading → success → error. BlogList's `loading` + list is the pattern.

## Parked — say "not in M14 scope" if asked

Next.js/TanStack/wouter routers · React Compiler · SSR/hydration · concurrent mode · axios interceptors deep-dive · old OLX/Netflix project bugs.
