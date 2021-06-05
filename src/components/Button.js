import React from 'react';
import stylesWrapper from './../HOC/stylesWrapper';

const Button = (props) => {
    return (
        <button style={props.styles}>{props.name}</button>
    )
}

export default stylesWrapper(Button);
