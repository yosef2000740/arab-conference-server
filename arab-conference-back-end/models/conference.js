const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conferenceSchema = new Schema({
    name: {
        type: String,
        required: "{PATH} is required!",
        minLength: [1, "{PATH} can't be less than 1 chars"],
        trim: true,
    },
    description: {
        type: String,
        required: "{PATH} is required!",
        minLength: [10, "{PATH} can't be less than 10 chars"],
        trim: true,
    },
    location: {
        type: String,
        required: "{PATH} is required!",
        minLength: [1, "{PATH} can't be less than 1 chars"],
        trim: true,
    },
    price: {
        type: Number,
        required: "{PATH} is required!",
    },
    start: {
        type: Date,
        required: "{PATH} is required!",
    },
    end: {
        type: Date,
        required: "{PATH} is required!",
    },
    topics: [
        {
            type: Schema.Types.ObjectId,
            ref: "Topic",
        },
    ],
    speakerApplications: [
        {
            type: Schema.Types.ObjectId,
            ref: "SpeakerApplication",
        },
    ],
    attendanceApplications: [
        {
            type: Schema.Types.ObjectId,
            ref: "AttendanceApplication",
        },
    ],
});

const Conference = mongoose.model("Conference", conferenceSchema);

module.exports = Conference;

