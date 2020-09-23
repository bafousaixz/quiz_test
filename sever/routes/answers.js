var express = require('express');
var router = express.Router();
var answer = require('../models/test_answers')

/* GET home page. */
router.get("/", async(req, res) => {
    try {
        const result = await answer.find().exec();
        res.send(result);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post("/", async(req, res) => {
    try {
        let rs = new answer(req.body);
        let result = await rs.save();
        res.send(result);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put("/:id", async(req, res) => {
    try {
        let value = await answer.findById(req.params.id).exec();
        value.set(req.body);
        let result = await value.save();
        res.send(result);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.delete("/:id", async(req, res) => {
    try {
        var result = await answer.deleteOne({ _id: req.params.id }).exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;