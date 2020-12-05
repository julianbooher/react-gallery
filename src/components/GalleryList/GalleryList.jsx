import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component{
    render(){
        return(
            <div className="gallery">
                <h1>Gallery</h1>
                {this.props.galleryItems.map((galleryItem) => 
                    <GalleryItem galleryItem={galleryItem} key={galleryItem.id} />
                )}            
            </div>
        ) // end return
    } // end render
} // end class

export default GalleryList;
