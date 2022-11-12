import User from '../models/User.js'

const storeUserController = (req,res) => {
    User.create(req.body,(error , users) => {
        if(error){
            return res.redirect('/auth/register')
        }
        else{
            res.redirect('/')
        }
    })
}

export default storeUserController ;