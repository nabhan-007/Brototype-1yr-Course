// REGISTER — same RHF pattern as Login. Backend hashes the password in its pre-save hook.
// Validation (pending 3): name has no digits, valid email, password length, confirm must match.
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { register as registerUser } from '../slices/authSlice';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((s) => s.auth.loading);
  const error = useSelector((s) => s.auth.error);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const token = useSelector((s) => s.auth.token); // logged-in users never see auth pages (M14 pendings)

  if (token) return <Navigate to="/" replace />;

  const onSubmit = async (values) => {
    try {
      const { confirm, ...payload } = values; // confirm exists only for the browser check
      await dispatch(registerUser(payload)).unwrap();
      // Carry the email over so Login is prefilled — "go log in" shouldn't mean "type it again"
      navigate('/login', { state: { email: values.email } }); // success → go log in
    } catch (err) {
      // error already in Redux store
    }
  };

  return (
    <div className="auth-card">
      <Helmet>
        <title>Register — OLX Clone</title>
        <meta name="description" content="Create an OLX Clone account to buy and sell locally." />
      </Helmet>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <input placeholder="Name" {...register('name', {
          required: 'Name is required',
          minLength: { value: 2, message: 'Min 2 characters' },
          pattern: { value: /^[A-Za-z\s.'-]+$/, message: 'Letters only — no numbers or symbols' },
        })} />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <input type="email" placeholder="Email"
          {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' } })} />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input type="password" placeholder="Password (min 6 chars)"
          {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Min 6 characters' } })} />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <input type="password" placeholder="Confirm password"
          {...register('confirm', {
            required: 'Confirm your password',
            validate: (v) => v === watch('password') || 'Passwords do not match',
          })} />
        {errors.confirm && <p className="error">{errors.confirm.message}</p>}

        {error && <p className="error">{error}</p>}
        <button className="btn" disabled={loading}>{loading ? 'Creating…' : 'Register'}</button>
      </form>
      <p className="hint">Already registered? <Link to="/login">Log in</Link></p>
    </div>
  );
}
