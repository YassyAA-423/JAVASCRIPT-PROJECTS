//While Loops (Count to ten example)
function count_to_ten() {
    var digit = ""
    var x = 1;
    while (x < 11) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("count_to_ten").innerHTML = digit;
}

//The Length Property: return the length of the string
function length() {
    let text = "Howdy there Parnter";
    let length = text.length;
    document.getElementById("length").innerHTML = length;
}

//For Loops Function Example
var months = ["January", "Feburary", "March", "April", "May"];
var content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < months.length; Y++) {
        content += months[Y] + "<br>";
    }
    document.getElementById("months").innerHTML = content
}

//Array Function
function Dogs_status() {
    var Dogs_status = [];
    Dogs_status[0] = "Sleeping";
    Dogs_status[1] = "Eating";
    Dogs_status[2] = "Begging";
    Dogs_status[3] = "Playing";
    document.getElementById("Dog").innerHTML = "Nina is currently " + Dogs_status[3] + ".";
}

//Constant Function
function Constant_function() {
    const flowers = { Family: "Ranunculaceae", Species: "Aquilegia Vulgaris", Colors: "Blue" }
    flowers.Colors = "purple";
    flowers.blooms = "May to June";
    document.getElementById("constant").innerHTML = "The Common Columbine usually blooms between " + flowers.blooms + " and is part of the " + flowers.Family + " Family. They come in a variety of colors including " + flowers.Colors + ".";

}


//Let Function
function let_function() {
    var C = 55;
    let output = "";

    output += C + "<br>";

    {
        let C = 76;
        output += C + "<br>";
    }
    output += C + "<br>";
    document.getElementById("Let").innerHTML = output
}

