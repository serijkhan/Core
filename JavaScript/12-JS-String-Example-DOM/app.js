let printTriangleOne = (str) => {
    let temp = "";
    for (let i = str.length; i >= 1; i--) {
        temp += `${str.substring(0, i)} \n`;
    }
    return temp;
};

const inputElement = document.querySelector('#text-box');
const messageElement = document.querySelector("#message");
inputElement.addEventListener("keyup", (event) => {
    messageElement.textContent = printTriangleOne(event.target.value);
})