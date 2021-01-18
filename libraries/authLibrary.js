// Authorization Rules Middleware
// authLibrary.js

const checkAuthorisation = (req, res, next, permissions) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(403).json({
      status: 403,
      message: 'FORBIDDEN'
    })
  } else {
    const token = req.body["response_data"]["token"];

    if (token) {
      return verifyTokenAndGetUID(token)
        .then((userId) => {
        // ------------------------------------
        // HI I'M THE UPDATED CODE BLOCK, LOOK AT ME
        // ------------------------------------
          res.locals.auth = {
            userId
          }
          next()
        })
        .catch((err) => {
          logger.logError(err)

          return res.status(401).json({
            status: 401,
            message: 'UNAUTHORIZED'
          })
        })
    } else {
      return res.status(403).json({
        status: 403,
        message: 'FORBIDDEN'
      })
    }
  }
}
exports.checkAuthorisation = checkAuthorisation
