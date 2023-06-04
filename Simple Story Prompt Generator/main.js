const WHO = [
    "batman", "superman", "knight", "clown", "superhero", "supervillian", "bob, from accounting" 
];
const WANTS = [
    "treasure"
];
const BUT = [
    "they can't see", "they keep having nightmares", "they're too scared"
];
const SETTING = [
    "Victorian Era London", "Outer Space", "The Moon", "Another planet", "Underground"
];

function onGenerate() {
    setText("td-who", "a " + getAdjective() + " " + getRandom(WHO));
    setText("td-wants", getRandom(WANTS));
    setText("td-but", getRandom(BUT));
    setText("td-setting", getRandom(SETTING));
}

function setText(elementId, text) {
    document.getElementById(elementId).innerText = text;
}

function getRandom(items) {
    return items[Math.floor(Math.random() * items.length)];
}