const mongoose = require('mongoose');

const dbConnect =async()=>{
    try{
        await mongoose.connect("mongodb+srv://hello:hello@cluster0.15oq9gx.mongodb.net/?appName=Cluster0")
        console.log('Database connected successfully');

    }catch(err){
        console.error('Database connection error:', err);
    }
}


module.exports = dbConnect;




