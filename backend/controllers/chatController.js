'use strict'

const Message = require('../models/Message');

let messages = [];

exports.addMessage = function (from, to, content) {
    const message = new Message(from, to, content);
    messages.push(message);
}

exports.getMessagesForUser = function (userId) {
    return messages.filter(msg => msg.to === userId || msg.for === userId);
}

