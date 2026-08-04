const express= require("express")
const router= express.Router()
const adminController=require("../controller/adminController")
const adminAuth=require("../middlewares/adminAuth")

router.get("/login",adminAuth.isLogin,adminController.loadLogin)
router.post("/login",adminController.loginAdmin)
router.get("/dashboard",adminAuth.checkSession,adminController.loadDashboard)
router.get("/logout",adminAuth.checkSession,adminController.logout)
router.post("/edit-user",adminAuth.checkSession,adminController.editUser)
router.get("/delete-user/:id",adminAuth.checkSession,adminController.deleteUser)
router.post("/add-user",adminAuth.checkSession,adminController.addUser)

module.exports=router;

