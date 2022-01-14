const UserInfo = require("../models/User_info");
class UserInfoRepository {
  async findUserInfoById(req, res) {
    const { id } = req.params;
    const userI = await UserInfo.findOne({
      where: { id },
    });
    return res.json(userI);
  }

  async findAllUserInfo(req, res) {
    const userI = await UserInfo.findAll();
  }

  async addUserInfo(req, res) {
    const { phone, email, projects } = req.body;
    const userI = await UserInfo.create({
      phone,
      email,
      projects,
    });
    return res.json(userI);
  }

  async changeUserInfoById(req, res) {
    const { id } = req.params;
    const userI = await UserInfo.update(
      {
        phone: req.body.phone,
        email: req.body.email,
        projects: req.body.projects,
      },
      {
        where: { id },
      }
    );
    return res.json(userI);
  }

  async deleteUserInfoById(req, res) {
    const { id } = req.params;
    const userI = await UserInfo.update({
      where: { id },
    });
    return res.json(userI);
  }
}
module.exports = new UserInfoRepository();
