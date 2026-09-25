# Supplement — Components & Patterns (senior pendings)

> Priority: 🟡 Medium-High — class-component names & patterns show up in viva even though you build functional
> Companion to `02-core-react.md`.

---

## 1. Functional vs class components

| | Functional | Class |
|---|---|---|
| Syntax | `function C() { return < JSX/> }` | `class C extends React.Component { render() {...} }` |
| State | `useState` hook | `this.state` + `this.setState` |
| Lifecycle | `useEffect` | `componentDidMount` etc. |
| `this` | **no `this`** | mandatory (`this.props`, `this.setState`) |
| Performance | Same (with Compiler/memo) | Slightly heavier baseline |
| Today | ✅ **default since hooks (2019)** | legacy — maintenance only |

```jsx
// class shape (recognize it)
class Clock extends React.Component {
  constructor(props) {
    super(props);              // super(props) → gives access to this.props
    this.state = { now: new Date() };
  }
  componentDidMount() { this.t = setInterval(() => this.setState({ now: new Date() }), 1000); }
  componentWillUnmount() { clearInterval(this.t); }
  render() { return <p>{this.state.now.toLocaleTimeString()}</p>; }
}
```

**`super()` vs `super(props)`:**
- `super()` — call parent (`React.Component`) constructor; `this.props` is **undefined** inside constructor until you set state carefully.
- `super(props)` — pass props up so `this.props` is available **in the constructor**. Correct choice when you read props there. Outside constructor, React assigns `this.props` anyway — but exam answer: **use `super(props)`**.

**Terms to mention in exam:** functional vs class, hooks replaced class, `super(props)`, `this.state`, `render()`.

---

## 2. Lifecycle methods (class) — full map

| Phase | Class method | Functional equivalent |
|---|---|---|
| Mount | `componentDidMount()` | `useEffect(fn, [])` setup |
| Update | `componentDidUpdate(prevProps, prevState)` | `useEffect(fn, [dep])` |
| Unmount | `componentWillUnmount()` | cleanup `return () => {}` |
| Render (before) | `render()` / constructor | function body itself |
| Render (optimization) | `shouldComponentUpdate` | `React.memo` / `useMemo` |
| Errors | `componentDidCatch(error, info)` | Error Boundary (class only) |

**componentDidMount:** runs once after first paint — fetch data, subscriptions, `setInterval`. Same job as `[]` effect.

**componentDidUpdate:** runs after every update — compare prev vs current props/state to avoid loops. Modern code: dependency array instead.

**componentWillUnmount:** cleanup before removal — clear timers, remove listeners. Same as effect cleanup.

**Replaced methods (viva trivia):** `componentWillMount` → deprecated (use didMount/effect); `replaceState` → **removed** (use `setState({...})` merge or full state object); `UNSAFE_` prefixes on legacy will* methods.

**Terms to mention in exam:** lifecycle methods, didMount, didUpdate, willUnmount, hooks mapping, deprecated.

Docs: https://react.dev/reference/react/Component#componentdidmount

---

## 3. Pure components

**PureComponent:** class component with built-in **shallow props/state comparison** in `shouldComponentUpdate` — skips re-render if nothing changed shallowly.

```jsx
class List extends React.PureComponent { ... }
```

**Functional equivalent:** `React.memo` (props shallow compare) + `useMemo`/`useCallback` for values.

**Gotcha:** shallow compare misses mutations inside nested objects/arrays → must still update immutably; also "always new" object props (`style={{...}}`, inline arrow) defeat it.

**Terms to mention in exam:** PureComponent, shallow compare, skip re-render, React.memo equivalent.

---

## 4. React.memo (functional pure)

```jsx
const Row = React.memo(function Row({ todo, onToggle }) {
  return <li onClick={() => onToggle(todo.id)}>{todo.text}</li>;
});
```

- Wraps component: re-renders **only if props differ shallowly** (or custom `arePropsEqual`).
- Pairs with **stable** callbacks (`useCallback`) and primitives props — otherwise useless.
- `useMemo` memoizes a **value inside**; `React.memo` memoizes the **component output**.

**Terms to mention in exam:** React.memo, shallow props compare, pure render, stable references.

Docs: https://react.dev/reference/react/memo

---

## 5. Higher-Order Component (HOC)

