# M14 Full Teach — Everything With Code

> Built 18 Oct 2026, evening re-teach after session reset. Mode: code shown, no quizzes.
> Reread this Monday 8:00–8:45 AM. Every snippet is complete — paste-runnable.
> Sources: FromSeniors.md practicals · EXAM.md pendings · RAW-Technical portal topics.

---

# SECTION 1 — Seniors' Practicals, With Answers

## 1.1 (P) = portal-attempted pending. Two most repeated by examiner:

### Counter with useReducer

```jsx
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INC":  return { count: state.count + 1 };
    case "DEC":  return { count: state.count - 1 };
    case "RESET": return { count: 0 };
    default: return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="card">
      <h2 className="count">{state.count}</h2>
      <div className="row">
        <button onClick={() => dispatch({ type: "INC" })}>+</button>
        <button onClick={() => dispatch({ type: "DEC" })}>−</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </div>
  );
}
```

**Why:** state logic lives in ONE pure function; components only dispatch "what happened".

### Example for useMemo (expensive calculation)

```jsx
import { useMemo, useState } from "react";

const expensiveCalc = (n) => {
  console.log("calculating...");    // the log proves when it re-runs
  // in a real app this could be a big filter/sort — the log is enough for the demo
  return n * n;
};

export default function MemoDemo() {
  const [num, setNum] = useState(2);
  const [theme, setTheme] = useState("light");

  const squared = useMemo(() => expensiveCalc(num), [num]); // re-runs ONLY when num changes

  return (
    <div className="card">
      <p>{num}² = {squared}</p>
      <p>Theme: {theme}</p>
      <button onClick={() => setNum(num + 1)}>+1 (recalculates)</button>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle theme (no recalculation — memo!)
      </button>
    </div>
  );
}
```

**What you should see in the console:**
- Load: `calculating...`
- Click `+1`: `calculating...` again — `num` changed, so the memo recalculated.
- Click `Toggle theme`: the theme text on screen changes, but **no new `calculating...`** — re-render happened, recalculation skipped. That's memoization.
- Dev StrictMode runs things twice — each log may appear doubled (second copy dimmed with React DevTools). Ignore the doubling; watch *whether new logs appear after each click*.

**Say this in exam:** "useMemo caches the result; toggling theme re-renders but the calculation doesn't re-run — that's the memoization."

## 1.2 The full practicals list — answer shapes

### 1. Color change text (state)

```jsx
import { useState } from "react";

export default function ColorText() {
  const [color, setColor] = useState("black");
  return (
    <div className="card">
      <p style={{ color }}>I change color!</p>
      <div className="row">
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("blue")}>Blue</button>
      </div>
    </div>
  );
}
```

### 2. Counter using Context

```jsx
import { createContext, useContext, useState } from "react";

const CounterContext = createContext(null);

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}

const useCounter = () => useContext(CounterContext);

function CounterDisplay() {
  const { count, setCount } = useCounter();
  return (
    <div className="card">
      <h2 className="count">{count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
}

export default function App() {
  return (
    <CounterProvider>
      <CounterDisplay />
    </CounterProvider>
  );
}
```

### 3. Counter with useReducer AND Context

```jsx
import { createContext, useContext, useReducer } from "react";

const CounterContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "INC": return { count: state.count + 1 };
    case "DEC": return { count: state.count - 1 };
    case "RESET": return { count: 0 };
    default: return state;
  }
}

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

const useCounter = () => useContext(CounterContext);

function CounterButtons() {
  const { state, dispatch } = useCounter();
  return (
    <div className="card">
      <h2 className="count">{state.count}</h2>
      <div className="row">
        <button onClick={() => dispatch({ type: "INC" })}>+</button>
        <button onClick={() => dispatch({ type: "DEC" })}>−</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <CounterProvider>
      <CounterButtons />
    </CounterProvider>
  );
}
```

**Exam sentence:** "Reducer holds the logic, context shares it globally — components just `dispatch` actions."

### 4. React.memo (Child doesn't re-render when props unchanged)

```jsx
import { memo, useState } from "react";

const Child = memo(function Child({ label }) {
  console.log("Child rendered");     // only on first load — and StrictMode's dev double-invoke
  return <p>{label}</p>;
});

export default function Parent() {
  console.log("Parent rendered");    // prints on EVERY click — the contrast that proves the point
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  return (
    <div className="card">
      <Child label="Static text" />
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
      <button onClick={() => setOther(other + 1)}>other: {other}</button>
    </div>
  );
}
```

