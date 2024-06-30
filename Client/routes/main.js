//Name: Thiri Lae Win
//Class: DIT/1B/10
//Admin No: 2340739

// import express module
const express = require("express");
const router = express.Router();
const path = require("path");
// using static files such as CSS
router.use(express.static(__dirname));
// handling request using router
router.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
})
// export the router
module.exports = router;