# M15 Checklist — Redux & Global State

Exam: **Fri 6 Nov 2026** (given — extended from 30 Oct). Chat started 29 Oct 2026.
Sources: `RAW-Technical.md` (6 portal topics) + `fromPendingBucket.md` (depth/question selection only — order stays simple→complex).
Notes files: `01-Why-Redux.md` → (new note per major topic as we pass it).
Env: node v24.14.1 ✓ · mongod 8.3.7 ✓ (checked 29 Oct) — re-verify `mongod` actually running on project day.
Carry-overs from M14 (⭐ = flagged in both attempts): `useContext` ⭐ · `useLayoutEffect` ⭐ · "global state management" · "what is a store?" · examiner: "improve the practical side more".

## Day 1 — Thu 29 Oct (evening)

- [ ] B1 Why Redux? (capsule → explain back) — capsule delivered, explain-back pending
- [ ] B2 (if energy) Redux building blocks: store / action / reducer / dispatch — the data flow

## Day 2 — Fri 30 Oct · Redux core + scaffold

- [ ] Capsule: store + Provider + configureStore (raw Redux, no toolkit)
- [ ] Capsule: actions, action creators, reducers = pure functions, immutability (pendings hits)
- [ ] Typed: counter — useDispatch + useSelector
- [ ] Typed: add-item list component (real examiner practical from pendings)
- [ ] OLX scaffold: Vite frontend + Express skeleton + routes + empty pages + git repo (app EXISTS today)
- [ ] Redux DevTools installed (capsule depth comes Day 4)

## Day 3 — Sat 31 Oct · Redux Toolkit + carry-overs

- [ ] Capsule: RTK — createSlice, configureStore, Immer; Redux vs Redux Toolkit (pendings hits)
- [ ] Typed: rebuild counter as a slice; cart add/remove/qty slice (reused in project)
- [ ] Capsule: Global state management + Context vs Redux — closes M14 `useContext` ⭐ + "global context" gaps
- [ ] Typed: `useContext` demo from memory (M14 EXAM.md rule: rebuild, don't reread)
- [ ] Capsule: `useLayoutEffect` vs `useEffect` ⭐
- [ ] Portal response draft #1 (Redux topic) saved

## Day 4 — Sun 1 Nov · Async Redux

- [ ] Capsule: middleware — what + why + applyMiddleware
- [ ] Capsule: Thunk (how async actions work); Thunk vs Saga one-layer contrast (pendings-frequent)
- [ ] Capsule: createAsyncThunk + extraReducers lifecycle (pending/fulfilled/rejected)
- [ ] Typed: thunk fetch demo — loading/error/data states with DevTools time-travel
- [ ] Project: GET /api/products (Express route + model) · productsSlice with createAsyncThunk · Listing page
- [ ] Portal response draft #2 (middleware + DevTools)

## Day 5 — Mon 2 Nov · Error handling + forms

- [ ] Capsule: Error Boundaries (class component, getDerivedStateFromError / componentDidCatch, where they do NOT catch)
- [ ] Capsule: StrictMode (double render/intent) — connects to useLayoutEffect block
- [ ] Typed: ErrorBoundary wrapper demo
- [ ] Capsule: React Hook Form — register / handleSubmit / formState.errors / validation rules
- [ ] Typed: Sell-page form in project (title, description, price, category, image URL + validation)
- [ ] Capsule: Express error middleware + HTTP status codes (400/401/403 — pendings-frequent)
- [ ] Portal response draft #3 (error handling topic)

## Day 6 — Tue 3 Nov · JWT + auth

- [ ] Verify mongod running; seed data
- [ ] Capsule: JWT — structure (header.payload.signature), how verify works, one-layer on access vs refresh + storage trade-offs (localStorage vs httpOnly cookie — pendings-frequent)
- [ ] Typed: Express auth route + JWT sign/verify middleware
- [ ] Typed: Login page + authSlice (token + user in Redux) + protected Sell flow
- [ ] Light theory: selectors · combineReducers · legacy connect API (mapState/mapDispatchToProps — pendings-frequent)
- [ ] Portal response draft #4 (project part 1)

## Day 7 — Wed 4 Nov · Project completion

- [ ] Data filters (category/price) via query params
- [ ] Checkout endpoint (POST /api/checkout → isSold: true) + checkoutSlice status states
- [ ] Cart page: qty update, remove, clear on checkout
- [ ] Express error middleware wired on every route; full-flow test: login → sell → list → cart → checkout → item gone from listing
- [ ] Portal response drafts #5–6 finish (all 6 topics ready to submit)

## Day 8 — Thu 5 Nov · Zustand + MobX + mock exam

- [ ] Capsule: Zustand — create(), store + hooks, why less boilerplate (vs Redux)
- [ ] Typed: Zustand mini counter/store
- [ ] Capsule: MobX — observables / actions / computed / reactions; makeObservable vs makeAutoObservable
- [ ] Typed: MobX counter
- [ ] Mock exam: I ask a full pendings-frequency question batch (theory + practicals) — answered in one go, then graded
- [ ] Walkthrough script for OLX project (spoken, 5 min)
- [ ] Interview question bank exists in `Module 15\Learnings\LW-Ai\interview-question-bank.md` (parallel chat task — standing rule)

## Fri 6 Nov · EXAM

- [ ] Morning only: re-read notes files, top-frequency keywords list, no new topics
