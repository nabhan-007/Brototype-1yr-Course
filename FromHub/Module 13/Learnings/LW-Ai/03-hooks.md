# Topic 3 — React Hooks (+ senior pendings)

> Priority: 🔴 High — expect live-coding ("write a counter", "fetch data on mount")
> Hooks = special functions that let functional components "hook into" React features (state, effects, refs) that previously required class components.

---

## What is a Hook? + Rules of hooks

**Official definition:** **Hooks** are functions that let functional components **use state and lifecycle features**. Name always starts with `use`.

**Rules of hooks (exam-favorite — each rule + WHY):**
1. **Only at the top level** — never inside loops, conditions, or nested functions.
2. **Only from React functions** — components or other custom hooks. Not plain JS functions.
3. **Consistent order every render** — React stores hook state in an **internal array indexed by call order**.

**Why hooks can't be inside `if`:**

```jsx
if (count > 0) {
  const [x, setX] = useState(0);   // ❌ may not run this render
}
```

If the `if` skipped on render #2, hook index #0 disappears → React's array slots misalign (slot 0 = what used to be hook #2) → **wrong state values / crash**. React identifies each hook by **call order**, not by variable name. Same reason: no hooks after early `return` — the count must be stable across renders.

**How to explain:** "React remembers hook state in an array in the order you call them. Conditions or loops change that order between renders, which corrupts the mapping, so hooks must run unconditionally every time."

**Terms to mention in exam:** rules of hooks, top level, call order, stable order, conditional hooks bug.

Docs: https://react.dev/reference/rules/rules-of-hooks

---

## 1. useState — component memory

**Official definition:** `useState` declares a **state variable** + setter; returns `[value, setValue]`. Calling the setter updates state and schedules a re-render.

```jsx
const [count, setCount] = useState(0);
setCount(count + 1);              // direct
setCount((c) => c + 1);           // functional update — safe when depends on prev
```

**State vs normal JS / local variables (top pending):**

| | Normal variable | `useState` |
|---|---|---|
| Value survives re-render? | ❌ re-created each function call | ✅ React stores it |
| Changing it re-renders? | ❌ no | ✅ yes |
| Visible in UI reactively | ❌ must manually touch DOM | ✅ automatic |
| Where it lives | stack frame of that call | React's hook storage (outside component fn) |

```jsx
function Bad() {
  let count = 0;                  // lost every render — click "works" but UI stays 0
  return <button onClick={() => { count++; }}>{count}</button>;
}
```

**State vs local variables:** same idea — locals die when the function returns; state persists across renders because React holds it in its own memory keyed to the component instance.

**Immutability of state + why spread instead of `push`:**

```jsx
// ❌ push — same array reference, React sees Object.is(a,a) → often no proper update
setTodos(todos.push(newTodo));
// ✅ new array every update
setTodos([...todos, newTodo]);
```

React compares old/new state with **`Object.is`**. `push` mutates in place → same reference → bail-out / broken memoization. Spread creates a **new reference** → change detected → re-render. Same for objects: `{ ...obj, key: v }` never `obj.key = v`.

**Terms to mention in exam:** useState, setter, initial value, re-render, immutability, functional update, Object.is, spread vs push.

Docs: https://react.dev/reference/react/useState

---

## 2. useEffect

**Official definition:** `useEffect` runs a **side effect** after render; optional **cleanup** runs before re-run and on unmount; **dependency array** controls timing.

```jsx
useEffect(() => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);   // cleanup
}, [/* deps */]);
```

### Dependency array forms (all three — exam asks each)

| Dep array | Runs |
|---|---|
| `[]` empty | **Mount once** + cleanup on unmount |
| `[a, b]` | Mount + when `a` or `b` changes |
| **None (omitted)** | **After EVERY render** — usually a bug (setState-in-effect → infinite loop) |

**useEffect with no dependency array:** fires every render — useful only for logging each render (rare). Combined with `setState` inside = infinite render loop.

**Cleanup function:** the `return () => {...}` — "undo" the effect: `clearInterval`, remove listener, abort fetch (`AbortController`), clear timeout. Prevents leaks + stale state updates.

**Lifecycle methods via useEffect:**

```
componentDidMount    → useEffect(fn, [])
componentDidUpdate   → useEffect(fn, [dep])
componentWillUnmount → cleanup return
```

### useEffect vs useLayoutEffect

| | `useEffect` | `useLayoutEffect` |
|---|---|---|
| When | **Asynchronously after paint** (browser painted) | **Synchronously before paint** (after DOM mutation) |
| Blocking? | No — doesn't block paint | **Yes** — blocks paint until it runs |
| Use for | Fetch, subscriptions, timers, logs | Measuring layout (`getBoundingClientRect`), DOM mutations user shouldn't see flash of |
| SSR | Safe | **Warns on server** (no DOM) — use `useInsertionEffect` / guard |

