const express = require("express");
const router = express.Router();
const distribs = require("../include/distributors");

router.get('/', (req, res) => {
    distribs.getDistributors().then(distribsjson => {
        res.send(distribs.parseDistributors(JSON.parse(distribsjson)));
    });
});

module.exports = router;