const Working_placeService = require("../services/Working_placeService");

class Working_placeController {
  async GetAll(req, res) {
    res.send(await Working_placeService.GetAll());
  }

  async GetDetailedById(req, res) {
    res.send(await Working_placeService.GetDetailedById(req.params.id));
  }

  async Create(req, res) {
    let working_place = {
      name: req.body.name,
      position: req.body.position,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
    };

    res.send(await Working_placeService.CreateOne(working_place));
  }

  async EditById(req, res) {
    let working_place = {
      name: req.body.name,
      position: req.body.position,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
    };

    res.send(await Working_placeService.EditById(req.params.id, working_place));
  }

  async DeleteById(req, res) {
    await Working_placeService.DeleteById(req.params.id);
    res.send("Ok");
  }
}

module.exports = new Working_placeController();
