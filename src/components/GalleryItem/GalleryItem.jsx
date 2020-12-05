import React, { Component } from 'react';

class GalleryItem extends Component{

    state = {
        // State for if this has been clicked on, and if it's true, it will display a description of the photo.
        selected: false
    }
    render(){
        return(
            <div className="gallery-item">
                {JSON.stringify(this.props.galleryItem)}
            </div>
        ) // end return
    } // end render
} // end class

export default GalleryItem;
