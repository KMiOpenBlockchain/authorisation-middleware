// Authorization Rules Middleware
// authLibrary.js
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
