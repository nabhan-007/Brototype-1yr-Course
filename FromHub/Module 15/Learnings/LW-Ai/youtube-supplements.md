# YouTube Supplements — Module 15 (curated 31 Oct 2026)

> The React Challenge playlist (PLY-ecO2csVHfgVM9sChmUirqK7BXUBX9P) is M13/M14-era Brototype content — React basics + Firebase + OLX signup (Firebase auth). It has ZERO M15 topics. Brototype has no Redux/M15 playlist on YouTube.
> These are the verified substitutes (on-page verified 31 Oct via YouTube search: title/duration/channel/age). Videos are SECONDARY — the coach chat's capsules + your typing are primary.

| RAW topic | Pick | Length | Why |
|---|---|---|---|
| Redux core + RTK | Cosden Solutions — Redux Complete Tutorial (with Redux Toolkit) — youtube.com/watch?v=5yEG6GhoJBs | 37 min | whole Redux+RTK picture in one sitting |
| Redux deep/course ref (project pacing) | Dave Gray — React Redux Full Course \| Redux Toolkit Complete Tutorial — youtube.com/watch?v=NqzdVN2tyvQ | 3:59 | builds a real project, beginner-paced — watch selectively, not wall-to-wall |
| Redux (Malayalam option) | Debug Media — "Redux Malayalam" playlist PL4KwFGqvN4ntuJhFqC18WWytOJKFmpqGd (3 parts: 1/3 RTK basics 24:07 · 2/3 useSelector/useDispatch 19:52 · 3/3 Thunk+useMemo+Pro Tips 1:03:37) | ≈1:48 | Malayalam; 4y old (RTK 1-era) but core concepts stable — STARTER for topic 1+2 only |
| Thunk / async | freeCodeCamp — Redux and Modern Redux Toolkit with Asynchronous Operation (youtube.com/watch?v=SlC8941Wwrk) | 7:47 total | full course; jump only to the createAsyncThunk/extraReducers chapters (Mon 2 lane) |
| Error Boundaries | Cosden Solutions — Error Handling in React (Complete Tutorial) — youtube.com/watch?v=OQQAv8t3bfc | 10 min | boundaries + recovery, modern |
| Error Boundaries (quick) | Web Dev Simplified — Learn React Error Boundaries In 7 Minutes — youtube.com/watch?v=_FuDMEgIy7I | 7 min | fastest pass, classic class-boundary demo |
| React Hook Form | Cosden Solutions — React Hook Form Complete Tutorial (with Zod) — youtube.com/watch?v=cc_xmawJ8Kg | 28 min | validations + form state = RAW topic C; skip the Zod deep half if short on time |
| JWT auth | Dave Gray — React Login Authentication with JWT Access, Refresh Tokens, Cookies and Axios — youtube.com/watch?v=nI8PYZNFtac | 41 min | EXACTLY the pending-bucket items: access vs refresh, cookie storage, axios |
| JWT login/signup build | Code With Yousaf — Login and Registration using MERN Stack — youtube.com/watch?v=ZVyIIyZJutM | 29 min | the OLX auth lane (Express+Mongo+JWT), simple MERN build |
| Zustand | Cosden Solutions — Zustand Complete Tutorial — youtube.com/watch?v=_ngCLZ5Iz-0 | 19 min | create + slices + persist — covers RAW topic 5 fully |
| MobX | Learnersbucket — MobX state management explained in 15 minutes — youtube.com/watch?v=3bv3GXScukg | 17 min | freshest (2 mo ago); observables/actions/computed in one video |

Total ~3 h of video — fits the remaining 6 days. Watch AFTER the coach's capsule on that topic, never before (teach-then-type order).

Watch order aligned to the coach's plan:
- Fri 30 / Sat 31: Cosden Redux (37) ↔ capsule day
- Mon 2: Cosden error handling (10) + RHF (28)
- Tue 3: Dave Gray JWT (41) + Code With Yousaf (29)
- Thu 5: Zustand (19) + MobX (17)
- freeCodeCamp async chapters: only where the coach flags Thunk gaps

## Gap-patch queue (browser-verified 4 Nov — patchright, durations exact)
Why: the React 19 Complete Tutorial playlist (PLC3y8-rFHvwg9D7EOSEBabuutIdKZN5V3) was audited 4 Nov — exactly 38 videos, ends at #38 "Manipulate the DOM with Refs" (3:21), contains NO useEffect/useLayoutEffect/data-fetching video. Its Redux-ready part is real: #27–32 useReducer, #33–36 Context, #37–38 useRef. So these 6 patch the actual gaps:

| # | Video | Length | Unlocks |
|---|---|---|---|
| 1 | Cosden — Learn React Hooks: useEffect - Simply Explained! — youtube.com/watch?v=-4XpG5_Lj_o | 14:07 | `dispatch(fetchProducts())` on page mount |
| 2 | Codevolution — React Hooks Tutorial - 10 - useEffect with cleanup — youtube.com/watch?v=DTlmk6QeOHY | 5:54 | StrictMode double-mount (Topic 3B) |
| 3 | Cosden — Modern Data Fetching in React (Complete Guide) — youtube.com/watch?v=MBlZ8Wzkbi4 | 16:41 | why createAsyncThunk beats manual useEffect fetch |
| 4 | Cosden — React Router - Complete Tutorial — youtube.com/watch?v=oTIJunBa6MA | 23:53 | the 5 OLX pages + URL query filters |
| 5 | Codevolution — React Router Tutorial - 15 - Authentication and Protected Routes — youtube.com/watch?v=X8eAbu1RWZ4 | 19:46 | ProtectedRoute via `useSelector((s) => s.auth.token)` |
| 6 | Codevolution — ReactJS Tutorial - 32 - Error Boundary — youtube.com/watch?v=DNYXgtZBRPE | 10:53 | class component boundary for Topic 3A |

Total ≈ 91 min (computed from on-page durations). Same standing rule as above applies: **capsule first, video after** — never as a pre-game before teaching.
