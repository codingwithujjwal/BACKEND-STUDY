require('dotenv').config();
const app = require("./src/app");
const connectedToDB = require("./src/db/db");

connectedToDB();

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})