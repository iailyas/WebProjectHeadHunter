const { set } = require("express/lib/application");
const vacanciesRepository = require("../repository/VacanciesRepository");
class VacanciesService {
  async findVacancyById(req, res) {
    vacanciesRepository.findVacancyById(req, res);
  }
  async findAllVacancies(req, res) {
    vacanciesRepository.findAllVacancies(req, res);
  }

  async addVacancy(req, res) {
    vacanciesRepository.addVacancy(req, set);
  }

  async changeVacancyById(req, res) {
    vacanciesRepository.changeVacancyById(req, res);
  }

  async deleteVacancyById(req, res) {
    vacanciesRepository.deleteVacancyById(req, res);
  }
}
module.exports = new VacanciesService();
