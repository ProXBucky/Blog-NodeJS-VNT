import BlogPost from '../models/BlogPost.js'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
const __dirname = path.resolve(path.dirname(''));

const postStoreController = (req, res) => {
        let image = req.files.image;
        image.mv(path.resolve(__dirname, 'public/upload', image.name),(error)  => {
            BlogPost.create({...req.body,
            image: '/upload/' + image.name,
            }, (err) => {
            res.redirect('/')
            })
        })
}
export default postStoreController;