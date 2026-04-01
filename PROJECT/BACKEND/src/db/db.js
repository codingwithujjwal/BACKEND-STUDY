const mongoose = require("mongoose");
require('dotenv').config()
const connectToDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  console.log('Connect to DB');
};


module.exports=connectToDB
