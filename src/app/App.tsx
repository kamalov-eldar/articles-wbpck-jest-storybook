import { FC, Suspense, useEffect } from 'react';
import './styles/index.scss';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

const App: FC = () => {
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        // throw new Error('');
    }, []);

    return (
        <div className={`app ${theme}`}>
            <Suspense fallback="">
                <Navbar />

                <div className="content-page">
                    <Sidebar />

                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
