const { getdb } = require("../db/db");
const mongodb = require("mongodb");

class User {
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
    async save() {
        const db = getdb();
        try {
            const isnertedUser = await db.collection("users").insertOne(this);
            return isnertedUser;
        } catch (error) {
            throw new Error(
                "error while inserting a new user: ",
                error.message
            );
        }
    }

    static async findById(_id) {
        try {
            const db = getdb();
            const singleUser = await db
                .collection("users")
                .find({ _id: new mongodb.ObjectId(_id) })
                .toArray();
            return singleUser;
        } catch (error) {
            throw new Error("error while finding a user: ", error.message);
        }
    }
}

module.exports = User;
