//Example ternary operation
function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

//Challenge ternary operation
function Vote_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to Vote.";
}

//'New' and 'This' constructor function, using dogs
function Dogs(Breed, Height, Weight, Fur_color) {
    this.Dogs_Breed = Breed;
    this.Dogs_Height = Height;
    this.Dogs_Weight = Weight;
    this.Dogs_Fur_color = Fur_color;
}

var Max = new Dogs("Miniature Schnauzer", "12 in", "11 lbs", "White");
var Tyke = new Dogs("Chiweenie", "10 in", "13 lbs", "Brown");
var Nina = new Dogs("Chiweenie", "10 in", "16 lbs", "Beige");

function myfunction() {
    document.getElementById("New_and_This").innerHTML = "Nina is a " + Nina.Dogs_Fur_color + " " + Nina.Dogs_Breed + ", she is  " + Nina.Dogs_Height + " and a little over weight, coming in at  " + Nina.Dogs_Weight;
}

//Example Nested function
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_Point = 9;
        function Plus_one() { Starting_Point += 1; }
        Plus_one();
        return Starting_Point;
    }
}

//Testing Nested Functions
function outer_Function() {
    var A = 5;
    var B = 4;
    var C = 7;

    function inner_Function() {
       return B + A + C;
    }
   

     document.getElementById("Testing").innerHTML = inner_Function();
}

