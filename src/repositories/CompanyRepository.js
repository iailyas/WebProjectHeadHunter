const Company = require("../models/Company");

class CompanyRepository {
  async GetAll() {
    return await Company.findAll();
  }

  async GetDetailedById(companyId) {
    return await Company.findOne({
      where: {
        id: companyId,
      },
    });
  }

  async Create(company) {
    return Company.create(company);
  }

  async EditById(companyId, company) {
    await Company.update(company, {
      where: {
        id: companyId,
      },
    });

    return await this.GetDetailedById(companyId);
  }

  async DeleteById(companyId) {
    await Company.destroy({
      where: {
        id: companyId,
      },
    });
  }
}

module.exports = new CompanyRepository();
