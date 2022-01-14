const Review = require("../models/Review");
const ReviewService = require("../service/ReviewService");
class ReviewController {
  async findReview(req, res) {
    const { id } = req.params;
    const review = await Review.findOne({
      where: { id },
    });
    return res.json(review);
  }

  async findAllReviews(req, res) {
    ReviewService.findAllReviews(req, res);
  }

  async addReview(req, res) {
    ReviewService.addReview(req, res);
  }

  async changeReview(req, res) {
    ReviewService.changeReview(req, res);
  }

  async deleteReview(req, res) {
    ReviewService(req, res);
  }
}
module.exports = new ReviewController();
