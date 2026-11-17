// LOGIN — React Hook Form. Pattern to learn: register() wires an input, handleSubmit
// checks validation, formState.errors holds messages, data goes to the login thunk.
// Mirror guard: already logged in → you never see this page again (M14 pendings item, done in code).
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate, Navigate, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { login } from '../slices/authSlice';

export default function Login() {
  const token = useSelector((s) => s.auth.token);
  const loading = useSelector((s) => s.auth.loading);
  const error = useSelector((s) => s.auth.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation(); // email handed over by Register (decline typing it twice)

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: { email: state?.email || '' },
  });

  if (token) return <Navigate to="/" replace />;

  const onSubmit = async (values) => {
    try {
      await dispatch(login(values)).unwrap(); // unwrap = the thunk's promise (resolves on OK, throws the error message)
      navigate('/'); // authSlice.fulfilled already stored token + user
    } catch (err) {
      // loading/error already in Redux — nothing extra to do here
    }
  };

  return (
    <div className="auth-card">
      <Helmet>
        <title>Log in — OLX Clone</title>
        <meta name="description" content="Log in to buy and sell locally on OLX Clone." />
      </Helmet>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <input type="email" placeholder="Email"
          {...register('email', { required: 'Email is required' })} />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input type="password" placeholder="Password"
          {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Min 6 characters' } })} />
        {errors.password && <p className="error">{errors.password.message}</p>}

        {error && <p className="error">{error}</p>}
        <button className="btn" disabled={isSubmitting || loading}>
          {loading ? 'Logging in…' : 'Login'}
        </button>
      </form>
      <p className="hint">New here? <Link to="/register">Register</Link> first — creates your account, then you log in.</p>
    </div>
  );
}
