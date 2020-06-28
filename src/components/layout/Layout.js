import React from 'react';
import './layout.css';

export default function Layout(props) {
    return (
        <div className="container">
            <div className="content">
                {props.children}
            </div>    
        </div>
    )
}

