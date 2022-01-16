const express = require("express");
const router = express.Router();

const validate = require("../middleware/Validate");
const vacanciesScheme = require("../schemes/VacanciesScheme");

const vacanciesController = require("../controllers/VacanciesController");
const mongoLogger = require("../utils/MongoLogger");

router.use(mongoLogger.LogHttpEvent);
router.get(
  "/",
  vacanciesController.GetAll
  /*
    #swagger.tags = ['Movies']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.get(
  "/:id",
  vacanciesController.GetDetailedById
  /*
    #swagger.tags = ['Movies']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.post(
  "/",
  validate(vacanciesScheme.create),
  vacanciesController.Create
  /*
    #swagger.tags = ['Movies']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.patch(
  "/:id",
  validate(vacanciesScheme.edit),
  vacanciesController.EditById
  /*
    #swagger.tags = ['Movies']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.delete(
  "/:id",
  vacanciesController.DeleteById
  /*
    #swagger.tags = ['Movies']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);

module.exports = router;
