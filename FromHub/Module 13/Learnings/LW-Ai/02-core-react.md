# Topic 2 — Core React Concepts (+ senior pendings)

> Priority: 🔴 High — every sub-point is exam-eligible
> Pattern: concept → code → how to explain → Terms to mention in exam

---

## A. What is React? (+ library vs framework, pros/cons)

### 1. What is React

**Simple words:** React is a JavaScript **library** for building user interfaces out of reusable components.

**Official definition:** React is an **open-source frontend JavaScript library** developed by **Facebook (Meta)** (engineer **Jordan Walke**, 2013) for building **component-based UIs** from data. Also called React.js / ReactJS. Current major: React 19.

**Terms to mention in exam:** library, Facebook/Meta, Jordan Walke, component-based, UI, declarative.

Docs: https://react.dev/

### 2. Library vs Framework

| | Library (React) | Framework (Angular, Django) |
|---|---|---|
| Scope | **One job** — UI rendering | **Full solution** — routing, HTTP, forms, CLI |
| Control | **You** call the library (inversion of control) | Framework calls **you** (you fill its structure) |
| Choices |自由 pick router, state tool, etc. | Opinionated "the framework way" |
| React + extras | React = UI only → add React Router, Redux yourself | Angular ships router + HttpClient built-in |

**How to explain:** "React is a library because it only solves rendering UI. A framework like Angular controls the whole app structure. That's why we add React Router separately."

**Terms to mention in exam:** library vs framework, inversion of control, UI layer only, pick-your-own stack.

### 3. Advantages & disadvantages of React

**Advantages:**
- **Virtual DOM** → fast, minimal real-DOM updates
- **Component reuse** → maintainable, testable
- **One-way data flow** → predictable state
- **Declarative** → describe *what* UI should look like for a given state
- Huge ecosystem, huge community, React Native for mobile
- JSX = JS power inside markup

**Disadvantages:**
- **Just a library** — must assemble router/state/boilerplate yourself (fast-moving ecosystem, "decision fatigue")
- **JSX learning curve** (HTML-in-JS confuses beginners)
- **Rapid changes** → tutorials/docs go stale (class → hooks → server components)
- SEO harder with pure CSR (needs SSR/prerender)
- No built-in two-way binding (more boilerplate for forms vs Angular/Vue)

**Terms to mention in exam:** Virtual DOM, reusability, one-way data flow, declarative, ecosystem, JSX curve, CSR/SEO.

### 4. React 19 features (quick list)

- **Actions** + `useActionState` — async form submit state (pending/success/error)
- **`use()` API** — read promises/contexts in render
- **Server Components** stable path (RSC) — components run on server, ship zero JS
- **`ref` as regular prop** — no more `forwardRef` boilerplate
- **Document metadata** — render `<title>`, `<meta>` from components
- Improved error reporting, `useOptimistic`, `useFormStatus`
- **Compiler** (React Compiler) — auto-memoization, less `useMemo`/`useCallback`

**Directives `use client` / `use server`:** these are **Next.js/React Server Components** directives, not plain React. `"use client"` marks boundary = run in browser; `"use server"` = server functions. Mention only if asked about RSC/Next.

**Terms to mention in exam:** Actions, `use()`, Server Components, ref as prop, React Compiler.

Docs: https://react.dev/blog

---

## B. Virtual DOM, Reconciliation, Diffing, Fiber

### 1. Actual DOM vs Virtual DOM

**Simple words:** Real DOM = what the browser actually paints (slow to touch). Virtual DOM = a lightweight **JS copy** of the UI that React edits first, then applies the minimum real changes.

| | Actual DOM | Virtual DOM |
|---|---|---|
| What | Real browser objects (`document`, nodes) | Plain JS objects describing the tree |
| Speed of update | **Slow** (layout/paint/reflow cascade) | **Fast** — just objects in memory |
| Direct access | `document.getElementById` | React only via render/state |
| Who uses it | Browser | React (diffs it, then commits) |

**Why real DOM is slow:** one change → recalc layout → repaint. React avoids this by batching minimal updates.

**Terms to mention in exam:** actual DOM, virtual DOM, JS representation, performance, reflow/reflow avoidance.

