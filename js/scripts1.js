
function show(id, value) {
  document.getElementById(id).style.visibility = value ? 'visible' : 'hidden';
}

$( document ).ready(function() {
    $("#header").load("/test-sample/menu.html");
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
    $('#start_green').before("<div id='loading_green'><img src='/img/green-loader.gif'> Loading <label style=\"color: green;\">green</label>...</div>");
    setTimeout(function() {
      $('#loading_green').hide();
      $('#finish_green').show();
    } , 4500 );
  });
});


$(function(){
  $('button#start_green_and_blue').click(function(){
    $('#start_green_and_blue').hide();
    $('#start_green_and_blue').before("<div id='loading_green_without_blue'><img src='/img/green-loader.gif'> Loading <label style=\"color: green;\">green</label>...</div>");
    setTimeout(function() {
      $('#start_green_and_blue').before("<div id='loading_green_with_blue'><img src='/img/blue-loader.gif'> Loading <label style=\"color: blue;\">blue</label>...</div>");
    } , 2000 );
    setTimeout(function() {
      $('#loading_green_without_blue').hide();
      $('#start_green_and_blue').before("<div id='loading_blue_without_green'><i class=\"fa fa-tint\" style=\"font-size:24px;color:green\"></i> <label style=\"color: green;\">Green</label> finished waiting for <label style=\"color: blue;\">blue</label></div>");
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

function openModalForAddPerson() {
    document.getElementById("modal_button").innerHTML = "Add";
    document.getElementById("name").value = "";
    document.getElementById("job").value = "";
    document.getElementById("modal_button").setAttribute("onclick", "addPersonToList()");
    showPeopleList(false, "Add person");
}

function openModalForEditPerson(index) {
    var editPersion = document.getElementById("person" + index);
    document.getElementById("name").value = editPersion.getElementsByClassName("name")[0].innerHTML;
    document.getElementById("job").value = editPersion.getElementsByClassName("job")[0].innerHTML;
    document.getElementById("modal_button").innerHTML = "Edit";
    document.getElementById("modal_button").setAttribute("onclick", "editPersonToList(" + index + ")");
    showPeopleList(false, "Edit person");
}

function addPersonToList() {
    var idForNewPersion;
    var newPersion;

    var lastPersionIndex = document.getElementById("listOfPeople").getElementsByTagName("li").length;
    if (lastPersionIndex > 0) {
        var lastPersionId = document.getElementById("listOfPeople").getElementsByTagName("li")[lastPersionIndex - 1].getAttribute("id");
        idForNewPersion = parseInt(lastPersionId.replace(/person/, "")) + 1;
    } else
        idForNewPersion = 0;

    newPersion = '<li class="w3-padding-16" id="person' + idForNewPersion + '">';
    newPersion += "<span onclick=\"deletePerson(" + idForNewPersion + ")\" class=\"w3-closebtn w3-padding w3-margin-right w3-medium\">&times;</span>";
    newPersion += "<span onclick=\"openModalForEditPerson(" + idForNewPersion + ")\"  class=\"w3-closebtn w3-padding w3-margin-right w3-medium\">";
    newPersion += '<i class="fa fa-pencil"></i>';
    newPersion += '</span>';
    newPersion += '<span class="w3-xlarge name">' + document.getElementById("name").value +'</span><br>';
    newPersion += '<span class="job">' + document.getElementById("job").value + '</span>';
    newPersion += '</li>';

    document.getElementById("listOfPeople").innerHTML += newPersion;
    showPeopleList(true);
}


function editPersonToList(index) {
    var editPerson = document.getElementById("person" + index);
    editPerson.getElementsByClassName("name")[0].innerHTML = document.getElementById("name").value;
    editPerson.getElementsByClassName("job")[0].innerHTML = document.getElementById("job").value;
    showPeopleList(true);
}

function showPeopleList(show, text = "People with jobs") {
    document.getElementById("addEditPerson").style.display = show ? "none" : "block";
    document.getElementById("listOfPeople").style.display = show ? "block" : "none";
    document.getElementById("addPersonBtn").style.display = show ? "block" : "none";
    document.getElementsByTagName("h2")[0].innerHTML = text;
}

function deletePerson(index) {
    document.getElementById("person" + index).remove();
}

function show_fd_review() {
    var thx_text = "<div class=\"w3-card-4\"><header class=\"w3-container w3-light-grey\">";
      // <div class="w3-card-4" style="width:70%">
    // <header class="w3-container w3-light-grey">
    var personName = document.getElementById("fb_name").value;
    thx_text += "<h2>Is this the feedback you want to give us?</h2>";
    thx_text += "</header><div class=\"w3-container\">"
    thx_text += "<p>Your name: " + document.getElementById("fb_name").value + "</p>";
    thx_text += "<p>Your age: " + document.getElementById("fb_age").value + "</p>";

    thx_text += "<p>Your language: ";
    var languages = document.querySelectorAll("input[type=\"checkbox\"]:checked");
    var one_lang = false;
console.log("asdfdghjj");
    if (languages != null) {
console.log(languages);
console.log(languages.length);
        for (var i = 0; i < languages.length; i++) {
                console.log(i);
            if (languages[i].checked){
                console.log(i + "checked");
                if (one_lang) {
                    thx_text += ", "
                }
                thx_text += document.querySelector('label[for="' + languages[i].value + '"]').innerHTML;
                one_lang = true;
            }
        }
    }



    gender_label = document.querySelector('label[for="' + document.querySelector('input[name="gender"]:checked').value + '"]');
    thx_text += "</p><p>Your genre: ";
    if (gender_label != null) {
        thx_text += gender_label.innerHTML;
    }

    thx_text += "</p><p>Your option of us: " + document.getElementById("like_us").options[document.getElementById("like_us").selectedIndex].text + "</p>";
    thx_text += "<p>Your comment: " + document.getElementsByTagName("textarea")[0].value + "</p>";

    thx_text += "</div><div class=\"w3-btn-group\"><button class=\"w3-btn w3-green w3-xlarge\" onclick=\"show_thanks()\"  style=\"width:50%\">Yes</button>"
    thx_text += "<button class=\"w3-btn w3-red w3-xlarge\" onclick=\"show_fb_edit()\" style=\"width:50%\">No</button></div></div>"
    document.getElementById('fb_thx').innerHTML = thx_text;
    document.getElementById('fb_form').style.display = "none";
    document.getElementById('fb_thx').style.display = "block";
}

function show_fb_edit(){
    document.getElementById('fb_form').style.display = "block";
    document.getElementById('fb_thx').style.display = "none";
}

function show_thanks() {
    var thx_text = "<div class=\"w3-panel w3-green\">";
    var personName = document.getElementById("fb_name").value;
    if (!personName || 0 === personName.length || /^\s*$/.test(personName)) {
        thx_text += "<h2>Thank you for your feedback!</h2>";
    } else {
        thx_text += "<h2>Thank you, " + document.getElementById("fb_name").value + ", for your feedback!</h2>";
    }

    thx_text += "</div>"
    document.getElementById('fb_thx').innerHTML = thx_text;
    document.getElementById('fb_form').style.display = "none";
    document.getElementById('fb_thx').style.display = "block";
}