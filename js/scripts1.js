
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
        $('#magic_text').css('color','green');
    },3000);
    setTimeout(function() {
        $('#magic_text').text('What is this magic?');
    },5000);
    setTimeout(function() {
        $('#magic_text').css('color','#777');
    },7000);
}


$(function(){
  $('#start_green button').click(function(){
    $('#start_green').hide();
    $('#start_green').before("<div id='loading_green'>Loading green... <img src='/img/bar_green.gif'></div>");
    setTimeout(function() {
      $('#loading_green').hide();
      $('#finish_green').show();
    } , 5000 );
  });
});


$(function(){
  $('#start_green_and_blue button').click(function(){
    $('#start_green_and_blue').hide();
    $('#start_green_and_blue').before("<div id='loading_green_without_blue'>Loading green... <img src='/img/bar_green.gif'></div>");
    setTimeout(function() {
      $('#start_green_and_blue').before("<div id='loading_green_with_blue'>Loading blue... <img src='/img/bar_blue.gif'></div>");
    } , 2000 );
    setTimeout(function() {
      $('#loading_green_without_blue').hide();
      $('#start_green_and_blue').before("<div id='loading_blue_without_green'>Green finished waiting for blue</div>");
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
