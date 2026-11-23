# Learn React

Every link below was opened on 23 Nov 2026 and its facts read off the page (title, channel, video count, upload date, views) — not from memory. "Dated" means made before React 18/19 patterns; "dead" means it no longer exists.

**Rule:** a video is a *supplement*. Type the code yourself first, watch the video only where you got stuck.

---

## Tier 1 — use these first

| Resource | Facts | Why it earns the slot |
|---|---|---|
| **React 19 Complete Tutorial** — Codevolution<br>`https://www.youtube.com/playlist?list=PLC3y8-rFHvwg9D7EOSEBabuutIdKZN5V3` | 38 videos · Oct–Nov 2025 · 525,463 views | The only **current** React 19 series in your list. Short videos (4–8 min), modern API, matches what you actually write. **Best primary resource.** |
| **MERN Stack Tutorial for Beginners with Deployment – 2025** — freeCodeCamp<br>`https://www.youtube.com/watch?v=F9gB5b4jgOI` | 3 h 35 m · ~Aug 2025 | One full build: React + Express + Mongo + deploy. The closest thing to the OLX project end to end. Watch after the tier-1 series, as a whole-project revision. |

**Known gap in the Codevolution playlist** (checked 4 Nov): no `useEffect`/data-fetching video. Use `../LW-Ai/youtube-supplements.md` → "Gap-patch queue" (6 videos, ~91 min) to cover it.

---

## Tier 2 — Malayalam (same concepts, in your first language)

| Resource | Facts | Verdict |
|---|---|---|
| **React Challenge** — Brototype Malayalam<br>`https://www.youtube.com/playlist?list=PLY-ecO2csVHfgVM9sChmUirqK7BXUBX9P` | 12 videos · May–Jun 2021 · 669,217 views | Your own course's channel. Good for **concepts** (virtual DOM, components, hooks intro) in Malayalam. **Dated**: uses class components and pre-18 patterns — do not copy its code style into new work. |
| **React All Hooks – Malayalam** — Code Malayalam<br>`https://www.youtube.com/playlist?list=PLQzJEzrRmXOXg39-jbEsrUQWGB2Mhv0gI` | 10 videos · Jul–Oct 2021 · 33,595 views | Hooks semantics have not changed since 2021, so this still teaches correctly: `useState`, `useEffect`, `useContext`, `useMemo`, `useCallback`, `useRef`. Good for hearing a hook explained in Malayalam once. |
| **Redux Malayalam** — Debug Media<br>`https://www.youtube.com/playlist?list=PL4KwFGqvN4ntuJhFqC18WWytOJKFmpqGd` | 3 videos · Aug–Sep 2022 · 12,201 views | **Exactly the M15 syllabus**: RTK basics → `useSelector`/`useDispatch` → `createAsyncThunk` + `useMemo`. 2022 = RTK 1-era, but the concepts (store, slice, thunk, dispatch) are unchanged. Best Malayalam Redux option. |

---

## Tier 3 — partial or broken

| Resource | Facts | Problem |
|---|---|---|
| **React Router – Malayalam** — Code Malayalam<br>`https://www.youtube.com/playlist?list=PLQzEzrRmXOVOLz1b3g6u1Z3eD34yM3WM` | — | **DEAD.** Playlist returns 404 and YouTube redirects to the home page. The whole playlist was removed. Replace it or drop the row — see "Next step". |
| **React Redux in malayalam #14 – Redux Devtools** — Jinson Abraham<br>`https://www.youtube.com/watch?v=ZXbjegpcoFg` | 5 m 27 s · 15 Jun 2021 · 2,068 views | It is **part 14 of a 14-part series**, not a standalone lesson — starting at 14 skips the setup. Series: `PLlgautmz_01NsoLPRur0MsRZ9WnLztqc2`. Only useful as a 5-minute DevTools walkthrough. |

---

## What these links do NOT cover

No video in this list teaches **Zustand**, **MobX**, **React Hook Form**, or **Next.js**. If you need them:

- Zustand / MobX / RHF → `../LW-Ai/youtube-supplements.md` (Cosden Solutions + Learnersbucket picks, already verified).
- Next.js → nothing verified yet; the Codevolution playlist stops at React 19 core.

---

## How to use this file

1. Stuck on a **concept** → tier 1 (Codevolution), the matching short video.
2. Concept still unclear in English → tier 2, same topic in Malayalam.
3. Need the **whole picture / revision** → freeCodeCamp MERN, 3 h 35 m, once.
4. Anything marked **dated** → take the idea, never the syntax.

---

## Next step

- Replace the dead React Router (Malayalam) link with a working one — say the word and I'll verify candidates on the page before adding them.
- Add any new link under the right tier with its facts (video count · date · views), so this file stays checkable instead of becoming a link dump.
