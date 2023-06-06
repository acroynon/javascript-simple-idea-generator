function onGenerate() {
    var adjective = parseTemplateString("<ADJECTIVE>");
    var word = parseTemplateString(getHeroWordTemplate());
    var gender = getRandomGenderSuffix();
    setText("td-name", toTitleCase(`The ${adjective} ${word}-${gender}`));
}

function getRandomGenderSuffix() {
    var genders = ["man", "boy", "girl", "woman"];
    return genders[Math.floor(Math.random()*genders.length)];
}

function getHeroWordTemplate() {
    var possibilities = [];
    var configMap = {
        'config-animal': 'ANIMAL',
        'config-element': 'ELEMENT',
        'config-noun': 'NOUN',
        'config-food': 'FOOD'
    }
    Object.keys(configMap).forEach(elementId => {
        if (configEnabled(elementId)){
            possibilities.push(configMap[elementId]);
        }
    })
    console.log(possibilities);
    return "<" + possibilities.join("|") + ">";
}