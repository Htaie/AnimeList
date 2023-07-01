import React from 'react';
import classes from './Search.module.css'
const Search = () => {
    return (
        <div>
        <input className={classes.search} type="search"></input>
        </div>
    );
};

export default Search;