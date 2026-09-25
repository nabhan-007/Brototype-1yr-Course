# Supplement — Router, Performance, Misc (senior pendings)

> Priority: 🟢 Medium (not in your 4 official topics) — 🟡 for Performance items (they connect to CSR + useEffect)
> Study AFTER the four core guides. These appeared in seniors' pending bucket though, so know the definitions.

---

## 1. React Router (quick-hit list)

**What:** client-side routing library — maps URL → component **without full page reload** (the SPA piece).

```jsx
import { BrowserRouter, Routes, Route, Link, NavLink, Outlet } from "react-router-dom";

<BrowserRouter>
  <nav>
    <Link to="/">Home</Link>
    <NavLink to="/about" className={({ isActive }) => isActive ? "on" : ""}>About</NavLink>
  </nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/user/:id" element={<User />} />
    <Route path="/dash" element={<DashLayout />}>     {/* parent with children */}
      <Route index element={<Overview />} />
      <Route path="settings" element={<Settings />} />
      <Outlet />   {/* child route renders HERE */}
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
```

| Term | Meaning |
|---|---|
| **Routes vs Route** | `Routes` = **container** that picks the first matching `Route`; `Route` = **one mapping** path→element. (Old v5: `<Switch>` chose first match — v6 `Routes` replaced Switch) |
| **Switch** | legacy v5 first-match wrapper → now `Routes` |
| **BrowserRouter vs HashRouter** | BrowserRouter = clean URLs (`/about`, needs server fallback to index.html); HashRouter = `/#/about` (works on static hosts without config, uglier) |
| **MemoryRouter** | routing **in memory** — no URL bar change; tests / React Native |
| **Link vs NavLink** | both navigate without reload; **NavLink** adds `isActive` styling automatically |
| **Outlet** | placeholder where **child routes** render inside a parent layout |
| Query params | `useSearchParams()` or `new URLSearchParams(location.search)` — see `03-hooks.md` |
| Tab title/favicon | `document.title = ...` in effect, or `<title>` in `index.html` / React 19 `<title>` render |

**Terms to mention in exam:** client-side routing, Routes/Route, NavLink active, Outlet nested layout, BrowserRouter vs HashRouter.

Docs: https://reactrouter.com/en/main

*(Chai playlist skips router videos 12+ — only study this if examiner asks.)*

---

## 2. Performance & Optimization

### Reduce initial load in CSR (top pending)

CSR ships JS before content. Fixes:
1. **Code splitting / lazy loading** (below) — split vendor + routes
2. **Minify + compress** (Vite prod does this) — gzip/brotli
3. **Tree shaking** (Vite/Rollup) — drop unused exports
4. **CDN** for static assets; cache headers
5. **SSR / SSG / prerender** for critical pages (Next.js) — HTML first
6. Images: compress, `loading="lazy"`, correct sizes, WebP
7. Avoid huge state upfront — fetch above-the-fold data first

### Code splitting

**Simple words:** break the bundle into chunks loaded **on demand** instead of one giant file.

```jsx
const Settings = lazy(() => import("./Settings.jsx"));   // separate chunk
<Suspense fallback={<Spinner />}><Settings /></Suspense>
```

Route-based splitting: each page = own chunk (`React.lazy` per route). Vite also supports manual `import()` splits automatically for dynamic imports.

**Terms to mention in exam:** code splitting, dynamic `import()`, chunks, initial bundle size.

### Lazy loading

Load assets/components **only when needed** — images when scrolled near viewport (`loading="lazy"`), components when route visited (`React.lazy`), data when requested. Reduces initial payload + parse time.

### Suspense and fallback

```jsx
<Suspense fallback={<p>Loading...</p>}>
  <LazyComponent />
</Suspense>
```

Suspense **suspends** rendering of the child until ready and shows `fallback`. Also used for data (framework-level) and React 19 promise-in-render. Fallback = spinner/skeleton.

**Terms to mention in exam:** Suspense, fallback, lazy, placeholder while loading.

Docs: https://react.dev/reference/react/lazy · https://react.dev/reference/react/Suspense

### Memoization techniques + cons

Techniques: `React.memo`, `useMemo`, `useCallback`, (React 19 Compiler auto-memoizes).

**Cons of memoization:** overhead, stale deps, false misses on new object identities, premature optimization tax — **profile first**. Full discussion: `03-hooks.md` §4.

### React profiler / Profiling

- **React DevTools Profiler** — record interactions, see which components re-rendered, flamegraph of render duration.
- **`<Profiler id="App" onRender={cb}>`** — programmatic timing: `cb(id, phase, actualDuration, baseDuration, startTime, commitTime)`.
- React `whyDidYouRender` style tools for missed memoization.
- **Throttle/debounce** for input-driven renders (below).

**Terms to mention in exam:** React Profiler, flamegraph, commit timing, DevTools.

Docs: https://react.dev/reference/react/Profiler

### Throttling vs Debouncing

| | Throttle | Debounce |
|---|---|---|
| Fires | at most **once per interval** (leading/trailing) | **after silence** (wait N ms since last call) |
| Use | scroll/resize/mousemove — limit rate | search-as-you-type, autosave — wait until user stops |
| Behavior | 10 calls/sec → e.g. 1/sec | resets timer each keystroke → fires once at end |

