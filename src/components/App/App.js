import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from '../Header/Header'
import GalleryList from '../GalleryList/GalleryList'
import InputField from '../InputField/InputField'



class App extends Component {

  state = {
    galleryItems: []
  }

  componentDidMount(){
    this.getGalleryItems();
  }

  //GET route, then the galleryItems are rendered to the DOM via GalleryList
  getGalleryItems = () => {
    axios.get('/gallery')
    .then ( response => {
      this.setState({
        galleryItems: response.data
      })
    })
    .catch((error) => {
      alert('Something bad happened');
      console.log('Error', error)
    })
  }



  render() { 
    return (
      <div className="App">
        <Header />
        <InputField  getGalleryItems={this.getGalleryItems} />
        <GalleryList getGalleryItems={this.getGalleryItems} galleryItems={this.state.galleryItems} />
      </div>
    );
  }
}

export default App;
