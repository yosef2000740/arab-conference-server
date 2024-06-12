const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendanceApplicationSchema = new Schema({
    attendee: {
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

const AttendanceApplication = mongoose.model(
    "AttendanceApplication",
    attendanceApplicationSchema
);

module.exports = AttendanceApplication;
