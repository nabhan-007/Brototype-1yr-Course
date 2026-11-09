# Brototype Study Tracker

Last updated: 6 Nov 2026

## Current Focus

- **M15 ❌ FAILED — attempt 2, 6 Nov 2026: overall 3/10 on portal — Theory 4/10 (cutoff 5) · Practical 2/10 (cutoff 5).** Attempt 1 (29 Oct) was marked **Absent**. Coordinator: Ayshath Azmeera Sahazi. Examiner notes: theory — "answered almost all" BUT pending: **`useReducer` vs `extraReducers` in RTK**; practical — "unable to complete assigned practical tasks; sufficient practice had not been done"; suggestions — practical implementation + regular coding practice; **communication fine** (up from M14's "okay"). Root cause recorded: user told agent to build+teach code while he read (no typing) — practical muscle memory never built → same "practical side" call-out as M14, now decisive. **Malayalam-first rule (b) fired 7 Nov: Gemini Malayalam mini-lesson prompt issued BEFORE any re-grind.** Retry plan: attempt 3 with practice-first typed reps (non-negotiable), details in the M15 chat. **Project share-pack done 7 Nov** (README + `.env.example` + single start script that auto-creates `.env`; pushed `497238e`); **user practicing** — 8 live listings seen 7 Nov. **M15 coach chat briefed 7 Nov 12:17 — attempt-3 plan written (`Module 15\Learnings\LW-Ai\checklist-M15-Retry.md`); retry Sat 14 Nov confirmed by user (~2 h/day).**
- **M14 ✅ PASSED — attempt 2, 19 Oct 2026 · 7/10 (Theory 7 · Practical 7)** — up from A1's 3.5/10. Cleared: `useRef` (the 3-module pending — finally dead), `useCallback`/`useMemo`, Fragments / createElement / package-lock. Carried: **`useContext` + `useLayoutEffect`** + new **global state management** _(A2)_. Standing call-out: "improve the practical side more". EXAM.md house-style rewrite ✓ · brain dump filled + formatted in house style (17 theory · 4 practical, shared with friends 19 Oct).
- **🅿️ PARKED 29 Oct (was: gate before M15) = consolidation phase (decided 19 Oct): review + TEST M13 + M14 fully — all PracticeApp demos typed + explain-back, pentagon + routing/context/auth.** Resumes in the M14 chat when time permits (user's call). State at park: A1 🟡 (capsule given, explain-back pending), A2–J3 untouched (tracker 90 items). Driver: post-pass "haven't earned it" feeling + examiner's "improve the practical side more" (same gap). **Priority rule (user, 19 Oct): portal RAW topics FIRST → then `Others\FromPendingBucket.md` leftovers ordered by frequency (Outlet-vs-portal ~14 asks, synthetic events ~12, memo trio 6+) → capstones last. Priority = DEPTH/COVERAGE tier only (high = full capsule + typed + explain-back; long tail = spoken answer only) — the learning order stays dependency-based, simple→complex, never reordered by frequency.** MAIN drafts the finite checklist on request; **runs in the M14 chat** (tracker built + retagged 19 Oct: 90 items A19·B13·C8·D9·E8·F6·G6·H6·I12·J3; ⭐ = asked in a real exam). Then Module 15 (awaiting portal data; week-one targets stay `useContext` + `useLayoutEffect`).
- BlogApp project ✅ built + live-tested 12 Oct (`Module 14\Exam\ForEXAM\BlogApp`) — portal scope complete, walk-through + portal responses in `Learnings\LW-Ai\`
- Standing rule: **learner types ALL code. Agent coaches with questions only — never writes code for learner.** (12 Oct health override was one-day only) **M15 exception (user, 2 Nov): agent builds code first (exam deadline), then teaches it — explain-backs still 100% required; learner types again if Thu mock shows exam-ready.**
- Module 14 chat: session `ses_ed01e2dfbffeS9XUL0nA8GUpTU` — readable via sqlite (V2 tables, see **Cross-Chat DB Reads**; **re-copy the DB fresh on every read** — a copy is a snapshot, not a live view).

## Next Steps

1. **Consolidation phase (M13 + M14) — 🅿️ parked 29 Oct:** learn → understand → test in the **M14 chat** (`consolidation-tracker.md`, 1/90 in progress); resume when there's time
2. ~~**Fill the M14 brain dump**~~ — done 19 Oct: 17 theory + 4 practical, house format (bullets + bordered boxes), ready to share
3. ~~**Run `nightly-push.ps1`**~~ — effectively covered: M15 chat pushed `924e5fa` (5 Nov, OLX clone + exam docs + RUN.md) and `497238e` (7 Nov, share-ready README + .env.example + auto-`env` start script); working tree clean except uncommitted `Module 15\Exam\EXAM.md` (fail record) + STUDY.md edits
4. **Module 15 — ❌ FAILED (attempt 2, 6 Nov, 3/10):** retry tracks: (1) user drops exam Qs into `Module 15\Exam\ExamBrainDump.md` → MAIN formats house-style (unlock rule), (2) attempt-3 plan in M15 chat — practice-first, user types ALL reps this time, (3) Malayalam-first rule (b) fired 7 Nov — Gemini mini-lesson prompt issued, do it first
5. **Interview question bank — STANDING RULE (user, 22 Oct): every module from now on gets one.** After a module's scope is set (RAW + tracker/pending files), search for good interview questions on that module's topics → map them to the scope → output `Module X\Learnings\LW-Ai\interview-question-bank.md` (Top 30 ranked + grouped by topic, exam-ready answers with keywords, sources). Run in a NEW chat with MAIN's prompt; user may also search manually. **M13+M14 backfill prompt issued 22 Oct.** Part of the M15 kickoff flow.
6. **Malayalam-first rule (user, 6 Nov; finalized same day; chat-language fix 7 Nov): THREE trigger points where MAIN prompts the user to go Malayalam first — (a) starting a new module after a pass, (b) resuming after a failed review, (c) mid-study struggle on any topic (MAIN also auto-detects struggle signals: failed quiz batches, repeated "Next" without understanding, "I'll get back later" avoidance — plus the user's own flags).** Action: **Gemini ONLY (user-locked)** — a **full Malayalam mini-lesson per topic** (spoken tone: concept + why it exists + how code fits + English say-line), or a Malayalam mini-lesson on the exact stuck concept, BEFORE grinding English capsules. Why (user observed): English-only brute-force wastes hours, kills motivation → procrastination → topic returns weeks later. MAIN's job: flag it + hand the paste-ready Gemini prompt with the module's topic list (or the stuck concept) baked in. **MAIN NEVER TYPES MALAYALAM IN CHAT (7 Nov): the TUI font garbles Malayalam (mojibake screenshot) — Gemini prompts are written in ENGLISH with an explicit "answer entirely in Malayalam" instruction.** **Font fix attempt (7 Nov) came back "no terminal fix" — CLOSED: terminal = cell grid, cannot shape Malayalam conjuncts/marks; permanent fallback = Malayalam content in .md files (VS Code preview) + Gemini only, never TUI output.**

## Targets

- [x] ~~Clear the hooks pentagon~~ — `useRef` + `useCallback`/`useMemo` cleared ✅; `useContext` + `useLayoutEffect` carry into M15
- [x] ~~M14 attempt 2 — Mon 19 Oct, 9:30 AM~~ — ✅ PASSED at 7/10

## Module States (FromHub — MERN track)

| Module | State       | Notes                                                           |
| ------ | ----------- | --------------------------------------------------------------- |
| 5–12   | Done        | Completed before M13                                            |
| 13     | ✅ Done     | Passed 2nd attempt, 5 Oct 2026 — 6/10                           |
| 14     | ✅ Done     | Passed 2nd attempt 19 Oct 2026 — 7/10 (T 7, P 7); A1 was 3.5/10 |
| 15+    | ❌ Failed    | Attempt 2: 6 Nov — 3/10 (T4·P2), cutoff 5; retry planned; Qs → ExamBrainDump |

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
