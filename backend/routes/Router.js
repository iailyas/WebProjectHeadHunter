const Router = require("express");
const router = new Router();

const userRouter = require("./UserRouter");
const userinfoRouter = require("./UserInfoRouter");
const reviewRouter = require("./ReviewRouter");
const summaryRouter = require("./SummaryRouter");
const requestRouter = require("./RequestsRouter");
const portfolioRouter = require("./PortfolioRouter");
const companyRouter = require("./CompanyRouter");
const vacancyRouter = require("./VacanciesRouter");
const working_placeRouter = require("./WorkingPlaceRouter");

router.use("/user", userRouter);
router.use("/userinfo", userinfoRouter);
router.use("/review", reviewRouter);
router.use("/summary", summaryRouter);
router.use("/requests", requestRouter);
router.use("/portfolio", portfolioRouter);
router.use("/company", companyRouter);
router.use("/vacancy", vacancyRouter);
router.use("/wplace", working_placeRouter);

module.exports = router;
