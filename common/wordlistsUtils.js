function getAdjective() {
    return getRandom(ADJECTIVES);
}

function getRandom(wordlist) {
    return wordlist[Math.floor(Math.random() * wordlist.length)];
}