# Tri-Store Lab — RHF · Zustand · MobX in one screen

One tiny todo app where each section is a different library doing the job it's best at.

```
npm install
npm run dev      → http://localhost:5191
```

---

## What each library owns here

| Section on screen | Library | File | Concept shown |
|---|---|---|---|
| 1 · the add form | **React Hook Form** | `src/components/TodoForm.jsx` | uncontrolled inputs, `register` + rules, `handleSubmit`, `formState.errors` |
| 2 · the list | **Zustand** | `src/store/todosStore.js` | one `create()` store, actions are plain functions, `useTodos(selector)` |
| 3 · the progress panel | **MobX** | `src/store/statsStore.js` | `makeAutoObservable`, action, **computed** `percent`, **reaction** → `message` |

The bridge between them is one line in `src/App.jsx`:

```js
useEffect(() => {
  statsStore.sync(todos.length, todos.filter((t) => t.done).length);
}, [todos]);
```

Zustand is the **source of truth**; MobX holds a **derived view** of it. That's a real-world pattern (one store for data, one for derived UI state), not a made-up split.

---

## Read in this order (15 minutes)

1. `src/store/todosStore.js` — 20 lines. That's the *entire* Zustand implementation.
2. `src/components/TodoList.jsx` — how a component reads and writes it.
3. `src/main.jsx` — notice what's **missing**: no `Provider`.
4. `src/components/TodoForm.jsx` — destructure **R-H-F**, spread `register`, print the error.
5. `src/store/statsStore.js` — one class, four MobX concepts in 40 lines.
6. `src/components/StatsPanel.jsx` — `observer()` is the whole React integration.
7. `src/App.jsx` — the one bridge line.

---

## The comparisons to say out loud

**Zustand vs Redux**
| Redux Toolkit | Zustand |
|---|---|
| `configureStore` + `Provider` | `create()` — nothing else |
| slice = reducers + auto actions | one object: state + functions |
| `dispatch(action())` | call the function directly |
| `useSelector(s => s.x)` | `useStore(s => s.x)` |

**Zustand vs MobX**
| Zustand | MobX |
|---|---|
| functions replace state immutably (`[...todos, newOne]`) | class methods **mutate** (`this.count++`) |
| no wrapping needed | components need `observer()` |
| no derived-value concept | **computed** getters, cached |
| no side-effect concept | **reaction** / `autorun` |

**MobX four concepts in this repo**
| Concept | Where |
|---|---|
| observable | `total`, `done`, `message` fields |
| action | `sync()`, `setMessage()` |
| computed | `get percent()` |
| reaction | the `reaction(() => this.percent, …)` in the constructor |

**`makeAutoObservable` vs `makeObservable`**
`makeAutoObservable(this)` infers observable/action/computed from the class shape. `makeObservable(this, { total: observable, sync: action, percent: computed })` makes you annotate each one — use it only when the inference is wrong.

---

## What to try (proves each concept)

1. Submit the form **empty** → RHF error, nothing added.
2. Type `ab` → minLength error. Type `buy milk` → task appears (Zustand `add`).
3. Tick every task → the bar reaches 100% **and** "All done!" appears — that's the MobX **reaction** firing off the **computed** value.
4. Delete a task → percent drops, message clears (reaction still watching).

## Exam lines

- "RHF keeps inputs **uncontrolled** — values are read through refs, so typing doesn't re-render the form. `handleSubmit` validates before calling my handler, and errors arrive in `formState.errors`."
- "Zustand is one `create()` call: state plus the functions that change it, subscribed with a selector hook. No Provider, because the store is a module-level singleton rather than something injected through Context."
- "In MobX I declared a class with `makeAutoObservable`, so fields became observables, methods actions, and the getter a cached computed. A `reaction` watches `percent` and sets a message when it hits 100 — that's the side-effect layer."
