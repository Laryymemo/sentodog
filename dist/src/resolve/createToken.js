'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createToken = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _users = require('../models/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secret = 'ejemplodeairbn';
var expiresIn = '1y';

var createToken = exports.createToken = function createToken(name, password) {

    if (!name || !password) {
        return false;
    }

    var compare = new Promise(function (resolve, reject) {
        _users2.default.findOne({ 'name': name }).then(function (user) {
            console.log(user);
            if (!user) reject(false);
            user.comparePassword(password, function (err, isMatch) {
                console.log(isMatch);
                if (isMatch) {
                    var payload = {
                        name: user.name,
                        id: user._id
                    };
                    var token = _jsonwebtoken2.default.sign(payload, secret, { expiresIn: expiresIn });
                    resolve(token);
                } else {
                    reject(false);
                }
            });
        }).catch(function (err) {
            return false;
        });
    });

    return compare;
};