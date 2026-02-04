import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './PWA.css'
import './App.css'
import App from './App.jsx'

// 1. Blokada menu kontekstowego i zaznaczania
document.addEventListener('contextmenu', (e) => e.preventDefault(), false);
document.addEventListener('selectstart', (e) => e.preventDefault(), false);

// 2. Blokada gestów wielodotykowych (pinch-to-zoom)
document.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) e.preventDefault();
}, { passive: false });

// 3. Blokada gestu przybliżania (iOS specific)
document.addEventListener('gesturestart', (e) => e.preventDefault());

// 4. Blokada double-tap to zoom
let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) e.preventDefault();
    lastTouchEnd = now;
}, false);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)