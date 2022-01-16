const express = require("express");
const router = express.Router();

const validate = require("../middleware/Validate");
const portfolioScheme = require("../schemes/PortfolioScheme");

const isAuthorize = require("../middleware/IsAuthorize");

const portfolioController = require("../controllers/PortfolioController");
const mongoLogger = require("../utils/MongoLogger");

router.use(isAuthorize);
router.use(mongoLogger.LogHttpEvent);
router.get(
  "/",
  portfolioController.GetAll
  /*
    #swagger.tags = ['Countries']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.get(
  "/:id",
  portfolioController.GetDetailedById
  /*
    #swagger.tags = ['Countries']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.post(
  "/",
  validate(portfolioScheme.create),
  portfolioController.CreateOne
  /*
    #swagger.tags = ['Countries']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.patch(
  "/:id",
  validate(portfolioScheme.edit),
  portfolioController.EditById
  /*
    #swagger.tags = ['Countries']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.delete(
  "/:id",
  portfolioController.DeleteById
  /*
    #swagger.tags = ['Countries']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);

module.exports = router;
