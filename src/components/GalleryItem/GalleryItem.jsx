import axios from 'axios';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Swal from 'sweetalert2'


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
        .catch((error) => {
            alert('Something bad happened');
            console.log('Error', error)
          })
    }

    // function to delete a photo
    deletePhoto = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: 'This will delete the selected photo',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Photo Deleted!',
                    'success'
                )
                axios.delete(`/gallery/${this.props.galleryItem.id}`)
                .then (response => {
                  this.props.getGalleryItems();
                })
                .catch((error) => {
                    alert('Something bad happened');
                    console.log('Error', error)
                })
                // For more information about handling dismissals please visit
                // https://sweetalert2.github.io/#handling-dismissals
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your photo was not deleted',
                    'error'
                )
            }
        })
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
                <Button 
                    color="primary" 
                    startIcon={<ThumbUpAltIcon />}
                    onClick={this.addLike}>Like this photo!</Button>
                <br></br>
                <p>{this.props.galleryItem.likes} people like this! </p>
                <Button 
                    variant="outlined" 
                    color="secondary" 
                    onClick={this.deletePhoto}> Delete</Button>
            </div>
        ) // end return
    } // end render
} // end class

export default GalleryItem;
