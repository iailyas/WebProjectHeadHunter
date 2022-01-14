const Router = require("express");
const WorkingPlaceRouter = new Router();
const workingplaceController = require("../controllers/working_placeController");

WorkingPlaceRouter.get("/:id", workingplaceController.findWorkingPlaceById);
WorkingPlaceRouter.get("/", workingplaceController.findWorkingPlace);
WorkingPlaceRouter.post("/new", workingplaceController.addWorkingPlace);
WorkingPlaceRouter.put("/:id", workingplaceController.changeWorkingPlace);
WorkingPlaceRouter.delete("/:id", workingplaceController.deleteWorkingPlace);

module.exports = WorkingPlaceRouter;
