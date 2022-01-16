const Working_placeRepository = require("../repositories/Working_placeRepository");

class Working_placeService {
  async GetAll() {
    return await Working_placeRepository.GetAll();
  }

  async GetDetailedById(working_placeId) {
    return await Working_placeRepository.GetDetailedById(working_placeId);
  }

  async CreateOne(working_place) {
    return await Working_placeRepository.Create(working_place);
  }

  async EditById(working_placeId, working_place) {
    return await Working_placeRepository.EditById(
      working_placeId,
      working_place
    );
  }

  async DeleteById(working_placeId) {
    return await Working_placeRepository.DeleteById(working_placeId);
  }
}

module.exports = new Working_placeService();
