import {createRoot, hydrateRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// Hydrate le HTML prerendu au build ; sinon monte une SPA vierge (dev).
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
