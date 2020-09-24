var express = require('express');
var router = express.Router();
var tests = require('../models/tests');
var users = require('../models/user.model');
var question = require('../models/test_question')
var test_result = require('../models/test_result');
var test_question = require('../models/test_question');

//get list results and user
router.get("/:ss", async(req, res) => {
    try {
        const id = req.params.ss;
        const results = await test_result.find({ test_id: id }).lean().exec();
        const user = await users.find().exec();
        rs = results.map(result => {
            const u = user.find(u => u._id.toString() === result.user_id);
            result.user = u;
            return result;
        });
        res.send(rs);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
})

router.get("/", async(req, res) => {
    try {
        const results = await test_result.find().exec();
        res.send(results);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
})

//get result user after test
router.get("/user_test/:id", async(req, res) => {
    const r = await test_result.findById(req.params.id).exec();
    const _id = r._id;
    const user_id = r.user_id;
    const answer_right = r.answer_right;
    const score = r.score;
    const choose_answer = r.choose;
    const test_id = r.test_id;
    tests.aggregate([{
        $lookup: {
            from: test_question.collection.name,
            localField: '_id',
            foreignField: 'test_id',
            as: 'questionList',
        }
    }]).exec((err, result) => {
        if (err) {
            console.log(err);
        } else {
            const test = result.find(el => el._id = test_id);
            res.send({ _id, user_id, answer_right, score, choose_answer, test });
        }
    });
})

//nop bai & tinh diem
router.post("/user_test", async(req, res) => {
    let rs = new test_result(req.body);
    const test_id = rs.test_id;
    const user_id = rs.user_id;
    const choose = rs.choose;
    const name = rs.name;
    let answer_right = 0;
    const questions = await question.find().lean().exec();
    if (rs.test_id) {
        q = questions.filter(item => item.test_id.toString() === test_id.toString());
        tam = 10 / q.length;
        q.map(question => {
            question.questions.answerList.map(answer => {
                if (answer.right === true) {
                    rs.choose.map(choose => {
                        if (choose.toString() === answer._id.toString()) {
                            answer_right += 1;
                        }
                    });
                }
            });
        });
    }
    score = (tam * answer_right).toFixed(2);
    const result = new test_result({ test_id, user_id, choose, name, answer_right, score });
    const d = await result.save();
    res.send(d);
})

module.exports = router;