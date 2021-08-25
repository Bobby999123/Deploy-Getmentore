const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true
        },
        projectTitle: {
            type: String,
            required: true
        },
        projectDesc: {
            type: String,
            max: 100
        },
        projectImg: {
            type: String
        },
        likes: {
            type: Array,
            default: []
        },
        level: {
            type: String

        },
        domain: {
            type: String
        },
        prerequisite: {
            type: String
        },
        skills: {
            type: String
        },
        mentor: {
            type: Array,
            default: []
        }



    },
    { timestamps: true }
);

module.exports = mongoose.model("Project", ProjectSchema);