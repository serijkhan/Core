const inputNumberElement = document.querySelector("#req-number");
const multiplierRangeElement = document.querySelector("#multiplier");
const displayStartMathElement = document.querySelector("#number");
const displayMultiplierElement = document.querySelector("#multi");
const displayResultElement = document.querySelector("#result");

// Keyup event on input
inputNumberElement.addEventListener('keyup', (event) => {
    if (event.target.value !== "") {
        let enteredNumber = Number(event.target.value);
        displayStartMathElement.textContent = enteredNumber.toString();
    } else {
        displayStartMathElement.textContent = "1";
    }
    calculate();
})

// input event on range
multiplierRangeElement.addEventListener('input', (event) => {
    let selectedRangeNumber = Number(event.target.value);
    displayMultiplierElement.textContent = selectedRangeNumber.toString();
    calculate();
})

// calculate
const calculate = () => {
    let startNumber = Number(displayStartMathElement.textContent);
    let multiplier = Number(displayMultiplierElement.textContent);
    let result = startNumber * multiplier;
    displayResultElement.textContent = result.toString();
};