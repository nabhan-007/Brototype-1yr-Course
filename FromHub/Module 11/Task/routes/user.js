const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middlewares/auth");

router.get("/login", auth.isLogin, userController.loadLogin);
router.get("/register", auth.isLogin, userController.loadRegister);
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/home", auth.isUserValid, userController.loadHome);
router.get("/logout", auth.isUserValid, userController.logout);

module.exports = router;
