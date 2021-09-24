// const users = require('../init_data.json').data;

const table = document.getElementById("user-table");
// const dataFromJSON = JSON.parse("../init_data.json")

createTableFromJSON()

async function createTableFromJSON() {
    const res = await axios.get('./users')
    console.log(res.data)
    return res.data
};


