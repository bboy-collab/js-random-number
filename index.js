const myButton = document.getElementById('myButton')
const label1 = document.getElementById('label1')
const label2 = document.getElementById('label2')
const label3 = document.getElementById('label3')
const min=1;
const max=6;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}
 
let holdStart;
let cheatActive = false;

document.addEventListener("keydown", (event) => {
    if (event.key === " " && event.shiftKey) {
        holdStart = Date.now();
    }
});

document.addEventListener("keyup", (event) => {
    if (event.key === " ") {
        const holdTime = Date.now() - holdStart;

        if (holdTime >= 3000) {
            cheatActive = true;
        }
    }
});

myButton.addEventListener("mousedown", (event) => {
    if (event.shiftKey) {
        holdStart = Date.now();
    }
});

myButton.addEventListener("mouseup", (event) => {
    if (event.shiftKey) {
        const holdTime = Date.now() - holdStart;

        if (holdTime >= 3000) {
            cheatActive = true;
        }
    }
});

myButton.onclick = function () {

    if (cheatActive) {
        label1.textContent = max;
        label2.textContent = max;
        label3.textContent = max;

        cheatActive = false;
        return;
    }

    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;

    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
}; 