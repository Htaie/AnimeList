import React from 'react';
import classes from './MainPage.module.css'

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
}
]

const MainPage = ({title}) => {
    return (
        <div className={classes.container}>
            <h3 className={classes.title__category}>{title}</h3>
                <div className={classes.container__inner}>
                    {data.slice(0,6).map(item  => (
                        <div  className={classes.title__card} >
                            <img src={item.preview} alt="" />
                            <p>{item.title}</p>
                            <p>{item.studio}</p>
                        </div>
                    ))}
                </div> 
        </div>
    );
};

export default MainPage;