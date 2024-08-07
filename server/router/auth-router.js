const express = require("express");
const router = express.Router();
const { home, register, login } = require("../controller/auth-controller");
const signUpSchema = require("../validator/auth-validator");
const validate = require("../middleware/validate-middleware");
router.get("/", home);
router.post("/login", login);
router.post("/register", validate(signUpSchema), register);
// router.post("/register",register);
module.exports = router;
