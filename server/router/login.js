const express = require("express")
const userModel=require("../model/User");
const auth = require("../controllers/auth");
const Story=require("../controllers/storyPost");
const { authenticateToken } = require("../middlewares/authenticateToken");
const Router=express.Router();
const rbacMiddleware=require("../middlewares/accessControl")

Router.post("/login",auth.login);
Router.post("/register",auth.register);
Router.get('/protected', authenticateToken,Story);

module.exports=Router 
