var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
var tests = require('../models/tests');
var test_question = require('../models/test_question');
var questions = require('../models/test_questions');
var answers = require('../models/test_answers');
var test_result = require('../models/test_result')

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
})

router.get('/test/:id', async(req, res) => {
    try {
        const result = await tests.findById(req.params.id).exec();
        res.send(result);
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
});

router.get('/tests/:id', async(req, res) => {
    const id = req.params.id;
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
            const test = result.find(item => (
                item._id == id
            ));
            test.questionList.forEach(question => {
                question.questions.answerList.forEach(answer => {
                    delete answer.right
                });
            });
            res.send(test);
        }
    });
});

router.post('/tests', async(req, res) => {
    const { name, time, amount, easy, medium, high, resource_id } = req.body
    const rs = new tests(req.body)
    const result_test = await rs.save();
    res.send(result_test)
    const test_id = result_test._id

    questions.aggregate([{
            $lookup: {
                from: answers.collection.name,
                localField: '_id',
                foreignField: 'question_id',
                as: 'answerList',
            }
        },
        { $match: { level: "Medium" } },
        { $sample: { size: medium } }
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
        { $match: { level: "Easy" } },
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
        { $match: { level: "High" } },
        { $sample: { size: high } }
    ]).exec(async(err, result) => {
        result.forEach(questions => {
            const tq = new test_question({ test_id, questions })
            tq.save();
        });
    });

})

router.post('/test', async(req, res) => {
    try {
        const pass = req.body.password;
        const id = req.body._id;
        const rs = await tests.findById(id).exec();
        const hass = bcrypt.compare(pass, rs.password, (err, result) => {
            if (result === true) {
                res.send(rs)
            } else {
                res.send('')
            }
        });
        console.log(rs.password)
        if (hass) {
            res.send(rs)
        }
    } catch (error) {
        res.status(400).send(error)
    }
})

router.put('/tests/:id', async(req, res) => {
    try {
        const pass = req.body.password
        const hash = bcrypt.hashSync(pass, 8);
        const rs = await tests.findById(req.params.id).exec();
        rs.set(rs.password = hash);
        const result = await rs.save();
        res.send(result);
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.delete("/tests/:id", async(req, res) => {
    try {
        const id = req.params.id
        const result = await tests.deleteOne({ _id: id }).exec();
        const q = await test_question.deleteMany({ test_id: id });
        const t = await test_result.deleteMany({ test_id: id });
        res.send(result);

    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});

module.exports = router;