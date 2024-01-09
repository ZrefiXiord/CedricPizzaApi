const express = require('express');
const app = express();
const distributeurs = require("./include/distributeurs");


app.get('/', (req, res) => {
    distributeurs.getDistributeurs().then(distribs => {
        res.send(distributeurs.parseDistributeurs(JSON.parse(distribs)));
        console.log("Réponse /");
    });
});



const pizzas= require("./routes/pizzas");
app.use("/pizzas", pizzas);
app.listen(8080, () => {
    console.log("Listening...");
});

