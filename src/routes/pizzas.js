const express = require("express");
const router = express.Router();
const parsers = require("../utilities/parsers");
const requests = require("../utilities/requests");


router.get('/', (req, res) => {
    res.send("no id param")
});

router.get('/:id', (req, res) => {
    let id=req.params.id;
    requests.pizzasRequest(id).then(pizzas => {
        res.send(parsers.parsePizzas(JSON.parse(pizzas)));
    }).catch(err =>{
        res.send("unknown id");
    });
});

module.exports = router;