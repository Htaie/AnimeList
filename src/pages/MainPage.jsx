import React, {useContext, createContext} from 'react';

import TitlesBlock from '../components/TitlesBlock/BlockTitle'
import '../style.css'
import Header from '../components/navigation/header/Header';

const Main = () => {

    return (
        <div>
            <Header/>   

            <TitlesBlock name={'Anime'} category={'anime'} />
            <TitlesBlock name={'Manga'} category={'manga'}  /> */
        </div>
    );
};

export default Main;