const express = require("express");
const app = express();

const { MongoClient } = require("mongodb");

const URL = "mongodb+srv://admin:admin@nodetutorial.vmr3qt7.mongodb.net";

// const productsRouter = require("./api/routes/products");

// app.use("/products", productsRouter);

app.get("/", (req, res, next) => {
    res.send("hello");
});

app.get("/products", async (req, res, next) => {

    const client = await MongoClient.connect(URL);

    const db = client.db("TheMainDB");

    const collection = db.collection("products");

    const result = await collection.find().toArray();

    console.log(result);

    client.close();

    // res.send(result);
    res.status(200).json(result);
});

router.post("/", async (req, res, next) => {

    const product = {
        name: req.body.name,
        price: req.body.price,
    }

    const client = await MongoClient.connect(URL);

    const db = client.db("TheMainDB");

    const collection = db.collection("products");

    const result = await collection.insertOne(product);

    client.close();

    res.status(201).json("result: " + result);
});

app.listen(3000, () => {
  console.log("Running on port 3000.");
});
// Export the Express API
module.exports = app;