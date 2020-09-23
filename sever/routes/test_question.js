var express = require('express');
var router = express.Router();
var question = require('../models/test_question')
var answers = require('../models/test_answers')

router.get('/', async(req, res) => {
    try {
        const result = await question.find().exec();
        res.send(result);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get('/:id', async(req, res) => {
    const id = req.params.id;
    question.aggregate([{
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
            var test = result.filter(item => (
                item.test_id == id
            ));
            res.send(test);
        }
    });
});

router.post('/', async(req, res) => {
    try {
        let rs = new question(req.body);
        let result = await rs.save();
        res.send(result);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put('/:id', async(req, res) => {
    try {
        const rs = await question.findById(req.params.id).exec();
        rs.set(req.body);
        console.log(rs);
        const result = await rs.save();
        res.send(result);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.delete("/:id", async(req, res) => {
    try {
        const result = await question.deleteOne({ _id: req.params.id }).exec();
        res.send(result);

    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;