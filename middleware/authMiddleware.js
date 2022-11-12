import User from '../models/User.js'
const authMiddleware = (req, res, next) => {
    User.findById(req.session.userId, (error, user) => {
    if (error || !user) return res.redirect('/')
    next()
  })
}

export default authMiddleware;