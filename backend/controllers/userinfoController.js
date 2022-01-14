const UserInfoService = require("../service/UserInfoService");
class UserInfoController {
  async findUserInfoById(req, res) {
    UserInfoService.findUserInfoById(req, res);
  }

  async findAllUserInfo(req, res) {
    UserInfoService.findAllUserInfo(req, res);
  }

  async addUserInfo(req, res) {
    UserInfoService.addUserInfo(req, res);
  }

  async changeUserInfoById(req, res) {
    UserInfoService.changeUserInfoById(req, res);
  }

  async deleteUserInfoById(req, res) {
    UserInfoService.deleteUserInfoById(req, res);
  }
}
module.exports = new UserInfoController();
