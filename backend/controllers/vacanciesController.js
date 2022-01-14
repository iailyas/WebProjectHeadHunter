const vacanciesService = require("../service/VacanciesService");
class VacanciesController {
  async findVacancyById(req, res) {
    vacanciesService.findVacancyById(req, res);
  }

  async findAllVacancies(req, res) {
    vacanciesService.findAllVacancies(req, res);
  }

  async addVacancy(req, res) {
    vacanciesService.addVacancy(req, res);
  }

  async changeVacancyById(req, res) {
    vacanciesService.changeVacancyById(req, res);
  }

  async deleteVacancyById(req, res) {
    vacanciesService.deleteVacancyById(req, res);
  }
}
module.exports = new VacanciesController();
