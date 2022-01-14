const Router = require("express");
const reviewRouter = new Router();
const reviewController = require("../controllers/reviewController");

reviewRouter.get("/:id", reviewController.findReview);
reviewRouter.get("/", reviewController.findAllReviews);
reviewRouter.post("/new", reviewController.addReview);
reviewRouter.put("/:id", reviewController.changeReview);
reviewRouter.delete("/:id", reviewController.deleteReview);

module.exports = reviewRouter;
