var express = require('express');
var router = express.Router();
var resource = require('../models/test_resource');

/* GET home page. */
router.get('/:s', async(req, res) => {
    try {
        const user_id = req.params.s;
        const result = await resource.find({ user_id: user_id }).exec();
        res.send(result);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get('/:id/:user_id', async(req, res) => {
    try {
        const { id, user_id } = req.params;
        const user = await resource.findById(id).exec();
        if (user.user_id === user_id) {
            res.send(user);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/', async(req, res) => {
    try {
        const rs = new resource(req.body);
        const result = await rs.save();
        res.send(result);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put('/:id', async(req, res) => {
    try {
        const value = await resource.findById(req.params.id).exec();
        value.set(req.body);
        const result = await value.save();
        res.send(result);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const result = await resource.deleteOne({ _id: req.params.id }).exec();
        res.send(result);

    } catch (error) {
        res.status(500).send(error);
    }
})

router.get('/', async(req, res) => {
    try {
        const result = await resource.find().exec();
        res.send(result);
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;