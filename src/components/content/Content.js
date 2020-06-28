import React from 'react';

import './content.css';

export default function Content(props) {
    return (
        <div className="box">
            {props.children}
        </div> 
    )
}
