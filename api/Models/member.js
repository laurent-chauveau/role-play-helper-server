const mongoose = require("mongoose");
const {armorSchema} = require("./armor");
const {woundSchema} = require("./wound");

const memberSchema = new mongoose.Schema({
	name: String,
	wound: woundSchema,
	armor: armorSchema,
	touch: [Number]
});

module.exports.memberSchema = memberSchema;
module.exports.memberModel = mongoose.model("member", memberSchema);