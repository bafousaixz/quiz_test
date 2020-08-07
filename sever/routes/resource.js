var express = require('express');
var router = express.Router();
var resource = require('../models/test_resource')

/* GET home page. */
router.get('/resource', async(req, res) => {
    try {
        const result = await resource.find().exec();
        res.send(result);
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/resource', async(req, res) => {
    try {
        let rs = new resource(req.body)
        let result = await rs.save();
        res.send(result);
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;