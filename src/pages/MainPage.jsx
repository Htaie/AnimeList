import React from 'react';
import MainPage from '../components/main-page/MainPage';

const Main = () => {
    return (
        <div>
            <MainPage title={'Ongoing'}/>
            <MainPage title={'Anime'}/>
            <MainPage title={'Manga'}/>
        </div>
    );
};

export default Main;