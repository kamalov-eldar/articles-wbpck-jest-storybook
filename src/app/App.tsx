import { FC, Suspense } from 'react';
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

    return (
        <div className={`app ${theme}`}>
            <Suspense fallback=''>
                <Navbar />
                dsfsdfsdf
                <div className='content-page'>
                    <Sidebar />
                    dsfsdfsdf
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
