const requestsService = require("../services/RequestService");

class RequestsController {
  async GetAll(req, res) {
    res.send(await requestsService.GetAll());
  }

  async GetById(req, res) {
    res.send(await requestsService.GetById(req.params.id));
  }

  async CreateOne(req, res) {
    let request = {
      description: req.body.description,
    };

    res.send(await requestsService.CreateOne(request));
  }

  async EditById(req, res) {
    let request = {
      description: req.body.description,
    };

    res.send(await requestsService.EditById(req.params.id, request));
  }

  async DeleteById(req, res) {
    await requestsService.DeleteById(req.params.id);
    res.send("Ok");
  }
}

module.exports = new RequestsController();
