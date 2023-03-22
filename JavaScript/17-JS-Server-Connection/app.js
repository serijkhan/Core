const getUsersDataFromServer = () => {
    let serverUrl = "https://randomuser.me/api?results=100";
    axios.get(serverUrl).then((response) => {
        let theResponseObj = response.data;
        let userList = theResponseObj.results;
        displayUsersData(userList);
    }).catch((error) => {
        console.error(error);
    });
};

const theButtonElement = document.querySelector('#get-data-btn');
theButtonElement.addEventListener('click', () => {
    getUsersDataFromServer();
})

const displayUsersData = (userList) => {
    const tableBodyElement = document.querySelector("#table-body");
    let tableRows = "";
    let count = 0;
    for (let user of userList) {
        count++;
        tableRows += `<tr>
                        <td>${count}</td>
                        <td>${user.login.uuid.substring(user.login.uuid.length - 5)}</td>
                        <td>
                               <img src="${user.picture.large}" alt="" width="100" height="100">
                        </td>
                        <td>${user.name.title} ${user.name.first} ${user.name.last}</td>
                        <td>${user.dob.age} Yrs</td>
                        <td>${user.email}</td>
                        <td>${user.location.state}, ${user.location.country}</td>
                      </tr>`;
    }
    tableBodyElement.innerHTML = tableRows;
};




















