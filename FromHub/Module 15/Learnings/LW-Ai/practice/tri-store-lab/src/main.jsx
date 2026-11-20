// NO PROVIDER ANYWHERE. Zustand's store is a module-level hook and MobX's store is
// a module-level instance — components import them directly, so nothing has to be
// injected through the component tree. Compare: Redux needs <Provider store={store}>.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
