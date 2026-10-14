# Brototype Study Tracker

Last updated: 14 Oct 2026

## Current Focus
- **Module 14 — Attempt 1 FAILED 13 Oct 2026** — 3.5/10 (Theory 3, Practical 4; cut-off 5 each) · badge First Project Hosting · coordinator Mohammed Sharik; retest expected
- BlogApp project ✅ built + live-tested 12 Oct (`Module 14\Exam\ForEXAM\BlogApp`) — portal scope complete, walk-through + portal responses in `Learnings\LW-Ai\`
- **THE priority: clear the hooks pentagon** — useRef DOM · useContext · useCallback/useMemo · useLayoutEffect (+ Fragments, createElement/createRoot, package-lock.json theory burst). Examiner: "practise more", "last week pendings not cleared" — useRef is now a **3-module running pending** (M13 review → M13 exam → M14 exam)
- Standing rule: **learner types ALL code. Agent coaches with questions only — never writes code for learner.** (12 Oct health override was one-day only)
- Module 14 chat: session `ses_ed01e2dfbffeS9XUL0nA8GUpTU` — readable directly via sqlite (V2 tables, see **Cross-Chat DB Reads** below; NO exports needed). Last state: coach asked **Session A Q1** (vanilla-JS useRef warm-up), unanswered.

## Next Steps
1. Answer Session A Q1 in the **Module 14 chat** (or ask MAIN for a fresh resume prompt)
2. Clear hooks pentagon with working code + spoken explanations before M15
3. MAIN logs M14 attempt-2 data into EXAM.md when portal shares it

## Targets
- [ ] Clear hooks pentagon: useRef · useContext · useCallback/useMemo · useLayoutEffect + Fragments/createElement/lock-file
- [ ] M14 attempt 2 when scheduled

## Module States (FromHub — MERN track)
| Module | State | Notes |
|--------|-------|-------|
| 5–12  | Done  | Completed before M13 |
| 13    | ✅ Done | Passed 2nd attempt, 5 Oct 2026 — 6/10 |
| 14    | ❌ A1 failed | 13 Oct 2026 — 3.5/10 (T 3, P 4); attempt 2 pending |
| 15+   | Not started | Awaiting portal data |

Foundation (M1–4: C, Java) = base semester, not part of MERN track — excluded from oversight.

## Recurring Jobs
- **Exam Folder Re-writes**: user drops raw exam data into `Module N\Exam\` → say "Module N data added" → rewrite EXAM.md to Technical Notes template. House style = M11/M12/M13 files: pendings subject-grouped with `_(A2)_` tags, ONE 🏆 final block + comparison table, feedback bullets with attempt tags, communication trend line, bold-led next steps (no checkboxes). Never touch terminal dumps, code artifacts, Lessons.md, ExamBrainDump.md. (M10–M13 done; M5–M9 untouched.)

## Workflow
- Each module gets its OWN chat; **studying happens there, not here**
- MAIN (this chat) = oversight: tracks targets, reads module chats via sqlite, hands over a **prompt** that the learner pastes into the module chat
- Kickoff: agent reads ALL files in `Module N\Learnings\RAW` → writes kickoff prompt
- Cross-chat: use the **Cross-Chat DB Reads** recipe below — the legacy tables are STALE; fallback = learner pastes 1–2 line summary or exports the session
- Study sessions: section-by-section, time-boxed, quiz must pass before next section

## Cross-Chat DB Reads (OpenCode V2) — verified 14 Oct 2026
The legacy `session` / `message` / `part` tables are **stale** — frozen at the V1→V2 cutover (8 Oct 2026). Querying them makes agents wrongly conclude "the chat is not in the DB" (this exactly happened once on 14 Oct — do not repeat).

1. Copy the live DB + WAL + shm to temp first (a `mode=ro` connection cannot see un-checkpointed WAL data):
   `Copy-Item "$env:USERPROFILE\.local\share\opencode\opencode.db{,-wal,-shm}" "$env:TEMP\opencode\dbcopy" -Force`
2. Query the copy: `sqlite3 "file:<TEMP>/opencode/dbcopy/opencode.db?mode=ro"` (make path forward-slash)
3. Sessions → `session_v2` (id, title, time_updated ms). Messages → `session_message`, text is **inline**:
   `SELECT seq, json_extract(data,'$.text') FROM session_message WHERE session_id='ses_…' ORDER BY seq`
4. V2 migration **re-keyed old session IDs** — if an ID misses, search by title instead. Module chats: M13 = `ses_f4178c8b3ffe0wY7obOL6ShQhU`, M14 = `ses_ed01e2dfbffeS9XUL0nA8GUpTU` (full history 6 Oct → 13 Oct in one session; no exports ever needed).
