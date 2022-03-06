const mongoose = require("mongoose");

const powerSchema = new mongoose.Schema({
	name: String,
	incantationLevel: Number,
	range: Number,
	target: Number,
	time: Number,
	effects: String
});

module.exports.powerSchema = powerSchema;
module.exports.powerModel = mongoose.model("power", powerSchema);