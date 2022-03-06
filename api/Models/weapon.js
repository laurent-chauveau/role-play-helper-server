const mongoose = require("mongoose");

const weaponSchema = new mongoose.Schema({
	name: String,
	group: String,
	space: Number,
	range: Number,
	damage: Number,
});

module.exports.weaponSchema = weaponSchema;
module.exports.weaponModel = mongoose.model("Weapon", weaponSchema);