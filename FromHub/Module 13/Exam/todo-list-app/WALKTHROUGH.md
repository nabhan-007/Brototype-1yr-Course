# Todo App — Full Walkthrough & Rebuild Guide

> **Reference (the finished app):** `Module 13\Exam\todo-list-app`
> **Goal:** after reading this, rebuild the whole app from an empty folder on your own.
> **How to use:** read a part → build the matching stage from Part 10 → browser check.

---

## Part 1 — Big picture

The app: add ✏️ edit ❌ delete ✅ complete, deadline per task, overdue toasts, filters, survives refresh (localStorage).

```
App  (owns ALL the data)
 ├── state: todos, text, error, filter, toast...
 ├── functions: addTodo, toggleTodo, deleteTodo, saveEdit
 │
 └── renders the page:
      ├── form (add new todo)
      ├── stats + filter buttons
      └── <ul> of rows  →  each row is a <TodoItem />
```

**One-way data flow (exam term):**
- **Data flows DOWN** — App passes `todo`, `error`, `editingId` as props.
- **Actions flow UP** — TodoItem calls prop functions (`onToggle(id)`, `onDelete(id)`) → App changes state → React re-renders → fresh props down.

**Why split into 2 components?** Each row has its own behavior and local editing state; one giant component would be unreadable. Presentation stays local, authority stays central.

---

## Part 2 — Every variable

State = anything that changes on screen. `useState` gives `[value, setValue]`.

| # | Variable | Contains | Why it exists |
|---|---|---|---|
| 1 | `todos` | array of `{ id, text, done, deadline }` | the master list; starts from localStorage or `[]` |
| 2 | `text` | string | what's typed in the add box |
| 3 | `deadline` | `"YYYY-MM-DD"` or `""` | the add form's date |
| 4 | `error` | `""` or a message | red validation line |
| 5 | `editingId` | id number or `null` | who is being edited right now |
| 6 | `filter` | `"all" / "active" / "done"` | which filter button is active |
| 7 | `toast` | `null` or string | bottom message ("Todo added") |
| 8 | `dismissed` | array of ids | overdue toasts the user closed with × |
| 9 | `timerRef` | timeout id (**useRef!**) | cancel the old toast countdown on a new toast |
| 10 | `inputRef` | a DOM pointer (**useRef!**) | points at the add-task input box → focuses it on page load |

**TodoItem's 2 locals:** `draft` (edited text) and `draftDeadline` (edited date) — temporary working copies while editing. Cancel restores originals; Save sends them up.

- `useRef` = a box that survives re-renders **without** triggering redraws. Used two ways here: **`timerRef`** stores a timeout id; **`inputRef`** points at a real DOM element.
- **Rule:** anything that changes on screen = state. State changes → redraw.

---

## Part 3 — The useEffect hooks

**Auto-save to localStorage:**
```jsx
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
```
- Deps `[todos]` = re-run whenever todos changes.
- localStorage stores strings only → `JSON.stringify`. Loading back = `JSON.parse` in the state initializer (once):
```jsx
const [todos, setTodos] = useState(() => {
  try { return JSON.parse(localStorage.getItem("todos")) || []; }
  catch { return []; }
});
```

**Toast cleanup:**
```jsx
useEffect(() => () => clearTimeout(timerRef.current), []);
```
- Second arrow = **cleanup function**, runs at unmount. `[]` = set up once.
- Prevents "setState on unmounted component".

**Autofocus the add box (useRef → DOM):**
```jsx
const inputRef = useRef(null);
useEffect(() => inputRef.current.focus(), []);
// …and on the input itself:  <input ref={inputRef} … />
```
- **useRef pointing at a DOM element** — the classic 3 steps: create the ref → attach it (`ref={inputRef}`) → use `inputRef.current` inside an effect.
- Effect with `[]` runs once after the first render → the DOM input exists by then → the cursor lands in it on page load.
- `.current` is the doorway: `null` before mount, the real element after.

**Cleanup practice (the interval experiment):**
```jsx
useEffect(() => {
  const intervalId = setInterval(() => console.log("..."), 1000);
  return () => clearInterval(intervalId);
}, []);
```
- Logs every second; the returned function cancels it at unmount — same cleanup idea as the toast timer.
- Console-only output — remove before sharing/committing.

