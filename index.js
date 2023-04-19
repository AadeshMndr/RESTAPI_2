const express = require("express");
const app = express();

// const productsRouter = require("./api/routes/products");

// app.use("/products", productsRouter);

app.get("/", (req, res, next) => {
    res.send("hello");
});

app.listen(3000, () => {
  console.log("Running on port 3000.");
});
// Export the Express API
module.exports = app;