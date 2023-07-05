const { addProductController } = require("../controllers/productController");

const productRouter = require("express").Router();

productRouter.post("/addProduct", addProductController);

module.exports = productRouter;
