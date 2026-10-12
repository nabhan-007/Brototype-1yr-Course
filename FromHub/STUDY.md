# Brototype Study Tracker

Last updated: 5 Oct 2026

## Current Focus
- **Module 14 — KICKOFF 5 Oct 2026** (portal data in RAW, kickoff prompt handed over)
- M14 topics: React Router DOM · Context API global state · custom hooks/HOC · Babel/Webpack · production build · **Blog App project (Firebase Auth + Firestore)** + Atomic Habits / storytelling / LeetCode 2942+2974
- **Carry-in pendings for M14 warm-up:** `useRef()` DOM manipulation · lifecycle methods
- Standing rule: **learner types ALL code. Agent coaches with questions only — never writes code for learner.**

## Next Steps
1. Paste kickoff prompt into **Module 14 chat**
2. Clear the two M13 pendings as warm-up, then Topic 1 (React Router DOM)
3. MAIN checks module chat via sqlite after sessions

## Targets
- [ ] Clear M13 pendings: useRef DOM manipulation + lifecycle methods
- [ ] M14 Topics 1–7 through quiz gates

## Module States (FromHub — MERN track)
| Module | State | Notes |
|--------|-------|-------|
| 5–12  | Done  | Completed before M13 |
| 13    | ✅ Done | Passed 2nd attempt, 5 Oct 2026 — 6/10 |
| 14+   | Not started | Awaiting portal data |

Foundation (M1–4: C, Java) = base semester, not part of MERN track — excluded from oversight.

## Recurring Jobs
- **Exam Folder Re-writes**: user drops raw exam data into `Module N\Exam\` → say "Module N data added" → rewrite EXAM.md to Technical Notes template. House style = M11/M12/M13 files: pendings subject-grouped with `_(A2)_` tags, ONE 🏆 final block + comparison table, feedback bullets with attempt tags, communication trend line, bold-led next steps (no checkboxes). Never touch terminal dumps, code artifacts, Lessons.md, ExamBrainDump.md. (M10–M13 done; M5–M9 untouched.)

## Workflow
- Each module gets its OWN chat; **studying happens there, not here**
- MAIN (this chat) = oversight: tracks targets, reads module chats via sqlite, hands over a **prompt** that the learner pastes into the module chat
- Kickoff: agent reads ALL files in `Module N\Learnings\RAW` → writes kickoff prompt
- Cross-chat: agent reads `~\.local\share\opencode\opencode.db` (read-only) directly; fallback = learner pastes 1–2 line summary
- Study sessions: section-by-section, time-boxed, quiz must pass before next section
