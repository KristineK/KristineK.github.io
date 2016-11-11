
function show(id, value) {
  document.getElementById(id).style.visibility = value ? 'visible' : 'hidden';
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.menu_button')) {
    var dropdowns = document.getElementsByClassName("sub-nav");
    show("base_menu", false);
    show("sync_menu", false);
  }
} 

function numberValidation() {
    show("ch1_error", false);
    var x, text, giveAnswer;

    x = document.getElementById("numb").value;
    showError = true;

    if (!x || 0 === x.length || /^\s*$/.test(x)) {
        text = "You haven't entered anything";
    } else if (isNaN(x)) {
        text = "Please enter a number";
    } else if (x < 49) {
        text = "Number is too small";
    } else if (x > 101) {
        text = "Number is too big";
    } else {
        showError = false;
        alert("Square of " + x + " is " + Math.sqrt(x).toFixed(2));
    }
    if (showError) {
      show("ch1_error", true);
      document.getElementById("ch1_error").innerHTML = text;
    }
}


function alertSummoning() {
    show("textForAlerts", false);
    alert("I am an alert box!");
}

function conformationOrDenial() {
    show("textForAlerts", true);
    var x;
    if (confirm("Press a button!") == true) {
        x = "Why on earth have you agreed to it?!";
    } else {
        x = "You have dared to deny me!";
    }
    document.getElementById("textForAlerts").innerHTML = x;
}

function clickToEnterNumber() {
    show("textForAlerts", true);
    var text;
    var number = prompt("Please enter a number", "");
    var randomNumber = Math.random();
    
    if (number != null) {
        if (number == randomNumber) {
          text = "Yes, the number is indeed " + number + "! How are you today?";
        } else if (number == 42) {
          text = "Now that you know the answer, do you remeber the question?"
        } else {
          text = "Wrong! It is " + randomNumber + " instead of " + number
        }
        document.getElementById("textForAlerts").innerHTML = text;
    }
}
