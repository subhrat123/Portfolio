const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    liveLink: String,
})

module.exports = mongoose.model("Projects", ProjectSchema);