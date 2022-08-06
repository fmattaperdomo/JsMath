const side = document.getElementById("side");
const result =document.getElementById("result");
const btnCalculate = document.getElementById("btnCalculatePerimeter");
const btnCalculateArea = document.getElementById("btnCalculateArea");

//SQUARE
btnCalculate.addEventListener('click',squarePerimeter);
btnCalculateArea.addEventListener('click',squareArea);

function squarePerimeter(event) {
    event.preventDefault();
    result.innerHTML = "Result : " +  (side.value * 4) + "cm";
}

function squareArea(event) {
    event.preventDefault();
    result.innerHTML = "Result : " +  (side.value * side.value) + "cm2";
}

//TRIANGLE
const sideTriangle1 = document.getElementById("sideTriangle1");
const sideTriangle2 = document.getElementById("sideTriangle2");
const sideTriangle3 = document.getElementById("sideTriangle3");
const resultTriangle =document.getElementById("resultTriangle");
const btnCalculateTriangle = document.getElementById("btnCalculatePerimeterTriangle");
const btnCalculateAreaTriangle = document.getElementById("btnCalculateAreaTriangle");

btnCalculatePerimeterTriangle.addEventListener('click',trianglePerimeter);
btnCalculateAreaTriangle.addEventListener('click',triangleArea);

function trianglePerimeter(event) {
    event.preventDefault();
    resultTriangle.innerHTML = "Result : " +  (parseInt(sideTriangle1.value) + parseInt(sideTriangle2.value) + parseInt(sideTriangle3.value)) + "cm";
}

function triangleArea(event) {
    event.preventDefault();
    resultTriangle.innerHTML = "Result : " +  (sideTriangle1.value * sideTriangl1.value) + "cm2";
}

