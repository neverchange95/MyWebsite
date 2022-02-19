/**
 * Fading text for the welcome text on index.html
 */

const welcomeText = document.getElementById('h1_welcome');
const strTextWelcome = welcomeText.textContent;
const splitTextWelcome = strTextWelcome.split("");
welcomeText.textContent = "";

for(let i=0; i < splitTextWelcome.length; i++) {
    welcomeText.innerHTML += "<span id=\"white\">" + splitTextWelcome[i] + "</span>";
    if(splitTextWelcome[i] === ',') {
        welcomeText.innerHTML += "<br>";
    }
    if(splitTextWelcome[i] === ' ') {
        welcomeText.innerHTML += " ";
    }
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = welcomeText.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;

    if(char === splitTextWelcome.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}