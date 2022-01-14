const Router = require("express");
const userRouter = new Router();
const userController = require("../controllers/userController");

userRouter.get("/auth", userController.check);
userRouter.get("/:id", userController.findUserById);
userRouter.get("/", userController.findUsers);
userRouter.get("/profile/", userController.profile);
userRouter.post("/new", userController.addUser);
userRouter.put("/:id", userController.changeUserById);
userRouter.delete("/:id", userController.deleteUserById);
userRouter.post("/registration", userController.registration);
userRouter.post("/login", userController.login);

module.exports = userRouter;
