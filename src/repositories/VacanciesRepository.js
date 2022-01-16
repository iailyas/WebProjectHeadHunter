const Vacancies = require("../models/Vacancies");

class VacanciesRepository {
  async GetAll() {
    return await Vacancies.findAll();
  }

  async GetDetailedById(vacanciesId) {
    return await Vacancies.findOne({
      where: {
        id: vacanciesId,
      },
    });
  }

  async Create(vacancies) {
    return Vacancies.create(vacancies);
  }

  async EditById(vacanciesId, vacancies) {
    await Vacancies.update(vacancies, {
      where: {
        id: vacanciesId,
      },
    });

    return await this.GetDetailedById(vacanciesId);
  }

  async DeleteById(vacanciesId) {
    await Vacancies.destroy({
      where: {
        id: vacanciesId,
      },
    });
  }
}

module.exports = new VacanciesRepository();
