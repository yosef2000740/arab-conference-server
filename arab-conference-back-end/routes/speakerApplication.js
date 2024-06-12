const controller = require("../controllers/speakerApplication");

const router = require("express").Router();

router
    .get("/", controller.getAll)
    .get("/:id", controller.getOne)
    .post("/:id/review", controller.review);

module.exports = router;
