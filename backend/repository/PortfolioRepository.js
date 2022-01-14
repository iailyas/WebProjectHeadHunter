const Portfolio = require("../models/Portfolio");
class PortfolioRepository {
  async findPortfolio(req, res) {
    const { id } = req.params;
    const portfolio = await Portfolio.findOne({
      where: { id },
    });
    return res.json(portfolio);
  }

  async findAllPortfolio(req, res) {
    const portfolio = await Portfolio.findAll();
  }

  async addPortfolio(req, res) {
    const { skills, wishes } = req.body;
    const portfolio = await Portfolio.create({
      skills,
      wishes,
    });
    return res.json(portfolio);
  }

  async changePortfolio(req, res) {
    const { id } = req.params;
    const portfolio = await Portfolio.update(
      {
        skills: req.body.skills,
        wishes: req.body.wishes,
      },
      {
        where: { id },
      }
    );
    return res.json(portfolio);
  }

  async deletePortfolio(req, res) {
    const { id } = req.params;
    const portfolio = await Portfolio.update({
      where: { id },
    });
    return res.json(portfolio);
  }
}
module.exports = new PortfolioRepository();
