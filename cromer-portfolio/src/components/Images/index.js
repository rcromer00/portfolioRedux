import React from 'react';
import "./style.css";

function Image(props) {
    return <div className="image"  src={props.src}>
            <img  src={props.src}></img>
            {props.children}</div>
}

export default Image;