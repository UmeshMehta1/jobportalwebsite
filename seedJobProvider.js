
const bcrypt = require('bcrypt');
const authModel = require('./model/authModel');
const { response } = require('express');


const jobProviderSeeded = async (req,res) => {

    const jobProvider = await authModel.findOne({ email: "helloprovider123@gmail.com"})

    // If job provider already exists, do not create again
console.log("jobProvider",jobProvider)
    // return
    if(jobProvider) {
       return console.log("jobProviderSeeded user already exists!");
    }
    // Create job provider user
    await authModel.create({
        username: "Umesh mehta",
        email:"helloprovider123@gmail.com",
        password: bcrypt.hashSync("hello123", 10),
        role: "jobprovider"
    })
    console.log("jobProviderSeeded user created successfully!");
}

module.exports = jobProviderSeeded;