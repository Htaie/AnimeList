import React from 'react';
import  './AnimeList.css'


const AnimeList = (data) => {
    return (   
        <div className='container'>
            <div className='title__container'>
                {data.data.data.map(item  => (
                <div className='title__card'>
                    <img src={item.images.jpg.large_image_url} className='title__image' />
                    <div className='title__rai'>
                    <h3>{item.title}</h3>
                    <p>{item.id}</p>
                    </div>
                </div>
                ))} 
            </div>

        </div>
    );
};

export default AnimeList;