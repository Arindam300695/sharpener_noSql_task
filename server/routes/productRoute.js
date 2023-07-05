const {
    addProductController,
    fetchAllProductsController,
    fetchSingleProductController,
    updateProductController,
    deletedProductController,
} = require("../controllers/productController");

const productRouter = require("express").Router();

productRouter.post("/addProduct/:userId", addProductController);
productRouter.get("/findProducts", fetchAllProductsController);
productRouter.get("/findSingleProduct/:_id", fetchSingleProductController);
productRouter.put("/updateProduct/:id", updateProductController);
productRouter.delete("/deleteProduct/:_id", deletedProductController);

module.exports = productRouter;
