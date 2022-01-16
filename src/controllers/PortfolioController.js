const portfolioService = require("../services/PortfolioService");

class PortfolioController {
  async GetAll(req, res) {
    res.send(await portfolioService.GetAll());
  }

  async GetDetailedById(req, res) {
    res.send(await portfolioService.GetById(req.params.id));
  }

  async CreateOne(req, res) {
    let portfolio = {
      skills: req.body.skills,
      wishes: req.body.wishes,
    };

    res.send(await portfolioService.CreateOne(portfolio));
  }

  async EditById(req, res) {
    let portfolio = {
      skills: req.body.skills,
      wishes: req.body.wishes,
    };

    res.send(await portfolioService.EditById(req.params.id, portfolio));
  }

  async DeleteById(req, res) {
    await portfolioService.DeleteById(req.params.id);
    res.send("Ok");
  }
}

module.exports = new PortfolioController();
