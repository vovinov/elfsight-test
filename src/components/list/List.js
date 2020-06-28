import React, { Component } from 'react';
import AlbumItem from '../albumItem';
import PhotoItem from '../photoItem';
import Modal from '../modal';
import PhotoModal from '../photoModal';
import Backdrop from '../backdrop';

import './list.css';


export default class List extends Component {

    state = {  
        id: '',      
        isOpenModal: false
    }

    countPhoto = (id, photos) => {
        return photos.filter(item => item.albumId === id).length;  
    }

    onPhotoClick = (id) => {
        this.setState({
            id:id,
            isOpenModal: true
        })
    }

    onPhotoExitClick = () => {
        this.setState({
            isOpenModal: false
        })
    }

    onNextPhotoClick = () => {
        this.setState((state) => {
            return {
                id: state.id + 1
            }
        })
    }

    onPreviousPhotoClick = () => {
        this.setState((state) => {
            return {
                id: state.id - 1
            }
        })
    }

    render() {

        const {albums, onAlbumClick, photos, album, loading} = this.props;

        const {isOpenModal, id} = this.state;

        if (loading) {
            return (
                <div>Loading....</div>
            )
        }

        return (
            <>
                <ul className="list">
    
                    {album.length > 0 
                    ? 
                        album.map(item => {
                            return <PhotoItem 
                                    key={item.title}
                                    item={item}
                                    onPhotoClick={() => this.onPhotoClick(item.id)} />
                        })
                    :
                        albums.map(item => {
                            return <AlbumItem 
                                    key={item.title}
                                    album={item} 
                                    count={this.countPhoto(item.id, photos)}
                                    onAlbumClick={() => onAlbumClick(item.id)} />
                        })
                    }
                </ul>
                {isOpenModal && 
                    <>
                        <Backdrop />
                        <Modal>
                            <PhotoModal 
                                id={id} 
                                album={album}
                                photos={photos} 
                                onPhotoExitClick={this.onPhotoExitClick} 
                                onNextPhotoClick={this.onNextPhotoClick}
                                onPreviousPhotoClick={this.onPreviousPhotoClick} />
                        </Modal>
                    </>
                }
            </>
        )
    }
}
