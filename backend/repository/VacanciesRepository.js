const Vacancies = require("../models/Vacancies");
const vacancies = require("../models/Vacancies");
class VacanciesRepository {
  async findVacancyById(req, res) {
    const { id } = req.params;
    const vacancies = await Vacancies.findOne({
      where: { id },
    });
    return res.json(vacancies);
  }

  async findAllVacancies(req, res) {
    const vacancies = await Vacancies.findAll();
  }

  async addVacancy(req, res) {
    const { salary, contacts, requirements, conditions } = req.body;
    const vacancies = await Vacancies.create({
      salary,
      contacts,
      requirements,
      conditions,
    });
    return res.json(vacancies);
  }

  async changeVacancyById(req, res) {
    const { id } = req.params;
    const vacancies = await vacancies.update(
      {
        salary: req.body.salary,
        contacts: req.body.contacts,
        requirements: req.body.requirements,
        conditions: req.body.conditions,
      },
      {
        where: { id },
      }
    );
    return res.json(vacancies);
  }

  async deleteVacancyById(req, res) {
    const { id } = req.params;
    const vacancies = await Vacancies.update({
      where: { id },
    });
    return res.json(vacancies);
  }
}
module.exports = new VacanciesRepository();
