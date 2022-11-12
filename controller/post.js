const postController = (req,res)=>{
    // Nếu đã đăng nhập mới được đăng bài
    if (req.session.userId) {
        return res.render('create');
    }
    else res.redirect('/auth/login')
}

export default postController;