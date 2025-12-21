//initialize popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

popoverTriggerList.forEach(function (element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover'
    })
});

//initialize toast
var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEL) {
    return new bootstrap.Toast(toastEL)
})

//function to display toast with selected options
function displaySelectedMovieOptions() {
    var movie = document.getElementById('movieSelect').options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById('timeSelect').options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById('quantity').value;

    var message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;

    //Display Toast
    var toastBody = document.getElementById('toastBody');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show()
}

function buyTickets(){
    displaySelectedMovieOptions();
}

//jQuery

//Shrinks header size when the document is scrolled down by 80 px
$(document).on("scroll", function(){
    //When the webpage is scrolled down by 50px this if 
    //statement will trigger
    if($(document).scrollTop() > 50) {
        //One the 50px requirment has been met add the nav-shrink 
        //class selector to the same HTML element that has the
        //nav-class
        $("nav").addClass("nav-shrink");
        //adjust the position of the mobile drop menu to accommodate
        //the new height decrease
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        //if the webpage has not been scrolled down or is back at the 
        //top of the nav-shrink class selector is removed from the HTML
        //element with the nav class selector
        $("nav").removeClass("nav-shrink");
        //The margin for the drop down menu is now returned to it's
        //original amount
        $("div.navbar-collapse").css("margin-top", "14px");
    }
});

//close mobile menu when a nav link is clicked
$(document).ready(function(){
    //On click when and element contains just the nav-link class and not 
    //the dropdown-toggle and then also close when an element with the class 
    //.dropdown-item (each movie link) has been clicked
    $(".navbar-nav").on('click', 'nav-link:not(".dropdown-toggle"), .dropdown-item', function(){
        //collapse the navbar when a link or dropdown item is clicked
        $(".navbar-collapse").collapse('hide');
    });
})