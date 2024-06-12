const controller = require("../controllers/conference");

const router = require("express").Router();

router
    .get("/", controller.getAll)
    .get("/:id", controller.getOne)
    .post("/", controller.create)
    .put("/:id", controller.update)
    .post("/:id/speaker-applications", controller.applyAsSpeaker)
    .post("/:id/attendance-applications", controller.applyAsAttendee);

module.exports = router;
