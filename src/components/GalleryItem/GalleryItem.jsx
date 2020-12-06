import axios from 'axios';
import React, { Component } from 'react';

// THIS IS WHAT DATA IS IN THE galleryItem
// {"id":1,"path":"images/Donkey.jpg","description":"Photo of a goat taken at Glacier National Park.","likes":0}


class GalleryItem extends Component{

    state = {
        // State for if this has been clicked on, and if it's true, it will display a description of the photo.
        selected: false,
    }

    // function to add a like
    addLike = () => {
        axios.put(`/gallery/like/${this.props.galleryItem.id}`)
        .then (response => {
            this.props.getGalleryItems();
        })
    }

    // function to add a like
    deletePhoto = () => {
        console.log('in deletePhoto')
    }

    // Function to toggle selected status. Will add faded image class, display text as conditional rendering components in the jsx.
    selectImage = () =>{
        this.setState({
            selected: !this.state.selected
        })
    }

    render(){
        return(
            <div className="gallery-item-container">
                <div onClick={this.selectImage} className="gallery-item">
                    {/* Conditionally renders the text above the image if the image is clicked on. */}
                    {this.state.selected &&  <div className="gallery-image-text">{this.props.galleryItem.description}</div>}
                    
                    
                    <img className={`gallery-image ${this.state.selected && "faded-image"}`} src={this.props.galleryItem.path} alt={this.props.galleryItem.description}/>
                </div>
                <br></br>
                <button onClick={this.addLike}>Like</button>
                <br></br>
                <p>{this.props.galleryItem.likes} people like this! </p>
                <button onClick={this.deletePhoto}> Delete</button>
            </div>
        ) // end return
    } // end render
} // end class

export default GalleryItem;
