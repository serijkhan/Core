import * as ContactService from "../../services/ContactService.js";

/**
 * Get a contact from server, when the page is loaded
 */
window.addEventListener('DOMContentLoaded', (event) => {
    const contactId = document.baseURI.split("?")[1].split("=")[1];
    if (contactId) {
        ContactService.deleteContact(contactId).then((contactResponse) => {
            if (contactResponse.data) { // if create is success
                window.location.href = "/18-JS-Contact-Manager-App/contacts-ui/admin.html"; // redirect to admin page
            }
        }).catch((error) => {
            console.log(error);
        });
    }
});