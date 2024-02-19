import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    surnmae:{
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minLength: [8, 'Password must be 8 characters'],
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        uppercase: true,
        enum: ['TEACHER', 'STUDENT'],
        required: true
    },
    firstCourse:{
        type: String,
        required: true
    },
    secondCourse:{
        type: String,
    },
    secondCourse:{
        type: String,
    }
})

export default mongoose.model('user', userSchema)