import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Anime from './pages/AnimeList';
import Main from './pages/MainPage';
import TitlePage from './components/page/title-page/TitlePage';

const App = () => {
    return (
        <Routes>
            <Route path="anime-list" element={<Anime/>}/>
            <Route path="/" element={<Main/>}/>
            <Route path="anime" element={<TitlePage  title={'Anime'}/>}/>
            <Route path="manga" element={<TitlePage  title={'Manga'}/>}/>
            <Route path="*" element={'asdasdasd'}/>
        </Routes>
    );
};

export default App;