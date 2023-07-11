import React, { FC, Suspense, useState } from 'react';
import './styles/index.scss';

import { Link, Route, Routes } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

const App: FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Navbar />

            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};
export default App;
