const btn1 = document.getElementById('hideskills') as HTMLButtonElement;
const skillSec1= document.getElementById('skills-sectionID') as HTMLLIElement;
btn1.addEventListener('click', () => {
    if (skillSec1.style.display === 'block') {
        skillSec1.style.display = 'none'; // Make the div visible
    } else {
        skillSec1.style.display = 'block';  // Hide the div
    }

})
