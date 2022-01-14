const Company = require("../models/Company");
class CompanyRepository {
  async findCompany(req, res) {
    const { id } = req.params;
    const company = await Company.findOne({
      where: { id },
    });
    return res.json(company);
  }

  async findAllCompanies(req, res) {
    const company = await Company.findAll();
  }

  async addCompany(req, res) {
    const { name, phone, adress, description } = req.body;
    const company = await Company.create({
      name,
      phone,
      adress,
      description,
    });
    return res.json(company);
  }

  async changeCompany(req, res) {
    const { id } = req.params;
    const company = await Company.update(
      {
        name: req.body.name,
        phone: req.body.phone,
        adress: req.body.adress,
        description: req.body.description,
      },
      {
        where: { id },
      }
    );
    return res.json(company);
  }

  async deleteCompany(req, res) {
    const { id } = req.params;
    const company = await Company.update({
      where: { id },
    });
    return res.json(company);
  }
}
module.exports = new CompanyRepository();
