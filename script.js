// Function that runs when user hovers over an image
function upDate(previewPic) {
    console.log("Mouse over image:", previewPic.alt, previewPic.src);

    // Update the background image of #image
    let displayArea = document.getElementById("image");
    displayArea.style.backgroundImage = "url('" + previewPic.src + "')";

    // Update the text inside #image
    displayArea.innerHTML = previewPic.alt;
}

// Function that runs when user moves the mouse away
function undo() {
    console.log("Mouse left the image");

    let displayArea = document.getElementById("image");

    // Reset background image
    displayArea.style.backgroundImage = "url('')";

    // Reset text
    displayArea.innerHTML = "Hover over an image below to display here.";
}
