function celsuisToFahrenheit (celsuis){
    let fahrenheit = ((celsuis * 1.8) + 32);
    return console.log(fahrenheit + "°");
}

function fahrenheitToCelsuis(fahrenheit){
    let celsuis = (fahrenheit - 32)/1.8;
    return console.log(celsuis + "°");
}

celsuisToFahrenheit(55);
fahrenheitToCelsuis(131);