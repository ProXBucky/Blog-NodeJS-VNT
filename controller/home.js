import BlogPost from '../models/BlogPost.js'

const homeController = (req, res) =>{
    BlogPost.find({},(err,posts)=>{
        res.render('index',{
            blogposts:posts
        })
    })
}
export default homeController ;