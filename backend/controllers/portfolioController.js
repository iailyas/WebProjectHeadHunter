const PortfolioService = require("../service/PortfolioService");
class PortfolioController {
  async findPortfolio(req, res) {
    PortfolioService.findPortfolio(req, res);
  }

  async findAllPortfolio(req, res) {
    PortfolioService.findAllPortfolio(req, res);
  }

  async addPortfolio(req, res) {
    PortfolioService.addPortfolio(req, res);
  }

  async changePortfolio(req, res) {
    PortfolioService.changePortfolio(req, res);
  }

  async deletePortfolio(req, res) {
    PortfolioService.deletePortfolio(req, res);
  }
}
module.exports = new PortfolioController();
