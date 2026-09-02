const User = require("../models/userModel");

const isLogin = (req, res, next) => {
  if (req.session.user) {
    res.redirect("/user/home");
  } else {
    next();
  }
};

const isUserValid = async (req, res, next) => {
  if (req.session.user) {
    const user = await User.findById(req.session.user._id);
    if (!user) {
      return req.session.destroy(() => {
        res.redirect("/user/login?error=Account no longer exists");
      });
    }
    next();
  } else {
    res.redirect("/user/login");
  }
};

module.exports = { isLogin, isUserValid };
