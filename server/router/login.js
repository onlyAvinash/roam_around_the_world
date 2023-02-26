const express = require("express")
const userModel=require("../model/User");
const auth = require("../controller/auth");
const Story=require("../controller/story");
const { authenticateToken } = require("../middlewares/authenticateToken");
const Router=express.Router();
const rbacMiddleware=require("../middlewares/accessControl")

Router.post("/login",auth.login);
Router.post("/register",auth.register);
Router.post('/protected', authenticateToken,Story.createOne);
Router.get('/protected', authenticateToken,Story.findAll);
Router.get('/protected/:id', authenticateToken,Story.findOneById);


module.exports=Router 
