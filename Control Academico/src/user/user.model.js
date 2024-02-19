import { Schema, model } from "mongoose";

const userSchema = Schema({
    name: {
        type: String,
        required : true
    },
    surname:{
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
        type: Schema.Types.ObjectId,
        ref: 'course',
        required: true
    },
    secondCourse:{
        type: Schema.Types.ObjectId,
        ref: 'course',
    },
    thirdCourse:{
        type: Schema.Types.ObjectId,
        ref: 'course',
        required: false
    }
}, {
        versionKey: false
    
})

export default model('user', userSchema)