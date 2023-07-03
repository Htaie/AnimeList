import React from 'react';
import logo from './logo.png'
import Search from '../search/Search';
import classes from './Header.module.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <Link to="/"><img className={classes.logo} src={logo}  /></Link>
            <div className={classes.link__page}>
                <Link to="manga" className={classes.link__page} href="">Манга</Link>
                <Link to="anime" className={classes.link__page} href="">Аниме</Link>
                <Link to="/anime-list" className={classes.link__page} href="">Список аниме</Link>
            </div>
            <div className={classes.search}>
                <Search/>
            </div>
            <div>
                <button className={classes.auth__btn}>Login</button>
            </div>
            </div>
        </div>
    );
};

export default Header;