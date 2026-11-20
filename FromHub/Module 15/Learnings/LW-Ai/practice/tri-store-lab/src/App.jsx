// The bridge: Zustand owns the truth, MobX owns a derived view of it.
// useEffect mirrors the todo counts into the MobX store — one explicit line,
// so nothing is "magic" when you explain it.
import { useEffect } from 'react';
import { useTodos } from './store/todosStore';
import { statsStore } from './store/statsStore';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import StatsPanel from './components/StatsPanel';

export default function App() {
  const todos = useTodos((s) => s.todos);

  useEffect(() => {
    statsStore.sync(todos.length, todos.filter((t) => t.done).length);
  }, [todos]);

  return (
    <div className="app">
      <h1>Tri-Store Lab</h1>
      <p className="muted">
        One app, three libraries: <b>RHF</b> for the form, <b>Zustand</b> for the list,{' '}
        <b>MobX</b> for derived stats.
      </p>

      <section>
        <h2>1 · React Hook Form</h2>
        <TodoForm />
      </section>

      <section>
        <h2>2 · Zustand (source of truth)</h2>
        <TodoList />
      </section>

      <section>
        <h2>3 · MobX (observable + computed + reaction)</h2>
        <StatsPanel />
      </section>
    </div>
  );
}
