const inputElement = document.querySelector("#username-input");
const msgElement = document.querySelector('#msg');
inputElement.addEventListener("keyup", (event) => {
    msgElement.textContent = event.target.value;
});