const userModel = require("../models/User");
const mongoose = require("mongoose");
const jwt =  require("jsonwebtoken")
const login = async(req, res) => {
        const {username,password}=req.body
        const userExists=await userModel.findOne({username});
        // if user dosen't exists or password don't match
        if(!userExists){
           res.status(401).json({message:"Invalid username or password"})
        } else if(userExists.password!==password){
            res.status(401).json({message:"Invalid username or password"})
        }
    // Check if user has atlasAdmin role
    // const adminUser = await mongoose.connection.db.admin().command({ filter: { user: username } });
    // console.log(adminUser)
    // const isAdmin = adminUser.roles.map(role => role.role).includes('atlasAdmin');
    // user.role = isAdmin ? 'atlasAdmin' : 'user';
          // generate JWT token
    else {
    const token = jwt.sign({ username: userExists.username}, 'secret', { expiresIn: '1h' });

  // return token as response
  res.json({ token });
    }
   
}

const register = async(req, res) => {
    try{
        const { username, email, password } = req.body;
        const userExists=await userModel.findOne({email});
        if(userExists){
            res.json({message:"user already exists"});
        }
        else {
            const user = new userModel({
                username,
                email,
                password,
              });
              const savedUser = await user.save();
              res.status(201).json(savedUser);
        }
    } catch(err){
        console.log(err.message);
        res.status(500).json({err:err.message})
    }
}
module.exports = {
    register, login
}