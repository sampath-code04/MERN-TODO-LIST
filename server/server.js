const express = require("express");

const cors = require("cors");

// const mongoose = require("mongoose");
const router = require('./routes/routes')

const app = express();

app.use(express.json());
app.use(cors());
require('./models/db')

app.use('/api/tasks', router)


app.listen(5000,(err) => {
    if(err) console.log(err);
    console.log("Server is Running at PORT : 5000");
});