### 2. Reconciliation

**Simple words:** React's algorithm that compares the **new** virtual DOM with the previous one and figures out the smallest real-DOM changes to apply.

**Official definition:** **Reconciliation** is the process React uses to **diff two trees of elements** (old render vs new render) and **commit** only the differences to the actual DOM. Powered by the **diffing algorithm** + **key** prop for lists.

```
state change → render (new vDOM) → DIFF old vs new vDOM → PATCH real DOM
                                    ↑ reconciliation        ↑ commit
```

**Terms to mention in exam:** reconciliation, diffing, virtual DOM, commit, minimal DOM updates.

Docs: https://react.dev/reference/react/StrictMode (concept) · https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-fast-refresh

### 3. Diffing (diff algorithm)

**Rules of the diff (memorize):**
1. **Different element type** (div → span) → tear down whole subtree, rebuild.
2. **Same type** → update only changed **attributes** in place.
3. **Lists:** match children by **`key`** — same key = same item (update), missing key = index-based guess → bugs when reordering.

**Why O(n) not O(n³):** React assumes UIs rarely move across deep tree positions — heuristic, not perfect diff. Keys make list diff reliable.

**How to explain:** "Diffing compares old and new virtual DOM trees by type and keys; React then applies only the minimal patches to the real DOM."

**Terms to mention in exam:** diffing algorithm, element types, keys, heuristic, patch.

Docs: https://react.dev/reference/rules/keeping-components-pure (list rendering) — official deep dive: https://github.com/facebook/react/blob/main/packages/react-reconciler/README.md

### 4. React Fiber

**Simple words:** Fiber is the **engine rewrite** (React 16+) that lets React **pause and resume** rendering work — so heavy updates don't freeze the browser.

**Official definition:** **Fiber** is React's reconciler architecture: the work is split into units ("fibers") that can be **interrupted, prioritized, and paused**. Enables **concurrent features** (transitions, Suspense, time slicing).

- Pre-Fiber: recursion — one big synchronous render = jank on big trees
- Fiber: linked-list tree, scheduler picks work units, can yield to browser input
- Namesake: work can be "paused, abandoned, restarted" like a fiber being woven

**Terms to mention in exam:** Fiber, reconciler, interruptible work, priority, concurrent rendering, React 16.

Docs: https://github.com/facebook/react/blob/main/packages/react-reconciler/README.md

### 5. How React updates the actual DOM (phases of state update)

Three phases (checklist: "triggering, rendering, committing"):

| Phase | What happens |
|---|---|
| **1. Triggering** | `setState` / parent render → React marks component (and children) dirty |
| **2. Rendering** | React **calls component functions** → builds new virtual DOM (pure — no real DOM touch yet) |
| **3. Committing** | Reconciliation diffs old/new vDOM → React **applies minimal patches** to real DOM + runs layout effects |

**Terms to mention in exam:** triggering, rendering, committing, batch, reconciliation, passive effects.

Docs: https://react.dev/learn/render-and-commit

---

## C. SPA, CSR vs SSR

### 1. Single Page Application (SPA)

**Simple words:** One HTML page loads; JS swaps views. No full page reloads on navigation.

**Official definition:** An **SPA** loads a **single HTML document** and dynamically updates the view via JavaScript **without full page reloads**.

**EJS bridge:** EJS = multi-page; every nav = server renders new full HTML. SPA = one shell, React swaps components.

**Pros and cons of SPA:**

| Pros | Cons |
|---|---|
| Fast interactions after load (no reload) | **Slower initial load** (must download JS bundle) |
| Feels like a native app | **SEO harder** (empty `#root` until JS runs) |
| Reduced server load (client renders) | More client CPU/memory |
| Great UX (transitions, state kept: scroll, counter) | Needs careful code splitting |

**Terms to mention in exam:** SPA, no full page reload, initial load, SEO tradeoff, client-side routing.

### 2. CSR vs SSR + SEO + initial load

| | CSR | SSR |
|---|---|---|
| Who renders | **Browser** (React after JS loads) | **Server** sends finished HTML |
| Initial load | Slower — blank shell → download JS → render | **Faster first paint** — HTML ready |
| SEO | Crawlers get empty page (modern Google can JS-render, but risky) | ✅ full HTML in first response |
| Interactivity after load | Full | Needs **hydration** (JS attaches to server HTML) |
| EJS | — | EJS is SSR |

