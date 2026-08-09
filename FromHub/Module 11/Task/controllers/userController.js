const userService = require("../services/userService");

class UserController {
  static loadRegister(req, res) {
    res.render("user/register", { message: "", email: "" });
  }

  static async registerUser(req, res) {
    const { email, password } = req.body;
    const result = await userService.registerUser(email, password);
    if (result.error) {
      return res.render("user/register", { message: result.error, email });
    }
    res.redirect("/user/login?message=Registration successful. Please login");
  }

  static loadLogin(req, res) {
    const message = req.query.message || req.query.error;
    res.render("user/login", { message, email: "" });
  }

  static async loginUser(req, res) {
    const { email, password } = req.body;
    const result = await userService.loginUser(email, password);
    if (result.error) {
      return res.render("user/login", { message: result.error, email });
    }
    req.session.user = { _id: result.user._id, email: result.user.email };
    res.redirect("/user/home");
  }

  static loadHome(req, res) {
    res.render("user/home", { email: req.session.user.email });
  }

  static logout(req, res) {
    req.session.destroy(() => {
      res.redirect("/user/login");
    });
  }
}

module.exports = UserController;