```js
// debounce
function debounce(fn, ms) {
  let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
}
// throttle sketch: ensure one execution per window
```

**Terms to mention in exam:** throttle = rate limit, debounce = delay until quiet, search input, scroll perf.

### Optimize application (clearing intervals)

Already covered: **always clear intervals/timeouts/listeners in effect cleanup** — leaks cause ghost setState, CPU burn, memory growth. Also: virtualize huge lists (`react-window`), stable keys, avoid anonymous props into memo'd children, `useCallback` for shared handlers.

### How SPA loads dynamic data (repeated — short answer)

Shell HTML+JS loads → `useEffect` fires `fetch` → JSON → `setState` → re-render with data. Optionally loading skeleton via state.

### Integrating React into existing application

React is a **library** — can be adopted **incrementally** in a legacy (jQuery/EJS) app:
1. Add React root via CDN/`npm` in one page or section
2. `createRoot` on a specific `<div id="legacy-widget">` (not whole body)
3. Build widgets (comment box, date picker) in isolation
4. Share data via props from globals / AJAX to same backend as existing app
5. Migrate view-by-view; mix server templates with React islands (**"use React where interaction lives"**)

**Terms to mention in exam:** incremental adoption, island/partial migration, library not framework, createRoot on subtree.

---

## 3. Miscellaneous (one-liners)

**Flux architecture:** Facebook's pattern — **unidirectional data flow**: `Action → Dispatcher → Store → View → Action...`. Views don't mutate stores directly; they dispatch actions. Redux = Flux-inspired (reducer/store/dispatch). React one-way props echo this.

**Axios interceptors:**

```js
api.interceptors.request.use((cfg) => { cfg.headers.token = getToken(); return cfg; });
api.interceptors.response.use((res) => res, (err) => { if (err.status === 401) logout(); return Promise.reject(err); });
```

Central place to attach auth tokens, log, handle 401s, transform responses — vs wrapping every call.

**LocalStorage vs sessionStorage:**

| | localStorage | sessionStorage |
|---|---|---|
| Lifetime | **Forever** until cleared/JS deletes | **Tab session only** — dies on tab close |
| Share across tabs | ✅ yes | ❌ no (per tab) |
| Size | ~5–10MB | ~5MB |
| Use | prefs, tokens (careful!), drafts | multi-step wizard state |
| API | `getItem/setItem/removeItem` both | same |

**IndexedDB:** low-level **async** DB in the browser — large structured data, blobs, offline apps (PWA). API callback-ish/awkward → wrappers like **Dexie.js**. localStorage = synchronous strings only.

**PNG vs JPG:** see `04-todo-project.md` §8.

**`dangerouslySetInnerHTML`:** React's escape hatch to inject raw HTML (`dangerouslySetInnerHTML={{ __html: html }}`) — default React **escapes** text (XSS protection). Name says "dangerous" deliberately. Use only for trusted content (e.g. sanitized markdown output).

**React Portals:** render children into a **DOM node outside the parent hierarchy** — modals, toasts, tooltips that must escape `overflow: hidden` / stacking context:

```jsx
createPortal(<div className="modal">...</div>, document.body);
```

Event bubbling still follows **React tree** (not DOM tree) — context works too.

**DOM direct manipulation:** React prefers declarative state → render. Occasional OK: `ref.current.focus()`, scrollIntoView, measuring, third-party chart SDKs. Direct DOM outside React for UI state = bugs (React overwrites on next render).

**Arrow functions:** `(a) => a * 2` — concise syntax, **lexical `this`** (inherits outer this — handy in class handlers). As JSX handlers: `onClick={() => setN(n+1)}` passes new fn each render (pair with `useCallback` if memoizing children).

**Map syntax:** `array.map((item, index) => JSX)` → array of elements. Not loop statement — **returns new array**. Guard: `Array.isArray(x) && x.map(...)` for optional data.

**Reduce vs filter:**
- `filter` — **subset** by predicate (same item type): done todos.
- `reduce` — **fold** array into single value (sum, count, group-by, new object): `todos.reduce((n, t) => n + (t.done ? 1 : 0), 0)`.
- Filter then count = two passes; reduce can do either; filter is clearer for selection, reduce for aggregation.

**Higher-order functions (examples):** functions that take/return functions — `map`, `filter`, `reduce`, `sort((a,b)=>...)`, `forEach`, **HOCs** (`withAuth`), `debounce(fn)`, `compose`. Core to React style.

**Spread operator:** `...arr` copy/merge elements; `{...obj, k: v}` shallow copy + patch — **the immutable state update tool** (see `05-state-props.md` §3). Also JSX passthrough `{...props}`, call args `fn(...args)`.

**Naming conventions / return statement / root element / htmlFor:** see `06-components-patterns.md` §11.

**Viewport:** see `04-todo-project.md` §8.

**NPM / HMR / tree shaking / Vite pros:** see `01-vite-setup.md`.

---

## Suggested study order

1. 🔴 Four core guides (`01`–`04`)
2. 🔴 `05-state-props.md` + `06-components-patterns.md` (heavy viva overlap)
3. 🟡 This file — Performance section
4. 🟢 Router + misc one-liners (skim day-before)

**Ready for the quiz?** Say yes — all questions in one batch.
