const summaryService = require("../services/SummaryService");

class SummaryController {
  async GetAll(req, res) {
    res.send(await summaryService.GetAll());
  }

  async GetDetailedById(req, res) {
    res.send(await summaryService.GetDetailedById(req.params.id));
  }

  async Create(req, res) {
    let summary = {
      offer: req.body.offer,
      salary: req.body.salary,
    };

    res.send(await summaryService.CreateOne(summary));
  }

  async EditById(req, res) {
    let summary = {
      offer: req.user.offer,
      salary: req.body.salary,
    };

    res.send(await summaryService.EditById(req.params.id, summary));
  }

  async DeleteById(req, res) {
    await summaryService.DeleteById(req.params.id);
    res.send("Ok");
  }
}

module.exports = new SummaryController();
