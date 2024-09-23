var btn1 = document.getElementById('hideskills');
var skillSec1 = document.getElementById('skills-sectionID');
btn1.addEventListener('click', function () {
    if (skillSec1.style.display === 'block') {
        skillSec1.style.display = 'none'; // Make the div visible
    }
    else {
        skillSec1.style.display = 'block'; // Hide the div
    }
});
