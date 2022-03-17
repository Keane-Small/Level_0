function maximum(){
    let biggestNumber = 0;
    for (let i = 0; i < arguments.length; i++){
        if (biggestNumber < arguments[i]){
            biggestNumber = arguments[i];
        }
    }
    return console.log(biggestNumber);
}

maximum(1202,2,35,1);
