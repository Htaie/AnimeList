import React, {useEffect, useState} from 'react';
import axios from 'axios';

const TittlesDetails = ({id}) => {

    const [titles, setTitles] = useState([]);
    const [fetching, setFetching] = useState(true)
    const [idi, setId] = useState(1)
    console.log(`https://api.jikan.moe/v4/manga/${idi}`) 
    useEffect(() => {
        if(fetching){
            setId(id)
            axios
            .get(`https://api.jikan.moe/v4/manga/${idi}`)
            .then(data => {
                console.log(data)
                setTitles( data.data.data )
            })
            .finally(() => setFetching(false))
        }
    }, [fetching])
    console.log(titles.data)
    
    return (
        <div>
                {/* <div className="div">
                <img src={titles.images.jpg.large_image_url} alt="" />
                <p>{titles.genres[1]}</p>
            </div>     */}
        </div>
    );
};

export default TittlesDetails;