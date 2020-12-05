import React, { Component } from 'react';

// THIS IS WHAT DATA IS IN THE galleryItem
// {"id":1,"path":"images/Donkey.jpg","description":"Photo of a goat taken at Glacier National Park.","likes":0}


class GalleryItem extends Component{

    state = {
        // State for if this has been clicked on, and if it's true, it will display a description of the photo.
        selected: false,
        imgPath: `../../${this.props.galleryItem.path}`
    }
    render(){
        return(
            <div className="gallery-item">
                <div className="gallery-image-text">TEXT</div>
                
                <img className="gallery-image" src={"../../" + this.props.galleryItem.path} alt={this.props.galleryItem.description}/>
            </div>
        ) // end return
    } // end render
} // end class

export default GalleryItem;
