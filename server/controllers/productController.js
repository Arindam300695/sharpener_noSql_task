const Product = require("../models/productModel");

// creating a new product and saving it to the database
const addProductController = async (req, res) => {
    const { title, description, price, imageUrl } = req.body;
    try {
        if (!title || !description || !price || !imageUrl)
            return res.json({ error: "all the fields are required" });
        const product = new Product(title, description, price, imageUrl);
        const result = await product.save();
        console.log(result);
        return res.send({
            message: "product added to the datbase successfully",
            result,
        });
    } catch (error) {
        return res.json({ error: error.message });
    }
};

// fethcing all the products available to the datbase
const fetchAllProductsController = async (req, res) => {
    try {
        const allProducts = await Product.findAll();
        return res.json(allProducts);
    } catch (error) {
        return res.json({ error: error.message });
    }
};

// fetching single product based on product id
const fetchSingleProductController = async (req, res) => {
    const { _id } = req.params;
    console.log(_id);
    try {
        const singleProduct = await Product.findById(_id);
        console.log(singleProduct);
        return res.json(singleProduct);
    } catch (error) {
        return res.json({ error: error.message });
    }
};

// updating a product
const updateProductController = async (req, res) => {
    const { title, description, price, imageUrl } = req.body;
    const { id } = req.params;
    console.log(id);
    try {
        if (!title || !description || !price || !imageUrl)
            return res.json({ error: "all the fields are required" });
        const product = new Product(title, description, price, imageUrl, id);
        const result = await product.save();
        console.log(result);
        return res.send({
            message: "product updated successfully",
            result,
        });
    } catch (error) {
        return res.json({ error: error.message });
    }
};

// deleting a product from the database
const deletedProductController = async (req, res) => {
    const { _id } = req.params;
    try {
        const result = await Product.deleteById(_id);
        return res.json({ message: "product deleted successfully", result });
    } catch (error) {
        return res.json({ error: error.message });
    }
};

module.exports = {
    addProductController,
    fetchAllProductsController,
    fetchSingleProductController,
    updateProductController,
    deletedProductController,
};
