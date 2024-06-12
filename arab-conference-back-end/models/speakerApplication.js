const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const speakerApplicationSchema = new Schema({
    speaker: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    conference: {
        type: Schema.Types.ObjectId,
        ref: "Conference",
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
    },
});

const SpeakerApplication = mongoose.model(
    "SpeakerApplication",
    speakerApplicationSchema
);

module.exports = SpeakerApplication;
