import React, { useState } from 'react';
import { Link } from "react-router-dom";
import TittlesDetails from '../TitlesDetails/TittlesDetails';

const TitlesCard = ({titlesData}) => {
    const [id, setId] = useState()
    console.log(id)
    return (
            <div className='container__inner'>
                {titlesData.map(item  => (
                <Link to="" onClick={() => setId(item.mal_id)}>
                    <div className='titles__card' key={item.mal_id}>
                        <img src={item.images.jpg.large_image_url} className='titles__image' />
                        <div className='title__rai'>
                            <h3>{item.title}</h3>
                            <p>Rating: {item.score} </p>
                        </div>
                    </div>
                </Link>
                ))} 
            <TittlesDetails id={id}/>
            </div>
    );
};

export default TitlesCard;