**Impacts of CSR on SEO:** first response may be `<div id="root"></div>` only → older crawlers/social scrapers see nothing → poor rankings/share previews. Fixes: SSR (Next.js), prerendering, SSG, dynamic rendering.

**Initial load time difference:** CSR = network + **download/parse/execute JS** + render before content visible. SSR = HTML bytes already meaningful → paint sooner; then hydration for interactivity (so SSR wins first paint, CSR still pays JS cost later).

**Terms to mention in exam:** CSR vs SSR, first paint, hydration, SEO, crawlers, Next.js.

### 3. How SPA loads dynamic data

SPA fetches data **after** mount via JS (`fetch`/`axios`) → `setState` → re-render. So the shell loads first, then content streams in (`useEffect` + fetch pattern in Topic 3).

**Terms to mention in exam:** client-side fetch, `useEffect`, JSON APIs, setState re-render.

### 4. Shadow DOM vs Virtual DOM

| | Virtual DOM | Shadow DOM |
|---|---|---|
| Belongs to | **React** (concept) | **Browser platform** |
| Purpose | Diff UI changes cheaply | **Encapsulate** a component's internal DOM/styles (browser native) |
| Scope | App-wide render tree | Hidden subtree under a host element (`<video>`, web components) |
| Used by | React, Vue, Preact | Web Components, native elements |

**How to explain:** "Virtual DOM is React's performance tool; Shadow DOM is a browser feature for style/markup isolation. Different problems, same word 'DOM' in the name."

**Terms to mention in exam:** shadow DOM, encapsulation, web components, virtual DOM = React diff copy.

---

## D. JSX deep-dive

### 1. JSX vs JS / is JSX mandatory?

**JSX:** syntax sugar → compiles to `React.createElement(...)` calls.

**Is JSX mandatory?** **No.** You can build React apps with plain JS function calls — but it's unreadable for real UIs. JSX is near-universal convention; "optional but strongly preferred."

```jsx
// without JSX
return React.createElement("h1", { className: "t" }, "Hi");
// with JSX
return <h1 className="t">Hi</h1>;
```

**Terms to mention in exam:** JSX optional, syntactic sugar, createElement, readability.

### 2. JSX vs HTML (key differences) + empty tags

| | HTML | JSX |
|---|---|---|
| Where | `.html` files, browser parses natively | Inside JS, **compiled by Babel/esbuild** |
| `class` | `class="x"` | **`className="x"`** (class = reserved JS keyword) |
| `for` | `for="id"` | **`htmlFor="id"`** |
| style | `style="color: red"` string | `style={{ color: "red" }}` **object**, camelCase keys |
| Self-closing | optional for void tags | **Every tag must close** (`<img />`, `<br />`, `<input />`) |
| Empty/void tags | `<br>`, `<img>` allowed unclosed | Must be `<br />`, `<img ... />` — XML-style |
| Dynamic values | `{{ }}` server templates / none | `{expression}` |
| Comments | `<!-- -->` | `{/* */}` inside JSX, `//` outside |
| Attributes | `tabindex`, `data-*` ok | camelCase: `tabIndex`, `onlick`→`onClick` |

**Why `class` → `className`?** JSX compiles attributes to object properties / React props — `class` is a reserved word in JavaScript (and React historically mapped to `className` DOM API, like `el.className`). Same reason: `for` → `htmlFor` (`label.htmlFor` DOM property).

**Terms to mention in exam:** className, htmlFor, camelCase attributes, self-closing tags, expressions in braces.

### 3. Rules of JSX (complete list)

1. One **root element** (or fragment `<> </>`)
2. Close **every** tag, incl. void (`<img />`)
3. `className` / `htmlFor` / camelCase events & styles
4. `{ }` for **expressions only** (no `if`/`for` statements)
5. Lists need stable **`key`**
6. Comments → `{/* */}`
7. `style` takes an object: `style={{ color: "red" }}`

**Terms to mention in exam:** single root, expressions not statements, keys, camelCase.

