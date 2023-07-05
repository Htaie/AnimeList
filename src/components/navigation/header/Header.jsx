import React from 'react';
import logo from './logo.png'
import Search from '../search/Search';
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <div className='container header__inner'>
                <Link to="/"><img className='logo' src={logo}  /></Link>
            <div className='link__page'>
                <Link to="/manga" className='link__page' >Манга</Link>
                <Link to="/anime" className='link__page' >Аниме</Link>
                <Link to="/anime-list" className='link__page'    >Список аниме</Link>
            </div>
            <div className='search'>
                <Search/>
            </div>
            <div>

                <button className='auth__btn'>Login</button>
            </div>
            </div>
        </div>
    );
};

export default Header;