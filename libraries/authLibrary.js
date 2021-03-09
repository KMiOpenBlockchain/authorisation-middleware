// Authorization Rules Middleware
// authLibrary.js

var sqlite3=require('sqlite3');
if (typeof cfg ==='undefined') {
  require('../config.js');
}

var jwt = require('jsonwebtoken');

function arrayToLowerCase(data) {
  var result = [];
  for (var index = 0; index < data.length; index++) {
    result.push(data[index].toLowerCase());
  }
  return result;
}

function possiblyCreateDatabase() {
}

function replayFieldIsInDataBase(connection, replayField) {
  return false;
}

function addReplayFieldToDataBase(replayField) {

}

const checkAuthorisation = (req, res, next, permissions) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      status: 401,
      message: 'UNAUTHORISED, Wrong header'
    });
  }

  var tokenFromHeaders = req.headers.authorization.split(' ')[1];
  var token = jwt.decode(tokenFromHeaders);

  try {
    jwt.verify(tokenFromHeaders, cfg.authorisation.secret);

    var conenction = possiblyCreateDatabase();
    if (!replayFieldIsInDataBase(connection, token.replayField)){
      addReplayFieldToDataBase(connection, token.replayField)
    } else {
      return res.status(401).json({
        status: 401,
        message: 'UNAUTHORISED, trying to reuse token'
      });
    }

  } catch (error) {
    return res.status(401).json({
      status: 401,
      message: 'UNAUTHORISED, does not verify'
    });
  }

  var tokenRoles = arrayToLowerCase(token.roles);
  const passedRoles = permissions.roles ? arrayToLowerCase(permissions.roles) : [];
  const intersection = passedRoles.filter(value => tokenRoles.includes(value));

  if (intersection.length > 0) {
    next();
    return;
  }

  return res.status(401).json({
    status: 401,
    message: 'UNAUTHORIZED, no permission'
  });
}

exports.checkAuthorisation = checkAuthorisation
