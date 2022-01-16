const requestsRepository = require("../repositories/RequestsRepository");

class RequestsService {
  async GetAll() {
    return await requestsRepository.GetAll();
  }
  async GetById(requestsId) {
    return await requestsRepository.GetById(requestsId);
  }

  async CreateOne(requests) {
    return await requestsRepository.Create(requests);
  }

  async EditById(requestsId, requests) {
    return await requestsRepository.EditById(requestsId, requests);
  }

  async DeleteById(requestsId) {
    return await requestsRepository.DeleteById(requestsId);
  }
}

module.exports = new RequestsService();
