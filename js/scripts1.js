
function show(id, value) {
  document.getElementById(id).style.visibility = value ? 'visible' : 'hidden';
}

window.onclick = function(event) {
  if (!event.target.matches('.menu_button')) {
    show("base_menu", false);
    show("sync_menu", false);
  }
}

$( document ).ready(function() {
    $("#header").load("/menu.html");
});

function magic(){
    setTimeout(function() {
        $('#magic_text p').css('color','green');
    },3000);
    setTimeout(function() {
        $('#magic_text p').text('What is this magic? It\'s dev magic~');
    },5000);
    setTimeout(function() {
        $('#magic_text p').css('color','#777');
    },7000);
}

function prepare_blue(){
    $('#green_and_blue_loader').hide();
    setTimeout(function() {
        $('#green_and_blue_loader').show();
    },1500);
}

$(function(){
  $('button#start_green').click(function(){
    $('#start_green').hide();
    $('#start_green').before("<div id='loading_green'>Loading <label style=\"color: green;\">green</label>... <img src='/img/green-loader.gif'></div>");
    setTimeout(function() {
      $('#loading_green').hide();
      $('#finish_green').show();
    } , 4500 );
  });
});


$(function(){
  $('button#start_green_and_blue').click(function(){
    $('#start_green_and_blue').hide();
    $('#start_green_and_blue').before("<div id='loading_green_without_blue'>Loading <label style=\"color: green;\">green</label>... <img src='/img/green-loader.gif'></div>");
    setTimeout(function() {
      $('#start_green_and_blue').before("<div id='loading_green_with_blue'>Loading <label style=\"color: blue;\">blue</label>... <img src='/img/blue-loader.gif'></div>");
    } , 2000 );
    setTimeout(function() {
      $('#loading_green_without_blue').hide();
      $('#start_green_and_blue').before("<div id='loading_blue_without_green'><label style=\"color: green;\">Green</label> finished waiting for <label style=\"color: blue;\">blue</label></div>");
    } , 4000 );
    setTimeout(function() {
      $('#loading_green_with_blue').hide();
      $('#loading_blue_without_green').hide();
      $('#finish_green_and_blue').show();
    } , 7000 );
  });
});


function showTextByClickingButton(is_seen) {
    show("show_me", is_seen);
    document.getElementById("show_text").disabled = is_seen;
    document.getElementsByName("hide_text")[0].disabled = (! is_seen);
}

function numberValidation() {
    var x, text, giveAnswer;

    x = document.getElementById("numb").value;
    document.getElementById("numb").className = "w3-input w3-border w3-pale-red required";

    if (!x || 0 === x.length || /^\s*$/.test(x)) {
        text = "You haven't entered anything";
    } else if (x == 'bug') {
        text = "Yes, this form has 6 <i>features</i>, which some people call <i>bugs</i> you just found 1";
    } else if (isNaN(x)) {
        text = "Please enter a number";
    } else if (x < 0) {
        text = ""
    } else if (x == 666) {
        text = "";
        document.getElementById("numb").className = "w3-input w3-border w3-light-grey required";
    } else if (x == 13) {
        text = "Number is too small";
        document.getElementById("numb").className = "w3-input w3-border w3-red required";
    } else if (x == 42) {
        text = ""
        alert("Sorry you have asked the wrong answer");
        document.getElementById("numb").value = null;
        document.getElementById("numb").className = "w3-input w3-border w3-light-grey required";
    } else if (x < 49) {
        text = "Number is too small";
    } else if (x > 100) {
        text = "Number is too big";
    } else {
        text = ""
        alert("Square of " + x + " is " + Math.sqrt(x).toFixed(2));
        document.getElementById("numb").value = null;
        document.getElementById("numb").className = "w3-input w3-border w3-light-grey required";
    }
    document.getElementById("ch1_error").innerHTML = text;
}


function alertSummoning() {
    show("textForAlerts", false);
    alert("I am an alert box!");
}

function conformationOrDenial() {
    show("textForAlerts", true);
    var x;
    if (confirm("Press a button!") == true) {
        x = "<i>Why on earth have you agreed to it?!</i>";
        document.getElementById("textForAlerts").className = "w3-slim";
    } else {
        x = "<b>You have dared to deny me!!!</b>";
        document.getElementById("textForAlerts").className = "w3-wide";
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
        document.getElementById("textForAlerts").className = "";
        document.getElementById("textForAlerts").innerHTML = text;
    } else {
      show("textForAlerts", false);
    }
}
