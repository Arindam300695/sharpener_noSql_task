const User = require("../models/userModel");

// creating a new user and saving it to the database
const createUserController = async (req, res) => {
    const { userName, email, password } = req.body;
    try {
        if (!userName || !email || !password)
            return res.json({ error: "all the fields are required" });
        const user = new User(userName, email, password);
        const createdUser = await user.save();
        return res.json({
            message: "user created and saved to the database successfully",
            createdUser,
        });
    } catch (error) {
        return res.json({ error: error.message });
    }
};

// finding a user using id
const findSingleUserController = async (req, res) => {
    const { _id } = req.params;
    try {
        const user = await User.findById(_id);
        return res.json(user);
    } catch (error) {
        return res.json({ error: error.message });
    }
};

module.exports = { createUserController, findSingleUserController };
