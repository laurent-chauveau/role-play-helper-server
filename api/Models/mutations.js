
const mongoose = require("mongoose");

const mutationSchema = new mongoose.Schema({
	name: String,
	isPhysic: Boolean,
	isMental: Boolean,
	characteristics: {
		name: String,
		count: Number
	},
	skill: {
		name: String,
		count: Number
	}
});

module.exports.mutationSchema = mutationSchema;
module.exports.mutationModel = mongoose.model("Ammo", mutationSchema);