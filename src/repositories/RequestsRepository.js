const Requests = require("../models/Requests");

class RequestsRepository {
  async GetAll() {
    return await Requests.findAll();
  }

  async GetById(requestsId) {
    return await Requests.findOne({
      where: {
        id: requestsId,
      },
    });
  }

  async Create(requests) {
    return Requests.create(requests);
  }

  async EditById(requestsId, requests) {
    await Requests.update(requests, {
      where: {
        id: requestsId,
      },
    });

    // Get data for return //
    return await this.GetById(requestsId);
  }

  async DeleteById(requestsId) {
    await Requests.destroy({
      where: {
        id: requestsId,
      },
    });
  }
}

module.exports = new RequestsRepository();
