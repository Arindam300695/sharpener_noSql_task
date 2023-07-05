const mongodb = require("mongodb");
const { getdb } = require("../db/db");

class Product {
    constructor(title, description, price, imageUrl, id, userId) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
        this._id = id ? new mongodb.ObjectId(id) : null;
        this.userId = userId;
    }

    async save() {
        try {
            const db = getdb();
            const dbOp = db.collection("products");

            if (this._id) {
                const updatedResult = await dbOp.updateOne(
                    { _id: new mongodb.ObjectId(this._id) },
                    {
                        $set: {
                            title: this.title,
                            description: this.description,
                            price: this.price,
                            imageUrl: this.imageUrl,
                        },
                    }
                );
                return updatedResult;
            } else {
                const insertedResult = await dbOp.insertOne(this);
                return insertedResult;
            }
        } catch (error) {
            throw new Error(
                "Error inserting/updating document: " + error.message
            );
        }
    }

    static async findAll() {
        try {
            const db = getdb();
            const allProducts = await db
                .collection("products")
                .find()
                .toArray();
            return allProducts;
        } catch (error) {
            throw new Error("Error finding all products: " + error.message);
        }
    }

    static async findById(_id) {
        try {
            const db = getdb();
            const product = await db
                .collection("products")
                .find({ _id: new mongodb.ObjectId(_id) })
                .toArray();
            return product;
        } catch (error) {
            throw new Error("Error finding product by ID: " + error.message);
        }
    }

    static async deleteById(_id) {
        try {
            const db = getdb();
            const deletedResult = await db
                .collection("products")
                .deleteOne({ _id: new mongodb.ObjectId(_id) });
            return deletedResult;
        } catch (error) {
            throw new Error("Error deleting product by ID: " + error.message);
        }
    }
}

module.exports = Product;
