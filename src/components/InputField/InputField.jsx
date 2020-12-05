import React, { Component } from 'react';

class InputField extends Component{

    addPhoto = (event) => {
        event.preventDefault();
        console.log('inside addPhoto');
    }

    render(){
        return(
            <div>
                <h2>Submit a new photo!</h2>
                <form onSubmit={this.addPhoto}>
                <button type="submit">Submit Photo</button>

                </form>
            </div>
        ) // end return
    } // end render
} // end class

export default InputField;
