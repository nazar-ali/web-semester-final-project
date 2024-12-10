const { signup, login } = require("../../../project_server/src/controller/AuthController");
const {
  signupValidation,
  loginValidation,
} = require("../Middlewares/AuthValidation");

const router = require("express").Router();

router.post("/login",  login);
router.post("/signup", signup);

module.exports = router;
