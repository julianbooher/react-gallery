import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import GalleryList from '../GalleryList/GalleryList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <GalleryList />
      </div>
    );
  }
}

export default App;
