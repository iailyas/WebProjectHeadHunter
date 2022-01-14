const Review = require("../models/Review");
class ReviewRepository {
  async findReview(req, res) {
    const { id } = req.params;
    const review = await Review.findOne({
      where: { id },
    });
    return res.json(review);
  }

  async findAllReviews(req, res) {
    const review = await Review.findAll();
  }

  async addReview(req, res) {
    const { comment, rate, date } = req.body;
    const review = await Review.create({
      comment,
      rate,
      date,
    });
    return res.json(review);
  }

  async changeReview(req, res) {
    const { id } = req.params;
    const review = await Review.update(
      {
        comment: req.body.comment,
        rate: req.body.rate,
        date: req.body.date,
      },
      {
        where: { id },
      }
    );
    return res.json(review);
  }

  async deleteReview(req, res) {
    const { id } = req.params;
    const review = await Review.update({
      where: { id },
    });
    return res.json(review);
  }
}
module.exports = new ReviewRepository();
