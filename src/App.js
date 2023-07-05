import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MangaPage from './pages/MangaPage';
import MainPage from './pages/MainPage'
import AnimePage from './pages/AnimePage';

const App = () => {
    return (
        <Routes>
            <Route path="anime" element={<AnimePage/>}/>
            <Route path="manga" element={<MangaPage/>}/>
            <Route path="main" element={<MainPage />}/>
            <Route path="/" element={<MainPage/>}/>
        </Routes>
    );
};

export default App;