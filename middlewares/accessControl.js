// Define middleware to check if user has the "admin" role
const isAdmin = function(req, res, next) {
    if (req.user && req.user.roles.includes('admin')) {
      return next();
    }
    return res.status(403).send('Forbidden');
  }
  