import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const TitlesCard = ({titlesData, setType, setId}) => {
    return (
            <div className='container__inner'>
                {titlesData.map(item  => (
                <Link to={`${item.mal_id}`} key={item.mal_id}>
                    <div className='titles__card' key={item.mal_id}>
                        <img src={item.images.jpg.large_image_url} className='titles__image' />
                        <div className='title__rai'>
                            <h3>{item.title}</h3>
                            <p>Rating: {item.score} </p>
                        </div>
                    </div>
                </Link>
                ))} 
            </div>
    );
};

export default TitlesCard;