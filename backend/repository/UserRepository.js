const User = require("../models/User");
class UserInfoRepository {
  async findUser(req, res) {
    const { id } = req.params;
    const user = await User.findOne({
      where: { id },
    });
    return res.json(user);
  }

  async findAllUser(req, res) {
    const user = await User.findAll();
  }

  async addUser(req, res) {
    const { login, password, role } = req.body;
    const user = await User.create({
      login,
      password,
      role,
    });
    return res.json(user);
  }

  async changeUser(req, res) {
    const { id } = req.params;
    const user = await User.update(
      {
        login: req.body.login,
        password: req.body.password,
        role: req.body.role,
      },
      {
        where: { id },
      }
    );
    return res.json(user);
  }

  async deleteUser(req, res) {
    const { id } = req.params;
    const user = await User.update({
      where: { id },
    });
    return res.json(user);
  }
}
module.exports = new UserInfoRepository();
