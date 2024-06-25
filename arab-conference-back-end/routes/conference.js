const controller = require("../controllers/conference");

const router = require("express").Router();
const authMiddleware = require('./../middlewares/auth');

router
    .get("/", controller.getAll)
    .get("/:id", controller.getOne)
    .post("/",authMiddleware, controller.create)
    .put("/:id",authMiddleware,authMiddleware, controller.update)
    .post("/:id/speaker-applications",authMiddleware, controller.applyAsSpeaker)
    .post("/:id/attendance-applications",authMiddleware, controller.applyAsAttendee);

module.exports = router;
