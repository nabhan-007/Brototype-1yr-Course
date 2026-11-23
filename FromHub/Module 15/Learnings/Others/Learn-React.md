# Learn React — resources mapped to the course

A shared list for anyone learning React through the Brototype path (Module 13 → 14 → 15).
Every link below was opened and its facts read off the page on **23 Nov 2026** — channel, length, upload date and view count are real, not remembered.

**Legend:** 🎬 video · 📄 docs · ⚠️ dated (concept still correct, syntax may not be) · 🇮🇳 Malayalam

**Rule that matters more than any link:** watch *after* you have tried the topic yourself. A video you watch before typing is entertainment.

---

## Start here (new to React)

1. 🎬 **React 19 Complete Tutorial — Codevolution** — 38 videos · Oct–Nov 2025 · 525K views
   `https://www.youtube.com/playlist?list=PLC3y8-rFHvwg9D7EOSEBabuutIdKZN5V3`
   The spine of the whole course. Short videos (4–8 min), current API, matches what you actually write. Work through it in parallel with modules 13–15.
2. 🎬 **Vite in 100 Seconds — Fireship** — 2 min · Feb 2022 · 1.15M views
   `https://www.youtube.com/watch?v=KCrXgy8qtjM`
   Why the project starts with `npm create vite`, not `create-react-app` — the exact question Module 13 asks.
3. 📄 **react.dev/learn** — the official docs, free.
   When a video and the docs disagree, the docs win.

---

## Module 13 — Vite, core React, hooks, To-Do app

| Portal topic | Pick | Facts | Why this one |
|---|---|---|---|
| **1. Vite setup** (`vite.config.js`, why not CRA) | 🎬 Vite in 100 Seconds — Fireship<br>`https://www.youtube.com/watch?v=KCrXgy8qtjM` | 2 min · 2022 · 1.15M | The 2-minute answer to "what is Vite and why faster than CRA" |
| | 🎬 Vite Crash Course — freeCodeCamp | 40 min · May 2025 · 105K<br>`https://www.youtube.com/watch?v=do62-z3z6FM` | Goes through config, plugins and the production build for real |
| **2. Core React** (SPA, components, render cycle, props/state, lifecycle, JSX, events) | 🎬 React 19 Complete Tutorial — Codevolution | 38 vids · Oct–Nov 2025 · 525K<br>`https://www.youtube.com/playlist?list=PLC3y8-rFHvwg9D7EOSEBabuutIdKZN5V3` | Current, ordered exactly like the topics |
| | 🇮🇳 🎬 React JS Full Course in Malayalam — codeSchool Malayalam | 2 h 25 m · Jan 2025 · 55K<br>`https://www.youtube.com/watch?v=0UxJ3Uc-Dd0` | Whole React basics in Malayalam, 2025-recorded |
| | ⚠️ 🇮🇳 🎬 React Challenge — Brototype Malayalam | 12 vids · May–Jun 2021 · 669K<br>`https://www.youtube.com/playlist?list=PLY-ecO2csVHfgVM9sChmUirqK7BXUBX9P` | Your own course's channel; great for virtual DOM / components explained in Malayalam. **2021** — class components and pre-18 patterns, take the idea, not the syntax |
| **3. Hooks** (`useState`, `useEffect`, `useRef`) | 🎬 Learn React Hooks: useEffect — Cosden Solutions | 14 min · 2023 · 316K<br>`https://www.youtube.com/watch?v=-4XpG5_Lj_o` | The clearest useEffect explainer; dependencies, cleanup, mistakes |
| | ⚠️ 🎬 useEffect with cleanup — Codevolution | 6 min · 2019 · 290K<br>`https://www.youtube.com/watch?v=DTlmk6QeOHY` | The cleanup + StrictMode double-mount case examiners like to poke |
| | 🇮🇳 🎬 React All Hooks — Code Malayalam | 10 vids · 2021 · 33K<br>`https://www.youtube.com/playlist?list=PLQzJEzrRmXOXg39-jbEsrUQWGB2Mhv0gI` | useState → useEffect → useContext → useMemo/useCallback → useRef → custom hooks → useReducer, all in Malayalam. Hooks API has not changed since |
| **4. Project: To-Do app** | 🎬 Build this to-do-list app with React — Bro Code | 23 min · Dec 2023 · 184K<br>`https://www.youtube.com/watch?v=9wiWzu_tRB0` | Same scope as the portal project: add / update / delete / complete |

> Known gap in the Codevolution playlist: it has **no `useEffect`/data-fetching video**. The two useEffect links above plus 🎬 **Modern Data Fetching in React — Cosden** (17 min · 2024 · 141K, `https://www.youtube.com/watch?v=MBlZ8Wzkbi4`) cover it.

---

## Module 14 — Router, Context, patterns, bundling, Firebase blog

