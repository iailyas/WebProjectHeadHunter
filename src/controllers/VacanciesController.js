const vacanciesService = require("../services/VacanciesService");

class VacanciesController {
  async GetAll(req, res) {
    res.send(await vacanciesService.GetAll());
  }

  async GetDetailedById(req, res) {
    res.send(await vacanciesService.GetDetailedById(req.params.id));
  }

  async Create(req, res) {
    let vacancy = {
      salary: req.body.salary,
      contacts: req.body.contacts,
      requirements: req.body.requirements,
      conditions: req.body.conditions,
    };

    res.send(await vacanciesService.Create(vacancy));
  }

  async EditById(req, res) {
    let vacancy = {
      salary: req.body.salary,
      contacts: req.body.contacts,
      requirements: req.body.requirements,
      conditions: req.body.conditions,
    };

    res.send(await vacanciesService.EditById(req.params.id, vacancy));
  }

  async DeleteById(req, res) {
    await vacanciesService.DeleteById(req.params.id);
    res.send("Ok");
  }
}

module.exports = new VacanciesController();
