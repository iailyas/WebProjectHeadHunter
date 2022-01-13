const Router = require("express");
const router = new Router();

const userRouter = require("./UserRouter");
// const couponsRouter = require("./couponsRouter");
// const createCouponRouter = require("./createCouponRouter");
// const reviewsRouter = require("./reviewsRouter");
// const roleRouter = require("./roleRouter");
// const userCouponsRouter = require("./userCouponsRouter");

router.use("/user", userRouter);
// router.use("/coupons", couponsRouter);
// router.use("/createCoupon", createCouponRouter);
// router.use("/review", reviewsRouter);
// router.use("/role", roleRouter);
// router.use("/userCoupon", userCouponsRouter);

module.exports = router;
