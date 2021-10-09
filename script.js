const text = document.querySelector(".fancy");

const strText = text.textContent;
const splitText = strText.split("");
console.log(splitText);

text.textContent="";

for(let i=0; i < splitText.length; i++){

text.innerHTML += "<span>"  + splitText[i]   + "</span>";

}
let char = 0;



let timer = setInterval(myfun, 70)

function myfun() {

const span = document.querySelectorAll('span')[char];

span.classList.add("fade");

char++;

if(char === splitText.length){

    complete();

    return;

}

}

function complete() {

clearInterval(timer);

timer = null;

}
let para = document.querySelector('.para');
function openpara() {
  para.style.transform="translateY(0px)";
}