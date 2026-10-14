# Blog App — Exam Walkthrough (Module 14)

Built: 12 Oct 2026 · Exam: 13 Oct 2026
Location: `Module 14/Exam/ForEXAM/BlogApp`

---

## 1. Folder structure & what each file does

```
BlogApp/
├── index.html              ← the ONE html file; Vite injects the built JS into <div id="root">
├── vite.config.js          ← registers the React plugin (JSX → JS)
├── package.json            ← deps: react, react-dom, react-router-dom, firebase
├── .env                    ← Firebase keys as VITE_* variables (never committed)
├── dist/                   ← OUTPUT of `npm run build` (production-ready, gitignored)
└── src/
    ├── main.jsx            ← entry point: mounts <App/> into #root, wraps with AuthProvider + BrowserRouter
    ├── App.jsx             ← route table: /login, / (index), /add, /edit/:id, * (fallback)
    ├── firebase.js         ← initializeApp + exports `auth` (Auth) and `db` (Firestore)
    ├── index.css           ← styling
    ├── context/AuthContext.jsx   ← Context: create + Provider + useAuth() custom hook
    ├── components/
    │   ├── Layout.jsx      ← navbar + <Outlet/> (nested-route shell)
    │   └── ProtectedRoute.jsx    ← redirects to /login if not logged in
    └── pages/
        ├── Login.jsx       ← email/password login + signup toggle
        ├── BlogList.jsx    ← live post list (onSnapshot), edit/delete buttons
        └── AddEditBlog.jsx ← one page handles BOTH add and edit (useParams decides)
```

## 2. Data flow (login → context → routes → Firestore)

```
main.jsx
  └─ AuthProvider          ← Firebase onAuthStateChanged listener lives here
       └─ BrowserRouter
            └─ App (route table)
                 ├─ /login → Login page (calls signup/login from context)
                 └─ ProtectedRoute        ← reads context; no user? → Navigate to /login
                      └─ Layout          ← navbar (user email + logout from context) + <Outlet/>
                           ├─ /          → BlogList   (onSnapshot on "posts" collection)
                           ├─ /add       → AddEditBlog (addDoc)
                           └─ /edit/:id  → AddEditBlog (useParams → getDoc → updateDoc)
```

Step by step:

1. App loads → `AuthProvider` attaches `onAuthStateChanged` → user is null, `loading` true.
2. `ProtectedRoute` shows "Checking login…" until loading finishes, then redirects if null.
3. User submits Login form → `login(email, password)` → Firebase verifies → fires `onAuthStateChanged` → context `user` updates → every consumer re-renders → `ProtectedRoute` now lets them through.
4. `BlogList` subscribes with `onSnapshot` — Firestore pushes changes; add/edit/delete appear instantly without refetch.
5. Delete → `deleteDoc` (owner-only buttons). Edit → `navigate('/edit/:id')` → `useParams()` reads the id → `getDoc` loads → `updateDoc` saves.

## 3. Key exam-ready code facts

- Context triple: `const Ctx = createContext()` → `<Ctx.Provider value={...}>` → `useContext(Ctx)` (wrapped in `useAuth()`).
- `useCallback` wraps `signup/login/logout` so context functions keep the **same reference** across renders → no extra re-renders of consumers.
- Route guard pattern: `<Route element={<ProtectedRoute><Layout/></ProtectedRoute>}>` — layout + protection in one.
- Edit mode detection: `const { id } = useParams(); const isEdit = Boolean(id);`
- Firestore CRUD: `addDoc`, `getDoc`, `updateDoc`, `deleteDoc`, `onSnapshot`, `serverTimestamp`.
- Every subscription returns `unsubscribe` from `useEffect` → no memory leaks.

---

## 4. Exam questions + SHORT model answers (all 7 topics)

### Topic 1 — Routing with react-router-dom

**Q: What is react-router-dom and why do we need it?**
React apps are **single-page applications** — one `index.html`, no server round-trip per page. react-router-dom is a **client-side routing library** that maps the URL to React components, so different URLs render different components without reloading the page.

**Q: Name the core pieces you used.**
`BrowserRouter` (router provider, wraps the app), `Routes` (container for all routes), `Route` (one URL pattern → one element), `Link`/`NavLink` (declarative navigation), `useNavigate` (programmatic navigation), `useParams` (read dynamic segments), `Outlet` (nested rendering point).

**Q: What is a route parameter / dynamic path? Give your example.**
A **dynamic segment** marked with `:` in the path. Our route is `/edit/:id` — the URL `/edit/abc123` sets `id = "abc123"`, read via `const { id } = useParams()`. One component handles every post's edit page.

