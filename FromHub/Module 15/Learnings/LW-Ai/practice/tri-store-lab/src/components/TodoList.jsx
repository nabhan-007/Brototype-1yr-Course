// ZUSTAND on the read side: useTodos(selector) subscribes to ONE slice of state.
// The component re-renders only when that selected value changes.
import { useTodos } from '../store/todosStore';

export default function TodoList() {
  const todos = useTodos((s) => s.todos);
  const toggle = useTodos((s) => s.toggle);
  const remove = useTodos((s) => s.remove);

  if (todos.length === 0) {
    return <p className="muted">No tasks yet — add one above.</p>;
  }

  return (
    <ul className="list">
      {todos.map((t) => (
        <li key={t.id} className={t.done ? 'done' : ''}>
          <label>
            <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
            <span>{t.text}</span>
          </label>
          <button className="btn btn-sm" onClick={() => remove(t.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}
