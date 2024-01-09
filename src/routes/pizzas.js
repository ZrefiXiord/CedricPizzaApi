const express = require("express");
const router = express.Router();
const pizas = require("../include/pizzas");


router.get('/', (req, res) => {
    res.send("no id param")
});

router.get('/:id', (req, res) => {
    let id=req.params.id;
    pizas.getPizzas(id).then(pizzas => {
        res.send(pizas.parsePizzas(JSON.parse(pizzas)));
    }).catch(err =>{
        res.send("unknown id");
    });
});

module.exports = router;