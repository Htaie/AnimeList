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
                <Link to="manga" className='link__page' href="">Манга</Link>
                <Link to="main" className='link__page' href="">Аниме</Link>
                <Link to="/anime-list" className='link__page' href="">Список аниме</Link>
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