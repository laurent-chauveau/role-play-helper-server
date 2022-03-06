const mongoose = require("mongoose");

const characteristicSchema = new mongoose.Schema({
	name: String,
	initial: Number,
	augmented: Number,
	current: Number
});

module.exports.characteristicSchema = characteristicSchema;
module.exports.characteristicModel = mongoose.model("characteristic", characteristicSchema);