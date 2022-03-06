const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
	current: Number,
	spend: Number,
	total: Number
});

module.exports.experienceSchema = experienceSchema;
module.exports.experienceModel = mongoose.model("Experience", experienceSchema);