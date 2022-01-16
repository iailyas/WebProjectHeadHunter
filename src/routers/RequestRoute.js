const express = require("express");
const router = express.Router();

const validate = require("../middleware/Validate");
const requestsScheme = require("../schemes/RequestsScheme");

const isAuthorize = require("../middleware/IsAuthorize");

const requestsController = require("../controllers/RequestsController");
const mongoLogger = require("../utils/MongoLogger");

router.use(isAuthorize);
router.use(mongoLogger.LogHttpEvent);
router.get(
  "/",
  requestsController.GetAll
  /*
    #swagger.tags = ['Genres']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.get(
  "/:id",
  requestsController.GetById
  /*
    #swagger.tags = ['Genres']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.post(
  "/",
  validate(requestsScheme.create),
  requestsController.CreateOne
  /*
    #swagger.tags = ['Genres']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.patch(
  "/:id",
  validate(requestsScheme.edit),
  requestsController.EditById
  /*
    #swagger.tags = ['Genres']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.delete(
  "/:id",
  requestsController.DeleteById
  /*
    #swagger.tags = ['Genres']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);

module.exports = router;
