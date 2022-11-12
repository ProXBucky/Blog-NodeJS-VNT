// import express from 'express'
// import path from 'path'
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const app = express()
// const port = 3000 

// import BlogPost from './models/BlogPost.js'

// import mongoose from 'mongoose'
// mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true})

// import bodyParser from 'body-parser'
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))

// import fileUpload  from 'express-fileupload'
// app.use(fileUpload())

// app.set('view engine', 'ejs')
// app.use(express.static('public'))


// mongoose.connect('mongodb://localhost/test_my_database', { useNewUrlParser: true });


// app.post('/posts/store', (req, res) =>  {
//     let image = req.files.image;
//     image.mv(path.resolve(__dirname, 'public/upload', image.name),  (error) => {
//         BlogPost.create({
//             ...req.body,
//             image: '/upload/' + image.name
//         }, (err) => {
//             res.redirect('/')
//         }) 
//         console.log(image.name);
//     })
// })