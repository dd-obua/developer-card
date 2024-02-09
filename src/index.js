import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './css/styles.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
