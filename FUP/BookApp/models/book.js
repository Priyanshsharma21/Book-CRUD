import mongoose from 'mongoose'

const { Schema, model } = mongoose

const bookSchema = new Schema({
        name: {
            type : String,
            required: true,
            unique : true
        },
        author : {
            type : Schema.ObjectId,
            ref : 'Author',
            required : true
        },
        publisher : {
            type : Schema.ObjectId,
            ref : 'Publisher',
            required : true
        },
        price:{
            type : Number
        },
        ratings:{
            type : Number
        },
        isHardCover : {
            type : Boolean,
            default : false
        }
},{timestamps : true})

const Book = model('Book', bookSchema)

export default Book