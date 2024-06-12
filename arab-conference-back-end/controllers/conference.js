const Conference = require("../models/conference");
const SpeakerApplication = require("../models/speakerApplication");
const AttendanceApplication = require("../models/attendanceApplication");

const AppError = require("../models/app-error");
const AppResponse = require("../models/app-response");

async function create(req, res) {
    const conference = new Conference(req.body);
    await conference.save();
    new AppResponse(res, conference, 201).send();
}

async function update(req, res) {
    const { id } = req.params;
    const conference = await Conference.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!conference) {
        throw new AppError("conference not found", 404);
    }
    new AppResponse(res, conference, 200).send();
}

async function getAll(req, res) {
    const conferences = await Conference.find();

    new AppResponse(res, conferences, 200).send();
}

async function getOne(req, res) {
    const { id } = req.params;
    const conference = await Conference.findById(id)
        .populate("topics")
        .populate("speakerApplications")
        .populate("attendanceApplications");

    if (!conference) {
        throw new AppError("conference not found", 404);
    }
    new AppResponse(res, conference, 200).send();
}

async function applyAsSpeaker(req, res) {
    const { id } = req.params;

    const { speaker } = req.body;
    const conference = await Conference.findById(id).populate(
        "speakerApplications"
    );

    if (!conference) {
        throw new AppError("conference not found", 404);
    }

    const application = conference.speakerApplications.find(
        (app) => app.speaker == speaker
    );

    if (application) {
        throw new AppError("You have already applied", 400);
    }

    const speakerApplication = await SpeakerApplication.create({
        speaker,
        conference: id,
    });

    conference.speakerApplications.push(speakerApplication);
    await conference.save();

    new AppResponse(res, conference, 200).send();
}

async function applyAsAttendee(req, res) {
    const { id } = req.params;

    const { attendee } = req.body;
    const conference = await Conference.findById(id).populate(
        "attendanceApplications"
    );

    if (!conference) {
        throw new AppError("conference not found", 404);
    }

    const application = conference.attendanceApplications.find(
        (app) => app.attendee == attendee
    );

    if (application) {
        throw new AppError("You have already applied", 400);
    }

    const attendanceApplication = await AttendanceApplication.create({
        attendee,
        conference: id,
    });

    conference.attendanceApplications.push(attendanceApplication);
    await conference.save();

    new AppResponse(res, conference, 200).send();
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    applyAsSpeaker,
    applyAsAttendee,
};
