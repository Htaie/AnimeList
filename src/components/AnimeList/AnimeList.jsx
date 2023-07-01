import React from 'react';
import classes from './AnimeList.module.css'
let data = [{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
{
    preview:'https://shikimori.me/uploads/poster/animes/51535/main-0a676d30d99a13131ae0d3c123348658.webp',
    title: 'dasdsa',
    studio:'mappa',
    id: 12321,
},
]

const AnimeList = () => {
    return (
        <div className={classes.container}>
            <div className={classes.title__container}>
            {data.map(item  => (
                <div className={classes.title__card}>
                    <img src={item.preview} className={classes.title__image} />
                    <div className={classes.title__raiy}>
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