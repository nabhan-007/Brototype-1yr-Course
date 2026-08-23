const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const userController = require("../controllers/userController");

router.get("/login", auth.isLogin, userController.loadLogin);
router.get("/register", auth.isLogin, userController.loadRegister);
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/home", auth.isUserValid, userController.loadHome);
router.post("/logout", auth.isUserValid, userController.logout);

module.exports = router;
