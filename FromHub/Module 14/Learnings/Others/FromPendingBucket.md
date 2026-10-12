# PENDING BUCKET

Consolidated backlog of review pendings, Nov 2024 → Aug 2026 (cleaned 6 Oct 2026).

**How to read it**

- Duplicates merged; each item shows **`YYYY-MM → YYYY-MM`** = first → last raised.
- `[M14-n]` = directly covered by a Module 14 topic (see list below). Everything else is older backlog.
- Status tags: `-P` partially done, `(need clarity)` = examiner's words, `done` = already closed.

**Module 14 topic map**
`[M14-1]` Routing · `[M14-2]` Context API / global state / hooks · `[M14-3]` Custom hooks & HOC · `[M14-4]` Babel & Webpack · `[M14-5]` Bundling · `[M14-6]` Production build · `[M14-7]` Blog project

---

## A. Theory pendings by topic

### 1. Context API & global state `[M14-2]`

- createContext / Provider / Consumer / flow of data — `2024-12 → 2026-04` (Provider: need more clarity)
- Limitations & disadvantages of useContext — `2025-03 → 2026-05`
- Updating / modifying data passed deep down through context — `2024-10 → 2025-12`
- Advantages and disadvantages of context — `2026-05 → 2026-08`
- Why can't we use the window object instead of context? — `2025-12`
- Difference between Context API and useContext — `2025-10`
- Main components of Context API — `2026-04`
- Can multiple contexts be used in a single app? How? — `2026-04`
- One Context vs multiple for user data + theme + notifications — why? — `2026-04`
- Can a component have multiple `useContext`? Use cases, calculator workout — `2025-05`
- Context API vs local storage — `2025-04 → 2025-07`
- When to use `useReducer` — `2026-04`; `useReducer` vs `useState` — `2025-05 → 2025-06`
- `useReducer` details: init, 3rd arg, dispatch/return value, action dispatching — `2024-10 → 2025-05`
- Understand the flow of context API / how to update context data — `2025-03 → 2025-08`
- Multiple contexts, one-vs-many decision — `2025-05 → 2026-04`

### 2. Memoization: useCallback / useMemo / React.memo `[M14-2]`

- `useCallback` — working, when to use, why functions must be recreated/memoized, dependency array — `2024-10 → 2026-08`
- `useMemo` — example + scenarios + dependency list, "refer more" — `2024-10 → 2026-08`
- `React.memo` vs `useMemo` (asked at least 6 times) — `2024-11 → 2026-04`
- `React.memo` vs pure components — `2025-04 → 2025-09`
- Does `useMemo` prevent re-renders? (vs preventing recalculation) — `2024-11 → 2025-07`
- `useCallback` re-render trigger; `React.memo` internals — `2025-07`
- Limitations of `useMemo` & `useCallback` — `2025-04 → 2025-12`
- Wrong dependency array vs empty array in `useMemo`/`useCallback` — `2025-05`
- Stale closure — `2025-05`
- Referential equality — `2025-04 → 2025-06`
- When should you use `useCallback` — `2025-05 → 2025-10`
- Pure components — `2024-10 → 2025-09`

### 3. Routing with react-router-dom `[M14-1]`

- Outlet — implementation + Outlet vs portal (asked ~14 times) — `2024-10 → 2026-05`
- `useParams` / reading path params / query params / parts of URL / current URL — `2025-05 → 2025-12`
- Types of routers: Hash / Memory / Browser, BrowserRouter vs MemoryRouter — `2025-04 → 2025-11`
- `<Link/>` vs `<a>` — `2025-05 → 2025-07`
- Routing & navigation (flagged "vague") — `2025-07`
- Protected routes / restricting auth pages when authenticated / redirecting — `2025-01 → 2025-04`
- What changes when the user logs out — `2025-05`
- `useLocation`, history object, Switch — `2024-10 → 2025-04`
- Hash routing — `2025-05 → 2025-12`

### 4. Lazy loading / code splitting / Suspense `[M14-5]`

- Code splitting — what it is, relation to lazy loading, dynamic imports, ESModules — `2025-04 → 2026-08`
- Lazy loading — how it improves performance, `React.lazy` syntax + Suspense fallback, refer implementation — `2025-03 → 2026-05`
- `React.lazy` needs more clarity — `2024-10 → 2025-11`
- Disadvantages of lazy loading — `2024-12 → 2025-09`
- Suspense (need clarity) — `2025-06 → 2025-11`
- Tree shaking — `2026-05`
- Lazy load a component after 5 sec (workout) — `2025-05`

### 5. React internals & rendering

