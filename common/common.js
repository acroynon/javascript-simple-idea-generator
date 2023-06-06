function setText(elementId, text) {
    document.getElementById(elementId).innerText = text;
}

// Used for checkbox/slider button
function configEnabled(elementId) {
    return document.getElementById(elementId).checked;
}

function getOptionSelected(elementId) {
    return document.getElementById(elementId).value;
}

function toTitleCase(sentence) {
    return sentence.split(" ").map(word => {
        return word.split("-").map(subword => {
          return subword[0].toUpperCase() + subword.substr(1).toLowerCase();
        }).join("-");
      }).join(" ");
}