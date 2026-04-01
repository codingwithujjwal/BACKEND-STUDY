const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

const registerUser= async (req,res) => {
    
    const { username, email, password } = req.body;

    const user = await userModel.create({
        username,email,password
    })



}



module.exports={registerUser}