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
const hightTriangle = document.getElementById("hightTriangle");

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
    resultTriangle.innerHTML = "Result : " +  (sideTriangle3.value * hightTriangle.value)/2 + "cm2";
}



//CIRCLE
const radius = document.getElementById("radius");

const resultCircle =document.getElementById("resultCircle");
const btnCalculatePerimeterCircle = document.getElementById("btnCalculatePerimeterCircle");
const btnCalculateAreaCircle = document.getElementById("btnCalculateAreaCircle");

btnCalculatePerimeterCircle.addEventListener('click',circlePerimeter);
btnCalculateAreaCircle.addEventListener('click',circleArea);

function circlePerimeter(event) {
    event.preventDefault();
    resultCircle.innerHTML = "Result : " +  (radius.value * 2) * Math.PI + "cm";
}

function circleArea(event) {
    event.preventDefault();
    resultCircle.innerHTML = "Result : " +  Math.pow(radius.value,2) * Math.PI + "cm2";
    //resultCircle.innerHTML = "Result : " +  (radius.value ** 2) * Math.PI + "cm2";
}


//ISOSCELES TRIANGLE
const sideTriangle = document.getElementById("sideTriangle");
const baseTriangle = document.getElementById("baseTriangle");

const resultHeightTriangle =document.getElementById("resultHeightTriangle");
const btnCalculateHeightTriangle = document.getElementById("btnCalculateHeightTriangle");

btnCalculateHeightTriangle.addEventListener('click',heightTriangle);

function heightTriangle(event) {
    event.preventDefault();
    if (sideTriangle.value == baseTriangle.value){
        resultHeightTriangle.innerHTML = "It isn't a Isosceles Triangle";
    }
    else {
        console.group('Triangle')
        console.log({
            sideTriangle : sideTriangle.value,
            baseTriangle: baseTriangle.value,
            a2 : Math.pow(sideTriangle.value,2),
            b2 : Math.pow(baseTriangle.value,2),

        })
        console.groupEnd('Triangle')
        resultHeightTriangle.innerHTML = "Height : " +  Math.sqrt(Math.pow(sideTriangle.value,2) - (Math.pow(baseTriangle.value,2)/4)) + "cm";
    }
}


//SCALENE TRIANGLE
const sideScaleneTriangle1 = document.getElementById("sideScaleneTriangle1");
const sideScaleneTriangle2 = document.getElementById("sideScaleneTriangle2");
const sideScaleneTriangle3 = document.getElementById("sideScaleneTriangle3");

const resultHeightScaleneTriangle =document.getElementById("resultHeightScaleneTriangle");
const btnCalculateHeightScaleneTriangle = document.getElementById("btnCalculateHeightScaleneTriangle");

btnCalculateHeightScaleneTriangle.addEventListener('click',heightScaleneTriangle);

function heightScaleneTriangle(event) {
    event.preventDefault();
    if (sideScaleneTriangle1.value == sideScaleneTriangle2.value || sideScaleneTriangle2.value == sideScaleneTriangle3.value){
        resultHeightScaleneTriangle.innerHTML = "It isn't a Scalene Triangle";
    }
    else {
        console.group('ScaleneTriangle')
        const semiperimeter = ((parseInt(sideScaleneTriangle1.value) + parseInt(sideScaleneTriangle2.value) + parseInt(sideScaleneTriangle3.value)) / 2);
        console.log({
            semiperimeter: semiperimeter,
            sumatoria: (parseInt(sideScaleneTriangle1.value) + parseInt(sideScaleneTriangle2.value) + parseInt(sideScaleneTriangle3.value)), 
            calculo: ((parseInt(sideScaleneTriangle1.value) + parseInt(sideScaleneTriangle2.value) + parseInt(sideScaleneTriangle3.value)) / 2)
        });
        resultHeightScaleneTriangle.innerHTML = "Height : " +  (2/sideScaleneTriangle1.value) * Math.sqrt(semiperimeter * (semiperimeter - sideScaleneTriangle1.value) * (semiperimeter - sideScaleneTriangle2.value) * (semiperimeter - sideScaleneTriangle3.value) ) + "cm";

        console.log({
            sideScaleneTriangle1 : sideScaleneTriangle1.value,
            sideScaleneTriangle2: sideScaleneTriangle2.value,
            sideScaleneTriangle3 : sideScaleneTriangle3.value,
            semiperimeter : semiperimeter,

        })
        console.groupEnd('ScaleneTriangle')
    }
}
