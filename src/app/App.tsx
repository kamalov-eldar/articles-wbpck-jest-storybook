import React, { FC, Suspense, useState } from 'react';
import './styles/index.scss';

import { Link, Route, Routes } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

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
            <Suspense fallback={<div>Загрузка....</div>}>
                <Routes>
                    <Route path='/' element={<MainPage />}></Route>
                    <Route path='/about' element={<AboutPage />}></Route>
                    {/*    <Counter /> */}
                </Routes>
            </Suspense>
        </div>
    );
};
export default App;
