const Router = require("express");
const userinfoRouter = new Router();
const userinfoController = require("../controllers/userinfoController");

userinfoRouter.get("/:id", userinfoController.findUserInfoById);
userinfoRouter.get("/", userinfoController.findAllUserInfo);
userinfoRouter.post("/", userinfoController.addUserInfo);
userinfoRouter.put("/:id", userinfoController.changeUserInfoById);
userinfoRouter.delete("/:id", userinfoController.deleteUserInfoById);

module.exports = userinfoRouter;
