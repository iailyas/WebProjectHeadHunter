const Router = require("express");
const summaryRouter = new Router();
const summaryController = require("../controllers/summaryController");

summaryRouter.get("/:id", summaryController.findSummary);
summaryRouter.get("/", summaryController.findAllSummaries);
summaryRouter.post("/", summaryController.addSummary);
summaryRouter.put("/:id", summaryController.changeSummary);
summaryRouter.delete("/:id", summaryController.deleteSummary);

module.exports = summaryRouter;
