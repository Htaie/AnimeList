import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  '../components/MangaList/MangaList.css'
import TitlesCard from '../components/TitlesCard/TitlesCard';





const MangaPage = () => {
    const [titles, setTitles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true)
    
    useEffect(() => {
        if(fetching){
            axios
            .get(`https://api.jikan.moe/v4/top/manga?page=${currentPage}&limit=24`)
            .then(data => {
                setTitles( [ ...data.data.data] )
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
        <div className='container'>
        <TitlesCard titlesData={titles}/>
        <div className="new__page">
                <button className='btn-arrow btn-arrow-left' onClick={prevHandler}>Prev</button>
                <button className='btn-arrow btn-arrow-right' onClick={nextHandler}>Next</button>
        </div>
        </div>
    );
};

export default MangaPage;