const mongoose = require('mongoose');

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
            console.log("Database Connected Successfully")
    } catch (error) {
        console.error("Database connection Error:", error )
    }
}

module.exports=connectDb