**Exam one-liner:** effects run after render; the dependency array decides when they re-run; the returned function is the cleanup.

---

## Part 4 — Date logic

**parseDate — "2026-10-05" → [2026, 9, 5]:**
```jsx
function parseDate(s) {
  const [y, m, d] = s.split("-").map(Number);
  return [y, m - 1, d];   // !! months are 0-based in JS (Jan = 0, Oct = 9)
}
```
- `new Date(...parseDate(s))` = local midnight, exact.
- Don't do `new Date("2026-10-05")` → parsed as UTC → shows 5:30 AM IST → wrong day.

**isOverdue:**
```jsx
function isOverdue(todo) {
  if (!todo.deadline || todo.done) return false;
  return new Date(...parseDate(todo.deadline)) < new Date(new Date().toDateString());
}
```
- No deadline or done → never overdue.
- `new Date(new Date().toDateString())` = **today at midnight**.
- Due TODAY is NOT overdue (equal, not less).

**daysOverdue:**
```jsx
const diff = new Date(new Date().toDateString()) - new Date(y, m, d);
return Math.round(diff / 86400000);   // ms per day; round guards DST shifts
```

---

## Part 5 — The 4 actions

**addTodo(e):**
```jsx
function addTodo(e) {
  e.preventDefault();                                   // stop the reload!
  if (!text.trim()) { setError("Todo cannot be empty"); return; }
  if (todos.some((t) => t.text.toLowerCase() === text.trim().toLowerCase())) {
    setError("Duplicate todo!"); return;
  }
  const newTodo = { id: Date.now(), text: text.trim(), done: false, deadline };
  setTodos([...todos, newTodo]);                        // spread + append (never push)
  setText(""); setDeadline(""); setError("");
  showToast("Todo added");
}
```

**toggleTodo(id):**
```jsx
setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
```

**deleteTodo(id):**
```jsx
const todo = todos.find((t) => t.id === id);
if (!window.confirm(`Delete "${todo.text}"?`)) return;
setTodos(todos.filter((t) => t.id !== id));
```

**saveEdit(id, newText, newDeadline):** same two checks as add (duplicate check must ignore itself: `t.id !== id`), then:
```jsx
setTodos(todos.map((t) => t.id === id ? { ...t, text: newText.trim(), deadline: newDeadline } : t));
setEditingId(null);   // exits edit mode
```

**Cheat line:** Add = spread + append · Toggle = map + flip · Delete = filter out · Update = map + replace · **never mutate state**.

---

## Part 6 — Derived data (not state!)

```jsx
const visible = todos
  .filter((t) => filter === "all" ? true : filter === "done" ? t.done : !t.done)
  .sort((a, b) => {
    if (!a.deadline && !b.deadline) return 0;
    if (!a.deadline) return 1;    // no-deadline items go last
    if (!b.deadline) return -1;
    return a.deadline.localeCompare(b.deadline);   // "YYYY-MM-DD" sorts chronologically as text
  });

const remaining = todos.filter((t) => !t.done).length;
const overdueList = todos.filter(isOverdue).sort((a, b) => a.deadline.localeCompare(b.deadline));
```
- Recomputed on every render. Change `filter` → re-render → updates. **Never store what you can compute.**

---

## Part 7 — App's HTML structure

1. **Form:** `onSubmit={addTodo}`; controlled inputs (`value` + `onChange`); typing clears error.
2. **Error line:** `{error && editingId === null && <p className="error">{error}</p>}`
3. **Stats:** `{remaining} left`, `{todos.length} total`, overdue count only if > 0.
4. **Filters:** `["all","active","done"].map(...)` → buttons; active gets class `"active"`; click → `setFilter(f)`.
5. **List:** `visible.length === 0 ? <p className="empty">…</p> : <ul>{visible.map((t) => <TodoItem key={t.id} todo={{...t, overdue: isOverdue(t), editingId }} … />)}</ul>`
   - Props down: `todo`, `error` (only the editing row: `editingId === t.id ? error : ""`)
   - Callbacks up: `onToggle`, `onDelete`, `onEdit`, `onSave`, `onError`
