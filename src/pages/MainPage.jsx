import React, {useContext, createContext} from 'react';

import TitlesBlock from '../components/TitlesBlock/TitlesBlock'
import '../style.css'
import Header from '../components/navigation/header/Header';
import { Route, Routes } from 'react-router-dom';

const Main = () => {
    const blocks = [
        {
            id:1,
            name: 'Anime',
            category: 'anime',
            url: '/anime'
        },
        {
            id:2,
            name: 'Manga',
            category: 'manga',
            url: '/manga'
        }
    ]

    return (
        <div>
            {
                blocks.map(elem => {
                    return  (
                    <TitlesBlock
                        name={elem.name}
                        category={elem.category}
                        link={elem.url}
                        key={elem.id}
                    />
                    )
                }
                )
            }
            
        </div>
    );
};

export default Main;