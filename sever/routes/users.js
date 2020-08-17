var express = require('express');
var router = express.Router();
var Model = require('../models/user.model')
var auth = require('../middleware/auth')


// Get all users
router.get('/list', async(req, res) => {
    try {
        const user = await Model.find().exec();
        res.send(user);
    } catch (error) {
        res.status(400).send(error)
    }
})

//Get a user
router.get('/list/:id', async(req, res) => {
    try {
        const userID = await Model.findById(req.params.id).exec()
        res.send(userID);
    } catch (error) {
        res.status(400).send(error)
    }
});


router.post('/users', async(req, res) => {
    // Create a new user
    try {
        const user = new Model(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

router.post('/users/login', async(req, res) => {
    //Login a registered user
    try {
        const { username, hash } = req.body
        const user = await Model.findByCredentials(username, hash)
        if (!user) {
            return res.status(401).send({ error: 'Login failed! Check authentication credentials' })
        }
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }
})


router.get('/users/me', auth, async(req, res) => {
    // View logged in user profile
    // console.log(req.user)
    res.send(req.user)
})

router.put('/users/me', auth, async(req, res) => {
    try {
        const u = req.user
        u.set(req.body)
        const result = await u.save();
        res.send(result)
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})


router.post('/users/me/logout', auth, async(req, res) => {
    // Log user out of the application
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/users/me/logoutall', auth, async(req, res) => {
    // Log user out of all devices
    try {
        req.user.tokens.splice(0, req.user.tokens.length)
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
})




module.exports = router;