const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = 7000;


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


connectDB();



app.listen(port, () => console.log(`listen ib port ${port}`));