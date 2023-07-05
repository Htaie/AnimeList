import React from 'react';

const Buttons = (props) => {
    return (
        <button onClick={props.click}>{props.text}</button>
    );
};

export default Buttons;