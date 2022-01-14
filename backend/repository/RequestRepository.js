const Request = require("../models/Requests");
class RequestsRepository {
  async findRequest(req, res) {
    const { id } = req.params;
    const request = await Request.findOne({
      where: { id },
    });
    return res.json(request);
  }

  async findAllRequests(req, res) {
    const request = await Request.findAll();
  }

  async addRequest(req, res) {
    const { description } = req.body;
    const request = await Request.create({
      description,
    });
    return res.json(request);
  }

  async changeRequest(req, res) {
    const { id } = req.params;
    const request = await Request.update(
      {
        description: req.body.description,
      },
      {
        where: { id },
      }
    );
    return res.json(request);
  }

  async deleteRequest(req, res) {
    const { id } = req.params;
    const request = await Request.update({
      where: { id },
    });
    return res.json(request);
  }
}
module.exports = new RequestsRepository();