Default: `useEffect`. Only switch when you need measurement/layout before paint flicker.

**Terms to mention in exam:** useEffect, side effect, dependency array, cleanup, every render, useLayoutEffect, paint timing.

Docs: https://react.dev/reference/react/useEffect · https://react.dev/reference/react/useLayoutEffect

---

## 3. useRef

**Official definition:** `useRef` returns a mutable ref object `{ current }` that **persists for the component's lifetime** and whose changes **don't trigger re-render**.

```jsx
const inputRef = useRef(null);     // DOM ref
const idRef = useRef(0);           // mutable box (no re-render on change)
<input ref={inputRef} />
inputRef.current?.focus();
```

**Advantages of useRef:**
- Persist values **across renders without re-render**
- Direct, **safe DOM access** (like `document.querySelector` but React-managed)
- Hold **timer IDs / previous values / instances** that shouldn't affect UI
- Reading `.current` in handlers gives **latest** value (avoids stale closures)

**Updating useRef:** just assign — `ref.current = newValue` — **no setter, no re-render**:

```jsx
countRef.current = countRef.current + 1;   // silent update
```

**useRef use cases:**
1. Focus/scroll/selection on DOM nodes
2. Store `setInterval` IDs → clear on unmount
3. Track previous render's value (prev-state pattern)
4. Hold any mutable data (isMounted flag, SDK instances)

