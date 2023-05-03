import mongoose from 'mongoose'

const { Schema, model } = mongoose

const authorSchema = new Schema({
    author_name:{
        type : String,
        required: true,
        unique : true,
    },
    age:{
        type : Number
    },
    address:{
        type : String
    },

    rating : {
        type : Number,
        required: true
    }
})

const Author = model('Author', authorSchema)

export default Author