var express = require('express');
var router = express.Router();
var tests = require('../models/tests');
var test_question = require('../models/test_question');
var questions = require('../models/test_questions');
var answers = require('../models/test_answers');

router.get('/tests', async(req, res) => {
    tests.aggregate([{
        $lookup: {
            from: test_question.collection.name,
            localField: '_id',
            foreignField: 'test_id',
            as: 'questionList',
        }
    }]).exec((err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result);
        }
    });
    // try {
    //     const result = await tests.find().exec();
    //     res.send(result);
    // } catch (error) {
    //     res.status(400).send(error)
    // }
})

router.get('/testquestions', async(req, res) => {
    try {
        const result = await test_question.find().exec();
        res.send(result);
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/tests', async(req, res) => {
    const { name, amount, easy, medium, high, resource_id } = req.body
    const rs = new tests(req.body)
    const result_test = await rs.save();
    const test_id = result_test._id

    questions.aggregate([{
            $lookup: {
                from: answers.collection.name,
                localField: '_id',
                foreignField: 'question_id',
                as: 'answerList',
            }
        },
        { $match: { Level: "Medium" } },
        { $sample: { size: medium } }
    ]).exec(async(err, result) => {
        result.forEach(questions => {
            const tq = new test_question({ test_id, questions })
            tq.save();
        });
        res.send("oke")


    });

    questions.aggregate([{
            $lookup: {
                from: answers.collection.name,
                localField: '_id',
                foreignField: 'question_id',
                as: 'answerList',
            }
        },
        { $match: { Level: "Easy" } },
        { $sample: { size: easy } }
    ]).exec(async(err, result) => {
        result.forEach(questions => {
            const tq = new test_question({ test_id, questions })
            tq.save();
        });
    });

    questions.aggregate([{
            $lookup: {
                from: answers.collection.name,
                localField: '_id',
                foreignField: 'question_id',
                as: 'answerList',
            }
        },
        { $match: { Level: "High" } },
        { $sample: { size: high } }
    ]).exec(async(err, result) => {
        result.forEach(questions => {
            const tq = new test_question({ test_id, questions })
            tq.save();
        });
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