**Simple words:** a function that takes a component → returns a **new enhanced component**. Like a wrapper/decorator.

```jsx
function withLogging(Wrapped) {
  return function WithLogging(props) {
    useEffect(() => { console.log("rendered", Wrapped.name); });
    return <Wrapped {...props} />;
  };
}
const DebugUser = withLogging(UserCard);
```

**Advantages of HOC:**
- **Reuse logic** across many components (no copy-paste)
- **Separation** — wrapper handles concern, inner stays about UI
- **Composable** — stack multiple HOCs (`withAuth(withTheme(withLogging(C)))`)
- **Render-prop/prop injection** — HOC injects data (`user`, `theme`) as props

**Cons / alternatives:** wrapper hell (devtools noise), ref/hoisting issues → modern preference: **custom hooks** (logic) + **context** (distribution) + **composition**. Still exam-relevant (Redux `connect`, ` withRouter` history).

**Terms to mention in exam:** HOC, component enhancer, reuse, composition, wrapper, props injection.

Docs: https://react.dev/reference/react/Component (patterns community doc historically)

---

## 6. Render props

**Simple words:** a component takes a **function as children/prop** and **calls it** — the function *renders* the UI, so the parent passes behavior via what to render.

```jsx
<MouseTracker>
  {({ x, y }) => <p>Mouse at {x}, {y}</p>}
</MouseTracker>
```

```jsx
function MouseTracker({ render }) {   // or children-as-function
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return render(pos);
}
```

**vs HOC:** HOC injects via **props**, render props inject via **call** — both share logic without inheritance. **Custom hooks** largely replaced both for logic-sharing; render props still useful when sharing **JSX/UI decisions**.

**Terms to mention in exam:** render props, children as function, inversion of control, share logic.

---

## 7. Error boundaries

**Simple words:** a React component that **catches JS errors in its child tree** and shows a fallback UI instead of the whole app white-screening.

**Facts (exam traps):**
- Only **class components** can be error boundaries (need `componentDidCatch` / `static getDerivedStateFromError`). Functional equivalent = upcoming `useErrorBoundary` (3rd-party) / React 19 doesn't ship a hook yet officially stable for this — answer: **class-based**.
- Catches errors in **render, lifecycle, constructors** of children.
- Does **NOT** catch: **event handler errors** (use try/catch), **async code** (promises), **server-side rendering**, errors in the boundary itself.

```jsx
class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(err) { return { error: err }; }
  componentDidCatch(err, info) { console.error(err, info); }  // logging
  render() {
    if (this.state.error) return <h2>Something broke: {this.state.error.message}</h2>;
    return this.props.children;
  }
}
// usage: <ErrorBoundary><App /></ErrorBoundary>
```

**Netflix clone "handle errors"** = error boundary around route content + fetch `.catch` state (see `04-todo-project.md`).

**Terms to mention in exam:** error boundary, fallback UI, `componentDidCatch`, not event handlers, white screen prevention.

Docs: https://react.dev/reference/react/Component#componentdidcatch

---

## 8. React.Fragment & why not div

```jsx
import { Fragment } from "react";
<Fragment key={t.id}><td>...</td><td>...</td></Fragment>
// shorthand: <><td/><td/></>   (but shorthand can't take key)
```

**Advantages of Fragment:**
- Groups children **without adding a DOM node**
- Correct **CSS grid/flex children** (no extra wrapper breaking selectors/`nth-child`)
- Lighter DOM, cleaner inspector

**Drawbacks of using div instead:**
- Extra `<div>` in DOM → breaks `:nth-child`, flex/grid item counts, adds junk nodes
- Meaningless wrappers pollute markup

**Fragment vs div:**

| | Fragment | div |
|---|---|---|
| DOM node | ❌ none | ✅ one |
| Can style/selector? | no | yes |
| Needs wrapper semantically? | — | when you need a box |

**Giving key to a fragment:** shorthand `<> </>` **cannot** take a key — use `<Fragment key={id}>` inside maps (common list-table pattern).

**Terms to mention in exam:** React.Fragment, no DOM node, key on Fragment, nth-child, div wrapper drawbacks.

Docs: https://react.dev/reference/react/Fragment

---

## 9. Controlled vs uncontrolled components

