const mongoose = require("mongoose");
const { statusSchema } = require("./status");
const {characteristicSchema} = require("./characteristics");
const {moneySchema} = require("./money");
const {experienceSchema} = require("./experience");
const {weaponSchema} = require("./weapon");
const {memberSchema} = require("./member");
const {powerSchema} = require("./power");
const {ammoSchema} = require("./ammo");
const {mutationSchema} = require("./mutations");

const playerSchema = new mongoose.Schema({
	id: Number,
	race: String,
	class: String,
	career: String,
	level: String,
	name: String,
	characteristics:[characteristicSchema],
	space: {max: Number, weapon: Number, armor: Number},
	experience: experienceSchema,
	money: moneySchema,
	weapons: [weaponSchema],
	corruption: Number,
	madness: Number,
	possessions:[{name: String, quantity: Number}],
	wounds: {current: Number, max: Number, badass: Boolean},
	powers: [powerSchema],
	body: [memberSchema],
	status: [statusSchema],
	ammo: [ammoSchema],
	mutations:[mutationSchema]
});

module.exports = mongoose.model("Player", playerSchema);
