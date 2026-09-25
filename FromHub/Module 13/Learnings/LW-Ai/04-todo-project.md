# Topic 4 — Project: To-Do List (+ practicals from seniors)

> Priority: 🔴 High — this IS the project exam; examiner will ask you to explain your own code
> Required features: **add / update / delete / display** · **mark complete** · **deadlines** · **overdue toast notifications**
> Seniors' practical workouts are baked in as sub-sections.

---

## Architecture

```
App.jsx
├── state: todos[]          ← useState — the whole DB lives here
├── state: toast            ← useState — current toast (or null)
├── effect: overdue check   ← useEffect — scans todos on change
├── effect: toast auto-hide ← useEffect + setTimeout + cleanup
├── handlers: add/update/delete/toggle + showToast
├── inputRef (useRef)       ← focus input after add
└── render: form → toast → todos.map(<TodoItem key />)
```

**Data model:**

```js
{ id: Date.now(), text: "Finish module 13", done: false, deadline: "2026-09-25" }
```

EJS/MongoDB bridge: this array is your "collection". Mongo `insertOne/deleteOne/updateOne` → here: spread-append / filter / map-replace — **in memory only** (refresh loses data; localStorage/backend = fix, not required).

---

## 1. Display (map + key)

```jsx
function App() {
  const [todos, setTodos] = useState([]);
  return (
    <ul>
      {todos.map((t) => (
        <li key={t.id} className={t.done ? "done" : ""}>
          {t.text} <small>due {t.deadline}</small>
        </li>
      ))}
    </ul>
  );
}
```

**List ul/li implementation:** `<ul>` wraps `{array.map(...)}`; each map returns an `<li>` with a unique `key`. Like EJS `<% todos.forEach %>` but returns JSX.

**Show fields in an array of objects using map:**

```jsx
const users = [{ name: "Nabhan", role: "dev" }, ...];
users.map((u) => <li key={u.name}>{u.name} — {u.role}</li>);
```

**Display current count of todos:** derived value — no extra state needed:

```jsx
<p>{todos.length} task(s)</p>
<p>{todos.filter((t) => !t.done).length} remaining</p>
```

**Why not `useState` for count?** It duplicates `todos` → can drift. Derive during render = always correct (one source of truth).

---

## 2. Add (controlled input + validation)

```jsx
const [text, setText] = useState("");
const [deadline, setDeadline] = useState("");
const [error, setError] = useState("");

function addTodo(e) {
  e.preventDefault();
  if (!text.trim()) { setError("Task cannot be empty"); return; }  // validation
  if (todos.some((t) => t.text === text.trim())) { setError("Already exists"); return; }
  setError("");
  setTodos([...todos, { id: Date.now(), text: text.trim(), done: false, deadline }]);
  setText(""); setDeadline("");
}
```

**Input validation for todo (senior practical):**
- empty / whitespace-only → block
- optional: max length, duplicate check, deadline not in past (warn)
- show `error` state near input; clear on next keystroke: `onChange={(e) => { setText(e.target.value); setError(""); }}`

**Signup input validation** (same pattern, generalize): required fields, email regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`, password length ≥ 8, match confirm field → `setError` per field or one form error object.

```jsx
<form onSubmit={handleSignup}>
  <input value={email} onChange={(e) => setEmail(e.target.value)} />
  {email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && <p className="err">Invalid email</p>}
  ...
</form>
```

**Create input field and show entered text in h1:**

```jsx
const [text, setText] = useState("");
<input value={text} onChange={(e) => setText(e.target.value)} />
<h1>{text}</h1>
```

(One-way: input → state → render. The classic first React demo.)

**Add two numbers on button click:**

```jsx
const [a, setA] = useState(""); const [b, setB] = useState(""); const [sum, setSum] = useState(null);
<button onClick={() => setSum(Number(a) + Number(b))}>Add</button>
{sum !== null && <h2>Sum = {sum}</h2>}
```

**Check if two inputs match:** `const match = t1 === t2;` → green/red message (registration confirm-password pattern).

**Store credentials in ENV:** React (Vite) exposes only vars prefixed `VITE_`: `VITE_API_URL=...` → `import.meta.env.VITE_API_URL`. Never commit real secrets to client bundles — anything in frontend code is public. (`.env` local-only; `import.meta.env` not `process.env` in Vite.)

**Terms to mention in exam:** controlled component, `preventDefault`, validation, derived state, `import.meta.env`.

---

## 3. Update (edit in place)

```jsx
const [editingId, setEditingId] = useState(null);
const [draft, setDraft] = useState("");

