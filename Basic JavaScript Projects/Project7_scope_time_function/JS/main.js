//Local variable
function Example() {
    let message = "Local message testing"
    document.getElementById("local").innerHTML = message
}

//Global variable
let message2 = "Global message testing"
function Example2() {
    document.getElementById("Global").innerHTML = message2
}

//Error local
function Numbers_add() {
    var a = 3;
    console.log(4 + a);
}

function Numbers_add_1() {
    console.log(a + 19);
}
Numbers_add();
Numbers_add_1();

//If else statement
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = 'How are you today?';
    }
    else { //added the else to show up when .gethour is after the time
        document.getElementById("Greeting").innerHTML = 'Good Evening';
    }
}

//Example of if or else statement
function IfExample(score) {
    if (score >= 60) {
        document.getElementById("Score").innerHTML = 'Congratulations! You passed.';
    }
    else {
        document.getElementById("Score").innerHTML = 'Keep Trying, You get there!';
    }
}
//Time Function
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = 'Good Morning!';
    }
    else if (Time >= 12 == Time < 18) {
        Reply = 'Good Afternoon!';
    }
    else {
        Reply = 'Good Evening!';
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}
