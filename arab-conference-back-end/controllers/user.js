const User = require("../models/user");
const AppError = require("../models/app-error");
const AppResponse = require("../models/app-response");

async function create(req, res) {
    const user = new User(req.body);
    await user.save();
    new AppResponse(res, user, 201).send();
}

async function getAll(req, res) {
    const { type, speakerRole } = req.query;

    let query = User.find();

    if (type) {
        query = query.find({ type });
    }

    if (speakerRole) {
        query = query.find({ speakerRole });
    }

    const users = await query;

    new AppResponse(res, users, 200).send();
}

async function getOne(req, res) {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
        throw new AppError("user not found", 404);
    }
    new AppResponse(res, user, 200).send();
}

async function login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
        throw new AppError("Invalid email or password", 401);
    }

    new AppResponse(res, user, 200).send();
}

module.exports = {
    getAll,
    getOne,
    create,
    login,
};
