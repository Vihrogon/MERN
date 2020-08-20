const express = require('express');
const router = express.Router();

// message model
const Messages = require('../../models/Messages');

// @route  GET api/messages
// @desc   Get all messages
// @access Public
router.get('/', (req, res) => {
    Messages.find()
        .sort({ date: -1 })
        .then(messages => res.json(messages))
});

// @route  POST api/messages
// @desc   Create a message
// @access Public
router.post('/', (req, res) => {
    const newMessage = new Messages({
        author: req.body.author,
        msg: req.body.msg
    });

    newMessage.save().then(message => res.json(message));
});

// @route  DELETE api/messages
// @desc   Delete a message
// @access Public
router.delete('/:id', (req, res) => {
    Messages.findById(req.params.id)
        .then(message => message.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false, msg: err }));
});

module.exports = router;
