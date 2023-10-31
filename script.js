const result = document.getElementById("result");
const form = document.querySelector("form");
let counter = 1;

function upperCase() {
    fontSizeIncrease()
    const input = document.getElementById("input").value;
    return input.toUpperCase();
}

function counterIncrease() {
    return ++counter;
}

function fontSizeIncrease() {
    let fontSize = counter * 10;
    counterIncrease();
    return result.style.fontSize = fontSize + "px";
}

function appRun(event) {
    event.preventDefault();
    return result.innerHTML = upperCase();
}

form.addEventListener("submit", appRun);