Docs: https://react.dev/learn/writing-markup-with-jsx

### 4. `createElement` vs `cloneElement`

```js
React.createElement(type, props, ...children);  // CREATE a new element (what JSX compiles to)
React.cloneElement(element, config, ...children); // CLONE + merge new props onto existing
```

- **createElement:** build element from scratch — type + props + children.
- **cloneElement:** take an existing element (often received via **render props / children**) and inject/override props — used to wrap children (e.g. inject `onClick` into every child).

```jsx
// inject props into a passed child
const childWithClick = React.cloneElement(children, { onClick: handleClick });
```

**Terms to mention in exam:** createElement = construct, cloneElement = copy with merged props, element immutability.

### 5. Why components return a "single parent"

JSX compiles to a **function call returning one value** — a JS function can `return` only one expression. Fix: wrap in one div or `<>...</>`.

```jsx
// ❌ two roots
return <h1>Hi</h1><p>Bye</p>;
// ✅
return (<><h1>Hi</h1><p>Bye</p></>);
```

**Terms to mention in exam:** single return value, wrapper element, fragment.

---

## E. Events deep-dive

### 1. Synthetic events + advantages + pooling

**Official definition:** React wraps native browser events in a **SyntheticEvent** — a cross-browser wrapper with a consistent API (`e.preventDefault`, `e.stopPropagation` work the same everywhere).

**Advantages of synthetic events:**
1. **Cross-browser consistency** (IE vs Chrome event quirks handled once)
2. **Event delegation at root** — one listener on the root container, not thousands on each node → memory/perf win
3. **Standard interface** — same props (`onClick`, `onChange`) regardless of browser
4. Batching & consistent behavior with React's render model

**Event pooling (historical):** pre-React 17, SyntheticEvents were **pooled** — properties zeroed after the event handler returned; accessing `e.target` async needed `e.persist()`. **React 17+ removed pooling** — events are safe to access in promises/setTimeout. Exam answer: "was memory optimization; no longer needed since React 17."

**Examples of synthetic events:** `onClick`, `onChange`, `onSubmit`, `onKeyDown`, `onMouseEnter`, `onTouchStart`, `onFocus` — all camelCase SyntheticEvent wrappers.

**Terms to mention in exam:** SyntheticEvent, cross-browser, event delegation, pooling (removed in React 17), `persist()`.

Docs: https://react.dev/reference/react-dom/components/common#event-handler-propagation

### 2. Event handlers + `e.preventDefault`

```jsx
function handleClick(e) { ... }        // onClick={handleClick}     — name convention: handleX
function handleChange(e) {             // onChange — controlled input
  setText(e.target.value);
}
function handleSubmit(e) {
  e.preventDefault();                  // stop form's default page reload
}
```

- Handler naming convention: `handleClick`, `handleChange`, `handleSubmit`.
- **Pointer events:** unified mouse/touch (`onPointerDown`, `onPointerUp`, `onPointerMove`) — one API for mouse, touch, pen. Prefer over separate mouse/touch handlers.
- Pass **function ref** (`onClick={fn}`), never `onClick={fn()}` (runs on render).

**Terms to mention in exam:** event handler, `preventDefault`, `e.target.value`, pointer events, camelCase.

### 3. One-way data binding / parent↔child

**One-way data binding:** data flows **down** (parent → child via props); changes flow **up** (child calls prop function → parent updates state → new props flow down). EJS templates also one-way; frameworks like Angular/Vue offer two-way (`v-model`).

**Parent → child:** props (always).
**Child → parent:** pass a **callback prop**; child invokes it.

```jsx
function Parent() {
  const [count, setCount] = useState(0);
  return <Child onIncrement={() => setCount(count + 1)} count={count} />;
}
function Child({ count, onIncrement }) {
  return <button onClick={onIncrement}>{count}</button>;
}
```

**Terms to mention in exam:** one-way data flow, props down, callbacks up, unidirectional.

Docs: https://react.dev/learn/sharing-state-between-components

---

## F. Rendering topics

### 1. Conditional rendering

```jsx
{isLoggedIn ? <Logout /> : <Login />}
{todos.length > 0 && <List todos={todos} />}   // && = show if truthy
{loading && <Spinner />}                        // short-circuit
// early return (guard clause):
if (error) return <p>Error</p>;
```

