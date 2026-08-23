const adminService = require("../services/adminService");
const userService = require("../services/userService");

class AdminController {
  static loadLogin(req, res) {
    const message = req.query.message;
    const error = req.query.error;
    res.render("admin/login", { message, error, email: "" });
  }

  static async loginAdmin(req, res) {
    const { email, password } = req.body;
    const result = await adminService.loginAdmin(email, password);
    if (result.error) {
      return res.render("admin/login", {
        message: "",
        error: result.error,
        email,
      });
    }
    req.session.admin = { _id: result.admin._id, email: result.admin.email };
    res.redirect("/admin/dashboard");
  }

  static async loadDashboard(req, res) {
    const search = req.query.search;
    const users = await userService.getUsers(search);
    const message = req.query.message;
    const error = req.query.error;
    res.render("admin/dashboard", { users, search, message, error });
  }

  static async addUser(req, res) {
    const { email, password } = req.body;
    const result = await userService.addUser(email, password);
    if (result.error) {
      return res.render("admin/dashboard", {
        users: await userService.getUsers(),
        search: "",
        message: "",
        error: result.error,
      });
    }
    res.redirect("/admin/dashboard?message=User created successfully");
  }

  static async deleteUser(req, res) {
    const { id } = req.params;
    await userService.deleteUser(id);
    res.redirect("/admin/dashboard?message=User deleted successfully");
  }

  static logout(req, res) {
    delete req.session.admin;
    res.redirect("/admin/login");
  }

  static async editUser(req, res) {
    const { id, email, password } = req.body;
    const result = await userService.updateUser(id, email, password);
    if (result.error) {
      return res.redirect(
        `/admin/dashboard?error=${encodeURIComponent(result.error)}`,
      );
    }
    res.redirect("/admin/dashboard?message=User updated successfully");
  }
}

module.exports = AdminController;
