const logoutController = (req,res) => {
    req.session.destroy(() => {
        res.redirect('/')
    })
}

export default logoutController