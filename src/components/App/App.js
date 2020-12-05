import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from '../Header/Header'
import GalleryList from '../GalleryList/GalleryList'



class App extends Component {

  state = {
    galleryItems: []
  }

  componentDidMount(){
    this.getGalleryItems();
  }

  //GET route
  getGalleryItems = () => {
    axios.get('/gallery')
    .then ( response => {
      console.log(response.data);
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
        <GalleryList getGalleryItems={this.getGalleryItems} galleryItems={this.state.galleryItems} />
      </div>
    );
  }
}

export default App;
