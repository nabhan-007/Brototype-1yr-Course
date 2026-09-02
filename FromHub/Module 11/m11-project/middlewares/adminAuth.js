const Admin = require("../models/adminModel");

const isLogin = (req, res, next) => {
  if (req.session.admin) {
    res.redirect("/admin/dashboard");
  } else {
    next();
  }
};

const isAdminValid = async (req, res, next) => {
  if (req.session.admin) {
    const admin = await Admin.findById(req.session.admin._id);
    if (!admin) {
      return req.session.destroy(() => {
        res.redirect("/admin/login?error=Account no longer exists");
      });
    }
    next();
  } else {
    res.redirect("/admin/login");
  }
};

module.exports = { isLogin, isAdminValid };
