import React from 'react';

import './photomodal.css';

export default function PhotoModal({album, photos, id, onPhotoExitClick, onNextPhotoClick, onPreviousPhotoClick}) {

    const findPhoto = () => {
        const filteredData =  photos.filter(item => item.id === id);
        return filteredData[0].url
    }

    return (
        <div className="modal__box">
            <div className="modal__header">
                <span className="modal__count">{album.findIndex(item => id === item.id) + 1} / {album.length}</span>
                <button 
                    className="modal__exit"
                    onClick={onPhotoExitClick}>
                    &#10006;
                </button>
            </div>
            
            <div className="modal__picture">
                <img className="modal__img" src={findPhoto()} alt='' />
            </div>
            <button 
                className="modal__button modal__button--left"
                onClick={onPreviousPhotoClick} 
                disabled={id === album[0].id ? 'disabled' : null}               
                >
                &larr;
            </button>
            <button 
                className="modal__button modal__button--right"
                onClick={onNextPhotoClick} 
                disabled={id === album[album.length - 1].id ? 'disabled' : null}
                >
                &rarr;
            </button>
        </div>
    )
}
