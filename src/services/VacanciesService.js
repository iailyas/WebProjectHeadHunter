const VacanciesRepository = require("../repositories/VacanciesRepository");

class VacanciesService {
  async GetAll() {
    return await VacanciesRepository.GetAll();
  }

  async GetDetailedById(vacanciesId) {
    return await VacanciesRepository.GetDetailedById(vacanciesId);
  }

  async Create(vacancies) {
    return await VacanciesRepository.Create(vacancies);
  }

  async EditById(vacanciesId, vacancies) {
    return await VacanciesRepository.EditById(vacanciesId, vacancies);
  }

  async DeleteById(vacanciesId) {
    return await VacanciesRepository.DeleteById(vacanciesId);
  }
}

module.exports = new VacanciesService();
