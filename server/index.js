// requiring npm packages
const express = require("express");
const cors = require("cors");
const { connect } = require("./db/db");
const productRouter = require("./routes/productRoute");

// initializing the express app
const app = express();

// using express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// listening to the server
const myFun = async () => {
    try {
        await connect();
        app.listen(8080, (err) => {
            if (!err) console.log("app is listening on 8080");
            else console.log("error from app.listen : ", err.message);
        });
    } catch (error) {
        console.log("error from connect : ", error.message);
    }
};

myFun();

// test routes
app.get("/", (req, res) => {
    res.send("hi from server");
});

// using routes
app.use("/product", productRouter);
