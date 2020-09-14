var express = require('express');
var router = express.Router();
var test_result = require('../models/test_result')
var tests = require('../models/tests');
var test_question = require('../models/test_question');
var users = require('../models/user.model');
var question = require('../models/test_question')
    /* GET home page. */
router.get("/test_results/:ss", async(req, res) => {
    try {
        const results = await test_result.find(req.params.id).lean().exec();
        const user = await users.find().exec();
        rs = results.map(result => {
            const u = user.find(u => u._id.toString() === result.user_id);
            result.user = u;
            return result
        });
        res.send(rs);
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.get("/test_results/", async(req, res) => {
    try {
        const results = await test_result.find().exec();
        res.send(results);
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})


/* GET detail. */
router.get("/test_result/:id", async(req, res) => {
    const r = await test_result.findById(req.params.id).exec();
    const _id = r._id
    const user_id = r.user_id
    const answer_right = r.answer_right
    const score = r.score
    const choose_answer = Object.values(r.choose)
    const test_id = r.test_id
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
            const test = result.find(el => el._id = test_id)
            res.send({ _id, user_id, answer_right, score, choose_answer, test })
        }
    });
})
router.post("/test_result", async(req, res) => {
    let rs = new test_result(req.body);
    const test_id = rs.test_id
    const user_id = rs.user_id
    const choose = rs.choose
    const name = rs.name
    let answer_right = 0;
    const questions = await question.find().lean().exec();
    if (rs.test_id) {
        q = questions.filter(item => item.test_id.toString() === test_id.toString())
        q.forEach(question => {
            question.questions.answerList.forEach(answer => {
                if (answer.Right === true) {
                    Object.values(rs.choose).forEach(choose => {
                        if (choose.toString() === answer._id.toString()) {
                            answer_right += 1;
                        }
                    });
                }
            });
        });
    }
    score = ((10.0 / q.length) * answer_right).toFixed(2)
    const result = new test_result({ test_id, user_id, choose, name, answer_right, score })
    const d = await result.save()
    res.send(d);
})

module.exports = router;