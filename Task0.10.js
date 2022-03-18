function commonChar (wOne,wTwo){
    let commonLetters = "";
    let i = 0;
    do {
        if (commonLetters.indexOf(wOne[i]) === -1){
            if (wTwo.indexOf(wOne[i]) !== -1){
                commonLetters += wOne[i] + ", ";
            }
        }
        i++
    } while (i < wOne.length)
    return console.log("Output: " + commonLetters.slice(0,-2)); // used .slice to remove the last comma
}

commonChar("house","computers");