function getMsg() {
    //step 1: stepup the XML HTTP Request object
    let ajaxRequest = new XMLHttpRequest();

    //Get input value of name to display to user after
    //request has been made
    let inputVal = document.getElementById("fullName").value;

    //Function to display user input value once request 
    //has been recieved
    ajaxRequest.onload = function () {
        document.getElementById("tkuMsg").innerHTML = "Thank you " + inputVal + " for signing up!";
    }

    //Step 2: prepare the type of request and what to 
    //request from the server
    ajaxRequest.open('GET', 'response.html', true);

    //Step 3. defines the AJAX response callback method that establishes
    //whether the response was successful and where the data should be 
    //displayed
    ajaxRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('content').innerHTML = ajaxRequest.responseText;
        }
    }

    //Step 4: Send the request
    ajaxRequest.send();
}


//This will replace the content by pressing a button
function replace() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "content.html", true);
  xhttp.send();
}


