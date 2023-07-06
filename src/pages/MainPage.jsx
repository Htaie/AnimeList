import React, {useContext, createContext} from 'react';

import TitlesBlock from '../components/TitlesBlock/TitlesBlock'
import '../style.css'
import Header from '../components/navigation/header/Header';

const Main = () => {

    return (
        <div>
            <Header/>   
            <TitlesBlock name={'Anime'} category={'anime'} link={'/anime'} />
            <TitlesBlock name={'Manga'} category={'manga'}  link={'/manga'}/> 
        </div>
    );
};

export default Main;