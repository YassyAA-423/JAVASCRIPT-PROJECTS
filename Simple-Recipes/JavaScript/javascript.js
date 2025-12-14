//Recipe Pop-up modal section

//Sets up the button that will open the recipe modal
var btns = document.querySelectorAll("input.modal-button");

//Defines all modals for each recipe
var modals = document.querySelectorAll(".recipe-modal");

//Get the <span> element that closes the model
var closeBtn = document.getElementsByClassName("close-btn");

//when the user clicks the recipes button, open the modal
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (event) {
        modal = document.querySelector(event.target.getAttribute("href"));
        modal.style.display = "block";
    }
}

//when the user clicks on <span> (x) closes the modal
for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        for (var index in modals) {
            if (modals[index].style) {
                modals[index].style.display = "none";
            }
        }
    }
}

//setTimeout will close the modal after 10 seconds
for (var i = 0; i < closeBtn.length; i++) {
    btns[i].onclick = function (event) {
        modal = document.querySelector(event.target.getAttribute("href"));
        modal.style.display = "block";
        setTimeout(() => {
            modal.style.display = "none";
        }, 10000);
    }
}


//Email Validation
document.getElementById('contactForm').addEventListener('submit',
    function (event) {
        //overrides the default broswer refresh when the submit 
        //button is pressed
        event.preventDefault();
        //Variables to validate that each field is filled out
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        //email pattern checks for all symbols that would be needed for and email address
        //such as the @ and . and the text that would come before, between and after
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        //Use this variable to display messages if fields are filled out or thank you message
        const valMsg = document.getElementById('validateMsg');

        if (!firstName || !lastName || !phone || !message) {
            //checks if fields have been filled out
            valMsg.innerHTML = '<p style="color: red;">Please fill out all empty fields</p>';
        } else if (!emailPattern.test(email)) {
            //check if there is a valid email
            valMsg.innerHTML = '<p style="color: red;">Please enter a valid email address</p>'
        } else {
            //if all fields are filled out correctly displays thank you message
            valMsg.innerHTML = '<p style="color: red;">Thank you for submitting!</p>'
        }
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message,
            subscribe: document.getElementById('subscription').checked
        };
        //Displays what the user wrote in the console
        console.log(JSON.stringify(formData))
    }
)

