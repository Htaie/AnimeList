import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Anime from './pages/AnimeList';
import Main from './pages/MainPage';

const App = () => {
    return (
        <Routes>
            <Route path="anime-list" element={<Anime/>}/>
            <Route path="/" element={<Main/>}/>
        </Routes>
    );
};

export default App;