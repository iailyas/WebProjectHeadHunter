const UserService = require("../service/UserService");
class UserController {
  async registration(req, res) {}

  async login(req, res) {}

  async check(req, res) {
    const query = req.query;
    res.json({ query });
  }

  async findUserById(req, res) {
    UserService.findUserById(req, res);
  }

  async findUsers(req, res) {
    UserService.findUsers(req, res);
  }

  async profile(req, res) {}

  async addUser(req, res) {
    UserService.addUser(req, res);
  }

  async changeUserById(req, res) {
    UserService.changeUserById(req, res);
  }

  async deleteUserById(req, res) {
    UserService.deleteUserById(req, res);
  }
}
module.exports = new UserController();
