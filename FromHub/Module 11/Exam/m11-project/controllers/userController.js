const userService = require("../services/userService");
const User = require("../models/userModel");

class UserController {
  static loadRegister(req, res) {
    res.render("user/register", { message: "", name: "", email: "" });
  }

  static async registerUser(req, res) {
    const { email, password, name, confirmPassword } = req.body;
    const result = await userService.registerUser(email, password, name, confirmPassword);
    if (result.error) {
      return res.render("user/register", { message: result.error, name: name || "", email });
    }
    res.redirect("/user/login?message=Registration successful. Please login");
  }

  static loadLogin(req, res) {
    const message = req.query.message;
    const error = req.query.error;
    res.render("user/login", { message, error, email: "" });
  }

  static async loginUser(req, res) {
    const { email, password } = req.body;
    const result = await userService.loginUser(email, password);
    if (result.error) {
      return res.render("user/login", {
        message: "",
        error: result.error,
        email,
      });
    }
    req.session.user = { _id: result.user._id, email: result.user.email, name: result.user.name };
    res.redirect("/user/home");
  }

  static async loadHome(req, res) {
    const user = await User.findById(req.session.user._id);
    if (!user) {
      delete req.session.user;
      return res.redirect("/user/login?error=Account no longer exists");
    }
    res.render("user/home", { name: user.name, email: user.email });
  }

  static logout(req, res) {
    delete req.session.user;
    res.redirect("/user/login");
  }
}

module.exports = UserController;
