//Addition function
function addition_Funtion() {
    var addition = 24 + 53;
    document.getElementById("Math").innerHTML = "24 + 53 = " + addition;
}

//Subtraction function
function subtraction_Function() {
    var subtraction = 72 - 34;
    document.getElementById("Subt").innerHTML = "72 - 34 = " + subtraction;
}

//Multiplication function
function multiplication_Function() {
    var multiply = 8 * 9;
    document.getElementById("Multi").innerHTML = "8 * 9 = " + multiply;
}

//Division function
function division_Function() {
    var division = 30 / 3;
    document.getElementById("Divi").innerHTML = "30 / 3 = " + division;
}

//Multiple Operation function
function multiple_operation_Funtion() {
    var simple_math = (5 + 4) * 8 - 7;
    document.getElementById("simple").innerHTML = "(5 + 4) * 8 - 7 = " + simple_math;
}

//Remainder operator
function modulus_Operator() {
    var remainder = 25 % 6;
    document.getElementById("remainder").innerHTML = "When you divide 25 by 6 you have a remainder of: " + remainder;
}

//Negative operator
function negation_operator() {
    var x = 52;
    document.getElementById("negative").innerHTML = -x;
}

//INCREMENT operator

function increment_operator(){
    var r = 9;
    r++;
    document.getElementById("incre").innerHTML = "9++ = " + r;
}

//DECREMENT operator

function decrement_operator(){
    var b = 9;
    b--;
    document.getElementById("decre").innerHTML = "9-- = " + b;
}

//Random number between 0 and 1 would be like this
//window.alert(Math.random());

//Random number between 0 and 100 would be like this
window.alert(Math.random() * 100);

//Rounds to the nearest intger
function round_function(){
    var d = 8.287
    Math.round(d)
    document.getElementById("round").innerHTML = "8.287 = " + Math.round(d);
}