function onGenerate() {
    setText("output", 
        parseTemplateString(document.getElementById("input-template").value)
    );
}

function onParseCustomLists() {
    var input = document.getElementById("input-custom-list").value;
    CustomWordLists = input.split(";")
        .map(l => l.split("="))
        .filter(l => l.length > 1)
        .map(li => li[1] = [li[0], li[1].split(",")])
        .reduce(function(o, l) {
            o[l[0].trim()] = l[1].slice(0).map(i => i.trim());
            return o;
        }, {})
    console.log("Custom Word Lists: ", CustomWordLists);
    populateWordlistTable("table-custom-word-lists-examples", CustomWordLists);
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

function populateWordlistTable(tableElementId, wordlists) {
    var table = document.querySelector("#" + tableElementId + " tbody");
    var keys = Object.keys(wordlists);
    
    table.innerHTML = "";
    keys.forEach(key => {
        var templateText = "<" + key + ">";
        var row = table.insertRow();
        var cellKey = row.insertCell(0);
        var cellExamples = row.insertCell(1);
        cellKey.innerText = key
        cellExamples.innerText = parseTemplateString(templateText) + "\n" + parseTemplateString(templateText) + "\n" + parseTemplateString(templateText) + "\n...";
    });
}

populateWordlistTable("table-word-examples", WordLists);

