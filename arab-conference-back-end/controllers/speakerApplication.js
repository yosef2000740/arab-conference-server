const SpeakerApplication = require("../models/speakerApplication");
const AppError = require("../models/app-error");
const AppResponse = require("../models/app-response");

async function review(req, res) {
    const { id } = req.params;
    const speakerApplication = await SpeakerApplication.findByIdAndUpdate(
        id,
        {
            status: req.body.status,
        },
        {
            new: true,
            runValidators: true,
        }
    );
    if (!speakerApplication) {
        throw new AppError("speakerApplication not found", 404);
    }
    new AppResponse(res, speakerApplication, 200).send();
}

async function getAll(req, res) {
    const speakerApplications = await SpeakerApplication.find()
        .populate("speaker")
        .populate("conference");

    new AppResponse(res, speakerApplications, 200).send();
}

async function getOne(req, res) {
    const { id } = req.params;
    const speakerApplication = await SpeakerApplication.findById(id)
        .populate("speaker")
        .populate("conference");

    if (!speakerApplication) {
        throw new AppError("speakerApplication not found", 404);
    }
    new AppResponse(res, speakerApplication, 200).send();
}

module.exports = {
    getAll,
    getOne,
    review,
};
