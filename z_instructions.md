[] App.js
    [] Axios GET route to populate a gallery array in state.
    [] Pass that gallery array to the GalleryList component via props.
[] Header
[] GalleryList
    [] .map the data and make GalleryItem for each index in the GalleryList prop.
[] GalleryItem
    [] render a div containing a picture
    [] state for "selected", boolean.
    [] function to change state "selected"
        [] put function inside div as onclick
    [] conditional rendering on the div, text box pops up with description over the image when it is clicked and toggled.