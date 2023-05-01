import mongoose from 'mongoose'

const { Schema, model } = mongoose

const authorSchema = new Schema({
    author_id:{
        type : Number,
        required: true
    },
    author_name:{
        type : String,
        required: true
    },
    age:{
        type : Number
    },
    address:{
        type : String
    }
})

const Author = model('Author', authorSchema)

export default Author