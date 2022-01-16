const CompanyService = require("../services/CompanyService");

class CompanyController {
  async GetAll(req, res) {
    res.send(await CompanyService.GetAll());
  }

  async GetDetailedById(req, res) {
    res.send(await CompanyService.GetDetailedById(req.params.id));
  }

  async Create(req, res) {
    const { name, phone, adress, description } = req.body;
    let company = { name, phone, adress, description };

    const result = await CompanyService.Create(company);

    res.send(result);
  }

  async EditById(req, res) {
    let company = {
      name: req.body.name,
      phone: req.body.phone,
      adress: req.body.adress,
      description: req.body.description,
    };

    res.send(await CompanyService.EditById(req.params.id, company));
  }

  async DeleteById(req, res) {
    await CompanyService.DeleteById(req.params.id);
    res.send("Ok");
  }
}

module.exports = new CompanyController();
