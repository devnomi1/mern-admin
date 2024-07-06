const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const { signupSchema, loginSchema } = require("../validators/auth");
const validate = require("../middlewares/validator");

router.route("/").get(authController.home);
router.route("/register").post(validate(signupSchema), authController.register);
router.route("/login").post(validate(loginSchema), authController.login);

module.exports = router;
