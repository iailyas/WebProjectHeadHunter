const Router = require("express");
const portfolioRouter = new Router();
const portfolioController = require("../controllers/portfolioController");

portfolioRouter.get("/:id", portfolioController.findPortfolio);
portfolioRouter.get("/", portfolioController.findAllPortfolio);
portfolioRouter.post("/", portfolioController.addPortfolio);
portfolioRouter.put("/:id", portfolioController.changePortfolio);
portfolioRouter.delete("/:id", portfolioController.deletePortfolio);

module.exports = portfolioRouter;
