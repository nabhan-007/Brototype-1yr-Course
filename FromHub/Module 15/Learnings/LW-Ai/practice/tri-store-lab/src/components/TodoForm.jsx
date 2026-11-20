// RHF — the library name IS the destructuring: Register, HandleSubmit, FormState.
import { useForm } from 'react-hook-form';
import { useTodos } from '../store/todosStore';

export default function TodoForm() {
  const add = useTodos((s) => s.add); // reading a Zustand action — no dispatch
  const {
    register, // R
    handleSubmit, // H
    formState: { errors }, // F
    reset,
  } = useForm();

  // only runs AFTER validation passes; `data` = { text: '...' }
  const onSubmit = ({ text }) => {
    add(text.trim());
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="What needs doing?"
        {...register('text', {
          required: 'Task text is required', // simple rule → a string
          minLength: { value: 3, message: 'At least 3 characters' }, // sized rule → { value, message }
        })}
      />
      <button className="btn" type="submit">
        Add
      </button>
      {errors.text && <p className="error">{errors.text.message}</p>}
    </form>
  );
}
