const SummaryService = require("../service/SummaryService");
class SummaryController {
  async findSummary(req, res) {
    SummaryService.findSummary(req, res);
  }

  async findAllSummaries(req, res) {
    SummaryService.findAllSummaries(req, res);
  }

  async addSummary(req, res) {
    SummaryService.addSummary(req, res);
  }

  async changeSummary(req, res) {
    SummaryService.changeSummary(req, res);
  }

  async deleteSummary(req, res) {
    SummaryService.deleteSummary(req, res);
  }
}
module.exports = new SummaryController();
