const express = require("express");
const router = express.Router();

const validate = require("../middleware/Validate");
const summaryScheme = require("../schemes/SummaryScheme");

const isAuthorize = require("../middleware/IsAuthorize");

const summaryController = require("../controllers/SummaryController");
const mongoLogger = require("../utils/MongoLogger");

router.use(isAuthorize);
router.use(mongoLogger.LogHttpEvent);
router.get(
  "/",
  summaryController.GetAll
  /*
    #swagger.tags = ['Halls']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.get(
  "/:id",
  summaryController.GetDetailedById
  /*
    #swagger.tags = ['Halls']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.post(
  "/",
  validate(summaryScheme.create),
  summaryController.Create
  /*
    #swagger.tags = ['Halls']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.patch(
  "/:id",
  validate(summaryScheme.edit),
  summaryController.EditById
  /*
    #swagger.tags = ['Halls']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.delete(
  "/:id",
  summaryController.DeleteById
  /*
    #swagger.tags = ['Halls']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);

module.exports = router;
