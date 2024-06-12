const router = require("express").Router();

// const authRouter = require("./auth");
// const dataRouter = require("./data");
const usersRouter = require("./user");
const topicsRouter = require("./topic");
const conferenceRouter = require("./conference");
const speakerApplicationsRouter = require("./speakerApplication");
const attendanceApplicationsRouter = require("./attendanceApplication");

// router.use("/auth", authRouter);
// router.use("/data", dataRouter);
router.use("/users", usersRouter);
router.use("/topics", topicsRouter);
router.use("/conferences", conferenceRouter);
router.use("/speaker-applications", speakerApplicationsRouter);
router.use("/attendance-applications", attendanceApplicationsRouter);

module.exports = router;
