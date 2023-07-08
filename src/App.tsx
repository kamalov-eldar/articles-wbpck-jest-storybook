import React, { FC, Suspense, useState } from 'react';
import Counter from './components/Counter';
import './styles/index.scss';

import { Link, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './context/useTheme';

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
                    <Route path='/' element={<MainPageAsync />}></Route>
                    <Route path='/about' element={<AboutPageAsync />}></Route>
                    {/*    <Counter /> */}
                </Routes>
            </Suspense>
        </div>
    );
};
export default App;
