const redirectIfAuthenticatedMiddleware = (req, res, next) => {
    if (req.session.userId) {
         return res.redirect('/') // if user logged in, redirect to home page
    }
    next()
}

export default redirectIfAuthenticatedMiddleware