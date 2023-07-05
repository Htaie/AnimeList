
import AnimeList from '../components/AnimeList/AnimeList';
import Header from '../components/navigation/header/Header';

import React from 'react';

const AnimePage = (data, fun) => {
    console.log(fun)
    return (
        <div>
        <Header/>
        <AnimeList data={data}/>
    </div>
    );
};

export default AnimePage;