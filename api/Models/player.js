const mongoose = require("mongoose");

const characteristics = new mongoose.Schema({
	name: String,
	initial: Number,
	augmented: Number,
	current: Number
});

const experience = new mongoose.Schema({
	current: Number,
	spend: Number,
	total: Number
});
const money = new mongoose.Schema({
	bronze: Number,
	silver: Number,
	gold: Number
});
const weapon = new mongoose.Schema({
	name: String,
	group: String,
	space: Number,
	range: Number,
	damage: Number,
});
const armor = new mongoose.Schema({
	name: String,
	localisation: String,
	space: Number,
	defense: Number
});

const playerSchema = new mongoose.Schema({
	id: Number,
	race: String,
	class: String,
	career: String,
	level: String,
	name: String,
	characteristics:[characteristics],
	wound: {max: Number, weapon: Number, armor: Number},
	experience: experience,
	money: money,
	weapons: [weapon],
	corruption: Number,
	madness: Number,
	possessions:[{name: String, quantity: Number}],
	armors: [armor]


});

module.exports = mongoose.model("Player", playerSchema);
