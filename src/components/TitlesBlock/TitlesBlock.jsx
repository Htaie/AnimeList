import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './TitlesBlock.css'
import { Link } from 'react-router-dom';

const MainPage = (props) => {
    const [title, setTitle] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true)
    // console.log(name)
    

    useEffect(() => {
        // if (fetching) {
            // setTimeout(() => {
            axios
            .get(`https://api.jikan.moe/v4/top/${props.category}?limit=6`)
            .then(data => {
                // console.log(data)
                setTitle([...data.data.data]);
            })
            .finally(() => setFetching(false));
        // }, 1000)
        },
    []);

    // console.log(title)
    return (
        <div className='container'>
            <div className="titles__category-container">
            <Link to={props.link} className='title__category'>{props.name}</Link>
            </div>
                <div className='container__inner'>
                    {title.map(item  => (
                        <div  className='titles__card' >
                            <img src={item.images.jpg.large_image_url} className='titles__image' alt={"https://placehold.co/600x400"} onError={() => this.src='https://placehold.co/600x400'} />
                            <p>{item.title}</p>
                        </div>
                    ))}
                </div> 
        </div>
    );
};

export default MainPage;