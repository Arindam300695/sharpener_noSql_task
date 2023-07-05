const { getdb } = require("../db/db");

// create a product model which contains fields like title, description, price and imageUrl
class Product {
    constructor(title, description, price, imageUrl) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
    async save() {
        try {
            const db = getdb();
            const insertedResult = await db
                .collection("products")
                .insertOne(this);
            return insertedResult;
        } catch (error) {
            console.log("error from inserting document: ", error.message);
        }
    }
}

module.exports = Product;
