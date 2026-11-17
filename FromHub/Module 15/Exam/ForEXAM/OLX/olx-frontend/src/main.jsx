// Entry point: StrictMode (portal topic 3B) + ErrorBoundary (3A) + Provider (store) + Router + Helmet.
// StrictMode = development-only React checks: in dev it double-renders/mounts components to surface
// unsafe side effects. It slows nothing in production builds and catches bugs early.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import store from './store';
import ErrorBoundary from './components/ErrorBoundary';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </Provider>
    </ErrorBoundary>
  </StrictMode>
);
