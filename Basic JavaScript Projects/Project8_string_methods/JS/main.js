//ConCat Method
function full_sentence() {
    var part_1 = "Testing ";
    var part_2 = "to see ";
    var part_3 = "if this will ";
    var part_4 = "work.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

//Slice Method
function slice_method() {
    var sentence = "The Extraordinary is in what we do, Not who we are";
    var section = sentence.slice(3, 17);
    document.getElementById("slice").innerHTML = section;
}

//toUpperCase makes the sting to uppercase letters
function upper_case() {
    let text = "Testing"
    let result = text.toUpperCase();
    document.getElementById("upper").innerHTML = result;
}

//()search method looks for a match in a string and return the index position of the first match
function search() {
    let text = "The Extraordinary is in what we do, Not who we are"
    let position = text.search("in");
    document.getElementById("sm").innerHTML = position;
}

//String Method
function String_method() {
    var a = 128;
    document.getElementById("number").innerHTML = a.toString();
}

//TOPrecision method

function precision_method() {
    var b = 123456.789123456789;
    document.getElementById("precision").innerHTML = b.toPrecision(10);
}

//tofixed method converts numbers to string and rounds to a specified number of decimals
function fixed() {
    let num = 5.12345
    let n = num.toFixed();//if you put a number inside the () it will round to the second number(5.12)
    document.getElementById("fix").innerHTML = n;
}
