import BlogPost from '../models/BlogPost.js'

const getPostController =  (req, res) => {
    BlogPost.findById(req.params.id, function(error, detailPost){
        res.render('post', {
        detailPost
        })
    })
}

export default getPostController ;