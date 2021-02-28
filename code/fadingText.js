/**
 * Fading Text for my name in the nav-bar
 */

const text = document.getElementById('textAni');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i=0; i < splitText.length; i++) {
    text.innerHTML += "<span id=\"green\">" + splitText[i] + "</span>";
    if(splitText[i] === ' ') {
        text.innerHTML += " ";
    }
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;

    if(char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}