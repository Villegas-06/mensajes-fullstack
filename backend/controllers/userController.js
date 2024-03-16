const User = require('../models/User');

let users = [];

exports.addUser = function (id, username) {
    const user = new User(id, username);
    users.push(user);
}

exports.removeUser = function (id) {
    users = users.filter(user => user.id !== id);
}

exports.getUserById = function (id) {
    return users.find(user => user.id === id);
}

exports.getAllUsers = function () {
    return users;
}