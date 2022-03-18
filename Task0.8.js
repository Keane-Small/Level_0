function hoursAndMinutes(num){
    let numHours = Math.floor(num/60);
    let numMinutes = num % 60;
    
    if (numHours == 1 && numMinutes == 1){
        return console.log(numHours + " hour, " + numMinutes + " minute ");
    }else if (numHours < 1 && numMinutes < 1){
        return console.log(numHours + " hours, " + numMinutes + " minutes");
    }else if (numHours < 1 && numMinutes == 1 ){
        return console.log(numHours + " hours, " + numMinutes + " minute");
    }else {
        return console.log(numHours + " hour, " + numMinutes + " minutes");
    }
}

hoursAndMinutes(71);
hoursAndMinutes(133);