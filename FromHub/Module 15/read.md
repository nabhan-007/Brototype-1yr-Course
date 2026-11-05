# Block 1 — Why Redux?

**What you already have, and where it breaks.** In M13/M14 you used `useState` — state for ONE component. When _several_ components need the same state (a cart count that shows in the navbar AND the cart page AND checkout), your options: lift state up — but then props travel through every layer, and components that don't care still carry the props (**prop drilling**). Or `useContext` — state "in the air" — but any change re-renders **every consumer**, nothing tells you _who_ changed _what_ and _when_, and there's no fixed pattern for how data gets fetched and updated. As apps grow, both hurt. Redux fixes this with one object and one traffic rule.
**Global state management** (M14 examiner asked you this — here's the answer you'll owe):
_Simple words:_ keeping shared data OUT of components — it lives in one place, changes only through agreed steps, every component reads the same values.
_Official:_ **centralized management of application-wide state outside the component tree**, so any component can consistently read and update it.
_Terms to mention in exam:_ centralized · application-wide · consistent reads · updates outside component tree
**What is a store?** (the other question the examiner parked for this module)
_Simple words:_ ONE plain JavaScript object holding all shared state — the single copy everyone reads. Nobody edits it directly; you request a change, a fixed function writes the new version.
_Official:_ the **single source of truth** — the entire application state in one object, updated only by dispatched **actions** handled by **reducers**, read by subscribed components, wired once via **Provider**.
_Terms:_ store · **single source of truth** · action · reducer · dispatch · subscribe
**The traffic rule (data flow) — say it as one sentence:**
UI event → **dispatch an action** → (middleware, e.g. Thunk for API calls) → **reducer** (pure function) returns a **new state** → the store notifies subscribers → `useSelector` components re-render.
One direction only — **unidirectional data flow**. That's the word behind "Redux is **predictable**": every change passes through the same door, so changes are logged, ordered, replayable (**DevTools time-travel** — we'll use it from Friday).
_Small code sketch — read, don't type (your typing starts tomorrow):_
dispatch({ type: 'cart/addItem', payload: product }) // the request (action)
(state, action) => ({ ...state, items: [...state.items, action.payload] }) // the writer
const items = useSelector(s => s.cart.items) // the reader
**Official definition for the exam:** Redux is a **predictable state container** for JavaScript apps: the entire application state lives in a **single store** as the **single source of truth**, changed only by **dispatching actions** to **reducers** — **pure functions** that return a **new immutable state** — with **unidirectional data flow**.
**Terms to mention in exam:** predictable state container · single source of truth · action · reducer (pure) · dispatch · unidirectional · immutable · predictability/debuggability
**Why it works:** changes through one door = an automatic log of everything that happened, in order. Two components that never met (navbar badge + cart page) read the same store instead of passing props through five layers. And because reducers are pure, the same input always gives the same output — that's what makes DevTools time-travel even possible.
**One step deeper — when Redux does NOT apply** (penalty from pendings: "when not to use redux", "limitations"):

1. State needed by one or two components → `useState`/`useReducer`; the boilerplate buys nothing.
2. A rarely-changing shared value like theme or locale → Context is enough.
3. Small app, no complex async flows → setup cost outweighs the benefit.
4. The trap follow-up examiners love: **why not localStorage instead of Redux?** — localStorage is _persistence_, not _state_: writing to it never re-renders anything, it stores serializable strings only, and it survives refresh (Redux lives in memory; refresh wipes it unless you persist deliberately).

---

Your turn (theory item): **explain Block 1 back in your own words** — the problem Redux solves, what a store is, what global state management covers, and the one-sentence data flow. I grade with keywords, then say "Next" opens Block 2 (store/action/reducer/dispatch in detail — only if you have energy tonight; otherwise it waits for Friday).

---
