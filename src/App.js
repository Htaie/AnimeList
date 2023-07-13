import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MangaPage from './pages/MangaPage';
import MainPage from './pages/MainPage'
import AnimePage from './pages/AnimePage';
import Header from './components/navigation/header/Header';
import AnimeDescription from './pages/AnimeDescription';

const App = () => {
    return (
        <div>
        <Header/>
        
        <Routes>
            <Route path="anime/*" element={<AnimePage />}/>
            <Route path="anime/:id" element={<AnimeDescription category={'anime'} />}/>
            <Route path="manga" element={<MangaPage/>}/>
            <Route path="manga/:id" element={<AnimeDescription category={'manga'} />}/>
            <Route path="/" element={<MainPage/>}/>
            <Route path="*" element={<div>404</div>} />
        </Routes>
        </div>        

    );
};

export default App;