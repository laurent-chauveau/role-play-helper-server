const mongoose = require("mongoose");

const characteristics = new mongoose.Schema({
	name: String,
	initial: Number,
	augmented: Number,
	current: Number
});

module.exports = mongoose.model("Characteristics", characteristics);