const Router = require("express");
const companyRouter = new Router();
const companyController = require("../controllers/companyController");

companyRouter.get("/:id", companyController.findCompany);
companyRouter.get("/", companyController.findAllCompanies);
companyRouter.post("/new", companyController.addCompany);
companyRouter.put("/:id", companyController.changeCompany);
companyRouter.delete("/:id", companyController.deleteCompany);

module.exports = companyRouter;
