import React, {Component} from 'react';
import Layout from './components/layout';
import Header from './components/header';
import List from './components/list';
import Content from './components/content';

export default class App extends Component {

  state = {
    loading: true,
    albums: [],
    photos: [],
    album: [],
    isAlbumLoad: false,
  }

  componentDidMount() {
    this.getDataAlbums();
    this.getDataPhotos();
    this.setState({loading: false})
  };

  getData = async (url) => {
    const res = await fetch(url);
    return await res.json();        
  }

  getDataAlbums = async () => {
    const data = await this.getData('https://jsonplaceholder.typicode.com/albums');
    const filteredData = data.filter(item => item.userId === 1);
    this.setState({albums: filteredData});
  }

  getDataPhotos = async () => {
    const data = await this.getData('https://jsonplaceholder.typicode.com/photos');
    this.setState({photos: data});

  }
  getDataCurrentAlbum = async (id) => {
    const data = await this.getData('https://jsonplaceholder.typicode.com/photos');
    const filteredData = data.filter(item => item.albumId === id);
    this.setState({album: filteredData, isAlbumLoad: true});
  }

  onAlbumClick = (id) => {
    this.getDataCurrentAlbum(id);
  }

  backToAlbums = () => {
    this.setState({album: [], isAlbumLoad: false}) 
  }


  render() {

    const {albums, photos, album, isAlbumLoad} = this.state;

    return (      
      <Layout>
        <Header 
          isAlbumLoad={isAlbumLoad} 
          album={album} 
          albums={albums} 
          backToAlbums={this.backToAlbums} />                 
        <Content>
          <List 
            albums={albums} 
            onAlbumClick={this.onAlbumClick}
            photos={photos} 
            album={album} />
        </Content>
      </Layout>
    );
  }
}