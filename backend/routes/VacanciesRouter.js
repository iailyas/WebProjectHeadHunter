const Router = require("express");
const vacanciesRouter = new Router();
const vacanciesController = require("../controllers/vacanciesController");

vacanciesRouter.get("/:id", vacanciesController.findVacancyById);
vacanciesRouter.get("/", vacanciesController.findAllVacancies);
vacanciesRouter.post("/", vacanciesController.addVacancy);
vacanciesRouter.put("/:id", vacanciesController.changeVacancyById);
vacanciesRouter.delete("/:id", vacanciesController.deleteVacancyById);

module.exports = vacanciesRouter;
