const reviewRepository = require("../repository/ReviewRepository");
class ReviewService {
  async findReview(req, res) {
    const { id } = req.params;
    const review = await Review.findOne({
      where: { id },
    });
    return res.json(review);
  }

  async findAllReviews(req, res) {}

  async addReview(req, res) {}

  async changeReview(req, res) {}

  async deleteReview(req, res) {}
}
module.exports = new ReviewService();
