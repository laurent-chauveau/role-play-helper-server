const mongoose = require("mongoose");

const armorSchema = new mongoose.Schema({
	name: String,
	space: Number,
	defense: Number
});

module.exports.armorSchema = armorSchema;
module.exports.armorModel = mongoose.model("armor", armorSchema);