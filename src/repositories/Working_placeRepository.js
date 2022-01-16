const Working_place = require("../models/Working_place");

class Working_placeRepository {
  async GetAll() {
    return await Working_place.findAll();
  }

  async GetDetailedById(working_placeId) {
    return await Working_place.findOne({
      where: {
        id: working_placeId,
      },
    });
  }

  async Create(working_place) {
    return Working_place.create(working_place); // await redundant because is async method and create also async method
  }

  async EditById(working_placeId, working_place) {
    await Working_place.update(working_place, {
      where: {
        id: working_placeId,
      },
    });

    return await this.GetDetailedById(working_placeId);
  }

  async DeleteById(working_placeId) {
    await Working_place.destroy({
      where: {
        id: working_placeId,
      },
    });
  }

  async GetOneByQuery(query) {
    return await Working_place.findOne({ where: query });
  }
}

module.exports = new Working_placeRepository();
