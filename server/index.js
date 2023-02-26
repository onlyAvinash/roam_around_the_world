const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const db = require('./db');
const storyRouter = require("./router/story");
const loginRoutes=require("./router/login");
const app = express();
const apiPort = process.env.PORT || 5000;

app.use(express.json());

app.use(morgan("common"));

app.use("/api/story", storyRouter);
app.use(loginRoutes);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));