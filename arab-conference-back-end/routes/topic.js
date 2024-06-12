const controller = require("../controllers/topic");

const router = require("express").Router();

router
    .get("/", controller.getAll)
    .get("/:id", controller.getOne)
    .post("/", controller.create)
    .put("/:id", controller.update);

module.exports = router;
