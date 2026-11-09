# M15 Checklist — Redux & Global State (REPLANNED 2 Nov)

Exam: **Fri 6 Nov 2026** (given) — **ATTEMPT 2 FAILED: theory 4/10, practical 2/10 (cutoff 5 each).** One pending theory topic: `useReducer` vs `extraReducers`. Practical = insufficient typing reps. Retry **Sat 14 Nov** — attempt-3 plan lives in `checklist-M15-Retry.md` (practice-first: Nabhan types all code, agent coaches by questions only). Rule override from 2 Nov applies to ATTEMPT 2 ONLY: **agent writes the code first (deadline), teach phase follows — explain-backs 100% required.**
Sources: `RAW-Technical.md` (6 topics) + `fromPendingBucket.md` (depth only; order simple→complex).
Env: node v24.14.1 ✓ · mongod 8.3.7 ✓ · service check on build.
Carry-overs M14: `useContext` ⭐ · `useLayoutEffect` ⭐ · "global state management" · "what is a store?" · "improve practical side more".

## Mon 2 Nov (today) — BUILD DAY

- [x] B1 Why Redux capsule delivered (29 Oct) — explain-back still owed
- [x] MongoDB running (service was Stopped; mongod launched manually, dbpath C:\Users\mhodn\data\db)
- [x] Backend: Express + MongoDB (User, Product), JWT auth, products CRUD + filters, checkout (isSold), error middleware + status codes — 9/9 API checks green (401 no-token, 403 wrong-user edit included)
- [x] Frontend: Vite + React Router + Redux Toolkit store (auth / products / cart / checkout slices), createAsyncThunk, RHF forms, Error Boundary, StrictMode
- [x] Verified running: backend :5000 + frontend :5173 + real-browser flow login→sell→cart→checkout (cart cleared, "1 item(s) purchased")
- [x] `02-Project-Walkthrough.md` written (per-file teaching doc + say-lines)
- [x] 2 Nov review pass: 4 must-fix bugs found, fixed, verified (Register crash, junk-id 500, checkout race cart wipe, expired-token trap) — ledger in `02-Project-Walkthrough.md`
- [x] Mock data seeded in BOTH accounts (`node seed.js`): demo 6 items (5 live + 1 SOLD badge) + test 5 items (4 live + 1 SOLD); category-colored placehold.co image tiles, browser-verified clean titles (fix: double-encoding showed literal `+` → now `%20`)
- [x] Fix #5 (Nabhan's find): seller could buy own listing → backend checkout 400 + UI shows "Your listing" on own items; both layers verified live
- [x] Review pass 2: full-file sweep (all 22 files) + junk-input probes (minPrice=abc, checkout junk-id, junk token — all 400/401, clean). Fix #6: cart + checkout "Checkout done" leaked across users on logout → extraReducers reset in cartSlice/checkoutSlice; browser proof Test cart(1) → logout → demo Cart(0)
- [x] UX doubts fixed (2 Nov): Login↔Register cross-links added (were dead text); DELETE listing feature added beyond rubric via Nabhan's ask — full status family verified (200/403/400/404) + browser button live; seed re-run to restore demo state
- [x] Review pass 3 (2 Nov): 4 more UX fixes, all browser-verified — register→login email prefill (location state), "Log in to add to cart" visitor hint on cards, honest empty-state (filters vs empty DB), two-click delete (Sure? arm → confirm + auto-disarm); say-lines added to walkthrough · Lesson: patchright snapshot refs die on re-render → click via CSS selectors (`.mine-list .card-row:nth-of-type(N) .btn-danger`); seed re-run after Air Fryer delete test
- Notes: two build bugs fixed in-flight (db.js `#` comment syntax error — node --watch caught it; store.js missing default export — browser blank page caught it). Vite bg process must be launched with NO timeout (a 20s timeout killed dev server once).

## Tue 3 Nov — Teach: Redux core + Toolkit (from the project's files)

- [x] Portal response boxes: USER wrote them himself + "1 attachment added" on T1 (+T2 visible); T1 text graded 2 Nov — keywords OK, told to add for the exam: single source of truth / pure functions / "Redux Toolkit" named
- [ ] Capsule: Why Redux / store / global state management (M14 answers) → explain-back
- [ ] Capsule: data flow — dispatch/action/reducer/subscribe, reducers = pure functions → explain-back
- [ ] Capsule: Redux Toolkit — configureStore/createSlice/Immer vs raw Redux → explain-back
- [ ] Capsule: Context vs Redux (kills `useContext` ⭐ + "global state mgmt") → explain-back
- [ ] Capsule: `useLayoutEffect` vs `useEffect` ⭐ (with StrictMode double-render) → explain-back
- [ ] Quiz batch 1 (pendings-frequency questions)

## Wed 4 Nov — Teach: JWT + RHF + errors + Zustand/MobX

- [x] Redux DevTools browser extension — done 2 Nov (user's Chrome; verified by screenshot: @@INIT + products/fetch lifecycle visible)
- [ ] Capsule: JWT — structure, verify vs decode, access vs refresh, localStorage vs httpOnly cookie → explain-back
- [ ] Capsule: Thunk + createAsyncThunk/extraReducers lifecycle; thunk vs saga one-layer → explain-back
- [ ] Capsule: RHF (register/handleSubmit/errors) + Express error middleware + HTTP 200/201/400/401/403 → explain-back
- [ ] Capsule: Error Boundaries + StrictMode → explain-back
- [ ] Capsule: Zustand + MobX (observables/actions/computed/reactions; makeObservable vs makeAutoObservable) — comparisons answer M14 "global state mgmt" from all sides → explain-back
- [ ] Capsule: legacy connect API (mapStateToProps/mapDispatchToProps) — pendings-frequent → explain-back
- [ ] Quiz batch 2

## Thu 5 Nov — MOCK + reps

- [ ] Mock exam: theory + practical batch (pendings-frequency), one go, graded
- [ ] Spoken 5-min project walkthrough (script ready)
- [ ] Typed reps if needed: small store/slice edits, re-login flow
- [ ] Walkthrough script for OLX project (spoken, 5 min)
- [ ] Interview question bank run in its own chat (`interview-question-bank.md`)

## Fri 6 Nov

- [ ] Morning only: notes files + keyword list. NO new topics. **EXAM** (hosting decision locked 2 Nov: LOCAL demo only — no cloud hosting; optional tunnel as on-the-spot backup. Demo DB: `node seed.js` right before walkthrough)

## Notes files

- `01-Why-Redux.md` (29 Oct)
- `02-Project-Walkthrough.md` (build day)
