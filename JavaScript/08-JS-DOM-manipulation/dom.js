console.log(document);
console.log(document.head);
console.log(document.title);
console.log(document.body);

document.title = "Title Changed";

const h1Element = document.querySelector('h1');
console.log(h1Element);
h1Element.innerText = "Welcome to DOM";

// styles
const applyStyles = () => {
    h1Element.style.color = "teal";
    h1Element.style.backgroundColor = "lightgrey";
    h1Element.style.padding = "10px";
    h1Element.style.fontFamily = "Calibri, sans-serif";
    h1Element.style.width = "300px";
    h1Element.style.textAlign = "center";
};

const buttonElement = document.querySelector('#btn');
buttonElement.addEventListener('click', applyStyles);

