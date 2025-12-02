//typeof for string
function typeof_String_Funtion() {
    document.getElementById("string").innerHTML = "Testing is typeof " + (typeof "Testing");
}

//typeof for number
function typeof_number_Funtion() {
    document.getElementById("number").innerHTML = "5 is typeof " + (typeof 5);
}

//Coercion Assignment
function coercion_Funtion() {
    var Coercion = "Twenty" + 20;
    document.getElementById("coercion").innerHTML = "\"Twenty\" + 20 = " + Coercion;
}

//not a number function
function NAN_Function() {
    document.getElementById("Not").innerHTML = "0/0 is " + 0 / 0;
}

//isNaN functions for true
function not_number_function() {
    document.getElementById("test").innerHTML = "Testing is isNan " + isNaN('Testing');
}

//isNaN functions for false
function is_number_function() {
    document.getElementById("is").innerHTML = "1234 is isNan " + isNaN('1234');
}

//Display infinity
function infinity_function() {
    document.getElementById("infinity").innerHTML = "5E990 is " + 5E990;
}

//Display Negative infinity
function Negative_infinity_function() {
    document.getElementById("negative").innerHTML = "-8E390 is " + -8E390;
}

// AND Boolean
function and_function() {
    document.getElementById("and").innerHTML = "10 > 2 = " + (10 > 2)
}

//console addition
console.log(7 + 5);


//console false
console.log(79 < 55);


// Double equal signs True
function Double_True_function() {
    document.getElementById("Checking").innerHTML = "2 == 2 = " + (2 == 2);
}

// Double equal signs True
function Double_False_function() {
    document.getElementById("Check").innerHTML = "14 == 2 = " + (14 == 2);
}

//Triple Equal signs true, Same data and Same value
function Tripe_True_function() {
    A = 7;
    B = 7;
    document.getElementById("Triple").innerHTML = "A(7) === B(7) = " + (A === B);
}

//Triple Equal signs false, different data and different value
function Triple_False_1_function() {
    C = 8;
    D = "9";
    document.getElementById("False1").innerHTML = "C(8) === D(\"9\") = " + (C === D);
}

//Triple Equal signs false, different data and same value
function Triple_False_2_function() {
    E = 10;
    F = "10";
    document.getElementById("False2").innerHTML = "E(10) === F(\"10\") = " + (E === F);
}

//Triple Equal signs false, same data and different value
function Triple_False_3_function() {
    G = 5;
    H = 4;
    document.getElementById("False3").innerHTML = "G(5) === H(4) = " + (G === H);
}


// AND Boolean Operator
function AND_function() {
    document.getElementById("AND").innerHTML = "10 > 2 && 33 > 3 is " + (10 > 2 && 33 > 3);
}


// OR Boolean Operator
function OR_function() {
    document.getElementById("OR").innerHTML = "10 > 2 || 22 > 4 is " + (10 > 2 || 22 > 4);
}


// NOT Boolean Operator False
function NOT_function() {
    document.getElementById("NOT").innerHTML = "!(10 > 2) = " + !(10 > 2);
}

// NOT Boolean Operator False
function NOT_True_function() {
    document.getElementById("NOTTRUE").innerHTML = "!(10 < 2) = " + !(10 < 2);
}