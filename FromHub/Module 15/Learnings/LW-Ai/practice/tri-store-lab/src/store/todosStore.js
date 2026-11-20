// ZUSTAND — the whole store: state + the functions that change it, in ONE object.
// No Provider, no actions, no reducers, no dispatch. The hook itself subscribes.
import { create } from 'zustand';

export const useTodos = create((set) => ({
  todos: [], // state

  // an "action" is just a function that calls set()
  add: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: crypto.randomUUID(), text, done: false }],
    })),

  toggle: (id) =>
    set((state) => ({
      todos: state.todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    })),

  remove: (id) =>
    set((state) => ({ todos: state.todos.filter((t) => t.id !== id) })),
}));
