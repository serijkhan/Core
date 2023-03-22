import * as ContactService from "../../services/ContactService.js";

/**
 * Change Event on Image Url Field
 */
const imageUrlElement = document.querySelector("#image-input");
imageUrlElement.addEventListener('input', (event) => {
    document.querySelector('#display-image').setAttribute("src", event.target.value)
})


/**
 * when the form is submitted
 */
const addContactFormElement = document.querySelector('#add-contact-form');
addContactFormElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const contact = {
        name: document.querySelector("#name-input").value,
        imageUrl: document.querySelector("#image-input").value,
        mobile: document.querySelector("#mobile-input").value,
        email: document.querySelector("#email-input").value,
        company: document.querySelector("#company-input").value,
        title: document.querySelector("#title-input").value,
        groupId: document.querySelector("#groupId-input").value
    };

    if (Object.keys(contact).length > 0) {
        ContactService.createContact(contact).then((response) => {
            if (response.data) { // if create is success
                window.location.href = "/18-JS-Contact-Manager-App/contacts-ui/admin.html"; // redirect to admin page
            }
        }).catch((error) => {
            console.log(error);
        });
    }

})
