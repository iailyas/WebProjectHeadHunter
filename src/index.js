const express = require("express");
const asyncRouter = require("async-express-router");
const mongo = require("./mongo/Mongo");
const loader = require("./loader");
// Solution to Try Catch Problem for Global Exception Handling
const app = express();
asyncRouter(app);
// Mongodb module
app.use(loader);

app.listen(8080, () => console.log("Server is started"));