function startEdit(t) { setEditingId(t.id); setDraft(t.text); }
function saveEdit() {
  setTodos(todos.map((t) => t.id === editingId ? { ...t, text: draft.trim() } : t));
  setEditingId(null);
}
```

Core mutation to memorize: `map` + conditional spread-replace. (Alternative: `prompt()` quick edit — acceptable in viva.)

---

## 4. Delete

```jsx
const deleteTodo = (id) => setTodos(todos.filter((t) => t.id !== id));
```

`filter` → **new** array → immutability → re-render.

---

## 5. Mark complete

```jsx
const toggleDone = (id) =>
  setTodos(todos.map((t) => t.id === id ? { ...t, done: !t.done } : t));
// style: textDecoration: t.done ? "line-through" : "none"
```

**Toggle checkbox by button click (parent-child communication):** checkbox is `checked={t.done}` (controlled); click handler in child calls `onToggle(id)` prop → parent updates state → new `done` flows down. Child never mutates the todo itself.

```jsx
<Child done={done} onToggle={() => setDone(!done)} />   // minimal demo
```

---

## 6. Deadlines

```jsx
<input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />

function isOverdue(t) {
  if (t.done || !t.deadline) return false;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return new Date(t.deadline) < today;
}
```

Why zero hours: task due *today* must not be overdue at 3 PM — normalize both dates to midnight.

**Timer using useEffect** (deadline countdown demo):

```jsx
const [left, setLeft] = useState(diff);
useEffect(() => {
  const id = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
  return () => clearInterval(id);
}, []);
```

---

## 7. Overdue toast notifications

```jsx
const [toast, setToast] = useState(null);

// auto-hide with cleanup
useEffect(() => {
  if (!toast) return;
  const t = setTimeout(() => setToast(null), 3000);
  return () => clearTimeout(t);
}, [toast]);

// fire when todos change
useEffect(() => {
  const late = todos.find(isOverdue);
  if (late) setToast(`Overdue: ${late.text}`);
}, [todos]);

