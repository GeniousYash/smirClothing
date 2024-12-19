const userModel = require("../models/userModel");


module.exports.createUser = async ({firstname, lastname, email, password, phoneNumber}) =>{
    if (!firstname || !email || !password || !phoneNumber){
        throw new Error('All fields are required');
    }
    const user = userModel.create({
        fullname:{
            firstname,
            lastname
        },
        phoneNumber,
        email,
        password
    });

    return user;
}
