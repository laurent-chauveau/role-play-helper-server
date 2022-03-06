const express = require("express");
const router = express.Router();
const players = require("../Models/player");

router.get("/ping", (req, res) => {
	res.status(200).json({msg: "pong", date: new Date()});
});

router.get("/test", (req,res) => {
	const tests = [
		{
			id: 1,
			name: "tutu",
			age: 25
		},
		{
			id: 2,
			name: "plop",
			age: 38
		}
	];
	res.status(200).json(tests);
});

router.post("/players",(req, res) => {
	console.log(`body = ${req.body}`);
	const player  = new players(req.body);
	player.save((err, player) => {
		if(err){
			return res.status(500).json(err);
		} else {
			console.log(player);
			res.status(201).json(player);
		}
	});

});

module.exports = router;