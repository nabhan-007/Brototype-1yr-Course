import { useEffect, useRef, useState } from "react";
import "./App.css";

function TodoItem({ todo, error, onToggle, onEdit, onDelete, onSave, onError }) {
  const [draft, setDraft] = useState(todo.text);
  const [draftDeadline, setDraftDeadline] = useState(todo.deadline);
  const isEditing = todo.id === todo.editingId;

  if (isEditing) {
    return (
      <li className="todo editing">
        <input
          className="edit-input"
          value={draft}
          onChange={(e) => {
            setDraft(e.target.value);
            onError("");
          }}
        />
        <input
          type="date"
          value={draftDeadline}
          onChange={(e) => setDraftDeadline(e.target.value)}
        />
        <button
          onClick={() => {
            setDraft(draft.trim());
            onSave(todo.id, draft, draftDeadline);
          }}
        >
          Save
        </button>
        <button
          onClick={() => {
            setDraft(todo.text);
            setDraftDeadline(todo.deadline);
            onError("");
            onEdit(null);
          }}
        >
          Cancel
        </button>
        {error && <p className="error">{error}</p>}
      </li>
    );
  }

  return (
    <li className={`todo ${todo.done ? "done" : ""}`}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      <span className="text">{todo.text}</span>
      {todo.deadline && (
        <span className={`deadline ${todo.overdue ? "overdue" : ""}`}>
          {todo.deadline}
          {todo.overdue ? " (overdue)" : ""}
        </span>
      )}
      <button onClick={() => onEdit(todo.id)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default function App() {
  const [todos, setTodos] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("todos")) || [];
    } catch {
      return [];
    }
  });
  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState("");
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [toast, setToast] = useState(null);
  const [dismissed, setDismissed] = useState([]);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function showToast(msg) {
    setToast(msg);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setToast(null), 3000);
  }

  function isOverdue(todo) {
    if (!todo.deadline || todo.done) return false;
    return new Date(...parseDate(todo.deadline)) < new Date(new Date().toDateString());
  }

  function parseDate(s) {
    const [y, m, d] = s.split("-").map(Number);
    return [y, m - 1, d];
  }

  function daysOverdue(deadline) {
    const [y, m, d] = parseDate(deadline);
    const diff =
      new Date(new Date().toDateString()) - new Date(y, m, d);
    return Math.round(diff / 86400000);
  }

  function addTodo(e) {
    e.preventDefault();
    if (!text.trim()) {
      setError("Todo cannot be empty");
      return;
    }
    if (todos.some((t) => t.text.toLowerCase() === text.trim().toLowerCase())) {
      setError("Duplicate todo!");
      return;
    }
    const newTodo = { id: Date.now(), text: text.trim(), done: false, deadline };
    setTodos([...todos, newTodo]);
    setText("");
    setDeadline("");
    setError("");
    showToast("Todo added");
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
    setDismissed((d) => d.filter((x) => x !== id));
    showToast("Todo updated");
  }

  function deleteTodo(id) {
    const todo = todos.find((t) => t.id === id);
    if (!window.confirm(`Delete "${todo.text}"?`)) return;
    setTodos(todos.filter((t) => t.id !== id));
    setDismissed((d) => d.filter((x) => x !== id));
    showToast("Todo deleted");
  }

  function saveEdit(id, newText, newDeadline) {
    if (!newText.trim()) {
      setError("Todo cannot be empty");
      return;
    }
    if (
      todos.some(
        (t) =>
          t.id !== id && t.text.toLowerCase() === newText.trim().toLowerCase()
      )
    ) {
      setError("Duplicate todo!");
      return;
    }
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, text: newText.trim(), deadline: newDeadline } : t
      )
    );
    setEditingId(null);
    setError("");
    setDismissed((d) => d.filter((x) => x !== id));
    showToast("Todo updated");
  }

  const visible = todos
    .filter((t) =>
      filter === "all" ? true : filter === "done" ? t.done : !t.done
    )
    .sort((a, b) => {
      if (!a.deadline && !b.deadline) return 0;
      if (!a.deadline) return 1;
      if (!b.deadline) return -1;
      return a.deadline.localeCompare(b.deadline);
    });
  const remaining = todos.filter((t) => !t.done).length;
  const overdueList = todos
    .filter(isOverdue)
    .sort((a, b) => a.deadline.localeCompare(b.deadline));

  return (
    <main className="app">
      <h1>Todo List</h1>

      <form onSubmit={addTodo} className="add-form">
        <input
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (error) setError("");
          }}
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {error && editingId === null && <p className="error">{error}</p>}

      <div className="stats">
        <span>{remaining} left</span>
        <span>{todos.length} total</span>
        {overdueList.length > 0 && (
          <span className="overdue">{overdueList.length} overdue</span>
        )}
      </div>

      <div className="filters">
        {["all", "active", "done"].map((f) => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="empty">
          {todos.length === 0
            ? "No todos yet — add one above."
            : `No ${filter} todos.`}
        </p>
      ) : (
        <ul className="list">
          {visible.map((t) => (
            <TodoItem
              key={t.id}
              todo={{ ...t, overdue: isOverdue(t), editingId }}
              error={editingId === t.id ? error : ""}
              onError={setError}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={(id) => {
                setError("");
                setEditingId(id);
              }}
              onSave={saveEdit}
            />
          ))}
        </ul>
      )}

      {toast && <div className="toast">{toast}</div>}

      <div className="overdue-stack">
        {overdueList
          .filter((t) => !dismissed.includes(t.id))
          .map((t) => (
            <div key={t.id} className="toast overdue-toast" role="alert">
              <div className="toast-body">
                <strong>Overdue · {daysOverdue(t.deadline)}d</strong>
                <span>{t.text}</span>
              </div>
              <button
                className="toast-x"
                aria-label={`Dismiss ${t.text}`}
                onClick={() => setDismissed((d) => [...d, t.id])}
              >
                ×
              </button>
            </div>
          ))}
      </div>
    </main>
  );
}
