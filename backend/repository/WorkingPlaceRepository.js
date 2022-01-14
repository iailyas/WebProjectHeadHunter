const WorkingPlace = require("../models/Working_place");
class WorkingPlaceRepository {
  async findWorkingPlaceById(req, res) {
    const { id } = req.params;
    const working_place = await WorkingPlace.findOne({
      where: { id },
    });
    return res.json(working_place);
  }

  async findWorkingPlace(req, res) {
    const working_place = await WorkingPlace.findAll();
  }

  async addWorkingPlace(req, res) {
    const { name, position, start_date, end_date } = req.body;
    const working_place = await WorkingPlace.create({
      name,
      position,
      start_date,
      end_date,
    });
    return res.json(working_place);
  }

  async changeWorkingPlace(req, res) {
    const { id } = req.params;
    const working_place = await WorkingPlace.update(
      {
        discount: req.body.discount,
        name: req.body.name,
        amount: req.body.amount,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
      },
      {
        where: { id },
      }
    );
    return res.json(working_place);
  }

  async deleteWorkingPlace(req, res) {
    const { id } = req.params;
    const Working_place = await WorkingPlace.update({
      where: { id },
    });
    return res.json(working_place);
  }
}
module.exports = new WorkingPlaceRepository();