- Virtual DOM vs React DOM — `2025-01 → 2025-08`
- Reconciliation — `2025-01 → 2025-08`
- Diffing algorithm + why index is a bad key — `2025-02 → 2025-08`
- React Fiber + improvements (need clarity) — `2024-11 → 2025-09`
- Synthetic events vs non-synthetic (asked ~12 times) — `2024-10 → 2026-08`
- Event pooling — `2025-06 → 2026-01`
- One-way data binding — `2025-03 → 2025-06`
- Method binding, conditional rendering, dynamic rendering — `2025-01 → 2025-09`
- React profiler — `2025-02 → 2025-09`
- Shadow DOM vs Virtual DOM — `2025-02 → 2025-09`

### 6. Components & patterns `[M14-3]`

- Higher-Order Components — benefits, applications, use cases, example, props proxy — `2025-03 → 2026-05`
- Custom hooks — why, how, rules, hooks-vs-functions, vs plain function — `2024-12 → 2025-09`
- Render props — `2025-02 → 2025-09`
- Component composition — `2025-02 → 2025-12`
- Fragments — div vs fragments, `<>`, JSON serialising — `2025-07 → 2025-09`
- Portals (vs Outlet) — `2025-03 → 2026-05`
- Props drilling — when is it good? — `2024-10 → 2025-07`
- Lifting state up / props lifting — `2025-07 → 2025-11`
- Child → parent communication (callback props + useRef) — `2025-03 → 2025-08`
- Sibling communication — `2025-08`
- Named vs default exports — `2025-12`

### 7. Hooks misc

- Rules of hooks / where hooks can be used / hooks inside conditionals — `2024-11 → 2025-12`
- `useEffect` — no dependency array, dependency behaviour, cleanup syntax, unmounted event, async callbacks — `2025-03 → 2025-11`
- Lifecycle methods via `useEffect` (need clarity) — `2025-03 → 2025-07`
- `useEffect` vs `useLayoutEffect` — `2025-04 → 2025-07`
- Memory leaks in React + cleanup — `2025-04 → 2025-05`
- `forwardRef` / createRef / ref vs forwardRef / can we store data in useRef — `2024-11 → 2025-07`
- useRef — DOM reference, timer, change text colour, updating `ref.current` — `2025-03 → 2025-09`
- `useId` — `2025-06 → 2025-07`
- `useImperativeHandle` — `2025-02 → 2024-12`
- StrictMode (need clarity) — `2026-04 → 2025-06`
- Cleanup function purpose / componentDidUnmount in functional — `2025-03 → 2025-07`
- Error boundaries / componentDidCatch (need clarity) — `2024-10 → 2025-07`
- Hooks vs functions — `2025-01 → 2025-04`

### 8. Build, bundling & tooling `[M14-4] [M14-5] [M14-6]`

- Babel — `2025-03 → 2026-08`
- Webpack — `2024-10 → 2025-04`
- Transpiler vs compiler — `2025-02 → 2025-06`
- Polyfills — `2025-06`
- Hot Module Replacement (HMR) — `2025-07`
- Environment variables (.env), don't put tokens/secrets in source — `2025-01 → 2025-07`
- Dependencies vs devDependencies, understand scripts, npx — `2025-01 → 2025-09`
- Latest version of React / React latest features — `2025-07 → 2026-05`
- Library vs framework — `2025-02 → 2025-07`

### 9. Data fetching

- axios vs fetch — `2024-10 → 2025-12`
- axios interceptors — `2024-11 → 2025-04`
- axios cancelToken / cancellation — `2025-04 → 2025-07`
- Avoid loose API calls; create an axios instance — `2025-05`
- Promise clarity (resolve, reject) — `2025-01`

### 10. Performance & rendering behaviour

- Techniques to improve React performance (memoization, virtualization, throttle/debounce, SSR) — `2025-03 → 2025-09`
- How to load millions of records smoothly — `2025-03`
- CSR vs SSR / initial load time / SEO / hydration — `2025-01 → 2025-07`
- React concurrent mode & automatic batching — `2024-11`
- Debounce & throttle — `2025-02`
- Limitations of functional components — `2025-04 → 2025-10`
- Stateless vs stateful components — `2025-06 → 2025-09`
- Advantages & disadvantages of React — `2025-06`
- HTML sanitization — `2025-04`
- PropTypes (number/string/array) + validation on props — `2025-03 → 2025-06`
- Re-render a component when the page is resized (workout) — `2025-03 → 2025-08`

---

## B. Practical workouts still open