No `v-if` — just JS expressions in `{ }`.

**Terms to mention in exam:** conditional rendering, ternary, `&&` short-circuit, guard clause.

### 2. Dynamic rendering

Rendering driven by **state/props data** — same component code, different output for different data (`todos.map`, user roles, theme). = React's core: **UI = f(state)**.

### 3. Incremental rendering / types of rendering (quick)

- **Client render (CSR):** browser JS builds UI — default React.
- **Server render (SSR):** HTML from server first, hydrate later.
- **Static generation (SSG):** HTML at build time.
- **Incremental rendering:** streaming HTML progressively / Suspense letting parts of UI render when ready (`<Suspense fallback>`), not all-or-nothing.

### 4. Key prop + why not array index

```jsx
{todos.map((t) => <li key={t.id}>{t.text}</li>)}
```

- Key = **stable identity** for reconciliation across list changes.
- **Why index as key fails:** insert at top → all items shift index → React thinks every item changed (wrong DOM reuse), breaks component state tied to position (checkbox states shift!), causes full re-render + input focus loss.
- Keys needed when: list reorders/filters/inserts. Static list without edits: index "works" but is still discouraged.

**Keys in diffing:** diff matches old children to new children **by key** — same key = same fiber updated; new key = mount; missing key = unmount.

**Terms to mention in exam:** key prop, stable identity, reconciliation, index key pitfalls, reorder.

### 5. Re-rendering components — what triggers

1. `setState` in that component
2. Parent re-renders → children re-render (prop change or not)
3. Context value change → consumers re-render

Avoid: rendering in loops, deriving render output from mutable vars without state.

### 6. Shallow rendering / forceUpdate (viva quickies)

- **Shallow rendering:** rendering a component **one level deep** — child components as stubs, not rendered (React Test Renderer / Enzyme legacy). Tests component logic in isolation.
- **forceUpdate:** legacy `this.forceUpdate()` re-renders class component **bypassing shouldComponentUpdate**. Modern answer: "we use state to trigger renders; forceUpdate is an anti-pattern."

---

## G. Core four (from original notes)

### 1. Functional components

PascalCase function returning JSX; compose like EJS partials; functional + hooks replaced class components.

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

**Terms to mention in exam:** functional component, reusable, PascalCase, composition, props.

### 2. Render & re-render

Render = call component fn + build vDOM. Re-render = again due to state/parent update. Then reconcile → commit minimal patches.

**Terms to mention in exam:** render, re-render, reconciliation, state change.

### 3. Props vs State

| | Props | State |
|---|---|---|
| Owned by | Parent | Component itself |
| Mutable? | ❌ read-only | ✅ via setter only |
| Analogy | function arguments | local memory |

See `05-state-props.md` for full pendings (immutability, drilling, lifting...).

**Terms to mention in exam:** props, state, one-way data flow, setter, immutability.

### 4. Lifecycle (functional mapping)

| Phase | Hook |
|---|---|
| Mount | `useEffect(fn, [])` |
| Update | `useEffect(fn, [dep])` |
| Unmount | cleanup `return () => {}` |

Class names for viva: `componentDidMount` / `componentDidUpdate` / `componentWillUnmount` → see `06-components-patterns.md`.

**Terms to mention in exam:** lifecycle, mount/update/unmount, useEffect, cleanup.

Docs: https://react.dev/learn/lifecycle-of-reactive-effects

---

## Quick recap

1. React = **library** (Meta, component UI, VDOM) — vs framework = full control.
2. vDOM → **reconcile/diff** (types + keys) → commit minimal patches; **Fiber** makes work interruptible.
3. **SPA/CSR**: no reloads, fast after load; weaker first paint/SEO vs **SSR** (hydration).
4. **JSX**: sugar for `createElement`; `className`/`htmlFor`, single root, braces = expressions, close all tags.
5. **Synthetic events**: cross-browser, delegated at root; pooling gone since React 17.
6. Rendering = `UI = f(state)`; keys ≠ indexes; re-render on state/parent/context change.

**Ready for the quiz?** Say yes — all questions in one batch.
