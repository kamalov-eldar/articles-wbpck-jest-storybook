import ReactDOM, { render } from 'react-dom';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';
import './shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);
