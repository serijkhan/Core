import * as ContactService from "../../services/ContactService.js";

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
                displayContact(contact, group);
            }).catch((error) => {
                console.log(error);
            });

        }).catch((error) => {
            console.log(error);
        });
    }
});

/**
 * display contact on card
 */
const displayContact = (contact, group) => {
    const cardRowElement = document.querySelector("#card-row");
    let contactCardSnippet = "";
    if (Object.keys(contact).length > 0 && Object.keys(group).length > 0) {
        contactCardSnippet += `<div class="col-sm-3">
                <img alt="" class="img-fluid rounded-circle"
                     src="${contact.imageUrl}">
            </div>
            <div class="col-sm-7">
                <ul class="list-group">
                    <li class="list-group-item">
                        Name : <span class="fw-bold">${contact.name}</span>
                    </li>
                    <li class="list-group-item">
                        Email : <span class="fw-bold">${contact.email}</span>
                    </li>
                    <li class="list-group-item">
                        Mobile : <span class="fw-bold">${contact.mobile}</span>
                    </li>
                    <li class="list-group-item">
                        Company : <span class="fw-bold">${contact.company}</span>
                    </li>
                    <li class="list-group-item">
                        Title : <span class="fw-bold">${contact.title}</span>
                    </li>
                    <li class="list-group-item">
                        Group : <span class="fw-bold">${group.name}</span>
                    </li>
                </ul>
            </div>`;
    }
    cardRowElement.innerHTML = contactCardSnippet;
};