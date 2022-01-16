const CompanyRepository = require("../repositories/CompanyRepository");

class CompanyService {
  async GetAll() {
    return await CompanyRepository.GetAll();
  }

  async GetDetailedById(companyId) {
    return await CompanyRepository.GetDetailedById(companyId);
  }

  async Create(company) {
    return await CompanyRepository.Create(company);
  }

  async EditById(companyId, company) {
    return await CompanyRepository.EditById(companyId, company);
  }

  async DeleteById(companyId) {
    return await CompanyRepository.DeleteById(companyId);
  }
}

module.exports = new CompanyService();
