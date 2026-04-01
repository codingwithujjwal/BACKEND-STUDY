const mongoose = require("mongoose");


const connectToDB= async () => {
    try {
        
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Database connected Successfully")


    } catch (error) {
        console.log("Database connection error", error)
    }
}

module.exports = connectToDB;