function onGenerate() {
    var genderList = ["male", "female", "any"];
    var heightList = ["very short", "short", "average", "tall", "very tall"];
    setText("td-gender", genderList[Math.floor(Math.random()*genderList.length)]);
    setText("td-age", parseTemplateString("<AGE>"));
    setText("td-personality", parseTemplateString("<PERSONALITY>"));
    setText("td-height", heightList[Math.floor(gaussianRand() * heightList.length)]);
    setText("td-clothes", parseTemplateString("<ITEM_OF_CLOTHING>{1..3}"));
    setText("td-skin-colour", parseTemplateString("<SKIN_COLOUR>"));    
    setText("td-hair-colour", parseTemplateString("<COLOUR>"));
    setText("td-hair-style", parseTemplateString("<HAIR_STYLE>"));
    setText("td-eye-colour", parseTemplateString("<COLOUR>"));
    setText("td-other-attributes", parseTemplateString("<RANDOM_PHYSICAL_DESCRIPTOR>{1..3}"));
}

function gaussianRand() {
    var rand = 0;
    for (var i = 0; i < 6; i += 1) {
      rand += Math.random();
    }
    return rand / 6;
  }