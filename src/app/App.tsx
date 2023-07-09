import React, { FC, Suspense, useState } from 'react';
import './styles/index.scss';

import { Link, Route, Routes } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { AppRouter } from './providers/router';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

const App: FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>TOGGLE</button>

            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О Сайте</Link>
            <AppRouter></AppRouter>
        </div>
    );
};
export default App;