6. **Toasts:** bottom blue `{toast && …}`; top-right red stack from `overdueList` minus `dismissed`, each with × button (`setDismissed((d) => [...d, t.id])`).

**The 3 JSX decision patterns:**

| Pattern | Meaning | Used for |
|---|---|---|
| `cond && <thing>` | show only if | error, toast, overdue span |
| `cond ? a : b` | either / or | empty message vs list |
| `list.map(...)` | repeat per item | filter buttons, rows, alerts |

---

## Part 8 — TodoItem: two faces

Props: **data down** (`todo`, `error`) · **functions up** (`onToggle`, `onEdit`, `onDelete`, `onSave`, `onError`).

Mode switch: `const isEditing = todo.id === todo.editingId;` → early return.

**Edit mode:** two controlled inputs on `draft`/`draftDeadline`; Save → `onSave(id, draft, draftDeadline)` (App validates + exits); Cancel → restore drafts, clear error, `onEdit(null)`. Error renders inside the row.

**Display mode:** checkbox `checked={todo.done}` + `onChange={() => onToggle(todo.id)}`; text; deadline span only if exists, `overdue` class + " (overdue)" when late; Edit/Delete buttons — **Edit is `hidden={todo.done}`** (no point editing a completed task; the HTML `hidden` attribute makes it invisible but keeps it in the DOM — vs conditional render `{!todo.done && …}` which would remove it entirely). `<li>` class: `todo` + `done` (→ strikethrough).

---

## Part 9 — CSS skim

- `* { box-sizing: border-box; margin: 0; }` — reset.
- `.app { max-width: 760px; margin: 48px auto; }` — centered card.
- **Flexbox for every row:** `.add-form`, `.todo`, `.stats`, `.filters`; `flex: 1` on growable items (text input, row text).
- **JSX adds the class, CSS styles it:** `.done` (strikethrough), `.active` (blue), `.overdue` (red), `.editing`.
- Toasts: `position: fixed` (bottom-right blue, top-right red stack, `z-index: 10`).

---

## Part 10 — Rebuild recipe (empty folder → app)

**Stage 0 — Scaffold:** `npm create vite@latest todo-app -- --template react` → strip template → `npm run dev` shows your heading.

**Stage 1 — Data + display:** todos state with 2 seeds → `.map` to `<li key>` with done class → localStorage save effect + lazy init → reload test.

**Stage 2 — Add:** form + `preventDefault` first → controlled inputs → validations (trim, duplicate lowercase) → `[...todos, newTodo]` → clear + error line → browser test.

**Stage 3 — Toggle + Delete:** checkbox controlled + map-flip · confirm + filter out → test.

**Stage 4 — Edit:** `editingId` → early-return edit branch → drafts → Save (validate, skip self) / Cancel (restore) → error only in editing row.

**Stage 5 — Deadlines + overdue:** `parseDate` (m−1) → `isOverdue` (midnights) → `daysOverdue` (+round) → span/class + stats count + toast stack + dismissed.

**Stage 6 — Toasts:** `toast` state + `showToast` + `timerRef` + cleanup effect → call in all 4 actions.

**Stage 7 — Filters + polish:** `filter` state + 3 buttons + `visible` (filter+sort) + `remaining` + empty message + CSS → final pass on all portal features.

**Stage 8 (your additions — optional polish):** autofocus the add box (useRef: create → attach → `.focus()` in a mount effect); hide Edit on done rows (`hidden={todo.done}`).

**Trap checklist (before every build):**
- `preventDefault` first in submit handlers
- Never mutate state — `[...]`, `map`, `filter` only
- `key={t.id}` on every mapped row
- Controlled inputs need both `value` and `onChange`
- `trim()` + lowercase on comparisons
- Months 0-based; compare midnights, not timestamps
- Deps array `[todos]` on the save effect
- Cleanup returns for timers/interval

---

*Taught 16 Oct 2026 · updated with your additions (autofocus via useRef, `hidden` Edit on done, interval cleanup practice). Grade your build against these 10 parts — any stage done = a working app.*
