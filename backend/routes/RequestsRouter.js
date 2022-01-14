const Router = require("express");
const requestsRouter = new Router();
const requestsController = require("../controllers/requestsController");

requestsRouter.get("/:id", requestsController.findRequest);
requestsRouter.get("/", requestsController.findAllRequests);
requestsRouter.post("/new", requestsController.addRequest);
requestsRouter.put("/:id", requestsController.changeRequest);
requestsRouter.delete("/:id", requestsController.deleteRequest);

module.exports = requestsRouter;
