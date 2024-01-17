const express = require("express");
const router = express.Router();
const parsers = require("../utilities/parsers");
const requests = require("../utilities/requests");

router.get('/', (req, res) => {
    requests.distributorsRequest().then(distribsjson => {
        res.send(parsers.parseDistributors(JSON.parse(distribsjson)));
    });
});

module.exports = router;