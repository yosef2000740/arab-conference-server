const controller = require("../controllers/user");
//
// const router = require("express").Router();
//
// router
//     .get("/", controller.getAll)
//     .get("/:id", controller.getOne)
//     .post("/", controller.create)
//     .post("/login", controller.login);
//
// module.exports = router;


const express = require('express');
const router = express.Router();
const authMiddleware = require('./../middlewares/auth');

router
    .get("/", controller.getAll)
    .get("/:id", controller.getOne)
    .post("/", controller.create)
    .post("/login", controller.login);


module.exports = router;
