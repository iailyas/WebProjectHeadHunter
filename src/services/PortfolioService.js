const PortfolioRepository = require("../repositories/PortfolioRepository");

class PortfolioService {
  async GetAll() {
    return await PortfolioRepository.GetAll();
  }
  async GetById(portfolioId) {
    return await PortfolioRepository.GetById(portfolioId);
  }

  async CreateOne(portfolio) {
    return await PortfolioRepository.Create(portfolio);
  }

  async EditById(portfolioId, portfolio) {
    return await PortfolioRepository.EditById(portfolioId, portfolio);
  }

  async DeleteById(portfolioId) {
    return await PortfolioRepository.DeleteById(portfolioId);
  }
}

module.exports = new PortfolioService();
