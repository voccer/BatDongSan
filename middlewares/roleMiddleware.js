const Role = require("../constants/roleUser");
module.exports = {
  requiredAuth: (req, res, next) => {
    const errors = {};
    console.log("Middleware work!!!");
    console.log({
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
      avatar: req.user.avatar
    });
    if (req.user.role !== Role.REQUIRE_ADMIN) {
      errors.role = "You are not authorized to view this content.";
      res.status(400).json({ errors });
    }
    next();
  }
};
