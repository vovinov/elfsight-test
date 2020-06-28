import React from 'react';

import './header.css';

export default function Header({isAlbumLoad, album, albums, backToAlbums}) {

    const getAlbumTitle = (album, albums) => {
        const title = albums.filter(item => item.id === album[0].albumId);
        return title[0].title
    }

    return (
        <div className="header">
            {isAlbumLoad &&
            <button 
                className="header__button"
                onClick={backToAlbums}
            >&larr; Назад</button>} 
            <h1 className="header__title">{isAlbumLoad && albums.length > 0 ?  getAlbumTitle(album, albums) : 'User album'}</h1> 
        </div>
    )
}
