# Supplement — State & Props (senior pendings)

> Priority: 🔴 High — "State vs X" and parent/child communication are top viva questions
> Companion to `02-core-react.md` §G — this file goes deeper.

---

## 1. State vs Props (the master table)

| | **State** | **Props** |
|---|---|---|
| Owned by | The component itself | Passed in by parent |
| Mutable | ✅ via setter only | ❌ read-only |
| Change re-renders | That component + children | N/A (parent changes it) |
| Analogy | function local memory that survives calls | function arguments |
| Access | `useState` | destructured parameter |
| Child can change? | its own state: yes | its own props: **never** |

**Terms to mention in exam:** state vs props, ownership, read-only, setter, one-way.

---

## 2. Props immutability

**Why props are immutable:**
1. **One-way data flow** — single source of truth stays in the parent; child mutating props would desync parent state vs UI.
2. **Reconciliation assumes purity** — same props in → same output out; mutation breaks memoization (`React.memo`, `shouldComponentUpdate`).
3. **Debuggability** — data flows down predictably; "who changed this?" always = owner.

```jsx
// ❌ never
props.done = true;
// ✅ notify parent instead
onToggle(id);   // parent setState → new props flow down
```

**Terms to mention in exam:** immutability, one-way data flow, pure function, single source of truth.

Docs: https://react.dev/learn/state-a-components-memory (props section)

---

## 3. State immutability (and spread vs push)

```jsx
// ❌ mutate — same reference, React may skip re-render / break memo
state.count++;
todos.push(t);
state.user.name = "x";
// ✅ new reference
setCount(c => c + 1);
setTodos([...todos, t]);
setUser({ ...user, name: "x" });
setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
```

**Why spread instead of `Array.push` for state updates:**
1. React compares with **`Object.is`** — mutated array passes `is(old, old)` → change missed or memo broken.
2. React's model is **UI = f(state)** with **previous state → new state** snapshots; mutation destroys the previous snapshot (undo, time-travel, concurrent rendering all rely on immutability).
3. `push` returns the **length**, not the array — classic `setTodos(todos.push(x))` bug stores a number.

**Terms to mention in exam:** immutable update, Object.is, new reference, functional update, spread.

---

## 4. State vs normal/local variables (x2 pending — same answer)

```jsx
function C() {
  let n = 0;                 // local: reset EVERY render, no re-render on change
  const [s, setS] = useState(0);  // state: persists, setter re-renders
}
```

- Local variable: lives for **one function execution**; incrementing it doesn't repaint.
- State: React keeps the value **between renders**; setter triggers paint.
- **`useState` vs normal JS variable:** the hook is what makes JS variable *reactive* — subscription between data and the view.

**Terms to mention in exam:** persistence across renders, re-render, reactive, hook storage.

---

## 5. One-way data binding

Data flows **down** as props; events flow **up** as callbacks. Two-way binding (`ng-model`, `v-model`) lets input and state auto-sync both directions — React deliberately doesn't: explicit `value` + `onChange` makes data flow traceable.

```jsx
value={text} onChange={(e) => setText(e.target.value)}   // the two-way loop, written manually
```

**Terms to mention in exam:** unidirectional, props down events up, explicit over magic.

---

## 6. Parent → child & child → parent

**Parent → child:** props (only way).

```jsx
<Child user={user} onSave={handleSave} />
```

**Child → parent:** callback prop the child invokes; parent's state is the real source of truth.

```jsx
function Parent() {
  const [msg, setMsg] = useState("");
  return (
    <>
      <p>Parent got: {msg}</p>
      <Child onSend={setMsg} />
    </>
  );
}
function Child({ onSend }) {
  return <button onClick={() => onSend("hello from child")}>Send up</button>;
}
```

**Display user input from child in parent / toggle checkbox parent-child:** same pattern — child input is controlled by state **lifted to parent**, or child fires callback per change.

**Terms to mention in exam:** callback prop, lift state up, source of truth, controlled input.

---

## 7. Prop drilling

**Simple words:** passing props through components that don't use them, just to reach a deep child — like a manager relaying a message 5 levels down.

```jsx
<A theme={t}> <B theme={t}> <C theme={t}>   // B ignores theme but must forward it
```

