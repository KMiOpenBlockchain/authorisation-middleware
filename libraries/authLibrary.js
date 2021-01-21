// Authorization Rules Middleware
// authLibrary.js
require('../config.js');

var jwt = require('jsonwebtoken');

function arrayToLowerCase (data) {
  var result = [];
  for ( var index = 0; index< data.length; index++){
    result.push(data[index].toLowerCase());
  }
  return result;
}

const checkAuthorisation = (req, res, next, permissions) => {
  var tokenFromJson = req.body.response_data.token.split(' ')[1];
  var token = jwt.decode(tokenFromJson);

  if (!jwt.verify(tokenFromJson, cfg.secret)){
    return res.status(401).json({
      status: 401,
      message: 'UNAUTHORISED'
    });
  }

  var tokenRoles = arrayToLowerCase(token.roles);
  const passedRoles = permissions.roles ? arrayToLowerCase(permissions.roles) : [] ;
  const intersection = passedRoles.filter(value=>tokenRoles.includes(value));

  if (intersection.length > 0){
    next();
    return;
  }

  return res.status(401).json({
    status: 401,
    message: 'UNAUTHORIZED'
  });
}

exports.checkAuthorisation = checkAuthorisation
