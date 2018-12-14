const Role = require("../constants/roleUser");
module.exports = {
  requiredADMIN: (req, res, next) => {
    const errors = {};
    if (req.user.role !== Role.REQUIRE_ADMIN) {
      errors.role = "You are not admin to view this content.";
      return res.status(400).json({ errors });
    }
    return next();
  },
  requiredMEMBER: (req, res, next) => {
    const errors = {};
    console.log("Middleware work!!!");
    console.log({
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
      avatar: req.user.avatar
    });
    if (req.user.role !== Role.REQUIRE_MEMBER) {
      errors.role = "You are not member to view this content.";
      return res.status(400).json({ errors });
    }
    return next();
  },
  requiredOWNER: (req, res, next) => {
    const errors = {};
    if (req.user.role !== Role.REQUIRE_OWNER) {
      errors.role = "You are not owner to view this content.";
      return res.status(400).json({ errors });
    }
    return next();
  },
  requiredCLIENT: (req, res, next) => next()
};
