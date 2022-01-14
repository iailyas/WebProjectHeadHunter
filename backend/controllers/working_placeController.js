const WorkingPlace = require("../models/Working_place");
const WorkingPlaceService = require("../service/WorkingPlaceService");
class WorkingPlaceController {
  async findWorkingPlaceById(req, res) {
    WorkingPlaceService.findWorkingPlaceById(req, res);
  }

  async findWorkingPlace(req, res) {
    const working_place = await WorkingPlace.findAll();
    return res.json(working_place);
  }

  async addWorkingPlace(req, res) {
    console.log(req.body);
    const { name, position, start_date, end_date } = req.body;
    const workingplace = await Working_place.create({
      name,
      position,
      start_date,
      end_date,
    });
    return res.json(workingplace);
  }

  async changeWorkingPlace(req, res) {
    WorkingPlaceService.changeWorkingPlace(req, res);
  }

  async deleteWorkingPlace(req, res) {
    WorkingPlaceService.deleteWorkingPlace(req, res);
  }
}
module.exports = new WorkingPlaceController();
