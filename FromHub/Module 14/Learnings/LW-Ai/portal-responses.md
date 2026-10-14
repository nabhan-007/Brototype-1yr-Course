# Module 14 — Portal "Your Response" drafts (paste after exam)

Short descriptions for each of the 7 tasks. Written to be pasted as-is.

---

## 1) Routing with React Router DOM

Built routing in a React blog application using **react-router-dom**. Used `BrowserRouter` + `Routes` + `Route` to map URLs to pages, and `<Link>`/`NavLink` for navigation without page reloads. Implemented **dynamic paths** with route parameters (`/edit/:id`) read via `useParams()` to edit different posts in one page, and **nested routing** with a shared `Layout` component that renders child routes through `<Outlet/>`. Protected routes redirect unauthenticated users to the Login page using `<Navigate>` and `useNavigate()` for programmatic navigation.

## 2) Global State Management with Context API

Implemented **global authentication state** with Context API: `createContext()` + `<AuthProvider>` Provider wrapping the app, consumed via a `useAuth()` custom hook built on `useContext`. Firebase's `onAuthStateChanged` keeps the user state in sync across pages (survives refresh). Used **useNavigate** for post-login redirection, **useParams** to read the edit-route id, **useCallback** to memoize the signup/login/logout functions passed through context (stable references, no extra re-renders), and **useMemo** to memoize computed values so expensive work only reruns when dependencies change.

## 3) Advanced React Patterns

Created a **custom hook** `useAuth()` that wraps `useContext(AuthContext)` — reusable stateful logic, one-line consumption in any component, following the rule that hooks run only at the top level. Studied **Higher-Order Components (HOC)** — a function taking a component and returning an enhanced component (e.g. an auth-guard wrapper). Compared the HOC auth-guard pattern with the modern equivalent used in the project (`ProtectedRoute` component + custom hooks), noting HOCs are less preferred today due to wrapper hell and unclear component trees.

## 4) Bundling and Build Tools

**Babel** — a JavaScript transpiler that converts modern JS/JSX into browser-compatible JS; its JSX plugin turns JSX syntax into `React.createElement` calls. **Webpack** — a module bundler that resolves every import from the entry point and packs JS/CSS/assets into optimized bundles using loaders (babel-loader, css-loader, etc.). In the project's Vite setup these roles are handled by esbuild/Rollup with the React plugin doing the JSX transform.

## 5) Understanding how React projects are bundled

A React project is bundled by starting from the entry (`main.jsx` → `index.html`), following all imports, and outputting optimized static files. **Vite** runs an instant dev server using native ES modules with **HMR**, and for production uses **Rollup** to produce a `dist/` folder: minified JS/CSS with **content-hashed filenames** (cache busting), **tree shaking** removes unused code, and **code splitting** (React.lazy + Suspense) loads page bundles on demand to reduce initial load size.

## 6) Building and serving a production-ready application

Ran `npm run build` to generate the production `dist/` folder (minified, hashed, tree-shaken bundles + index.html). Verified serving the production build locally with `vite preview` (HTTP 200). Production apps are served by any **static host** (Netlify, Vercel, Firebase Hosting, Nginx) — no Node server required. Configured Firebase keys via `.env` (`VITE_*` variables read through `import.meta.env`), and noted BrowserRouter on static hosts needs an **SPA rewrite** (all routes → index.html) or HashRouter.

## 7) Project: Blog Posting Application

Built a multi-page blog application with **Firebase Auth** (email/password) where the auth state is managed globally through a **Context API** `AuthProvider` + `useAuth` hook. Posts (text-only) are stored in **Firebase Firestore** with add (`addDoc`), edit (`updateDoc`), and delete (`deleteDoc`), with the list updating in real time via `onSnapshot`. **react-router-dom** handles pages — Login, Blog List, and an Add/Edit page driven by **route parameters** (`/edit/:id`), with a `ProtectedRoute` guarding the app and a shared `Layout` using `<Outlet/>`. Built for production with **Vite** and verified with `vite preview`.
