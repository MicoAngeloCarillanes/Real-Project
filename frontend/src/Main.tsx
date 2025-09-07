import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@assets/css/index.css';
import App from 'App';
import { normalizePath } from '@utils/PathNormalizer';

const rootEl = document.getElementById('root');
const normalizedPath = normalizePath(window.location.pathname);

if (window.location.pathname !== normalizedPath) {
    window.history.replaceState(null, '', normalizedPath);
}

if (!rootEl) {
    throw new Error('Root element not found');
}

createRoot(rootEl)
    .render(
        <StrictMode>
            <App />
        </StrictMode>
    );