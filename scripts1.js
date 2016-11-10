/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    show("base_menu", "show")
    // document.getElementById("base_menu").classList.toggle("show");
}

function show(id, value) {
    document.getElementById(id).style.visibility = value ? 'visible' : 'hidden';
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 