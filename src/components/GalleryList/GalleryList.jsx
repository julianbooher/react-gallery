import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem'

class GalleryList extends Component{
    render(){
        return(
            <div className="gallery">
                <div className="gallery-header">
                    <h1>Gallery</h1>
                    <p>Click on the Photos for a description.</p>
                </div>
                {this.props.galleryItems.map((galleryItem) => 
                    <GalleryItem getGalleryItems={this.props.getGalleryItems} galleryItem={galleryItem} key={galleryItem.id} />
                )}            
            </div>
        ) // end return
    } // end render
} // end class

export default GalleryList;
