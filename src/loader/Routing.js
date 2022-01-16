// ErrorHandler

const express = require("express");
const router = express.Router();

const userRouter = require("../routers/UserRoute");
const roleRouter = require("../routers/RoleRoute");
const portfolioRouter = require("../routers/PortfolioRoute");
const requestRouter = require("../routers/RequestRoute");
const vacanciesRouter = require("../routers/VacanciesRoute");
const working_placeRouter = require("../routers/Working_placeRoute");
const summaryRouter = require("../routers/SummaryRoute");
const companyRouter = require("../routers/CompanyRoute");
const reviewRouter = require("../routers/ReviewRoute");

// /signup
// /signin
// use is authorized

router.use("/users", userRouter);
router.use("/roles", roleRouter);
router.use("/portfolio", portfolioRouter);
router.use("/request", requestRouter);
router.use("/vacancies", vacanciesRouter);
router.use("/working_place", working_placeRouter);
router.use("/summary", summaryRouter);
router.use("/company", companyRouter);
router.use("/reviews", reviewRouter);

module.exports = router;
