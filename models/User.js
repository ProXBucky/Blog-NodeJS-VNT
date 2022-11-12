import mongoose from 'mongoose'
const Schema = mongoose.Schema;
import bcrypt from 'bcrypt'

// 2 user luôn khác nhau
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
    });

// Mã hóa mật khẩu
UserSchema.pre('save', function (next) {
        const user = this
        bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
    })
})
    // export model
    const User = mongoose.model('User', UserSchema);
export default User ;