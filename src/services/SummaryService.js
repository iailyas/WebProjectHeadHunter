const summaryRepository = require("../repositories/SummaryRepository");

class SummaryService {
  async GetAll() {
    return await summaryRepository.GetAll();
  }

  async GetById(summaryId) {
    return await summaryRepository.GetById(summaryId);
  }

  async CreateOne(summary) {
    return await summaryRepository.Create(summary);
  }

  async EditById(summaryId, summary) {
    return await summaryRepository.EditById(summaryId, summary);
  }

  async DeleteById(summaryId) {
    return await summaryRepository.DeleteById(summaryId);
  }
}

module.exports = new SummaryService();
