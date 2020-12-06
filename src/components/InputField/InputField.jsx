import React, { Component } from 'react';
import axios from 'axios';


class InputField extends Component{
    state = {
        newGalleryItem: {
            path: '',
            description: ''
        }
    }

    // Sets the state when text is typed into the input fields.
    handleChangeFor = (event, propertyName) => {
        console.log(this.state);
        this.setState({
        newGalleryItem: {
            ...this.state.newGalleryItem,
            [propertyName]: event.target.value
        }
        })
    }

    // Function to add a photo to the DB via axios POST route.
    addPhoto = (event) => {
        event.preventDefault();
        console.log('inside addPhoto');
        axios.post('/gallery', this.state.newGalleryItem)
        // Reset the state so the input fields clear.
        this.setState({
            newGalleryItem:{
                path: '',
                description: ''
            }
        })
    }

    render(){
        return(
            <div className="input-field">
                <h2>Submit a new photo!</h2>
                <form onSubmit={this.addPhoto}>
                <label>Photo URL:</label>
                <input type="text" value={this.state.newGalleryItem.path} onChange={(event) => this.handleChangeFor(event, 'path')} />
                <br></br>
                <label>Description:</label>
                <input type="text" value={this.state.newGalleryItem.description} onChange={(event) => this.handleChangeFor(event, 'description')} />
                <br></br>
                <button type="submit">Submit Photo</button>

                </form>
            </div>
        ) // end return
    } // end render
} // end class

export default InputField;
