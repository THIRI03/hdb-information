// app.js
const express = require("express");
// import the router
const indexRouter = require("./main.js");
// create express server
const app = express();
// handling routes request
app.use("/", indexRouter);
app.listen((8082), () => {
    console.log("Server is running...");
})