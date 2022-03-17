function areaOfTriangle(sOne,sTwo,sThree){
    let semiPerimeter = (0.5)*(sOne + sTwo + sThree);
    let area = Math.sqrt(semiPerimeter*((semiPerimeter - sOne)*(semiPerimeter - sTwo)*(semiPerimeter - sThree)));
    return console.log(area);
}

areaOfTriangle(3,4,5);