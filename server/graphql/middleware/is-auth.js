const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const authHeader = req.get('Authorization')
  //If the user is not autheticated, should pass info that lets subsequent requests know if can only access certain endpoints
  if (!authHeader) {
    req.isAuth = false
    return next()
  }
  const token = authHeader.split(' ')[1] // Bearer TOKEN
  if (!token || token === '') {
    req.isAuth = false
    return next()
  }
  let decodedToken = ''
  try {
    decodedToken = jwt.verify(token, process.env.SESSION_SECRET)
  } catch (error) {
    req.isAuth = false
    return next
  }
  if (!decodedToken) {
    req.isAuth = false
    return next()
  }
  req.isAuth = true
  req.userId = decodedToken
}
