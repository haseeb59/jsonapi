const mongoose = require("mongoose");

const HeroSchema = mongoose.Schema({
	id:mongoose.Schema.Types.ObjectId,
	name:String
});


module.exports = Hero = mongoose.model("Hero",HeroSchema);