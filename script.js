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
let close = document.querySelector('#close')
function openpara() {

  para.style.transform="translateY(60px)";
  para.style.opacity="1"
  close.style.transform= 'rotate(45deg)';
return;
}
function clospara() {
  
  para.style.transform="translateY(0)";
  para.style.opacity="0"
  close.style.transform= 'rotate(0deg)';
return;
}