**Q: What is nested routing and what does Outlet do?**
A **parent route** renders shared UI (navbar) and `<Outlet/>` marks where the **child route's** element appears. Our `Layout` route has no path — it uses `index`/children routes, so `/` and `/add` and `/edit/:id` all share the navbar without repeating it.

**Q: `<Link>` vs `<a>` tag?**
`<a href="/x">` causes a **full page reload** — React state is lost, the whole bundle re-downloads. `<Link to="/x">` updates the URL via the **History API** and swaps the component — no reload, state preserved.

**Q: HashRouter vs BrowserRouter vs MemoryRouter?**

- **BrowserRouter** — clean URLs (`/edit/1`), needs server config (rewrite all paths to index.html).
- **HashRouter** — URL has `#` (`/#/edit/1`), works on any static host without config.
- **MemoryRouter** — URL lives **in memory**, not in the browser bar; used for testing/React Native.

**Q: How do you protect a route?**
Wrap the element in a guard component: `ProtectedRoute` reads the auth context; if no user → `<Navigate to="/login" replace/>`. The route is **unreachable** without login — done client-side (note: real apps ALSO enforce rules on the server/Firestore side).

### Topic 2 — Context API & hooks

**Q: What problem does Context solve?**
**Prop drilling** — passing props through many component levels that don't need them. Context creates a "global" value any component can consume directly.

**Q: Main components of the Context API?**

1. `createContext()` — creates the Context object.
2. `<Context.Provider value={...}>` — supplies the value to a subtree.
3. `useContext(Context)` — consumes the value in any child component.
   (Class-era 4th way: `<Context.Consumer>` render-prop — rarely used now.)

**Q: Where did you use useContext? Global auth state?**
`AuthContext.jsx` — Provider holds `user`, `loading`, `signup`, `login`, `logout`. Every page calls the `useAuth()` custom hook instead of prop drilling. Firebase's `onAuthStateChanged` keeps `user` in sync — including after a **page refresh** (localStorage is not needed).

**Q: useCallback — what and why here?**
`useCallback(fn, [])` returns a **memoized function** with a stable reference between renders. Our `signup/login/logout` never change, so their identity is fixed → context consumers don't re-render just because the Provider re-rendered. (Pairs with `React.memo` on children.)

**Q: useMemo — what's the difference from useCallback?**
`useMemo` memoizes a **computed VALUE**; `useCallback` memoizes a **FUNCTION**. Example: `const sorted = useMemo(() => [...posts].sort(...), [posts])` — recompute only when `posts` changes. Prevents **recalculation**, not re-render.

**Q: useNavigate vs useParams?**

- `useNavigate()` — **imperative** navigation: `navigate("/")` after login/delete/save.
- `useParams()` — **reads** the dynamic segment of the current URL (`:id`).

**Q: Limitations of Context?**

- Every consumer **re-renders** when the value changes — no built-in selector/partial subscription like Redux/Zustand.
- Value objects recreated each render cause **unnecessary re-renders** (fix: `useMemo` the value, `useCallback` the functions).
- Deeply nested Provider trees are awkward; no devtools/middleware/async handling built in.
- Not ideal for **high-frequency updates** (e.g. drag coordinates, large lists).

**Q: One context or multiple for user data + theme + notifications?**
**Multiple small contexts.** Each updates at a different frequency — theme rarely changes, notifications often. Separate contexts mean a theme change doesn't re-render consumers of the notification context.

### Topic 3 — Advanced patterns

**Q: Custom hook — what, why, rule?**
A function whose name starts with `use` that **calls other hooks**. It extracts **reusable stateful logic** (not UI) so it isn't copy-pasted. Rule: only call hooks at the **top level** of a component or another custom hook. Example in our app: `useAuth()` = one-line wrapper over `useContext(AuthContext)`.

**Q: HOC — Higher-Order Component?**
A function that takes a component and **returns a new enhanced component**: `const withAuth = (Wrapped) => (props) => user ? <Wrapped {...props}/> : <Navigate to="/login"/>`. Use cases: auth guards, theme injection, logging, conditional rendering. Our `ProtectedRoute` is the modern equivalent; HOCs fell out of favor because of **wrapper hell** and unclear component trees — **custom hooks + composition** are preferred today.

### Topic 4 — Babel & Webpack

**Q: What does Babel do?**
A **JavaScript compiler/transpiler** — converts modern JS/JSX that browsers don't understand into compatible older JS. In React: the **Babel JSX plugin** turns `<h1>Hi</h1>` into `React.createElement("h1", null, "Hi")`.

