
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