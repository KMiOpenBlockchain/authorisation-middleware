// Authorization Rules Middleware
// authLibrary.js

const checkAuthorisation = (req, res, next) => {
  const role = req.body.response_data.user.roles;
  const passedRoles = ["recruiter"];

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
