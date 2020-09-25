var express = require('express');
var router = express.Router();
var answers = require('../models/test_answers');
var resource = require('../models/test_resource');
var questions = require('../models/test_questions');

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
        const id = req.params.id;
        const result = await resource.deleteOne({ _id: id }).exec();
        const question = await questions.deleteMany({ resource_id: id });
        const answer = await answers.deleteMany({ resource_id: id }).exec();
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