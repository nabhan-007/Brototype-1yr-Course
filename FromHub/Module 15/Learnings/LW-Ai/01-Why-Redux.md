# 01 — Why Redux? (29 Oct 2026)

**Answers two M14 exam questions:** "What is global state management?" and "What is a store?"

## The problem it solves

- `useState` = state for ONE component. Fine for a form field, a counter.
- When MANY components need the same state (cart, logged-in user, product list), you have 3 ways:
  1. **Lift state up / prop drilling** — pass props through every layer. Components in the middle receive props they don't even use. Gets worse every level you add.
  2. **useContext** — put state "in the air". But: any change to the context value re-renders **every consumer**, no debugging tools show who changed what and when, and there's no fixed pattern — each team wires data fetching/updates differently.
  3. **Redux** — one predictable store + one traffic rule for changing it.

## The store (the M14 answer)

**In simple words:** a store is ONE plain JavaScript object that holds all the shared state of your app — the single copy components read from. Nobody edits it directly; you request changes, and a fixed function writes the new version.

**Official:** The **store** is the **single source of truth**: the entire application state is held in one object, reviewed/updated only through dispatched **actions** handled by **reducers**, and components **subscribe** to it (in React: `useSelector`). It is created once and passed down via **Provider**.

**Terms to mention in exam:** store · **single source of truth** · action · reducer · dispatch · subscribe · unsubscribing/re-render via selector · Provider

## Global state management (the other M14 answer)

**In simple words:** keeping shared data OUT of components — it lives in one place, changes only through agreed steps, and every component reads the same values from there.

**Official:** **Global state management** = managing application-wide shared state outside individual components so any component can **read** and **update** it consistently. Tools: Redux, Redux Toolkit, Zustand, MobX (and Context for lighter needs).

**Terms:** global/shared state · centralized · consistent reads · outside component tree

## The data flow (name it now, detail in Day 2–4)

```
UI event → dispatch(action) → [middleware, e.g. thunk for API calls] → reducer(state, action) → new state → store notifies → useSelector re-renders UI
```

One direction only — **unidirectional data flow**. That's why Redux is called **predictable**: every change goes through the same door (reducer), so changes are visible, ordered, and replayable (**DevTools time-travel**, Day 4).

## Why it works (the reasoning to say aloud)

- One doorway for changes ⇒ the full history of state changes is logged in one place.
- Two components that never met (e.g. CartPage and Navbar badge) both read the same store — no props passed between them.
- Reducers are **pure functions** (same input → same output, no side effects), so updates are testable and debuggable.

## One step deeper — when Redux does NOT apply (pendings: "when not to use redux", "limitations of redux")

1. State needed by one/two components → `useState` / `useReducer`. Redux's boilerplate buys nothing.
2. Rarely-changing shared value (theme, locale) → Context is enough.
3. Small app / small team, no complex async flows → setup + learning cost outweighs benefits (examiner phrase: "boilerplate overhead").
4. Related trap: **why not localStorage instead of Redux?** — localStorage is persistence, not state: writing to it **never re-renders your UI**, it stores **serializable strings only**, and it survives refresh (Redux lives in memory — refresh clears it unless you persist deliberately, e.g. Redux Persist).

## Small code sketch (read now — typing starts Day 2)

```js
// the request for change (an action: plain object with type + payload)
dispatch({ type: 'cart/addItem', payload: product })

// the writer (a reducer: pure function)
(state, action) => ({ ...state, items: [...state.items, action.payload] })

// the reader (subscription in React)
const items = useSelector(s => s.cart.items)
```

## Teach-back prompt (answer in YOUR words)

- What problem does Redux solve that prop drilling and Context don't?
- What is a store? What is global state management?
- Say the data flow as one sentence with every keyword.
