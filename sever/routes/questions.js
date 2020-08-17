var express = require('express');
var router = express.Router();
var questions = require('../models/test_questions')

/* GET home page. */
router.get('/questions', async(req, res) => {
    try {
        const result = await questions.find().exec();
        res.send(result);
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/questions', async(req, res) => {
    try {
        let rs = new questions(req.body);
        let result = await rs.save();
        res.send(result);
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.put('/questions/:id', async(req, res) => {
    try {
        const rs = await questions.findById(req.params.id).exec();
        rs.set(req.body);
        const result = await rs.save();
        res.send(result);
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.delete("/questions/:id", async(req, res) => {
    try {
        const result = await questions.deleteOne({ _id: req.params.id }).exec();
        res.send(result);

    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;