- `useLocalStorage(key, initialValue)` custom hook (like useState + persists) — `2026-03`
- Custom hook: string → capital letter — `2025-08`
- Counter with `useContext` — partially done — `2025-05 → 2026-05`
- Increment/decrement counter via `useContext` — "refer more" — `2025-03 → 2025-07`
- Calculator using `useContext` — `2025-05`
- Auto inc/dec counter (useState or useReducer) — `2025-03`
- On-off toggle button — `2025-06`
- Timer via `useEffect` / stopwatch — `2025-07 → 2026-05`
- useRef timer with start & stop; change text colour via useRef — `2025-03 → 2025-04`
- Average of 2 numbers using ref — `2025-05`
- Add items to a list using `useReducer` — `2025-05 → 2026-01`
- Simple calculator using `useReducer` — `2025-04`
- Todo list with `useReducer` — partially done — `2025-05`
- Add/edit todo + mark as completed — `2025-07`
- Square of a number with `useMemo` (skip recompute on same value) — `2025-05`
- Fetch data from API with `useEffect` — partially done — `2025-05`
- Sibling communication — `2025-08`
- Child → parent: sum of middle 5 elements of an array — `2025-08`
- Nested dropdown + map array of objects on 1st dropdown selection — `2025-07`
- Toggle theme via Context — done — `2025-05 → 2025-12`
- Create a context workout; fetch data from context and render — `2025-04 → 2025-04`
- Save user data in context & use across components — `2025-04`
- Implement `useCallback` in Netflix; `useMemo` in movie list fetch — `2025-10`
- Lazy loading implementation in Netflix — `2025-09 → 2025-10`
- Route-protection workout — `2025-04`
- Practice coding without autocomplete (syntax) — `2025-06`
- At least one practical per hook learned — `2025-05`

---

## C. Project bugs & incomplete tasks

### OLX

- Add product → redirect to product detail page; product details page missing — `2025-03 → 2025-05`
- Signup / login with email-password; confirm password — `2025-04 → 2025-09`
- Login button navigation issue; auth state not handled properly — `2025-05 → 2025-09`
- Validation: all inputs, file type & size, proper messages, don't trim password — `2025-03 → 2025-09`
- Sell page must be protected; sell option hidden when logged out — `2025-05 → 2025-06`
- "Profile was not defined" error — `2025-09`
- Make an offer button; Wishlist; Favorites; My listings (user's own ads) — `2025-07 → 2025-09`
- List user-added items with edit & delete; confirmation before delete — `2025-08 → 2025-09`
- Location API issue — `2025-08`
- Not mobile optimised — `2024-12 → 2025-08`
- Project incomplete (flagged repeatedly) — `2024-12 → 2025-09`

### Netflix

- Signup & login pending — `2024-12`
- Video player not working — `2025-07`
- Movie detail page needs improvement; movie details page — `2025-09 → 2026-03`
- Project incomplete — `2025-07`

### TODO / misc

- Product details page not working; add product needs data; test before review — `2025-06`
- Avoid static/hardcoded values — `2025-06`
- Improve UI / add logout option — `2025-06`
- Location/product API issue — `2025-08`

---

## D. Review remarks & habits

- Improve clarity in answers; understand the **applications** of each concept — `2025-09`
- Communication is overall good — `2025-09`
- Do more practicals / more workout — `2025-04 → 2025-04`
- Follow naming conventions — `2025-07`
- Haven't prepared well for review (Program:1, Theory:1) — `2025-03`
- Remove tokens from source; use `.env` — `2025-01 → 2025-07`
- Don't use browser alerts — `2025-05`
- Ask for stronger password — `2025-07`
- Prefer 4–5 cloned pages per task; projects were ~60% done — `2025-05`
- Complete tasks before review; test thoroughly — `2025-06 → 2025-09`
- Check old task — `2026-04`
- OR243 — `2025-10`

---

## E. Master question checklist (raised 2025-08-17)

Full self-quiz list from that review, grouped as given:

1. **Core basics** — Rules of hooks · where hooks can be used · useState (basics, controlled vs uncontrolled) · useEffect (deps, cleanup, lifecycle) · useReducer (vs useState) · useContext & Context API (Provider/Consumer/data flow/props drilling) · props drilling · controlled vs uncontrolled · stateless vs stateful · pure components vs React.memo (referential equality)
2. **Intermediate hooks & performance** — useCallback (memoizing functions, deps) · useMemo (vs React.memo: prevents recalculation, not re-render) · React.memo (how it works, limits) · useRef (stored values, DOM, timer, forwardRef) · useLayoutEffect vs useEffect · custom hooks (why/how/vs functions) · event pooling · useId · Context toggle theme · cleanup syntax
3. **Component communication** — child→parent (callback props, useRef) · sibling (lift state / context) · async callbacks in useEffect · lifting state up
4. **Internals & rendering** — Virtual DOM · reconciliation · diffing (keys, why index is bad) · Fiber · synthetic events · fragments · portals
5. **Optimization** — lazy loading (React.lazy + Suspense) · code splitting (dynamic imports, ESModules) · Suspense · React Profiler · error boundaries · performance techniques (memoization, virtualization, throttle/debounce, SSR) · initial load time (CSR vs SSR)
6. **Advanced / project-level** — Context API limits (vs Redux/Zustand) · HOC use cases · render props · Shadow DOM vs Virtual DOM · hydration (SSR/Next) · concurrent mode / automatic batching · HMR · one-way data binding · referential equality · memory leaks in useEffect · StrictMode · `.env` usage
