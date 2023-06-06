function onGenerate() {
    // Create WHO template
    var whoTemplate = "CHARACTER|JOB|PERSONALITY";
    if (configEnabled("config-animal-characters")) {
        whoTemplate += "|ANIMALS"
    }
    if (configEnabled("config-fanfiction")) {
        whoTemplate += "|ANY_FANFICTION_CHARACTER"
    }
    whoTemplate = "<" + whoTemplate + ">";
    if (configEnabled("config-multiple-whos")) {
        whoTemplate += "{1..3}";
    }

    setText("td-who", parseTemplateString(whoTemplate));
    setText("td-wants", parseTemplateString("<WANTS>"));
    setText("td-but", parseTemplateString("<BUT>"));
    setText("td-setting", parseTemplateString("<PLACE>"));
}
