const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const adminAuth = require("../middlewares/adminAuth");

router.get("/login", adminAuth.isLogin, adminController.loadLogin);
router.post("/login", adminController.loginAdmin);
router.get("/dashboard", adminAuth.isAdminValid, adminController.loadDashboard);
router.post("/logout", adminAuth.isAdminValid, adminController.logout);
router.post("/add-user", adminAuth.isAdminValid, adminController.addUser);
router.post("/edit-user", adminAuth.isAdminValid, adminController.editUser);
router.post(
  "/delete-user/:id",
  adminAuth.isAdminValid,
  adminController.deleteUser,
);

module.exports = router;