| | Controlled | Uncontrolled |
|---|---|---|
| Source of truth | **React state** (`value={...}`) | **DOM** (ref / default only) |
| Update | `onChange` → setState | DOM stores itself; read on demand via `ref` |
| Immediate validation | ✅ | read at submit |
|.Forms library | standard React way | simpler one-offs, integrates with HTML |

```jsx
// controlled
<input value={text} onChange={(e) => setText(e.target.value)} />
// uncontrolled
<input defaultValue="hi" ref={inputRef} />
const val = inputRef.current.value;   // at submit time
```

**Benefits of uncontrolled components:**
- Less code for simple forms (no per-keystroke state)
- No re-render per keystroke → **faster in huge forms**
- Lets **browser** do native behaviors (autofill styling, default validation UI)
- Good when you only care about values **at submit**

**Manipulating uncontrolled components:** via **`ref`** — `ref.current.value`, `.focus()`, `.checked`. Same as vanilla DOM access, React-scoped.

**Terms to mention in exam:** controlled vs uncontrolled, value vs defaultValue, ref access, single source of truth.

Docs: https://react.dev/learn/referencing-values-with-refs

---

## 10. StrictMode (extras) + built-ins

**Built-in components (know the trio):**

| Component | Job |
|---|---|
| `Fragment` | group without DOM node |
| `StrictMode` | dev-only double-invoke + warnings |
| `Suspense` | fallback while async child (lazy, promises) loads: `<Suspense fallback={<Spinner/>}>` |

**StrictMode on/off:** wrap/unwrap in `main.jsx`. Double-invokes: component bodies, effects (mount→cleanup→mount), state updaters — surfaces missing cleanups. **Why console twice:** this intentional double render in dev only.

**forceUpdate:** class-only `this.forceUpdate()` — bypasses `shouldComponentUpdate`, re-renders anyway. Anti-pattern; functional = `setState` with new value / key-remount trick.

**Switching components:** swap which component renders based on state/route:

```jsx
{mode === "list" ? <List/> : <Grid/>}
// or route: <Route path="/a" element={<A/>} />
```

**React mixins:** **class-era** multiple inheritance hack (createReactClass `mixins`) — **removed** with ES6 classes; replacement = HOCs, hooks, utilities. Answer: "legacy, use custom hooks."

**Custom components:** any component you write vs built-ins (`div`, `button`). Architecture = split UI into custom components.

**Component structure:** file-per-component (`TodoItem.jsx`), props in, events up, default export; folder co-location (`components/Todo/`).

**Terms to mention in exam:** ErrorBoundary/Fragment/StrictMode/Suspense, mixins deprecated → hooks, forceUpdate anti-pattern.

---

## 11. Naming conventions & return rules (cleanup of misc pendings)

- Components: **PascalCase** (`TodoItem`) — JSX treats lowercase as host tags (`div`).
- Files: match component name (`TodoItem.jsx`), export default same.
- Handlers: `handleClick` / `onSubmit` props verb-first.
- State setters: `setX` from `useState([x, setX])`.
- Hooks: `useCamelCase`.
- Custom hooks file: `useCounter.js`.
- **Return statement:** component must `return` JSX (or `null`); implicit single-expression return needs no `()` — multi-line JSX wrapped in `()`.
- **Single element return:** one root / fragment (see `02-core-react.md` §D.5).

**Purpose of the root DOM element (`#root`):** empty mount point in `index.html`; `createRoot` attaches React's tree there — everything React renders lives inside it. Analogy: EJS `<body><%- body %></body>` slot.

**`htmlFor`:** JSX name for `for` on `<label>` (maps to DOM `.htmlFor` property; `for` reserved in JS).

**Terms to mention in exam:** PascalCase, root element, htmlFor, single return.

---

## Quick recap

1. Functional = modern default; class = know `super(props)`, `render()`, lifecycle names.
2. Pure/`React.memo` = shallow compare → skip render; immutability required.
3. HOC / render props / **custom hooks** = three ways to share logic (hooks win).
4. Error boundaries = class-only, catch render errors, not event handlers.
5. Fragment = group without DOM; key needs `<Fragment key>`.
6. Controlled = state owns input; uncontrolled = DOM owns, read via ref.

**Ready for the quiz?** Say yes — all questions in one batch.
