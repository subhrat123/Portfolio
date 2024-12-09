const express = require("express");
const router = express.Router();
const { home, register, login, user } = require("../controller/auth-controller");
const signUpSchema = require("../validator/auth-validator");
const authMiddleWare = require("../middleware/auth-middleware");
const validate = require("../middleware/validate-middleware");
router.get("/", home);
router.post("/login", login);
router.post("/register", validate(signUpSchema), register);
router.get("/user",authMiddleWare,user);
// router.post("/register",register);
module.exports = router;
   