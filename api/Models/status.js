const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
	name: String,
	effect: String,
	addWound: Boolean,
	statusCount: Number,
	woundCount: Number,
	changeTest: Boolean,
	testChange: Number,
	testRemove: String
});

module.exports.statusSchema = statusSchema;

module.exports.statusModel = mongoose.model("Status", statusSchema);