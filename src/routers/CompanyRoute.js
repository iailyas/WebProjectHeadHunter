const express = require("express");

const validate = require("../middleware/Validate");
const companyScheme = require("../schemes/CompanyScheme");
const isAuthorize = require("../middleware/IsAuthorize");
const companyController = require("../controllers/CompanyController");
const mongoLogger = require("../utils/MongoLogger");

const router = express.Router();

router.use(isAuthorize);
router.use(mongoLogger.LogHttpEvent);
router.get(
  "/",
  companyController.GetAll
  /*
    #swagger.tags = ['Booking']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.get(
  "/:id",
  companyController.GetDetailedById
  /*
    #swagger.tags = ['Booking']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.post(
  "/",
  validate(companyScheme.create),
  companyController.Create
  /*
    #swagger.tags = ['Booking']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.patch(
  "/:id",
  validate(companyScheme.edit),
  companyController.EditById
  /*
    #swagger.tags = ['Booking']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.delete(
  "/:id",
  companyController.DeleteById
  /*
    #swagger.tags = ['Booking']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);

module.exports = router;
