const CompanyService = require("../service/CompanyService");
class CompanyController {
  async findCompany(req, res) {
    CompanyService.findCompany(req, res);
  }

  async findAllCompanies(req, res) {
    CompanyService.findAllCompanies(req, res);
  }

  async addCompany(req, res) {
    CompanyService.addCompany(req, res);
  }

  async changeCompany(req, res) {
    CompanyService.changeCompany(req, res);
  }

  async deleteCompany(req, res) {
    CompanyService.changeCompany(req, res);
  }
}
module.exports = new CompanyController();
