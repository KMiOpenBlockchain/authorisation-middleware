const jwt = require('jsonwebtoken');
require('../config.js');

const tokenAcademic = {
        "id": 1,
        "email": "example1@gmail.com",
        "name": "chuck tingle",
        "roles": [
            "academic"
        ]
};

const tokenStudent = {
        "id": 2,
        "email": "example2@gmail.com",
        "name": "tingle the elf",
        "roles": [
            "student"
        ]
};

var academic = jwt.sign(tokenAcademic, cfg.authorisation.secret);
console.log('Academic ' + academic);

var student = jwt.sign(tokenStudent, cfg.authorisation.secret);
console.log('Student ' + student);