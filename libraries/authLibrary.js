// Authorization Rules Middleware
// authLibrary.js

const checkAuthorisation = (req, res, next, permissions) => {
  const role = req.body.response_data.user.roles;
  const passedRoles = permissions.roles ? permissions.roles : [] ;

  for ( var roleIndex=0; roleIndex< role.length; roleIndex++){
    if (passedRoles.includes(role[roleIndex])){
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
