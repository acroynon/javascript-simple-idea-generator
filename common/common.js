function setText(elementId, text) {
    document.getElementById(elementId).innerText = text;
}

// Used for checkbox/slider button
function configEnabled(elementId){
    return document.getElementById(elementId).checked
}