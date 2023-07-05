const {
    createUserController,
    findSingleUserController,
} = require("../controllers/userController");

const userRouter = require("express").Router();

userRouter.post("/createUser", createUserController);
userRouter.get("/findUser/:_id", findSingleUserController);

module.exports = userRouter;
