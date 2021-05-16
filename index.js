let btn1 = document.querySelector(`#btn`),
	modal = document.querySelector(`.modal`)

let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn10");
btn1.addEventListener('click', function (){
	modal.style.display = `block`
});

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
};
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
function display() {
    modal.style.display = "block";
};
btn1.onclick = function() {
    modal.style.display = "block";
};
btn2.onclick = function() {
    modal.style.display = "block";
};
btn3.onclick = function() {
    modal.style.display = "block";
};
btn4.onclick = function() {
    modal.style.display = "block";
};
btn5.onclick = function() {
    modal.style.display = "block";
};
btn6.onclick = function() {
    modal.style.display = "block";
};
btn7.onclick = function() {
    modal.style.display = "block";
};
btn8.onclick = function() {
    modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};