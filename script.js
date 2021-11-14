
// navbar toggle button 

let navLinks = document.querySelector(".nav-links");
function solo() {
navLinks.style.transform = "translateX(0)";}
function semi() {
    navLinks.style.transform = "translateX(-100%)";}

// Text Animation banner 

const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent="";
for(let i=0; i < splitText.length; i++){
text.innerHTML += "<span>"  + splitText[i]   + "</span>";}
let char = 0;
let timer = setInterval(myfun, 100)
function myfun() {
const span = document.querySelectorAll('span')[char];
span.classList.add("fade");
char++;
if(char === splitText.length){
    complete();
    return;}}
function complete() {
clearInterval(timer);
timer = null;}



function showCard(event){
    var x = event.clientX;
    var y = event.clientY;
    
}