const express = require("express");
const router = express.Router();

const validate = require("../middleware/Validate");
const working_placeScheme = require("../schemes/Working_placeScheme");

const isAuthorize = require("../middleware/IsAuthorize");
const mongoLogger = require("../utils/MongoLogger");

const working_placeController = require("../controllers/Working_placeController");

router.use(isAuthorize);
router.use(mongoLogger.LogHttpEvent);
router.get(
  "/",
  working_placeController.GetAll
  /*
    #swagger.tags = ['Seances']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.get(
  "/:id",
  working_placeController.GetDetailedById
  /*
    #swagger.tags = ['Seances']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.post(
  "/",
  validate(working_placeScheme.create),
  working_placeController.Create
  /*
    #swagger.tags = ['Seances']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.patch(
  "/:id",
  validate(working_placeScheme.edit),
  working_placeController.EditById
  /*
    #swagger.tags = ['Seances']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);
router.delete(
  "/:id",
  working_placeController.DeleteById
  /*
    #swagger.tags = ['Seances']
    #swagger.security = [{ "bearerAuth": [] }]
    */
);

module.exports = router;
