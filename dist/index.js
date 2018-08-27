'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _users = require('./src/models/users');

var _users2 = _interopRequireDefault(_users);

var _pets = require('./src/models/pets');

var _pets2 = _interopRequireDefault(_pets);

var _especificaciones = require('./src/models/especificaciones');

var _especificaciones2 = _interopRequireDefault(_especificaciones);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _graphql = require('./src/graphql');

var _graphql2 = _interopRequireDefault(_graphql);

var _createToken = require('./src/resolve/createToken');

var _verifyToken = require('./src/resolve/verifyToken');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;
var mongoURI = process.env.MONGODB_URI || "mongodb://Larry:Hitme43@ds263571.mlab.com:63571/sento-dog";

_mongoose2.default.connect(mongoURI, { useNewUrlParser: true });
var db = _mongoose2.default.connection;
db.on('err', function () {
    return console.log("error en db");
}).once('open', function () {
    return console.log("conectado a db");
});

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());
app.get('/', function (req, res) {
    res.send('Ya se prendio esta cosa :v');
});

app.post('/user/create', function (req, res) {
    var user = req.body;
    _users2.default.create(user).then(function (user) {
        return res.status(201).json({ message: "usuario creado",
            id: user._id });
    }).catch(function (err) {
        console.log(err);
        return res.status(400).json(err);
    });
});

app.post('/pet/create', function (req, res) {
    var pet = req.body;
    _pets2.default.create(pet).then(function (pet) {
        return res.status(201).json({ message: "mascota creada",
            id: pet._id });
    }).catch(function (err) {
        console.log(err);
        return res.status(400).json(err);
    });
});

app.post('/pet/especificacion', function (req, res) {
    var especificacion = req.body;
    _especificaciones2.default.create(especificacion).then(function (especificacion) {
        return res.status(201).json({ message: "Especificacion asignada",
            id: especificacion._id });
    }).catch(function (err) {
        console.log(err);
        return res.status(400).json(err);
    });
});

app.post('/login', function (req, res) {
    var token = (0, _createToken.createToken)(req.body.name, req.body.password).then(function (token) {
        res.status(201).json({ token: token });
    }).catch(function () {
        res.status(403).json({ message: 'Login Failed :(' });
    });
});

app.use('/graphql', function (req, res, next) {
    var token = req.headers['authorization'];
    try {
        req.user = (0, _verifyToken.verifyToken)(token);
        next();
    } catch (err) {
        res.status(401).json({ message: err.message });
        console.log(err);
    }
});

app.use('/graphql', (0, _expressGraphql2.default)(function (req, res) {
    return {
        schema: _graphql2.default,
        graphiql: true,
        pretty: true
    };
}));

app.listen(PORT, function () {
    console.log("server corriendo en el puerto " + PORT);
});