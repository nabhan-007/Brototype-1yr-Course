# M15 Retry — Attempt 3 (review Sat 14 Nov 2026)

**Attempt 2 result (6 Nov): FAILED** — Theory **4/10**, Practical **2/10** (cutoff 5 each).
Examiner verdict: theory "answered almost all", ONE pending topic — **`useReducer` vs `extraReducers`**; practical "could not complete the assigned tasks" = **insufficient practice**; communication fine; advice: **more practical implementation, regular coding practice**.

## The rules for this attempt (these override every older rule)
1. **Nabhan types 100% of the code.** The agent never writes project code during this attempt — no snippets to copy, no "fixed it for you".
2. Agent coaches practicals **by questions only**. If truly stuck >10 min, agent may give a one-line pointer (a direction, never the solution).
3. Every session ends with a **typed practice-log line** (what I built · what broke · keyword I missed) + explain-back.
4. **10 min keyword recall daily**, closed notes (from `fromPendingBucket.md` + the one pending topic).
5. Tasks are **examiner-style**: short vague assignment text, time-boxed. Not step-by-step tutorials.
6. The OLX project repo is **reference only** — opened AFTER a task is done, never copied from during.
7. Theory blocks are allowed (keyword-accurate definitions still come from the agent); the questioning-only rule applies to coding.

## Phase 0 — Grounding (starts Sat 7, Nabhan's own lead)
- Nabhan is doing **9 Gemini Malayalam mini-lessons** as the grounding step. He reports the topic list + "done".
- Deliverable: one typed line per topic in his own words (`practice-log.md`).
- Agent coaching starts the session AFTER this gate.

## Daily template (Sun 8 – Fri 13, ~2 h)
| Min | Block |
|---|---|
| 10 | Keyword recall, closed notes |
| 20 | Theory: Socratic Q&A on today's concept → official keywords corrected at the end |
| 60–75 | ONE typed task from scratch — coach asks questions only |
| 15 | Explain-back + practice-log line |

## Practical ladder (one typed task per day, escalating)
- **Sun 8 — T1**: plain reducer + dispatch + minimal `configureStore` + one slice wired into a component. Theory block: reducer purity, action objects, **`useReducer` vs `extraReducers` part 1** (definitions + he types a `useReducer` example).
- **Mon 9 — T2**: `createSlice` feature — cart (add / remove / update quantity) + component wiring; Immer; auto-generated action creators.
- **Tue 10 — T3**: `createAsyncThunk` + `extraReducers` lifecycle (pending/fulfilled/rejected) — products fetch. **This is the pending topic in practice**: he types `useReducer` AND `extraReducers` in the same small app.
- **Wed 11 — T4**: end-to-end feature — auth slice thunk + `ProtectedRoute` OR checkout thunk (`api.js` → slice → component → store).
- **Thu 12 — T5**: two 15-min timed mini-tasks (e.g. "add a category filter to the store", "quantity must never go below 1") + a planted-bug hunt.
- **Fri 13 — MOCK DAY**: theory mock (definitions + keywords, timed) + practical mock (2 assigned tasks, 45 min, graded cutoff-style).

## Review day — Sat 14 Nov
Morning only: keywords file. **No new code, no new topics.**

## Grading discipline (agent side)
- Missing keywords → written to log, drilled again next session.
- Task not finished under time → same task repeated next session until it lands. No skipping forward.
- Practical scored like the examiner would: 10 = fully working + can explain; <5 = would fail again → repeat.

## The one pending topic — answer skeleton (to earn with own words)
- **`useReducer`**: a **React hook** for **local component state** — `const [state, dispatch] = useReducer(reducer, initialState)`; reducer is a pure function `(state, action) => newState`; replaces `useState` when updates are complex. Lives **inside the component tree**.
- **`extraReducers`**: a **Redux Toolkit slice option** for handling actions **defined outside this slice** (other slices' actions, `createAsyncThunk` lifecycle actions). Not a hook, never used in components — it lives **in the store layer**.
- **One-liner**: "`useReducer` is React's local-state hook; `extraReducers` is Redux Toolkit's slice field for foreign actions — same reducer idea, different layer."

## Open items
- The 9 Gemini topic list (Nabhan to share when ready).
- Attempt-3 review format/time (assume same as attempt 2: theory + practical, cutoff 5).
