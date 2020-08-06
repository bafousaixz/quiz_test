var express = require('express');
var router = express.Router();
var resource = require('../models/test_resource')

/* GET home page. */
router.get('/resource', async(req, res) => {
    try {
        const result = await resource.find().exec();
        res.send(result);
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

module.exports = router;