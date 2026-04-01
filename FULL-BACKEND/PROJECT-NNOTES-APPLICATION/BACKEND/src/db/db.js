const mongoose = require('mongoose');


const connectToDB = async () => {
    await mongoose.connect(
        "mongodb+srv://Ujjwal_Nandi:fE2qQJx7MKjB1rWy@complete-backend.jhne0io.mongodb.net/backend",
    );


    console.log('Connected to DB')
};

module.exports = connectToDB;