# Brototype Study Tracker

Last updated: 19 Oct 2026

## Current Focus

- **M14 ✅ PASSED — attempt 2, 19 Oct 2026 · 7/10 (Theory 7 · Practical 7)** — up from A1's 3.5/10. Cleared: `useRef` (the 3-module pending — finally dead), `useCallback`/`useMemo`, Fragments / createElement / package-lock. Carried: **`useContext` + `useLayoutEffect`** + new **global state management** _(A2)_. Standing call-out: "improve the practical side more". EXAM.md house-style rewrite ✓ · brain dump unlocked (template awaits the questions).
- **Next = consolidation phase (decided 19 Oct): review + TEST M13 + M14 fully — all PracticeApp demos typed + explain-back, pentagon + routing/context/auth — BEFORE Module 15 starts.** Driver: post-pass "haven't earned it" feeling + examiner's "improve the practical side more" (same gap). MAIN drafts the finite checklist on request; **runs in the M14 chat**. Then Module 15 (awaiting portal data; week-one targets stay `useContext` + `useLayoutEffect`).
- BlogApp project ✅ built + live-tested 12 Oct (`Module 14\Exam\ForEXAM\BlogApp`) — portal scope complete, walk-through + portal responses in `Learnings\LW-Ai\`
- Standing rule: **learner types ALL code. Agent coaches with questions only — never writes code for learner.** (12 Oct health override was one-day only)
- Module 14 chat: session `ses_ed01e2dfbffeS9XUL0nA8GUpTU` — readable via sqlite (V2 tables, see **Cross-Chat DB Reads**; **re-copy the DB fresh on every read** — a copy is a snapshot, not a live view).

## Next Steps

1. **Consolidation phase (M13 + M14):** learn → understand → **test** — runs in the **M14 chat**; coach builds the finite checklist + `consolidation-tracker.md`, MAIN keeps the scoreboard
2. **Fill the M14 brain dump** — passed-exam perk unlocked; send MAIN the theory questions + practical tasks from the exam and it gets formatted like M13's
3. **Run `nightly-push.ps1`** — still pending; captures the EXAM.md rewrite + PracticeApp + docs
4. **Module 15 — only after consolidation clears:** when the portal opens → drop RAW data → MAIN writes the kickoff prompt

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
