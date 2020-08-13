var express = require('express');
var router = express.Router();
var answer = require('../models/test_answers')

/* GET home page. */
router.get('/answers', async(req, res) => {
    try {
        const result = await answer.find().exec();
        res.send(result);
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/answers', async(req, res) => {
    try {
        let rs = new answer(req.body)
        let result = await rs.save();
        res.send(result);
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.delete("/answers/:id", async(req, res) => {
    try {
        var result = await answer.deleteOne({ _id: req.params.id }).exec();
        res.send(result);

    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;