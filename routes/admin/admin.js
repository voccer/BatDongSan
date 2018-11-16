var express = require("express");
var router = express.Router();

//@route  GET api/admin/
//@desc   Test admin route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "Posts works" }));
module.exports = router;
var express = require("express");
var router = express.Router();
var gravatar = require("gravatar");
var bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../../config/database");
const passport = require("passport");
//Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const Admin = require("../../models/Admin");
//@route  GET api/admin/
//@desc   Test admin route
//@access Public
router.get("/test", (req, res) => res.json({ msg: "Posts works" }));

//@route  GET api/admin/register
//@desc   register route
//@access Public
router.get("/register", (req, res, next) => res.json({ msg: "GET works" }));
// @route   GET api/admin/register
// @desc    Register admin
// @access  Public
router.post("/register", (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Admin.findOne({ email: req.body.email }).then(admin => {
    if (admin) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", // Size
        r: "pg", // Rating
        d: "mm" // Default
      });

      const newAdmin = new Admin({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
          if (err) next(err);
          newAdmin.password = hash;
          newAdmin
            .save()
            .then(admin => res.json(admin))
            .catch(err => console.log(err));
        });
      });
    }
  });
});
// @route   GET api/admin/login
// @desc    Login admin / Returning JWT token
// @access  Public
router.post("/login", (req, res, next) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  //Find admin by email
  Admin.findOne({ email }).then(admin => {
    if (!admin) {
      errors.email = "Email not found!";
      return res.status(404).json({ errors });
    }
    //Check password
    bcrypt.compare(password, admin.password, (err, same) => {
      errors.password = "Password incorrect!";
      if (err) return res.status(400).json({ errors });
      //Admin matched
      const payload = { id: admin.id, name: admin.name, avatar: admin.avatar }; // Create JWT Payload
      // Sign Token
      jwt.sign(payload, keys.secretOfKey, { expiresIn: 3600 }, (err, token) => {
        res.json({
          success: true,
          token: "Bearer " + token
        });
      }); //exprires token
    });
  });
});

// @route   GET api/admin/current
// @desc    Return Current Admin
// @access  Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.admin._id,
      name: req.admin.name,
      email: req.admin.email
    });
  }
);
module.exports = router;
