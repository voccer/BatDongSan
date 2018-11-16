const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.fullname = !isEmpty(data.fullname) ? data.fullname : "";
  data.dateOfBirth = !isEmpty(data.dateOfBirth) ? data.dateOfBirth : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.adress = !isEmpty(data.adress) ? data.adress : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";

  if (Validator.isEmpty(data.fullname)) {
    errors.handle = "Profile fullname is required";
  } else if (!Validator.isLength(data.fullname, { min: 2, max: 40 })) {
    errors.handle = "Full name needs to between 2 and 4 characters";
  }

  if (Validator.isEmpty(data.phone)) {
    errors.phone = "Phone number is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
