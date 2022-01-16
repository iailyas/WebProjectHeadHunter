const Summary = require("../models/Summary");

class SummaryRepository {
  async GetAll() {
    return await Summary.findAll();
  }

  async GetById(summaryId) {
    return await Summary.findOne({
      where: {
        id: summaryId,
      },
    });
  }

  async Create(summary) {
    return Summary.create(summary);
  }

  async EditById(summaryId, summary) {
    await Summary.update(summary, {
      where: {
        id: summaryId,
      },
    });

    return await this.GetById(summaryId);
  }

  async DeleteById(summaryId) {
    await Summary.destroy({
      where: {
        id: summaryId,
      },
    });
  }
}

module.exports = new SummaryRepository();
