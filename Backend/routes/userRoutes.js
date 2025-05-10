const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.put('/user/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(user);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

router.delete('/user/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.send({ message: 'User deleted' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
