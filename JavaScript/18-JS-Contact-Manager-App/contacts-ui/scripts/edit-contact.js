import * as ContactService from "../../services/ContactService.js";

/**
 * Change Event on Image Url Field
 */
const imageUrlElement = document.querySelector("#image-input");
imageUrlElement.addEventListener('input', (event) => {
    document.querySelector('#display-image').setAttribute("src", event.target.value)
})


/**
 * Get a contact from server, when the page is loaded
 */
window.addEventListener('DOMContentLoaded', (event) => {
    const contactId = document.baseURI.split("?")[1].split("=")[1];
    if (contactId) {
        ContactService.getContact(contactId).then((contactResponse) => {
            const contact = contactResponse.data;
            ContactService.getGroup(contact).then((groupResponse) => {
                const group = groupResponse.data;
                populateContactForm(contact, group);
            }).catch((error) => {
                console.log(error);
            });

        }).catch((error) => {
            console.log(error);
        });
    }
});

/**
 * Form is prefilled with contact data
 * @param contact
 * @param group
 */
const populateContactForm = (contact, group) => {
    if (Object.keys(contact).length > 0 && Object.keys(group).length > 0) {
        document.querySelector("#name-input").value = contact.name;
        document.querySelector("#image-input").value = contact.imageUrl;
        document.querySelector("#mobile-input").value = contact.mobile;
        document.querySelector("#email-input").value = contact.email;
        document.querySelector("#title-input").value = contact.title;
        document.querySelector("#company-input").value = contact.company;
        document.querySelector("#groupId-input").value = contact.groupId;
        document.querySelector('#display-image').setAttribute('src', contact.imageUrl);
    }
};

/**
 * when the form is submitted
 */
const editContactFormElement = document.querySelector('#edit-contact-form');
editContactFormElement.addEventListener('submit', (event) => {
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
    const contactId = document.baseURI.split("?")[1].split("=")[1];
    if (Object.keys(contact).length > 0 && contactId) {
        ContactService.updateContact(contact, contactId).then((response) => {
            if (response.data) { // if create is success
                window.location.href = "/18-JS-Contact-Manager-App/contacts-ui/admin.html"; // redirect to admin page
            }
        }).catch((error) => {
            console.log(error);
        });
    }

})