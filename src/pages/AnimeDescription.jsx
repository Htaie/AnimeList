import React, {useEffect, useReducer, useState} from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const AnimeDescription = (props) => {
    const [titles, setTitles] = useState([]);
    const [fetching, setFetching] = useState(true)
    const category = props.category
    const location = useLocation()

    useEffect(() => {
        if(fetching){
            axios
            .get(`https://api.jikan.moe/v4/${category}/${location.pathname.split('/')[2]}`)
            .then(data => {
                console.log(data)
                setTitles( data.data.data )
            })
            .finally(() => setFetching(false))
        }
    }, [fetching, location.pathname])
    console.log(titles)
    
    return (
        <div>           
            <div className="div">
                <h1>{titles.title}</h1>
                {/* <img src={titles.images.jpg.large_image_url} alt="" /> */}
                <p>{titles.background}</p>
                <p>{titles.year}</p>
                <p>{titles.studios[0].name}</p>
                <p>{titles.synopsis}</p>
            </div>    
        </div>
    )
};

export default AnimeDescription;