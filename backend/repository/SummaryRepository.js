const Summary = require("../models/Summary");
class SummaryRepository {
  async findSummary(req, res) {
    const { id } = req.params;
    const summary = await Summary.findOne({
      where: { id },
    });
    return res.json(summary);
  }

  async findAllSummaries(req, res) {
    const summary = await Summary.findAll();
  }

  async addSummary(req, res) {
    const { offer, salary } = req.body;
    const summary = await Summary.create({
      offer,
      salary,
    });
    return res.json(summary);
  }

  async changeSummary(req, res) {
    const { id } = req.params;
    const summary = await Summary.update(
      {
        offer: req.body.offer,
        salary: req.body.salary,
      },
      {
        where: { id },
      }
    );
    return res.json(summary);
  }

  async deleteSummary(req, res) {
    const { id } = req.params;
    const summary = await Summary.update({
      where: { id },
    });
    return res.json(summary);
  }
}
module.exports = new SummaryRepository();
