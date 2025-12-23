const express = require('express');
const app = express();
const PORT =  3000;

const dbConnect = require('./db/dbconfig');

const authRoute= require('./routes/authRoute');

// Connect to the database
dbConnect();

app.use(express.json());

app.use("/api/auth",authRoute)

 
app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});