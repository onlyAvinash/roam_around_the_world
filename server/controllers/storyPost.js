const userModel = require("../server/models/User");
const storyPost=(req,res)=>{
    try {
        // Check user role
        if (req.user.role !== 'atlasAdmin') {
          return res.status(401).json({ error: 'You are not authorized to access this resource.' });
        }
    
        // Return protected data
        res.send("Protected Data")
        // ...
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
}
module.exports=storyPost