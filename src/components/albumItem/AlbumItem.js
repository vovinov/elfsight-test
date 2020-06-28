import React from 'react';

import './albumitem.css';

export default function AlbumItem({album, onAlbumClick, count}) {

    return (
        <li className="albums__item card" onClick={onAlbumClick}>
            <div className="card__cover">
                <img className="card__img" src="./images/no-cover.png" alt="Cover" />
                <div className="card__count">{count}</div> 
            </div>
            <h2 className="card__title">{album.title}</h2>                
        </li>
    )
}
