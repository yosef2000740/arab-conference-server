const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topicSchema = new Schema({
    name: {
        type: String,
        required: "{PATH} is required!",
        minLength: [1, "{PATH} can't be less than 1 chars"],
        trim: true,
    },
    description: {
        type: String,
    },
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;
