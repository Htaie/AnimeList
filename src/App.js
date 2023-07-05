import React, { useEffect, useState,useContext, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Anime from './pages/AnimePage';
import Main from './pages/MainPage';
import TitlePage from './components/page/title-page/TitlePage';
import MainPage from './pages/MainPage'
import AnimePage from './pages/AnimePage';
import axios from 'axios';

const App = () => {
    const [title, setTitle] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        if(fetching){
            axios
            .get(`https://api.jikan.moe/v4/anime?page=${currentPage}`)
            .then(data => {
                console.log(data)
                setTitle( [ ...data.data.data] )
            })
            .finally(() => setFetching(false))
        }
    }, [fetching])
    

    const prevHandler = (e) =>{
            setFetching(true)
            setCurrentPage(prevState => prevState - 1)
    }
    const nextHandler = (e) =>{
        setFetching(true)
        setCurrentPage(prevState => prevState + 1)
    }


    return (
            
        <Routes>
            <Route path="anime" element={<AnimePage data={title}/>}/>
            <Route path="main" element={<MainPage />}/>
            <Route path="/" element={<MainPage/>}/>

        </Routes>

    );
};

export default App;