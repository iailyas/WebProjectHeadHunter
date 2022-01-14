const WorkingPlace = require("../models/Working_place");
const WorkingPlaceRepository = require("../repository/WorkingPlaceRepository");
class WorkingPlaceService {
  async findWorkingPlaceById(req, res) {
    WorkingPlaceRepository.findWorkingPlaceById(req, res);
  }

  async findWorkingPlace(req, res) {
    WorkingPlaceRepository.findWorkingPlace(req, res);
  }

  async addWorkingPlace(req, res) {
    WorkingPlaceRepository.addWorkingPlace(req, res);
  }

  async changeWorkingPlace(req, res) {
    WorkingPlaceRepository.changeWorkingPlace(req, res);
  }

  async deleteWorkingPlace(req, res) {
    WorkingPlaceRepository.changeWorkingPlace(req, res);
  }
}
module.exports = new WorkingPlaceService();
