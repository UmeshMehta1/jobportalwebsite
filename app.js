const express = require('express');
const app = express();
const PORT =3001;

const dbConnect = require('./db/dbconfig');

const authRoute= require('./routes/authRoute');
const jobRoute= require("./routes/jobRoute");
const applicationRoute= require("./routes/applicationRoute");
const cors = require('cors');
// Connect to the database
dbConnect();

app.use(cors({ origin: "*" }));

app.use(express.json());

app.use("/api/auth",authRoute)
app.use("/api/jobs",jobRoute)
app.use("/api/application",applicationRoute)
 
app.get('/', (req, res) => {
    res.send('Hello World!');
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});