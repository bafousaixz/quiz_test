var express = require('express');
var router = express.Router();
var test_result = require('../models/test_result')
var tests = require('../models/tests');
var test_question = require('../models/test_question');
var users = require('../models/user.model');

/* GET home page. */
router.get("/test_result", async(req, res) => {
    try {
        const result = await test_result.find().exec();
        const user = await users.find().exec();
        // results.forEach(element => {
        //     const user = Model.findById(result[0].user_id).exec();
        //     Object.assign(element, { user: "2" });
        // });
        res.send({ result, user });
    } catch (error) {
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
    try {
        let rs = new test_result(req.body);
        let result = await rs.save();
        res.send(result);
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

module.exports = router;