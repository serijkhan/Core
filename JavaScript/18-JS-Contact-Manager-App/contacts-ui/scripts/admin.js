import * as ContactService from "../../services/ContactService.js";

/**
 * Get all contacts from server, when the page is loaded
 */
window.addEventListener('DOMContentLoaded', (event) => {
    ContactService.getAllContacts().then((response) => {
        const contacts = response.data;
        displayCards(contacts);
    }).catch((error) => {
        console.log(error);
    });
});


/**
 * display the contacts cards
 */
const displayCards = (contacts) => {
    const cardRowElement = document.querySelector('#card-row');
    let cardSnippet = "";
    for (let contact of contacts) {
        cardSnippet += `<div class="col-sm-6">
                <div class="card shadow-lg mt-3">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-sm-3">
                                <img alt=""
                                     class="img-fluid rounded-circle"
                                     src="${contact.imageUrl}">
                            </div>
                            <div class="col-sm-8">
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
                                </ul>
                            </div>
                            <div class="col-sm-1 d-flex flex-column align-items-center">
                                <a class="btn btn-warning" href="view-contact.html?contactId=${contact.id}">
                                    <i class="bi bi-eye"></i>
                                </a>
                                <a class="btn btn-primary mt-2" href="edit-contact.html?contactId=${contact.id}">
                                    <i class="bi bi-pencil"></i>
                                </a>
                                <a class="btn btn-danger mt-2" href="delete-contact.html?contactId=${contact.id}">
                                    <i class="bi bi-trash"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    }
    cardRowElement.innerHTML = cardSnippet;
};















