const Topic = require("../models/topic");
const AppError = require("../models/app-error");
const AppResponse = require("../models/app-response");

async function create(req, res) {
    const topic = new Topic(req.body);
    await topic.save();
    new AppResponse(res, topic, 201).send();
}

async function update(req, res) {
    const { id } = req.params;
    const topic = await Topic.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!topic) {
        throw new AppError("topic not found", 404);
    }
    new AppResponse(res, topic, 200).send();
}

async function getAll(req, res) {
    const topics = await Topic.find();

    new AppResponse(res, topics, 200).send();
}

async function getOne(req, res) {
    const { id } = req.params;
    const topic = await Topic.findById(id);

    if (!topic) {
        throw new AppError("topic not found", 404);
    }
    new AppResponse(res, topic, 200).send();
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
};
