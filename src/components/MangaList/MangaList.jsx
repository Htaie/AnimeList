import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  './MangaList.css'




const AnimeList = () => {
    const [titles, setTitles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true)
    
    useEffect(() => {
        if(fetching){
            axios
            .get(`https://api.jikan.moe/v4/top/manga?page=${currentPage}`)
            .then(data => {
                console.log(data)
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
            <div className='container__inner'>
                {titles.map(item  => (
                <div className='titles__card'>
                    <img src={item.images.jpg.large_image_url} className='titles__image' />
                    <div className='title__rai'>
                    <h3>{item.title}</h3>
                    <p>Rating: {item.score} </p>
                    <p>Volumes: {item.volumes}</p>
                    </div>
                </div>
                ))} 
            </div>
            <div className="new__page">
                <button className='btn-arrow btn-arrow-left' onClick={prevHandler}>Prev</button>
                <button className='btn-arrow btn-arrow-right' onClick={nextHandler}>Next</button>
            </div>
        </div>
    );
};

export default AnimeList;