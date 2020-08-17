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

router.get('/resource/:id', async(req, res) => {
    try {
        const user = await resource.findById(req.params.id).exec();
        res.send(user);

    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/resource', async(req, res) => {
    try {
        const rs = new resource(req.body)
        const result = await rs.save();
        res.send(result);
    } catch (error) {
        res.status(400).send(error)
    }
})

router.put('/resource/:id', async(req, res) => {
    try {
        const value = await resource.findById(req.params.id).exec();
        value.set(req.body);
        const result = await value.save();
        res.send(result)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/resource/:id', async(req, res) => {
    try {
        const result = await resource.deleteOne({ _id: req.params.id }).exec();
        res.send(result);

    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;