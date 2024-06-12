const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: "{PATH} is required!",
        minLength: [1, "{PATH} can't be less than 1 chars"],
        trim: true,
    },
    lastName: {
        type: String,
        required: "{PATH} is required!",
        minLength: [1, "{PATH} can't be less than 1 chars"],
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: "{PATH} is required!",
    },
    email: {
        type: String,
        required: "{PATH} is required!",
        unique: true,
    },
    password: {
        type: String,
        required: "{PATH} is required!",
    },

    type: {
        type: String,
        required: "{PATH} is required!",
        enum: ["admin", "speaker", "attendee"],
    },
    speakerRole: {
        type: String,
        enum: ["scientific", "organizing", "advisory"],
    },
    description: {
        type: String,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