**Problems:** noisy signatures, every intermediate must know about the prop, refactor pain.

**Fixes:** **lifting state up** (if siblings need it), **context** (`useContext` — cross-cutting), or **composition** (`{children}` with provider wrapper).

**Terms to mention in exam:** prop drilling, intermediate components, context as fix, composition.

Docs: https://react.dev/learn/passing-props-to-a-component#wrapping-components

---

## 8. Lifting state up

When **two siblings** need the same changing data → move state to their **closest common parent**; pass down via props + callbacks.

```jsx
function Parent() {
  const [shared, setShared] = useState("");
  return (<ChildA onChange={setShared} /> <ChildB value={shared} />);
}
```

**When to lift:** sibling sync, single source of truth, child-to-child communication.
**Terms to mention in exam:** lift state up, closest common ancestor, shared state, one source of truth.

Docs: https://react.dev/learn/sharing-state-between-components

---

## 9. Update props

You **can't update props** directly. The owner updates **its state** → new props flow down automatically on re-render:

```jsx
function Parent() {
  const [n, setN] = useState(0);
  useEffect(() => { const id = setInterval(() => setN(x => x + 1), 1000); return () => clearInterval(id); }, []);
  return <Child number={n} />;    // props "update" because parent state changed
}
```

**Terms to mention in exam:** props update via parent state, derived props, no direct mutation.

---

## 10. PropTypes

Runtime **type-checking** for props (dev warning console):

```jsx
import PropTypes from "prop-types";

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};
```

Types: `string, number, bool, func, object, array, node, oneOf([...]), shape({...})`. `isRequired` enforces presence. Superseded by **TypeScript** in modern code — still exam-relevant. React itself no longer bundles it (separate package).

**Terms to mention in exam:** PropTypes, runtime validation, dev warnings, TypeScript alternative.

Docs: https://github.com/facebook/prop-types

---

## 11. Default props

```jsx
// modern — ES default parameters
function Greeting({ name = "Guest", items = [] }) { ... }

// legacy static
Greeting.defaultProps = { name: "Guest" };
```

Used when prop is **`undefined`** (not `null` — null means "intentionally nothing").

**Terms to mention in exam:** defaultProps / default parameters, undefined triggers default.

---

## 12. Stateful vs stateless components

| | Stateful (container/smart) | Stateless (presentational/dumb) |
|---|---|---|
| Has `useState`? | ✅ | ❌ |
| Responsibility | Data, logic, lifecycle | Markup from props only |
| Also called | container, smart, classful | pure display, functional display |
| Testability | needs state setup | trivial — props in, JSX out |

Trend: **mostly stateful at top, stateless leaves** — dumb components reuse everywhere. (Confusing term alert: a "stateless **function component**" can still *receive* state via props — stateless means *doesn't own* state.)

**Terms to mention in exam:** stateful vs stateless, container vs presentational, smart vs dumb.

---

## 13. State management (the landscape)

**Simple words:** deciding **where** app state lives and **how** it flows/updates as the app grows.

Levels (most React apps use all three):
1. **Local state** — `useState` inside a component (default)
2. **Lifted / shared** — parent owns, props down (siblings)
3. **Context** — cross-tree without drilling (theme, auth, locale)
4. **External stores** — Redux, Zustand, Jotai, Recoil (many writers, devtools, middleware, temporal debugging)
5. **Server state** — React Query / SWR / RTK Query (cache, refetch, invalidation — different from client UI state)

**When to reach for a store:** state used by **many unrelated components**, complex update logic, need undo/devtools, or >2 levels of drilling. Otherwise lifting + context is enough.

**Terms to mention in exam:** state management, colocate state, context, external store, server state vs UI state.

---

## Quick recap

1. Props = immutable parent input; state = own mutable memory via setter.
2. Always **immutable updates** (spread/map/filter) — `Object.is` + purity depend on it.
3. One-way: **props down, events up**; siblings → lift state; deep cross-cutting → context.
4. Can't update props — parent state changes produce new props.
5. PropTypes + defaultProps = safety nets (TypeScript is the modern answer).
6. Stateful owns data; stateless renders from props; management = pick the right level.

**Ready for the quiz?** Say yes — all questions in one batch.
