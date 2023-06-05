function onGenerate() {
    setText("output", 
        parseTemplateString(document.getElementById("input-template").value)
    );
}

// Add click events to collapsible section
[...document.querySelectorAll(".collapsible-trigger")].forEach(trigger => {
    trigger.addEventListener("click", function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    })
})

// Populate wordlist example table
var table = document.querySelector("#table-word-examples tbody");
var keys = Object.keys(WordLists);

keys.forEach(key => {
    console.log("Processing key: " + key);
    var templateText = "<" + key + ">";
    var row = table.insertRow();
    var cellKey = row.insertCell(0);
    var cellExamples = row.insertCell(1);
    cellKey.innerText = key
    cellExamples.innerText = parseTemplateString(templateText) + "\n" + parseTemplateString(templateText) + "\n" + parseTemplateString(templateText) + "\n...";
})