function onGenerate() {
    setText('td-place', parseTemplateString("<PLACE>"));
    setText('td-tod', parseTemplateString("<TIME_OF_DAY>"));
    setText('td-weather', parseTemplateString("<WEATHER>"));
}