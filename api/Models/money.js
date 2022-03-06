const mongoose = require("mongoose");

const moneySchema = new mongoose.Schema({
	bronze: Number,
	silver: Number,
	gold: Number
});

module.exports.moneySchema = moneySchema;
module.exports.moneyModel = mongoose.model("Money", moneySchema);