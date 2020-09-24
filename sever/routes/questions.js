var express = require('express');
var router = express.Router();
var answers = require('../models/test_answers');
var questions = require('../models/test_questions');

router.get('/', async(req, res) => {
    questions.aggregate([{
        $lookup: {
            from: answers.collection.name,
            localField: '_id',
            foreignField: 'question_id',
            as: 'answerList',
        }
    }]).exec((err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
})

router.post('/', async(req, res) => {
    try {
        let rs = new questions(req.body);
        let result = await rs.save();
        res.send(result);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put('/:id', async(req, res) => {
    try {
        const rs = await questions.findById(req.params.id).exec();
        rs.set(req.body);
        const result = await rs.save();
        res.send(result);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.delete("/:id", async(req, res) => {
    try {
        const result = await questions.deleteOne({ _id: req.params.id }).exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;