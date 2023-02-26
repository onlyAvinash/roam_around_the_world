// Create a new role 
const roleModel=require("../models/Roles")
const checkRole = (role) => {
    return (req, res, next) => {
      if (req.user && req.user.roles.includes(role)) {
        next();
      } else {
        res.status(401).json({ message: 'Unauthorized' });
      }
    };
  };
  