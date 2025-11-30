//Hover over should change the color from black to green
document.addEventListener("DOMContentLoaded", function () {
    const div = document.getElementById('myDiv');
    div.addEventListener('mouseover', function () {
        div.style.backgroundColor = 'green';   //The hover background color is green. This has to first
    });
    div.addEventListener('mouseout', function () {
        div.style.backgroundColor = 'black'; //goes back to the background color black.
    });
});

//This will make the text change from 'click here' to 'testing 1, 2, 3' when the user clicks on the text
function myFunction() {
    var sentence = "Testing";
    sentence += " 1, 2, 3";
    document.getElementById("Concatenate").innerHTML = sentence;
}
