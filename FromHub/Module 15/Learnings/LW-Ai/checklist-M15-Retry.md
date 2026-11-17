# M15 Retry — Attempt 3 archive + Attempt 4 sprint (review Sat 21 Nov 2026)

**Attempt 2 (6 Nov): FAILED** — Theory 4/10, Practical 2/10 (cutoff 5). One pending theory topic: **`useReducer` vs `extraReducers`**. Practical verdict: insufficient reps.
**REVISED 10 Nov:** 7–9 Nov missed entirely → 3 practice sessions left (Wed 11, Thu 12, Fri 13) + Sat-morning review. Zero buffer: every session must land a working implementation.

**CALIBRATION (10 Nov, user's own words: "I haven't learned much from this module"):** assume **zero retained knowledge**. All theory blocks teach from zero; most diagnostic answers will be skips — that's the baseline, not new failure. Success metric this attempt = **pass (≥5/10 both halves)**, not mastery. Breadth is cut on purpose; the 9 Gemini topics carry the from-zero theory, the daily typed block carries the practical half.

## Attempt 4 — Sprint Scoreboard (persistent; update every block)

**Sprint:** Tue 17 Nov → Sat 21 Nov · **Review:** Sat 21 Nov (19 Nov pre-pone switch armed: drops E + D part 10, never F)
**Day 1/5 · XP 0 · Streak 0 · Bosses cleared 0/6 · Bosses left 6**

Scoring: quiz = 5 Qs, **+2 correct · −1 skip · +1 bonus** for each correct after the 3rd consecutive. Boss = /10, beat at **≥7**; below → returns as mini-boss next session. Dodged twice → format changes, target does not.

| # | Boss | Closes pending | Status | Rating |
|---|---|---|---|---|
| B1 | The Disconnected Provider — `Provider` + `cartSlice` + wired component | 1 | open | — |
| B2 | The Silent Thunk — `createAsyncThunk` + `extraReducers` → title/description/price | 1, 2 | open | — |
| B3 | Hook vs Slice — `useReducer` vs `extraReducers`, typed from memory | theory | open | — |
| B4 | The Rejected Form — RHF validation + image upload | 3, 5 | open | — |
| B5 | The Invisible Head — React Helmet | 6 | open | — |
| B6 | The Two Tokens — access vs refresh: generate, store, expire, renew | 7 | open | — |

Pending 4 (UI polish) is not a boss — it lands inside Friday's mock + final pass.

### Log
- 17 Nov: watched F parts 1+2 (`given`). Quiz round 1 fired, parked unanswered. Sprint revised to 3 days, no prepone.

## Attempt 4 — 3-day plan (Wed 18 → Fri 20 Nov)

> **SUPERSEDED 17 Nov 15:00** — user chose agent authorship ("You do all the typing. I will later understand the project."), so the 3-day typed plan below is parked, not cancelled. What landed instead is in *OLX pendings — 17 Nov* at the bottom.

**Review Sat 21 Nov — not planned here. No pre-pone, so the 19 Nov compression switch is dead.**
**Goal: close all 7 pendings. Nothing else.**

| Day | Blocks | Est |
|---|---|---|
| **Wed 18** | Quiz round 1 (5 Qs) · **Boss 1** — `Provider` + `cartSlice` (add/remove/qty) + wired component (~45 m) · F part 3 @1.25x (50 m) · **Boss 2** — `createAsyncThunk` + `extraReducers` → title/description/price (~45 m) | ~2 h 30 |
| **Thu 19** | **Boss 4** — RHF validation + image upload; gap video sourced by agent, ≤30 m Malayalam, before the task (~75 m) · **Boss 6** — JWT access vs refresh: generate, store, expire, renew; gap video ≤30 m before the task (~75 m) | ~2 h 30 |
| **Fri 20** | **Boss 5** — Helmet (~20 m) · **Boss 3** — `useReducer` vs `extraReducers`, typed from memory (~10 m) · timed sweep of all 7 pendings, no AI (~40 m) · 45-min mock (1 practical + 10 keywords) · UI polish (~20 m) | ~2 h 05 |

**Cuts** (3 days cannot hold the brief's full list): **E** freeCodeCamp MERN 3 h 35 · **C** hooks 2.4 h · **D** parts 7–10. **Kept: all of F.** Only exception that may come back: a hook gap proven by Friday's sweep.

**Venue (corrected 17 Nov, verified in code):** Boss 1 + Boss 2 in `dummyapi` — pending 2 is that artifact, it must be repaired. **Boss 4, 5, 6 in OLX**, because those pendings are genuinely missing features there: `Sell.jsx` takes an image **URL**, not a file (no multer, no upload route); **no `helmet` package** in either `package.json`; **no `refreshToken`** anywhere in the backend. Pending 3's validation exists (RHF) — gap is depth, not absence. **Spec from Nabhan (17 Nov):** name must reject numbers, plus the basic set a simple project carries — valid email format, password min length, confirm-password match, phone digits only, required fields. Pending 1's meaning is still unknown; ask before Boss 1.

**Rules unchanged:** one Gemini Malayalam prompt before each new topic · Nabhan types 100% · agent asks questions only · one block at a time, one action to end it · evidence = it runs in the browser.

**Fallback:** if Boss 2 doesn't clear Wed, it opens Thu and Boss 6 moves to Fri — Friday's mock then shrinks to the sweep alone. **Boss 6 never slides past Friday.**

## The 9 Gemini Malayalam topics (grounding — Nabhan fires these FIRST)
Prompt template for each (paste into Gemini):
> "Explain [TOPIC] in Malayalam for a complete beginner. Include: (1) simple Malayalam explanation, (2) the official English definition + keywords an examiner expects, (3) one tiny code example, (4) 2 exam-style questions with answers."

1. **Why Redux?** — problems it solves (prop drilling, Context limits); "global state management" definition
2. **Store + unidirectional flow** — dispatch → action → reducer → store notifies → useSelector; single source of truth
3. **Pure reducers + immutability** — why reducers return new state, never mutate
4. **Redux Toolkit** — `configureStore`, `createSlice`, Immer, auto-generated actions; why RTK over raw Redux
5. **`createAsyncThunk` + `extraReducers`** — pending/fulfilled/rejected lifecycle, where async lives in Redux
6. **`useReducer` vs `extraReducers`** ⭐ THE pending exam topic — hook vs slice option, local state vs store layer
7. **Context vs Redux** (+ Zustand/MobX one-liners) — when each is right
8. **JWT + status codes** — token structure, verify vs decode, 401 vs 403, localStorage vs httpOnly
9. **The Redux feature blueprint** — api.js → thunk → slice → `useDispatch`/`useSelector` in component → store registration (the pattern every task below reuses)

**Deliverable:** one typed line per topic, his words, in `practice-log.md`. Lessons 1–4 tonight if possible; 5–9 before Thu's T3.

## The rules (unchanged)
1. **Nabhan types 100% of code.** Agent writes none until after 14 Nov.
2. Practicals = **questions only** from agent. Stuck >10 min → one-line pointer, never the solution.
3. Every session ends with typed log line (built · broke · keyword missed) + explain-back.
4. 10 min closed-notes keyword recall at session start.
5. Tasks are examiner-style (vague brief, time-boxed). OLX repo = reference AFTER the task, never during.
6. Theory definitions allowed from agent; the question-only rule is for code.

## Compressed schedule (2 h/day)

### Wed 11 — T1+T2: store + slice, typed
| Min | Block |
|---|---|
| 10 | Keywords, closed notes (topics 1–4 if Gemini unpaid) |
| 20 | **Pending topic drilled** — `useReducer` vs `extraReducers`, his own words |
| 70 | **Typed task T1+T2**: minimal `configureStore` + one `createSlice` cart (add / remove / update quantity) wired into a component |
| 20 | Explain-back + log line |

### Thu 12 — T3: thunk + extraReducers (the gap day ⭐)
| Min | Block |
|---|---|
| 10 | Keywords |
| 75 | **Typed task T3**: `createAsyncThunk` products fetch + slice with `extraReducers` (pending/fulfilled/rejected) rendered in a component |
| 20 | **Written pending-topic answer** (useReducer vs extraReducers, typed, no notes) + explain-back |
| 15 | Log line |

### Fri 13 — T4 + MINI-MOCK
| Min | Block |
|---|---|
| 10 | Keywords |
| 50 | **Typed task T4**: end-to-end feature (auth thunk + ProtectedRoute OR checkout thunk) |
| 45 | **Mini-mock**: 1 examiner-style assigned task (20 min) + 10 keyword rapid-fire + graded /10 each half |
| 15 | Log + gap list for Sat |

### Sat 14 — REVIEW DAY
Morning only: keywords file + the 9 one-liners re-read. **NO new code, no new topics.**

## Cut as decisions (no room): T5 bug-hunt · second full mock · separate Gemini day · 2 of 5 typed ladder tasks.

## Pending-topic answer skeleton (earn it typed on Thu)
- **`useReducer`**: React **hook** for **local component state** — `const [state, dispatch] = useReducer(reducer, init)`; pure `(state, action) => newState`; for complex local updates; lives **inside the component tree**.
- **`extraReducers`**: **Redux Toolkit slice option** reacting to actions **defined elsewhere** (other slices, `createAsyncThunk` lifecycle). Not a hook; lives **in the store layer**.
- **One-liner**: "`useReducer` is React's local-state hook; `extraReducers` is RTK's slice field for foreign actions — same reducer idea, different layer."

## Mock grading (agent, examiner-style)
- Practical /10: works + explainable = pass; partial → repeat task next session.
- Theory /10: keywords per definition; missing keyword = noted, drilled next day.
- <5 on either half of the Friday mini-mock = that half gets the entire Sat morning.

## OLX pendings — 17 Nov (agent-authored, user's explicit instruction)

**Scope:** "Fix everything from the pendings for the OLX project." Authorship choice: agent types, user learns the project afterwards (`given`, 17 Nov 15:06).

| Pending | Status | Evidence |
|---|---|---|
| 3 registration validation | **closed** | name rejects digits (client pattern + server `/\d/` check + Mongoose `match`), confirm-password match, email format, min 6 — both error messages browser-verified |
| 5 image upload | **closed** | multer disk storage, images only, 2 MB cap, safe filenames, `/uploads` static; **both file and URL** supported (file > link > previous photo); no photo → `/placeholder.svg` default; seed listings use real Wikimedia Commons photos |
| 6 React Helmet | **closed** | `react-helmet-async`, per-route title + meta description; verified `Register — OLX Clone`, `Sell — OLX Clone`, home title |
| 7 access vs refresh token | **closed** | access 15m (`ACCESS_TOKEN_TTL`), refresh 7d in an httpOnly cookie scoped to `/api/auth`, `POST /refresh`, axios interceptor retries once then logs out; **verified live with a 10s TTL — session survived past expiry** |
| 4 UI polish | **light pass** | thumbnails in "Your listings", file-input styling, live preview, per-page titles, **product modal** (click/Enter opens, Esc + backdrop + × close, Add-to-cart inside) |
| 1 state management incomplete | **open, definition unknown** | 4 slices + Provider already exist; logout now clears the server cookie too. Ask the examiner what was missing before claiming it |
| 2 dummy-API fetch + display | **untouched** | `dummyapi` still has its 5 defects — separate artifact |

**Bug fixed on the way:** logout cleared localStorage but not the httpOnly cookie → the next 401 would have silently logged the user back in. `logout` now posts to `/api/auth/logout` first.

**Verification:** `npm run build` clean (128 modules) · API smoke script 9/9 PASS (login, cookie httpOnly+path, refresh auth, 401 without cookie, digit-name 400, upload path, image served `200 image/png`, non-image 400, logout clears cookie) · browser: both validation messages, file upload with preview, link-only listing, 9 seeded cards, per-route titles.

**Data state:** reseeded — 9 live listings. Four test PNGs remain in `olx-backend/uploads/` (gitignored, ~1 KB, orphaned by the reseed).