{toast && <div className="toast">{toast}</div>}
```

```css
.toast { position: fixed; top: 16px; right: 16px; background: #b91c1c;
         color: #fff; padding: 12px 16px; border-radius: 8px; }
```

Without cleanup: rapid toasts stack timers → old timer hides a new toast early. Third-party option = `react-toastify` (mention only as production alternative).

**Handle errors (Netflix-clone style pattern):**

```jsx
const [error, setError] = useState(null);
fetch(url).then(...)
  .catch((err) => setError(err.message));
// render: {error && <p className="err">Something went wrong: {error}</p>}
// plus finally: setLoading(false)
```

Toast for errors = same toast state, different message: `setToast("Failed to save")`.

**Terms to mention in exam:** toast, auto-dismiss, `setTimeout`, cleanup, derived overdue check, error boundary by state.

---

## 8. Styles + title (practicals)

**Add style to title fields:**

```jsx
<h1 style={{ color: "#7c3aed", fontSize: "2rem", textDecoration: "underline" }}>
  My Todos
</h1>
// or class: <h1 className="title">  + .title { ... } in App.css
```

Rules: object syntax, camelCase keys, double braces (outer JS, inner object).

**Customize tab title / favicon:** `document.title = "My Todo App"` in `useEffect(..., [])`, or plain `<title>` + `<link rel="icon">` in `index.html` (Vite: put favicon in `public/`). (React 19 lets you render `<title>` from components.)

**Viewport:** `<meta name="viewport" content="width=device-width, initial-scale=1.0">` in `index.html` — controls mobile scaling; without it phones render desktop-width pages.

**PNG vs JPG (misc viva):** PNG = lossless, transparency, icons/UI screenshots; JPG = lossless photos, smaller photos, no transparency. WebP = modern both-features option.

---

## Full skeleton

```jsx
import { useState, useEffect, useRef } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState("");
  const [toast, setToast] = useState(null);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    const late = todos.find(isOverdue);
    if (late) setToast(`Overdue: ${late.text}`);
  }, [todos]);

  function addTodo(e) {
    e.preventDefault();
    if (!text.trim()) { setError("Empty task"); return; }
    setError("");
    setTodos([...todos, { id: Date.now(), text: text.trim(), done: false, deadline }]);
    setText(""); setDeadline("");
    inputRef.current?.focus();
  }

  const deleteTodo = (id) => setTodos(todos.filter((t) => t.id !== id));
  const toggleDone = (id) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const startEdit = (t) => { setEditingId(t.id); setDraft(t.text); };
  const saveEdit = () => {
    setTodos(todos.map((t) => (t.id === editingId ? { ...t, text: draft } : t)));
    setEditingId(null);
  };

  return (
    <main>
      <h1 style={{ color: "#7c3aed" }}>Todo ({todos.length})</h1>
      <form onSubmit={addTodo}>
        <input ref={inputRef} value={text}
               onChange={(e) => { setText(e.target.value); setError(""); }} />
        <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        <button>Add</button>
        {error && <p className="err">{error}</p>}
      </form>

      {toast && <div className="toast">{toast}</div>}

      <ul>
        {todos.map((t) => (
          <li key={t.id} style={{ textDecoration: t.done ? "line-through" : "none" }}>
            {editingId === t.id ? (
              <>
                <input value={draft} onChange={(e) => setDraft(e.target.value)} />
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                {t.text} <small>{t.deadline}</small>
                <button onClick={() => toggleDone(t.id)}>{t.done ? "↩" : "✓"}</button>
                <button onClick={() => startEdit(t)}>Edit</button>
                <button onClick={() => deleteTodo(t.id)}>x</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}

function isOverdue(t) {
  if (t.done || !t.deadline) return false;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return new Date(t.deadline) < today;
}

export default App;
```

*(Scaffold: `Learnings\Practice\todo-list-app\` — currently default Vite template; replace `App.jsx` with this as you build.)*

---

## Senior practical checklist (work through these)

| # | Workout | Concept tested |
|---|---|---|
| 1 | Input field → show text in `<h1>` | controlled input, state, render |
| 2 | Counter with `useContext` | context provider/consumer |
| 3 | Fetch users from API in `useEffect` | mount fetch, loading, keys |
| 4 | Add-two-numbers button | state, event handler, parse |
| 5 | Two inputs match? | comparison, conditional render |
| 6 | Timer with `setInterval` + cleanup | useEffect lifecycle |
| 7 | Child input displayed in parent | lift state, callback props |
| 8 | Map array-of-objects fields | dynamic rendering, keys |
| 9 | Style title fields | style object / CSS |
| 10 | Todo input validation | guards, error state |
| 11 | Error UI for API clone | try/catch, error state |
| 12 | Signup validation | form validation, regex |
| 13 | `VITE_` env credentials | import.meta.env |
| 14 | Toggle checkbox parent↔child | one-way flow, callbacks |
| 15 | Todo count display | derived state |
| 16 | ul/li list | map + key |
| 17 | Toast for overdue | effect + timeout + cleanup |

**Feature → concept map (explain-your-project):**

| Feature | Concepts |
|---|---|
| Display list | useState, map, key |
| Add | controlled input, preventDefault, spread, validation |
| Update | map + replace, editingId |
| Delete | filter, immutability |
| Complete | spread toggle, conditional style |
| Deadlines | type=date, Date comparison |
| Toast | useState, useEffect, setTimeout, cleanup |
| Focus after add | useRef |

**Lost on refresh?** State is in-memory only → needs localStorage or backend (same reason Express needed MongoDB).

**Ready for the quiz?** Say yes — all questions in one batch.
