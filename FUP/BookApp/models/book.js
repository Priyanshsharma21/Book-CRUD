import mongoose from 'mongoose'

const { Schema, model } = mongoose

const bookSchema = new Schema({
        name: {
            type : String,
            required: true
        },
        author_id:{
            type : Number,
            required: true
        },
        price:{
            type : Number
        },
        ratings:{
            type : Number
        },
})

const Book = model('Book', bookSchema)

export default Book