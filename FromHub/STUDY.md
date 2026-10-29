# Brototype Study Tracker

Last updated: 29 Oct 2026

## Current Focus

- **M15 ACTIVE (29 Oct):** Redux + Redux Toolkit + Zustand/MobX + JWT auth + Error Boundaries/StrictMode + React Hook Form + **OLX e-commerce project** (Express + MongoDB backend — different stack from BlogApp's Firebase). **Exam Nov 6 (given — extended from the original 30 Oct slot).** Kickoff prompt issued 29 Oct → new chat. Answers M14's `store?` + `global state management` theory gaps.
- **M14 ✅ PASSED — attempt 2, 19 Oct 2026 · 7/10 (Theory 7 · Practical 7)** — up from A1's 3.5/10. Cleared: `useRef` (the 3-module pending — finally dead), `useCallback`/`useMemo`, Fragments / createElement / package-lock. Carried: **`useContext` + `useLayoutEffect`** + new **global state management** _(A2)_. Standing call-out: "improve the practical side more". EXAM.md house-style rewrite ✓ · brain dump filled + formatted in house style (17 theory · 4 practical, shared with friends 19 Oct).
- **🅿️ PARKED 29 Oct (was: gate before M15) = consolidation phase (decided 19 Oct): review + TEST M13 + M14 fully — all PracticeApp demos typed + explain-back, pentagon + routing/context/auth.** Resumes in the M14 chat when time permits (user's call). State at park: A1 🟡 (capsule given, explain-back pending), A2–J3 untouched (tracker 90 items). Driver: post-pass "haven't earned it" feeling + examiner's "improve the practical side more" (same gap). **Priority rule (user, 19 Oct): portal RAW topics FIRST → then `Others\FromPendingBucket.md` leftovers ordered by frequency (Outlet-vs-portal ~14 asks, synthetic events ~12, memo trio 6+) → capstones last. Priority = DEPTH/COVERAGE tier only (high = full capsule + typed + explain-back; long tail = spoken answer only) — the learning order stays dependency-based, simple→complex, never reordered by frequency.** MAIN drafts the finite checklist on request; **runs in the M14 chat** (tracker built + retagged 19 Oct: 90 items A19·B13·C8·D9·E8·F6·G6·H6·I12·J3; ⭐ = asked in a real exam). Then Module 15 (awaiting portal data; week-one targets stay `useContext` + `useLayoutEffect`).
- BlogApp project ✅ built + live-tested 12 Oct (`Module 14\Exam\ForEXAM\BlogApp`) — portal scope complete, walk-through + portal responses in `Learnings\LW-Ai\`
- Standing rule: **learner types ALL code. Agent coaches with questions only — never writes code for learner.** (12 Oct health override was one-day only)
- Module 14 chat: session `ses_ed01e2dfbffeS9XUL0nA8GUpTU` — readable via sqlite (V2 tables, see **Cross-Chat DB Reads**; **re-copy the DB fresh on every read** — a copy is a snapshot, not a live view).

## Next Steps

1. **Consolidation phase (M13 + M14) — 🅿️ parked 29 Oct:** learn → understand → test in the **M14 chat** (`consolidation-tracker.md`, 1/90 in progress); resume when there's time
2. ~~**Fill the M14 brain dump**~~ — done 19 Oct: 17 theory + 4 practical, house format (bullets + bordered boxes), ready to share
3. **Run `nightly-push.ps1`** — still pending; captures the EXAM.md rewrite + PracticeApp + docs
4. **Module 15 — ACTIVE:** exam Nov 6 (extended from original 30 Oct, both `given`); kickoff prompt issued 29 Oct → run in a NEW chat; M14 carry-overs (`useContext` + `useLayoutEffect`) = week-one targets inside M15
5. **Interview question bank — STANDING RULE (user, 22 Oct): every module from now on gets one.** After a module's scope is set (RAW + tracker/pending files), search for good interview questions on that module's topics → map them to the scope → output `Module X\Learnings\LW-Ai\interview-question-bank.md` (Top 30 ranked + grouped by topic, exam-ready answers with keywords, sources). Run in a NEW chat with MAIN's prompt; user may also search manually. **M13+M14 backfill prompt issued 22 Oct.** Part of the M15 kickoff flow.

## Targets

- [x] ~~Clear the hooks pentagon~~ — `useRef` + `useCallback`/`useMemo` cleared ✅; `useContext` + `useLayoutEffect` carry into M15
- [x] ~~M14 attempt 2 — Mon 19 Oct, 9:30 AM~~ — ✅ PASSED at 7/10

## Module States (FromHub — MERN track)

| Module | State       | Notes                                                           |
| ------ | ----------- | --------------------------------------------------------------- |
| 5–12   | Done        | Completed before M13                                            |
| 13     | ✅ Done     | Passed 2nd attempt, 5 Oct 2026 — 6/10                           |
| 14     | ✅ Done     | Passed 2nd attempt 19 Oct 2026 — 7/10 (T 7, P 7); A1 was 3.5/10 |
| 15+    | Not started | Awaiting portal data                                            |

Foundation (M1–4: C, Java) = base semester, not part of MERN track — excluded from oversight.

## Recurring Jobs

- **Exam Folder Re-writes**: user drops raw exam data into `Module N\Exam\` → say "Module N data added" → rewrite EXAM.md to Technical Notes template. House style = M11–M14 files: pendings subject-grouped with `_(A2)_` tags, ONE 🏆 final block + comparison table, feedback bullets with attempt tags, communication trend line, bold-led next steps (no checkboxes). Never touch terminal dumps, code artifacts, Lessons.md, ExamBrainDump.md. (M10–M14 done; M5–M9 untouched.)

## Workflow

- Each module gets its OWN chat; **studying happens there, not here**
- MAIN (this chat) = oversight: tracks targets, reads module chats via sqlite, hands over a **prompt** that the learner pastes into the module chat
- Kickoff: agent reads ALL files in `Module N\Learnings\RAW` → writes kickoff prompt
- Cross-chat: use the **Cross-Chat DB Reads** recipe below — the legacy tables are STALE; fallback = learner pastes 1–2 line summary or exports the session
- Study sessions: section-by-section, time-boxed, quiz must pass before next section

## Cross-Chat DB Reads (OpenCode V2) — verified 14 Oct 2026 · 2 lessons added 18 Oct

The legacy `session` / `message` / `part` tables are **stale** — frozen at the V1→V2 cutover (8 Oct 2026). Querying them makes agents wrongly conclude "the chat is not in the DB" (this exactly happened once on 14 Oct — do not repeat).

1. Copy the live DB + WAL + shm to temp first (a `mode=ro` connection cannot see un-checkpointed WAL data):
   `Copy-Item "$env:USERPROFILE\.local\share\opencode\opencode.db{,-wal,-shm}" "$env:TEMP\opencode\dbcopy" -Force`
2. Query the copy: `sqlite3 "file:<TEMP>/opencode/dbcopy/opencode.db?mode=ro"` (make path forward-slash)
3. Sessions → `session_v2` (id, title, time*updated ms). Messages → `session_message`, text is **inline**:
   `SELECT seq, json_extract(data,'$.text') FROM session_message WHERE session_id='ses*…' ORDER BY seq`
4. V2 migration **re-keyed old session IDs** — if an ID misses, search by title instead. Module chats: M13 = `ses_f4178c8b3ffe0wY7obOL6ShQhU`, M14 = `ses_ed01e2dfbffeS9XUL0nA8GUpTU` (full history 6 Oct → 13 Oct in one session; no exports ever needed).
5. **18 Oct lessons:** (a) **Re-copy the DB on every read** — an old copy silently hides everything since it was taken (18 Oct: a stale 2:33 PM copy made MAIN wrongly report "M14 chat quiet since 1:27 PM"). (b) **IST display = `'+5 hours','+30 minutes'`** — with only `'+5 hours'` every timestamp prints 30 min early.
