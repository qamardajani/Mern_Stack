const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema({
	setup:{
		type : String,
		minlength : [10,"it must be at least 10 characters"]
	},
		

	punchline: {
		type : String,
		minlength : [3,"it must be at least 3 characters"]

	}
});

const Joke = mongoose.model("Joke", jokeSchema);

module.exports = Joke;