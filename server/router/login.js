const express = require("express")
const userModel=require("../model/User");
const auth = require("../controller/auth");
const Story=require("../controller/story");
const { authenticateToken } = require("../middlewares/authenticateToken");
const Router=express.Router();

Router.post("/login",auth.login);
Router.post("/register",auth.register);
Router.post('/protected',Story.createOne);
Router.get('/protected',Story.findAll);
Router.get('/protected/:id',Story.findOneById);


module.exports=Router 
