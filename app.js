const express = require("express");
const app = express();
const api = require("./api/v1/index");
const cors = require("cors");
const mongoose = require("mongoose");
const connection = mongoose.connection;
const bodyParser = require("body-parser");

app.set("port", (process.env.port || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use("/api/v1", api);
app.use((req, res) => {
	const err = new Error();
	err.status = 404;
	err.message = "404 - not found";
	res.json(err);
});

mongoose.connect("mongodb://0.0.0.0:27017/rolePlayHelper",{useNewUrlParser: true});
connection.on("error", (error) => {
	console.error(`connection to MongoDB failed ${error.message}`);
});
connection.once("open", () => {
	console.log("Connection to MongoDB success");
	app.listen(app.get("port"), () => {
		console.log(`express server listen on port ${app.get("port")}`);
	});
});