**useRef vs forwardRef:**
- `useRef`: **your component** grabs its own DOM child.
- `forwardRef`: a component **forwards the ref the parent gave** it down to its inner DOM node (needed because refs don't pass through props normally — pre-React-19). React 19: `ref` is a regular prop, `forwardRef` deprecated-ish.

```jsx
const FancyInput = forwardRef((props, ref) => <input ref={ref} {...props} />);
// parent: <FancyInput ref={myRef} />
```

**Terms to mention in exam:** useRef, `.current`, no re-render, DOM access, timer IDs, forwardRef (ref forwarding).

Docs: https://react.dev/reference/react/useRef · https://react.dev/reference/react/forwardRef

---

## 4. useMemo / useCallback / React.memo (memoization)

**useMemo** — memoize a **computed value**:

```jsx
const sorted = useMemo(() => [...todos].sort(byDate), [todos]);
```

**useCallback** — memoize a **function reference**:

```jsx
const handleDelete = useCallback((id) => {
  setTodos((t) => t.filter((x) => x.id !== id));
}, []);
```

**useMemo vs React.memo:**

| | `useMemo(fn, deps)` | `React.memo(Component)` |
|---|---|---|
| What it memoizes | **Value inside** one component | **Whole component** — skips re-render if props shallow-equal |
| Level | Inside render body | Wraps the component |
| Trigger | deps change | props change |
| Often used together | parent passes memoized cb + `useMemo` value into `React.memo` child | |

**useCallback vs useMemo:** same cache idea — callback stores the **function**, memo stores the **result**.

**Cons of memoization (pending — be honest):**
- Not free — cache lookup + memory
- **Dep array mistakes → stale values** (worse than no memo)
- Shallow compare fails for objects/arrays recreated each render (`{}` ≠ `{}`) → cache never hits
- Early optimization — add only when profiling shows re-render cost (React 19 **React Compiler** auto-memoizes, reducing need)

**Terms to mention in exam:** memoization, dependency invalidation, stale closure, shallow compare, premature optimization, React Compiler.

Docs: https://react.dev/reference/react/useMemo · https://react.dev/reference/react/useCallback · https://react.dev/reference/react/memo

---

## 5. useContext — state without prop drilling

```jsx
const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
      <button onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}>Flip</button>
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);   // consume anywhere below
  return <button className={theme}>Hi</button>;
}
```

**Counter with useContext (practical):** wrap counter state in a context provider; any descendant `useContext(CounterCtx)` gets `{ count, setCount }` — no drilling.

**Limitations of useContext (pending):**
1. **No built-in memoization** — any provider `value` change re-renders **all consumers** (split contexts or memoize `value`)
2. **Prop drilling solved only for "cross-cutting" data** — not a full state manager (no devtools, actions, middlewares like Redux)
3. Changing context = new `value` object each render → needless consumer re-renders (fix: `useMemo` the value)
4. Not for high-frequency updates (every keystroke re-renders whole subtree)
5. Provider must sit **above** all consumers (missing provider → default value silently)

**Terms to mention in exam:** context, provider, consumer, prop drilling, all-consumers re-render, memoize value.

Docs: https://react.dev/reference/react/useContext

---

## 6. useReducer — useState's big sibling

```jsx
const [state, dispatch] = useReducer(reducer, initialState);

function reducer(state, action) {
  switch (action.type) {
    case "inc":   return { ...state, count: state.count + 1 };
    case "add":   return { ...state, todos: [...state.todos, action.payload] };
    default:      return state;
  }
}
// dispatch({ type: "inc" })
```

**When to replace useState with useReducer:**
- **Multiple related state values** that change together (one `state` object)
- **Complex update logic** (nested structures, transitions) — logic lives in one pure `reducer` instead of scattered setters
- Updates depend on **previous state in non-trivial ways** (batched actions)
- Easier to **test** (pure function) + enables **logging/middleware** patterns
- Next-state = `reducer(state, action)` — same shape as Redux (mental model transfer)

**When useState is enough:** one or two independent primitives (counter, toggle, input string).

**Terms to mention in exam:** useReducer, reducer pure function, dispatch, action, complex state, Redux-like.

Docs: https://react.dev/reference/react/useReducer

---

## 7. Router hooks (React Router — viva list)

| Hook | Replaces / does |
|---|---|
| `useNavigate()` | **`useHistory()`** (v5) — `const nav = useNavigate(); nav("/about")`, `nav(-1)` back |
| `useLocation()` | Current location object: `pathname`, `search`, `state` — re-renders on URL change |
| `useParams()` | Dynamic route params: `/user/:id` → `{ id }` |
| `useSearchParams()` | Read/edit query string like state (`?tab=posts`) |

`useNavigate` vs `useHistory`: Router **v6** removed `history` object → `useNavigate` returns a **function** (imperative API); v5 class/`useHistory` returned the history object with `.push/.go`. Exam answer: v6 = `navigate()`, v5 = `history.push()`.

**Reading query params:**

```jsx
const [searchParams, setSearchParams] = useSearchParams();
const tab = searchParams.get("tab") ?? "all";
setSearchParams({ tab: "done" });
// or classic: new URLSearchParams(location.search).get("tab")
```

Router is **out of official syllabus** (Chai videos 12 skipped) — cover only if examiner asks; full notes in `07-router-perf-misc.md`.

**Terms to mention in exam:** useNavigate, useParams, useLocation, v6 vs v5.

Docs: https://reactrouter.com/en/main/hooks/use-navigate

---

## 8. Custom hooks

**Simple words:** a custom hook = your own `useXxx()` function that calls other hooks — extracts **reusable hook logic**.

```jsx
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return width;
}
// usage: const w = useWindowWidth();
```

**Rules of custom hooks:**
1. Name **must start with `use`** (eslint-plugin-react-hooks enforces hook rules inside)
2. Can call **other hooks** — same rules apply (top level)
3. **One per file** convention (`useCounter.js`)
4. Plain JS function otherwise — each component calling it gets **its own** copy of the internal state (two calls = two independent states)
5. Don't call conditionally — same call-order rule

**Hooks vs normal functions (pending):**
| | Custom hook | Normal function |
|---|---|---|
| Can use React hooks inside? | ✅ | ❌ (would break rules / no component scope) |
| State per caller | ✅ isolated instance per component | shares nothing / pure logic |
| Naming | `use*` required | anything |

**Terms to mention in exam:** custom hook, reuse hook logic, `use` prefix, isolation per component.

Docs: https://react.dev/learn/reusing-logic-with-custom-hooks

---

## 9. setInterval + clearInterval in useEffect (timer practical)

```jsx
function Timer() {
  const [sec, setSec] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSec((s) => s + 1), 1000);
    return () => clearInterval(id);     // ← MUST clear (unmount + deps change)
  }, []);
  return <p>{sec}s</p>;
}
```

**Optimize / why clearing matters:** leaked intervals keep firing after unmount → "setState on unmounted component" warnings, CPU drain, ghost updates. Cleanup runs on unmount **and** before every effect re-run (e.g. `[delay]` changed → old interval cleared before new one starts).

**Same pattern for:** `setTimeout` (toast auto-hide), `addEventListener`, `IntersectionObserver`, fetch abort.

**Terms to mention in exam:** setInterval, clearInterval, cleanup, memory leak, unmount.

---

## 10. Full cheatsheet

| Hook | One line | Re-render on change? |
|---|---|---|
| `useState` | Memory + setter | ✅ |
| `useEffect` | Side effects; deps = when; cleanup = undo | only if setState |
| `useRef` | Mutable box / DOM grab | ❌ |
| `useMemo` | Cache a **value** | no (skips recompute) |
| `useCallback` | Cache a **function** | no |
| `useContext` | Read context anywhere | ✅ if provider value changes |
| `useReducer` | Complex state via reducer + dispatch | ✅ on dispatch change |
| `useNavigate/useParams/useLocation` | Router read/navigate | on route change |

**Terms to mention in exam:** (per section above).

**Ready for the quiz?** Say yes — all questions in one batch.
