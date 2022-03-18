function findVowels (word){
    word.toLowerCase();
    let i = 0;
    let vowels = "";
    if (word.indexOf("a") !== -1){          // Used .indexOf to find the letter
        vowels += " a,";
    }
    if (word.indexOf("e") !== -1){
        vowels += " e,";
    }
    if (word.indexOf("i") !== -1){
        vowels += " i,";
    }
    if (word.indexOf("o") !== -1){
        vowels += " o,";
    }
    if (word.indexOf("u") !== -1){
        vowels += " u,";
    }
    console.log("Vowels: " + vowels.slice(0,-1)); // used .slice to remove the last comma.
}

findVowels("Uzumi");