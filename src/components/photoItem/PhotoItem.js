import React from 'react';

import '../albumItem/albumitem.css';

export default function PhotoItem({item, onPhotoClick}) {

    return (
        <li 
            className="albums__item card"
            onClick={onPhotoClick}
        >
            <div className="card__cover">
                <img className="card__img" src={item.thumbnailUrl} alt={item.title} />
            </div>
            <h2 className="card__title">{item.title}</h2>                
        </li>
    )
}
