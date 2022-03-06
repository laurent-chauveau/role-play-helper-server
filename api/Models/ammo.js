
const mongoose = require("mongoose");

const ammoSchema = new mongoose.Schema({
	type: String,
	count: Number,
	dammage: Number
});

module.exports.ammoSchema = ammoSchema;
module.exports.ammoModel = mongoose.model("Ammo", ammoSchema);