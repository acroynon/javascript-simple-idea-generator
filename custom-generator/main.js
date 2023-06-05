function onGenerate() {
    setText("output", 
        parseTemplateString(document.getElementById("input-template").value)
    );
}