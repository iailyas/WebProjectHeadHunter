class UserController {
  async registration(req, res) {}

  async login(req, res) {}

  async check(req, res) {
    const query = req.query;
    res.json({ query });
  }

  async findUserById(req, res) {}

  async findUsers(req, res) {}

  async profile(req, res) {}

  async addUser(req, res) {}

  async changeUserById(req, res) {}

  async deleteUserById(req, res) {}
}
module.exports = new UserController();
