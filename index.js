import express from 'express'
const app = express()
const port = 3000 

import bodyParser from 'body-parser'
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

import expressSession from 'express-session'
app.use(expressSession({
    secret: 'keyboard cat'
}))

import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})

app.set('view engine', 'ejs')
app.use(express.static('public'))

import fileUpload  from 'express-fileupload';
app.use(fileUpload());

global.loggedIn = null;
    app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
});

// <=====================================================>

// NAVBAR

//HomeNavbar
import homeController from './controller/home.js';
app.get('/', homeController);

// PostNavbar
import getPostController from './controller/getPost.js';
app.get('/post/:id' , getPostController)

// LogoutNavbar
import logoutController from './controller/logout.js'
app.get('/auth/logout' , logoutController)

// <=====================================================>

// POST BLOG

import authMiddleware from './middleware/authMiddleware.js'
import postController from './controller/post.js'
app.get('/posts/create', authMiddleware , postController)

import postStoreController from './controller/postStore.js';
app.post('/posts/store', authMiddleware , postStoreController)

import validateMiddleware from './middleware/validationMiddleware.js';
app.use('/posts/store', validateMiddleware)

// <=====================================================>
// LOGIN/REGISTER  USER

import redirectIfAuthenticatedMiddleware from './middleware/redirectIfAuthenticatedMiddleware.js'

import newUserController from './controller/newUser.js';
app.get('/auth/register', redirectIfAuthenticatedMiddleware , newUserController)

import storeUserController from './controller/storeUser.js'
app.post('/users/register' ,redirectIfAuthenticatedMiddleware, storeUserController)

import loginController from './controller/login.js'
app.get('/auth/login', redirectIfAuthenticatedMiddleware , loginController)

import loginUserController from './controller/loginUser.js'
app.post('/users/login', redirectIfAuthenticatedMiddleware , loginUserController)

// <=====================================================>

//     404
app.use((req, res) => res.render('notfound'));

app.listen(port , () =>{
    console.log(`APP IS RENDER IN ${port}`)
})
