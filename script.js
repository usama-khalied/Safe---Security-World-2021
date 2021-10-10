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
let close = document.querySelector('#close');
let rotateIcon = false;
function openpara() {
  rotateIcon = !rotateIcon;
  if (rotateIcon) {
    close.style.transform = 'rotate(45deg)';
    para.style.opacity="1";
    para.style.transform='translateY(10px)';
  } else {
    close.style.transform = 'rotate(0deg)';
    para.style.opacity="0";
    para.style.transform='translateY(0px)';


  }
}
let paragraph = document.querySelector('.paragraph');
let close2 = document.querySelector('#close2');
let round = false;
function anime(){
  round = !round;
  if(round){
 paragraph.style.opacity="1";
 close2.style.transform='rotate(45deg)';
 paragraph.style.transform='translateY(10px)';
}
else{
  paragraph.style.opacity="0";
  close2.style.transform='rotate(0deg)';
  paragraph.style.transform='translateY(0px)';
}
}

let write = document.querySelector('.write');
let lord = false;
close3 = document.querySelector('#close3');
function just(){
  lord = !lord;
  if(lord){
close3.style.transform='rotate(45deg)';
write.style.opacity="1";
write.style.transform='translateY(20px)';
}
else {
  close3.style.transform='rotate(0deg)';
write.style.opacity="0";
write.style.transform='translateY(0px)';
}
}