**Q: What does Webpack do?**
A **module bundler** — starts from entry files, follows every `import`, and packs all modules (JS, CSS, images) into optimized **bundles**. Loaders (e.g. babel-loader, css-loader) transform file types along the way.

**Q: Babel vs Webpack — one line each?**
**Babel = translator** (syntax: JSX → JS). **Babel is not needed to understand: Babel = translator** (syntax: JSX → JS). **Webpack = packer** (modules → bundles). They complement each other: babel-loader puts Babel inside Webpack's pipeline.

### Topic 5 — How React projects are bundled

**Q: What is Vite's role?**
Vite = build tool + dev server. In **dev** it serves files **natively as ES modules** — no bundling, instant startup, **HMR** (Hot Module Replacement) on save. In **build** it uses **Rollup** to bundle into a small production artifact.

**Q: What does `npm run build` produce?**
A **`dist/`** folder: minified, hashed JS/CSS bundles + the `index.html` that references them. Hashed filenames (`index-COZ_Kxdp.js`) = **cache busting** — new build → new name → browsers fetch fresh files.

**Q: Our build warned "chunk > 500 kB". Why and the fix?**
React + Firebase in one bundle is large. Fix = **code splitting** — `React.lazy(() => import('./pages/Login'))` + `<Suspense fallback={...}>` to load page bundles **on demand**, improving initial load time.

**Q: Tree shaking?**
Dead-code elimination — the bundler drops **unused exports** from imported libraries. Only the Firebase functions we actually call end up in the bundle.

### Topic 6 — Building & serving a production app

**Q: Steps to build and serve a React app?**

1. `.env` holds real config (`VITE_*`).
2. `npm run build` → `dist/`.
3. **Serve statically** — any static host: `npx vite preview` (local check), Netlify, Vercel, Firebase Hosting, or Nginx. The host only serves files — **no Node/Express needed**.
4. BrowserRouter on a static host needs an **SPA rewrite** (all 404s → index.html) — or use HashRouter.

**Q: dev vs production differences?**
Dev: unminified, unbundle, HMR, source maps, env only loaded as written. Production: minified + bundled + hashed, tree-shaken, `import.meta.env` values **baked in at build time**.

**Q: Where do secrets go?**
`.env` with `VITE_` prefix → read via `import.meta.env.VITE_X`. ⚠️ Anything VITE\_-prefixed is **exposed to the browser** — fine for Firebase (its security comes from **Firestore rules**, not secrecy). Never put real server secrets there.

### Topic 7 — Project-specific questions

**Q: How does your auth state survive a page refresh?**
`onAuthStateChanged(auth, cb)` — Firebase Auth persists the session internally (localStorage/IndexedDB) and fires the callback on app start, so `AuthProvider` restores `user` without re-login.

**Q: How does one page handle both add and edit?**
`/add` and `/edit/:id` both render `AddEditBlog`. `useParams()` gives `id`; `isEdit = Boolean(id)` switches between `addDoc` (new doc) and `getDoc`+`updateDoc` (existing doc).

**Q: How does the list update after add/edit/delete without a refresh?**
`onSnapshot` — Firestore's **real-time listener**. Every change in the queried collection pushes a new snapshot; we `setPosts` from it. The `useEffect` cleanup returns `unsubscribe` so leaving the page stops the listener.

**Q: Firestore security — is owner-only button hiding enough?**
No — hiding buttons is **UI only**. Production must add **Firestore Security Rules** (e.g. `request.auth.uid == resource.data.authorId` for delete/update). Mention this in the exam; it impresses.

**Q: Why is `serverTimestamp()` used instead of `new Date()`?**
Firestore's server time is **consistent across all clients**; device clocks can be wrong. Also enables reliable `orderBy("createdAt")`.

---

## 5. Quick revision — 60 seconds before exam

- **Router**: BrowserRouter > Routes > Route; `:` = param; Outlet = child slot; Link = no reload.
- **Context**: create → Provider → useContext; solves prop drilling; multiple contexts > one big one.
- **useCallback** = memoized function, **useMemo** = memoized value, **React.memo** = skip re-render on same props.
- **Custom hook** = `use`-prefixed function using hooks, reusable logic. **HOC** = component in → component out; now mostly replaced by hooks.
- **Babel** translates syntax (JSX), **Webpack** bundles modules; **Vite** = dev server (ESM, HMR) + Rollup build.
- **Build** → `dist/` (minified, hashed, tree-shaken) → any **static host**; SPA rewrite for BrowserRouter.
- **Firebase**: Auth (onAuthStateChanged) + Firestore (onSnapshot) + Context = global auth state; `.env` for config; security rules are the real gate.
