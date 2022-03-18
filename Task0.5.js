function areaOfTriangle(sOne,sTwo,sThree){
    const semiPerimeter = (0.5)*(sOne + sTwo + sThree);
    const area = Math.sqrt(semiPerimeter*((semiPerimeter - sOne)*(semiPerimeter - sTwo)*(semiPerimeter - sThree))); // formula to find area
    return area;
}

areaOfTriangle(3,4,5);