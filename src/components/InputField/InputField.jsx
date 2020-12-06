import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';



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
        .then (response => {
            this.props.getGalleryItems();
        })
        .catch((error) => {
            alert('Something bad happened');
            console.log('Error', error)
          })
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
                    <TextField 
                    className="input-field-url-input" 
                    id="outlined-basic" 
                    label="Photo URL" 
                    variant="outlined" 
                    type="text" 
                    inputProps={{
                        maxLength: 200,
                      }}
                    value={this.state.newGalleryItem.path} 
                    onChange={(event) => this.handleChangeFor(event, 'path')} />

                    <br></br>
                    <br></br>

                    <TextField 
                    className="input-field-description-input" 
                    id="outlined-multiline-static" 
                    label="Photo Description" 
                    multiline
                    rows={4}
                    variant="outlined" 
                    type="text" 
                    inputProps={{
                        maxLength: 200,
                      }}
                    value={this.state.newGalleryItem.description} 
                    onChange={(event) => this.handleChangeFor(event, 'description')} />
                    <br></br>
                    <Button 
                    color="primary"
                    variant="outlined"
                    startIcon={<SendIcon/>}
                    type="submit">Submit Photo
                    </Button>
                </form>
            </div>
        ) // end return
    } // end render
} // end class

export default InputField;
