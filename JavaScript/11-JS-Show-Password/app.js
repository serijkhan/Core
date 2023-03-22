const checkBoxElement = document.querySelector("#checkbox");
const passwordBoxElement = document.querySelector('#password');
checkBoxElement.addEventListener("change", (event) => {
    if (event.target.checked) {
        passwordBoxElement.setAttribute("type", "text")
    } else {
        passwordBoxElement.setAttribute("type", "password")
    }
})