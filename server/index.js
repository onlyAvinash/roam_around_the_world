// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const db = require('./db/db');
const login=require("./routes/login");
const app = express();
app.use(express.json());
app.use(login);
app.listen(3000,()=>console.log("server"));