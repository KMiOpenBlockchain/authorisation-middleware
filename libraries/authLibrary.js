// Authorization Rules Middleware
// authLibrary.js

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

  var tokenRoles = arrayToLowerCase(token.roles);

  const role = req.body.response_data.user.roles;
  const passedRoles = permissions.roles ? arrayToLowerCase(permissions.roles) : [] ;

  const intersection = passedRoles.filter(value=>tokenRoles.includes(value));

  for ( var roleIndex=0; roleIndex< role.length; roleIndex++){
    if (intersection.includes(role[roleIndex])){
      next();
      return;
    }
  }

  return res.status(401).json({
    status: 401,
    message: 'UNAUTHORIZED'
  });
}

exports.checkAuthorisation = checkAuthorisation
