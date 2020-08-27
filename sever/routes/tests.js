var express = require('express');
var router = express.Router();
var tests = require('../models/tests');
var questions = require('../models/test_questions');
var answers = require('../models/test_answers');

router.get('/tests', async(req, res) => {
    try {
        const result = await tests.find().exec();
        res.send(result);
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/tests', async(req, res) => {
    const { name, amount, resource_id } = req.body
    console.log(amount)
    questions.aggregate([{
            $lookup: {
                from: answers.collection.name,
                localField: '_id',
                foreignField: 'question_id',
                as: 'answerList',
            }
        },
        {
            $sample: {
                size: amount
            }
        },
        {
            $match: {
                Level: "Medium",
            }
        },
    ]).exec(async(err, result) => {
        if (err) {
            console.log(err)
            res.status(400).send(err)
        } else {
            const rs = new tests({ name, amount, resource_id, result });
            await rs.save();
            res.send(rs);
        }
    });
})

router.delete("/tests/:id", async(req, res) => {
    try {
        const result = await tests.deleteOne({ _id: req.params.id }).exec();
        res.send(result);

    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;