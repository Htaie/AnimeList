import React, { useEffect, useState } from 'react';
import  classes from './TitlePage.module.css'
import axios from 'axios';
// import { API_KEY } from '../../../key';



// const TitlePage = ({title}) => {

    // // const key = API_KEY
    // const [drinks, setDrinks] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [fetching, setFetching] = useState(true)

    // useEffect(() => {
    //     if(fetching){
    //         axios
    //         .get(`https://api.jikan.moe/v4/anime?page=${currentPage}`)
    //         .then(data => {
    //             console.log(data)
    //             setDrinks( [ ...data.data.data] )
    //             setCurrentPage(prevState => prevState + 1)
    //         })
    //         .finally(() => setFetching(false))
    //     }
    // }, [fetching])
    

    // const scrollHandler = (e) =>{
    //         setFetching(true)
    // }

//     return (
//         <div className={classes.container}>
//             <h3 className={classes.title}>'''</h3>
//                 <div className={classes.container__inner}>
//                         {drinks.map(item  => (
//                             <div  className={classes.title__card} >
//                                 <img className={classes.card__image} src={item.images.jpg.large_image_url} alt="" />
//                                 <p>{item.title}</p>
//                                 <p>{item.studio}</p>
//                             </div>
//                         ))}
//                         <button onClick={scrollHandler}>asdsada</button>

//                 </div> 
//         </div>
//     );
// };

// export default TitlePage;

