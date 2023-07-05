const Product = require("../models/productModel");

const addProductController = async (req, res) => {
    const { title, description, price, imageUrl } = req.body;
    try {
        if (!title || !description || !price || !imageUrl)
            return res.json({ error: "all the fields are required" });
        const product = new Product(title, price, description, imageUrl);
        const result = await product.save();
        console.log(result);
        return res.send({
            messag: "product added to the datbase successfully",
            result,
        });
    } catch (error) {
        return res.json({ error: error.message });
    }
};

module.exports = { addProductController };
