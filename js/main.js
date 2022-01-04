// Get the container element
var navSelector = document.getElementById("navSelector");

// Get all buttons with class="btn" inside the container
var items = navSelector.getElementsByClassName("select");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("selected");
    current[0].className = current[0].className.replace(" selected", "");
    this.className += " selected";
  });
}


$('.no-collapsable').on('click', function(e) {
    e.stopPropagation();
});
