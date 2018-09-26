const express = require("express");
const mongoose = require("mongoose");
const Hero = require("./models/Hero");
mongoose.connect("mongodb://localhost:27017/heroes-api",{useNewUrlParser:true}).then(result=>{
	console.log("Connected to database successfully.....");
}).catch(err =>{
	console.log("Failed to connect with database.");
});

const app = express();

app.get("/",(req,res)=>{
	Hero.find().then(result=>{
		res.json(result);
	})
});

app.get("/add/:name",(req,res)=>{
	 var name = req.params.name;
	 const hero = new Hero({
	 	name:name
	 });
	 hero.save((err,fluffy)=>{
	 	console.log("Added to data base");
	 });
	 res.redirect("/");
});

app.get("/update/:id/:name",(req,res)=>{
	 var id = req.params.id;
	 Hero.update({_id:id},{$set:{name:req.params.name}},{},()=>{});
	 res.redirect("/");
});

app.get("/delete/:id",(req,res)=>{
	 var id = req.params.id;
	 Hero.remove({_id:id},(err)=>{});
	 res.redirect("/");
});



module.exports = app;