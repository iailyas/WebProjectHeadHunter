const RequestService = require("../service/RequestService");
const ReviewService = require("../service/ReviewService");
class RequestsController {
  async findRequest(req, res) {
    ReviewService.findRequest(req, res);
  }

  async findAllRequests(req, res) {
    ReviewService.findAllRequests(req, res);
  }

  async addRequest(req, res) {
    ReviewService.addRequest(req, res);
  }

  async changeRequest(req, res) {
    ReviewService.changeRequest(req, res);
  }

  async deleteRequest(req, res) {
    ReviewService.deleteRequest(req, res);
  }
}
module.exports = new RequestsController();
