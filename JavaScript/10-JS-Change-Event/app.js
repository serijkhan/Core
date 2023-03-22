const selectElement = document.querySelector('#lang-select');
const displayElement = document.querySelector('#lang-option');
selectElement.addEventListener('change', (event) => {
    displayElement.innerHTML = `<span style="color: red">${event.target.value}</span>`;
})