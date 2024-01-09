const express = require('express');
const app = express();

const pizzas= require("./routes/pizzas");
app.use("/pizzas", pizzas);

const distributors = require("./routes/distributors");
app.use("/distributors", distributors);

app.listen(8080, () => {
    console.log("Listening...");
});
