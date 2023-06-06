function onGenerate() {
    setText("td-first-name", parseTemplateString(getFirstNameTemplate()));
    setText("td-last-name", parseTemplateString("<SURNAME>"));
}

function getFirstNameTemplate() {
    var selected = getOptionSelected("config-gender");
    switch (selected) {
        case "male":
            return "<FIRST_NAME_MALE>";
        case "female":
            return "<FIRST_NAME_FEMALE>";
        case "unisex":
            return "<FIRST_NAME_UNISEX>";
        case "any":
        default:
            return "<FIRST_NAME_MALE|FIRST_NAME_FEMALE|FIRST_NAME_UNISEX>";

    }
}