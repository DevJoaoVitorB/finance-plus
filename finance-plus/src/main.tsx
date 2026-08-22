import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { SimulationProvider } from '@/context/simulation/SimulationContext.tsx';
import { ThemeProvider } from '@/context/theme/ThemeContext.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <SimulationProvider>
                <App />
            </SimulationProvider>
        </ThemeProvider>
    </StrictMode>,
);