**What you should see in the console — this is the whole demo:**
- **Page load:** `Child rendered` + `Parent rendered` — in dev StrictMode each logs **twice** (second copy often dimmed by React DevTools).
- **Every click (either button):** another `Parent rendered` (also doubled in dev — StrictMode double-invokes every render) — and **never** a new `Child rendered`.
- The `Child`'s silence after clicking **is the proof** — `memo` skipped re-rendering it because its prop (`label`) never changed.
- If NOTHING prints even on load → the component isn't mounted where you pasted it (wrong file, wrong route, or not rendered anywhere).

### 5. Reducer list (add/remove items via dispatch)

```jsx
import { useReducer, useState } from "react";

function listReducer(items, action) {
  switch (action.type) {
    case "ADD":    return [...items, action.item];
    case "REMOVE": return items.filter((item) => item !== action.item);
    default: return items;
  }
}

export default function TodoList() {
  const [items, dispatch] = useReducer(listReducer, []);
  const [input, setInput] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch({ type: "ADD", item: input.trim() });
    setInput("");
  };

  return (
    <div className="card">
      <form onSubmit={add} className="row">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="New item" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item}>
            {item} <button className="danger" onClick={() => dispatch({ type: "REMOVE", item })}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

**Note:** `key={item}` is fine for the demo — but real apps give each item a **unique id** and key by that (two identical strings would collide). Keys get more ink in Section 11.

### 6. Render component while Resize

```jsx
import { useEffect, useState } from "react";

export default function ResizeWatch() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // cleanup!
  }, []);

  return (
    <div className="card">
      <p>Window width: {width}px</p>
      {width < 600 ? <p>📱 Small screen UI</p> : <p>💻 Big screen UI</p>}
    </div>
  );
}
```

**Exam point:** addEventListener needs the **cleanup return** — or every resize stacks a new listener.

### 7. Toggle theme using Context

```jsx
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => useContext(ThemeContext);

function ThemeCard() {
  const { theme, toggle } = useTheme();
  return (
    <div className={`card ${theme}`}>
      <p>Theme: {theme}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemeCard />
    </ThemeProvider>
  );
}
```

### 8. Stopwatch using Context

```jsx
import { createContext, useContext, useEffect, useRef, useState } from "react";

const WatchContext = createContext(null);

function WatchProvider({ children }) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const idRef = useRef(null);

  useEffect(() => {
    if (!running) return;
    idRef.current = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(idRef.current);   // cleanup stops the old interval
  }, [running]);

  const reset = () => { setTime(0); setRunning(false); };

  return (
    <WatchContext.Provider value={{ time, running, setRunning, reset }}>
      {children}
    </WatchContext.Provider>
  );
}

const useWatch = () => useContext(WatchContext);

function WatchDisplay() {
  const { time, running, setRunning, reset } = useWatch();
  return (
    <div className="card">
      <h2 className="count">{time}s</h2>
      <div className="row">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <WatchProvider>
      <WatchDisplay />
    </WatchProvider>
  );
}
```

**StrictMode note (dev only):** on first mount, effects run **setup → cleanup → setup** once — the cleanup above is exactly what makes that safe (never two intervals). Production: one run. Same reason the resize example needs its cleanup.

### 9. useMemo — see 1.1
### 10. useReducer — see 1.1
### 11. Child to parent communication (callback prop)

```jsx
import { useState } from "react";

function Child({ onSend }) {
  return <button onClick={() => onSend("Hello from child!")}>Send up</button>;
}

export default function Parent() {
  const [message, setMessage] = useState("");
  return (
    <div className="card">
      <Child onSend={setMessage} />   {/* pass the setter down */}
      <p>Child says: {message}</p>
    </div>
  );
}
```

**Exam line:** "Parent passes a function down; child calls it with data — data flows up."

---

# SECTION 2 — Hooks pentagon, taught properly (next)
# SECTION 3 — useReducer + Context pattern
# SECTION 4 — Routing (nested, params, protected, navigate)
# SECTION 5 — Performance: memo trio, profiler, React Compiler
# SECTION 6 — Custom hooks + HOC + advanced patterns
# SECTION 7 — Lazy loading, Suspense, code splitting, tree shaking
# SECTION 8 — Events, controlled/uncontrolled, portals
# SECTION 9 — API integration (fetch/axios, loading states)
# SECTION 10 — Babel/Webpack/bundling/build
# SECTION 11 — Misc: reconciliation, StrictMode, exports, render vs re-render
# SECTION 12 — The 3 "flatten" questions live at the end
