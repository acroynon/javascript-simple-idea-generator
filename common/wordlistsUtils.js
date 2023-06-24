function getRandomWord(wordlist) {
    return parseTemplateString(wordlist[Math.floor(Math.random() * wordlist.length)]);
}

function parseTemplateString(template) {
    var replacementRegex = /<[^\s]+>({\d(\.\.\d){0,1}}){0,1}/g
    let result = template.replaceAll(replacementRegex, ($1) => parseToken($1));
    if (result == template) {
        return result; 
    }
    return parseTemplateString(result);
}

// <CHARACTER>, <CHARACTER|SETTING>, <CHARACTER{2..3}, <CHARACTER|SETTING>{1..2}
function parseToken(token) {
    // Work out range
    var inputRange = token.match(/{\d(\.\.\d){0,1}}$/g);
    inputRange = inputRange != null ? inputRange[0] : null;
    var range = parseRange(inputRange);

    // Work out list to generate from
    var lists = token.match(/(?<=<)[^\s]+(?=>)/g);
    lists = lists != null ? lists[0].split("|") : [];
    lists = lists.map(key => {
        return CustomWordLists[key] || WordLists[key] || null
    }).filter( list => list != null)

    // create replacement
    let replacement = [];
    let chosenMax = Math.floor(Math.random() * ((range.max+1)-range.min)) + range.min;
    for(var i=range.min; i<range.min+chosenMax; i++) {
        let selected = randomSelect(lists);
        let j=0; 
        while(j < 3 && replacement.indexOf(selected) > -1) {
            selected = randomSelect(lists);
        }
        replacement.push(selected);
    }
    // Remove dups
    replacement = [...new Set(replacement)];
    replacement = formatStringList(replacement);

    // replace in original
    return replacement;
}

function parseRange(input) {
    if (input == null || !input.match(/^{\d(\.\.\d){0,1}}$/)) {
        return {min: 1, max: 1};
    }
    let parts = input.replaceAll(/[{}]/g, "").split("..");
    return{ min: parseInt(parts[0]), max: parts[1] ? parseInt(parts[1]) : parseInt(parts[0])}
}

function formatStringList(list) {
    if (list == null || list.length == 0) {
        return "";
    }
    if (list.length == 1) {
        return list[0];
    }
    return [
        list.slice(0, list.length-1).join(", "), 
        list[list.length-1]
    ].join(" and ")
}

// a list of lists. e.g. [[a, b], [c, d]]
function randomSelect(lists) {
    let allItems = [];
    lists.forEach(list => allItems = allItems.concat(list))
    if (allItems.length == 0) {
        return "";
    }
    return allItems[Math.floor(Math.random() * allItems.length)];
}
  

// Template structure <REPLACE>(min..max) e.g. <WHO>(1..3) or <ADJECTIVE>(0..3)
// to generate 'WHO' can then use <ADJECTIVE>(0..1)<WHO>
// list are handled with commas and 'and' e.g. "happy", "happy and sad", "happy, sad, and lonely"
// Custom generators using the dynamic replace map
//   Who: <list1|list2>(n..n+1)
