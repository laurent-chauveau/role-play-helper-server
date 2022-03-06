const mongoose = require("mongoose");
const { statusSchema } = require("./status");

const woundSchema = new mongoose.Schema({
	effects: String,
	critical: Boolean,
	unusable: Boolean,
	status: [statusSchema]
});

module.exports.woundSchema = woundSchema;
module.exports.woundModel = mongoose.model("wound", woundSchema);