| Portal topic | Pick | Facts | Why this one |
|---|---|---|---|
| **1. react-router-dom** (routes, params, nested + `Outlet`, dynamic paths) | 🎬 React Router — Complete Tutorial — Cosden Solutions | 24 min · Jan 2024 · 269K<br>`https://www.youtube.com/watch?v=oTIJunBa6MA` | One video, whole router: nested routes, params, loaders, protected routes |
| | 🇮🇳 🎬 React Router 6 — Code Malayalam | 9 vids · Jan–Jun 2022 · Code Malayalam<br>`https://www.youtube.com/playlist?list=PLQzJEzrRmXOVOLz1b3g6u1Z3eD34yM3WM` | Malayalam, and it happens to cover every portal bullet: `useParams`, `useSearchParams`, nested + `Outlet`, dynamic routes, `React.lazy` + `Suspense`, protected routes |
| **2. Context API + `useContext`/`useNavigate`/`useParams`/`useMemo`/`useCallback`** | 🎬 React 19 Tutorial — Context videos (#33–36) — Codevolution | 4 videos · 2025<br>`https://www.youtube.com/playlist?list=PLC3y8-rFHvwg9D7EOSEBabuutIdKZN5V3` | Context created, provided and consumed with the current API |
| | 🇮🇳 🎬 useContext (#12) + useMemo/useCallback (#14) — Code Malayalam | 16 min + 20 min · 2021<br>`https://www.youtube.com/playlist?list=PLQzJEzrRmXOXg39-jbEsrUQWGB2Mhv0gI` | Same two hooks in Malayalam, incl. when `React.memo` pays off |
| **3A. Custom hooks** | 🎬 Custom Hooks in React — Cosden Solutions | 13 min · Feb 2024 · 110K<br>`https://www.youtube.com/watch?v=I2Bgi0Qcdvc` | Teaches the *design* rule: hooks extract logic, not markup |
| **3B. HOC** | ⚠️ 🎬 Higher Order Components (Part 1) — Codevolution | 7 min · 2019 · 450K<br>`https://www.youtube.com/watch?v=B6aNv8nkUSw` | Old but HOC is a frozen pattern — this is still the standard explanation |
| **4. Babel & Webpack** | 🎬 Module Bundlers Explained — Fireship | 10 min · 2020 · 557K<br>`https://www.youtube.com/watch?v=5IG4UmULyoA` | What a bundler even is, and why Webpack/Rollup/Parcel/Vite differ |
| | 🎬 Webpack 5 Crash Course — Traversy Media | 41 min · Mar 2022 · 337K<br>`https://www.youtube.com/watch?v=IZGNcSuwBZs` | Entry → output → loaders → plugins, i.e. where Babel sits in the chain |
| **5. Production build & serve** | 📄 Vite docs — Build & Preview<br>`https://vite.dev/guide/build` | — | `npm run build` → `dist/`, `npm run preview` to serve it. No video does this better than the two-command docs |
| **6. Blog app (Firebase Auth + Firestore + Router)** | 🎬 Firebase Crash Course (Auth & Firestore) — Net Ninja | 13 vids · Jul–Aug 2026 · fresh<br>`https://www.youtube.com/playlist?list=PLQ_-wTi3ayEg` | Newest Firebase material found; auth + firestore in the v9+ modular API you will write |
| | 🎬 Firebase React Course — PedroTech | 1 h 39 m · Jan 2023 · 333K<br>`https://www.youtube.com/watch?v=2hR-uWjBAgw` | Deeper single-sitting alternative if the crash course is too fast |

---

## Module 15 — Redux, middleware, errors & forms, Zustand, MobX

| Portal topic | Pick | Facts | Why this one |
|---|---|---|---|
| **1. Redux core** (store, actions, reducers, dispatch) | 🎬 Redux — Complete Tutorial (with Redux Toolkit) — Cosden Solutions | 37 min · Oct 2023 · 433K<br>`https://www.youtube.com/watch?v=5yEG6GhoJBs` | Modern RTK, no legacy `switch`-reducer ceremony. Best single video |
| | 🎬 React Redux Full Course — Dave Gray | 4 h · May 2022 · 502K<br>`https://www.youtube.com/watch?v=NqzdVN2tyvQ` | Slow, project-paced; use as reference, not wall-to-wall |
| | 🇮🇳 🎬 Redux Malayalam — Debug Media | 3 vids · Aug–Sep 2022 · 12K<br>`https://www.youtube.com/playlist?list=PL4KwFGqvN4ntuJhFqC18WWytOJKFmpqGd` | Malayalam, and the 3 parts map 1:1 onto the portal: RTK basics → `useSelector`/`useDispatch` → `createAsyncThunk` + `useMemo` |
| **2. Middleware + DevTools** | 🎬 Redux Toolkit Tutorial — Codevolution | 15 vids · Apr 2022<br>`https://www.youtube.com/playlist?list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3` | Dedicated videos for `createAsyncThunk`, `extraReducers` and DevTools setup |
| | 🎬 Redux & RTK with Async Operations — freeCodeCamp | 7 h 48 m · Nov 2024 · 102K<br>`https://www.youtube.com/watch?v=SlC8941Wwrk` | Jump only to the thunk chapters — do not watch end to end |
| | ⚠️ 🎬 Redux Devtools (#14) — Jinson Abraham | 5 min · Jun 2021 · 2K<br>`https://www.youtube.com/watch?v=ZXbjegpcoFg` | Malayalam, but it is episode 14 of 14 — only useful as the DevTools demo |
| **3A. Error Boundaries** | 🎬 Error Handling in React — Cosden Solutions | 11 min · Feb 2025 · 52K<br>`https://www.youtube.com/watch?v=OQQAv8t3bfc` | Current, and covers recovery + what boundaries do *not* catch |
| | ⚠️ 🎬 Learn React Error Boundaries in 7 Minutes — Web Dev Simplified | 7 min · 2023 · 165K<br>`https://www.youtube.com/watch?v=_FuDMEgIy7I` | Fastest pass over the class-component boundary |
| **3C. React Hook Form** | 🎬 React Hook Form — Complete Tutorial — Cosden Solutions | 28 min · Jan 2024 · 262K<br>`https://www.youtube.com/watch?v=cc_xmawJ8Kg` | `register`, rules, `handleSubmit`, `formState` — the exact vocabulary examiners ask for. Skip the Zod half if short on time |
| **4. OLX-style project (JWT + Express + Mongo)** | 🎬 MERN Stack Tutorial for Beginners with Deployment — freeCodeCamp | 3 h 35 m · Aug 2025<br>`https://www.youtube.com/watch?v=F9gB5b4jgOI` | Whole app, deployed; closest thing to the OLX project end to end |
| | 🎬 React Login with JWT Access + Refresh Tokens, Cookies, Axios — Dave Gray | 41 min · Jan 2022 · 926K<br>`https://www.youtube.com/watch?v=nI8PYZNFtac` | Exactly the auth model the project needs: access vs refresh, httpOnly cookies, interceptors |
| **5. Zustand** | 🎬 Zustand — Complete Tutorial — Cosden Solutions | 19 min · Dec 2023 · 243K<br>`https://www.youtube.com/watch?v=_ngCLZ5Iz-0` | `create`, selectors, slices, persist — and why there is no `Provider` |
| **6. MobX** | 🎬 MobX state management explained — Learnersbucket | 17 min · Aug 2026 · 385<br>`https://www.youtube.com/watch?v=3bv3GXScukg` | The only current MobX video found. **Small channel, few views** — watch it, then confirm every claim against 📄 `mobx.js.org` |
| | 📄 MobX docs + `mobx-react-lite`<br>`https://mobx.js.org/README.html` | — | The 5 topics in the portal (observables, actions, computed, reactions, `makeAutoObservable`) are all one page each |

---

## Malayalam index

| Resource | Covers |
|---|---|
| React JS Full Course — codeSchool Malayalam (2 h 25 m, 2025) | M13 entire |
| ⚠️ React Challenge — Brototype Malayalam (12 vids, 2021) | M13 concepts |
| React All Hooks — Code Malayalam (10 vids, 2021) | M13 hooks, M14 `useContext`/`useMemo`/`useCallback`, custom hooks, `useReducer` |
| React Router 6 — Code Malayalam (9 vids, 2022) | M14 routing, protected routes, code splitting |
| Redux Malayalam — Debug Media (3 vids, 2022) | M15 Redux + thunk |
| ⚠️ Redux Devtools #14 — Jinson Abraham (5 min, 2021) | M15 DevTools only |

---

## After Module 15 — what to learn next

| Topic | Pick | Facts |
|---|---|---|
| **React performance** (`memo`, `useMemo`/`useCallback`, `lazy`+`Suspense`, keys, bundle size) | 🎬 The Best Ways To Optimize Performance in Modern React — Cosden Solutions<br>`https://www.youtube.com/watch?v=LuQ8VWh6eYE` | 20 min · May 2025 · 29K — the modern answer (React Compiler included) |
| | 🎬 How To Maximize Performance In Your React Apps — Web Dev Simplified | 13 min · 2023 · 189K · `https://www.youtube.com/watch?v=Qwb-Za6cBws` |
| **Why not always Redux** (state-management limits) | 🎬 Redux in 100 Seconds — Fireship<br>`https://www.youtube.com/watch?v=_shA5Xwe8_4` | 3 min · 2022 · 998K — when Redux is overkill, in 3 minutes |
| | 🎬 Redux vs Context API — Code Bless You | 3 min · 3y · 30K · `https://www.youtube.com/watch?v=n0Cvo2MrJbk` |
| **Next.js** | — | Nothing verified yet. Add one only after it is checked. |

---

## How to add a link to this file

1. Open it. If it 404s or redirects to the YouTube home page, do not add it.
2. Record four facts: **channel · length · upload date · view count**.
3. Say in one clause *which portal topic* it teaches.
4. Mark ⚠️ if it is older than ~2 years, so nobody copies dated syntax.

Checked 23 Nov 2026. One correction to an earlier version of this file: the **React Router — Malayalam** playlist was reported dead; it is alive (9 videos) and is now in Module 14 above.
