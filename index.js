const express = require("express");
const app = express();

const productsRouter = require("./api/routes/products");

app.use("/products", productsRouter);

app.listen(5000, () => {
  console.log("Running on port 5000.");
});
// Export the Express API
module.exports = app;