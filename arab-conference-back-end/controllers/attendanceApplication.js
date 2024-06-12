const AttendanceApplication = require("../models/attendanceApplication");
const AppError = require("../models/app-error");
const AppResponse = require("../models/app-response");

async function review(req, res) {
    const { id } = req.params;
    const attendanceApplication = await AttendanceApplication.findByIdAndUpdate(
        id,
        {
            status: req.body.status,
        },
        {
            new: true,
            runValidators: true,
        }
    );
    if (!attendanceApplication) {
        throw new AppError("attendanceApplication not found", 404);
    }
    new AppResponse(res, attendanceApplication, 200).send();
}

async function getAll(req, res) {
    const attendanceApplications = await AttendanceApplication.find()
        .populate("attendee")
        .populate("conference");

    new AppResponse(res, attendanceApplications, 200).send();
}

async function getOne(req, res) {
    const { id } = req.params;
    const attendanceApplication = await AttendanceApplication.findById(id)
        .populate("attendee")
        .populate("conference");

    if (!attendanceApplication) {
        throw new AppError("attendanceApplication not found", 404);
    }
    new AppResponse(res, attendanceApplication, 200).send();
}

module.exports = {
    getAll,
    getOne,
    review,
};
