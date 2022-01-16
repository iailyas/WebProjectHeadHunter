const Portfolio = require("../models/Portfolio");

class PortfolioRepository {
  async GetAll() {
    return await Portfolio.findAll();
  }

  async GetById(portfolioId) {
    return await Portfolio.findOne({
      where: {
        id: portfolioId,
      },
    });
  }

  async Create(portfolio) {
    return Portfolio.create(portfolio);
  }

  async EditById(portfolioId, portfolio) {
    await Portfolio.update(portfolio, {
      where: {
        id: portfolioId,
      },
    });

    // Get data for return //
    return await this.GetById(portfolioId);
  }

  async DeleteById(portfolioId) {
    await Portfolio.destroy({
      where: {
        id: portfolioId,
      },
    });
  }
}

module.exports = new PortfolioRepository();
