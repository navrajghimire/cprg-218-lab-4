// Nav bar to ham menu
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('show');
});  
 
 
 
 // Footer
 var currentYear = new Date().getFullYear();
 document.getElementById('current-year').textContent += currentYear;

// Accordion
var acc = document.getElementsByClassName("accordion");


for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}