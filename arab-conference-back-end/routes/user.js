const controller = require("../controllers/user");

const router = require("express").Router();

router
    .get("/", controller.getAll)
    .get("/:id", controller.getOne)
    .post("/", controller.create)
    .post("/login", controller.login);

module.exports = router;
