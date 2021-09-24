// const users = require('../init_data.json').data;

// const table = document.getElementById("user-table");
// const dataFromJSON = JSON.parse("../init_data.json")

let usersArray = []

async function getData() {
    const res = await axios.get('./users')
    console.log(res.data)
    usersArray.push(res.data)
    populateTable()
    return res.data
};

function populateTable() {
    for(let x = 0; x < usersArray[0].length; x++) {
        $('#user-table').append(`<tr>
                        <td>${usersArray[0][x].id}</td>
                        <td>${usersArray[0][x].email}</td>
                        <td>${usersArray[0][x].firstName}</td>
                        <td>${usersArray[0][x].lastName}</td>
                        <td>${usersArray[0][x].state}</td>
                                </tr>`)
    }
};

getData();


